import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import './Header.css';

const Header = () => {

    const { user, signOutUser } = useContext(AuthContext);

    const handleLogOut = () => {
        signOutUser()
            .then()
            .catch()
    }

    return (
        <div className="navbar bg-base-100 text-lg font-semibold my-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <div tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-32">
                        <NavLink activeClassName="active" to={"/"}>Home</NavLink>
                        <NavLink activeClassName="active" to={"/add"}>Add Product</NavLink>
                        <NavLink activeClassName="active" to={"/cart"}>My Cart</NavLink>
                    </div>
                </div>
                <div className="hidden lg:flex">
                    <Link to={"/"}>
                        <div className="flex gap-3">
                            <img className="w-16" src="https://i.ibb.co/9ppnKSs/logo.png" alt="Social Event" />
                            <h2 className="text-xl font-bold text-blue-800">Technology and<br />Electronics</h2>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="navbar-center">
                <div className="lg:flex gap-8 hidden">
                    <NavLink activeClassName="active" to={"/"}>Home</NavLink>
                    <NavLink activeClassName="active" to={"/add"}>Add Product</NavLink>
                    <NavLink activeClassName="active" to={"/cart"}>My Cart</NavLink>
                </div>
                <div className="lg:hidden ">
                    <Link to={"/"}>
                        <div className="flex gap-3">
                            <img className="w-12" src="https://i.ibb.co/9ppnKSs/logo.png" alt="Social Event" />
                            <h2 className="text-base font-bold text-blue-800">Technology and<br />Electronics</h2>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <div className="flex flex-col items-center justify-center gap-2 border p-2 rounded-lg">
                            <div className="flex gap-2 justify-center items-center">
                                {
                                    user.photoURL ? <img className="mask mask-circle w-12" src={user.photoURL} /> : <img className="mask mask-circle w-12" src="https://i.ibb.co/0rcvLrD/users.png" />
                                }
                                <NavLink onClick={handleLogOut}>Logout</NavLink>
                            </div>
                            <h2 className="text-lg font-bold">{user.displayName}</h2>
                        </div>
                        :
                        <div className="flex gap-8">
                            <NavLink to={"/login"}>Login</NavLink>
                            <NavLink className="md:flex hidden" to={"/register"}>Register</NavLink>
                        </div>
                }

            </div>
        </div>
    );
};

export default Header;