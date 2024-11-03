import { useLoaderData, useParams } from "react-router-dom";

const UserDetails = () => {
    const { userId } = useParams();
    console.log(userId);

    const user = useLoaderData()

    const { name, website } = user;

    return (
        <div className="border border-red-400 rounded-lg p-4 my-10">
            <h2>Name: {name}</h2>
            <p>Website: {website}</p>
        </div>
    )
}

export default UserDetails;