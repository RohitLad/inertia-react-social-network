import CommentCard from "@/components/comment-card";
import CommentForm from "@/components/comment-form";
import CommentList from "@/components/comment-list";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import AppLayout from "@/layouts/app-layout";
import { Deferred, usePoll } from "@inertiajs/react";
import { useRef } from "react";
import { toast } from "sonner";

export default function PostsShow({ post, comments }) {
    const commentsSectionRef = useRef(null);

    usePoll(10000, {
        only: ["comments"],
    })
    const handleCommentAdded = () => {
        toast("Comment has been added", {
            description: "Your comment is already visible"
        })
        setTimeout(() => {
            commentsSectionRef.current?.scrollIntoView({
                behaviour: "smooth",
                block: "start"
            })
        }, 100);
    }
    return (
        <AppLayout>
            <div className="space-y-6">
                {/**Post Content */}
                <Card className="rounded-none">
                    <CardHeader>
                        <CardTitle className="text-2xl">
                            {post.title}
                        </CardTitle>
                        <CardDescription>
                            By {post.user?.name} on {" "} {new Date(post.created_at).toLocaleDateString()}
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p
                            className="text-gray-700 whitespace-pre-wrap"
                        >
                            {post.body}
                        </p>
                    </CardContent>
                </Card>
                {/* Comment Form*/}
                <CommentForm postId={post.id} onCommentAdded={handleCommentAdded} />

                {/* Comments Section*/}
                <div className="space-y-4" ref={commentsSectionRef}>
                    <Deferred
                        data="comments"
                        fallback={
                            <CommentList comments={comments??[]}/>
                        }
                    >
                        <CommentList comments={comments}/>
                    </Deferred>


                </div>

            </div>
        </AppLayout>
    )
}