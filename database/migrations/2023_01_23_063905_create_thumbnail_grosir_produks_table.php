<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('thumbnail_grosir_produks', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->unsignedBigInteger('grosir_id');
            $table->string('path');
            $table->foreign('grosir_id')
                ->on('grosir_produks')
                ->references('id')
                ->onDelete('cascade')
                ->onUpdate('cascade');
        });
    }

    public function down()
    {
        Schema::dropIfExists('thumbnail_grosir_produks');
    }
};
