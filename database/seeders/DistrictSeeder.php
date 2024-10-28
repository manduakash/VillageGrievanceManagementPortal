<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DistrictSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('districts')->insert([
            ['district_name'=>'Araria', 'state_id'=>1],
            ['district_name'=>'Arwal', 'state_id'=>1],
            ['district_name'=>'Aurangabad', 'state_id'=>1],
            ['district_name'=>'Banka', 'state_id'=>1],
            ['district_name'=>'Begusarai', 'state_id'=>1],
            ['district_name'=>'Bhagalpur', 'state_id'=>1],
            ['district_name'=>'Bhojpur', 'state_id'=>1],
            ['district_name'=>'Buxar', 'state_id'=>1],
            ['district_name'=>'Darbhanga', 'state_id'=>1],
            ['district_name'=>'East_Champaran', 'state_id'=>1],
            ['district_name'=>'Gaya', 'state_id'=>1],
            ['district_name'=>'Gopalganj', 'state_id'=>1],
            ['district_name'=>'Jamui', 'state_id'=>1],
            ['district_name'=>'Jehanabad', 'state_id'=>1],
            ['district_name'=>'Kaimur', 'state_id'=>1],
            ['district_name'=>'Katihar', 'state_id'=>1],
            ['district_name'=>'Khagaria', 'state_id'=>1],
            ['district_name'=>'Kishanganj', 'state_id'=>1],
            ['district_name'=>'Lakhisarai', 'state_id'=>1],
            ['district_name'=>'Madhepura', 'state_id'=>1],
            ['district_name'=>'Madhubani', 'state_id'=>1],
            ['district_name'=>'Munger', 'state_id'=>1],
            ['district_name'=>'Muzaffarpur', 'state_id'=>1],
            ['district_name'=>'Nalanda', 'state_id'=>1],
            ['district_name'=>'Nawada', 'state_id'=>1],
            ['district_name'=>'Patna', 'state_id'=>1],
            ['district_name'=>'Purnia', 'state_id'=>1],
            ['district_name'=>'Rohtas', 'state_id'=>1],
            ['district_name'=>'Saharsa', 'state_id'=>1],
            ['district_name'=>'Samastipur', 'state_id'=>1],
            ['district_name'=>'Saran', 'state_id'=>1],
            ['district_name'=>'Sheikhpura', 'state_id'=>1],
            ['district_name'=>'Sheohar', 'state_id'=>1],
            ['district_name'=>'Sitamarhi', 'state_id'=>1],
            ['district_name'=>'Siwan', 'state_id'=>1],
            ['district_name'=>'Supaul', 'state_id'=>1],
            ['district_name'=>'Vaishali', 'state_id'=>1],
            ['district_name'=>'West_Champaran', 'state_id'=>1],
        ]);
    }
}
