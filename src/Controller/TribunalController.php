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
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Security;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;

use Doctrine\ORM\EntityManager;
/**
 * @Route("/admin")
 * @Security("is_granted('ROLE_ADMIN') or is_granted('ROLE_TRIBUNAL')")
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
    * @IsGranted("ROLE_ADMIN")
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
    * @IsGranted("ROLE_ADMIN")
    */
    public function supprimerTribunal(Tribunal $tribunal, Request $request, ObjectManager $manager)
    {
        $manager->remove($tribunal);
        $manager->flush();

        return $this->redirectToRoute('tribunal_index');
    }

    /**
     * @Route("/tribunal/{id}/afficher", name="tribunal_afficher")
     */
    public function showOne(Tribunal $tribunal)
    {
        return $this->render('tribunal/afficher.html.twig', [
            'tribunal' => $tribunal
        ]);
    }

    /**
    * @Route("/tribunal/autorite", name="tribunalAutorite_index")
    */
    public function indexAutorite(TribunalAutoriteRepository $repoAutorites)
    {
        $autorites = $repoAutorites->findAll();
        $nbr = null;
        return $this->render('tribunal/autorite.html.twig', [
            'autorites'=> $autorites,
            'nbr' => $nbr
            ]); 
    }

    /**
    * @Route("/tribunal/autorite/ajouter", name="tribunalAutorite_ajouter")
    * @Route("/tribunal/autorite/{id}/modifier", name="tribunalAutorite_modifier")
    * @IsGranted("ROLE_ADMIN")
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
            return $this->redirectToRoute('tribunalAutorite_index') ;
        }
        
        return $this->render('tribunal/ajouterAutorite.html.twig', 
            ['form' => $formAutorite->createView(),
            'editMode' => $autorite->getId() !== null
            ]);
    }
    

    /**
    * @Route("/tribunal/autorite/{id}/supprimer", name="tribunalAutorite_supprimer")
    * @IsGranted("ROLE_ADMIN")
    */
    public function supprimerAutorite(TribunalAutorite $autorite, Request $request, ObjectManager $manager)
    {
        $manager->remove($autorite);
        $manager->flush();

        return $this->redirectToRoute('tribunalAutorite_index');
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
        
    /**
    * @Route("/tribunal/service/ajouter", name="tribunalService_ajouter")
    * @Route("/tribunal/service/{id}/modifier", name="tribunalService_modifier")
    * @IsGranted("ROLE_ADMIN")
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
            return $this->redirectToRoute('tribunalService_index') ;
        }
        
        return $this->render('tribunal/ajouterService.html.twig', 
        ['form' => $formService->createView(),
        'editMode' => $service->getId() !== null
        ]);
    }
        
    /**
    * @Route("/tribunal/service/{id}/supprimer", name="tribunalService_supprimer")
    * @IsGranted("ROLE_ADMIN")
    */
    public function supprimerService(TribunalService $service, Request $request, ObjectManager $manager)
    {
        $manager->remove($service);
        $manager->flush();
        
        return $this->redirectToRoute('tribunalService_index');
    }
        
    /**
    * @Route("/tribunal/autorite/loadFormAutoriteTribunal", name="tribunal_autorite_pop")
    * @IsGranted("ROLE_ADMIN")
    */
    public function popAutorite(TribunalAutorite $autorite = null,TribunalAutoriteRepository $repoAutorite, Request $request, ObjectManager $manager)
    {
        if(!$autorite){
            $autorite = new TribunalAutorite();
        }
        $formAutorite = $this->createForm( TribunalAutoriteType::class, $autorite, array('method'=>'POST'));
        $formAutorite->handleRequest( $request );
      
        if($request->isMethod('POST')){
            $tribunalAutorite = $request->request->get('tribunal_autorite_nom');
    
            $nbrs = $repoAutorite->counter($tribunalAutorite);
            $nbr = $nbrs[0][1];

            if(strlen($tribunalAutorite) > 0 && $nbr === "0"){
                $autorite->setNom($tribunalAutorite);
                $manager->persist( $autorite );
                $manager->flush();
                $response = new Response();
                $response = JsonResponse::fromJsonString('{"id":'.$autorite->getId().', "value":"'.$autorite->getNom().'"}');
            }else{
                $response = new Response();
                $response = JsonResponse::fromJsonString('{"error":"existe"}');
            }
            return $response;
        }
        return $this->render('tribunal/popAutorite.html.twig', 
            ['form' => $formAutorite->createView()
            ]);
    }


    /**
    * @Route("/tribunal/service/loadFormServiceTribunal", name="tribunal_service_pop")
    * @IsGranted("ROLE_ADMIN")
    */
    public function popService(TribunalService $service = null,TribunalServiceRepository $repoService, Request $request, ObjectManager $manager)
    {
        if(!$service){
            $service = new TribunalService();
        }
         $formService = $this->createForm( TribunalServiceType::class, $service, array('method'=>'POST') );
        
        $formService->handleRequest( $request );
      
        if($request->isMethod('POST')){
            $tribunalService = $request->request->get('tribunal_service_nom');

            $nbrs = $repoService->counter($tribunalService);
            $nbr = $nbrs[0][1];

            if(strlen($tribunalService) > 0 && $nbr === "0"){
                $service->setNom($tribunalService);
                $manager->persist( $service );
                $manager->flush();
                $response = new Response();
                $response = JsonResponse::fromJsonString('{"id":'.$service->getId().', "value":"'.$service->getNom().'"}');
            }else{
                $response = new Response();
                $response = JsonResponse::fromJsonString('{"error":"existe"}');
            }
             return $response;
        }
        
        return $this->render('tribunal/popService.html.twig', 
            ['form' => $formService->createView()
            ]);
    }

    /**
    * @Route("/tribunal/autorite/supprAlertFormAutoriteTribunal", name="tribunal_autorite_suppr_alert")
    * @IsGranted("ROLE_ADMIN")
    */
    public function supprAutorite(TribunalRepository $repoTribunal, Request $request, ObjectManager $manager)
    {

        if($request->isMethod('POST')){

            $id = $request->request->get('id');
            
            if($id > 0){
                $nbrs = $repoTribunal->counterAutorite($id);
                $nbr = $nbrs[0][1];

                $response = new Response();
                $response = JsonResponse::fromJsonString('{"nb":'.$nbr.'}');
            } else {
                $response = new Response();
                $response = JsonResponse::fromJsonString('{"error":"notnumber"}');
            }

            return $response;
        } else {
            $response = new Response();
            $response = JsonResponse::fromJsonString('{"error":"exception"}');
        }
        
    }

}