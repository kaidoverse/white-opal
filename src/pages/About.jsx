import React from "react";
import ware from "../assets/ware.png";

const About = () => {
    return (
        <section className="flex flex-col w-full bg-white text-[#1A3C57]">
            {/* Hero Image */}
            <div className="w-full h-[50vh] md:h-[70vh] overflow-hidden">
                <img
                    src={ware}
                    alt="White Opal team at work"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* About Content */}
            <div className="container mx-auto px-6 md:px-12 lg:px-20 py-16">
                <p className="text-[#5DA7C6] font-semibold mb-3 uppercase tracking-wide">
                    A LEADING PROCUREMENT SOLUTIONS PROVIDER
                </p>

                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#1A3C57]">
                    About <span className="text-[#5DA7C6]">White Opal</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-gray-700 leading-relaxed">
                    <div>
                        <p className="mb-6">
                            White Opal provides professional and strategic procurement
                            solutions that empower businesses to achieve efficiency,
                            transparency, and cost savings. Our goal is to streamline
                            purchasing processes and connect clients with trusted suppliers
                            across industries.
                        </p>

                        <p className="mb-6">
                            Based in Accra, Ghana, our dedicated team combines years of
                            experience in procurement, logistics, and supply chain management.
                            We deliver customized solutions to meet the operational demands of
                            corporate, public, and private sector clients.
                        </p>
                    </div>

                    <div>
                        <p className="mb-6">
                            We pride ourselves on our ability to adapt and deliver — ensuring
                            that every transaction is smooth, transparent, and beneficial for
                            all parties involved. Our services cover strategic sourcing,
                            vendor management, logistics coordination, and quality assurance.
                        </p>

                        <p>
                            Whether you are sourcing equipment, materials, or specialized
                            services, White Opal is your reliable partner for modern,
                            technology-driven procurement excellence.
                        </p>
                    </div>
                </div>
            </div>
            {/* Hero Image */}
            <div className="w-full h-[50vh] md:h-[70vh] overflow-hidden">
                <img
                    src={ware}
                    alt="White Opal team at work"
                    className="w-full h-full object-cover"
                />
            </div>
            {/* About Content */}
            <div className="container mx-auto px-6 md:px-12 lg:px-20 py-16">


                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#1A3C57]">
                    Our <span className="text-[#5DA7C6]">Approach</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-gray-700 leading-relaxed">
                    <div>
                        <p className="mb-6">
                            VovoTech Solutions ensures service excellence through a collaborative delivery methodology that joins the forces of our expertise, our partners and our customers


                        </p>

                        <p className="mb-6">
                            Based in Accra, Ghana, our dedicated team combines years of
                            experience in procurement, logistics, and supply chain management.
                            We deliver customized solutions to meet the operational demands of
                            corporate, public, and private sector clients.
                        </p>
                    </div>

                    <div>
                        <p className="mb-6">
                            We pride ourselves on our ability to adapt and deliver — ensuring
                            that every transaction is smooth, transparent, and beneficial for
                            all parties involved. Our services cover strategic sourcing,
                            vendor management, logistics coordination, and quality assurance.
                        </p>

                        <p>
                            Whether you are sourcing equipment, materials, or specialized
                            services, White Opal is your reliable partner for modern,
                            technology-driven procurement excellence.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
