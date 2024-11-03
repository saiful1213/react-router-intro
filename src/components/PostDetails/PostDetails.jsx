import { useLoaderData, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";

const PostDetails = () => {
    const navigate = useNavigate();
    const post = useLoaderData();
    const { id, body } = post;

    const handleGoBack = () => {
        navigate(-1)
    }

    return (
        <div className="border border-yellow-400 rounded-lg p-4 my-10">
            <h1>PostDetails of number {id}</h1>
            <p>{body}</p>
            <Button onClick={handleGoBack} variant="outline">Go Back</Button>
        </div>
    )
}

export default PostDetails;