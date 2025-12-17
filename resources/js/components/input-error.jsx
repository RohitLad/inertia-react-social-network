import {cn} from "@/lib/utils";
function InputError({message, className, ...props}){
    if(!message) return null;
    return <p className={
        cn("text-red-500 text-sm mt-1", className)}
         {...props}
        >
        {message}
    </p>
}

export {InputError}