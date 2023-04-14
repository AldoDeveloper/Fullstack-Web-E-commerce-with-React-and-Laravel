<?php

namespace App\Http\Middleware\Publish;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ControlAuthentication
{
    public function handle(Request $request, Closure $next)
    {
        if(Auth::check()){
            $this->control($request);
            return $next($request);
        }
        $this->control($request);
        return $next($request);
    }

    protected function control(Request $request) : void{
        $request['login'] = (array) new class($request){
            public $auth;
            public $user;
            public function __construct(Request $request)
            {
                $this->auth = is_null($request->user()) ? false : true;
                $this->user = $request->user();
            }
       };
    }
}
