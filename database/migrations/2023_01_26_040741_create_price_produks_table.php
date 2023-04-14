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
        Schema::create('price_produks', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('produks_id');
            $table->unsignedBigInteger('id_type');
            $table->bigInteger('price');
            $table->foreign('produks_id')
                ->on('produks')
                ->references('id')
                ->onDelete('cascade')
                ->onUpdate('cascade');
            $table->foreign('id_type')->on('type_prices')->references('id')->onDelete('cascade')->onUpdate('cascade');
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
        Schema::dropIfExists('price_produks');
    }
};
