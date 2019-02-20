<?php
namespace App\Controller;

use App\Entity\Animateur;
use App\Entity\AnimateurStatut;
use App\Entity\AnimateurFonction;

use App\Form\AnimateurType;
use App\Form\AnimateurStatutType;
use App\Form\AnimateurFonctionType;

use App\Repository\AnimateurRepository;
use App\Repository\AnimateurStatutRepository;
use App\Repository\AnimateurFonctionRepository;

use Doctrine\Common\Persistence\ObjectManager;

use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Security;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;

/**
 * @Route("/admin")
 * @IsGranted("ROLE_ADMIN")
 */
class AnimateurController extends AbstractController
{
    /**
     * @Route("/animateur", name="animateur_index")
     */
    public function index(AnimateurRepository $repo)
    {
        $animateurs = $repo->findAll();

        return $this->render('animateur/index.html.twig', [
            'controller_name' => 'AnimateurController',
            'animateurs' => $animateurs
        ]);
    }
    /**
     *  @Route("/animateur/ajouter", name="animateur_ajouter")
     *  @Route("/animateur/{id}/modifier", name="animateur_modifier")
     */
    public function animateurForm(Animateur $animateur = null, Request $request, ObjectManager $manager)
    {
        if(!$animateur){
        $animateur = new Animateur();
        }
        $form = $this->createForm(AnimateurType::class, $animateur);
        $form->handleRequest($request);
        if($form->isSubmitted() && $form->isValid()){
            $manager->persist($animateur);
            $manager->flush();
            return $this->redirectToRoute('animateur_index');
        }
        return $this->render('animateur/ajouter.html.twig', [
            'formAnimateur' => $form->createView(),
            'editMode' => $animateur->getId() !== null
        ]);
    }
    /**
     *  @Route("/animateur/{id}/supprimer", name="animateur_supprimer")
     */
    public function delete(Animateur $animateur, ObjectManager $manager)
    {
        $manager->remove($animateur);
        $manager->flush();
        return $this->redirectToRoute('animateur_index');
    }
    /**
     * @Route("/animateur/{id}/afficher", name="animateur_afficher")
     */
    public function showOne(Animateur $animateur)
    {
        return $this->render('animateur/afficher.html.twig', [
            'animateur' => $animateur
        ]);
    }

    // ----- Affichage, ajout, modification et suppresion des fonctions pour les animateurs -----

    /**
     * @Route("/animateur/fonction", name="animateurFonction_index")
     */
    public function afficherFonction(AnimateurFonctionRepository $repo)
    {
        $animateurfonctions = $repo->findAll();

        return $this->render('animateur/indexFonction.html.twig', [
            'controller_name' => 'AnimateurController',
            'animateurfonctions' => $animateurfonctions
        ]);
    }

    /**
     *  @Route("/animateur/fonction/ajouter", name="animateurFonction_ajouter")
     *  @Route("/animateur/fonction/{id}/modifier", name="animateurFonction_modifier")
     */
    public function animateurFonctionForm(AnimateurFonction $animateurfonction = null, Request $request, ObjectManager $manager)
    {
        if(!$animateurfonction){
        $animateurfonction = new AnimateurFonction();
        }
        $form = $this->createForm(AnimateurFonctionType::class, $animateurfonction);
        $form->handleRequest($request);
        if($form->isSubmitted() && $form->isValid()){
            $manager->persist($animateurfonction);
            $manager->flush();
            return $this->redirectToRoute('animateurFonction_index');
        }
        return $this->render('animateur/ajouterFonction.html.twig', [
            'formAnimateurFonction' => $form->createView(),
            'editMode' => $animateurfonction->getId() !== null
        ]);
    }

    /**
     *  @Route("/animateur/fonction/{id}/supprimer", name="animateurFonction_supprimer")
     */
    public function supprimerAnimateurFonction(AnimateurFonction $animateurfonction, ObjectManager $manager)
    {
        $manager->remove($animateurfonction);
        $manager->flush();
        return $this->redirectToRoute('animateurFonction_index');
    }

    // ----- Affichage, ajout, modification et suppresion des statuts pour les animateurs -----

    /**
     * @Route("/animateur/statut", name="animateurStatut_index")
     */
    public function afficherStatut(AnimateurStatutRepository $repo)
    {
        $animateurstatuts = $repo->findAll();

        return $this->render('animateur/indexStatut.html.twig', [
            'controller_name' => 'AnimateurController',
            'animateurstatuts' => $animateurstatuts
        ]);
    }

    /**
     *  @Route("/animateur/statut/ajouter", name="animateurStatut_ajouter")
     *  @Route("/animateur/statut/{id}/modifier", name="animateurStatut_modifier")
     */
    public function animateurStatutForm(AnimateurStatut $animateurstatut = null, Request $request, ObjectManager $manager)
    {
        if(!$animateurstatut){
        $animateurstatut = new AnimateurStatut();
        }
        $form = $this->createForm(AnimateurStatutType::class, $animateurstatut);
        $form->handleRequest($request);
        if($form->isSubmitted() && $form->isValid()){
            $manager->persist($animateurstatut);
            $manager->flush();
            return $this->redirectToRoute('animateurStatut_index');
        }
        return $this->render('animateur/ajouterStatut.html.twig', [
            'formAnimateurStatut' => $form->createView(),
            'editMode' => $animateurstatut->getId() !== null
        ]);
    }

    /**
     *  @Route("/animateur/statut/{id}/supprimer", name="animateurStatut_supprimer")
     */
    public function supprimerAnimateurStatut(AnimateurStatut $animateurstatut, ObjectManager $manager)
    {
        $manager->remove($animateurstatut);
        $manager->flush();
        return $this->redirectToRoute('animateurStatut_index');
    }
    /**
     * @Route("/animateur/statut/{id}/afficher", name="animateurStatut_afficher")
     */
    public function afficherUneAnimateurStatut(AnimateurStatut $animateurstatut)
    {
        return $this->render('animateur/afficherStatut.html.twig', [
            'animateurstatut' => $animateurstatut
        ]);
    }

     /**
     *  @Route("/animateur/fonction/loadFormAnimateurFonction", name="animateurFonction_pop")
     */
    public function popAnimateurFonction(AnimateurFonction $fonction = null,AnimateurFonctionRepository $repoAnimateur, Request $request, ObjectManager $manager)
    {
        if(!$fonction){
        $fonction = new AnimateurFonction();
        }
        $form = $this->createForm(AnimateurFonctionType::class, $fonction, array('method'=>'POST'));
        $form->handleRequest($request);

        if($request->isMethod('POST')){
            $animateurfonction = $request->request->get('animateur_fonction_nom');

            $nbrs = $repoAnimateur->counter($animateurfonction);
            $nbr = $nbrs[0][1];
    
            if(strlen($animateurfonction) > 0 && $nbr === "0"){
                $fonction->setNom($animateurfonction);
                $manager->persist( $fonction );
                $manager->flush();
                $response = new Response();
                $response = JsonResponse::fromJsonString('{"id":'.$fonction->getId().', "value":"'.$fonction->getNom().'"}');
            }else{
                $response = new Response();
                $response = JsonResponse::fromJsonString('{"error":"existe"}');
            }
             return $response;
        }
        return $this->render('animateur/popFonction.html.twig', [
            'form' => $form->createView(),
        ]);
    }

     /**
     *  @Route("/animateur/statut/loadFormAnimateurStatut", name="animateurStatut_pop")
     */
    public function popAnimateurStatut(AnimateurStatut $statut = null,AnimateurStatutRepository $repoAnimateur, Request $request, ObjectManager $manager)
    {
        if(!$statut){
            $statut = new AnimateurStatut();
        }
        $form = $this->createForm(AnimateurStatutType::class, $statut, array('method'=>'POST'));
        $form->handleRequest($request);

        if($request->isMethod('POST')){
            $animateurstatut = $request->request->get('animateur_statut_nom');

            $nbrs = $repoAnimateur->counter($animateurstatut);
            $nbr = $nbrs[0][1];
    
            if(strlen($animateurstatut) > 0 && $nbr === "0"){
                $statut->setNom($animateurstatut);
                $manager->persist( $statut );
                $manager->flush();
                $response = new Response();
                $response = JsonResponse::fromJsonString('{"id":'.$statut->getId().', "value":"'.$statut->getNom().'"}');
            }else{
                $response = new Response();
                $response = JsonResponse::fromJsonString('{"error":"existe"}');
            }
             return $response;
        }
        return $this->render('animateur/popStatut.html.twig', [
            'form' => $form->createView(),
        ]);
    }
}