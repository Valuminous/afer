<?php

namespace App\Form;

use App\Entity\Stage;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class StageType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('numero_stage')
            ->add('date_debut_stage')
            ->add('date_fin_stage')
            ->add('stage_programme_officiel')
            // ->add('prefecture')
            // ->add('tribunal')
            // ->add('animateurs')
            // ->add('stagiaires')
            // ->add('lieuStage')
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Stage::class,
        ]);
    }
}
