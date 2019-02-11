<?php

namespace App\Form;

use App\Entity\Animateur;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use App\Entity\AnimateurStatut;
use App\Entity\AnimateurFonction;

class AnimateurType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('nom_animateur')
            ->add('prenom_animateur')
            ->add('raison_sociale_animateur')
            ->add('gta_animateur')
            ->add('cp_animateur')
            ->add('commune_animateur')
            ->add('region_animateur')
            ->add('rue_animateur')
            ->add('numero_portable_animateur')
            ->add('numero_fixe_animateur')
            ->add('email_animateur')
            ->add('urssaf_animateur')
            ->add('siret_animateur')
            ->add('observations_animateur')
            ->add('animateurStatut', EntityType::class, [
                'class' => AnimateurStatut::class,
                'choice_label' => 'nom'
            ])
            ->add('animateurFonction', EntityType::class, [
                'class' => AnimateurFonction::class,
                'choice_label' => 'nom'
            ])
            ->add('Stages')
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Animateur::class,
        ]);
    }
}
