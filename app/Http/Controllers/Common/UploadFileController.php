<?php

namespace App\Http\Controllers\Common;

use App\Http\Controllers\Controller;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
class UploadFileController extends Controller
{
    //
    public function PutFilesInStorage(Request $request)
    {
        try{
        if ($request->hasFile('file')) {
            $file = $request->file('file');
            $fileName = $request->input('fileName'); // Retrieve the unique filename
            // Store the file in the 'UploadedDocs' directory inside the 'public' directory
            $filePath = Storage::putFileAs('public/UploadedDocs', $file, $fileName);
            // Extract the filename from the file path
            $fileName = basename($filePath);
            // Log::channel('daily')->info("Controller Response: File uploaded successfully ");
            return response()->json(['message' => 'File uploaded successfully', 'fileName' => $fileName]);
        } else {
            // Log::channel('daily')->info("No file uploaded");
            return response()->json(['message' => 'No file uploaded'], 400);
        }
    }
    catch(Exception $e){
        $errorMessage = $e->getMessage();
        $e->getMessage();
        // Log::channel('daily')->info("Main Error :" . $errorMessage . " Line Number :" . $e->getLine());
        return response()->json(['message' => 'No file uploaded'], 500);
    }
    }
    public function DeleteFilesFromStorage(Request $request)
    {
        $fileName = $request->input('fileName');
        if ($fileName) {
            // Delete the file from the UploadedDocs directory inside the public directory
            if (Storage::exists('public/UploadedDocs/' . $fileName)) {
                Storage::delete('public/UploadedDocs/' . $fileName);
                // Log::channel('daily')->info("Controller Response: File deleted successfully ");
                return response()->json(['message' => 'File deleted successfully']);
            } else {
                return response()->json(['message' => 'File not found'], 404);
            }
        } else {
            // Log::channel('daily')->info("Controller Response: No file name provided ");
            return response()->json(['message' => 'No file name provided'], 400);
        }
    }
}
