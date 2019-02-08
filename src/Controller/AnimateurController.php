<?php
namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Doctrine\Common\Persistence\ObjectManager;
use App\Entity\Animateur;
use App\Form\AnimateurType;
use App\Repository\AnimateurRepository;


class AnimateurController extends AbstractController
{
    /**
     * @Route("/animateur", name="animateur")
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
     *  @Route("animateur/ajouter", name="animateur_ajouter")
     *  @Route("animateur/{id}/modifier", name="animateur_modifier")
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
     *  @Route("animateur/{id}/supprimer", name="animateur_supprimer")
     */
    public function delete(Animateur $animateur, ObjectManager $manager)
    {
        $manager->remove($animateur);
        $manager->flush();
        return $this->redirectToRoute('animateur');
    }
    /**
     * @Route("animateur/{id}/afficher", name="animateur_afficher")
     */
    public function showOne(Animateur $animateur)
    {
        return $this->render('animateur/afficher.html.twig', [
            'animateur' => $animateur
        ]);
    }
}