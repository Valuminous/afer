<?php

namespace App\Controller;

use App\Entity\Stagiaire;
use App\Form\StagiaireType;
use App\Repository\CommuneRepository;
use App\Repository\StagiaireRepository;
use App\Repository\PrefectureRepository;
use App\Repository\LicenceRepository;
use Symfony\Component\HttpFoundation\Request;
use Doctrine\Common\Persistence\ObjectManager;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Security;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("/admin")
 */
class StagiaireController extends AbstractController
{
    /**
     * @Route("/stagiaire", name="stagiaire_index")
     * 
     */
    public function index(StagiaireRepository $repo, Request $request) :Response
    {
       
        $s = $request->query->get('q');
        $stagiaires = $repo->findAllWithSearch($s);


        return $this->render('stagiaire/index.html.twig', [
            'controller_name' => 'stagiaireController',
            'stagiaires' => $stagiaires,
            
        ]);
    }
    /**
     *  @Route("/stagiaire/ajouter", name="stagiaire_ajouter")
     *  @Route("/stagiaire/{id}/modifier", name="stagiaire_modifier")
     *  @IsGranted("ROLE_ADMIN")
     */
    public function stagiaireForm(Stagiaire $stagiaire = null,StagiaireRepository $repoStagiaire, Request $request, ObjectManager $manager)
    {
        if(!$stagiaire){
           $stagiaire = new stagiaire();
        }
           $form = $this->createForm(stagiaireType::class, $stagiaire);
           $form->handleRequest($request);
   
           if($form->isSubmitted() && $form->isValid()){
   
            $stagiaireNom = $stagiaire->getNomStagiaire();
            $stagiairePrenom = $stagiaire->getPrenomStagiaire();
            $stagiaireDateNaissance = $stagiaire->getDateNaissanceStagiaire();
            $nbrs = $repoStagiaire->counter($stagiaireNom,$stagiairePrenom,$stagiaireDateNaissance);
            $nbr = $nbrs[0][1];
      
            if($stagiaire->getId() === null && $nbr === "0"){
                $manager->persist($stagiaire);
                $manager->flush();
            }else if($stagiaire->getId() !== null){
                $manager->persist($stagiaire);
                $manager->flush();
            }else{
                return $this->render('stagiaire/ajouter.html.twig', [
                    'formStagiaire' => $form->createView(),
                    'editMode' => $stagiaire->getId() !== null,
                    'error' => 'error'
                ]);
            }
            return $this->redirectToRoute('stagiaire_index');
        }
       
        return $this->render('stagiaire/ajouter.html.twig', [
            'formStagiaire' => $form->createView(),
            'editMode' => $stagiaire->getId() !== null
        ]);
        
       
    }
    /**
     *  @Route("/stagiaire/{id}/supprimer", name="stagiaire_supprimer")
     *  @IsGranted("ROLE_ADMIN")
     */
    public function delete(Stagiaire $stagiaire, ObjectManager $manager)
    {
        $manager->remove($stagiaire);
        $manager->flush();
        return $this->redirectToRoute('stagiaire_index');
    }
    /**
     * @Route("/stagiaire/{id}/afficher", name="stagiaire_afficher")
     */
    public function showOne(Stagiaire $stagiaire)
    {
        return $this->render('stagiaire/afficher.html.twig', [
            'stagiaire' => $stagiaire
        ]);
    }

    /**
    * @Route("/stagiaire/communeStagiaire", name="stagiaire_commune")
    */
    public function StagiaireCommune(CommuneRepository $crepo, Request $request)
    {
        $commune = $request->request->get("stagiaire_communeStagiaire"); 
        $communes= $crepo->findCommunes($commune);   
        $response = new JsonResponse($communes); 

        return $response;
    }

    /**
     * 
     * @Route("/stagiaire/permis", name="stagiaire_permis_index")
     */
    public function permisIndex(StagiaireRepository $repo, PrefectureRepository $prepo, Request $request) :Response
    {
        $s = $request->query->get('q');
        $stagiaires = $repo->findAllWithSearch($s);

        return $this->render('stagiaire/permis.html.twig', [
            'controller_name' => 'stagiaireController',
            'stagiaires' => $stagiaires,
           
        ]);
    }

/**
     * 
     * @Route("/stagiaire/infraction", name="stagiaire_infraction_index")
     */
    public function infractionIndex(StagiaireRepository $repo, Request $request) :Response
    {
        $s = $request->query->get('q');
        $stagiaires = $repo->findAllWithSearch($s);

        return $this->render('stagiaire/infraction.html.twig', [
            'controller_name' => 'stagiaireController',
            'stagiaires' => $stagiaires,
           
        ]);
    }
/**
     * 
     * @Route("/stagiaire/condamnation", name="stagiaire_condamnation_index")
     */
    public function condamnationIndex(StagiaireRepository $repo, Request $request) :Response
    {
        $s = $request->query->get('q');
        $stagiaires = $repo->findAllWithSearch($s);

        return $this->render('stagiaire/condamnation.html.twig', [
            'controller_name' => 'stagiaireController',
            'stagiaires' => $stagiaires,
           
        ]);
    }
    
    /**
     * 
     * @Route("/stagiaire/licence", name="stagiaire_licence_index")
     */
    public function licenceIndex(StagiaireRepository $repo, LicenceRepository $lrepo, Request $request) :Response
    {
        $s = $request->query->get('q');
        $stagiaires = $repo->findAllWithSearch($s);
        $licence = $lrepo->findAll();

        return $this->render('stagiaire/licence.html.twig', [
            'controller_name' => 'stagiaireController',
            'stagiaires' => $stagiaires,
            'licence' => $licence
           
        ]);
    }

        /**
     * @Route("/stagiaire/imprimer", name="stagiaire_imprimer", methods={"GET"})
     */
    public function print(StagiaireRepository $repo)
    {
       
    // Configure Dompdf according to your needs
    $pdfOptions = new Options();
    $pdfOptions->set('defaultFont', 'Arial');
    
    // Instantiate Dompdf with our options
    $dompdf = new Dompdf($pdfOptions);
    $stagiaires = $repo->findAll();
    // Retrieve the HTML generated in our twig file
    $html = $this->renderView('stagiaire/pdf.html.twig', [
        'stagiaires' => $stagiaires
    ]);
    // Load HTML to Dompdf
    $dompdf->loadHtml($html);
    
    // (Optional) Setup the paper size and orientation 'portrait' or 'portrait'
    $dompdf->setPaper('A4', 'landscape');

    // Render the HTML as PDF
    $dompdf->render();
    $canvas = $dompdf->get_canvas();
    $date = date("d-m-Y");
    $canvas->page_text(750, 575, "Page {PAGE_NUM} de {PAGE_COUNT}", null, 10, array(0, 0, 0));
    $canvas->page_text(50, 574, "Liste des stagiaires au $date", null, 10, array(0, 0, 0));
    // Output the generated PDF to Browser (force download)
    $dompdf->stream("liste_stagiaires.pdf", [
        "Attachment" => false
    ]);
}
    }