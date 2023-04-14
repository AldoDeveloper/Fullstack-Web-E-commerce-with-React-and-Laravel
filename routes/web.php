<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function(){
    return view('pages');
});

Route::get('/{route}', function(){
    return view('pages');
});

Route::get('/{route}/{id}', function(){
    return view('pages');
});

Route::get('/{route}/{id}/{ids}', function(){
    return view('pages');
});
Route::get('/{route}/{id}/{idt}/{valid}', function(){
    return view('pages');
});

Route::get('/{route}/{id}/{idt}/{valid}/{more}', function(){
    return view('pages');
});

