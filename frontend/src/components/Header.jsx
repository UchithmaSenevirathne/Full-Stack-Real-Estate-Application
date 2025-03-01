import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import Navbar from "./Navbar.jsx";
import {MdClose, MdMenu} from "react-icons/md";
import userIcon from "../assets/user.svg";

const Header = () => {
    const [active, setActive] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen(!menuOpen);

    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY > 0) {
                if(menuOpen) setMenuOpen(false);
            }
            setActive(window.scrollY > 40);
        }
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, [menuOpen]);

    return (
        <header className="px-5 py-2 fixed top-1 w-full left-0 right-0 z-50">
            <div
                className={`${active ? "py-0" : "py-1"} px-5 bg-transparent transition-all duration-200 rounded-full`}>
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
                    <div className="flex items-center justify-between gap-x-3 sm:gap-x-5 bold-16">
                        {!menuOpen ? (<MdMenu onClick={toggleMenu}
                                              className="xl:hidden cursor-pointer text-3xl hover:text-green-700"/>) : (
                            <MdClose onClick={toggleMenu}
                                     className="xl:hidden cursor-pointer text-3xl hover:text-green-700"/>)}

                        <button className="bg-green-600 flex items-center justify-center gap-x-2 medium-16 rounded-full py-2 px-3">
                            <img src={userIcon} alt="" height={22} width={22} />
                            <span className="text-white">Login</span>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;