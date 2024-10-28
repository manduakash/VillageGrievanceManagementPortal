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
        Schema::table('users', function (Blueprint $table) {
            $table->string('profile_pic')->default('../img/default-user.avif')->after('name');
            $table->unsignedBigInteger('state_id')->default(0)->after('profile_pic');
            $table->unsignedBigInteger('district_id')->default(0)->after('state_id');
            $table->unsignedBigInteger('block_id')->default(0)->after('district_id');
            $table->unsignedBigInteger('gp_id')->default(0)->after('block_id');

            // Assuming you have a states table and want to add a foreign key constraint
            $table->foreign('state_id')->references('state_id')->on('states')->onDelete('cascade');
            $table->foreign('district_id')->references('district_id')->on('districts')->onDelete('cascade');
            $table->foreign('block_id')->references('block_id')->on('blocks')->onDelete('cascade');
            $table->foreign('gp_id')->references('gp_id')->on('gram_panchayats')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn('profile_pic');

            $table->dropForeign(
                [
                    'state_id',
                    'district_id',
                    'block_id',
                    'gp_id',
                ]
            );

            $table->dropColumn('state_id');
            $table->dropColumn('district_id');
            $table->dropColumn('block_id');
            $table->dropColumn('gp_id');

          
        });
    }
};
