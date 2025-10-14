import React from "react";
import { HiOutlineUsers, HiOutlineShieldCheck, HiOutlineCog6Tooth, HiOutlineUserGroup } from "react-icons/hi2";

const FeaturedSection = () => {
    return (
        <section className="py-20 px-6 bg-[#F8FAFC]">
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center">

                {/* Why Us */}
                <div className="flex flex-col items-center">
                    <div className="p-5 rounded-full bg-[#E6F3FA] mb-4">
                        <HiOutlineUsers className="text-4xl text-[#1A3C57]" />
                    </div>
                    <h4 className="text-lg font-semibold text-[#1A3C57] mb-2 tracking-tight">
                        Why Us
                    </h4>
                    <p className="text-[#2D3E4E] text-sm leading-relaxed max-w-xs">
                        We have built a team of experienced, highly qualified, and technically skilled professionals to meet every procurement challenge.
                    </p>
                </div>

                {/* Who We Are */}
                <div className="flex flex-col items-center">
                    <div className="p-5 rounded-full bg-[#E6F3FA] mb-4">
                        <HiOutlineShieldCheck className="text-4xl text-[#1A3C57]" />
                    </div>
                    <h4 className="text-lg font-semibold text-[#1A3C57] mb-2 tracking-tight">
                        Who We Are
                    </h4>
                    <p className="text-[#2D3E4E] text-sm leading-relaxed max-w-xs">
                        We have a robust ability to deliver services and solutions that enhance reliability, efficiency, and value for our clients.
                    </p>
                </div>

                {/* Our Services */}
                <div className="flex flex-col items-center">
                    <div className="p-5 rounded-full bg-[#E6F3FA] mb-4">
                        <HiOutlineCog6Tooth className="text-4xl text-[#1A3C57]" />
                    </div>
                    <h4 className="text-lg font-semibold text-[#1A3C57] mb-2 tracking-tight">
                        Our Services
                    </h4>
                    <p className="text-[#2D3E4E] text-sm leading-relaxed max-w-xs">
                        We serve as a single provider for managing and securing IT and procurement services, customized to your business needs.
                    </p>
                </div>

                {/* Partners */}
                <div className="flex flex-col items-center">
                    <div className="p-5 rounded-full bg-[#E6F3FA] mb-4">
                        <HiOutlineUserGroup className="text-4xl text-[#1A3C57]" />
                    </div>
                    <h4 className="text-lg font-semibold text-[#1A3C57] mb-2 tracking-tight">
                        Partners
                    </h4>
                    <p className="text-[#2D3E4E] text-sm leading-relaxed max-w-xs">
                        Our top priority is building a strong network of distinguished partners to deliver lasting value and global impact.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default FeaturedSection;
