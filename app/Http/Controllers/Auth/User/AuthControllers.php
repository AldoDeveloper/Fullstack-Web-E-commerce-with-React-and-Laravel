<?php

namespace App\Http\Controllers\Auth\User;

use App\Http\Controllers\Controller;
use App\Service\Auth\Users\AuthService;
use Illuminate\Http\JsonResponse;

class AuthControllers extends Controller
{
    private AuthService $authService;

    public function __construct(AuthService $authService)
    {
        $this->middleware('auth-jwt', ['except' => 'login']);
        $this->authService = $authService;
    }

    public function login() : JsonResponse{
        return $this->authService->loginService();
    }

    public function checkAuth() : JsonResponse{
        return $this->authService->me();
    }

    public function logout() : JsonResponse{
        return $this->authService->logout();
    }
}
