<?php
namespace App\Repository;
use App\Entity\AnimateurFonction;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;
/**
 * @method AnimateurFonction|null find($id, $lockMode = null, $lockVersion = null)
 * @method AnimateurFonction|null findOneBy(array $criteria, array $orderBy = null)
 * @method AnimateurFonction[]    findAll()
 * @method AnimateurFonction[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class AnimateurFonctionRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, AnimateurFonction::class);
    }
    // /**
    //  * @return AnimateurFonction[] Returns an array of AnimateurFonction objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('a')
            ->andWhere('a.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('a.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */
    /*
    public function findOneBySomeField($value): ?AnimateurFonction
    {
        return $this->createQueryBuilder('a')
            ->andWhere('a.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}