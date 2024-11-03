import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root"
import Home from "@/pages/Home/Home";
import About from "@/pages/About/About";
import Contact from "@/pages/Contact/Contact";
import Users from "@/pages/Users/Users";
import UserDetails from "@/components/UserDetails/UserDetails";
import Posts from "@/pages/Posts/Posts";
import PostDetails from "@/components/PostDetails/PostDetails";
import ErrorPage from "@/pages/ErrorPage/ErrorPage";

const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/users',
                loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
                element: <Users></Users>
            },
            {
                path: '/user/:userId',
                loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
                element: <UserDetails></UserDetails>
            },
            {
                path: '/posts',
                loader: () => fetch('https://jsonplaceholder.typicode.com/posts'),
                element: <Posts></Posts>
            },
            {
                path: '/post/:postId',
                loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
                element: <PostDetails></PostDetails>
            }
        ]
    }
])

export default Routes;