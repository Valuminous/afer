<?php

namespace App\Form;

use App\Entity\Stagiaire;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class StagiaireType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('nom_stagiaire')
            ->add('prenom_stagiaire')
            ->add('cp')
            ->add('commune')
            ->add('nom_naissance_stagiaire')
            ->add('date_naissance_stagiaire')
            ->add('lieu_naissance_stagiaire')
            ->add('adresse_stagiaire')
            ->add('nationalite_stagiaire')
            ->add('numero_portable_stagiaire')
            ->add('numero_fixe_stagiaire')
            ->add('email_stagiaire')
            ->add('carte_jeune_stagiaire')
            ->add('partenaire_stagiaire')
            ->add('adherent_stagiaire')
            ->add('numero_adresse_stagiaire')
            ->add('stages')
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Stagiaire::class,
        ]);
    }
}
