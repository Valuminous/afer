<?php

namespace App\Form;

use App\Entity\Stage;
use App\Entity\Civilite;
use App\Entity\Stagiaire;
use App\Entity\Prefecture;
use App\Entity\Tribunal;
use App\Entity\NatureInfraction;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\BirthdayType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\TimeType;

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
            ->add('numeroAdresseStagiaire')
           
            ->add('stages', EntityType::class, [
               'class' => Stage::class,
               'choice_label' => 'numeroStage',
               'placeholder' => 'Choisir un ou des stages',
               'multiple' => 'true',
                            
               ])
               ->add('numeroPermis')
               ->add('datePermis', DateType::class, [
                'widget' => 'single_text',
                'format'=>'yyyy-MM-dd',
                'html5' => true,
            ])
            ->add('prefecture', EntityType::class, [
                'class' => Prefecture::class,
                'choice_label' => 'nomPrefecture',
                'placeholder' => 'Choisir une préfecture'
            ])  
            ->add('lieuInfraction')   
            ->add('dateInfraction', DateType::class, [
                'widget' => 'single_text',
                'format'=>'yyyy-MM-dd',
                'html5' => true,
            ])
            ->add('heureInfraction', TimeType::class, [
                'widget' => 'choice'
                
            ])

            ->add('natureInfraction', EntityType::class, [
                'class' => NatureInfraction::class,
                'choice_label' => 'nomInfraction',
                'placeholder' => 'Choisir un type d\'infraction',
                             
                ])

                ->add('numeroParquet')
                ->add('dateCondamnation', DateType::class, [
                    'widget' => 'single_text',
                    'format'=>'yyyy-MM-dd',
                    'html5' => true,
                ])
                ->add('tribunal', EntityType::class, [
                    'class' => Tribunal::class,
                    'choice_label' => 'nomTribunal',
                    'placeholder' => 'Choisir un tribunal'
                ])
               ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Stagiaire::class,
        ]);
    }

    
}
