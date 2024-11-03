import { Button } from "@/components/ui/button";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="text-center">
                <h1>Oops!</h1>
                <p>Sorry, an unexpected error has occurred.</p>
                <p>
                    {error.statusText || error.error}
                </p>
                <Link to={'/'}><Button>Home</Button></Link>
            </div>
        </div >
    )
}

export default ErrorPage;