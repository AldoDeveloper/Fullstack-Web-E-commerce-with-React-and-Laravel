<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Str;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('promo_produks', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('id_produk');
            $table->string('type_promo');
            $table->string('tokens')->default(Str::upper(Str::random(30)));
            $table->timestamp('expired')->default(now('Asia/jakarta')->format('Y-m-d H:i:s'));
            $table->bigInteger('discount');
            $table->foreign('id_produk')->on('produks')->references('id')->onDelete('cascade')->onUpdate('cascade');
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
        Schema::dropIfExists('promo_produks');
    }
};
