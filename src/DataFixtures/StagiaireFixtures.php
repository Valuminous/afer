<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;
use App\Entity\Stagiaire;

class StagiaireFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {

        $faker = \Faker\Factory::create('fr_FR');

        for ($j = 1; $j < 5; $j++) { 
            $fonction = new AnimateurFonction();
            $fonction->setNom($faker->word);
            $manager->persist($fonction);
        
            for ($k = 1; $k < 5; $k++) { 
                $statut = new AnimateurStatut();
                $statut->setNom($faker->word);
                $manager->persist($statut);
            }

            for($i = 1; $i < 7; $i++){
                $stagiaire = new Stagiaire();
                
                $stagiaire->setNomStagiaire($faker->firstName);
                $stagiaire->setPrenomStagiaire($faker->lastName);
                $stagiaire->setCpStagiaire($faker->postcode);
                $stagiaire->setCommuneStagiaire($faker->departmentName);
                $stagiaire->setNomNaissanceStagiaire($faker->firstName);
                $stagiaire->setDateNaissanceStagiaire($faker->date($format = 'd-m-Y', $max = 'now'));
                $stagiaire->setLieuNaissanceStagiaire($faker->departmentName);
                $stagiaire->setRueStagiaire($faker->streetAddress);
                $stagiaire->setNationaliteStagiaire($faker->country);
                $stagiaire->setNumeroPortableStagiaire($faker->mobileNumber);
                $stagiaire->setNumeroFixeStagiaire($faker->phoneNumber);
                $stagiaire->setEmailStagiaire($faker->email);
                $stagiaire->setCarteJeuneStagiaire($faker->boolean());
                $stagiaire->setPartenaireStagiaire($faker->boolean());
                $stagiaire->setAdherentStagiaire($faker->boolean());
                $stagiaire->setNumeroAdresseStagiaire($faker->randomDigit);

                $manager->persist($stagiaire);
            }
        }
        $manager->flush();
    }
}
