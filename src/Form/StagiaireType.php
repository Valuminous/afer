<?php

namespace App\Form;

use App\Entity\Stage;
use App\Entity\Civilite;
use App\Entity\Stagiaire;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\DateTimeType;

class StagiaireType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
        ->add('civilite', EntityType::class, [
            'class' => Civilite::class,
            'choice_label' => 'nomCivilite'
            ])
            ->add('nom_stagiaire')
            ->add('prenom_stagiaire')
            ->add('cp_stagiaire')
            ->add('commune_stagiaire')
            ->add('nom_naissance_stagiaire')
            ->add('date_naissance_stagiaire',DateTimeType::class, [
                'date_label' => 'Starts On'])
            ->add('lieu_naissance_stagiaire')
            ->add('adresse_stagiaire')
            ->add('nationalite_stagiaire')
            ->add('numero_portable_stagiaire')
            ->add('numero_fixe_stagiaire')
            ->add('email_stagiaire')
            ->add('carte_jeune_stagiaire')
            ->add('partenaire_stagiaire')
            ->add('adherent_stagiaire')
            ->add('numero_adresse_stagiaire');
            // ->add('stages', EntityType::class, [
            //     'class' => Stage::class,
            //     'label' => 'numeroStage'
            // ]);
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Stagiaire::class,
        ]);
    }
}
