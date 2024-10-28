<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Block extends Model
{
    use HasFactory;

    // Specify the table name if it's different from the plural of the model name
    protected $table = 'blocks';

    // Specify the primary key if it's different from 'id'
    protected $primaryKey = 'block_id';

    // Specify the fields that can be mass assigned
    protected $fillable = ['block_name'];

    // Disable timestamps
    public $timestamps = true;
    
    public function users()
    {
        return $this->hasMany(User::class);
    }
}
