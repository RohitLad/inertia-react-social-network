import { Link } from "@inertiajs/react";
import AppLayout from "../layouts/app-layout";

export default function Home({ }) {
    return (
        <AppLayout>
            <div>
                <h1>About</h1>
                <Link href='/'>Home</Link>
            </div>
        </AppLayout>
    );
}