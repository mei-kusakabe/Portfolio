import React from 'react';
import { FaDownload, FaEye } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Header.css'
import logo from '../../../../assets/Logo/Sd_logo.png'

const Header = () => {
    return (
        <div className="navbar bg-base-100 h-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/projects">Courses</Link></li>
                        <li><Link to="/contact">Mock Test</Link></li>
                        <li><Link to="/contact">About Us</Link></li>
                        <li tabindex="0">
                            <Link>
                                More
                                <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                            </Link>
                            <ul class="p-2">
                                <li><Link>Submenu 1</Link></li>
                                <li><Link>Submenu 2</Link></li>
                            </ul>
                        </li>
                    </ul>
                </div >
                <Link className="btn btn-ghost normal-case text-xl">
                    <div className="w-10 h-15">
                        <img src={logo} />
                    </div>
                </Link>
            </div >
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-bold">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/projects">Courses</Link></li>
                    <li><Link to="/contact">Mock Test</Link></li>
                    <li><Link to="/contact">About Us</Link></li>
                    <li tabindex="0">
                        <Link>
                            More
                            <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                        </Link>
                        <ul class="p-2">
                            <li><Link>Submenu 1</Link></li>
                            <li><Link>Submenu 2</Link></li>
                        </ul>
                    </li>
                </ul >
            </div >
            <div className="navbar-end">
                <Link className="btn btn-primary">Get started</Link>

            </div>
        </div >
    );
};

export default Header;