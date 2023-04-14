<?php

namespace App\Http\Controllers;
use App\Trait\RedisTraits;
use Illuminate\Http\Request;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Redis;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Str;

class RedisController extends Controller
{
    use RedisTraits;

    public function store(Request $request){
        Redis::command('lpush', ['data', collect(['data' => $request->data])]);
        return Response::json(['message' => 'success_add']);
    }
    
    protected function getDataAll(): Collection{
        $showDataRedis = Redis::command('lrange', ['data', 0, -1]);
        return $this->showListAll($showDataRedis);
    }

    public function showAll(){
       $showAll = $this->getDataAll();
       return Response::json($showAll->toArray(), 200, [], JSON_PRETTY_PRINT);
    }

    public function show_find(Request $request, $id){
        $filter = $this->getDataAll()->filter(function($val) use($id){
            return Str::contains($val->data->name, $id, true);
        })->values();
        return Response::json($filter, 200, [], JSON_PRETTY_PRINT);
    }
}
