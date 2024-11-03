import User from "@/components/User/User";
import { useLoaderData } from "react-router-dom";

const Users = () => {
    const users = useLoaderData();

    return (
        <div>
            <h1>Total Users: {users?.length}</h1>
            <div className="grid grid-cols-3 gap-5 ">
                {
                    users.map(user => <User key={user.id} user={user}></User>)
                }
            </div>
        </div>
    )
}

export default Users;