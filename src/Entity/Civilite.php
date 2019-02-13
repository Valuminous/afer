<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\CiviliteRepository")
 */
class Civilite
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
    private $nomCivilite;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Animateur", mappedBy="civilite")
     */
    private $Animateur;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Stagiaire", mappedBy="civilite")
     */
    private $Stagiaire;

    public function __construct()
    {
        $this->Animateur = new ArrayCollection();
        $this->Stagiaire = new ArrayCollection();
    }

    
    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNomCivilite(): ?string
    {
        return $this->nomCivilite;
    }

    public function setNomCivilite(string $nomCivilite): self
    {
        $this->nomCivilite = $nomCivilite;

        return $this;
    }

    /**
     * @return Collection|Animateur[]
     */
    public function getAnimateur(): Collection
    {
        return $this->Animateur;
    }

    public function addAnimateur(Animateur $animateur): self
    {
        if (!$this->Animateur->contains($animateur)) {
            $this->Animateur[] = $animateur;
            $animateur->setCivilite($this);
        }

        return $this;
    }

    public function removeAnimateur(Animateur $animateur): self
    {
        if ($this->Animateur->contains($animateur)) {
            $this->Animateur->removeElement($animateur);
            // set the owning side to null (unless already changed)
            if ($animateur->getCivilite() === $this) {
                $animateur->setCivilite(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Stagiaire[]
     */
    public function getStagiaire(): Collection
    {
        return $this->Stagiaire;
    }

    public function addStagiaire(Stagiaire $stagiaire): self
    {
        if (!$this->Stagiaire->contains($stagiaire)) {
            $this->Stagiaire[] = $stagiaire;
            $stagiaire->setCivilite($this);
        }

        return $this;
    }

    public function removeStagiaire(Stagiaire $stagiaire): self
    {
        if ($this->Stagiaire->contains($stagiaire)) {
            $this->Stagiaire->removeElement($stagiaire);
            // set the owning side to null (unless already changed)
            if ($stagiaire->getCivilite() === $this) {
                $stagiaire->setCivilite(null);
            }
        }

        return $this;
    }

}
