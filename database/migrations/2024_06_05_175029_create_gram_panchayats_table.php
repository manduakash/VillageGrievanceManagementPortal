<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('gram_panchayats', function (Blueprint $table) {
            $table->bigIncrements('gp_id');
            $table->string('gp_name');
            
            $table->unsignedBigInteger('block_id');

            // Foreign key constraint
            $table->foreign('block_id')->references('block_id')->on('blocks')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('gram_panchayats');
    }
};
