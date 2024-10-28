<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use Illuminate\Validation\ValidationException;
use Illuminate\Support\Facades\Log;

class LoginController extends Controller
{

    public function index()
    {
        return view('User.login');
    }

    public function login(Request $request)
    {
        try{
        // $this->validateLogin($request);

        // Validate input
        $request->validate([
            'username' => 'required|min:10|max:10',
            'password' => 'required'
        ]);

        if (method_exists($this, 'hasTooManyLoginAttempts') &&
            $this->hasTooManyLoginAttempts($request)) {
            $this->fireLockoutEvent($request);

            return $this->sendLockoutResponse($request);
        }

        $credentials = $request->only('username', 'password');

        $user = User::with([
            'gram_panchayat:gp_id,gp_name',
            'block:block_id,block_name',
            'district:district_id,district_name',
            'state:state_id,state_name',
            'complaints'
        ])
        ->where('username', $credentials['username'])->first();
        
        if ($user) {
            $complaints = $user->complaints;
        
            $user->total_complaints = $complaints->count() ?? 0;
            $user->resolved_complaints = $complaints->where('complaint_status_id', 0)->count() ?? 0;
            $user->pending_complaints = $complaints->where('complaint_status_id', '!=', 0)->count() ?? 0;
        }
        Log::info('user_details: '.json_encode($user,true));         
                                   

        if (!$user) {
            return redirect('login')->with('error', trans('auth.username'));
        }

        if($user->auth_user_id > 1){   // if it is not applicant login
            return redirect('login')->with('error', 'This number is already registered as administrator');
        }

        // Attempt to authenticate the user
        if (Auth::attempt($credentials)) {
            // Set session values
            $request->session()->put('isLoggedin', true);
            $request->session()->put('username', $user->username);
            $request->session()->put('user_id', $user->id);
            $request->session()->put('name', $user->name);
            $request->session()->put('profile_pic', $user->profile_pic);
            $request->session()->put('state_id', $user->state->state_id);
            $request->session()->put('district_id', $user->district->district_id);
            $request->session()->put('block_id', $user->block->block_id);
            $request->session()->put('gp_id', $user->gram_panchayat->gp_id);
            $request->session()->put('state_name', $user->state->state_name);
            $request->session()->put('district_name', $user->district->district_name);
            $request->session()->put('block_name', $user->block->block_name);
            $request->session()->put('gp_name', $user->gram_panchayat->gp_name);
            $request->session()->put('village', $user->village);
            $request->session()->put('auth_type_id', $user->auth_type_id);
            $request->session()->put('total_complaints', $user->total_complaints);
            $request->session()->put('pending_complaints', $user->pending_complaints);
            $request->session()->put('resolved_complaints', $user->resolved_complaints);
            return redirect()->intended('user-dashboard');
        }else{
            // else part return back to page with error message of 'failed to login try again'
            return redirect()->back()->with('error', 'Failed to login, try again');
        }
        
        } catch (Exception $e) {
            Log::error('Login failed: '. $e->getMessage());
            return response()->json(['error' => 'Login failed'], 500);
        }
    } // end of login function
    

     /**
     * Get the failed login response instance.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  string  $error
     * @return \Illuminate\Http\Response
     */
    protected function sendFailedLoginResponse(Request $request, $error)
    {
        throw ValidationException::withMessages([
            'username' => [trans($error)],
        ]);
    }

    public function logout(Request $request)
    {
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect('login')->with('success', 'You are successfully logged out!');
    }
}

