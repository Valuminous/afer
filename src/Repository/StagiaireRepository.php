<?php

namespace App\Repository;

use App\Entity\Stagiaire;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method Stagiaire|null find($id, $lockMode = null, $lockVersion = null)
 * @method Stagiaire|null findOneBy(array $criteria, array $orderBy = null)
 * @method Stagiaire[]    findAll()
 * @method Stagiaire[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class StagiaireRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, Stagiaire::class);
    }

    public function counter($value1,$value2,$value3)
    {
        return $this->createQueryBuilder('t')
            ->select('count(t.id)')
            ->andWhere('t.nomStagiaire = :val1')
            ->andWhere('t.prenomStagiaire = :val2')
            ->andWhere('t.dateNaissanceStagiaire = :val3')
            ->setParameter('val1', $value1)
            ->setParameter('val2', $value2)
            ->setParameter('val3', $value3)
            ->getQuery()
            ->getResult()
        ;
    }

    public function counterCivilite($civilite)
    {
        return $this->createQueryBuilder('t')
            ->select('count(t.id)')
            ->andWhere('t.civilite = :val')
            ->setParameter(':val', $civilite)
            ->getQuery()
            ->getResult()
        ;
    }

    public function countTitulaire($carteJeune, $partenaire, $adherent): array
    {
        $conn = $this->getEntityManager()->getConnection();

        $titulaire = '
        select (SELECT count(id) FROM stagiaire WHERE carte_jeune_stagiaire = :cartejeune) as cartejeune, (SELECT count(id) FROM stagiaire WHERE partenaire_stagiaire = :partenaire) as partenaire, (SELECT count(id) FROM stagiaire WHERE adherent_stagiaire = :adherent) as adherent
        ';

        $stmt = $conn->prepare($titulaire);
        $stmt->execute(['cartejeune' => $carteJeune, 'partenaire' => $partenaire, 'adherent' => $adherent]);

        return $stmt->fetchAll();
    }

    // /**
    //  * @return Stagiaire[] Returns an array of Stagiaire objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('s')
            ->andWhere('s.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('s.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Stagiaire
    {
        return $this->createQueryBuilder('s')
            ->andWhere('s.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
