import CommentCard from "./comment-card";

export default function CommentList({comments}){
    if(!comments || comments.length === 0){
        return(
            <div className="text-center py-8">
                <p className="text-gray-500">No comments yet.</p>
            </div>
        );
    }

    return (
        <div className="space-y-4">
            <div>
                {comments.map((comment)=>(
                    <CommentCard key={comment.id} comment={comment}/>
                ))}
            </div>
        </div>
    );
}