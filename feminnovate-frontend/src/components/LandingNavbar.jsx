import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

/**
 * Component for the navbar used for the landing page.
 * Transparent background, does not have the user avatar.
 * @returns 
 */
const LandingNavbar = () => {
    return (
        <nav className="navbar navbar-expand-lg sticky top-0 w-full z-10">
            <div className="flex justify-between items-center py-8 px-20">
                <img src={logo} className="hidden sm:inline-block"/>
                <div className="flex flex-row gap-14 text-gray-500 font-semibold">
                    <Link to="/#about" className="transition-all hover:font-extrabold my-auto">
                        About
                    </Link>
                    <Link to="/#faq" className="transition-all hover:font-extrabold my-auto">
                        FAQ
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default LandingNavbar;
