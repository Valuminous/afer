<?php

namespace App\Controller;

use App\Entity\Tribunal;
use App\Form\TribunalType;
use App\Repository\TribunalRepository;
use Symfony\Component\HttpFoundation\Request;
use Doctrine\Common\Persistence\ObjectManager;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("/tribunal")
 */
class TribunalController extends AbstractController
{
    /**
     * @Route("/", name="tribunal_index")
     */
    public function index(TribunalRepository $repoTribunal)
    {
        $tribunals = $repoTribunal->findAll();
        return $this->render('tribunal/index.html.twig', [
            'tribunals'=> $tribunals
        ]); 
    }

    /**
    * @Route("/ajouter", name="tribunal_ajouter")
    * @Route("/{id}/modifier", name="tribunal_modifier")
    */
    public function ajouter(Tribunal $tribunals = null, Request $request, ObjectManager $manager)
    {
        if(!$tribunals){
            $tribunals = new Tribunal();
        }

        $form = $this->createForm( TribunalType::class, $tribunals );
        
        $form->handleRequest( $request );
        
        if( $form->isSubmitted() && $form->isValid() ){
            
            $manager->persist( $tribunals );
            $manager->flush();
            return $this->redirectToRoute('tribunal_index') ;
        }
        
        return $this->render('tribunal/ajouter.html.twig', 
            ['form' => $form->createView(),
            'editMode' => $tribunals->getId() !== null
            ]);
    }

    /**
    * @Route("/{id}/supprimer", name="tribunal_supprimer")
    */
    public function supprimer(Tribunal $tribunal, Request $request, ObjectManager $manager)
    {
        $manager->remove($tribunal);
        $manager->flush();

        return $this->redirectToRoute('tribunal_index');
    }
}
