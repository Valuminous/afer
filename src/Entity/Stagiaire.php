<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;

/**
 * @ORM\Entity(repositoryClass="App\Repository\StagiaireRepository")
 */
class Stagiaire
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
    private $nom_stagiaire;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $prenom_stagiaire;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $cp;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $commune;

    /**
     * @ORM\Column(type="string", length=255)
     *  string|null
     */
    private $nom_naissance_stagiaire;

    /**
     * @ORM\Column(type="date")
     */
    private $date_naissance_stagiaire;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $lieu_naissance_stagiaire;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $adresse_stagiaire;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $nationalite_stagiaire;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $numero_portable_stagiaire;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $numero_fixe_stagiaire;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $email_stagiaire;

    /**
     * @ORM\Column(type="boolean")
     */
    private $carte_jeune_stagiaire;

    /**
     * @ORM\Column(type="boolean")
     */
    private $partenaire_stagiaire;

    /**
     * @ORM\Column(type="boolean")
     */
    private $adherent_stagiaire;

    /**
     * @ORM\Column(type="string", length=25)
     */
    private $numero_adresse_stagiaire;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Stage", mappedBy="stagiaires")
     */
    private $stages;

    public function __construct()
    {
        $this->stages = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNomStagiaire(): ?string
    {
        return $this->nom_stagiaire;
    }

    public function setNomStagiaire(string $nom_stagiaire): self
    {
        $this->nom_stagiaire = $nom_stagiaire;

        return $this;
    }

    public function getPrenomStagiaire(): ?string
    {
        return $this->prenom_stagiaire;
    }

    public function setPrenomStagiaire(string $prenom_stagiaire): self
    {
        $this->prenom_stagiaire = $prenom_stagiaire;

        return $this;
    }

    public function getCp(): ?string
    {
        return $this->cp;
    }

    public function setCp(int $cp): self
    {
        $this->cp = $cp;

        return $this;
    }

    public function getCommune(): ?string
    {
        return $this->commune;
    }

    public function setCommune(string $commune): self
    {
        $this->commune = $commune;

        return $this;
    }

    public function getNomNaissanceStagiaire(): ?string
    {
        return $this->nom_naissance_stagiaire;
    }

    public function setNomNaissanceStagiaire(string $nom_naissance_stagiaire): self
    {
        $this->nom_naissance_stagiaire = $nom_naissance_stagiaire;

        return $this;
    }

    public function getDateNaissanceStagiaire(): ?\DateTimeInterface
    {
        return $this->date_naissance_stagiaire;
    }

    public function setDateNaissanceStagiaire(\DateTimeInterface $date_naissance_stagiaire): self
    {
        $this->date_naissance_stagiaire = $date_naissance_stagiaire;

        return $this;
    }

    public function getLieuNaissanceStagiaire(): ?string
    {
        return $this->lieu_naissance_stagiaire;
    }

    public function setLieuNaissanceStagiaire(string $lieu_naissance_stagiaire): self
    {
        $this->lieu_naissance_stagiaire = $lieu_naissance_stagiaire;

        return $this;
    }

    public function getAdresseStagiaire(): ?string
    {
        return $this->adresse_stagiaire;
    }

    public function setAdresseStagiaire(string $adresse_stagiaire): self
    {
        $this->adresse_stagiaire = $adresse_stagiaire;

        return $this;
    }

    public function getNationaliteStagiaire(): ?string
    {
        return $this->nationalite_stagiaire;
    }

    public function setNationaliteStagiaire(string $nationalite_stagiaire): self
    {
        $this->nationalite_stagiaire = $nationalite_stagiaire;

        return $this;
    }

    public function getNumeroPortableStagiaire(): ?string
    {
        return $this->numero_portable_stagiaire;
    }

    public function setNumeroPortableStagiaire(string $numero_portable_stagiaire): self
    {
        $this->numero_portable_stagiaire = $numero_portable_stagiaire;

        return $this;
    }

    public function getNumeroFixeStagiaire(): ?string
    {
        return $this->numero_fixe_stagiaire;
    }

    public function setNumeroFixeStagiaire(string $numero_fixe_stagiaire): self
    {
        $this->numero_fixe_stagiaire = $numero_fixe_stagiaire;

        return $this;
    }

    public function getEmailStagiaire(): ?string
    {
        return $this->email_stagiaire;
    }

    public function setEmailStagiaire(string $email_stagiaire): self
    {
        $this->email_stagiaire = $email_stagiaire;

        return $this;
    }

    public function getCarteJeuneStagiaire(): ?bool
    {
        return $this->carte_jeune_stagiaire;
    }

    public function setCarteJeuneStagiaire(bool $carte_jeune_stagiaire): self
    {
        $this->carte_jeune_stagiaire = $carte_jeune_stagiaire;

        return $this;
    }

    public function getPartenaireStagiaire(): ?bool
    {
        return $this->partenaire_stagiaire;
    }

    public function setPartenaireStagiaire(bool $partenaire_stagiaire): self
    {
        $this->partenaire_stagiaire = $partenaire_stagiaire;

        return $this;
    }

    public function getAdherentStagiaire(): ?bool
    {
        return $this->adherent_stagiaire;
    }

    public function setAdherentStagiaire(bool $adherent_stagiaire): self
    {
        $this->adherent_stagiaire = $adherent_stagiaire;

        return $this;
    }

    public function getNumeroAdresseStagiaire(): ?int
    {
        return $this->numero_adresse_stagiaire;
    }

    public function setNumeroAdresseStagiaire(int $numero_adresse_stagiaire): self
    {
        $this->numero_adresse_stagiaire = $numero_adresse_stagiaire;

        return $this;
    }

    /**
    * @return Collection|Stage[]
    */

    public function getStages(): Collection
    {
        return $this->stages;
    }

    public function addStage(Stage $stage): self
    {
        if (!$this->stages->contains($stage)) {
            $this->stages[] = $stage;
            $stage->addStage($this);
        }

        return $this;
    }

    public function removeStage(Stage $stage): self
    {
        if (!$this->stages->contains($stage)) {
            $this->stages->removeElement($stage);
            if ($relation->getStagiaire() === $this) {
                $relation->setStagiaire(null);
           
        }
        }

        return $this;
    }
}

