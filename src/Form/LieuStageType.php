<?php

namespace App\Form;

use App\Entity\LieuStage;
use App\Entity\Commune;
use App\Entity\Civilite;
use PUGX\AutocompleterBundle\Form\Type\AutocompleteType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\OptionsResolver\OptionsResolver;

class LieuStageType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('nom_etablissement')
            ->add('agrement')
            ->add('adresse_stage')
            ->add('numero_adresse_stage')
            ->add('cp')
            ->add('commune')
            ->add('telephone_stage')
            ->add('latitude')
            ->add('longitude')
            ->add('divers')
            ->add('cp', AutocompleteType::class, [
                'class' => Commune::class,
                             'attr' => array('class' => 'select_cp')
              
                ])
            // ->add('commune', EntityType::class, [
            //     'class' => Commune::class,
            //     'choice_label' => 'commune',
               
            //     'placeholder' => 'Sélectionner une commune',
            //     // 'attr' => array('class' => 'chosen-select')
            //     ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => LieuStage::class,
        ]);
    }
}
