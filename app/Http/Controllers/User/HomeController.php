<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Complaint;
use App\Models\User;
use Illuminate\Support\Facades\Log;

class HomeController extends Controller
{
    public function index(Request $request)
    {
        // Fetch complaints associated with the user
        $complaints = Complaint::with([
            'gram_panchayat:gp_id,gp_name',
            'block:block_id,block_name',
            'district:district_id,district_name',
            'state:state_id,state_name',
        ])
        ->where('complaint_status_id', 0)
        ->get();
    
        // Return the view with the complaints
        return view('User.home', compact('complaints'));
    }

    public function userProfile(Request $request)
    {
        return view('User.user_profile');
    }

    public function otherUserProfile(Request $request)
    {
        if(!$request->id){
            return view('User.other_user_profile');
        }

        if($request->id == session('user_id')){
            // redirect to user-profile
            return redirect('user-profile');
        }
        
        $user = User::with([
            'gram_panchayat:gp_id,gp_name',
            'block:block_id,block_name',
            'district:district_id,district_name',
            'state:state_id,state_name',
            'complaints'
        ])
        ->where('id', $request->id)->first();
        
        if ($user) {
            $complaints = $user->complaints;
        
            $user->total_complaints = $complaints->count() ?? 0;
            $user->resolved_complaints = $complaints->where('complaint_status_id', 0)->count() ?? 0;
            $user->pending_complaints = $complaints->where('complaint_status_id', '!=', 0)->count() ?? 0;
        }
        Log::info('user profile: '.json_encode($user,true));

        return view('User.other_user_profile',compact('user'));
    }

     // Saving complaint
     public function editProfile(Request $request)
     {
        try{    
            // take all parameter from request and log
            Log::info('user_request_inputs: '.json_encode($request->all()));
            // Validate the request data
        
            // saving values to database using model
            $user = new User();
            $user->name = $request->name;
            $user->village = $request->village;
            $user->gp_id = $request->gp_id;
            $user->block_id = $request->block_id;
            $user->district_id = $request->district_id;
            $user->state_id = $request->state_id;
            $user->profile_pic = $request->profile_pic;
            $userId = $request->session()->get('user_id');

            Log::info('user input: '.$user);
            if (!$userId) {
                return redirect('login')->with('error', 'Session timeout, Please login again');
            }
            
            // save
            $user = User::find($userId);
            if($user && $user->username == $request->username){
                // if not null then save values
                if(!empty($request->name)){
                    $user->name = $request->name;
                }
                if(!empty($request->village)){
                    $user->village = $request->village;
                }
                if(!empty($request->gp_id)){
                    $user->gp_id = $request->gp_id;
                }
                if(!empty($request->block_id)){
                    $user->block_id = $request->block_id;
                }
                if(!empty($request->district_id)){
                    $user->district_id = $request->district_id;
                }
                if(!empty($request->state_id)){
                    $user->state_id = $request->state_id;
                }
                if(!empty($request->profile_pic)){
                    $user->profile_pic = $request->profile_pic;
                }                

                // saving all values to the session
                $request->session()->put('name', $user->name);
                $request->session()->put('profile_pic', $user->profile_pic);
                $request->session()->put('state_id', $user->state->state_id);
                $request->session()->put('district_id', $user->district->district_id);
                $request->session()->put('block_id', $user->block->block_id);
                $request->session()->put('gp_id', $user->gram_panchayat->gp_id);
                $request->session()->put('village', $user->village);

                $user->save();
                return redirect()->back()->with('success', 'Profile updated successfully');
            }else{
                return redirect()->back()->with('error', 'Failed to edit user profile');
            }
        }
        // catch
        catch (Exception $e) {
            Log::error($e);
            return redirect()->back()->with('error', 'Failed to edit user profile');
        }
         
     }
}
