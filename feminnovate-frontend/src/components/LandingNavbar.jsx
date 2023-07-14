import React, { useState } from "react";
import logo from "../assets/logo.svg";

/**
 * Component for the navbar used for the landing page.
 * Transparent background, does not have the user avatar.
 * @returns 
 */
const LandingNavbar = () => {
    return (
        <nav className="navbar navbar-expand-lg sticky top-0 w-full z-10">
            <div className="flex justify-between items-center py-8 px-20">
                <img src={logo} />
                <div className="flex flex-row gap-14 text-gray-500 font-semibold">
                    <a href="#" className="transition-all hover:font-extrabold my-auto">
                        About
                    </a>
                    <a href="#" className="transition-all hover:font-extrabold my-auto">
                        FAQ
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default LandingNavbar;
