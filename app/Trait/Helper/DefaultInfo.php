<?php

namespace App\Trait\Helper;

trait DefaultInfo{
     
     public function info() : string{
          return '
               <h4>Info Produk Ini</h4>
               <ul>
                    <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, perspiciatis?</li>
                    <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, perspiciatis?</li>
                    <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, perspiciatis?</li>
                    <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, perspiciatis?</li>
                    <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, perspiciatis?</li>
               </ul>
          ';
     }
     public function details() : string{
          return '
               <h4>Info Detail Produk</h4>
               <ol>
                    <li>Lorem ipsum, dolor sit amet consectetur</li>
                    <li>Lorem ipsum, dolor sit amet consectetur</li>
                    <li>Lorem ipsum, dolor sit amet consectetur</li>
                    <li>Lorem ipsum, dolor sit amet consectetur</li>
                    <li>Lorem ipsum, dolor sit amet consectetur</li>
                    <li>Lorem ipsum, dolor sit amet consectetur</li>
                    <li>Lorem ipsum, dolor sit amet consectetur</li>
               </ol>
          ';
     }
}