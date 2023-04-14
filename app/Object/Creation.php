<?php
namespace App\Object;

use Illuminate\Support\Arr;

class Creation{
    private static $observer;
    protected const key = 'keys';

    public static function set(array $input){
        if(!self::$observer instanceof self){
            self::$observer = new self;
        }
        self::$observer->{self::key} = $input;
        return self::$observer;
    }

    public function merge(array $arrays){
        $merge = array_merge_recursive($this->{self::key}, $arrays);
        $this->{self::key} = $merge;
        return $this;
    }
    public function values_first(){
        $array = [];
        foreach($this->{self::key} as $key => $values){
            if(is_array($values)){
                array_push($array, [$key => (count($values) > 1 ? $values : Arr::first($values))]);
            }else{
                array_push($array, [$key => $values]);
            }
        }
        $this->{self::key} = Arr::collapse($array);
        return $this;
    }

    public function get(){
        return $this->{self::key};
    }
}