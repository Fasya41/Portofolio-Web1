import React from "react";
import { useState, useEffect } from "react";

const Navbar = () => {
    const [active, setActive] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 150) {
                setActive(true);
            } else {
                setActive(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Detect screen width < 640 (sm)
    useEffect(() => {
        const checkScreen = () => {
            setIsSmallScreen(window.innerWidth < 640);
        };

        checkScreen(); // initial
        window.addEventListener("resize", checkScreen);

        return () => window.removeEventListener("resize", checkScreen);
    }, []);

    return (
            <div className={`navbar 
                ${isSmallScreen ? "sticky top-0" : "relative"} 
                z-50 py-7 px-4 flex items-center justify-between transition-all
                ${active ? "bg-black/60 backdrop-blur-md rounded-bl-lg rounded-br-lg" : "bg-transparent rounded-bl-lg rounded-br-lg"}`}>
            <div className="logo">
                <h1
                    className={`text-3xl font-bold bg-white text-black p-1 md:bg-transparent md:text-white
                    transition-all duration-300
                    ${active && isSmallScreen ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"}`}
                >
                    Portfolio
                </h1>
            </div>
           <ul
               className={`menu flex items-center gap-10
                    md:flex-row md:static md:opacity-100 md:translate-x-0 md:translate-y-0
                    fixed z-40 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                    transition-all duration-300
                    ${active ? "opacity-100" : "opacity-0"}`}
            >
            <li><a href="#beranda" className="sm:text-lg text-base font-medium">Home</a></li>
            <li><a href="#tentang" className="sm::text-lg text-base font-medium">About</a></li>
            <li><a href="#proyek" className="sm:text-lg text-base font-medium">Projects</a></li>
            <li><a href="#kontak" className="sm:text-lg text-base font-medium">Contact</a></li>
            </ul>

        </div>
    );
};

export default Navbar;
