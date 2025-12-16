<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class PostController extends Controller
{
    //index, show, edit, update....

    public function index(): Response{
        return Inertia::render('posts/index', [
            'posts' => Post::latest()->get()
        ]);
    }
    public function show(string $id): Response{
        return Inertia::render('posts/show', [
            'post' => Post::findOrFail($id)
        ]);
    }

    public function create(): Response{
        return Inertia::render('posts/create', [
        ]);
    }

    public function store(Request $request): RedirectResponse{
        // Validate data

        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'body' => 'required|string|max:1024'
        ]);

        Post::create($validated);
        // Create post in db
        // redirect to /posts
        return redirect('/posts');
    }
}
