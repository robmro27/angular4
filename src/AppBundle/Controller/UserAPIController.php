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
     * @param Request $request
     * @return array
     */
    public function usersAction(Request $request)
    {
        $searchParam = $request->query->get('search', null);

        $users = $this->getDoctrine()
                      ->getRepository(User::class)
                      ->findAllSearch($searchParam);

        return ['data' => $users];
    }

    /**
     * @Rest\Post("", name="api_user_add")
     * @param Request $request
     * @return array
     */
    public function userAddAction(Request $request)
    {
        $serializer = $this->get('jms_serializer');
        $userDeserialize = $serializer->deserialize($request->getContent(), User::class, 'json');
        /** @var $userDeserialize User */

        if (!$userDeserialize instanceof User) {
            throw new AccessDeniedException('Invalid user object');
        }

        $userDeserialize->setPassword($this->get('security.password_encoder')->encodePassword($userDeserialize, $userDeserialize->getPassword()));

        $this->getDoctrine()->getManager()->persist($userDeserialize);
        $this->getDoctrine()->getManager()->flush($userDeserialize);

        return ['data' => $userDeserialize];
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
     * @Rest\Delete("/{user}", name="api_user_delete")
     * @param User $user
     * @return null
     */
    public function userDeleteAction(User $user)
    {
        $this->getDoctrine()->getManager()->remove($user);
        $this->getDoctrine()->getManager()->flush();
        return null;
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
