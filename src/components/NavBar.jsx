import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';import Swal from 'sweetalert2'

const NavBar = () => {
    const [theme, setTheme] = useState(true)
    const item = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='allEquipment'>All Sports Equipment</NavLink></li>
        <li><NavLink to='addEquipment'>Add Equipment</NavLink></li>
        <li><NavLink to='myEquipment'>My Equipment</NavLink></li>
    </>;

    const { user, logout } = useContext(AuthContext);

    const handleLogout = () => {
        logout();
        const Toast = Swal.mixin({
            toast: true,
            position: "top",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            }
          });
          Toast.fire({
            icon: "success",
            title: "Loged Out successfully"
          });
    };

    const toggleTheme = () => {
        const htmlElement = document.documentElement;
        if (htmlElement.getAttribute("data-theme") === "light") {
            htmlElement.removeAttribute("data-theme");
            setTheme(false)
        } else {
            htmlElement.setAttribute("data-theme", "light");
            setTheme(true)
        }
    };



    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={50} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={50}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[10] mt-3 w-52 p-2 shadow">
                        {item}
                    </ul>
                </div>
                <a className="text-sm md:text-xl">Dream Sports Shop</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {item}
                </ul>
            </div>
            <div className="navbar-end flex items-center space-x-1 md:space-x-4">
              
                <button onClick={toggleTheme} className="btn btn-xs md:btn-md">
                    {theme === true ? "Dark Mode" : "Light Mode"}
                </button>

          
                {
                    user && user.email ? (
                        <>
                            <div className="relative group">
                                <div role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img
                                            alt="User Avatar"
                                            src={user.photoURL || ""}
                                        />
                                    </div>
                                </div>
                                <span className="w-72 text-center absolute top-10 left-6 transform -translate-x-1/2 mt-2 text-sm font-medium text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity">
                                    {user?.displayName}
                                </span>
                            </div>
                            <button onClick={handleLogout} className="btn btn-xs md:btn-md">Logout</button>
                        </>
                    ) : (
                        <>
                            <Link to='/login'><button className="btn btn-xs md:btn-md">Sign in</button></Link>
                            <Link to='/signup'><button className='btn btn-xs md:btn-md'>Register</button></Link>
                        </>
                    )
                }
            </div>
        </div>
    );
};

export default NavBar;
