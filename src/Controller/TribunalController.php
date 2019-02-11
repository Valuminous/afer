<?php

namespace App\Controller;

use App\Entity\Tribunal;
use App\Entity\TribunalService;
use App\Entity\TribunalAutorite;

use App\Form\TribunalType;
use App\Form\TribunalServiceType;
use App\Form\TribunalAutoriteType;

use App\Repository\TribunalRepository;
use App\Repository\TribunalServiceRepository;
use App\Repository\TribunalAutoriteRepository;

use Doctrine\Common\Persistence\ObjectManager;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("/admin/tribunal")
 */
class TribunalController extends AbstractController
{
    /**
     * @Route("/", name="tribunal_index")
     */
    public function indexTribunal(TribunalRepository $repoTribunal)
    {
        $tribunals = $repoTribunal->findAll();
        return $this->render('tribunal/tribunal.html.twig', [
            'tribunals'=> $tribunals
        ]); 
    }

    /**
    * @Route("/ajouter", name="tribunal_ajouter")
    * @Route("/{id}/modifier", name="tribunal_modifier")
    */
    public function ajouterTribunal(Tribunal $tribunals = null, Request $request, ObjectManager $manager)
    {
        if(!$tribunals){
            $tribunals = new Tribunal();
        }

        $form = $this->createForm( TribunalType::class, $tribunals );
        
        $form->handleRequest( $request );
        
        if( $form->isSubmitted() && $form->isValid() ){
            
            $manager->persist( $tribunals );
            $manager->flush();
            return $this->redirectToRoute('tribunal_index') ;
        }
        
        return $this->render('tribunal/ajouterTribunal.html.twig', 
            ['form' => $form->createView(),
            'editMode' => $tribunals->getId() !== null
            ]);
    }

    /**
    * @Route("/{id}/supprimer", name="tribunal_supprimer")
    */
    public function supprimerTribunal(Tribunal $tribunal, Request $request, ObjectManager $manager)
    {
        $manager->remove($tribunal);
        $manager->flush();

        return $this->redirectToRoute('tribunal_index');
    }

    /**
    * @Route("/autorite/ajouter", name="tribunal_autorite_ajouter")
    * @Route("/autorite/{id}/modifier", name="tribunal_autorite_modifier")
    */
    public function ajoutTribunalAutorite(TribunalAutorite $autorite = null, Request $request, ObjectManager $manager)
    {
        if(!$autorite){
            $autorite = new TribunalAutorite();
        }

        $formAutorite = $this->createForm( TribunalAutoriteType::class, $autorite );
        
        $formAutorite->handleRequest( $request );
        
        if( $formAutorite->isSubmitted() && $formAutorite->isValid() ){
            
            $manager->persist( $autorite );
            $manager->flush();
            return $this->redirectToRoute('autorite_index') ;
        }
        
        return $this->render('tribunal/ajouterAutorite.html.twig', 
            ['form' => $formAutorite->createView(),
            'editMode' => $autorite->getId() !== null
            ]);
    }

    /**
    * @Route("/autorite/{id}/supprimer", name="tribunal_autorite_supprimer")
    */
    public function supprimerAutorite(TribunalAutorite $autorite, Request $request, ObjectManager $manager)
    {
        $manager->remove($autorite);
        $manager->flush();

        return $this->redirectToRoute('autorite_index');
    }

    /**
    * @Route("/autorite", name="autorite_index")
    */
    public function indexAutorite(TribunalAutoriteRepository $repoAutorites)
    {
        $autorites = $repoAutorites->findAll();
        return $this->render('tribunal/autorite.html.twig', [
            'autorites'=> $autorites
        ]); 
    }

    /**
    * @Route("/service/ajouter", name="tribunal_service_ajouter")
    * @Route("/service/{id}/modifier", name="tribunal_service_modifier")
    */
    public function ajoutTribunalService(TribunalService $service = null, Request $request, ObjectManager $manager)
    {
        if(!$service){
            $service = new TribunalService();
        }

        $formService = $this->createForm( TribunalServiceType::class, $service );
        
        $formService->handleRequest( $request );
        
        if( $formService->isSubmitted() && $formService->isValid() ){
            
            $manager->persist( $service );
            $manager->flush();
            return $this->redirectToRoute('service_index') ;
        }
        
        return $this->render('tribunal/ajouterService.html.twig', 
            ['form' => $formService->createView(),
            'editMode' => $service->getId() !== null
            ]);
    }

    /**
    * @Route("/service/{id}/supprimer", name="tribunal_service_supprimer")
    */
    public function supprimerService(TribunalService $service, Request $request, ObjectManager $manager)
    {
        $manager->remove($service);
        $manager->flush();

        return $this->redirectToRoute('service_index');
    }

    /**
    * @Route("/services", name="services_index")
    */
    public function indexService(TribunalServiceRepository $repoService)
    {
        $services = $repoService->findAll();
        return $this->render('tribunal/service.html.twig', [
            'services'=> $services
        ]); 
    }
}
