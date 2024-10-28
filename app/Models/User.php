<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'username',
        'village',
        'password',
        'auth_type_id',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'username_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }

      /**
     * Get the complaints for the user.
     */
    public function complaints()
    {
        return $this->hasMany(Complaint::class);
    }

    public function state()
    {
        return $this->belongsTo(State::class,'state_id' );
    }

    public function district()
    {
        return $this->belongsTo(District::class,'district_id' );
    }

    public function block()
    {
        return $this->belongsTo(Block::class,'block_id' );
    }

    public function gram_panchayat()
    {
        return $this->belongsTo(GramPanchayat::class, 'gp_id');
    }
}
