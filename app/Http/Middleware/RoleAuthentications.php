<?php

namespace App\Http\Middleware;

use App\Exceptions\ErrorHandleJwt;
use App\Models\User;
use Closure;
use Illuminate\Http\Request;

class RoleAuthentications
{
    public function handle(Request $request, Closure $next, $type)
    {
        switch($type){
            case 'users':
               $user = User::where('email', $request->email)->first();
                if(!is_null($user) && $user->role === 0) return $next($request);
                throw new ErrorHandleJwt('users-not-found');
                break;

            case 'admin':
                $user = User::where('email', $request->email)->first();
                if(!is_null($user) && $user->role === 1) return $next($request);
                throw new ErrorHandleJwt('admin-not-found');
                break;
            default:
                throw new ErrorHandleJwt('not found');
                break;
        }
    }
}
