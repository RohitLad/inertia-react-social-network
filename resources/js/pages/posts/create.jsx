import AppLayout from "@/layouts/app-layout";
import { Form } from "@inertiajs/react";
import {cn} from "@/lib/utils";

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