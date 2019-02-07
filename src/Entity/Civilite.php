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
    private $nom_civilite;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNomCivilite(): ?string
    {
        return $this->nom_civilite;
    }

    public function setNomCivilite(string $nom_civilite): self
    {
        $this->nom_civilite = $nom_civilite;

        return $this;
    }
}
