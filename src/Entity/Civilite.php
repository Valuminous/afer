<?php

namespace App\Entity;

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
}
