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
    private $nomTribunal;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $adresseTribunal;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $numeroAdresseTribunal;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $communeTribunal;

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
        return $this->nomTribunal;
    }

    public function setNomTribunal(string $nomTribunal): self
    {
        $this->nomTribunal = $nomTribunal;

        return $this;
    }

    public function getAdresseTribunal(): ?string
    {
        return $this->adresseTribunal;
    }

    public function setAdresseTribunal(string $adresseTribunal): self
    {
        $this->adresseTribunal = $adresseTribunal;

        return $this;
    }

    public function getNumeroAdresseTribunal(): ?string
    {
        return $this->numeroAdresseTribunal;
    }

    public function setNumeroAdresseTribunal(string $numeroAdresseTribunal): self
    {
        $this->numeroAdresseTribunal = $numeroAdresseTribunal;

        return $this;
    }

    public function getCommuneTribunal(): ?string
    {
        return $this->communeTribunal;
    }

    public function setCommuneTribunal(string $communeTribunal): self
    {
        $this->communeTribunal = $communeTribunal;

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
