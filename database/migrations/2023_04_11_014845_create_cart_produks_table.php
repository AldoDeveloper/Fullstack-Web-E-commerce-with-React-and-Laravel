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
        Schema::create('cart_produks', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->unsignedBigInteger('id_users');
            $table->unsignedBigInteger('id_produk');
            $table->foreign('id_produk')
                ->on('produks')
                ->references('id')
                ->onDelete('cascade')
                ->onUpdate('cascade');
            $table->foreign('id_users')
            ->on('users')
            ->references('id')
            ->onDelete('cascade')
            ->onUpdate('cascade');
            $table->timestamps();
        });
    }
    public function down()
    {
        Schema::dropIfExists('cart_produks');
    }
};
