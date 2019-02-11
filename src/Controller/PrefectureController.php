<?php

namespace App\Controller;

use App\Entity\Prefecture;
use App\Form\PrefectureType;
use App\Entity\PrefectureService;
use App\Entity\PrefectureAutorite;
use App\Form\PrefectureServiceType;
use App\Form\PrefectureAutoriteType;
use App\Repository\PrefectureRepository;
use Symfony\Component\HttpFoundation\Request;
use Doctrine\Common\Persistence\ObjectManager;
use App\Repository\PrefectureServiceRepository;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\PrefectureAutoriteRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;


/**
 * @Route("/admin")
 */
class PrefectureController extends AbstractController
{
    /**
     * @Route("/prefecture", name="prefecture_index")
     */
    public function index(PrefectureRepository $repoPrefecture)
    {
        $prefectures = $repoPrefecture->findAll();

        return $this->render('prefecture/prefecture.html.twig', [
            'controller_name' => 'PrefectureController',
            'prefectures' => $prefectures
        ]);
    }

    /**
     * @Route("/prefecture/service", name="prefecture_service_index")
     */
    public function indexService(PrefectureServiceRepository $repoPrefectureService)
    {
        $services = $repoPrefectureService->findAll();

        return $this->render('prefecture/service.html.twig', [
            'services' => $services
        ]);
    }

    /**
     * @Route("/prefecture/autorite", name="prefecture_autorite_index")
     */
    public function indexAutorite(PrefectureAutoriteRepository $repoPrefectureAutorite)
    {
        $autorites = $repoPrefectureAutorite->findAll();

        return $this->render('prefecture/autorite.html.twig', [
            'autorites' => $autorites
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

            return $this->redirectToRoute('prefecture_index');
        }

        return $this->render('prefecture/ajouterPrefecture.html.twig', [
            'formPrefecture' => $form->createView(),
            'editMode' => $prefectures->getId() !== null
        ]);
    }


    /**
     * @Route("/prefecture/{id}", name="prefecture_afficher")
     */
    public function showOne(Prefecture $prefectures)
    {
        return $this->render('prefecture/afficherPrefecture.html.twig', [
            'prefectures' => $prefectures
        ]);
    }

    /**
     * @Route("/prefecture/{id}/supprimer", name="prefecture_supprimer")
     */
    public function delete(Prefecture $prefectures, Request $request, ObjectManager $manager) {

        $manager->remove($prefectures);
        $manager->flush();

        return $this->redirectToRoute('prefecture_index');
    }

    /**
     * @Route("/prefecture/service/ajouter", name="prefecture_service_ajouter")
     * @Route("/prefecture/service/{id}/modifier", name="prefecture_service_modifier")
     */
    public function ajoutPrefectureService(PrefectureService $service = null, Request $request, ObjectManager $manager) {

        if(!$service) {
            $service = new PrefectureService();
        }

        $form = $this->createForm(PrefectureServiceType::class, $service);

        $form->handleRequest($request);

        if($form->isSubmitted() && $form->isValid()) {
            $manager->persist($service);
            $manager->flush();

            return $this->redirectToRoute('prefecture_service_index');
        }

        return $this->render('prefecture/ajouterService.html.twig', [
            'formPrefectureService' => $form->createView(),
            'editMode' => $service->getId() !== null
        ]);
    }

    /**
     * @Route("/prefecture/service/{id}/supprimer", name="prefecture_service_supprimer")
     */
    public function deletePrefectureService(PrefectureService $service, Request $request, ObjectManager $manager) {

        $manager->remove($service);
        $manager->flush();

        return $this->redirectToRoute('prefecture_service_index');
    }

    /**
     * @Route("/prefecture/autorite/ajouter", name="prefecture_autorite_ajouter")
     * @Route("/prefecture/autorite/{id}/modifier", name="prefecture_autorite_modifier")
     */
    public function ajoutPrefectureAutorite(PrefectureAutorite $autorite = null, Request $request, ObjectManager $manager) {

        if(!$autorite) {
            $autorite = new PrefectureAutorite();
        }

        $form = $this->createForm(PrefectureAutoriteType::class, $autorite);

        $form->handleRequest($request);

        if($form->isSubmitted() && $form->isValid()) {
            $manager->persist($autorite);
            $manager->flush();

            return $this->redirectToRoute('prefecture_autorite_index');
        }

        return $this->render('prefecture/ajouterAutorite.html.twig', [
            'formPrefectureAutorite' => $form->createView(),
            'editMode' => $autorite->getId() !== null
        ]);
    }

    /**
     * @Route("/prefecture/autorite/{id}/supprimer", name="prefecture_autorite_supprimer")
     */
    public function deletePrefectureAutorite(PrefectureAutorite $autorite, Request $request, ObjectManager $manager) {

        $manager->remove($autorite);
        $manager->flush();

        return $this->redirectToRoute('prefecture_autorite_index');
    }

}
