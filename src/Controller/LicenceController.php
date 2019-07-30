<?php

namespace App\Controller;

use App\Entity\Licence;
use App\Form\LicenceType;
use App\Repository\LicenceRepository;
use Doctrine\Common\Persistence\ObjectManager;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Security;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("/admin")
 * @IsGranted("ROLE_ADMIN")
 */
class LicenceController extends AbstractController
{
    /**
     * @Route("/stagiaire/licence", name="licence_index")
     */
    public function index(LicenceRepository $repo)
    {

        $licence = $repo->findAll();

        return $this->render('licence/index.html.twig', [
            'controller_name' => 'LicenceController',
            'licence' => $licence
        ]);
    }
     /**
     *  @Route("/stagiaire/licence/ajouter", name="licence_ajouter")
     *  @Route("/stagiaire/licence/{id}/modifier", name="licence_modifier")
     */
    public function licenceForm(Licence $licence = null, Request $request, ObjectManager $manager)
    {
        if(!$licence){
        $licence = new licence();
        }
        $form = $this->createForm(licenceType::class, $licence);
        $form->handleRequest($request);
        if($form->isSubmitted() && $form->isValid()){
            // dump($request);
            // die();
            $manager->persist($licence);
            $manager->flush();
            return $this->redirectToRoute('licence_index');
        }
        return $this->render('licence/ajouter.html.twig', [
            'formLicence' => $form->createView(),
            'editMode' => $licence->getId() !== null
        ]);
    }
    /**
     *  @Route("/stagiaire/licence/{id}/supprimer", name="licence_supprimer")
     */
    public function delete(Licence $licence, ObjectManager $manager)
    {
        $manager->remove($licence);
        $manager->flush();
        return $this->redirectToRoute('licence_index');
    }
    /**
     * @Route("/stagiaire/licence/{id}/afficher", name="licence_afficher")
     */
    public function showOne(Licence $licence)
    {
        return $this->render('licence/afficher.html.twig', [
            'licence' => $licence
        ]);
    }

}
