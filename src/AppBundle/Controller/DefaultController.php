<?php

namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;


/**
 * @Route("")
 */
class DefaultController extends Controller
{
    /**
     * @Route("/")
     *
     * @Route("/{uriPart1}", name="default",
     *     requirements={
     *          "uriPart1"="^(dashboard|users)$"
     *      },
     *     defaults={"uriPart1" = "dashboard"})
     *
     * @Route("/{uriPart1}/{uriPart2}", name="default",
     *     requirements={
     *          "uriPart1"="^(dashboard|users|detail)$",
     *          "uriPart2"="(.+)"
     *      },
     *     defaults={"uriPart1" = "dashboard"})
     *
     */
    public function indexAction()
    {
        return $this->render('default/index.html.twig');
    }
}
