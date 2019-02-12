<?php

namespace App\Controller;

use App\Entity\Civilite;
use App\Form\CiviliteType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\Common\Persistence\ObjectManager;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class CiviliteController extends AbstractController
{
    public function ajoutCivilite(Civilite $civilite = null, Request $request, ObjectManager $manager)
    {
        if(!$civilite){
            $civilite = new Civilite();
        }

        $formCivilite = $this->createForm( CiviliteType::class, $civilite );
        
        $formCivilite->handleRequest( $request );
        
        if( $formCivilite->isSubmitted() && $formCivilite->isValid() ){
            
            $manager->persist( $civilite );
            $manager->flush();
           
        }
}}
