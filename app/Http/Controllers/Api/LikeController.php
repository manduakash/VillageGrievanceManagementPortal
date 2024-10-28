<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Like;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Log;

class LikeController extends Controller
{
    /**
     * Store a newly created like in storage or remove it if it already exists.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */

    // like
    public function support(Request $request)
    {
        // Validate the request
        $validator = Validator::make($request->all(), [
            'user_id' => 'required|exists:users,id',
            'complaint_id' => 'required|exists:complaints,id',
        ]);

        if ($validator->fails()) {
            // Log::info('response: '.response()->json(['error' => $validator->errors()], 400));
            return response()->json(['error' => $validator->errors()], 400);
        }

        // Check if the like already exists
        $like = Like::where('user_id', $request->user_id)
                    ->where('complaint_id', $request->complaint_id)
                    ->first();

        if ($like) {
            // If like exists, delete it
            $like->delete();
            // Log::info('response: '.response()->json(['message' => 'Like removed successfully'], 200));
            return response()->json(['message' => 'Like removed successfully'], 200);
        } else {
            // If like does not exist, create it
            $like = Like::create([
                'user_id' => $request->user_id,
                'complaint_id' => $request->complaint_id,
            ]);
            // Log::info('response: '.response()->json(['message' => 'Like added successfully', 'like' => $like], 201));
            return response()->json(['message' => 'Like added successfully', 'like' => $like], 201);
        }
    }

    // dislike
    public function disagree(Request $request)
    {
        // Validate the request
        $validator = Validator::make($request->all(), [
            'user_id' => 'required|exists:users,id',
            'complaint_id' => 'required|exists:complaints,id',
        ]);

        if ($validator->fails()) {
            // Log::info('response: '.response()->json(['error' => $validator->errors()], 400));
            return response()->json(['error' => $validator->errors()], 400);
        }

        // Check if the like already exists
        $like = Like::where('user_id', $request->user_id)
                    ->where('complaint_id', $request->complaint_id)
                    ->first();

        if ($like) {
            // If like exists, delete it
            $like->delete();
            // Log::info('response: '.response()->json(['message' => 'Like removed successfully'], 200));
            return response()->json(['message' => 'Like removed successfully'], 200);
        } else {
            return response()->json(['message' => 'Failed to remove like'], 400);
        }
    }
}
