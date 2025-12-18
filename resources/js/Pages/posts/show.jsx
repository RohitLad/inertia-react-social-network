import CommentCard from "@/components/comment-card";
import CommentForm from "@/components/comment-form";
import CommentList from "@/components/comment-list";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import AppLayout from "@/layouts/app-layout";
import { Deferred, usePoll } from "@inertiajs/react";
import { useRef, useEffect } from "react";
import { toast } from "sonner";

export default function PostsShow({ post, comments }) {
    const commentsSectionRef = useRef(null);
    const commentCountRef = useRef(comments?.length ?? 0);
    const scrollToComments = () => commentsSectionRef.current?.scrollIntoView({
        behaviour: "smooth",
        block: "start"
    });
    usePoll(3000, {
        only: ["comments"],
    });

    useEffect(()=> {
        // current length of comments
        const newCommentCount = comments?.length ?? 0;
        // we have stored prev length of comments
        // compare and show toast if changes
        if(newCommentCount > commentCountRef.current && commentCountRef.current>0){
            toast("New comments available", {
                duration: 6000,
                action:{
                    label: "View Comments",
                    onClick: scrollToComments
                }
            })
        }
        // update prev length to curr length
        commentCountRef.current = newCommentCount;
    }, [comments]);

    const handleCommentAdded = () => {
        toast("Comment has been added", {
            description: "Your comment is already visible"
        });
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