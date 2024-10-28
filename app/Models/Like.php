<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Like extends Model
{
    use HasFactory;

     /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'user_id', 'complaint_id',
    ];

    /**
     * Get the complaint that the like belongs to.
     */
    public function complaint()
    {
        return $this->belongsTo(Complaint::class, 'complaint_id', 'id');
    }

    /**
     * Get the user that the like belongs to.
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
