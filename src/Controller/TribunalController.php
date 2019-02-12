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
 * @Route("/admin")
 */
class TribunalController extends AbstractController
{
    /**
     * @Route("/tribunal", name="tribunal_index")
     */
    public function indexTribunal(TribunalRepository $repoTribunal)
    {
        $tribunals = $repoTribunal->findAll();
        return $this->render('tribunal/tribunal.html.twig', [
            'tribunals'=> $tribunals
        ]); 
    }

    /**
    * @Route("/tribunal/ajouter", name="tribunal_ajouter")
    * @Route("/tribunal/{id}/modifier", name="tribunal_modifier")
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
    * @Route("/tribunal/{id}/supprimer", name="tribunal_supprimer")
    */
    public function supprimerTribunal(Tribunal $tribunal, Request $request, ObjectManager $manager)
    {
        $manager->remove($tribunal);
        $manager->flush();

        return $this->redirectToRoute('tribunal_index');
    }

    /**
    * @Route("/tribunal/autorite/ajouter", name="tribunalAutorite_ajouter")
    * @Route("/tribunal/autorite/{id}/modifier", name="tribunalAutorite_modifier")
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
    * @Route("/tribunal/autorite/{id}/supprimer", name="tribunalAutorite_supprimer")
    */
    public function supprimerAutorite(TribunalAutorite $autorite, Request $request, ObjectManager $manager)
    {
        $manager->remove($autorite);
        $manager->flush();

        return $this->redirectToRoute('autorite_index');
    }

    /**
    * @Route("/tribunal/autorite", name="tribunalAutorite_index")
    */
    public function indexAutorite(TribunalAutoriteRepository $repoAutorites)
    {
        $autorites = $repoAutorites->findAll();
        return $this->render('tribunal/autorite.html.twig', [
            'autorites'=> $autorites
        ]); 
    }

    /**
    * @Route("/tribunal/service/ajouter", name="tribunalService_ajouter")
    * @Route("/tribunal/service/{id}/modifier", name="tribunalService_modifier")
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
    * @Route("/tribunal/service/{id}/supprimer", name="tribunalService_supprimer")
    */
    public function supprimerService(TribunalService $service, Request $request, ObjectManager $manager)
    {
        $manager->remove($service);
        $manager->flush();

        return $this->redirectToRoute('service_index');
    }

    /**
    * @Route("/tribunal/service", name="tribunalService_index")
    */
    public function indexService(TribunalServiceRepository $repoService)
    {
        $services = $repoService->findAll();
        return $this->render('tribunal/service.html.twig', [
            'services'=> $services
        ]); 
    }
}
