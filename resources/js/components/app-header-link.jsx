import { Link } from "@inertiajs/react";

export default function AppHeaderLink({href, children}){
    return (
    <Link className="text-gray-600 font-medium" href={href}>
        {children}
    </Link>
    )
}