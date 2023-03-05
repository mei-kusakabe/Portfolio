import React from 'react';
import { FaDownload, FaEye } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className="navbar bg-base-100" data-theme="business">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/projects">Projects</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div >
                <Link className="btn btn-ghost normal-case text-xl">

                    <i className="fa-solid fa-briefcase mx-2"></i>Jafrin Iqbal Chowdhury</Link>
            </div >
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to="/"><i className="fa-solid fa-house-chimney mx-1"></i>Home</Link></li>
                    <li><Link to="/projects"><i className="fa-solid fa-list-check mx-1"></i>Projects</Link></li>
                    <li><Link to="/contact"><i className="fa-regular fa-address-book mx-1"></i>Contact</Link></li>
                </ul >
            </div >
            <div className="navbar-end">
                <a href="https://drive.google.com/file/d/1VwIb0aQHqyPAIht88e48L0S1MY4B5sXK/view?usp=sharing" className="btn"><i className="fa-solid fa-eye mx-1"></i>View Resume</a>
            </div>
        </div >
    );
};

export default Header;