<?php

namespace App\Api\Auth;

use App\Http\Controllers\Auth\User\ActivationUsersControllers;
use App\Http\Controllers\Auth\User\AuthControllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

class AuthApi{
     public function boot() : void{
          Route::group(['prefix' => 'auth', 'middleware' => ['api']], function(){
               Route::controller(AuthControllers::class)->group(function(){
                   Route::match(['get', 'post'], 'login', 'login')->middleware('role:users');
                   Route::get('logout', 'logout');
                   Route::match(['get', 'post'], 'check-auth', 'checkAuth');
               });
           });

           //Activations
           Route::middleware(['auth-jwt'])->group(function(){
               Route::prefix('activation')->group(function(){
                   Route::controller(ActivationUsersControllers::class)->group(function(){
                      Route::post('add-keranjang', 'keranjang');
                      Route::get('show-keranjang', 'show');
                   });
               });
           });
     }
}