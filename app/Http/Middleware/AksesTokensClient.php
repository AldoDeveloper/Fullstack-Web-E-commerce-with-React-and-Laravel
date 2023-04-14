<?php

namespace App\Http\Middleware;

use App\Models\ClientAksesTokens;
use Closure;
use Exception;
use Illuminate\Contracts\Encryption\DecryptException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\Response;

class AksesTokensClient
{
    public function handle(Request $request, Closure $next)
    {
         if($request->has('client_id')){
            $clientAkses = ClientAksesTokens::where('client_name', $request->client_id)->get();
            if($clientAkses->count() > 0){
                try{
                    $decrypTokens = Crypt::decryptString($request->header('CLIENT_TOKEN'));
                    return $next($request);
                }
                catch(DecryptException $e){
                    return Response::json(['message' => $e->getMessage()], 402, [], JSON_PRETTY_PRINT);
                }
            }
            return Response::json(['message' => 'client id not payload...'], 402, [], JSON_PRETTY_PRINT); 
         }
         return Response::json(['message' => 'error'], 400, [], JSON_PRETTY_PRINT);
    }
}
