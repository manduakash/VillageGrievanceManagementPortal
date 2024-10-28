<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Log;
use App\Models\Comment;

class CommentController extends Controller
{
    // saving comment
   public function addComment(Request $request)
   {
       // Validate the request
       $validator = Validator::make($request->all(), [
           'user_id' => 'required',
           'complaint_id' => 'required',
           'comment' => 'required',
       ]);

       if ($validator->fails()) {
           Log::info('response: '.response()->json(['error' => $validator->errors()], 400));
           return response()->json(['error' => $validator->errors()], 400);
       }

        $status = Comment::create([
            'user_id' => $request->user_id,
            'complaint_id' => $request->complaint_id,
            'comment' => $request->comment,
        ]);

       if ($status) {
           Log::info('response: '.response()->json(['message' => 'Like removed successfully'], 200));
           return response()->json(['message' => 'Comment added successfully'], 201);
       } else {
           Log::info('response: '.response()->json(['message' => 'Like added successfully', 'like' => $like], 201));
           return response()->json(['message' => 'Failed to post comment'], 400);
       }
   }
}
