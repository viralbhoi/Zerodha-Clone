import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <div className="w-full h-[10%]">
            <nav className="hidden md:flex justify-between items-center p-4 border-b w-full">
                <div className="flex-1">
                    <Link to="/">
                        <img src="/media/logo.svg" alt="Logo" className="w-[40%]" />
                    </Link>
                </div>

                <div className="flex-1 justify-evenly p-3 hidden md:flex text-lg">
                    <Link to="/signup" className="nav-link">Sign Up</Link>
                    <Link to="/about" className="nav-link">About</Link>
                    <Link to="/product" className="nav-link">Product</Link>
                    <Link to="/pricing" className="nav-link">Pricing</Link>
                    <Link to="/support" className="nav-link">Support</Link>
                </div>

                <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
                    {menuOpen ? (
                        <i className="fa fa-times fa-2x" aria-hidden="true"></i>
                    ) : (
                        <i className="fa fa-bars fa-2x" aria-hidden="true"></i>
                    )}
                </div>
            </nav>


            <nav className="flex-col md:hidden justify-between items-center p-4 border-b w-full">
                <div className="flex justify-between items-center w-full flex-1/12">
                    <div className="flex-1">
                        <Link to="/">
                            <img src="/media/logo.svg" alt="Logo" className="w-[50%]" />
                        </Link>
                    </div>

                    <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
                        {menuOpen ? (
                            <i className="fa fa-times texl-2xl" aria-hidden="true"></i>
                        ) : (
                            <i className="fa fa-bars texl-2xl" aria-hidden="true"></i>
                        )}
                    </div>
                </div>
                {menuOpen && <div className="flex-col flex-1 p-4">
                    <Link to="/signup" className="nav-link py-3" onClick={toggleMenu}>Sign Up</Link>
                    <Link to="/about" className="nav-link py-3" onClick={toggleMenu}>About</Link>
                    <Link to="/product" className="nav-link py-3" onClick={toggleMenu}>Product</Link>
                    <Link to="/pricing" className="nav-link py-3" onClick={toggleMenu}>Pricing</Link>
                    <Link to="/support" className="nav-link py-3" onClick={toggleMenu}>Support</Link>
                </div>}
            </nav>
        </div>
    );
}
