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
        Schema::create('start_produks', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('produks_id');
            $table->unsignedBigInteger('users_id');
            $table->string('produk_type');
            $table->bigInteger('count');
            $table->foreign('produks_id')->on('produks')->references('id')->onDelete('cascade')->onUpdate('cascade');
            $table->foreign('users_id')->on('users')->references('id')->onDelete('cascade')->onUpdate('cascade');
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
        Schema::dropIfExists('start_produks');
    }
};
