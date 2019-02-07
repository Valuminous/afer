<?php

namespace App\Form;

use App\Entity\Prefecture;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class PrefectureType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('nom_prefecture')
            ->add('adresse_prefecture')
            ->add('cp')
            ->add('commune')
            ->add('prefectureService')
            ->add('prefectureAutorite')
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Prefecture::class,
        ]);
    }
}
