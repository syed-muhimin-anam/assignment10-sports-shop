import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';
import Swal from 'sweetalert2';
import { Tooltip } from 'react-tooltip';
import { FaMoon, FaSun } from 'react-icons/fa';

const NavBar = () => {
    const [theme, setTheme] = useState(true);
    const item = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='allEquipment'>All Sports Equipment</NavLink></li>
        <li><NavLink to='addEquipment'>Add Equipment</NavLink></li>
        <li><NavLink to='myEquipment'>My Equipment</NavLink></li>
        <li><NavLink to='about'>About Us</NavLink></li>
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
            title: "Logged Out successfully"
        });
    };
    

    const toggleTheme = () => {
        const htmlElement = document.documentElement;
        if (htmlElement.getAttribute("data-theme") === "light") {
            htmlElement.removeAttribute("data-theme");
            setTheme(false);
        } else {
            htmlElement.setAttribute("data-theme", "light");
            setTheme(true);
        }
    };

    return (
        <div className="navbar  fixed top-0 left-0 z-50 px-14 bg-[#87c451]">

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
                {/* <button onClick={toggleTheme} className={`rounded-full p-2 ${theme ? 'bg-slate-300' : 'bg-slate-900'}`}>
                    {theme === true ? <FaMoon></FaMoon> : <FaSun></FaSun>}
                </button> */}
                {
                    user && user.email ? (
                        <>
                            
                            <button onClick={handleLogout} className="font-bold">Logout</button>
                            <div
                                className="relative group z-[50]"
                                data-tooltip-id="my-tooltip"
                                data-tooltip-content={user.displayName}
                                data-tooltip-place="bottom"
                            >
                                <div role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img
                                            alt="User Avatar"
                                            src={user.photoURL || ""}
                                        />
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                            <Link to='/login'><button className=" font-bold">Sign in</button></Link>
                            <Link to='/signup'><button className='font-bold'>Register</button></Link>
                        </>
                    )
                }
            </div>
            <Tooltip
                id="my-tooltip"
                style={{ zIndex: 9999 }}
            />
        </div>
    );
};

export default NavBar;
