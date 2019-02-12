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
    private $nomStagiaire;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $prenomStagiaire;

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
    private $nomNaissanceStagiaire;

    /**
     * @ORM\Column(type="date")
     */
    private $dateNaissanceStagiaire;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $lieuNaissanceStagiaire;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $adresseStagiaire;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $nationaliteStagiaire;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $numeroPortableStagiaire;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $numeroFixeStagiaire;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $emailStagiaire;

    /**
     * @ORM\Column(type="boolean")
     */
    private $carteJeuneStagiaire;

    /**
     * @ORM\Column(type="boolean")
     */
    private $partenaireStagiaire;

    /**
     * @ORM\Column(type="boolean")
     */
    private $adherentStagiaire;

    /**
     * @ORM\Column(type="string", length=25)
     */
    private $numeroAdresseStagiaire;


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
        return $this->nomStagiaire;
    }

    public function setNomStagiaire(string $nomStagiaire): self
    {
        $this->nomStagiaire = $nomStagiaire;

        return $this;
    }

    public function getPrenomStagiaire(): ?string
    {
        return $this->prenomStagiaire;
    }

    public function setPrenomStagiaire(string $prenomStagiaire): self
    {
        $this->prenomStagiaire = $prenomStagiaire;

        return $this;
    }

    public function getCp(): ?string
    {
        return $this->cp;
    }

    public function setCp(string $cp): self
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
        return $this->nomNaissanceStagiaire;
    }

    public function setNomNaissanceStagiaire(string $nomNaissanceStagiaire): self
    {
        $this->nomNaissanceStagiaire = $nomNaissanceStagiaire;

        return $this;
    }

    public function getDateNaissanceStagiaire(): ?\DateTimeInterface
    {
        return $this->dateNaissanceStagiaire;
    }

    public function setDateNaissanceStagiaire(\DateTimeInterface $dateNaissanceStagiaire): self
    {
        $this->dateNaissanceStagiaire = $dateNaissanceStagiaire;

        return $this;
    }

    public function getLieuNaissanceStagiaire(): ?string
    {
        return $this->lieuNaissanceStagiaire;
    }

    public function setLieuNaissanceStagiaire(string $lieuNaissanceStagiaire): self
    {
        $this->lieuNaissanceStagiaire = $lieuNaissanceStagiaire;

        return $this;
    }

    public function getAdresseStagiaire(): ?string
    {
        return $this->adresseStagiaire;
    }

    public function setAdresseStagiaire(string $adresseStagiaire): self
    {
        $this->adresseStagiaire = $adresseStagiaire;

        return $this;
    }

    public function getNationaliteStagiaire(): ?string
    {
        return $this->nationaliteStagiaire;
    }

    public function setNationaliteStagiaire(string $nationaliteStagiaire): self
    {
        $this->nationaliteStagiaire = $nationaliteStagiaire;

        return $this;
    }

    public function getNumeroPortableStagiaire(): ?string
    {
        return $this->numeroPortableStagiaire;
    }

    public function setNumeroPortableStagiaire(string $numeroPortableStagiaire): self
    {
        $this->numeroPortableStagiaire = $numeroPortableStagiaire;

        return $this;
    }

    public function getNumeroFixeStagiaire(): ?string
    {
        return $this->numeroFixeStagiaire;
    }

    public function setNumeroFixeStagiaire(string $numeroFixeStagiaire): self
    {
        $this->numeroFixeStagiaire = $numeroFixeStagiaire;

        return $this;
    }

    public function getEmailStagiaire(): ?string
    {
        return $this->emailStagiaire;
    }

    public function setEmailStagiaire(string $emailStagiaire): self
    {
        $this->emailStagiaire = $emailStagiaire;

        return $this;
    }

    public function getCarteJeuneStagiaire(): ?bool
    {
        return $this->carteJeuneStagiaire;
    }

    public function setCarteJeuneStagiaire(bool $carteJeuneStagiaire): self
    {
        $this->carteJeuneStagiaire = $carteJeuneStagiaire;

        return $this;
    }

    public function getPartenaireStagiaire(): ?bool
    {
        return $this->partenaireStagiaire;
    }

    public function setPartenaireStagiaire(bool $partenaireStagiaire): self
    {
        $this->partenaireStagiaire = $partenaireStagiaire;

        return $this;
    }

    public function getAdherentStagiaire(): ?bool
    {
        return $this->adherentStagiaire;
    }

    public function setAdherentStagiaire(bool $adherentStagiaire): self
    {
        $this->adherentStagiaire = $adherentStagiaire;

        return $this;
    }

    public function getNumeroAdresseStagiaire(): ?string
    {
        return $this->numeroAdresseStagiaire;
    }

    public function setNumeroAdresseStagiaire(string $numeroAdresseStagiaire): self
    {
        $this->numeroAdresseStagiaire = $numeroAdresseStagiaire;

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

