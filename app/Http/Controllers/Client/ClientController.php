<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use App\Observers\Config;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;

class ClientController extends Controller
{
    public function plugin_produk(Request $request){
          
         return Response::json(['data' => 'ok']);
    }
}
