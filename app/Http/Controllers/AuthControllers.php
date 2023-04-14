<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

class AuthControllers extends Controller
{
    public function __construct()
    {
        $this->middleware('auth-jwt', ['except' => 'login']);
    }

    public function login(Request $request){
        $validator = Validator::make($request->all(), ['email' => ['required', 'email'], 'password' => 'required']);
        if($validator->fails()) 
            return Response::json($validator->messages()->toArray(), 200);
        if(!$tokens = auth()->setTTL(120)->attempt($request->only(['email', 'password']))){
            return Response::json(['error' => 'Unauthorizied', 'code' => 401], 401);
        }
        return $this->getTokens($tokens);
    }

    public function checkAuth(Request $request){
        $users = auth()->user();
        $users->profile;
        return Response::json(
            [
                'login'        => true,
                'code' => 200,
                'experied'     => auth()->factory()->getTTL(),
                'users'        => $users,
            ], 200, [], JSON_PRETTY_PRINT);
    }

    public function getTokens($tokens){
        return Response::json([
            'access_token' => $tokens,
            'type'         => 'bearer',
            'experied'     => auth()->factory()->getTTL(),
            'login'        => true,
        ]);
    }

    public function refreshTokens(){
        return $this->getTokens(auth()->refresh());
    }

    public function logout(){
        auth()->logout();
        return Response::json(['logout' => true], 200);
    }
}
