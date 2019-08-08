<?php

namespace App\Controller;

use App\Entity\Stagiaire;
use App\Entity\Avantage;
use App\Form\StagiaireType;
use App\Entity\Licence;
use App\Form\LicenceType;
use App\Form\AvantageType;
use App\Repository\CommuneRepository;
use App\Repository\StagiaireRepository;
use App\Repository\PrefectureRepository;
use App\Repository\LicenceRepository;
use App\Repository\AvantageRepository;
use Symfony\Component\HttpFoundation\Request;
use Doctrine\Common\Persistence\ObjectManager;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Security;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Dompdf\Dompdf;
use Dompdf\Options;
use Knp\Component\Pager\PaginatorInterface;
/**
 * @Route("/admin")
 */
class StagiaireController extends AbstractController
{
    /**
     * @Route("/stagiaire", name="stagiaire_index")
     * 
     */
    // public function index(StagiaireRepository $repo, Request $request) :Response
    // {
       
    //     $s = $request->query->get('q');
    //     $allstagiaires = $repo->findAllWithSearch($s);


    //     return $this->render('stagiaire/index.html.twig', [
    //         'controller_name' => 'stagiaireController',
    //         'stagiaires' => $stagiaires,
            
    //     ]);
    // }
    public function index(StagiaireRepository $repo, PaginatorInterface $paginator, Request $request) 
    {
       
        $s = $request->query->get('q');
        $allstagiaires = $repo->findAllWithSearch($s);
          

        $stagiaires = $paginator->paginate(
            $allstagiaires,
            $request->query->getInt('page', 1), /*page number*/
            5 /*limit per page*/
        );
    
        $stagiaires ->setCustomParameters([
            'position' => 'centered',
            'size' => 'small',
            'rounded' => true,
        ]);
       
        return $this->render('stagiaire/index.html.twig', [
           
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
     // dump($request);
            // die();
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

    /**
    *  @Route("/stagiaire/loadFormLicence", name="stagiaire_licence")
    */
    public function popLicence(Licence $licence = null, LicenceRepository $repoLicence, PrefectureRepository $repoPrefecture, Request $request, ObjectManager $manager)
    {
        if(!$licence){
            $licence = new Licence();
        }

        $form = $this->createForm( LicenceType::class, $licence, array('method'=>'POST'));
        $form->handleRequest( $request );

        if($request->isMethod('POST')){
            
            $licenceNumber = $request->request->get('licence_licenceNumber');
            $licenceDate = $request->request->get('licence_licenceDate');
            $prefecture = $request->request->get('licence_prefecture');
           
            $year = substr($licenceDate, 0, 10);
            $date = (\DateTime::createFromFormat('Y-m-d', $year));

            $prefecture = $repoPrefecture->find($prefecture);

            $nbrs = $repoLicence->counter($licenceNumber,$year);
            $nbr = $nbrs[0][1];
    
            if(strlen($licenceNumber) > 0 && strlen($licenceDate) != "" && strlen($prefecture) != "0" && $nbr === "0"){

                $licence->setLicenceNumber($licenceNumber);
                $licence->setLicenceDate($date);
                $licence->setPrefecture($prefecture);
              
                $manager->persist($licence);
                
                $manager->flush();

                $response = new Response();
                
                $response = JsonResponse::fromJsonString('{"id":'.$licence->getId().', "value":"'.$licence->getLicenceNumber().'"}');
               
            }else{
                $response = new Response();
                $response = JsonResponse::fromJsonString('{"error":"existe"}');
            }      
            return $response;
            
        }  
        return $this->render('stagiaire/popLicence.html.twig', 
            ['form' => $form->createView()
            ]);
    }


    /**
     * @Route("/stagiaire/avantage", name="avantage_index")
     */
    public function avantageIndex(AvantageRepository $arepo)
    {
        $avantage = $arepo->findAll();
        return $this->render('stagiaire/avantage/index.html.twig', [
            'avantage' => $avantage,
        ]);
    }

     /**
     *  @Route("/stage/avantage/ajouter", name="avantage_ajouter")
     *  @Route("/stage/avantage/{id}/modifier", name="avantage_modifier")
     */
    public function avantageForm(Avantage $avantage = null, Request $request, ObjectManager $manager)
    {
        if(!$avantage){
        $avantage = new avantage();
        }
        $form = $this->createForm(AvantageType::class, $avantage);
        $form->handleRequest($request);
        if($form->isSubmitted() && $form->isValid()){
        
            $manager->persist($avantage);
            $manager->flush();
            return $this->redirectToRoute('avantage_index');
        }
        return $this->render('stagiaire/avantage/ajouter.html.twig', [
            'formAvantage' => $form->createView(),
            'editMode' => $avantage->getId() !== null
        ]);
    }

    /**
     * @Route("/stagiaire/{id}/imprimer", name="stagiaire_afficher_imprimer")
     */
    public function imprimerShowOne(stagiaire $stagiaire, Request $request)
    {
        $pdfOptions = new Options();
    $pdfOptions->set('defaultFont', 'Arial');
    
    // Instantiate Dompdf with our options
    $dompdf = new Dompdf($pdfOptions);
   $stagiaire ->getId();
   
    // Retrieve the HTML generated in our twig file
    $html = $this->renderView('stagiaire/pdf_show.html.twig', [
        'stagiaire' => $stagiaire
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
    $canvas->page_text(50, 574, "Détails - {$stagiaire} au $date", null, 10, array(0, 0, 0));
    // Output the generated PDF to Browser (force download)
    $dompdf->stream("details_{$stagiaire}.pdf", [
        "Attachment" => false
    ]);
}

/**
     * @Route("/stagiaire/{id}/facture", name="stagiaire_facture")
     */
    public function facture(stagiaire $stagiaire, Request $request)
    {
    $pdfOptions = new Options();
    $pdfOptions->set('defaultFont', 'Arial');
    
    // Instantiate Dompdf with our options
    $dompdf = new Dompdf($pdfOptions);
   $stagiaire ->getId();
   
    // Retrieve the HTML generated in our twig file
    $html = $this->renderView('stagiaire/pdf_facture.html.twig', [
        'stagiaire' => $stagiaire
    ]);
    
    // Load HTML to Dompdf
    $dompdf->loadHtml($html);
    
    // (Optional) Setup the paper size and orientation 'portrait' or 'portrait'
    $dompdf->setPaper('A4', 'portrait');

    // Render the HTML as PDF
    $dompdf->render();
    $canvas = $dompdf->get_canvas();
    $date = date("d-m-Y");
    $canvas->page_text(450, 80, "Besançon, le $date", null, 10, array(0, 0, 0));
    $canvas->page_text(120, 780, "Association Franc-comtoise d’Education Routière – 7 Square Saint Amour 25000 Besançon", null, 10, array(0, 0, 0));
    $canvas->page_text(200, 790, "Tél : 06 24 18 32 41 – Courriel : afer.wnr@gmail.com", null, 10, array(0, 0, 10));
    $canvas->page_text(240, 800, "N° de SIRET : 820 306 165 00011", null, 10, array(0, 0, 0));
    $canvas->page_text(210, 810, "N° de Formation Professionnelle : 27 25 03054 25", null, 10, array(0, 0, 10));
    // Output the generated PDF to Browser (force download)
    $dompdf->stream("facture_{$stagiaire}.pdf", [
        "Attachment" => false
    ]);
}
    }