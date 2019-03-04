<?php

namespace App\Form;

use App\Entity\Stage;
use App\Entity\Civilite;
use App\Entity\Stagiaire;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\BirthdayType;
use Symfony\Component\Form\Extension\Core\Type\DateTimeType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;

class StagiaireType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
        ->add('civilite', EntityType::class, [
            'class' => Civilite::class,
            'choice_label' => 'nomCivilite',
            'placeholder' => 'Choisir une civilité'
            ])
            ->add('nomStagiaire')
            ->add('prenomStagiaire')
            ->add('cpStagiaire', HiddenType::class, [
                'data' => 'cp',
            ])
            ->add('communeStagiaire')
            ->add('nomNaissanceStagiaire')
            ->add('dateNaissanceStagiaire',BirthdayType::class, [
                'placeholder' => [
                'day' => 'Jour', 'month' => 'Mois', 'year' => 'Année'
            ],
                'format' => 'd M y'
                
               
                ])
            ->add('lieuNaissanceStagiaire')
            ->add('adresseStagiaire')
            ->add('nationaliteStagiaire')
            ->add('numeroPortableStagiaire')
            ->add('numeroFixeStagiaire')
            ->add('emailStagiaire')
            ->add('carteJeuneStagiaire', ChoiceType::class, [
                'choices' => [
                    'Carte jeune' => [
                        'Non' => false,
                        'Oui' => true,
                    ],
                ],
            ])
            ->add('partenaireStagiaire', ChoiceType::class, [
                'choices' => [
                    'Partenaire' => [
                        'Non' => false,
                        'Oui' => true,
                    ],
                ],
            ])
            ->add('adherentStagiaire', ChoiceType::class, [
                'choices' => [
                    'Adherent' => [
                        'Non' => false,
                        'Oui' => true,
                    ],
                ],
            ])
            ->add('numeroAdresseStagiaire');
            // ->add('stages', EntityType::class, [
            //     'class' => Stage::class,
            //     'choice_label' => 'stage',
               
               
            //    ]);
            
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Stagiaire::class,
        ]);
    }
}
