import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import './Header.css';
import { AuthContext } from "../../providers/AuthProvider";

const Header = () => {

    const { user, signOutUser, isChecked, setIsChecked } = useContext(AuthContext);


    const handleToggle = e => {
        if (e.target.checked)
            setIsChecked(true);
        else
            setIsChecked(false)
    }

    const handleLogOut = () => {
        signOutUser()
            .then()
            .catch()
    }

    return (
        <div className="navbar text-lg font-semibold py-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <div tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-32">
                        <NavLink activeclassname="activeR" to={"/"}>Home</NavLink>
                        <NavLink activeclassname="activeR" to={"/add"}>Add Product</NavLink>
                        <NavLink activeclassname="activeR" to={"/cart"}>My Cart</NavLink>
                        <input onChange={handleToggle} type="checkbox" className="toggle toggle-md ml-4 md:hidden" checked={isChecked} />

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
                    <NavLink activeclassname="active" to={"/"}>Home</NavLink>
                    <NavLink activeclassname="active" to={"/add"}>Add Product</NavLink>
                    <NavLink activeclassname="active" to={"/cart"}>My Cart</NavLink>
                </div>
                <div className="lg:hidden ">
                    <Link to={"/"}>
                        <div className="flex gap-3">
                            <img className="w-12" src="https://i.ibb.co/9ppnKSs/logo.png" alt="Social Event" />
                            <h2 className="text-base font-bold text-blue-800 hidden md:flex">Technology and<br />Electronics</h2>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <div className="flex flex-col items-center justify-center gap-2 border p-2 rounded-lg font-bold">
                            <div className="flex gap-2 justify-center items-center">
                                <Link to={'/profile'}>
                                    {
                                        user.photoURL ? <img className="mask mask-circle w-12" src={user.photoURL} /> : <img className="mask mask-circle w-12" src="https://i.ibb.co/0rcvLrD/users.png" />
                                    }
                                </Link>
                                <Link className={isChecked ? 'text-[#fff]' : 'text-[#181818]'} onClick={handleLogOut}>Logout</Link>
                            </div>
                            <Link to={'/profile'}><h2 className="text-lg font-bold">{user.displayName}</h2></Link>
                        </div>
                        :
                        <div className="flex gap-8">
                            <NavLink to={"/login"}>Login</NavLink>
                            <NavLink className="md:flex hidden" to={"/register"}>Register</NavLink>
                        </div>
                }

                <input onChange={handleToggle} type="checkbox" className="toggle toggle-md ml-4 hidden md:flex" checked={isChecked} />

            </div>
        </div>
    );
};

export default Header;