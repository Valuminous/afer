<?php

namespace App\DataFixtures;

use Faker\Factory;

use App\Entity\Stage;
use App\Entity\LieuStage;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;

class StageFixtures extends Fixture
{ 
    public function load(ObjectManager $manager)
{
    $this->loadStage( $manager );
    $this->loadLieuStage($manager);
   
}

    public function loadStage(ObjectManager $manager)
    {
        $faker = \Faker\Factory::create('fr_FR');

       


            for($i = 1; $i < 7; $i++){
                $stage = new Stage();
                $stage->setNumeroStage($faker->firstName);
                $stage->setStageProgrammeOfficiel($faker->boolean());
                $stage->setDated($faker->datetime);
                $stage->setDatef($faker->datetime);
                $manager->persist($stage);
            
        }
        $manager->flush();
    }
        
    
    public function loadLieuStage(ObjectManager $manager)
        {   
            $faker = \Faker\Factory::create('fr_FR');

            for($i = 1; $i < 7; $i++){
                $lieustage = new lieuStage();
                $lieustage->setNomEtablissement($faker->word);
                $lieustage->setAgrement($faker->randomDigit);
                $lieustage->setAdresseStage($faker->streetName);
                $lieustage->setNumeroAdresseStage($faker->buildingNumber);
                $lieustage->setCp($faker->postcode);
                $lieustage->setCommune($faker->City);
                $lieustage->setTelephoneStage($faker->phoneNumber);
                $manager->persist($lieustage);
                }

        $manager->flush();

    }
}
