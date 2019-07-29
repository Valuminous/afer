<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\NatureInfractionRepository")
 */
class NatureInfraction
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
    private $nomInfraction;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Stagiaire", mappedBy="natureInfraction")
     */
    private $stagiaires;

    public function __construct()
    {
        $this->stagiaires = new ArrayCollection();
    }

    

   

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNomInfraction(): ?string
    {
        return $this->nomInfraction;
    }

    public function setNomInfraction(string $nomInfraction): self
    {
        $this->nomInfraction = $nomInfraction;

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
            $stagiaire->setNatureInfraction($this);
        }

        return $this;
    }

    public function removeStagiaire(Stagiaire $stagiaire): self
    {
        if ($this->stagiaires->contains($stagiaire)) {
            $this->stagiaires->removeElement($stagiaire);
            // set the owning side to null (unless already changed)
            if ($stagiaire->getNatureInfraction() === $this) {
                $stagiaire->setNatureInfraction(null);
            }
        }

        return $this;
    }

    /**
     * toString
     */
    public function __toString() {
        return $this->getNomInfraction();
    }
}
