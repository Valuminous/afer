<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\InfractionRepository")
 */
class Infraction
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $lieuInfraction;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $dateInfraction;

    
    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\NatureInfraction", inversedBy="infractions")
     */
    private $natureInfraction;

    /**
     * @ORM\OneToOne(targetEntity="App\Entity\Stagiaire", mappedBy="infraction")
     */
    private $stagiaire;

    
    public function getId(): ?int
    {
        return $this->id;
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

    public function setDateInfraction(?\DateTimeInterface $dateInfraction): self
    {
        $this->dateInfraction = $dateInfraction;

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

    public function getStagiaire(): ?Stagiaire
    {
        return $this->stagiaire;
    }

    public function setStagiaire(?Stagiaire $stagiaire): self
    {
        $this->stagiaire = $stagiaire;
        
        return $this;
    }

    /**
     * toString
     */
    public function __toString() {
        return $this->getLieuInfraction();
    }
}
