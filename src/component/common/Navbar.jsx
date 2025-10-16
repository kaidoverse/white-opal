import React, { useState } from "react";
import { HiBars3BottomRight } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.jpeg";

const Navbar = () => {
    const [navDrawerOpen, setNavDrawerOpen] = useState(false);
    const toggleNavDrawer = () => setNavDrawerOpen(!navDrawerOpen);

    return (
        <>
            {/* Desktop Navbar */}
            <nav className="container mx-auto flex items-center justify-between py-3 px-6">
                {/* Left — Logo */}
                <div className="flex items-center">
                    <Link to="/" className="flex items-center">
                        <img
                            src={logo}
                            alt="White Opal Logo"
                            className="h-[90px] lg:h-[100px] w-auto object-contain"
                        />
                    </Link>
                </div>

                {/* Right — Nav Links */}
                <div className="hidden md:flex space-x-8 text-gray-700 font-medium">
                    <Link to="/" className="hover:text-[#374552] transition-colors">
                        Home
                    </Link>
                    <Link to="/about" className="hover:text-[#374552] transition-colors">
                        About
                    </Link>
                    <Link to="/services" className="hover:text-[#374552] transition-colors">
                        Our Services
                    </Link>
                    <Link to="/contact" className="hover:text-[#374552] transition-colors">
                        Contact
                    </Link>
                </div>


                {/* Mobile Menu Button */}
                <button onClick={toggleNavDrawer} className="md:hidden">
                    <HiBars3BottomRight className="h-6 w-6 text-gray-700" />
                </button>
            </nav>

            {/* Mobile Drawer */}
            <div
                className={`fixed top-0 left-0 w-3/4 sm:w-1/2 md:w-1/3 h-full bg-white shadow-lg transform transition-transform duration-300 z-50 ${navDrawerOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                <div className="flex justify-end p-4">
                    <button onClick={toggleNavDrawer}>
                        <IoMdClose className="h-6 w-6 text-gray-600" />
                    </button>
                </div>

                <div className="p-4">
                    <h2 className="text-xl font-semibold mb-4">Menu</h2>
                    <nav className="space-y-4">
                        <Link
                            to="/"
                            onClick={toggleNavDrawer}
                            className="block text-gray-600 hover:text-indigo-600"
                        >
                            Home
                        </Link>
                        <Link
                            to="/about"
                            onClick={toggleNavDrawer}
                            className="block text-gray-600 hover:text-indigo-600"
                        >
                            About
                        </Link>
                        <Link
                            to="/services"
                            onClick={toggleNavDrawer}
                            className="block text-gray-600 hover:text-indigo-600"
                        >
                            Our Services
                        </Link>
                        <Link
                            to="/contact"
                            onClick={toggleNavDrawer}
                            className="block text-gray-600 hover:text-indigo-600"
                        >
                            Contact
                        </Link>
                    </nav>
                </div>
            </div>
        </>
    );
};

export default Navbar;
