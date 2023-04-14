<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('res_commend_produks', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('comment_id');
            $table->text('message');
            $table->foreign('comment_id')->on('comment_produks')->references('id')->onDelete('cascade')->onUpdate('cascade');
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
        Schema::dropIfExists('res_commend_produks');
    }
};
