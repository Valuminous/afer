<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\CondamnationRepository")
 */
class Condamnation
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
    private $numeroParquet;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $dateCondamnation;

    /**
     * @ORM\OneToOne(targetEntity="App\Entity\Infraction", inversedBy="condamnation", cascade={"persist", "remove"})
     */
    private $infraction;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Tribunal", inversedBy="condamnations")
     */
    private $tribumal;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNumeroParquet(): ?string
    {
        return $this->numeroParquet;
    }

    public function setNumeroParquet(?string $numeroParquet): self
    {
        $this->numeroParquet = $numeroParquet;

        return $this;
    }

    public function getDateCondamnation(): ?\DateTimeInterface
    {
        return $this->dateCondamnation;
    }

    public function setDateCondamnation(?\DateTimeInterface $dateCondamnation): self
    {
        $this->dateCondamnation = $dateCondamnation;

        return $this;
    }

    public function getInfraction(): ?Infraction
    {
        return $this->infraction;
    }

    public function setInfraction(?Infraction $infraction): self
    {
        $this->infraction = $infraction;

        return $this;
    }

    public function getTribumal(): ?Tribunal
    {
        return $this->tribumal;
    }

    public function setTribumal(?Tribunal $tribumal): self
    {
        $this->tribumal = $tribumal;

        return $this;
    }
}
