<?php

namespace AppBundle\DataFixtures\ORM;

use Doctrine\Common\DataFixtures\FixtureInterface;
use Doctrine\Common\Persistence\ObjectManager;
use AppBundle\Entity\User;

use Symfony\Component\DependencyInjection\ContainerAwareInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;

class LoadUserData implements FixtureInterface, ContainerAwareInterface
{

    /**
     * @var ContainerInterface
     */
    private $container;

    public function setContainer(ContainerInterface $container = null)
    {
        $this->container = $container;
    }

    public function load(ObjectManager $manager)
    {
        $userAdmin = new User();
        $userAdmin->setUsername('admin');
        $userAdmin->setEmail('admin@example.com');
        $userAdmin->setPassword($this->container->get('security.password_encoder')->encodePassword($userAdmin, 'admin'));

        $manager->persist($userAdmin);

        $userAdmin = new User();
        $userAdmin->setUsername('admin1');
        $userAdmin->setEmail('admin1@example.com');
        $userAdmin->setPassword($this->container->get('security.password_encoder')->encodePassword($userAdmin, 'admin1'));

        $manager->persist($userAdmin);

        $manager->flush();
    }
}