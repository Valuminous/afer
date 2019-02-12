<?php

namespace App\Entity;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\LieuStageRepository")
 */
class LieuStage
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
    private $nom_etablissement;

    /**
     * @ORM\Column(type="integer")
     */
    private $agrement;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $adresse_stage;

    /**
     * @ORM\Column(type="integer")
     */
    private $numero_adresse_stage;

    /**
     * @ORM\Column(type="integer")
     */
    private $cp;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $commune;

    /**
     * @ORM\Column(type="integer")
     */
    private $telephone_stage;

    /**
     * @ORM\Column(type="integer")
     */
    private $latitude;

    /**
     * @ORM\Column(type="integer")
     */
    private $longitude;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $divers;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Stage", mappedBy="lieuStage")
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

    public function getNomEtablissement(): ?string
    {
        return $this->nom_etablissement;
    }

    public function setNomEtablissement(string $nom_etablissement): self
    {
        $this->nom_etablissement = $nom_etablissement;

        return $this;
    }

    public function getAgrement(): ?int
    {
        return $this->agrement;
    }

    public function setAgrement(int $agrement): self
    {
        $this->agrement = $agrement;

        return $this;
    }

    public function getAdresseStage(): ?string
    {
        return $this->adresse_stage;
    }

    public function setAdresseStage(string $adresse_stage): self
    {
        $this->adresse_stage = $adresse_stage;

        return $this;
    }

    public function getNumeroAdresseStage(): ?int
    {
        return $this->numero_adresse_stage;
    }

    public function setNumeroAdresseStage(int $numero_adresse_stage): self
    {
        $this->numero_adresse_stage = $numero_adresse_stage;

        return $this;
    }

    public function getCp(): ?int
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

    public function getTelephoneStage(): ?int
    {
        return $this->telephone_stage;
    }

    public function setTelephoneStage(int $telephone_stage): self
    {
        $this->telephone_stage = $telephone_stage;

        return $this;
    }

    public function getLatitude(): ?int
    {
        return $this->latitude;
    }

    public function setLatitude(int $latitude): self
    {
        $this->latitude = $latitude;

        return $this;
    }

    public function getLongitude(): ?int
    {
        return $this->longitude;
    }

    public function setLongitude(int $longitude): self
    {
        $this->longitude = $longitude;

        return $this;
    }

    public function getDivers(): ?string
    {
        return $this->divers;
    }

    public function setDivers(?string $divers): self
    {
        $this->divers = $divers;

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
            // $stage->addStage($this);
        }
        return $this;
    }
    public function removeStage(Stage $stage): self
    {
        if ($this->stages->contains($stage)) {
            $this->stages->removeElement($stage);
           // set the owning side to null (unless already changed)
        //    if ($relation->getLieuStage() === $this) {
        //     $relation->setLieuStage(null);
           
        // }
    }
        return $this;
    }
}
