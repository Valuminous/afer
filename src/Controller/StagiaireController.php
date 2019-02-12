<?php

namespace App\Controller;

use App\Entity\Stagiaire;
use App\Form\StagiaireType;
use App\Repository\StagiaireRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\Common\Persistence\ObjectManager;

/**
 * @Route("/admin")
 */
class StagiaireController extends AbstractController
{
    /**
     * @Route("/stagiaire", name="stagiaire_index")
     */
    public function index(StagiaireRepository $repo)
    {
        $stagiaires = $repo->findAll();

        return $this->render('stagiaire/index.html.twig', [
            'controller_name' => 'stagiaireController',
            'stagiaires' => $stagiaires
        ]);
    }
    /**
     *  @Route("/stagiaire/ajouter", name="stagiaire_ajouter")
     *  @Route("/stagiaire/{id}/modifier", name="stagiaire_modifier")
     */
    public function stagiaireForm(Stagiaire $stagiaire = null, Request $request, ObjectManager $manager)
    {
        if(!$stagiaire){
        $stagiaire = new stagiaire();
        }
        $form = $this->createForm(stagiaireType::class, $stagiaire);
        $form->handleRequest($request);
        if($form->isSubmitted() && $form->isValid()){
            $manager->persist($stagiaire);
            $manager->flush();
            return $this->redirectToRoute('stagiaire_index');
        }
        return $this->render('stagiaire/ajouter.html.twig', [
            'formStagiaire' => $form->createView(),
            'editMode' => $stagiaire->getId() !== null
        ]);
    }
    /**
     *  @Route("/stagiaire/{id}/supprimer", name="stagiaire_supprimer")
     */
    public function delete(Stagiaire $stagiaire, ObjectManager $manager)
    {
        $manager->remove($stagiaire);
        $manager->flush();
        return $this->redirectToRoute('stagiaire_index');
    }
    /**
     * @Route("/stagiaire/{id}/afficher", name="stagiaire_afficher")
     */
    public function showOne(Stagiaire $stagiaire)
    {
        return $this->render('stagiaire/afficher.html.twig', [
            'stagiaire' => $stagiaire
        ]);
    }
}