<?php

namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use FOS\RestBundle\Controller\FOSRestController;

use FOS\RestBundle\Controller\Annotations as Rest;

use AppBundle\Entity\User;

/**
 * @Route("/api/users")
 */
class UserAPIController extends FOSRestController
{
    /**
     * @Rest\Get("", name="api_admin_dashboard")
     */
    public function indexAction()
    {
        $users = $this->getDoctrine()
                      ->getRepository(User::class)
                      ->findAll();

        return $users;
    }
}
