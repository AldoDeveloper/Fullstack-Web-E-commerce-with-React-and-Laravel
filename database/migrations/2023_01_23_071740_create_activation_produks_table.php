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
        Schema::create('activation_produks', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('produks_id');
            $table->string('produk_type')->nullable();
            $table->bigInteger('stock');
            $table->bigInteger('sold');
            $table->json('data');
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
        Schema::dropIfExists('activation_produks');
    }
};
