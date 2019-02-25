<?php

namespace App\Entity;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

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
     * @Assert\Length(min = 2, max = 255, minMessage = "La valeur inséré doit être comprise entre 2 et 255 caractères", maxMessage = "La valeur inséré doit être comprise entre 2 et 255 caractères")
     */
    private $nomTribunal;

    /**
     * @ORM\Column(type="string", length=255)
     * @Assert\Length(min = 2, max = 255 , minMessage = "La valeur inséré doit être comprise entre 2 et 255 caractères", maxMessage = "La valeur inséré doit être comprise entre 2 et 255 caractères")
     */
    private $adresseTribunal;

    /**
     * @ORM\Column(type="string", length=45)
     * @Assert\Length(min = 1, max = 45, minMessage = "La valeur inséré doit être comprise entre 1 et 45 caractères", maxMessage = "La valeur inséré doit être comprise entre 1 et 45 caractères")
     */
    private $numeroAdresseTribunal;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $communeTribunal;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $cpTribunal;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\TribunalService", inversedBy="relation")
     */
    private $tribunalService;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\TribunalAutorite", inversedBy="relation")
     */
    private $tribunalAutorite;
     /**
     * @ORM\OneToMany(targetEntity="App\Entity\Stage", mappedBy="tribunal")
     */
    private $stages;

    public function __construct()
    {
        $this->stage = new ArrayCollection();
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
    public function getCpTribunal(): ?string
    {
        return $this->cpTribunal;
    }

    public function setCpTribunal(string $cpTribunal): self
    {
        $this->cpTribunal = $cpTribunal;

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
    public function getStage(): Collection
    {
        return $this->stage;
    }

    public function addStage(Stage $stage): self
    {
        if (!$this->stage->contains($stage)) {
            $this->stage[] = $stage;
            $stage->addStage($this);
        }
        return $this;
    }
    public function removeStage(Stage $stage): self
    {
        if ($this->stage->contains($stage)) {
            $this->stage->removeElement($stage);
             // set the owning side to null (unless already changed)
             if ($relation->getTribunal() === $this) {
                $relation->setTribunal(null);
           
        }
    }
        return $this;
    }

}
