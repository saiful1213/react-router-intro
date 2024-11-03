import Post from "@/components/Post/Post";
import { useLoaderData } from "react-router-dom";

const Posts = () => {
    const posts = useLoaderData();
    return (
        <div>
            <h1 className="my-6">Total Posts: {posts.length}</h1>
            <div className="grid grid-cols-3 gap-5">
                {
                    posts.map(post => <Post key={post.id} post={post}></Post>)
                }
            </div>
        </div>
    )
}

export default Posts;