<?php

namespace AppBundle\Repository;

use AppBundle\Entity\User;
use Doctrine\ORM\EntityRepository;

class UserRepository extends EntityRepository
{
    public function findAllSearch(string $name = null)
    {
        $qb = $this->createQueryBuilder('u');

        if (null !== $name) {
            $qb->andWhere('u.username LIKE :name')
               ->setParameter('name', $name.'%');
        }

        return $qb->getQuery()->getResult();
    }
}