<?php

namespace Database\Seeders;

use App\Models\Comment;
use App\Models\Post;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        $users = User::factory()
            ->count(10)
            ->has(Post::factory()->count(5))
            ->create();

        $posts = Post::all();

        Comment::factory()
            ->count(100)
            ->create([
                'user_id' => fn()=> $users->random()->id,
                'post_id' => fn()=> $posts->random()->id
            ]);
            
    }
}
