<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Complaint extends Model
{
    use HasFactory;

    // Specify the table name if it's different from the plural of the model name
    protected $table = 'complaints';

    // Specify the primary key if it's different from 'id'
    protected $primaryKey = 'id';

    protected $fillable = [
        'complainant_name',
        'village',
        'gp_id',
        'block_id',
        'district_id',
        'state_id',
        'complaint_desc',
        'complaint_image_url',
        'anonymous_flag',
        'complaint_type_id',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
    // Define the relationship with the block table
    public function gram_panchayat()
    {
        return $this->belongsTo(GramPanchayat::class, 'gp_id');
    }
    // Define the relationship with the block table
    public function block()
    {
        return $this->belongsTo(Block::class, 'block_id');
    }

    // Define the relationship with the district table
    public function district()
    {
        return $this->belongsTo(District::class, 'district_id');
    }

    // Define the relationship with the state table
    public function state()
    {
        return $this->belongsTo(State::class, 'state_id');
    }

    // Define the relationship with the likes table
    /**
    * Get the likes for the complaint.
    */
    public function likes()
    {
        return $this->hasMany(Like::class, 'complaint_id', 'id');
    }

     /**
     * Get the comments for the complaint.
     */
    public function comments()
    {
        return $this->hasMany(Comment::class);
    }
    
}
