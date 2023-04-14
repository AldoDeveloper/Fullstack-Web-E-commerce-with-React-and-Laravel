<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Service\CategoryProduk\setServiceSelection;

class setCategorySelectionController extends Controller
{
    
    public function push(setServiceSelection $service){
        return $service->validation();
    }
}
