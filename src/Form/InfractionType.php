<?php

namespace App\Form;

use App\Entity\Infraction;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\BirthdayType;

class InfractionType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('lieuInfraction')
            ->add('dateInfraction',BirthdayType::class, [
                'input'  => 'datetime',
                'widget' => 'choice',
            ])
            
            ->add('natureInfraction')
          
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Infraction::class,
        ]);
    }
}
