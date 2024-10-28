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
        Schema::create('complaints', function (Blueprint $table) {
            $table->id();
            $table->string('complainant_name')->default('Anonymouse User');
            $table->string('village');
            $table->unsignedBigInteger('gp_id');
            $table->unsignedBigInteger('block_id');
            $table->unsignedBigInteger('district_id');
            $table->unsignedBigInteger('state_id');
            $table->string('complaint_desc');
            $table->string('complaint_image_url')->nullable();
            $table->boolean('anonymous_flag')->default(false);
            $table->unsignedBigInteger('complaint_type_id');
            $table->unsignedBigInteger('user_id');
            $table->timestamps();
            // Define the foreign key constraint
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('complaints');
    }
};
