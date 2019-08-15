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
     * toString
     */
    public function __toString() {
        return $this->getNomInfraction();
    }
}
