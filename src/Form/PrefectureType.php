<?php

namespace App\Form;

use App\Entity\Prefecture;
use App\Entity\PrefectureService;
use App\Entity\PrefectureAutorite;

use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;

use Symfony\Component\Form\AbstractType;

class PrefectureType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('nomPrefecture')
            ->add('numeroAdressePrefecture')
            ->add('adressePrefecture')
            ->add('cpPrefecture')
            ->add('communePrefecture')
            ->add('prefectureService', EntityType::class, [
                'class' => PrefectureService::class, 
                'choice_label' => 'nom'
            ])
            ->add('prefectureAutorite', EntityType::class, [
                'class' => PrefectureAutorite::class, 
                'choice_label' => 'nom'
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Prefecture::class,
        ]);
    }
}
