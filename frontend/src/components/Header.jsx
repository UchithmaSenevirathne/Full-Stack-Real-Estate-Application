import React from 'react';
import {Link} from "react-router-dom";
import Navbar from "./Navbar.jsx";

const Header = () => {
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
                        <Navbar/>
                    </div>
                    <div>
                        buttons & icons
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;