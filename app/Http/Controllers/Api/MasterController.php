<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\State;
use App\Models\District;
use App\Models\Block;
use App\Models\GramPanchayat;
use Illuminate\Support\Facades\Log;

class MasterController extends Controller
{
    // state get function
    public function getStateById(Request $request){
        // Log::channel('daily')->info("------------: getStateById API :-------");

        $state_id = $request->StateID;

        $response = [
            "status" => 0,
            "message" => 'Failed to get state details',
            "data" => [],
            "time" => date('Y-m-d H:i:s'),
        ];

        if($state_id){

            $data = State::find($state_id);
            $response = [
                "status" => 1,
                "message" => 'State detail has been fetched',
                "data" => $data,
                "time" => date('Y-m-d H:i:s'),
            ];
        }else
        if($state_id==0){

            $data = State::all();
            $response = [
                "status" => 1,
                "message" => 'State detail has been fetched',
                "data" => $data,
                "time" => date('Y-m-d H:i:s'),
            ];
        }
        // Log::channel('daily')->info("API Response :" . json_encode($response, true));
        return response()->json($response, 200);
    }

    // district get by state id function
    public function getDistrictByStateId(Request $request){
        // Log::channel('daily')->info("------------: getDistrictByStateId API :-------");
        
        $state_id = $request->StateID;
        // Log::channel('daily')->info("Input Param :" . $state_id);

        $response = [
            "status" => 0,
            "message" => 'Failed to get district details',
            "data" => [],
            "time" => date('Y-m-d H:i:s'),
            ];
            
            if($state_id){
                
            $data = District::where('state_id', $state_id)->get();
            // Log::channel('daily')->info("Model Response :" . json_encode($data, true));
            $response = [
                "status" => 1,
                "message" => 'District detail has been fetched',
                "data" => $data,
                "time" => date('Y-m-d H:i:s'),
            ];
        }
        // Log::channel('daily')->info("API Response :" . json_encode($response, true));
        return response()->json($response, 200);
    }

    // block get by district id function
    public function getBlockByDistrictId(Request $request){
        // Log::channel('daily')->info("------------: getBlockByDistrictId API :-------");
        
        $district_id = $request->DistrictID;
        // Log::channel('daily')->info("Input Param :" . $district_id);

        $response = [
            "status" => 0,
            "message" => 'Failed to get block details',
            "data" => [],
            "time" => date('Y-m-d H:i:s'),
            ];
            
            if($district_id){
                
            $data = Block::where('district_id', $district_id)->get();
            // Log::channel('daily')->info("Model Response :" . json_encode($data, true));
            $response = [
                "status" => 1,
                "message" => 'Block detail has been fetched',
                "data" => $data,
                "time" => date('Y-m-d H:i:s'),
            ];
        }
        // Log::channel('daily')->info("API Response :" . json_encode($response, true));
        return response()->json($response, 200);
    }

    // GP get by block id function
    public function getGPByBlockId(Request $request){
        // Log::channel('daily')->info("------------: getGPByBlockId API :-------");
        
        $block_id = $request->BlockID;
        // Log::channel('daily')->info("Input Param :" . $block_id);

        $response = [
            "status" => 0,
            "message" => 'Failed to get gram-panchayat details',
            "data" => [],
            "time" => date('Y-m-d H:i:s'),
            ];
            
        if($block_id){
                
            $data = GramPanchayat::where('block_id', $block_id)->get();
            // Log::channel('daily')->info("Model Response :" . json_encode($data, true));
            $response = [
                "status" => 1,
                "message" => 'Gram-Panchayat detail has been fetched',
                "data" => $data,
                "time" => date('Y-m-d H:i:s'),
            ];
        }else
        if($block_id == 0){
            $data = GramPanchayat::all();
            // Log::channel('daily')->info("Model Response :" . json_encode($data, true));
            $response = [
                "status" => 1,
                "message" => 'All Gram-Panchayat detail has been fetched',
                "data" => $data,
                "time" => date('Y-m-d H:i:s'),
            ];
        }
        // Log::channel('daily')->info("API Response :" . json_encode($response, true));
        return response()->json($response, 200);
    }
}
