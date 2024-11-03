/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const Post = ({ post }) => {
    const { id, title } = post;

    return (
        <div className="border border-yellow-500 rounded-lg p-4">
            <h1>Post id: {id}</h1>
            <h2>Title: {title}</h2>
            <Link to={`/post/${id}`}>
                <Button className="mt-6" variant="outline">Show Details</Button>
            </Link>
        </div>
    )
}

export default Post;