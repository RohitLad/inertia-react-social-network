import { Loader2 } from "lucide-react";
import { Card, CardContent } from "./ui/card";

export default function LoadingCard({
    message="Loading...",
    className
})
{
    return(
        <Card className={className}>
            <CardContent className="flex flex-col items-center justify-center py-12">
                <Loader2 className="h-8 w-8 animate-spin text-muted-foreground mb-4"/>
                <p className="text-muted-foreground text-sm">{message}</p>
            </CardContent>
        </Card>
    );
}