import logo from "../assets/logo.svg";
import avatar from "../assets/avatar.svg";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg sticky top-0 w-full z-10 bg-white">
            <div className="flex justify-between items-center py-8 px-20">
                <img src={logo} />
                <div className="flex flex-row gap-14 text-gray-500 font-semibold">
                    <a href="#" className="transition-all hover:font-extrabold my-auto">
                        Dashboard
                    </a>
                    <a href="/jobs" className="transition-all hover:font-extrabold my-auto">
                        Jobs
                    </a>
                    <a href="#" className="transition-all hover:font-extrabold my-auto">
                        Events
                    </a>
                    <a href="#" className="transition-all hover:font-extrabold my-auto">
                        Forum
                    </a>
                    <a href="/profile">
                        <img src={avatar} />
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
