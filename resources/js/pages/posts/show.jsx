import AppLayout from "@/layouts/app-layout";

export default function PostsShow({post}){
    return (
        <AppLayout>
            <h1>{post.title}</h1>
            <div>
                {post.body}
            </div>
        </AppLayout>
    )
}