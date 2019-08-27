<?php

namespace App\Form;

use App\Entity\Infraction;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\DateTimeType;
use Symfony\Component\Form\Extension\Core\Type\TimeType;

class InfractionType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('lieuInfraction')
            ->add('dateInfraction', DateTimeType::class, [
                'widget' => 'choice',
                'format'=>'yyyy-MM-dd H:mm',
                'html5' => true,
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
