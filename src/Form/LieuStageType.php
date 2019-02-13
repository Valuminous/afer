<?php

namespace App\Form;

use App\Entity\LieuStage;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
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
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => LieuStage::class,
        ]);
    }
}
