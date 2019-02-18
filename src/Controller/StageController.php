<?php

namespace App\Controller;

use App\Entity\Stage;
use App\Entity\Tribunal;
use App\Entity\Prefecture;

use App\Form\StageType;
use App\Form\TribunalType;
use App\Form\PrefectureType;

use App\Repository\StageRepository;

use Doctrine\Common\Persistence\ObjectManager;

use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("/admin")
 */
class StageController extends AbstractController
{
    /**
     * @Route("/stage", name="stage_index")
     */
    public function index(StageRepository $repo)
    {
        $stages = $repo->findAll();

        return $this->render('stage/index.html.twig', [
            'controller_name' => 'StageController',
            'stages' => $stages
        ]);
    }

     /**
     *  @Route("/stage/loadFormTribunal", name="stage_tribunal")
     */
    public function popTribunal(Tribunal $tribunal = null, Request $request, ObjectManager $manager)
    {
        if(!$tribunal){
            $tribunal = new Tribunal();
        }

        $form = $this->createForm( TribunalType::class, $tribunal, array('method'=>'POST'));
        $form->handleRequest( $request );

        if($request->isMethod('POST')){
            $tribunalNom = $request->request->get('tribunal_nom_tribunal');
            $tribunalAdresse = $request->request->get('tribunal_adresse_tribunal');
            $tribunalNumeroAdresse = $request->request->get('tribunal_numero_adresse_tribunal');
            $tribunalCommune = $request->request->get('tribunal_commune_tribunal');
            $tribunalAutorite = $request->request->get('tribunal_tribunal_service');
            $tribunalService = $request->request->get('tribunal_tribunal_autorite');
      
            if(strlen($tribunalNom) > 0 && strlen($tribunalAdresse) > 0 && strlen($tribunalNumeroAdresse) > 0 &&
                strlen($tribunalCommune) > 0 && strlen($tribunalAutorite) > 0 && strlen($tribunalService) > 0){
                
                $tribunal->setNomTribunal($tribunalNom);
                $tribunal->setAdresseTribunal($tribunalAdresse);
                $tribunal->setNumeroAdresseTribunal($tribunalNumeroAdresse);
                $tribunal->setCommuneTribunal($tribunalCommune);
                $tribunal->getTribunalService($tribunalAutorite);
                $tribunal->getTribunalAutorite($tribunalService);
                $manager->persist( $tribunal );
                $manager->flush();
                $response = new Response();
                $response = JsonResponse::fromJsonString('{"id":'.$tribunal->getId().', "value":"'.$tribunal->getNomTribunal().'"}');
            }
            return $response;
        }        
        return $this->render('stage/popTribunal.html.twig', 
            ['form' => $form->createView()
            ]);
    }

     /**
     *  @Route("/stage/loadFormPrefecture", name="stage_prefecture")
     */
    public function popPrefecture(Prefecture $prefecture = null, Request $request, ObjectManager $manager)
    {
        if(!$prefecture){
            $prefecture = new Prefecture();
        }

        $form = $this->createForm( PrefectureType::class, $prefecture, array('method'=>'POST'));
        $form->handleRequest( $request );

        if($request->isMethod('POST')){
          
            $prefectureNom = $request->request->get('prefecture_nomPrefecture');
            $prefectureAdresse = $request->request->get('prefecture_adressePrefecture');
            $prefectureNumeroAdresse = $request->request->get('prefecture_numeroAdressePrefecture');
            $prefectureCommune = $request->request->get('prefecture_communePrefecture');
            $prefectureCP = $request->request->get('prefecture_cpPrefecture');
            $prefectureAutorite = $request->request->get('prefecture_prefectureAutorite');
            $prefectureService = $request->request->get('prefecture_prefectureService');
            
            // dump($request->request->get('prefecture_prefectureAutorite'));
            // die();
                if(strlen($prefectureNom) > 0 && strlen($prefectureAdresse) > 0 && strlen($prefectureNumeroAdresse) > 0 &&
                    strlen($prefectureCommune) > 0 && strlen($prefectureCP) > 0 && strlen($prefectureAutorite) > 0 &&
                    strlen($prefectureService) > 0){

                    $prefecture->setNomPrefecture($prefectureNom);
                    $prefecture->setAdressePrefecture($prefectureAdresse);
                    $prefecture->setNumeroAdressePrefecture($prefectureNumeroAdresse);
                    $prefecture->setCpPrefecture($prefectureCP);
                    $prefecture->setCommunePrefecture($prefectureCommune);
                    $prefecture->getPrefectureService($prefectureAutorite);
                    $prefecture->getPrefectureAutorite($prefectureService);
                    $manager->persist($prefecture);
                    $manager->flush();
                   
                    $response = new Response();
                    $response = JsonResponse::fromJsonString('{"id":'.$prefecture->getId().', "value":"'.$prefecture->getNomPrefecture().'"}');
                }
            return $response;
        }        
        return $this->render('stage/popPrefecture.html.twig', 
            ['form' => $form->createView()
            ]);
    }

    /**
     *  @Route("/stage/ajouter", name="stage_ajouter")
     *  @Route("/stage/{id}/modifier", name="stage_modifier")
     */
    public function stageForm(Stage $stage = null, Request $request, ObjectManager $manager)
    {
        if(!$stage){
        $stage = new Stage();
        }
        $form = $this->createForm(StageType::class, $stage);
        $form->handleRequest($request);
        if($form->isSubmitted() && $form->isValid()){
            $manager->persist($stage);
            $manager->flush();
            return $this->redirectToRoute('stage_index');
        }
        return $this->render('stage/ajouter.html.twig', [
            'formStage' => $form->createView(),
            'editMode' => $stage->getId() !== null
        ]);
    }
    /**
     *  @Route("/stage/{id}/supprimer", name="stage_supprimer")
     */
    public function delete(Stage $stage, ObjectManager $manager)
    {
        $manager->remove($stage);
        $manager->flush();
        return $this->redirectToRoute('stage_index');
    }
    /**
     * @Route("/stage/{id}/afficher", name="stage_afficher")
     */
    public function showOne(Stage $stage)
    {
        return $this->render('stage/afficher.html.twig', [
            'stage' => $stage
        ]);
    }
}


