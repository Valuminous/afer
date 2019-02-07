<?php

namespace App\Controller;

use App\Entity\Prefecture;
use App\Form\PrefectureType;
use App\Repository\PrefectureRepository;
use Symfony\Component\HttpFoundation\Request;
use Doctrine\Common\Persistence\ObjectManager;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class PrefectureController extends AbstractController
{
    /**
     * @Route("/prefecture", name="prefecture")
     */
    public function index(PrefectureRepository $repoPrefecture)
    {
        $prefectures = $repoPrefecture->findAll();

        return $this->render('prefecture/index.html.twig', [
            'controller_name' => 'PrefectureController',
            'prefectures' => $prefectures
        ]);
    }

    /**
     * @Route("/prefecture/ajouter", name="prefecture_ajouter")
     * @Route("/prefecture/{id}/modifier", name="prefecture_modifier")
     */
    public function form(Prefecture $prefectures = null, Request $request, ObjectManager $manager) {

        if(!$prefectures) {
            $prefectures = new Prefecture();
        }

        $form = $this->createForm(PrefectureType::class, $prefectures);

        $form->handleRequest($request);

        if($form->isSubmitted() && $form->isValid()) {
            $manager->persist($prefectures);
            $manager->flush();

            return $this->redirectToRoute('prefecture');
        }

        return $this->render('prefecture/ajouter.html.twig', [
            'formPrefecture' => $form->createView(),
            'editMode' => $prefectures->getId() !== null
        ]);
    }


    /**
     * @Route("/prefecture/{id}", name="prefecture_afficher")
     */
    public function showOne(Prefecture $prefectures)
    {
        return $this->render('prefecture/afficher.html.twig', [
            'prefectures' => $prefectures
        ]);
    }

    /**
     * @Route("/prefecture/{id}/supprimer", name="prefecture_supprimer")
     */
    public function delete(Prefecture $prefectures, Request $request, ObjectManager $manager) {

        $manager->remove($prefectures);
        $manager->flush();

        return $this->redirectToRoute('prefecture');
    }
}
