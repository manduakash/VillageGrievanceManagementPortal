<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class SignupController extends Controller
{
    public function index()
    {
        return view('User.signup');
    }

    public function signup(Request $request)
    {
        // validations of input
        $request->validate([
            'username' => 'required|min:10|max:10|unique:users',
            'village' => 'required',
            'password' => 'required',
            'confirm_password' => 'required',
            'state_id' => 'required',
            'block_id' => 'required',
            'district_id' => 'required',
            'gp_id' => 'required',
        ]);
    
        // Check if the password and confirm password doesn't match
        if ($request->password !== $request->confirm_password) {
            return redirect('sign-up')->with('error', trans('auth.sign-up-confirm-password'));
        }
        
        // saving values to database using user model
        $user = new User();
        $user->username = $request->username;
        $user->password = Hash::make($request->password);
        $user->auth_type_id = 1;    // for user
        $user->village = $request->village;
        $user->state_id = $request->state_id;
        $user->block_id = $request->block_id;
        $user->district_id = $request->district_id;
        $user->gp_id = $request->gp_id;
        // save
        if($user->save()){
            return redirect('login')->with('success', trans('auth.signup-success'));
        }
        
        // redirect
        return redirect('sign-up')->with('error', trans('auth.signup-failure'));
    }
}
