import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion"; // Import animation library

const Newsletter = () => {
    return (
        <section>
            <div className="bg-[#FFF3EA] flex flex-col md:flex-row m-5 md:m-40 p-10 rounded-4xl h-screen md:h-110 relative">
                {/* Left Section */}
                <div className="md:flex-1 md:p-10 md:mr-20">
                    <h5 className="text-gray-500">NEWSLETTER</h5>
                    <h1 className="text-4xl font-bold">Subscribe to our Newsletter</h1>
                    <p className="text-gray-500">
                        By clicking the button, you agree with our
                    </p>
                    <p className="text-[#006D77] font-bold text-sm">TERMS & CONDITIONS</p>
                    <form className="mt-4">
                        <div className="flex flex-col gap-4 sm:flex-row md:items-start">
                            <label htmlFor="email" className="sr-only">
                                Email
                            </label>
                            <input
                                className="w-full rounded-full border-gray-200 px-6 py-3 shadow-xs bg-white"
                                type="email"
                                placeholder="Enter your email"
                            />
                            <button
                                className="block rounded-full bg-[#006D77] px-8 py-3 font-medium text-white transition hover:bg-indigo-600"
                                type="submit"
                            >
                                <FaArrowRight />
                            </button>
                        </div>
                    </form>
                </div>
                <div className="md:flex-1 flex flex-col md:flex-row md:pl-10 md:mx-10 my-20 flex justify-center items-center">
                    <img
                        src="https://agon-html-demo.vercel.app/demos/assets/imgs/template/img-newsletter.png"
                        className="rounded-2xl w-90 md:mt-40 md:absolute z-10"
                    />
                    <motion.img
                        src="https://agon-html-demo.vercel.app/demos/assets/imgs/template/chart.png"
                        className="absolute w-40 md:w-52 z-20 md:left-100 md:top-50 rounded-2xl"
                        initial={{ y: -10 }}
                        animate={{ y: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    />
                </div>
            </div>
        </section>
    );
};

export default Newsletter;
