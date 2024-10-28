<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class BlockSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('blocks')->insert([
            ['block_name'=>'Araria Sadar', 'district_id'=>1],
            ['block_name'=>'Forbesganj', 'district_id'=>1],
            ['block_name'=>'Jokihat', 'district_id'=>1],
            ['block_name'=>'Narpatganj', 'district_id'=>1],
            ['block_name'=>'Palasi', 'district_id'=>1],
            ['block_name'=>'Raniganj', 'district_id'=>1],
            ['block_name'=>'Sikti', 'district_id'=>1],
        ]);
    }
}
