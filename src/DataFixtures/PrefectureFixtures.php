<?php

namespace App\DataFixtures;

use App\Entity\Prefecture;
use App\Entity\PrefectureService;

use App\Entity\PrefectureAutorite;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;

class PrefectureFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
       
        $faker = \Faker\Factory::create('fr_FR');

        for ($j = 1; $j < 5; $j++) { 
            $service = new PrefectureService();
            $service->setNom($faker->word);
            $manager->persist($service);
        
            for ($k = 1; $k < 5; $k++) { 
                $autorite = new PrefectureAutorite();
                $autorite->setNom($faker->word);
                $manager->persist($autorite);
            }
       
            for($i = 1; $i < 3; $i++){
            $prefecture = new Prefecture();
            
            $prefecture->setNomPrefecture("Préfécture n°$i");
            $prefecture->setAdressePrefecture($faker->streetAddress);
            $prefecture->setNumeroAdressePrefecture($faker->randomDigit);
            $prefecture->setCommunePrefecture($faker->region);
            $prefecture->setCpPrefecture($faker->postcode);
            $prefecture->setPrefectureService($service);
            $prefecture->setPrefectureAutorite($autorite);


            $manager->persist($prefecture);
            }
        }
        $manager->flush();
    }
}
