<?php
namespace App\Api;

use App\Api\Admin\ApiAdmin;
use App\Api\Auth\AuthApi;
use App\Api\Grosir\ApiGrosir;
use App\Api\User\apiUserPublish;

class RegisterContext{
     protected function register() : array{
          return [
               AuthApi::class,
               ApiAdmin::class,
               ApiGrosir::class,
               apiUserPublish::class
          ];
     }
}