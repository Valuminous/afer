<?php

namespace App\Form;

use App\Entity\Animateur;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class AnimateurType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('nom_animateur')
            ->add('prenom_animateur')
            ->add('raison_sociale_animateur')
            ->add('fonction_animateur')
            ->add('status_animateur')
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
            ->add('animateurStatut')
            ->add('animateurFonction')
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
