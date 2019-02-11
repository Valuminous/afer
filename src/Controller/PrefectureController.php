<?php

namespace App\Controller;

use App\Entity\Prefecture;
use App\Form\PrefectureType;
use App\Entity\PrefectureService;
use App\Form\PrefectureServiceType;
use App\Repository\PrefectureRepository;
use Symfony\Component\HttpFoundation\Request;
use Doctrine\Common\Persistence\ObjectManager;
use App\Repository\PrefectureServiceRepository;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;


/**
 * @Route("/admin")
 */
class PrefectureController extends AbstractController
{
    /**
     * @Route("/prefecture", name="prefecture")
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
     * @Route("/prefecture/service", name="prefecture_service")
     */
    public function indexService(PrefectureServiceRepository $repoPrefectureService)
    {
        $services = $repoPrefectureService->findAll();

        return $this->render('prefecture/service.html.twig', [
            'services' => $services
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

        return $this->redirectToRoute('prefecture');
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

            return $this->redirectToRoute('prefecture_service');
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

        return $this->redirectToRoute('prefecture_service');
    }
}
