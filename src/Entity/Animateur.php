<?php
namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
/**
 * @ORM\Entity(repositoryClass="App\Repository\AnimateurRepository")
 */
class Animateur
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;
    /**
     * @ORM\Column(type="string", length=255)
     */
    private $nom_animateur;
    /**
     * @ORM\Column(type="string", length=255)
     */
    private $prenom_animateur;
    /**
     * @ORM\Column(type="string", length=255)
     */
    private $raison_sociale_animateur;
    /**
     * @ORM\Column(type="string", length=255)
     */
    private $fonction_animateur;
    /**
     * @ORM\Column(type="string", length=255)
     */
    private $status_animateur;
    /**
     * @ORM\Column(type="boolean")
     */
    private $gta_animateur = false;
    /**
     * @ORM\Column(type="string", length=255)
     */
    private $cp_animateur;
    /**
     * @ORM\Column(type="string", length=255)
     */
    private $commune_animateur;
    /**
     * @ORM\Column(type="string", length=255)
     */
    private $region_animateur;
    /**
     * @ORM\Column(type="string", length=255)
     */
    private $rue_animateur;
    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $numero_portable_animateur;
    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $numero_fixe_animateur;
    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $email_animateur;
    /**
     * @ORM\Column(type="string", length=255)
     */
    private $urssaf_animateur;
    /**
     * @ORM\Column(type="string", length=255)
     */
    private $siret_animateur;
    /**
     * @ORM\Column(type="string", length=255)
     */
    private $observations_animateur;
    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\AnimateurStatut", inversedBy="relation")
     */
    private $animateurStatut;
    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\AnimateurFonction", inversedBy="relation")
     */
    private $animateurFonction;

     /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Stage", mappedBy="animateurs")
     */
    private $stages;

    public function __construct()
    {
        $this->Stages = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }
    public function getNomAnimateur(): ?string
    {
        return $this->nom_animateur;
    }
    public function setNomAnimateur(string $nom_animateur): self
    {
        $this->nom_animateur = $nom_animateur;
        return $this;
    }
    public function getPrenomAnimateur(): ?string
    {
        return $this->prenom_animateur;
    }
    public function setPrenomAnimateur(string $prenom_animateur): self
    {
        $this->prenom_animateur = $prenom_animateur;
        return $this;
    }
    public function getRaisonSocialeAnimateur(): ?string
    {
        return $this->raison_sociale_animateur;
    }
    public function setRaisonSocialeAnimateur(string $raison_sociale_animateur): self
    {
        $this->raison_sociale_animateur = $raison_sociale_animateur;
        return $this;
    }
    public function getFonctionAnimateur(): ?string
    {
        return $this->fonction_animateur;
    }
    public function setFonctionAnimateur(string $fonction_animateur): self
    {
        $this->fonction_animateur = $fonction_animateur;
        return $this;
    }
    public function getStatusAnimateur(): ?string
    {
        return $this->status_animateur;
    }
    public function setStatusAnimateur(string $status_animateur): self
    {
        $this->status_animateur = $status_animateur;
        return $this;
    }
    public function getGtaAnimateur(): ?bool
    {
        return $this->gta_animateur;
    }
    public function setGtaAnimateur(string $gta_animateur): self
    {
        $this->gta_animateur = $gta_animateur;
        return $this;
    }
    public function getCpAnimateur(): ?string
    {
        return $this->cp_animateur;
    }
    public function setCpAnimateur(string $cp_animateur): self
    {
        $this->cp_animateur = $cp_animateur;
        return $this;
    }
    public function getCommuneAnimateur(): ?string
    {
        return $this->commune_animateur;
    }
    public function setCommuneAnimateur(string $commune_animateur): self
    {
        $this->commune_animateur = $commune_animateur;
        return $this;
    }
    public function getRegionAnimateur(): ?string
    {
        return $this->region_animateur;
    }
    public function setRegionAnimateur(string $region_animateur): self
    {
        $this->region_animateur = $region_animateur;
        return $this;
    }
    public function getRueAnimateur(): ?string
    {
        return $this->rue_animateur;
    }
    public function setRueAnimateur(string $rue_animateur): self
    {
        $this->rue_animateur = $rue_animateur;
        return $this;
    }
    public function getNumeroPortableAnimateur(): ?string
    {
        return $this->numero_portable_animateur;
    }
    public function setNumeroPortableAnimateur(string $numero_portable_animateur): self
    {
        $this->numero_portable_animateur = $numero_portable_animateur;
        return $this;
    }
    public function getNumeroFixeAnimateur(): ?string
    {
        return $this->numero_fixe_animateur;
    }
    public function setNumeroFixeAnimateur(string $numero_fixe_animateur): self
    {
        $this->numero_fixe_animateur = $numero_fixe_animateur;
        return $this;
    }
    public function getEmailAnimateur(): ?string
    {
        return $this->email_animateur;
    }
    public function setEmailAnimateur(string $email_animateur): self
    {
        $this->email_animateur = $email_animateur;
        return $this;
    }
    public function getUrssafAnimateur(): ?string
    {
        return $this->urssaf_animateur;
    }
    public function setUrssafAnimateur(string $urssaf_animateur): self
    {
        $this->urssaf_animateur = $urssaf_animateur;
        return $this;
    }
    public function getSiretAnimateur(): ?string
    {
        return $this->siret_animateur;
    }
    public function setSiretAnimateur(string $siret_animateur): self
    {
        $this->siret_animateur = $siret_animateur;
        return $this;
    }
    public function getObservationsAnimateur(): ?string
    {
        return $this->observations_animateur;
    }
    public function setObservationsAnimateur(string $observations_animateur): self
    {
        $this->observations_animateur = $observations_animateur;
        return $this;
    }
    public function getAnimateurStatut(): ?AnimateurStatut
    {
        return $this->animateurStatut;
    }
    public function setAnimateurStatut(?AnimateurStatut $animateurStatut): self
    {
        $this->animateurStatut = $animateurStatut;
        return $this;
    }
    public function getAnimateurFonction(): ?AnimateurFonction
    {
        return $this->animateurFonction;
    }
    public function setAnimateurFonction(?AnimateurFonction $animateurFonction): self
    {
        $this->animateurFonction = $animateurFonction;
        return $this;
    }

     /**
    * @return Collection|Stage[]
    */

    public function getStages(): Collection
    {
        return $this->Stages;
    }

    public function addStage(Stage $stage): self
    {
        if (!$this->Stages->contains($stage)) {
            $this->Stages[] = $stage;
            
        }
        return $this;
    }
    public function removeStage(Stage $stage): self
    {
        if ($this->Stages->contains($stage)) {
            $this->Stages->removeElement($stage);
            
        }

        return $this;
    }
}