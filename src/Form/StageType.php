<?php

namespace App\Form;

use App\Entity\Stage;
use App\Entity\Tribunal;
use App\Entity\Animateur;
use App\Entity\LieuStage;
use App\Entity\Stagiaire;
use App\Entity\Prefecture;
use Doctrine\ORM\EntityRepository;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;

class StageType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('numero_stage') 
            ->add('dated', DateType::class, [
                'widget' => 'single_text',
                'format'=>'yyyy-MM-dd',
                'html5' => true,
            ])
            ->add('datef', DateType::class, [
                'widget' => 'single_text',
                'format'=>'yyyy-MM-dd',
                'html5' => true,
            ])
            ->add('stage_programme_officiel', ChoiceType::class, [
                'choices'  => [
                    'Oui' => true,
                    'Non' => false,
                ],
            ])

            ->add('lieuStage', EntityType::class, [
                'class' => LieuStage::class,
                'choice_label' => 'nomEtablissement',
        
            
            ])    
            ->add('prefecture', EntityType::class, [
                'class' => Prefecture::class,
                'choice_label' => 'nomPrefecture'
            ])    
            ->add('tribunal', EntityType::class, [
                'class' => Tribunal::class,
                'choice_label' => 'nomTribunal'
            ])    
            ->add('animateurs', EntityType::class, [
                'class' => Animateur::class,
                'choice_label' => 'nomAnimateur',
                'attr' => array('class' => 'animateur-select'),
                'multiple' => 'true',
                'query_builder' => function (EntityRepository $er) {
                    return $er->createQueryBuilder('anim')
                        ->orderBy('anim.nomAnimateur', 'ASC');
                },
            
            ])
            ->add('stagiaires', EntityType::class, [
                'class' => Stagiaire::class,
                'choice_label' => 'nomStagiaire',
                'multiple' => 'true',
                'attr' => array('class' => 'stagiaire-select'),
                'query_builder' => function (EntityRepository $er) {
                    return $er->createQueryBuilder('stag')
                        ->orderBy('stag.nomStagiaire', 'ASC');
                       
                },
                
                
            ]);

    }
            
    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Stage::class,
        ]);
    }
}
