<?php

namespace App\DataFixtures;

use Faker\Factory;

use App\Entity\Stage;
use App\Entity\LieuStage;
use App\Entity\Animateur;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;

class StageFixtures extends Fixture
{ 
    public function load(ObjectManager $manager)
{
    $this->loadStage( $manager );
   
}

    public function loadStage(ObjectManager $manager)
    {
        $faker = \Faker\Factory::create('fr_FR');

       


            for($i = 1; $i < 7; $i++){
                $stage = new Stage();
                $lieuStage = $this->loadLieuStage($manager);
                $animateur = $this->loadAnimateur($manager);
                $manager->persist($lieuStage);
                $stage->setNumeroStage($faker->firstName);
                $stage->setStageProgrammeOfficiel($faker->boolean());
                $stage->setDated($faker->datetime);
                $stage->setDatef($faker->datetime);
                $stage->setLieuStage($lieuStage);
                $stage->getAnimateurs($animateur);
                $manager->persist($stage);
            
        }
        $manager->flush();
    }
        
    
    public function loadLieuStage()
        {   
            $faker = \Faker\Factory::create('fr_FR');

            
                $lieustage = new lieuStage();

                $lieustage->setNomEtablissement($faker->word);
                $lieustage->setAgrement($faker->randomDigit);
                $lieustage->setAdresseStage($faker->streetName);
                $lieustage->setNumeroAdresseStage($faker->buildingNumber);
                $lieustage->setCp($faker->postcode);
                $lieustage->setCommune($faker->City);
                $lieustage->setTelephoneStage($faker->phoneNumber);
               
                return $lieustage;
             

        $manager->flush();

    }

    public function loadAnimateur($manager)
        {   
            $faker = \Faker\Factory::create('fr_FR');

            for($i = 1; $i < 7; $i++){
                $animateur = new animateur();

                $animateur->setNomAnimateur($faker->firstName);
                $animateur->setPrenomAnimateur($faker->lastName);
                $animateur->setRaisonSocialeAnimateur($faker->word);
                $animateur->setGtaAnimateur($faker->boolean());
                $animateur->setCpAnimateur($faker->postcode);
                $animateur->setCommuneAnimateur($faker->departmentName);
                $animateur->setRegionAnimateur($faker->region);
                $animateur->setRueAnimateur($faker->streetAddress);
                $animateur->setNumeroPortableAnimateur($faker->mobileNumber);
                $animateur->setNumeroFixeAnimateur($faker->phoneNumber);
                $animateur->setEmailAnimateur($faker->email);
                $animateur->setUrssafAnimateur($faker->numberBetween($min = 1000, $max = 9000));
                $animateur->setSiretAnimateur($faker->siret);
                $animateur->setObservationsAnimateur($faker->sentence());
               

                $manager->persist($animateur);
               
                return $animateur;
             
            }
        $manager->flush();

    }

}
