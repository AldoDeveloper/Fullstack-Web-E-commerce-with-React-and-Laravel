<?php

namespace App\Http\Middleware;

use App\Exceptions\ErrorHandleJwt;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthTokensJwt
{
    public function handle(Request $request, Closure $next)
    {
        if(Auth::check()) return $next($request);
        throw new ErrorHandleJwt('error Tokens Auth');
    }
}
