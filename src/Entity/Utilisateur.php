<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Doctrine\Common\Collections\Collection;
use Doctrine\Common\Collections\ArrayCollection;


/**
 * @ORM\Entity(repositoryClass="App\Repository\UtilisateurRepository")
 */
class Utilisateur 
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
    private $identifiant;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $nom_utilisateur;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $prenom_utilisateur;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $mdp_utilisateur;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Role", inversedBy="utilisateurs")
     */
    private $role;

    public
    function getId(): ? int {
        return $this -> id;
    }

    public
    function getIdentifiant() : ? string {
        return $this -> identifiant;
    }

    public
    function setIdentifiant(string $identifiant) : self {
        $this -> identifiant = $identifiant;

        return $this;
    }

    public
    function getNomUtilisateur(): ? string {
        return $this -> nom_utilisateur;
    }

    public
    function setNomUtilisateur(string $nom_utilisateur) : self {
        $this -> nom_utilisateur = $nom_utilisateur;

        return $this;
    }

    public
    function getPrenomUtilisateur(): ? string {
        return $this -> prenom_utilisateur;
    }

    public
    function setPrenomUtilisateur(string $prenom_utilisateur) : self {
        $this -> prenom_utilisateur = $prenom_utilisateur;

        return $this;
    }

    public
    function getMdpUtilisateur(): ? string {
        return $this -> mdp_utilisateur;
    }

    public
    function setMdpUtilisateur(string $mdp_utilisateur) : self {
        $this -> mdp_utilisateur = $mdp_utilisateur;

        return $this;
    }

    public
    function getRole(): ? Role {
        return $this -> role;
    }

    public
    function setRole( ? Role $role) : self {
        $this -> role = $role;

        return $this;
    }
    /**
     * @return (roll|string)[] The user roles
     */
    public
    function getRoles() {
        // $roles = $this->roles;
        // // guarantees that a user always has at least one role for security
        // if (empty($roles)) {
        //     $roles[] = 'ADMIN';
        // }
      
    }
 

}