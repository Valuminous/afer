<?php

namespace App\Entity;

use DateTimeInterface;
use Doctrine\ORM\Mapping as ORM;
use Doctrine\Common\Collections\Collection;
use Doctrine\Common\Collections\ArrayCollection;
use Symfony\Component\Validator\Constraints as Assert;

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
     * @Assert\NotBlank(message="Veuillez insérer le nom du stagiaire.")
     * @Assert\Length(min = 2, max = 255, minMessage = "La valeur insérée doit être comprise entre 2 et 255 caractères", maxMessage = "La valeur insérée doit être comprise entre 2 et 255 caractères")
     * 
     */
    private $nomStagiaire;

    /**
     * @ORM\Column(type="string", length=255)
     * @Assert\NotBlank(message="Veuillez insérer le prénom du stagiaire.")
     * @Assert\Length(min = 2, max = 255, minMessage = "La valeur insérée doit être comprise entre 2 et 255 caractères", maxMessage = "La valeur insérée doit être comprise entre 2 et 255 caractères")
     * 
     */
    private $prenomStagiaire;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $communeStagiaire;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     *  string|null
     * @Assert\Length(min = 2, max = 255, minMessage = "La valeur insérée doit être comprise entre 2 et 255 caractères", maxMessage = "La valeur insérée doit être comprise entre 2 et 255 caractères")
     * 
     */
    private $nomNaissanceStagiaire;

    /**
     * @ORM\Column(type="date", nullable=true)
     */
    private $dateNaissanceStagiaire;

    /**
     * @ORM\Column(type="string", length=255)
     * @Assert\Length(min = 2, max = 255, minMessage = "La valeur insérée doit être comprise entre 2 et 255 caractères", maxMessage = "La valeur insérée doit être comprise entre 2 et 255 caractères")
     * @Assert\Regex(pattern = "/^[a-zA-Zàâçéèêëîïôûùüÿñæœ .-]*$/i", match = true, message = "{{ value }} contient un caractère non autorisé")
     */
    private $lieuNaissanceStagiaire;

    /**
     * @ORM\Column(type="string", length=255)
     * @Assert\Length(min = 2, max = 255, minMessage = "La valeur insérée doit être comprise entre 2 et 255 caractères", maxMessage = "La valeur insérée doit être comprise entre 2 et 255 caractères")
     * 
     */
    private $adresseStagiaire;

    /**
     * @ORM\Column(type="string", length=255)
     * @Assert\Length(min = 2, max = 255, minMessage = "La valeur insérée doit être comprise entre 2 et 255 caractères", maxMessage = "La valeur insérée doit être comprise entre 2 et 255 caractères")
     * @Assert\Regex(pattern = "/^[a-zA-Zàâçéèêëîïôûùüÿñæœ .-]*$/i", match = true, message = "{{ value }} contient un caractère non autorisé")
     */
    private $nationaliteStagiaire;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Assert\Regex(pattern = "/^[0-9-]/", match = true, message = "Vous avez inséré autre chose qu'un chiffre")
     */
    private $numeroPortableStagiaire;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Assert\Regex(pattern = "/^[0-9-]/", match = true, message = "Vous avez inséré autre chose qu'un chiffre")
     */
    private $numeroFixeStagiaire;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Assert\Email(message = "L'adresse email '{{ value }}' n'est pas valide")
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
     * @ORM\JoinColumn(nullable=false)
     */
    private $stages;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Civilite", inversedBy="stagiaires")
     * @ORM\JoinColumn(nullable=true)
     */
    private $civilite;

        
    
    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $numeroPermis;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $datePermis;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Prefecture", inversedBy="stagiaires")
     * 
     */
    private $prefecture;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $lieuInfraction;

    /**
     * @ORM\Column(type="datetime")
     */
    private $dateInfraction;

    /**
     * @ORM\Column(type="datetime")
     */
    private $heureInfraction;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\NatureInfraction", inversedBy="stagiaires")
     */
    private $natureInfraction;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $numeroParquet;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $dateCondamnation;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Tribunal", inversedBy="stagiaires")
     */
    private $tribunal;

    /**
     * @ORM\OneToOne(targetEntity="App\Entity\Licence", mappedBy="stagiaire", cascade={"persist", "remove"})
     */
    private $licence;

    

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

    public function getCommuneStagiaire(): ?string
    {
        return $this->communeStagiaire;
    }

    public function setCommuneStagiaire(string $communeStagiaire): self
    {
        $this->communeStagiaire = $communeStagiaire;

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

    public function getDateNaissanceStagiaire(): ?DateTimeInterface
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
            if ($stage->getStage() === $this) {
                $stage->setStage(null);
           
        }
        }

        return $this;
    }

    public function getCivilite(): ?Civilite
    {
        return $this->civilite;
    }

    public function setCivilite(Civilite $civilite): self
    {
        $this->civilite = $civilite;

        return $this;
    }

    
    

    public function getNumeroPermis(): ?string
    {
        return $this->numeroPermis;
    }

    public function setNumeroPermis(?string $numeroPermis): self
    {
        $this->numeroPermis = $numeroPermis;

        return $this;
    }

    public function getDatePermis(): ?\DateTimeInterface
    {
        return $this->datePermis;
    }

    public function setDatePermis(?\DateTimeInterface $datePermis): self
    {
        $this->datePermis = $datePermis;

        return $this;
    }

    public function getPrefecture(): ?Prefecture
    {
        return $this->prefecture;
    }

    public function setPrefecture(?Prefecture $prefecture): self
    {
        $this->prefecture = $prefecture;

        return $this;
    }

    public function getLieuInfraction(): ?string
    {
        return $this->lieuInfraction;
    }

    public function setLieuInfraction(?string $lieuInfraction): self
    {
        $this->lieuInfraction = $lieuInfraction;

        return $this;
    }

    public function getDateInfraction(): ?\DateTimeInterface
    {
        return $this->dateInfraction;
    }

    public function setDateInfraction(\DateTimeInterface $dateInfraction): self
    {
        $this->dateInfraction = $dateInfraction;

        return $this;
    }

    public function getHeureInfraction(): ?\DateTimeInterface
    {
        return $this->heureInfraction;
    }

    public function setHeureInfraction(\DateTimeInterface $heureInfraction): self
    {
        $this->heureInfraction = $heureInfraction;

        return $this;
    }

    public function getNatureInfraction(): ?NatureInfraction
    {
        return $this->natureInfraction;
    }

    public function setNatureInfraction(?NatureInfraction $natureInfraction): self
    {
        $this->natureInfraction = $natureInfraction;

        return $this;
    }

    public function getNumeroParquet(): ?string
    {
        return $this->numeroParquet;
    }

    public function setNumeroParquet(?string $numeroParquet): self
    {
        $this->numeroParquet = $numeroParquet;

        return $this;
    }

    public function getDateCondamnation(): ?\DateTimeInterface
    {
        return $this->dateCondamnation;
    }

    public function setDateCondamnation(?\DateTimeInterface $dateCondamnation): self
    {
        $this->dateCondamnation = $dateCondamnation;

        return $this;
    }

    public function getTribunal(): ?Tribunal
    {
        return $this->tribunal;
    }

    public function setTribunal(?Tribunal $tribunal): self
    {
        $this->tribunal = $tribunal;

        return $this;
    }

    public function getLicence(): ?Licence
    {
        return $this->licence;
    }

    public function setLicence(?Licence $licence): self
    {
        $this->licence = $licence;

        // set (or unset) the owning side of the relation if necessary
        $newStagiaire = $licence === null ? null : $this;
        if ($newStagiaire !== $licence->getStagiaire()) {
            $licence->setStagiaire($newStagiaire);
        }

        return $this;
    }
   
       
 /**
     * toString
     */
    public function __toString() {
        return $this->getNomStagiaire();
    }
}

