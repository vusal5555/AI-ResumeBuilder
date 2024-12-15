<?php

namespace App\Http\Controllers;

use App\Http\Resources\ResumeResource;
use App\Models\Resume;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Inertia\Inertia;

class AppController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {

        $resumes = Resume::with('user')->get();
        return Inertia::render('App/Dashboard', [
            'resumes' => ResumeResource::collection($resumes),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request, Response $respone)
    {

        $resume = new Resume();
        $resume->title = $request->title;
        $resume->user_id = auth()->id();

        $resume->save();

        return $resume;
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $resume = Resume::with('user')->findOrFail($id);

        return Inertia::render('App/Edit', [
            'resume' => new ResumeResource($resume),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
