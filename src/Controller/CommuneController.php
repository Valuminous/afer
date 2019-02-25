<?php

namespace App\Controller;

use App\Entity\Commune;
use App\Form\CommuneType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\Common\Persistence\ObjectManager;
use App\Repository\CommuneRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Security;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;

class CommuneController extends AbstractController
{
/**
 * @Route("/search-commune", name="search-commune", methods="GET")
 * 
 */

    public function searchCommune(Request $request)
    {
        $q = $request->query->get('q'); 
        $results = $this->getDoctrine()->getRepository('App:Commune')->findLike($q);

        return $this->render('commune.json.twig', ['communes' => $results]);
    }

    // public function getCommune($id = null)
    // {
    //     $commune = $this->getDoctrine()->getRepository('App:Commune')->find($id);

    //     return $this->json($commune->getCp());
    // }
}
