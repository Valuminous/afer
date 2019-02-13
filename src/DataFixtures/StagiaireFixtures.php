<?php

namespace App\DataFixtures;

<<<<<<< HEAD
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;
use App\Entity\Stagiaire;

=======
use Faker\Factory;

use App\Entity\Stagiaire;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;
>>>>>>> 6bfc30230dbbacd8d4650cd85950c3f7173d63a8

class StagiaireFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
<<<<<<< HEAD

        $faker = \Faker\Factory::create('fr_FR');

=======
        $faker = \Faker\Factory::create('fr_FR');



>>>>>>> 6bfc30230dbbacd8d4650cd85950c3f7173d63a8
            for($i = 1; $i < 7; $i++){
                $stagiaire = new Stagiaire();
                
                $stagiaire->setNomStagiaire($faker->firstName);
                $stagiaire->setPrenomStagiaire($faker->lastName);
<<<<<<< HEAD
                $stagiaire->setCpStagiaire($faker->postcode);
                $stagiaire->setCommuneStagiaire($faker->departmentName);
                $stagiaire->setNomNaissanceStagiaire($faker->firstName);
                // $stagiaire->setDateNaissanceStagiaire($faker->date());
                $stagiaire->setAdresseStagiaire($faker->streetAddress);
                $stagiaire->setLieuNaissanceStagiaire($faker->departmentName);
                $stagiaire->setNationaliteStagiaire($faker->country);
                $stagiaire->setNumeroPortableStagiaire($faker->mobileNumber);
=======
                $stagiaire->setCp($faker->postcode);
                $stagiaire->setCommune($faker->DepartmentName);
                $stagiaire->setNomNaissanceStagiaire($faker->lastname);
                $stagiaire->setDateNaissanceStagiaire($faker->datetime);
                $stagiaire->setLieuNaissanceStagiaire($faker->region);
                $stagiaire->setAdresseStagiaire($faker->streetAddress);
                $stagiaire->setNationaliteStagiaire($faker->word);
                $stagiaire->setNumeroPortableStagiaire($faker->phoneNumber);
>>>>>>> 6bfc30230dbbacd8d4650cd85950c3f7173d63a8
                $stagiaire->setNumeroFixeStagiaire($faker->phoneNumber);
                $stagiaire->setEmailStagiaire($faker->email);
                $stagiaire->setCarteJeuneStagiaire($faker->boolean());
                $stagiaire->setPartenaireStagiaire($faker->boolean());
                $stagiaire->setAdherentStagiaire($faker->boolean());
                $stagiaire->setNumeroAdresseStagiaire($faker->randomDigit);
<<<<<<< HEAD

                $manager->persist($stagiaire);
            }
        $manager->flush();
    }
}
=======
              
            

                $manager->persist($stagiaire);
            }
        
        $manager->flush();
    }
}

>>>>>>> 6bfc30230dbbacd8d4650cd85950c3f7173d63a8
