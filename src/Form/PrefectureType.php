<?php

namespace App\Form;

use App\Entity\Prefecture;
use App\Entity\PrefectureService;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\OptionsResolver\OptionsResolver;

class PrefectureType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('nom_prefecture')
            ->add('numero_adresse_prefecture')
            ->add('adresse_prefecture')
            ->add('cp')
            ->add('commune')
            ->add('prefectureService', EntityType::class, [
                'class' => PrefectureService::class, 
                'choice_label' => 'nom'
            ])
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
