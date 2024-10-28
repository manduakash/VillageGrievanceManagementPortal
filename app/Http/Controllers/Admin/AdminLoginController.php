<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use Illuminate\Validation\ValidationException;
use Illuminate\Support\Facades\Log;

class AdminLoginController extends Controller
{

    public function index()
    {
        return view('Admin.login');
    }

    public function login(Request $request)
    {
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

        // Check if the user exists
        $user = User::where('username', $credentials['username'])->first();

        if (!$user) {
            return redirect('admin/login')->with('error', trans('auth.username'));
        }

        if($user->auth_user_id == 1){   // if it is not admin login
            return redirect('admin/login')->with('error', 'This account is registered as applicant');
        }

        // Attempt to authenticate the user
        if (Auth::attempt($credentials)) {
            // Set session values
            $request->session()->put('isLoggedin', true);
            $request->session()->put('username', $user->username);
            $request->session()->put('user_id', $user->id);
            $request->session()->put('name', $user->name);
            $request->session()->put('profile_pic', $user->profile_pic);
            $request->session()->put('state_id', $user->state_id);
            $request->session()->put('district_id', $user->district_id);
            $request->session()->put('block_id', $user->block_id);
            $request->session()->put('gp_id', $user->gp_id);
            $request->session()->put('village', $user->village);
            $request->session()->put('auth_type_id', $user->auth_type_id);
            return redirect()->intended('admin/admin-dashboard');
        }
        
        // Authentication failed...
        return redirect('admin/login')->with('error', trans('auth.password'));
    }

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

        return redirect('admin/login')->with('success', 'You are successfully logged out!');
    }
}

