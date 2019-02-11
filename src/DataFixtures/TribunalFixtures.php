<?php

namespace App\DataFixtures;

use Faker\Factory;
use App\Entity\Tribunal;
use App\Entity\TribunalService;
use App\Entity\TribunalAutorite;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;

class TribunalFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
        $faker = \Faker\Factory::create('fr_FR');

        for ($j = 1; $j < 5; $j++) { 
            $service = new TribunalService();
            $service->setNom($faker->word);
            $manager->persist($service);
        
            for ($k = 1; $k < 5; $k++) { 
                $autorite = new TribunalAutorite();
                $autorite->setNom($faker->word);
                $manager->persist($autorite);
            }
       
            for($i = 1; $i < 3; $i++){
            $tribunal = new Tribunal();
            
            $tribunal->setNomTribunal("Tribunal n°$i");
            $tribunal->setAdresseTribunal($faker->streetAddress);
            $tribunal->setNumeroAdresseTribunal($faker->randomDigit);
            $tribunal->setCommuneTribunal($faker->region);
            $tribunal->setTribunalAutorite($autorite);
            $tribunal->setTribunalService($service);

            $manager->persist($tribunal);
            }
        }
        $manager->flush();
    }
}
