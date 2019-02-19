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
            ->add('nomStagiaire')
            ->add('prenomStagiaire')
            ->add('cpStagiaire')
            ->add('communeStagiaire')
            ->add('nomNaissanceStagiaire')
            ->add('dateNaissanceStagiaire',DateTimeType::class, [
                'date_label' => 'Starts On'])
            ->add('lieuNaissanceStagiaire')
            ->add('adresseStagiaire')
            ->add('nationaliteStagiaire')
            ->add('numeroPortableStagiaire')
            ->add('numeroFixeStagiaire')
            ->add('emailStagiaire')
            ->add('carteJeuneStagiaire')
            ->add('partenaireStagiaire')
            ->add('adherentStagiaire')
            ->add('numeroAdresseStagiaire');
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
