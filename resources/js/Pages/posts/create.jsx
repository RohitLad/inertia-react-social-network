import AppLayout from "@/layouts/app-layout";
import { Form } from "@inertiajs/react";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { InputError } from "@/components/input-error";

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
                                            <Label htmlFor="title" className="block mb-1">Title</Label>
                                            <Input type="text" id="title" name="title" required aria-invalid={!!errors.title}/>
                                            <InputError message={errors.title}/>
                                        </div>
                                        <div>
                                            <Label htmlFor="body">Body</Label>
                                            <Textarea id="body" name="body" required aria-invalid={!!errors.body}/>
                                            <InputError message={errors.body}/>
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