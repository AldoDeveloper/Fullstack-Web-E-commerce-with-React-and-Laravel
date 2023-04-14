<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('advertisement_models', function (Blueprint $table) {
            $table->id();
            $table->string('title_avt');
            $table->string('link');
            $table->string('ket');
            $table->boolean('activation');
            $table->timestamps();
        });
    }
    
    public function down()
    {
        Schema::dropIfExists('advertisement_models');
    }
};
