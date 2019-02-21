<?php

namespace App\Controller;

use DateTime;
use App\Entity\Stage;
use App\Form\StageType;

use App\Entity\Tribunal;
use App\Entity\Animateur;
use App\Entity\Stagiaire;
use App\Entity\Prefecture;

use App\Form\TribunalType;

use App\Form\AnimateurType;
use App\Form\StagiaireType;
use App\Form\PrefectureType;
use App\Repository\StageRepository;

use App\Repository\CiviliteRepository;
use App\Repository\TribunalRepository;
use App\Repository\AnimateurRepository;
use App\Repository\StagiaireRepository;
use App\Repository\PrefectureRepository;
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
 * @IsGranted("ROLE_ADMIN")
 */
class StageController extends AbstractController
{
    /**
     * @Route("/stage", name="stage_index")
     */
    public function index(StageRepository $repo)
    {
        $stages = $repo->findAll();

        return $this->render('stage/index.html.twig', [
            'controller_name' => 'StageController',
            'stages' => $stages
        ]);
    }

     /**
     *  @Route("/stage/loadFormTribunal", name="stage_tribunal")
     */
    public function popTribunal(Tribunal $tribunal = null,TribunalRepository $repoTribunal, Request $request, ObjectManager $manager)
    {
        if(!$tribunal){
            $tribunal = new Tribunal();
        }

        $form = $this->createForm( TribunalType::class, $tribunal, array('method'=>'POST'));
        $form->handleRequest( $request );

        if($request->isMethod('POST')){
            $tribunalNom = $request->request->get('tribunal_nom_tribunal');
            $tribunalAdresse = $request->request->get('tribunal_adresse_tribunal');
            $tribunalNumeroAdresse = $request->request->get('tribunal_numero_adresse_tribunal');
            $tribunalCommune = $request->request->get('tribunal_commune_tribunal');
            $tribunalAutorite = $request->request->get('tribunal_tribunal_service');
            $tribunalService = $request->request->get('tribunal_tribunal_autorite');
      
             $nbrs = $repoTribunal->counter($tribunalNom,$tribunalCommune);
             $nbr = $nbrs[0][1];

            if(strlen($tribunalNom) > 0 && strlen($tribunalAdresse) > 0 && strlen($tribunalNumeroAdresse) > 0 &&
                strlen($tribunalCommune) > 0 && strlen($tribunalAutorite) > 0 && strlen($tribunalService) > 0 && $nbr === "0"){
                
                $tribunal->setNomTribunal($tribunalNom);
                $tribunal->setAdresseTribunal($tribunalAdresse);
                $tribunal->setNumeroAdresseTribunal($tribunalNumeroAdresse);
                $tribunal->setCommuneTribunal($tribunalCommune);
                $tribunal->getTribunalService($tribunalAutorite);
                $tribunal->getTribunalAutorite($tribunalService);
                $manager->persist( $tribunal );
                $manager->flush();
                $response = new Response();
                $response = JsonResponse::fromJsonString('{"id":'.$tribunal->getId().', "value":"'.$tribunal->getNomTribunal().'"}');
            }else{
                $response = new Response();
                $response = JsonResponse::fromJsonString('{"error":"existe"}');
            }
            return $response;
        }        
        return $this->render('stage/popTribunal.html.twig', 
            ['form' => $form->createView()
            ]);
    }

     /**
     *  @Route("/stage/loadFormPrefecture", name="stage_prefecture")
     */
    public function popPrefecture(Prefecture $prefecture = null,PrefectureRepository $repoPrefecture, Request $request, ObjectManager $manager)
    {
        if(!$prefecture){
            $prefecture = new Prefecture();
        }

        $form = $this->createForm( PrefectureType::class, $prefecture, array('method'=>'POST'));
        $form->handleRequest( $request );

        if($request->isMethod('POST')){
          
            $prefectureNom = $request->request->get('prefecture_nomPrefecture');
            $prefectureAdresse = $request->request->get('prefecture_adressePrefecture');
            $prefectureNumeroAdresse = $request->request->get('prefecture_numeroAdressePrefecture');
            $prefectureCommune = $request->request->get('prefecture_communePrefecture');
            $prefectureCP = $request->request->get('prefecture_cpPrefecture');
            $prefectureAutorite = $request->request->get('prefecture_prefectureAutorite');
            $prefectureService = $request->request->get('prefecture_prefectureService');

            $nbrs = $repoPrefecture->counter($prefectureNom,$prefectureCommune);
            $nbr = $nbrs[0][1];
            
            if(strlen($prefectureNom) > 0 && strlen($prefectureAdresse) > 0 && strlen($prefectureNumeroAdresse) > 0 &&
                strlen($prefectureCommune) > 0 && strlen($prefectureCP) > 0 && strlen($prefectureAutorite) > 0 &&
                strlen($prefectureService) > 0 && $nbr === "0"){
                $prefecture->setNomPrefecture($prefectureNom);
                $prefecture->setAdressePrefecture($prefectureAdresse);
                $prefecture->setNumeroAdressePrefecture($prefectureNumeroAdresse);
                $prefecture->setCpPrefecture($prefectureCP);
                $prefecture->setCommunePrefecture($prefectureCommune);
                $prefecture->getPrefectureService($prefectureAutorite);
                $prefecture->getPrefectureAutorite($prefectureService);

                $manager->persist($prefecture);
                $manager->flush();

                $response = new Response();
                $response = JsonResponse::fromJsonString('{"id":'.$prefecture->getId().', "value":"'.$prefecture->getNomPrefecture().'"}');
            }else{
                $response = new Response();
                $response = JsonResponse::fromJsonString('{"error":"existe"}');
            }      
            return $response;
        }  
        return $this->render('stage/popPrefecture.html.twig', 
            ['form' => $form->createView()
            ]);
    }


     /**
     *  @Route("/stage/loadFormStagiaire", name="stage_stagiaire")
     */
    public function popStagiaire(Stagiaire $stagiaire = null,CiviliteRepository $repoCivilite,StagiaireRepository $repoStagiaire, Request $request, ObjectManager $manager)
    {
        if(!$stagiaire){
            $stagiaire = new Stagiaire();
        }

        $form = $this->createForm( StagiaireType::class, $stagiaire, array('method'=>'POST'));
        $form->handleRequest( $request );

        if($request->isMethod('POST')){
           
            $stagiaireNom = $request->request->get('stagiaire_nomStagiaire');
            $stagiairePrenom = $request->request->get('stagiaire_prenomStagiaire');
            $stagiaireCp = $request->request->get('stagiaire_cpStagiaire');
            $stagiaireCommune = $request->request->get('stagiaire_communeStagiaire');
            $stagiaireNomNaissance = $request->request->get('stagiaire_nomNaissanceStagiaire');
            $stagiaireDateNaissance = $request->request->get('stagiaire_dateNaissanceStagiaire');
            $stagiaireLieuNaissance = $request->request->get('stagiaire_lieuNaissanceStagiaire');
            $stagiaireAdresse = $request->request->get('stagiaire_adresseStagiaire');
            $stagiaireNationalite = $request->request->get('stagiaire_nationaliteStagiaire');
            $stagiaireNumeroPortable = $request->request->get('stagiaire_numeroPortableStagiaire');
            $stagiaireNumeroFixe = $request->request->get('stagiaire_numeroFixeStagiaire');
            $stagiaireNumeroAdresse = $request->request->get('stagiaire_numeroAdresseStagiaire');
            $stagiaireEmail = $request->request->get('stagiaire_emailStagiaire');
            $stagiaireCarteJeune = $request->request->get('stagiaire_carteJeuneStagiaire');
            $stagiairePartenaire = $request->request->get('stagiaire_partenaireStagiaire');
            $stagiaireAdherent = $request->request->get('stagiaire_adherentStagiaire');
            $stagiaireCivilite = $request->request->get('stagiaire_civilite');
        
            $year = substr($stagiaireDateNaissance, 0, 10);
            $date = (\DateTime::createFromFormat('Y-m-d', $year));

            $civilite = $repoCivilite->find($stagiaireCivilite);

            $nbrs = $repoStagiaire->counter($stagiaireNom,$stagiairePrenom,$year);
            $nbr = $nbrs[0][1];
    
            if(strlen($stagiaireNom) > 0 && strlen($stagiairePrenom) > 0 && strlen($stagiaireCp) > 0 &&
                strlen($stagiaireCommune) > 0 && strlen($stagiaireNomNaissance) > 0 && strlen($stagiaireDateNaissance) != "" &&
                strlen($stagiaireLieuNaissance) > 0 && strlen($stagiaireAdresse) > 0 && strlen($stagiaireNationalite) > 0 &&
                strlen($stagiaireNumeroPortable) > 0 && strlen($stagiaireNumeroFixe) > 0 && strlen($stagiaireEmail) > 0 &&
                strlen($stagiaireNumeroAdresse) > 0 && strlen($stagiaireCivilite) > 0 && $nbr === "0"){

                $stagiaire->setNomStagiaire($stagiaireNom);
                $stagiaire->setPrenomStagiaire($stagiairePrenom);
                $stagiaire->setCpStagiaire($stagiaireCp);
                $stagiaire->setCommuneStagiaire($stagiaireCommune);
                $stagiaire->setNomNaissanceStagiaire($stagiaireNomNaissance);
                $stagiaire->setLieuNaissanceStagiaire($stagiaireLieuNaissance);
                $stagiaire->setAdresseStagiaire($stagiaireAdresse);
                $stagiaire->setNationaliteStagiaire($stagiaireNationalite);
                $stagiaire->setNumeroPortableStagiaire($stagiaireNumeroPortable);
                $stagiaire->setNumeroFixeStagiaire($stagiaireNumeroFixe);
                $stagiaire->setNumeroAdresseStagiaire($stagiaireNumeroAdresse);
                $stagiaire->setEmailStagiaire($stagiaireEmail);
                
                $stagiaire->setDateNaissanceStagiaire($date);
                $stagiaire->setCivilite($civilite);
                $stagiaire->setCarteJeuneStagiaire($stagiaireCarteJeune);
                $stagiaire->setPartenaireStagiaire($stagiairePartenaire);
                $stagiaire->setAdherentStagiaire($stagiaireAdherent);

                $manager->persist($stagiaire);
                $manager->flush();

                $response = new Response();
                $response = JsonResponse::fromJsonString('{"id":'.$stagiaire->getId().', "value":"'.$stagiaire->getPrenomStagiaire().'"}');
            }else{
                $response = new Response();
                $response = JsonResponse::fromJsonString('{"error":"existe"}');
            }      
            return $response;
        }  
        return $this->render('stage/popStagiaire.html.twig', 
            ['form' => $form->createView()
            ]);
    }


    /**
    *  @Route("/stage/loadFormAnimateur", name="stage_animateur")
    */
    public function popAnimateur(Animateur $animateur = null, CiviliteRepository $repoCivilite, AnimateurRepository $repoAnimateur, Request $request, ObjectManager $manager)
    {
        if(!$animateur){
            $animateur = new Animateur();
        }

        $form = $this->createForm( AnimateurType::class, $animateur, array('method'=>'POST'));
        $form->handleRequest( $request );

        if($request->isMethod('POST')){
           
            // dump($request);
            // die();
            $animateurNom = $request->request->get('animateur_nom_animateur');
            $animateurPrenom = $request->request->get('animateur_prenom_animateur');
            $animateurAdresse = $request->request->get('animateur_rue_animateur');
            $animateurCommune = $request->request->get('animateur_commune_animateur');
            $animateurCp = $request->request->get('animateur_cp_animateur');
            $animateurRegion = $request->request->get('animateur_region_animateur');
            $animateurEmail = $request->request->get('animateur_email_animateur');
            $animateurNumeroPortable = $request->request->get('animateur_numero_portable_animateur');
            $animateurNumeroFixe = $request->request->get('animateur_numero_fixe_animateur');
            $animateurSiret = $request->request->get('animateur_siret_animateur');
            $animateurUrssaf = $request->request->get('animateur_urssaf_animateur');
            $animateurRaisonSociale = $request->request->get('animateur_raison_sociale_animateur');
            $animateurGta = $request->request->get('animateur_gta_animateur');
            $animateurCivilite = $request->request->get('animateur_civilite');
            $animateurFonction = $request->request->get('animateur_animateurFonction');
            $animateurStatut = $request->request->get('animateur_animateurStatut');
            $animateurObservations = $request->request->get('animateur_observations_animateur');
        

            $civilite = $repoCivilite->find($animateurCivilite);

        //     $nbrs = $repoStagiaire->counter($stagiaireNom,$stagiairePrenom,$year);
        //     $nbr = $nbrs[0][1];
    
            if(strlen($animateurNom) > 0 && strlen($animateurCivilite) != "0" && strlen($animateurPrenom) > 0 &&
                strlen($animateurAdresse) > 0 && strlen($animateurCommune) > 0 && strlen($animateurCp) > 0 &&
                strlen($animateurRegion) > 0 && strlen($animateurSiret) > 0 && strlen($animateurUrssaf) > 0 &&
                strlen($animateurNumeroFixe) > 0 && strlen($stagiaireNumeroFixe) > 0 && strlen($stagiaireEmail) > 0 &&
                strlen($animateurRaisonSociale) > 0 && strlen($animateurGta) != "0" && strlen($animateurFonction) != "0" &&
                strlen($animateurStatut) != "0"){

                $animateur->setNomAnimateur($animateurNom);
                $animateur->setPrenomAnimateur($animateurPrenom);
                $animateur->setRaisonSocialeAnimateur($animateurRaisonSociale);
                $animateur->setGtaAnimateur($animateurGta);
                $animateur->setCpAnimateur($animateurCp);
                $animateur->setCommuneAnimateur($animateurCommune);
                $animateur->setRegionAnimateur($animateurRegion);
                $animateur->setNumeroRueAnimateur($animateurAdresse);
                $animateur->setNumeroPortableAnimateur($animateurNumeroPortable);
                $animateur->setNumeroFixeAnimateur($animateurNumeroFixe);
                $animateur->setEmailAnimateur($animateurEmail);
                $animateur->setUrssafAnimateur($animateurUrssaf);

                $animateur->setSiretAnimateur($animateurSiret);
                $animateur->setObservationsAnimateur($animateurObservations);
                $animateur->setAnimateurStatut($animateurStatut);
                $animateur->setAnimateurFonction($animateurFonction);
                $animateur->setCivilite($civilite);

                $manager->persist($animateur);
                $manager->flush();

                $response = new Response();
                $response = JsonResponse::fromJsonString('{"id":'.$animateur->getId().', "value":"'.$animateur->setPrenomAnimateur().'"}');
            }else{
                $response = new Response();
                $response = JsonResponse::fromJsonString('{"error":"existe"}');
            }      
            return $response;
        }  
        return $this->render('stage/popAnimateur.html.twig', 
            ['form' => $form->createView()
            ]);
    }

    /**
     *  @Route("/stage/ajouter", name="stage_ajouter")
     *  @Route("/stage/{id}/modifier", name="stage_modifier")
     */
    public function stageForm(Stage $stage = null, Request $request, ObjectManager $manager)
    {
        if(!$stage){
        $stage = new Stage();
        }
        $form = $this->createForm(StageType::class, $stage);
        $form->handleRequest($request);
        if($form->isSubmitted() && $form->isValid()){
            $manager->persist($stage);
            $manager->flush();
            return $this->redirectToRoute('stage_index');
        }
        return $this->render('stage/ajouter.html.twig', [
            'formStage' => $form->createView(),
            'editMode' => $stage->getId() !== null
        ]);
    }
    /**
     *  @Route("/stage/{id}/supprimer", name="stage_supprimer")
     */
    public function delete(Stage $stage, ObjectManager $manager)
    {
        $manager->remove($stage);
        $manager->flush();
        return $this->redirectToRoute('stage_index');
    }
    /**
     * @Route("/stage/{id}/afficher", name="stage_afficher")
     */
    public function showOne(Stage $stage)
    {
        return $this->render('stage/afficher.html.twig', [
            'stage' => $stage
        ]);
    }
}


