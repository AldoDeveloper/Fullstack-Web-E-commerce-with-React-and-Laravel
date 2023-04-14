<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('grosir_produks', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('produks_id');
            $table->string('grosir_name');
            $table->string('keys');
            $table->bigInteger('price_grosir');
            $table->string('cover');
            $table->bigInteger('stock_grosir');
            $table->bigInteger('sold_grosir');
            $table->foreign('produks_id')->on('produks')->references('id')->onDelete('cascade')->onUpdate('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('grosir_produks');
    }
};
