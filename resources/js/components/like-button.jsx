import PostToggleLike from "@/actions/App/Http/Controllers/PostToggleLike";
import { cn } from "@/lib/utils";
import { router } from "@inertiajs/react";
import { Heart } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function LikeButton({
    postId, count=0, liked=false, isLoading:externalLoading=false
})
{
    const [isLoading, setIsLoading] = useState(externalLoading);
    const disabled = isLoading||externalLoading;

    const handleToggleLike = () =>{
        if(disabled) return;
        router.post(
            PostToggleLike(
                postId
            ),
            {},
            {
                onStart: ()=> setIsLoading(true),
                onSuccess: () => toast(liked? "Post unliked!" : "Post liked!"),
                onError: () => toast("Failed to update like"),
                onFinish: () => setIsLoading(false),
                only: ["likes"]
            }
        );
    };

    return (
        <button
            onClick={handleToggleLike}
            disabled={disabled}
            className={
                cn(
                    "flex items-center gap-2 px-3 py-1.5 rounded-full border transition-colors",
                    liked
                    ? "bg-red-50 border-red-200 text-red-600 hover:bg-gray-100"
                    : "bg-gray-50 border-gray-200 text-gray-600 hover:bg-gray-100",
                    disabled ? "opacity-50 cursor-not-allowed": "hover:scale-105"
                )
            }
        >
            <Heart
                size={16}
                className={cn(
                    "transition-all",
                    liked ? "fill-red-500 text-red-500" : "text-gray-500"
                )}
            />
            <span className="text-sm font-medium">{count}</span>

        </button>
    );
}