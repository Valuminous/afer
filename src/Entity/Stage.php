<?php
namespace App\Entity;

use App\Entity\DateTimeInterface;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Symfony\Component\Validator\Constraints as Assert;
use Doctrine\ORM\Mapping as ORM;
/**
 * @ORM\Entity(repositoryClass="App\Repository\StageRepository")
 */
class Stage
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;
    /**
     * @ORM\Column(type="string", length=255, nullable=false)
     */
    private $numeroStage;
    /**
     * @ORM\Column(type="date")
     * @Assert\GreaterThanOrEqual("today", message = "La date de début de stage doit être supérieure ou égale à la date d'aujourd'hui")
     */
    private $dated;
    /**
     * @ORM\Column(type="date")
     * @Assert\GreaterThan(propertyPath="dated", message = "La date de fin de stage doit être supérieure à la date de début de stage")
     */
    private $datef;
    /**
     * @ORM\Column(type="boolean")
     */
    private $stageProgrammeOfficiel;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Prefecture", inversedBy="stages")
     * @ORM\JoinColumn(nullable=true)
     */
    private $prefecture;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Tribunal", inversedBy="stages")
     * @ORM\JoinColumn(nullable=true)
     */
    private $tribunal;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Animateur", inversedBy="stages")
     * @ORM\JoinColumn(nullable=false)
     */
    private $animateurs;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Stagiaire", inversedBy="stages")
     * @ORM\JoinColumn(nullable=false)
     */
    private $stagiaires;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\LieuStage", inversedBy="stages")
     */
    private $lieuStage;

    

    public function __construct()
    {
        $this->animateurs = new ArrayCollection();
        $this->stagiaires = new ArrayCollection();
       
    }
    public function getId(): ?int
    {
        return $this->id;
    }
    public function getNumeroStage(): ?string
    {
        return $this->numeroStage;
    }
    public function setNumeroStage(string $numeroStage): self
    {
        $this->numeroStage = $numeroStage;
        return $this;
    }
    public function getDated(): ?\DateTimeInterface
    {
        return $this->dated;
    }
    public function setDated(\DateTimeInterface $dated): self
    {
        $this->dated = $dated;
        return $this;
    }
    public function getDatef(): ?\DateTimeInterface
    {
        return $this->datef;
    }
    public function setDatef(\DateTimeInterface $datef): self
    {
        $this->datef = $datef;
        return $this;
    }
    public function getStageProgrammeOfficiel(): ?bool
    {
        return $this->stageProgrammeOfficiel;
    }
    public function setStageProgrammeOfficiel(bool $stageProgrammeOfficiel): self
    {
        $this->stageProgrammeOfficiel = $stageProgrammeOfficiel;
        return $this;
    }

    public function getPrefecture(): ?prefecture
    {
        return $this->prefecture;
    }

    public function setPrefecture(?prefecture $prefecture): self
    {
        $this->prefecture = $prefecture;

        return $this;
    }

    public function getTribunal(): ?tribunal
    {
        return $this->tribunal;
    }

    public function setTribunal(?tribunal $tribunal): self
    {
        $this->tribunal = $tribunal;

        return $this;
    }

    /**
     * @return Collection|Animateur[]
     */
    public function getAnimateurs(): Collection
    {
        return $this->animateurs;
    }

    public function addAnimateur(Animateur $animateur): self
    {
        if (!$this->animateurs->contains($animateur)) {
            $this->animateurs[] = $animateur;
            $animateur->addAnimateur($this);
        }

        return $this;
    }

    public function removeAnimateur(Animateur $animateur): self
    {
        if ($this->animateurs->contains($animateur)) {
            $this->animateurs->removeElement($animateur);
            $animateur->removeAnimateur($this);
        }

        return $this;
    }

    /**
     * @return Collection|Stagiaire[]
     */
    public function getStagiaires(): Collection
    {
        return $this->stagiaires;
    }

    public function addStagiaire(Stagiaire $stagiaire): self
    {
        if (!$this->stagiaires->contains($stagiaire)) {
            $this->stagiaires[] = $stagiaire;
            $stagiaire->addStagiaire($this);
        }
        return $this;
    }
    public function removeStagiaire(Stagiaire $stagiaire): self
    {
        if ($this->stagiaires->contains($stagiaire)) {
            $this->stagiaires->removeElement($stagiaire);
            $stagiaire->removeStagiaire($this);
           
        }
        return $this;
    }

    public function getLieuStage(): ?LieuStage
    {
        return $this->lieuStage;
    }

    public function setLieuStage(?LieuStage $lieuStage): self
    {
        $this->lieuStage = $lieuStage;

        return $this;
    }

    

}
