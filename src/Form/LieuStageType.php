<?php

namespace App\Form;

use App\Entity\LieuStage;
use App\Entity\Commune;
use App\Entity\Civilite;
use Doctrine\ORM\EntityRepository;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\FormEvent;
use Symfony\Component\Form\FormEvents;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;

class LieuStageType extends AbstractType
{
    
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('nom_etablissement')
            ->add('agrement')
            ->add('adresse_stage')
            ->add('numero_adresse_stage')
            ->add('cp', HiddenType::class, [
                'data' => 'cp',
            ])
            ->add('latitude')
            ->add('longitude')
            ->add('telephone_stage')
            ->add('divers')
            ->add('nom_commune')
            ;
                         
                // ])
                // ->add('commune', EntityType::class, [
                //     'class' => Commune::class,
                //      'attr' => array('class' => 'select_commune'),
                //     'choice_label' => 'commune',
                //     'placeholder' => 'Sélectionner une commune'
                //     // 'attr' => array('class' => 'chosen-select')
                    // ]);
                

//       
}
}