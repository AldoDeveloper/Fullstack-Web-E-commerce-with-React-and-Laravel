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
        Schema::create('ulasan_bukti_images', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('id_ulasan');
            $table->uuid('tokens')->default(Str::orderedUuid());
            $table->foreign('id_ulasan')->on('ulasan_produks')
                ->references('id')->onDelete('cascade')
                ->onUpdate('cascade');
            $table->string('path');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('ulasan_bukti_images');
    }
};
