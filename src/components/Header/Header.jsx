import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <nav className="flex gap-10">
                <NavLink to="/" className={({ isActive }) => isActive ? "bg-red-600 text-white py-1 px-4" : ''}>
                    Home
                </NavLink>
                <NavLink to='/about' className={({ isActive }) => isActive ? "bg-red-600 text-white py-1 px-4" : ''}>
                    About
                </NavLink>
                <NavLink to='/contact' className={({ isActive }) => isActive ? "bg-red-600 text-white py-1 px-4" : ''}>
                    Contact
                </NavLink>
                <NavLink to='/users' className={({ isActive }) => isActive ? "bg-red-600 text-white py-1 px-4" : ''}>
                    Users
                </NavLink>
                <NavLink to='/posts' className={({ isActive }) => isActive ? "bg-red-600 text-white py-1 px-4" : ''}>
                    Posts
                </NavLink>
            </nav>
        </div>
    )
}

export default Header;