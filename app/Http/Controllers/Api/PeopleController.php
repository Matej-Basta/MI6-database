<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Person;

class PeopleController extends Controller
{
    public function index(Request $request)
    {
        // get the search term from the request
        $search_term = $request->input('search');

        //       FROM `people`
        $query = Person::query();

        if ($search_term !== null) {
            //      WHERE `name`   LIKE   'james%'
            $query->where('name', 'like', $search_term . '%');
        }

        $people = $query
            ->orderBy('name', 'asc') // ORDER BY `name` ASC
            ->limit(50)              // LIMIT 50
            ->get();                 // SELECT *

        return $people;
    }
}
