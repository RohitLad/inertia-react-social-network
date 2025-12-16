import AppLayout from "@/layouts/app-layout";
import { Link } from "@inertiajs/react";

export default function PostsShow({posts}){
    return (
        <AppLayout>
            <div className="space-y-6">
                <h1 className="text-2xl font-bold  text-gray-900">Posts</h1>
                {posts.length === 0 ? (
                    <div className="text-center py-8">
                        <p className="text-gray-500">No posts found.</p>
                    </div>
                ): (
                    <article className="border-b border-gray-200 pb-6 last:border-b-0">
                        {posts.map(
                            (post)=>(
                            <div key={post.id} className="mb-6">
                                <h2 className="text-xl font-semibold">
                                    <Link href={`/posts/${post.id}`}>
                                        {post.title}
                                    </Link>
                                </h2>
                                <p className="text-sm text-gray-400">By {post.user.name}</p>
                                <p className="text-gray-600">
                                    {post.body.substring(0, 200)}
                                    {post.body.length > 200 && "..."}
                                </p>

                            </div>
                            )
                        )}
                    </article>
                )}  
            </div>
                      
        </AppLayout>
    )
}