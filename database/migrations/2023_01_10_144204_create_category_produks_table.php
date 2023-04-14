<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('category_produks', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('container_produk_id');
            $table->string('name');
            $table->string('path');
            $table->text('tokens');
            $table->foreign('container_produk_id')->on('container_category_produks')
                ->references('id')
                ->onDelete('cascade')
                ->onUpdate('cascade');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('category_produks');
    }
};
