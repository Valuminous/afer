<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\CasRepository")
 */
class Cas
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
    private $numeroCas;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $intituleCas;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Tarif", inversedBy="cas")
     */
    private $tarifs;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Stagiaire", mappedBy="cas")
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

    public function getNumeroCas(): ?string
    {
        return $this->numeroCas;
    }

    public function setNumeroCas(string $numeroCas): self
    {
        $this->numeroCas = $numeroCas;

        return $this;
    }

    public function getIntituleCas(): ?string
    {
        return $this->intituleCas;
    }

    public function setIntituleCas(string $intituleCas): self
    {
        $this->intituleCas = $intituleCas;

        return $this;
    }

    public function getTarifs(): ?Tarif
    {
        return $this->tarifs;
    }

    public function setTarifs(?Tarif $tarifs): self
    {
        $this->tarifs = $tarifs;

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
            $stagiaire->addCa($this);
        }

        return $this;
    }

    public function removeStagiaire(Stagiaire $stagiaire): self
    {
        if ($this->stagiaires->contains($stagiaire)) {
            $this->stagiaires->removeElement($stagiaire);
            $stagiaire->removeCa($this);
        }

        return $this;
    }

       
 /**
     * toString
     */
    public function __toString() {
        return $this->getNumeroCas();
    }
}
