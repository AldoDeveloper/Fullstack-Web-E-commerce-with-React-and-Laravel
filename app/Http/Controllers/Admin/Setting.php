<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redis;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;

class Setting extends Controller
{
    public function setting_price_publish_global(Request $request){
        $credetials = Validator::make($request->all(), [
            'setting'      => ['required'],
            'setting.id'   => ['required', 'exists:type_prices,id'],
            'setting.type' => ['required', 'exists:type_prices,type']
        ]);
        if($credetials->fails())
            return response()->json($credetials->messages()->toArray(), 400, [], JSON_PRETTY_PRINT);
        $mapping = $request->setting;
        $mapping['tokens'] = Str::orderedUuid();
        return response()->json(['messages' => true, 'push' => $this->push_key_redis_server($mapping)], 200);
    }

    protected function push_key_redis_server(array $data){
        $saveInRedis = Redis::set('setting_price', json_encode($data));
        return $saveInRedis;
    }
}
