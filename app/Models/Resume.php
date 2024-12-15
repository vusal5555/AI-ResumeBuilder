<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Resume extends Model
{
    protected $fillable = ['title', 'user_id'];

    public function user()
    {

        return $this->belongsTo(User::class, 'user_id');
    }
}
