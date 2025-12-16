import AppLayout from "@/layouts/app-layout";

export default function PostsShow({ post }) {
    return (
        <AppLayout>
            <h1>{post.title}</h1>
            <p className="text-sm text-gray-400">By {post.user.name}</p>

            <p>
                {post.body}
            </p>
        </AppLayout>
    )
}