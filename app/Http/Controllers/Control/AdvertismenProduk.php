<?php

namespace App\Http\Controllers\Control;
use App\Http\Controllers\Controller;
use App\Http\Requests\ControlRequest;
use App\Service\Advertisment\AdvertismentServices;
use App\Service\Advertisment\AdvertismentServicesStore;
use Illuminate\Http\JsonResponse;

class AdvertismenProduk extends Controller
{
    public function __construct()
    {
       $this->middleware(['auth-check']);
    }

    public function store(AdvertismentServicesStore $services) : JsonResponse{
      return $services->store();
    }

    public function show(AdvertismentServices $advertisment) : JsonResponse{
      return $advertisment->showService();
    }

    public function removed(AdvertismentServices $advertisment, int $id) : JsonResponse{
       return $advertisment->removed($id);
    }
}
