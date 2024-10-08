<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Word extends Model
{
    use HasFactory;


    protected $fillable = ['nederlands', 'turkish', 'english', 'sentence'];
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
