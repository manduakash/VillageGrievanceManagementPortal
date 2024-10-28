<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Complaint;
use Illuminate\Support\Facades\Log;

class AdminDashboardController extends Controller
{
    public function index(Request $request)
    {
        // Retrieve the user ID from the session
        $userId = $request->session()->get('user_id');
    
        // Check if user ID is present in the session
        if (!$userId) {
            return redirect('admin/login')->with('error', 'Admin not logged in');
        }
    
        // Return the view with the complaints
        // return view('Admin.user_dashboard', compact('complaints'));
        return view('Admin.admin_dashboard');
    }

    public function getComplaintByID(Request $request)
    {
        $ComplaintID = $request->input('ComplaintID');
        // Retrieve the user ID from the session
        $userId = session('user_id');
    
        // Check if user ID is present in the session
        if (!$userId) {
            return redirect('admin/login')->with('error', 'Admin not logged in');
        }
        
        $auth_type_id = session('auth_type_id');
        $gp_id = session('gp_id');
        $block_id = session('block_id');
        $district_id = session('district_id');
        $state_id = session('state_id');

        $input_log = [
            'auth_type_id'=>$auth_type_id,
            'gp_id'=>$gp_id,
            'block_id'=>$block_id,
            'district_id'=>$district_id,
            'state_id'=>$state_id,
        ];

        Log::info('session values : '. json_encode($input_log,true));

        $query = Complaint::with([
            'user:id,username',
            'gram_panchayat:gp_id,gp_name',
            'block:block_id,block_name',
            'district:district_id,district_name',
            'state:state_id,state_name',
            'likes',
        ])->withCount('likes', 'comments');

        if ($auth_type_id == 2 && $gp_id != 0) {    // if village leve admin login
            $query->where('gp_id', $gp_id);
        } elseif ($auth_type_id == 3 && $block_id != 0) {   // if block leve admin login
            $query->where('block_id', $block_id);
        } elseif ($auth_type_id == 4 && $district_id != 0) {    // if district leve admin login
            $query->where('district_id', $district_id);
        } elseif ($auth_type_id == 5 && $state_id != 0) {   // if state leve admin login
            $query->where('state_id', $state_id);
        }

        if ($ComplaintID == 0) {
            return redirect('admin/login')->with('error', 'Complaint not found');
        }
        $query->where('id', $ComplaintID);
        $complaints = $query->get();
        $complaint = $complaints[0];

        // Return the view with the complaints
        return view('Admin.complaint_details', compact('complaint'));
    }

    public function getComplaints($ComplaintID)
    {
        Log::info('------------getComplaints api----------');
        // Retrieve the user ID from the session
        $userId = session('user_id');
    
        // Check if user ID is present in the session
        if (!$userId) {
            return redirect('admin/login')->with('error', 'Admin not logged in');
        }

        $auth_type_id = session('auth_type_id');
        $gp_id = session('gp_id');
        $block_id = session('block_id');
        $district_id = session('district_id');
        $state_id = session('state_id');

        $input_log = [
            'auth_type_id'=>$auth_type_id,
            'gp_id'=>$gp_id,
            'block_id'=>$block_id,
            'district_id'=>$district_id,
            'state_id'=>$state_id,
        ];

        Log::info('session values : '. json_encode($input_log,true));

        $query = Complaint::with([
            'user:id,username',
            'gram_panchayat:gp_id,gp_name',
            'block:block_id,block_name',
            'district:district_id,district_name',
            'state:state_id,state_name',
            'likes',
        ])->withCount('likes', 'comments');

        if ($auth_type_id == 2 && $gp_id != 0) {    // if village leve admin login
            $query->where('gp_id', $gp_id);
        } elseif ($auth_type_id == 3 && $block_id != 0) {   // if block leve admin login
            $query->where('block_id', $block_id);
        } elseif ($auth_type_id == 4 && $district_id != 0) {    // if district leve admin login
            $query->where('district_id', $district_id);
        } elseif ($auth_type_id == 5 && $state_id != 0) {   // if state leve admin login
            $query->where('state_id', $state_id);
        }

        if ($ComplaintID != 0) {
            $query->where('id', $ComplaintID);
        }

        $complaints = $query->get();
        // Log::info('response : '+json_encode($complaints,true));
        return response()->json($complaints);
    }
}
