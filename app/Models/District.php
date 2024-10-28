<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class District extends Model
{
    use HasFactory;

    // Specify the table name if it's different from the plural of the model name
    protected $table = 'districts';

    // Specify the primary key if it's different from 'id'
    protected $primaryKey = 'district_id';

    // Specify the fields that can be mass assigned
    protected $fillable = ['district_name'];

    // Disable timestamps
    public $timestamps = true;

    public function users()
    {
        return $this->hasMany(User::class);
    }
}
