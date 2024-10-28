<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\User\HomeController;
use App\Http\Controllers\User\LoginController;
use App\Http\Controllers\User\SignupController;
use App\Http\Controllers\Admin\AdminLoginController;
use App\Http\Controllers\Admin\AdminSignupController;
use App\Http\Controllers\User\ComplaintController;
use App\Http\Controllers\Common\UploadFileController;
use App\Http\Controllers\Api\MasterController;
use App\Http\Controllers\Api\LikeController;
use App\Http\Controllers\Api\CommentController;
use App\Http\Controllers\Admin\AdminDashboardController;

Route::get('/', [HomeController::class, 'index']);
Route::get('/login', [LoginController::class, 'index'])->name('login');
Route::post('/login', [LoginController::class, 'login'])->name('login.post');
Route::get('/sign-up', [SignupController::class, 'index'])->name('signup');;
Route::post('/sign-up', [SignupController::class, 'signup'])->name('signup.post');
Route::get('/logout', [LoginController::class, 'logout'])->name('logout');
Route::post('/upload', [UploadFileController::class, 'PutFilesInStorage'])->name('upload');;
Route::post('/delete', [UploadFileController::class, 'DeleteFilesFromStorage']);

// admin 
Route::prefix('admin')->name('admin.')->group(function () {
    Route::get('/login', [AdminLoginController::class, 'index'])->name('login');
    Route::post('/login', [AdminLoginController::class, 'login'])->name('login.post');
    Route::get('/sign-up', [AdminSignupController::class, 'index'])->name('signup');;
    Route::post('/sign-up', [AdminSignupController::class, 'signup'])->name('signup.post');
    Route::get('/admin-dashboard', [AdminDashboardController::class, 'index']);
    Route::get('/logout', [AdminLoginController::class, 'logout'])->name('logout');
    // Get APIs for admin only:
    Route::get('/get-state/{StateID}', [MasterController::class, 'getStateById']);
    Route::get('/get-district/{StateID}', [MasterController::class, 'getDistrictByStateId']);
    Route::get('/get-block/{DistrictID}', [MasterController::class, 'getBlockByDistrictId']);
    Route::get('/get-gp/{BlockID}', [MasterController::class, 'getGPByBlockId']);
    Route::get('/get-complaints/{ComplaintID}', [AdminDashboardController::class, 'getComplaints']);
    Route::get('/get-complaint-by-id', [AdminDashboardController::class, 'getComplaintByID']);
    Route::post('/dispose-complaint', [ComplaintController::class, 'disposeComplaint'])->name('dispose.complaint.post');
});

// after login routes
Route::middleware(['auth'])->group(function(){
    Route::get('/user-dashboard', [ComplaintController::class, 'index']);
    Route::get('/education-complaint', [ComplaintController::class, 'educationComplaint']);
    Route::get('/health-complaint', [ComplaintController::class, 'healthComplaint']);
    Route::get('/development-complaint', [ComplaintController::class, 'developmentComplaint']);
    Route::post('/save-complaint', [ComplaintController::class, 'AddComplaint'])->name('complaint.post');
    Route::post('/disagree', [LikeController::class, 'disagree']);
    Route::post('/support', [LikeController::class, 'support']);
    Route::post('/disagree', [LikeController::class, 'disagree']);
    Route::post('/addComment', [CommentController::class, 'addComment']);
    Route::get('/complaints', [ComplaintController::class, 'complaints']);
    Route::get('/user-profile', [HomeController::class, 'userProfile']);
    Route::get('/profile-details', [HomeController::class, 'otherUserProfile']);
    Route::post('/edit-profile', [HomeController::class, 'editProfile'])->name('edit.profile.post');
});

// Get APIs:
Route::get('/get-state/{StateID}', [MasterController::class, 'getStateById']);
Route::get('/get-district/{StateID}', [MasterController::class, 'getDistrictByStateId']);
Route::get('/get-block/{DistrictID}', [MasterController::class, 'getBlockByDistrictId']);
Route::get('/get-gp/{BlockID}', [MasterController::class, 'getGPByBlockId']);

