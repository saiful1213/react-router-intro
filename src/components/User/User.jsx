/* eslint-disable react/prop-types */

import { Link, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";

const User = ({ user }) => {
    const { id, name, email, phone } = user;
    const navigate = useNavigate();

    const handleShowDetail = () => {
        navigate(`/user/${id}`)
    }

    return (
        <div className="border border-red-500 rounded-lg p-4">
            <h2>Name: {name}</h2>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <Link to={`/user/${id}`}>
                <Button variant="destructive" className="mt-5">Show Details</Button>
            </Link>
            <Button onClick={handleShowDetail} variant="outline">Click Me</Button>
        </div>
    )
}

export default User;