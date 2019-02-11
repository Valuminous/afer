<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Twig\Environment;


class AdminController extends AbstractController
{

    /**
     * @Route("admin", name="admin")
     */
    public function index()
    {
        return $this->render('admin/index.html.twig');
    }


}