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
        Schema::create('activation_grosir_produks', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('grosir_produk_id');
            $table->string('grosir_type');
            $table->bigInteger('stock');
            $table->bigInteger('sold')->nullable();
            $table->json('data');
            $table->foreign('grosir_produk_id')
                ->on('grosir_produks')->references('id')
                ->onDelete('cascade')->onUpdate('cascade');
            $table->timestamps();
        });
    }
    
    public function down()
    {
        Schema::dropIfExists('activation_grosir_produks');
    }
};
