<?php

namespace App\Controller;

use App\Entity\Stage;
use App\Form\StageType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Doctrine\Common\Persistence\ObjectManager;
use App\Repository\StageRepository;

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


