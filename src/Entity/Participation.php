<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\ParticipationRepository")
 */
class Participation
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue(strategy="AUTO")
     * @ORM\Column(type="integer")
     */
    private $facture;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Stagiaire", inversedBy="participations")
     */
    private $stagiaire;

     /**
     * @ORM\OneToMany(targetEntity="App\Entity\Stagiaire", mappedBy="stage", cascade={"persist"})
     */
    //private $stagiaires;


    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Stage", inversedBy="participations")
     */
    private $stage;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Stage", mappedBy="stagiaire", cascade={"persist"})
     */
    //private $stages;
    /**
     * @ORM\Column(type="datetime")
     */
    private $createdAt;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $datefacture;

    public function __construct()
    {
       
        $this->createdAt = new \DateTime();
    }

    public function getFacture(): ?int
    {
        return $this->facture;
    }

    public function getStagiaire(): ?Stagiaire
    {
        return $this->stagiaire;
    }

    public function setStagiaire(?Stagiaire $stagiaire): self
    {
        $this->stagiaire = $stagiaire;

        return $this;
    }

    public function getStagiaires()
    {
        return $this->stagiaires;
    }

    public function setStagiaires($stagiaires)
    {
        $this->stagiaires = $stagiaires;

        return $this;
    }

    public function getStage(): ?Stage
    {
        return $this->stage;
    }

    public function setStage(?Stage $stage): self
    {
        $this->stage = $stage;

        return $this;
    }

    public function getStages()
    {
        return $this->stages;
    }

    public function setStages($stages)
    {
        $this->stages = $stages;

        return $this;
    }
/**
    *@return \Datetime
    */
    public function getCreatedAt(): ?\DateTimeInterface
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTimeInterface $createdAt): self
    {
        $this->createdAt = $createdAt;

        return $this;
    }


    public function getDatefacture(): ?\DateTimeInterface
    {
        return $this->datefacture;
    }

    public function setDatefacture(?\DateTimeInterface $datefacture): self
    {
        $this->datefacture = $datefacture;

        return $this;
    }

    

}
