<?php

namespace App\Entity;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\PrefectureRepository")
 */
class Prefecture
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
    private $nomPrefecture;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $adressePrefecture;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $numeroAdressePrefecture;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $cp;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $commune;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\PrefectureService", inversedBy="relation")
     */
    private $prefectureService;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\PrefectureAutorite", inversedBy="relation")
     */
    private $prefectureAutorite;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Stage", mappedBy="prefecture")
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

    public function getNomPrefecture(): ?string
    {
        return $this->nomPrefecture;
    }

    public function setNomPrefecture(string $nomPrefecture): self
    {
        $this->nomPrefecture = $nomPrefecture;

        return $this;
    }

    public function getAdressePrefecture(): ?string
    {
        return $this->adressePrefecture;
    }

    public function setAdressePrefecture(string $adressePrefecture): self
    {
        $this->adressePrefecture = $adressePrefecture;

        return $this;
    }

    public function getNumeroAdressePrefecture(): ?string
    {
        return $this->numeroAdressePrefecture;
    }

    public function setNumeroAdressePrefecture(string $numeroAdressePrefecture): self
    {
        $this->numeroAdressePrefecture = $numeroAdressePrefecture;

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

    public function getPrefectureService(): ?PrefectureService
    {
        return $this->prefectureService;
    }

    public function setPrefectureService(?PrefectureService $prefectureService): self
    {
        $this->prefectureService = $prefectureService;

        return $this;
    }

    public function getPrefectureAutorite(): ?PrefectureAutorite
    {
        return $this->prefectureAutorite;
    }

    public function setPrefectureAutorite(?PrefectureAutorite $prefectureAutorite): self
    {
        $this->prefectureAutorite = $prefectureAutorite;

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
            // $stage->addStage($this);
        }
        return $this;
    }
    public function removeStage(Stage $stage): self
    {
        if ($this->Stages->contains($stage)) {
            $this->Stages->removeElement($stage);
             // set the owning side to null (unless already changed)
        //      if ($relation->getPrefecture() === $this) {
        //         $relation->setPrefecture(null);
           
        // }
    }
        return $this;
    }
}
