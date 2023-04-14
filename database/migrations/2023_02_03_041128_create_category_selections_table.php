<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('category_selections', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('category_id');
            $table->string('type_name');
            $table->string('tokens');
            $table->foreign('category_id')->on('container_category_produks')
            ->references('id')
            ->onDelete('cascade')
            ->onUpdate('cascade');
            $table->timestamp('expired')->nullable();
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('category_selections');
    }
};
