import { Form } from "@inertiajs/react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

export default function CommentForm({postId}){
    return (
        <Card className="rounded-none">
            <CardHeader>
                <CardTitle>Add Comment</CardTitle>
                <CardDescription>
                    Share your thoughts about this post
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Form action="/comments" method="post" className="space-y-4" resetOnSuccess>
                    {
                    ({errors, processing})=>(
                        <>
                            <Input 
                                type="hidden"
                                name="post_id"
                                value={postId}
                            />
                            <div className="space-y-1">
                                <Textarea 
                                    id="body"
                                    name="body"
                                    placeholder="Write your comment here..."
                                    aria-invalid={!!errors.body}
                                />
                                <Button type="submit" disabled={processing}>
                                    {processing?
                                        "Adding Comment"
                                        :
                                        "Add Comment"
                                    }
                                    </Button>
                            </div>
                        </>
                    )
                    }
                </Form>
            </CardContent>
        </Card>
    );
}