<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Status;


class StatusController extends Controller
{
    public function index()
    {
        //get all statuses from db
        $statuses = Status::get();
        $statuses = json_encode($statuses); // encode them to json

        return $statuses;
    }
}
