import AppLayout from "@/layouts/app-layout";
import { Form } from "@inertiajs/react";

export default function PostsShow() {
    return (
        <AppLayout>
            <h1 className="text-2xl font-bold text-gray-900 mb-5">Create Post</h1>
            <Form action="/posts" method="post" className="space-y-4">
                {
                    ({errors}) => (
                        <>
                            <div>
                                <label htmlFor="title" className="block mb-1">Title</label>
                                <input type="text" id="title" name="title" required className="w-full border rounded px-3 py-2" />
                            </div>
                            <div>
                                <label htmlFor="body" className="block mb-1">Body</label>
                                <textarea id="body" name="body" required className="w-full border rounded px-3 py-2" />
                            </div>
                            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
                                Create
                            </button>
                        </>
                    )
                }

            </Form>
        </AppLayout>
    )
}