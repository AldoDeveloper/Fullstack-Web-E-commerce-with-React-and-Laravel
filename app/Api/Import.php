<?php

namespace App\Api;

class Import{

     protected $dataImport;

     public function __construct($import)
     {
          $this->dataImport = $import;
          $this->dataImport->boot();
     }
}