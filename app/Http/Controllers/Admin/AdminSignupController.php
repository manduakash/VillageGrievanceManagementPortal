<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class AdminSignupController extends Controller
{
    public function index()
    {
        return view('Admin.signup');
    }

    public function signup(Request $request)
    {
        // validations of input
        $request->validate([
            'username' => 'required|min:10|max:10|unique:users',
            'village' => 'required',
            'password' => 'required',
            'auth_type_id' => 'required'
        ]);
    
        // Check if the password and confirm password doesn't match
        if ($request->auth_type_id == 2) {  // village level
            if($request->state_id == 0 ){
                return redirect('admin/sign-up')->with('error', 'State name is missing');
            }
            else if($request->district_id == 0){
                return redirect('admin/sign-up')->with('error', 'District name is missing');
            }
            else if($request->block_id == 0){
                return redirect('admin/sign-up')->with('error', 'Block name is missing');
            }
            else if($request->gp_id == 0){
                return redirect('admin/sign-up')->with('error', 'Gram Panchayat name is missing');
            }
        }
        else if ($request->auth_type_id == 3) { // block level
            if($request->state_id == 0 ){
                return redirect('admin/sign-up')->with('error', 'State name is missing');
            }
            else if($request->district_id == 0){
                return redirect('admin/sign-up')->with('error', 'District name is missing');
            }
            else if($request->block_id == 0){
                return redirect('admin/sign-up')->with('error', 'Block name is missing');
            }
        }
        else if ($request->auth_type_id == 4) { // district level
            if($request->state_id == 0 ){
                return redirect('admin/sign-up')->with('error', 'State name is missing');
            }
            else if($request->district_id == 0){
                return redirect('admin/sign-up')->with('error', 'District name is missing');
            }
        }
        else if ($request->auth_type_id == 5) { // state level
            if($request->state_id == 0 ){
                return redirect('admin/sign-up')->with('error', 'State name is missing');
            }
        }
        
        // saving values to database using user model
        $user = new User();
        $user->username = $request->username;
        $user->password = Hash::make($request->password);
        $user->auth_type_id = 2;    // for admin
        $user->village = $request->village;
        $user->state_id = $request->state_id;
        $user->block_id = $request->block_id;
        $user->district_id = $request->district_id;
        $user->gp_id = $request->gp_id;
        // save
        if($user->save()){
            return redirect('admin/login')->with('success', trans('auth.signup-success'));
        }
        
        // redirect
        return redirect('admin/sign-up')->with('error', trans('auth.signup-failure'));
    }
}
