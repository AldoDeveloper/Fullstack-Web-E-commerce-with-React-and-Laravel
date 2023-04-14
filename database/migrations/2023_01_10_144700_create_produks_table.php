<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('produks', function (Blueprint $table) {
            $table->id();
            $table->morphs('category');
            $table->string('name_produk');
            $table->string('keys');
            $table->string('cover');
            $table->json('data');
            $table->string('tokens');
            $table->foreign('category_id')->on('category_produks')->references('id')->onDelete('cascade')->onDelete('cascade');
            $table->timestamps();
        });
    }
    public function down()
    {
        Schema::dropIfExists('produks');
    }
};
