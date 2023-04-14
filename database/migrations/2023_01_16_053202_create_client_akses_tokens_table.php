<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('client_akses_tokens', function (Blueprint $table) {
            $table->id();
            $table->string('client_name');
            $table->text('tokens');
            $table->string('expired')->nullable();
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('client_akses_tokens');
    }
};
