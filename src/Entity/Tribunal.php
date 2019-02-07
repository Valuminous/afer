<?php

namespace App\Entity;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\TribunalRepository")
 */
class Tribunal
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
    private $nom_tribunal;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $adresse_tribunal;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $numero_adresse_tribunal;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $commune_tribunal;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\TribunalService", inversedBy="relation")
     */
    private $tribunalService;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\TribunalAutorite", inversedBy="relation")
     */
    private $tribunalAutorite;
     /**
     * @ORM\OneToMany(targetEntity="App\Entity\Stage", mappedBy="Tribunal")
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

    public function getNomTribunal(): ?string
    {
        return $this->nom_tribunal;
    }

    public function setNomTribunal(string $nom_tribunal): self
    {
        $this->nom_tribunal = $nom_tribunal;

        return $this;
    }

    public function getAdresseTribunal(): ?string
    {
        return $this->adresse_tribunal;
    }

    public function setAdresseTribunal(string $adresse_tribunal): self
    {
        $this->adresse_tribunal = $adresse_tribunal;

        return $this;
    }

    public function getNumeroAdresseTribunal(): ?string
    {
        return $this->numero_adresse_tribunal;
    }

    public function setNumeroAdresseTribunal(string $numero_adresse_tribunal): self
    {
        $this->numero_adresse_tribunal = $numero_adresse_tribunal;

        return $this;
    }

    public function getCommuneTribunal(): ?string
    {
        return $this->commune_tribunal;
    }

    public function setCommuneTribunal(string $commune_tribunal): self
    {
        $this->commune_tribunal = $commune_tribunal;

        return $this;
    }

    public function getTribunalService(): ?TribunalService
    {
        return $this->tribunalService;
    }

    public function setTribunalService(?TribunalService $tribunalService): self
    {
        $this->tribunalService = $tribunalService;

        return $this;
    }

    public function getTribunalAutorite(): ?TribunalAutorite
    {
        return $this->tribunalAutorite;
    }

    public function setTribunalAutorite(?TribunalAutorite $tribunalAutorite): self
    {
        $this->tribunalAutorite = $tribunalAutorite;

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
            $stages->addStage($this);
        }
        return $this;
    }
    public function removeStage(Stage $stage): self
    {
        if ($this->stages->contains($stage)) {
            $this->stages->removeElement($stage);
            $stage->removeStage($this);
           
        }
        return $this;
    }
}
