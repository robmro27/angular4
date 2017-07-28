<?php

namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use FOS\RestBundle\Controller\Annotations as Rest;

use Symfony\Component\Finder\Exception\AccessDeniedException;
use Symfony\Component\HttpFoundation\Request;
use FOS\RestBundle\Controller\FOSRestController;

use AppBundle\Entity\User;

/**
 * @Route("/api/users")
 */
class UserAPIController extends FOSRestController
{
    /**
     * @Rest\Get("", name="api_users")
     * @return array
     */
    public function usersAction()
    {
        $users = $this->getDoctrine()
                      ->getRepository(User::class)
                      ->findAll();

        return ['data' => $users];
    }

    /**
     * @Rest\Get("/{user}", name="api_user_details")
     * @param User $user
     * @return array
     */
    public function userAction(User $user)
    {
        return ['data' => $user];
    }

    /**
     * @Rest\Put("/{user}", name="api_user_edit")
     * @param User $user
     * @param Request $request
     * @return array
     */
    public function userEditAction(User $user, Request $request)
    {
        $serializer = $this->get('jms_serializer');
        $userDeserialize = $serializer->deserialize($request->getContent(), User::class, 'json');
        /** @var $userDeserialize User */

        if ($userDeserialize->getId() !== $user->getId()) {
            throw new AccessDeniedException('Invalid user object');
        }

        $this->getDoctrine()->getManager()->flush($userDeserialize);

        return ['data' => $user];
    }
}
