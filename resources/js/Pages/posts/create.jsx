import AppLayout from "@/layouts/app-layout";
import { Form } from "@inertiajs/react";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function PostsShow() {
    return (
        <AppLayout>
            <Card>
                <CardHeader>
                    <CardTitle>
                        Create Post
                    </CardTitle>
                    <CardDescription>
                        Create a new post
                    </CardDescription>
                    <CardContent>
                        <Form action="/posts" method="post" className="space-y-4">
                            {
                                ({ errors }) => (
                                    <>
                                        <div>
                                            <label htmlFor="title" className="block mb-1">Title</label>
                                            <input type="text" id="title" name="title" required className={
                                                cn(
                                                    "w-full border rounded px-3 py-2",
                                                    errors.title && "border-red-500"
                                                )
                                            } />
                                            {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
                                        </div>
                                        <div>
                                            <label htmlFor="body" className="block mb-1">Body</label>
                                            <textarea id="body" name="body" required className={
                                                cn(
                                                    "w-full border rounded px-3 py-2",
                                                    errors.body && "border-red-500"
                                                )
                                            } />
                                            {errors.body && <p className="text-red-500 text-sm mt-1">{errors.body}</p>}
                                        </div>

                                        <Button type="submit">
                                            Create
                                        </Button>
                                    </>
                                )
                            }

                        </Form>
                    </CardContent>
                </CardHeader>
            </Card>

        </AppLayout>
    )
}