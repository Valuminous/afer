<?php

namespace App\Controller;

use App\Entity\Infraction;
use App\Form\InfractionType;
use App\Repository\InfractionRepository;
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
class InfractionController extends AbstractController
{
    /**
     * 
     */
    public function index(InfractionRepository $repo)
    {

        $infraction = $repo->findAll();

        return $this->render('infraction/index.html.twig', [
            'controller_name' => 'InfractionController',
            'infraction' => $infraction
        ]);
    }
     /**
     *  @Route("/stagiaire/infraction/ajouter", name="infraction_ajouter")
     *  @Route("/stagiaire/infraction/{id}/modifier", name="infraction_modifier")
     */
    public function infractionForm(Infraction $infraction = null, InfractionRepository $repoInfraction, Request $request, ObjectManager $manager)
    {
            if(!$infraction){
            $infraction = new infraction();
            }
            $form = $this->createForm(infractionType::class, $infraction);
            $form->handleRequest($request);
            
            if($form->isSubmitted() && $form->isValid()){

           
                $manager->persist($infraction);
                $manager->flush();
            
            }
            return $this->render('infraction/ajouter.html.twig', [
                'formInfraction' => $form->createView(),
                'editMode' => $infraction->getId() !== null,
                // 'error' => 'error'
                ]);
            }
        
    /**
     *  @Route("/stagiaire/infraction/{id}/supprimer", name="infraction_supprimer")
     */
    public function delete(Infraction $infraction, ObjectManager $manager)
    {
        $manager->remove($infraction);
        $manager->flush();
        return $this->redirectToRoute('infraction_index');
    }
    /**
     * @Route("/stagiaire/infraction/{id}/afficher", name="infraction_afficher")
     */
    public function showOne(Infraction $infraction)
    {
        return $this->render('infraction/afficher.html.twig', [
            'infraction' => $infraction
        ]);
    }

}
