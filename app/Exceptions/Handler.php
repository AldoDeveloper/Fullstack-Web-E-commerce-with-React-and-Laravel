<?php

namespace App\Exceptions;

use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;
use Symfony\Component\Routing\Exception\RouteNotFoundException;
use Throwable;
use TypeError;

class Handler extends ExceptionHandler
{
    /**
     * A list of exception types with their corresponding custom log levels.
     *
     * @var array<class-string<\Throwable>, \Psr\Log\LogLevel::*>
     */
    protected $levels = [
        //
    ];

    /**
     * A list of the exception types that are not reported.
     *
     * @var array<int, class-string<\Throwable>>
     */
    protected $dontReport = [
        //
    ];

    /**
     * A list of the inputs that are never flashed to the session on validation exceptions.
     *
     * @var array<int, string>
     */
    protected $dontFlash = [
        'current_password',
        'password',
        'password_confirmation',
    ];

    /**
     * Register the exception handling callbacks for the application.
     *
     * @return void
     */
    public function register()
    {
        $this->reportable(function (Throwable $e) {
            //
        });

        $this->renderable(function(ErrorHandleJwt $e, $request){
            if($request->is('api/*')){
                return Response::json(['error' => $e->getMessage(), 'code' => 401], 401);
            } 
        });
        $this->renderable(function(HandleErrorProduk $e, Request $request){
            if($request->is('api/*')){
                return response()->json(['messages' => $e->getMessage()], 400, [], JSON_PRETTY_PRINT);
            }
        });
        // $this->renderable(function(TypeError $typeError, Request $request){
        //     if($request->is('api/*')){
        //         return response()->json(['messages' => 'type-error-handling'], 400, [], JSON_PRETTY_PRINT);
        //     }
        // });
    } 
}
