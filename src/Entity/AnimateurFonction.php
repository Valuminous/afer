<?php
namespace App\Entity;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;

/**
 * @ORM\Entity(repositoryClass="App\Repository\AnimateurFonctionRepository")
 * @UniqueEntity(
 * fields={"nom"},
 * message="La fonction existe déjà")
 */
class AnimateurFonction
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
    private $nom;
    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Animateur", mappedBy="animateurFonction")
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
     * @return Collection|Animateur[]
     */
    public function getRelation(): Collection
    {
        return $this->relation;
    }
    public function addRelation(Animateur $relation): self
    {
        if (!$this->relation->contains($relation)) {
            $this->relation[] = $relation;
            $relation->setAnimateurFonction($this);
        }
        return $this;
    }
    public function removeRelation(Animateur $relation): self
    {
        if ($this->relation->contains($relation)) {
            $this->relation->removeElement($relation);
            // set the owning side to null (unless already changed)
            if ($relation->getAnimateurFonction() === $this) {
                $relation->setAnimateurFonction(null);
            }
        }
        return $this;
    }

    public function __toString()
    {
        return $this->getNom();
    }
}