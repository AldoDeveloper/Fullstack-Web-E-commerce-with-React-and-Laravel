<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Str;

return new class extends Migration
{
    public function up()
    {
        Schema::create('thumbnail_produks', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('produks_id');
            $table->uuid('tokens')->default(Str::orderedUuid());
            $table->string('path');
            $table->foreign('produks_id')->on('produks')->references('id')->onDelete('cascade')->onUpdate('cascade');
            $table->timestamps();
        });
    }
    
    public function down()
    {
        Schema::dropIfExists('thumbnail_produks');
    }
};
