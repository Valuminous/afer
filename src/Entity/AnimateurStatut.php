<?php
namespace App\Entity;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
/**
 * @ORM\Entity(repositoryClass="App\Repository\AnimateurStatutRepository")
 */
class AnimateurStatut
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
     * @ORM\OneToMany(targetEntity="App\Entity\Animateur", mappedBy="animateurStatut")
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
            $relation->setAnimateurStatut($this);
        }
        return $this;
    }
    public function removeRelation(Animateur $relation): self
    {
        if ($this->relation->contains($relation)) {
            $this->relation->removeElement($relation);
            // set the owning side to null (unless already changed)
            if ($relation->getAnimateurStatut() === $this) {
                $relation->setAnimateurStatut(null);
            }
        }
        return $this;
    }
}