import React from "react";
import { Link } from "react-router-dom";
import modern from "../../assets/modern.png";

const Hero = () => {
    return (
        <section className="flex flex-col md:flex-row w-full min-h-screen bg-[#E6F3FA]">
            {/* Left — Image Section */}

            <div className="w-full md:w-1/2 h-[300px] sm:h-[400px] md:h-auto">
                <img
                    src={modern}
                    alt="Procurement professionals at work"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Right — Text Section */}

            <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start px-6 sm:px-10 md:px-12 lg:px-16 py-10 text-center md:text-left">

                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#1A3C57] mb-4 leading-snug md:leading-tight">
                    Reliable Procurement <br className="hidden sm:block" /> for Modern Businesses
                </h1>

                <p className="text-[#2D3E4E] mb-8 text-base sm:text-lg lg:text-xl max-w-lg">
                    At <span className="font-semibold text-[#5DA7C6]">White Opal</span>, we connect
                    businesses with trusted suppliers worldwide — ensuring seamless,
                    cost-efficient, and timely procurement solutions for every scale of operation.
                </p>

                <Link
                    to="/about"
                    className="bg-[#1A3C57] text-white px-6 sm:px-8 py-3 rounded-md font-medium text-sm sm:text-base hover:bg-[#2f495e] transition-transform transform hover:scale-104 shadow-md"
                >
                    Learn More
                </Link>
            </div>
        </section>
    );
};

export default Hero;
