<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\PrefectureServiceRepository")
 * @UniqueEntity(
 * fields={"nom"},
 * message="Le service existe déjà")
 */
class PrefectureService
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * @Assert\Length(min = 2, max = 255, minMessage = "La valeur inséré doit être comprise entre 2 et 255 caractères", maxMessage = "La valeur inséré doit être comprise entre 2 et 255 caractères")
     * @Assert\Regex(pattern = "/^[a-zA-Zàâçéèêëîïôûùüÿñæœ .-]*$/i", match = true, message = "{{ value }} contient un caractère non autorisé")
     */
    private $nom;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Prefecture", mappedBy="prefectureService")
     */
    private $relation;

    public function __construct()
    {
        $this->relation = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNom(): ?string
    {
        return $this->nom;
    }

    public function setNom(string $nom): self
    {
        $this->nom = $nom;

        return $this;
    }

    /**
     * @return Collection|Prefecture[]
     */
    public function getRelation(): Collection
    {
        return $this->relation;
    }

    public function addRelation(Prefecture $relation): self
    {
        if (!$this->relation->contains($relation)) {
            $this->relation[] = $relation;
            $relation->setPrefectureService($this);
        }

        return $this;
    }

    public function removeRelation(Prefecture $relation): self
    {
        if ($this->relation->contains($relation)) {
            $this->relation->removeElement($relation);
            // set the owning side to null (unless already changed)
            if ($relation->getPrefectureService() === $this) {
                $relation->setPrefectureService(null);
            }
        }

        return $this;
    }

    /**
     * toString
     */
    public function __toString() {
        return $this->getNom();
    }
}
