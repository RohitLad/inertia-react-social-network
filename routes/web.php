<?php

use App\Http\Controllers\CommentController;
use App\Http\Controllers\PostController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function (){
    return Inertia::render('home');
})->name('home.index');

Route::get('/about', function (){
    return Inertia::render('about');
})->name('about.index');

Route::get('/posts/create', [PostController::class, 'create']);
Route::get('/posts', [PostController::class, 'index']);
Route::get('/posts/{id}', [PostController::class, 'show']);
Route::post('/posts', [PostController::class, 'store']);

Route::post('/comments', [CommentController::class, 'store']);