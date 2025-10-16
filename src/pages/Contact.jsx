import React, { useState, useEffect } from "react";
import { FiPhoneCall, FiMail, FiMapPin } from "react-icons/fi";
import team from "../assets/team.png";

const Contact = () => {
    const [result, setResult] = useState('');
    const [submitting, setSubmitting] = useState(false);

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult('');
        setSubmitting(true);

        const formData = new FormData(event.target);
        formData.append('access_key', '3710ed86-9206-41a5-819c-6325967465af');

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData,
            });

            const data = await response.json();

            if (data.success) {
                setResult('✅ Message sent successfully!');
                event.target.reset();
            } else {
                setResult(`❌ ${data.message}`);
            }
        } catch (error) {
            setResult('❌ Something went wrong. Please try again.');
        } finally {
            setSubmitting(false);
        }
    };

    useEffect(() => {
        if (result && result !== 'Sending...') {
            const timeout = setTimeout(() => setResult(''), 3000);
            return () => clearTimeout(timeout);
        }
    }, [result]);

    return (
        <section className="w-full bg-white text-[#1A3C57]">
            {/* Contact Info Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 w-full">
                {/* Left - Image */}
                <div className="w-full h-[300px] md:h-[500px]">
                    <img
                        src={team}
                        alt="White Opal office"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Right - Info */}
                {/* Right - Info */}
                <div className="flex flex-col justify-center bg-[#1A3C57] text-white px-8 py-12 h-auto md:h-[500px]">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8 md:gap-12">
                        {/* Left - Contact & Email */}
                        <div className="space-y-8 md:w-1/2 w-full">
                            <div>
                                <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                                    <FiPhoneCall className="text-[#5DA7C6]" /> Get in touch
                                </h3>
                                <p className="text-gray-300 text-sm sm:text-base">General Enquiries</p>
                                <p className="font-semibold text-white mt-1 text-sm sm:text-base">
                                    +233 (570) 360-266
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                                    <FiMail className="text-[#5DA7C6]" /> Email
                                </h3>
                                <p className="text-gray-300 text-sm sm:text-base break-words">
                                    mawugbegagbahemmanuel@gmail.com
                                </p>
                            </div>
                        </div>

                        {/* Right - Address */}
                        <div className="md:w-1/2 w-full">
                            <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                                <FiMapPin className="text-[#5DA7C6]" /> Address
                            </h3>
                            <p className="text-gray-300 text-sm sm:text-base leading-snug">
                                House Number 12 <br />
                                Industrial Area, <br />
                                Dadeban Okanta Street, Accra – Ghana
                            </p>
                        </div>
                    </div>
                </div>

            </div>

            {/* Contact Form */}
            <div className="container mx-auto px-6 md:px-20 py-16">
                <form
                    onSubmit={onSubmit}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto relative"
                >
                    {/* Floating feedback message */}
                    {result && (
                        <div
                            className={`absolute -top-10 left-1/2 transform -translate-x-1/2 text-center px-4 py-2 rounded-md shadow-md text-sm transition-all duration-300 ${result.startsWith("✅")
                                ? "bg-green-100 text-green-800 border border-green-300"
                                : "bg-red-100 text-red-800 border border-red-300"
                                }`}
                        >
                            {result}
                        </div>
                    )}

                    <div>
                        <label className="block text-sm font-medium mb-2">Your Name</label>
                        <input
                            type="text"
                            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#5DA7C6]"
                            placeholder="Enter your name"
                            required
                            name="name"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-2">Your Email</label>
                        <input
                            type="email"
                            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#5DA7C6]"
                            placeholder="Enter your email"
                            required
                            name="email"
                        />
                    </div>

                    <div className="md:col-span-2">
                        <label className="block text-sm font-medium mb-2">Subject</label>
                        <input
                            type="text"
                            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#5DA7C6]"
                            placeholder="Subject"
                            name="subject"
                        />
                    </div>

                    <div className="md:col-span-2">
                        <label className="block text-sm font-medium mb-2">Message</label>
                        <textarea
                            rows="5"
                            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#5DA7C6]"
                            placeholder="Write your message..."
                            name="message"
                        ></textarea>
                    </div>

                    <div className="md:col-span-2 text-center">
                        <button
                            type="submit"
                            disabled={submitting}
                            className={`flex items-center justify-center gap-2 bg-[#1A3C57] text-white px-8 py-3 rounded-md font-medium transition-all ${submitting
                                ? "opacity-70 cursor-not-allowed"
                                : "hover:bg-[#2f495e] hover:scale-[1.02]"
                                }`}
                        >
                            {submitting ? (
                                <>
                                    <svg
                                        className="animate-spin h-5 w-5 text-white"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <circle
                                            className="opacity-25"
                                            cx="12"
                                            cy="12"
                                            r="10"
                                            stroke="currentColor"
                                            strokeWidth="4"
                                        ></circle>
                                        <path
                                            className="opacity-75"
                                            fill="currentColor"
                                            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                                        ></path>
                                    </svg>
                                    Sending...
                                </>
                            ) : (
                                "Send Message"
                            )}
                        </button>
                    </div>
                </form>
            </div>

        </section>
    );
};

export default Contact;
