<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use App\Models\Complaint;
use App\Models\User;

class ComplaintController extends Controller
{
    // Index page for user dashboard
    public function index(Request $request)
    {
        // Retrieve the user ID from the session
        $userId = $request->session()->get('user_id');
        
        // Check if user ID is present in the session
        if (!$userId) {
            return redirect('login')->with('error', 'User not logged in');
        }
        
        // Fetch complaints associated with the user
        $complaints = Complaint::with([
            'gram_panchayat:gp_id,gp_name',
            'block:block_id,block_name',
            'district:district_id,district_name',
            'state:state_id,state_name',
            'likes',
            'comments' => function ($query) {
                $query->with('user:id,name,profile_pic'); // Include user information for comments
            }
        ])
        ->where('user_id', $userId)
        ->withCount('comments')
        ->get();

        // Iterate over each complaint to add 'liked' attribute and total likes count
        $complaints->each(function ($complaint) use ($userId) {
            $complaint->liked = $complaint->likes->contains('user_id', $userId);
            $complaint->likes_count = $complaint->likes->count();
        });
        
        Log::info(json_encode($complaints));
        // Check if complaints exist
        if ($complaints->isEmpty()) {
            return view('User.user_dashboard')->with('message', 'No complaints raised by the user');
        }
        
        // Return the view with the complaints
        return view('User.user_dashboard', compact('complaints'));
    }
    
    // Complaints page
    public function complaints(Request $request)
    {
        // Retrieve the user ID from the session
        $userId = $request->session()->get('user_id');
        $state_id = $request->query('state');
        $complaint_id = $request->query('complaint_no');

        if($state_id){
            $where_condition_name = 'state_id';
            $where_condition_value = $state_id;
        }else if($complaint_id){
            $where_condition_name = 'id';
            $where_condition_value = $complaint_id;
        }else{
            $where_condition_name = 'state_id';
            $where_condition_value = $state_id;
        }

        // Check if user ID is present in the session
        if (!$userId) {
            return redirect('login')->with('error', 'User not logged in');
        }
        
        // Fetch complaints associated with the user
        $complaints = Complaint::with([
            'gram_panchayat:gp_id,gp_name',
            'block:block_id,block_name',
            'district:district_id,district_name',
            'state:state_id,state_name',
            'likes',
            'user:id,name',
            'comments' => function ($query) {
                $query->with('user:id,name,profile_pic'); // Include user information for comments
            }
        ])
        // ->where($where_condition_name, $where_condition_value)
        ->withCount('comments')
        ->get();

        // Iterate over each complaint to add 'liked' attribute and total likes count
        $complaints->each(function ($complaint) use ($userId) {
            $complaint->liked = $complaint->likes->contains('user_id', $userId);
            $complaint->likes_count = $complaint->likes->count();
        });
        
        Log::info(json_encode($complaints));
        // Check if complaints exist
        if ($complaints->isEmpty()) {
            return view('User.complaint_posts')->with('message', 'No complaints raised by the user');
        }
        
        // Return the view with the complaints
        return view('User.complaint_posts', compact('complaints'));
    }
    
    // Index page for education complaint
    public function educationComplaint()
    {
        return view('User.education_complaint');
    }

    public function healthComplaint()
    {
        return view('User.health_complaint');
    }

    public function developmentComplaint()
    {
        return view('User.development_complaint');
    }

    // Saving complaint
    public function AddComplaint(Request $request)
    {
        try{    
            // take all parameter from request and log
            Log::info('complaint_inputs: '.json_encode($request->all()));
            // Validate the request data
            $rules = [
                'complainant_name' => 'max:255',
                'village' => 'required|max:255',
                'gp_id' => 'required',
                'block_id' => 'required',
                'district_id' => 'required',
                'state_id' => 'required',
                'complaint_desc' => 'required',
                'complaint_image_url' => 'required|max:255',
                'anonymous_flag' => 'boolean',
                'complaint_type_id' => 'integer',
            ];
            
            // Custom messages
            $messages = [
                'gp_id.required' => 'The Gram Panchayat is required',
                'gp_id.integer' => 'The Gram Panchayat is required',
                'block_id.required' => 'The Block is required',
                'block_id.integer' => 'The Block is required',
                'district_id.required' => 'The District is required',
                'district_id.integer' => 'The District is required',
                'state_id.required' => 'The State is required',
                'state_id.integer' => 'The State is required',
                'complaint_type_id.required' => 'The Complaint Type is required',
                'complaint_type_id.integer' => 'The Complaint Type is required',
                'complaint_image_url.required' => 'The Proof Image is required',
                'village.required' => 'The Village name is required',
                'complaint_desc.required' => 'The Description of Complaint is required',
            ];
        
            // Validate the request data
            $validated = $request->validate($rules, $messages);

            // saving values to database using model
            $complaint = new Complaint();
            $complaint->complainant_name = $request->complainant_name;
            $complaint->village = $request->village;
            $complaint->gp_id = $request->gp_id;
            $complaint->block_id = $request->block_id;
            $complaint->district_id = $request->district_id;
            $complaint->state_id = $request->state_id;
            $complaint->complaint_desc = $request->complaint_desc;
            $complaint->complaint_image_url = $request->complaint_image_url;
            $complaint->anonymous_flag = $request->anonymous_flag;
            $complaint->complaint_type_id = $request->complaint_type_id;
            $userId = $request->session()->get('user_id');

            Log::info('complaint: '.$complaint);
            if (!$userId) {
                return redirect('login')->with('error', 'Session timeout, Please login again');
            }

            $complaint->user_id = $userId;

            // if name is blank
            if (!$request->complainant_name) {
                $complaint->complainant_name = 'Anonymous User';
                $complaint->anonymous_flag =  true;
            }
                
            // if anonymous flag is checked
            if ($request->anonymous_flag) {
                $complaint->complainant_name = 'Anonymous User';
            }else{
                $complaint->anonymous_flag =  false;
            }
            
            // save
            if($request->anonymous_flag == false && $complaint->save()){
                $user = User::find($userId);
                $user->name = $request->complainant_name;
                $user->save();

                return redirect('user-dashboard')->with('success', trans('complaint.save-success'));
            }
        }
        // catch
        catch (Exception $e) {
            Log::error($e);
            return redirect()->back()->with('error', trans('complaint.save-failed'));
        }
        
    }

    // update complaint
    public function disposeComplaint(Request $request)
    {
        $id = $request->id;
        $remarks = $request->remarks;
        $disposal_type = $request->disposal_type;

        // Retrieve the complaint by ID
        $complaint = Complaint::find($id);
        if (!$complaint) {
            return redirect()->back()->with('error', 'Complaint not found');
        }

        // remarks blank/null check
        if (!$remarks) {
            return redirect()->back()->with('error', 'Remarks is required');
        }

        // Update the complaint fields
        $complaint->remarks = $request->remarks;

        // getting auth type from session
        $auth_type_id = session('auth_type_id');
        $complaint_status_id = 1; // default value
        
        if($disposal_type == 'resolve'){
            $complaint_status_id = 0; // complaint resolved
        }else if($disposal_type == 'forward'){
            if($auth_type_id == 2){         // village level
                $complaint_status_id = 2;   // visible for block auth
            }elseif($auth_type_id == 3){    // block level
                $complaint_status_id = 3;   // visible for district auth
            }elseif($auth_type_id == 4){    // district level
                $complaint_status_id = 4;   // visible for state auth
            }
        }

        // Get user ID from session
        $userId = session('user_id');
        if (!$userId) {
            return redirect('admin/login')->with('error', 'Session timeout, Please login again');
        }

        $complaint->complaint_status_id = $complaint_status_id;
        $complaint->forwarded_auth_id = $userId;

        // Save the updated complaint
        if ($complaint->save()) {
            return redirect()->back()->with('success', 'Complaint has been disposed successfully');
        }

        // Redirect with error message if save fails
        return redirect()->back()->with('error', 'Failed to dispose the complaint');
    }
   

}
