<?php

namespace App\Form;

use App\Entity\Stage;
use App\Entity\Civilite;
use App\Entity\Stagiaire;
use App\Entity\Prefecture;
use App\Entity\Tribunal;
use App\Entity\Licence;
use App\Entity\Avantage;
use App\Entity\Cas;
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
            ->add('nomNaissanceStagiaire')
            ->add('dateNaissanceStagiaire',BirthdayType::class, [
                'placeholder' => [
                'day' => 'Jour', 'month' => 'Mois', 'year' => 'Année'
            ],
                'format' => 'd M y'
                
               
                ])
            ->add('lieuNaissanceStagiaire')
            ->add('adresseStagiaire')
            ->add('communeStagiaire')
            ->add('nationaliteStagiaire')
            ->add('numeroPortableStagiaire', null, [
                'required'   => false,
                'empty_data' => '-- -- -- -- --',
            ])
            ->add('numeroFixeStagiaire', null, [
                'required'   => false,
                'empty_data' => '-- -- -- -- --',
            ])
            ->add('emailStagiaire', null, [
                'required'   => false,
                
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
                'required'   => false,
                'empty_data' => '---------',      
                ])

           
            ->add('prefecture', EntityType::class, [
                'class' => Prefecture::class,
                'choice_label' => 'nomPrefecture',
                'placeholder' => 'Choisir une préfecture',
                'required'   => false,
                'empty_data' => 'Aucune préfecture',      
                ])
            ->add('lieuInfraction')   
            ->add('dateInfraction', DateType::class, [
                'widget' => 'single_text',
                'format'=>'yyyy-MM-dd',
                'html5' => true,
                'required'   => false,
                'empty_data' => '---------',      
                ])
            ->add('heureInfraction', TimeType::class, [
                'widget' => 'choice'
                
            ])

            ->add('natureInfraction', EntityType::class, [
                'class' => NatureInfraction::class,
                'choice_label' => 'nomInfraction',
                'placeholder' => 'Choisir un type d\'infraction',
                'required'   => false,
                'empty_data' => 'Aucune infraction',      
                ])

                ->add('numeroParquet')
                ->add('dateCondamnation', DateType::class, [
                    'widget' => 'single_text',
                    'format'=>'yyyy-MM-dd',
                    'html5' => true,
                    'required'   => false,
                    'empty_data' => 0000-01-01      
                    ])
                ->add('tribunal', EntityType::class, [
                    'class' => Tribunal::class,
                    'choice_label' => 'nomTribunal',
                    'placeholder' => 'Choisir un tribunal',
                    'required'   => false,
                    'empty_data' => 'Aucun tribunal',      
                    ])

                ->add('licence', EntityType::class, [
                  'class' => Licence::class,
                  'choice_label' => 'licenceNumber',
                 'placeholder' => 'Numéro de permis',
                 'required'   => false,
                ])
               
                ->add('avantage',EntityType::class, [
                    'class' => Avantage::class,
                    'choice_label' => 'avantage',
                   'placeholder' => 'Avantages',

                   'expanded' => 'true'
                    
                  
                ])
                ->add('cas',EntityType::class, [
                    'class' => Cas::class,
                    'choice_label' => 'numeroCas',
                   'placeholder' => 'Cas',
                   'expanded' => 'true',
                   'multiple' => 'true'
                    
                  
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
