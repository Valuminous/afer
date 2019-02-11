<?php
namespace App\Controller;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Doctrine\Common\Persistence\ObjectManager;
use App\Entity\Animateur;
use App\Form\AnimateurType;
use App\Form\AnimateurStatutType;
use App\Form\AnimateurFonctionType;
use App\Repository\AnimateurRepository;
use App\Entity\AnimateurFonction;
use App\Repository\AnimateurFonctionRepository;
use App\Repository\AnimateurStatutRepository;
use App\Entity\AnimateurStatut;

class AnimateurController extends AbstractController
{
    /**
     * @Route("admin/animateur", name="animateur")
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
     *  @Route("admin/animateur/ajouter", name="animateur_ajouter")
     *  @Route("admin/animateur/{id}/modifier", name="animateur_modifier")
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
            return $this->redirectToRoute('animateur');
        }
        return $this->render('animateur/ajouter.html.twig', [
            'formAnimateur' => $form->createView(),
            'editMode' => $animateur->getId() !== null
        ]);
    }
    /**
     *  @Route("admin/animateur/{id}/supprimer", name="animateur_supprimer")
     */
    public function delete(Animateur $animateur, ObjectManager $manager)
    {
        $manager->remove($animateur);
        $manager->flush();
        return $this->redirectToRoute('animateur');
    }
    /**
     * @Route("admin/animateur/{id}/afficher", name="animateur_afficher")
     */
    public function showOne(Animateur $animateur)
    {
        return $this->render('animateur/afficher.html.twig', [
            'animateur' => $animateur
        ]);
    }

    // ----- Affichage, ajout, modification et suppresion des fonctions pour les animateurs -----

    /**
     * @Route("admin/animateur/fonction", name="animateurFonction")
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
     *  @Route("admin/animateur/fonction/ajouter", name="animateurFonction_ajouter")
     *  @Route("admin/animateur/fonction/{id}/modifier", name="animateurFonction_modifier")
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
            return $this->redirectToRoute('animateurFonction');
        }
        return $this->render('animateur/ajouterFonction.html.twig', [
            'formAnimateurFonction' => $form->createView(),
            'editMode' => $animateurfonction->getId() !== null
        ]);
    }

    /**
     *  @Route("admin/animateur/fonction/{id}/supprimer", name="animateurFonction_supprimer")
     */
    public function supprimerAnimateurFonction(AnimateurFonction $animateurfonction, ObjectManager $manager)
    {
        $manager->remove($animateurfonction);
        $manager->flush();
        return $this->redirectToRoute('animateurFonction');
    }
    /**
     * @Route("admin/animateur/fonction/{id}/afficher", name="animateurFonction_afficher")
     */
    public function afficherUneAnimateurFonction(AnimateurFonction $animateurfonction)
    {
        return $this->render('animateur/afficherFonction.html.twig', [
            'animateurfonction' => $animateurfonction
        ]);
    }

    // ----- Affichage, ajout, modification et suppresion des statuts pour les animateurs -----

    /**
     * @Route("admin/animateur/statut", name="animateurStatut")
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
     *  @Route("admin/animateur/statut/ajouter", name="animateurStatut_ajouter")
     *  @Route("admin/animateur/statut/{id}/modifier", name="animateurStatut_modifier")
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
            return $this->redirectToRoute('animateurStatut');
        }
        return $this->render('animateur/ajouterStatut.html.twig', [
            'formAnimateurStatut' => $form->createView(),
            'editMode' => $animateurstatut->getId() !== null
        ]);
    }

    /**
     *  @Route("admin/animateur/statut/{id}/supprimer", name="animateurStatut_supprimer")
     */
    public function supprimerAnimateurStatut(AnimateurStatut $animateurstatut, ObjectManager $manager)
    {
        $manager->remove($animateurstatut);
        $manager->flush();
        return $this->redirectToRoute('animateurStatut');
    }
    /**
     * @Route("admin/animateur/statut/{id}/afficher", name="animateurStatut_afficher")
     */
    public function afficherUneAnimateurStatut(AnimateurStatut $animateurstatut)
    {
        return $this->render('animateur/afficherStatut.html.twig', [
            'animateurstatut' => $animateurstatut
        ]);
    }
}