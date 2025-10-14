import React from "react";
import { IoLogoInstagram } from "react-icons/io";
import { FiPhoneCall } from "react-icons/fi";
import { RiTwitterXLine } from "react-icons/ri";
import { TbBrandMeta } from "react-icons/tb";
import { Link } from "react-router-dom";
import logo from "../../assets/logo2.jpg"; // adjust path if different

const Footer = () => {
    return (
        <footer className="bg-[#102A43] text-[#E6F3FA] py-12">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6 md:px-12">

                {/* Logo Section */}
                <div className="flex flex-col items-center md:items-start">
                    <img
                        src={logo}
                        alt="White Opal Logo"
                        className="h-16 md:h-20 w-auto mb-4 rounded-md object-contain"
                    />

                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
                    <ul className="space-y-2 text-[#B3D0E0]">
                        <li><Link to="/" className="hover:text-[#5DA7C6] transition-colors">Home</Link></li>
                        <li><Link to="/about" className="hover:text-[#5DA7C6] transition-colors">About Us</Link></li>
                        <li><Link to="/contact" className="hover:text-[#5DA7C6] transition-colors">Contact</Link></li>
                        <li><Link to="#" className="hover:text-[#5DA7C6] transition-colors">Our Services</Link></li>
                    </ul>
                </div>

                {/* Contact & Socials */}
                <div className="max-w-sm">
                    <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>

                    <p className="text-[#B3D0E0] mb-2 flex items-center gap-2 break-words">
                        <FiPhoneCall /> +233 (570) 360-266
                    </p>

                    <p className="text-[#B3D0E0] mb-6 text-sm break-words leading-relaxed">
                        mawugbegagbahemmanuel@gmail.com
                    </p>

                    <div className="flex items-center space-x-4">
                        <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-[#5DA7C6] transition-colors">
                            <TbBrandMeta className="h-5 w-5" />
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-[#5DA7C6] transition-colors">
                            <IoLogoInstagram className="h-5 w-5" />
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-[#5DA7C6] transition-colors">
                            <RiTwitterXLine className="h-5 w-5" />
                        </a>
                    </div>
                </div>
                {/* Newsletter */}
                <div>
                    <h3 className="text-lg font-semibold mb-4 text-white">Stay Updated</h3>
                    <p className="text-[#B3D0E0] mb-4 text-sm">
                        Join our newsletter to get the latest updates and offers.
                    </p>

                    <form className="flex">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="p-3 w-full text-sm border border-[#5DA7C6]/40 rounded-l-md bg-transparent placeholder-[#B3D0E0] focus:outline-none focus:ring-2 focus:ring-[#5DA7C6] transition-all"
                            required
                        />
                        <button
                            type="submit"
                            className="bg-[#5DA7C6] text-[#102A43] px-6 py-3 text-sm rounded-r-md font-semibold hover:bg-[#72b8d1] transition-all"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="container mx-auto mt-12 px-6 border-t border-[#2B4862] pt-6 text-center">
                <p className="text-sm text-[#B3D0E0]">
                    &copy; {new Date().getFullYear()} White Opal Limited. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
