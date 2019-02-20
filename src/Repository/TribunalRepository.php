<?php

namespace App\Repository;

use App\Entity\Tribunal;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method Tribunal|null find($id, $lockMode = null, $lockVersion = null)
 * @method Tribunal|null findOneBy(array $criteria, array $orderBy = null)
 * @method Tribunal[]    findAll()
 * @method Tribunal[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class TribunalRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, Tribunal::class);
    }


    public function counter($value1,$value2)
    {
        return $this->createQueryBuilder('t')
            ->select('count(t.id)')
            ->andWhere('t.nomTribunal = :val1')
            ->andWhere('t.communeTribunal = :val2')
            ->setParameter('val1', $value1)
            ->setParameter('val2', $value2)
            ->getQuery()
            ->getResult()
        ;
    }
    // /**
    //  * @return Tribunal[] Returns an array of Tribunal objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('t')
            ->andWhere('t.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('t.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Tribunal
    {
        return $this->createQueryBuilder('t')
            ->andWhere('t.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
