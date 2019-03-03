<?php

namespace App\Form;

use App\Entity\Stage;
use App\Entity\Commune;
use App\Entity\Civilite;
use App\Entity\Animateur;
use App\Entity\AnimateurStatut;
use App\Entity\AnimateurFonction;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;

class AnimateurType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('civilite', EntityType::class, [
            'class' => Civilite::class,
            'choice_label' => 'nomCivilite',
            'placeholder' => 'Choisir une civilité'
            
           ])
            ->add('nom_animateur')
            ->add('prenom_animateur')
            ->add('raison_sociale_animateur')
            ->add('gta_animateur', ChoiceType::class, [
                'choices' => [
                    'Gestion technique et administrative' => [
                        'Non' => false,
                        'Oui' => true,
                        ],
                ],
            ])
            ->add('cp_animateur', HiddenType::class,[
                'data' => 'cp'
            ])
            ->add('commune_animateur')
            ->add('region_animateur')
            ->add('rue_animateur')
            ->add('numero_rue_animateur')
            ->add('numero_portable_animateur')
            ->add('numero_fixe_animateur')
            ->add('email_animateur')
            ->add('urssaf_animateur')
            ->add('siret_animateur')
            ->add('observations_animateur', TextareaType::class)
            ->add('animateurStatut', EntityType::class, [
                'class' => AnimateurStatut::class,
                'choice_label' => 'nom',
                'placeholder' => 'Choisir un statut'
            ])
            ->add('animateurFonction', EntityType::class, [
                'class' => AnimateurFonction::class,
                'choice_label' => 'nom',
                'placeholder' => 'Choisir une fonction'
            ])
            
        ;
    }

    
    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Animateur::class,
        ]);
    }
}
