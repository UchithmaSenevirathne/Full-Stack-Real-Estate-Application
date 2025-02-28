import React, {useState} from 'react';
import {Link} from "react-router-dom";
import Navbar from "./Navbar.jsx";
import {MdClose, MdMenu} from "react-icons/md";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <header className="px-5 py-2 fixed top-1 w-full left-0 right-0 z-50">
            <div
                className="px-5 bg-white transition-all duration-200 rounded-full ring-1 ring-slate-900">
                <div className="flex items-center justify-between py-3">
                    <Link to={'/'}>
                    <span className='font-[900] text-[24px]'>
                        Prime<span className='font-[600] medium-20'>Nest</
                        span>
                    </span>
                    </Link>

                    <div className="flex items-center justify-center gap-x-4">
                        <Navbar
                            containerStyles={"hidden xl:flex gap-x-5 xl-gap-x-10 capitalize medium-15 ring-0 ring-state-900/10 rounded-full p-2"}/>
                        <Navbar
                            containerStyles={`${menuOpen ? "flex items-start flex-col gap-y-8 capitalize fixed top-20 right-8 p-12 bg-white rounded-3xl shadow-md w-64 medium-16 ring-1 ring-slate-900/5 transition-all duration-300 z-50" : "flex items-start flex-col gap-y-8 capitalize fixed top-20 -right-[100%] p-12 bg-white rounded-3xl shadow-md w-64 medium-16 ring-1 ring-slate-900/5 transition-all duration-300"}`}/>
                    </div>
                    <div>
                        {!menuOpen ? (<MdMenu onClick={toggleMenu} className="xl:hidden cursor-pointer text-3xl hover:text-green-700"/>) : (<MdClose onClick={toggleMenu} className="xl:hidden cursor-pointer text-3xl hover:text-green-700"/>)}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;