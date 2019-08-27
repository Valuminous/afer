<?php

namespace App\Repository;

use App\Entity\Condamnation;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method Condamnation|null find($id, $lockMode = null, $lockVersion = null)
 * @method Condamnation|null findOneBy(array $criteria, array $orderBy = null)
 * @method Condamnation[]    findAll()
 * @method Condamnation[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class CondamnationRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, Condamnation::class);
    }

    // /**
    //  * @return Condamnation[] Returns an array of Condamnation objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('c.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Condamnation
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
