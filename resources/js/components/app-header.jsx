import AppHeaderLogo from "@/components/app-header-logo";
import AppHeaderLink from "./app-header-link";
import { Link } from "@inertiajs/react";
import { Button } from "./ui/button";
import { create, index } from "@/actions/App/Http/Controllers/PostController";
import about from "@/routes/about";
import home from "@/routes/home";

export default function AppHeader(){
    return <header>
        <div className="max-w-4xl mx-auto px-4 py-4">
            <nav className="flex items-center justify-between">
                <AppHeaderLogo />
                <div className="flex space-x-6 items-center">
                    <Button>
                        <Link href={create()}>
                            Add Post
                        </Link>    
                    </Button>
                    <AppHeaderLink href={home.index()}>Home</AppHeaderLink>
                    <AppHeaderLink href={about.index()}>About</AppHeaderLink>
                    <AppHeaderLink href={index()}>Posts</AppHeaderLink>
                </div> 
            </nav>
        </div>
    </header>
}