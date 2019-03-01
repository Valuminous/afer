<?php

namespace App\Controller;

use App\Entity\LieuStage;
use App\Form\LieuStageType;
use App\Repository\LieuStageRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\Common\Persistence\ObjectManager;
use Symfony\Component\HttpFoundation\JsonResponse;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Security;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use App\Repository\CommuneRepository;

/**
 * @Route("/admin")
 * @IsGranted("ROLE_ADMIN")
 */
class LieuStageController extends AbstractController { 

    /**
     * @Route("/stage/lieuStage", name="lieuStage_index")
     */
    public function index(LieuStageRepository $repo)
    {
        $lieuStages = $repo->findAll();

        return $this->render('lieuStage/index.html.twig', [
            'controller_name' => 'lieuStageController',
            'lieuStages' => $lieuStages
        ]);
    }
    /**
     *  @Route("/stage/lieuStage/ajouter", name="lieuStage_ajouter")
     *  @Route("/stage/lieuStage/{id}/modifier", name="lieuStage_modifier")
     */
    public function lieuStageForm(LieuStage $lieuStage = null, Request $request, ObjectManager $manager)
    {
        if(!$lieuStage){
        $lieuStage = new lieuStage();
        }
        $form = $this->createForm(lieuStageType::class, $lieuStage);
        $form->handleRequest($request);
        if($form->isSubmitted() && $form->isValid()){
            $manager->persist($lieuStage);
            $manager->flush();
            return $this->redirectToRoute('lieuStage_index');
        }
        return $this->render('lieuStage/ajouter.html.twig', [
            'formLieuStage' => $form->createView(),
            'editMode' => $lieuStage->getId() !== null
        ]);
    }
    /**
     *  @Route("/stage/lieuStage/{id}/supprimer", name="lieuStage_supprimer")
     */
    public function delete(LieuStage $lieuStage, ObjectManager $manager)
    {
        $manager->remove($lieuStage);
        $manager->flush();
        return $this->redirectToRoute('lieuStage_index');
    }
    /**
     * @Route("/stage/lieuStage/{id}/afficher", name="lieuStage_afficher")
     */
    public function showOne(LieuStage $lieuStage)
    {
        return $this->render('lieuStage/afficher.html.twig', [
            'lieuStage' => $lieuStage
        ]);
    }

    /**
     * @Route("/stage/lieucommune", name="stage_lieucommune")
     */
    public function lieuCommune(CommuneRepository $crepo, Request $request)
    {
        $commune = $request->request->get("lieu_stage_nom_commune");
             
        $communes= $crepo->findCommunes($commune);
      
        // $result = json_encode($communes);
       
        $response = new JsonResponse($communes); 

        return $response;
    }
        // public function listCommune(Request $request)
        // {
        //     $em = $this->getDoctrine()->getManager();
        //     $communeRepository = $em->getRepository(Commune::class);
            
        //     $communes = $communeRepository->createQueryBuilder("q")
        //         ->where("q.commune = :communeid")
        //         ->setParameter("communeid", $request->query->get("communeid"))
        //         ->getQuery()
        //         ->getResult();
            
    
        //     $responseArray = array();
        //     foreach($communes as $commune){
        //         $responseArray[] = array(
        //             "id" => $commune->getId(),
        //             // "cp" => $cp->getName()
        //         );
        //     }
            
           
        //     return new JsonResponse($responseArray);
    
         
        // }

       
}
