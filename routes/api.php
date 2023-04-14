<?php

use App\Api\ContextApi;
use Illuminate\Support\Facades\Redis;
use Illuminate\Support\Facades\Route;

ContextApi::run();

// Route::get('test', function(){
//    date_default_timezone_set('Asia/Jakarta');
//    $seconds =  strtotime('2023-1-26 20:15:40') - time();
//    return $seconds;
//     $datak = new Arr;
//     ModelsProduk::chunk(200, function($items) use($datak){
//             foreach($items as $data){
//                 memory_get_usage(true);
//                 $datak[] = $data;
//                 // $datak->push($data);
//             }
//         });
//     return response()->json($datak, 200, [], JSON_PRETTY_PRINT);
// });

Route::get('test-await', function(){
     sleep(20);
     return response()->json(['time' => now('Asia/jakarta')->format('y-m-d H:i:s')]);
});
Route::get('api-test', function(){
     $produk = Redis::keys('produk*');
     return response()->json($produk, 200, [], JSON_PRETTY_PRINT);
});