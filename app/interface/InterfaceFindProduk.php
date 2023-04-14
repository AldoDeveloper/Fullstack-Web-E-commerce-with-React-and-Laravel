<?php

namespace App\interface;

use Illuminate\Database\Eloquent\Model;

interface InterfaceFindProduk extends Auth{
     
     public function price();
     // public function configPrice();
     public function attrHidden() : void;
     public function flattenImg() : void;
     public function output(int $id);
}