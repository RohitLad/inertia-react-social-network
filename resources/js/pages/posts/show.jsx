import CommentForm from "@/components/comment-form";
import CommentList from "@/components/comment-list";
import LikeButton from "@/components/like-button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import AppLayout from "@/layouts/app-layout";
import { Deferred, usePoll } from "@inertiajs/react";
import { useRef, useEffect } from "react";
import { toast } from "sonner";

export default function PostsShow({ post, comments, likes }) {
    const commentsSectionRef = useRef(null);
    const commentCountRef = useRef(comments?.length ?? 0);
    const iAMWritingComment = useRef(false);

    const scrollToComments = () => commentsSectionRef.current?.scrollIntoView({
        behaviour: "smooth",
        block: "start"
    });
    usePoll(3000, {
        only: ["comments", "likes"],
    });

    useEffect(()=> {
        // current length of comments
        const newCommentCount = comments?.length ?? 0;
        // we have stored prev length of comments
        // compare and show toast if changes
        if(newCommentCount > commentCountRef.current && 
            commentCountRef.current>0 &&
            !iAMWritingComment.current
        ){
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
        iAMWritingComment.current = false;
    }, [comments]);

    const handleCommentAdded = () => {
        iAMWritingComment.current = true;
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
                    <CardContent className="space-y-4">
                        <p
                            className="text-gray-700 whitespace-pre-wrap"
                        >
                            {post.body}
                        </p>
                        <Deferred data="likes" fallback={
                            <LikeButton 
                                postId={post.id}
                                count={likes?.count}
                                liked={likes?.user_has_liked}
                                //isLoading={!likes}
                            />
                        }>
                            <LikeButton 
                                postId={post.id} 
                                count={likes?.count} 
                                liked={likes?.user_has_liked}
                            />
                        </Deferred>
                    </CardContent>
                </Card>
                {/* Comment Form*/}
                <CommentForm postId={post.id} onCommentAdded={handleCommentAdded} />

                {/* Comments Section*/}
                <div className="space-y-4" ref={commentsSectionRef}>
                    <Deferred
                        data="comments"
                        fallback={
                            <CommentList comments={comments}/>
                        }
                    >
                        <CommentList comments={comments}/>
                    </Deferred>


                </div>

            </div>
        </AppLayout>
    )
}