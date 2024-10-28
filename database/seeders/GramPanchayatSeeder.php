<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class GramPanchayatSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('gram_panchayats')->insert([
            ['gp_name'=>'ARARIA BASTI', 'block_id'=>1],
            ['gp_name'=>'BANGAMA', 'block_id'=>1],
            ['gp_name'=>'BANSBARI', 'block_id'=>1],
            ['gp_name'=>'BASANTPUR', 'block_id'=>1],
            ['gp_name'=>'BATURBARI', 'block_id'=>1],
            ['gp_name'=>'BELWA', 'block_id'=>1],
            ['gp_name'=>'BOCHI', 'block_id'=>1],
            ['gp_name'=>'CHANDARDEI', 'block_id'=>1],
            ['gp_name'=>'CHATAR', 'block_id'=>1],
            ['gp_name'=>'CHIKNI', 'block_id'=>1],
            ['gp_name'=>'DIYARI', 'block_id'=>1],
            ['gp_name'=>'GAIRA', 'block_id'=>1],
            ['gp_name'=>'GAIYARI', 'block_id'=>1],
            ['gp_name'=>'HARIYA', 'block_id'=>1],
            ['gp_name'=>'HAYATPUR', 'block_id'=>1],
            ['gp_name'=>'JAMUA', 'block_id'=>1],
            ['gp_name'=>'JHAMTA', 'block_id'=>1],
            ['gp_name'=>'KAMALDAHA', 'block_id'=>1],
            ['gp_name'=>'KISMAT KHAWASPUR', 'block_id'=>1],
            ['gp_name'=>'KUSIYARGAON', 'block_id'=>1],
            ['gp_name'=>'MADANPUR East', 'block_id'=>1],
            ['gp_name'=>'MADANPUR West', 'block_id'=>1],
            ['gp_name'=>'PAIKTOLA', 'block_id'=>1],
            ['gp_name'=>'POKHARIYA', 'block_id'=>1],
            ['gp_name'=>'RAMPUR KODARKATTI', 'block_id'=>1],
            ['gp_name'=>'RAMPUR MOHANPUR East', 'block_id'=>1],
            ['gp_name'=>'RAMPUR MOHANPUR West', 'block_id'=>1],
            ['gp_name'=>'SAHASMAL', 'block_id'=>1],
            ['gp_name'=>'SHARANPUR', 'block_id'=>1],
            ['gp_name'=>'TARAUNA BHOJPUR', 'block_id'=>1],
        ]);
    }
}
