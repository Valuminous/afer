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
 * @Route("/stagiaire")
 */
class StagiaireController extends AbstractController
{
    /**
     * @Route("/", name="stagiaire_index", methods={"GET"})
     */
    public function index(StagiaireRepository $stagiaireRepository): Response
    {
        return $this->render('stagiaire/index.html.twig', [
            'stagiaires' => $stagiaireRepository->findAll()
            ]);
        
    }

    /**
     * @Route("/ajouter", name="stagiaire_ajouter", methods={"GET","POST"})
     */
    public function new(Request $request): Response
    {
        $stagiaire = new Stagiaire();
        $form = $this->createForm(StagiaireType::class, $stagiaire);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($stagiaire);
            $entityManager->flush();
            $this->addFlash('success', 'Stagiaire ajouté avec succès !');
            return $this->redirectToRoute('stagiaire_index');
        }

        return $this->render('stagiaire/new.html.twig', [
            'stagiaire' => $stagiaire,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}/afficher", name="stagiaire_afficher", methods={"GET"})
     */
    public function show(Stagiaire $stagiaire): Response
    {
        return $this->render('stagiaire/show.html.twig', [
            'stagiaire' => $stagiaire,
        ]);
    }

    /**
     * @Route("/{id}/modifier", name="stagiaire_modifier", methods={"GET","POST"})
    //  * @param Stagiaire $stagiaire
    //  * @param Request $request
    //  * @return Symfony\Component\HttpFoundation\Response
     */
    public function edit(Request $request, Stagiaire $stagiaire): Response
    {
        $form = $this->createForm(StagiaireType::class, $stagiaire);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('stagiaire_index', [
                'id' => $stagiaire->getId(),
            ]);
        }

        return $this->render('stagiaire/edit.html.twig', [
            'stagiaire' => $stagiaire,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}/supprimer", name="stagiaire_supprimer", methods={"DELETE"})
     */
    public function delete(Request $request, Stagiaire $stagiaire): Response
    {
        if ($this->isCsrfTokenValid('delete'.$stagiaire->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($stagiaire);
            $entityManager->flush();
            $this->addFlash('success', 'Stagiaire supprimé avec succès !');
        }

        return $this->redirectToRoute('stagiaire_index');
    }
}
