<?php

namespace App\Form;

use App\Entity\Stage;
use App\Entity\Tribunal;
use App\Entity\Animateur;
use App\Entity\LieuStage;
use App\Entity\Prefecture;
use App\Entity\Stagiaires;
use Doctrine\ORM\EntityRepository;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\DateTimeType;

class StageType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('numero_stage')
            ->add('dated', DateTimeType::class, [
                'date_label' => 'Starts On'])
            ->add('datef', DateTimeType::class, [
                'date_label' => 'Ends On'])
            ->add('stage_programme_officiel')
            // ->add('lieuStage', EntityType::class, [
            //     'class' => LieuStage::class,
            //     'choice_label' => 'nom_etablissement',
            //     'multiple' => 'true',
            //     'expanded' => 'true'
            // ])    
            ->add('prefecture', EntityType::class, [
                'class' => Prefecture::class,
                'choice_label' => 'nom_prefecture'
            ])    
            ->add('tribunal', EntityType::class, [
                'class' => Tribunal::class,
                'choice_label' => 'nom_tribunal'
            ])    
            ->add('animateurs', EntityType::class, [
                'class' => Animateur::class,
                'choice_label' => 'nom_animateur',
                'query_builder' => function (EntityRepository $er) {
                    return $er->createQueryBuilder('anim')
                        ->orderBy('anim.nom_animateur', 'ASC');
                },
                'multiple' => 'true',
            ])
            // ->add('stagiaires', EntityType::class, [
            //     'class' => Stagiaire::class,
            //     'choice_label' => 'nom',
            //     'query_builder' => function (EntityRepository $er) {
            //         return $er->createQueryBuilder('stag')
            //             ->orderBy('stag.Nom', 'ASC');
            //     },
            //     'multiple' => 'true',
            // ])
          
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Stage::class,
        ]);
    }
}
