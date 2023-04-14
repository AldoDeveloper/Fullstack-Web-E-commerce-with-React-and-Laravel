<?php

namespace App\Http\Controllers\Auth\User;

use App\Http\Controllers\Controller;
use App\Service\Auth\Users\ActivationUsersService;
use Illuminate\Http\Request;

class ActivationUsersControllers extends Controller
{
    protected ActivationUsersService $activationUsersService;
    public function __construct(ActivationUsersService $activationUsersService)
    {
        $this->activationUsersService = $activationUsersService;
    }
    public function keranjang(){
        return $this->activationUsersService->addCart();
    }
    public function show(){
        return $this->activationUsersService->show();
    }
}
