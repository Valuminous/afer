<?php

namespace App\Controller;

use App\Entity\Civilite;
use App\Form\CiviliteType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\Common\Persistence\ObjectManager;
use App\Repository\CiviliteRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class CiviliteController extends AbstractController
{
    public function index(CiviliteRepository $repo)
    {
        $civilites = $repo->findAll();

}}  
