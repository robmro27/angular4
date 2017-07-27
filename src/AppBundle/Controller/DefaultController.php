<?php

namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;


/**
 * @Route("/")
 */
class DefaultController extends Controller
{
    /**
     * @Route("", name="default")
     */
    public function indexAction()
    {
        return $this->render('default/index.html.twig');
    }
}
