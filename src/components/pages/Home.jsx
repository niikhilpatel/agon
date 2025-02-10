import React from 'react'
import AnimatedImage from '../Animation Frames/AnimateImg';
import Cards from '../Parts/Cards';
import { FaArrowRight } from "react-icons/fa6";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import Whatweoffer from '../Animation Frames/whatweoffer';
import OurHappyCustomers from '../Animation Frames/OurHappyCustomers';
import PricePlans from '../Parts/PricePlans';
import Newsletter from '../Parts/Newsletter';
import { motion } from "framer-motion";

const Home = () => {
    return (
        <>
            <section
                className="bg-cover bg-center w-full h-screen bg-[#FFF3EA] gap-x-10 gap-y-20 md:flex items-center justify-center"
                style={{ backgroundImage: "url()" }}
            >
                {/* Background Patterns */}
                <img
                    src="https://agon-html-demo.vercel.app/demos/assets/imgs/template/pattern-white.svg"
                    className="absolute right-0 md:top-30 lg:top-25 lg:left-280"
                />
                <img
                    src="https://agon-html-demo.vercel.app/demos/assets/imgs/template/pattern-white.svg"
                    className="absolute top-210 md:left-0 lg:top-140 lg:left-0"
                />

                {/* Animated Content */}
                <motion.div
                    className="lg:pb-25 lg:flex justify-between text-7xl md:gap-80"
                    initial={{ opacity: 0, y: 50 }}  // Starts from below
                    animate={{ opacity: 1, y: 0 }}  // Moves up
                    transition={{ duration: 1, ease: "easeOut" }} // Smooth transition
                >
                    {/* Left Content */}
                    <div className="pt-20 pl-10">
                        <div className="font-semibold pb-10 flex flex-col justify-start sm-justify-center">
                            <h1>
                                THINK <br />
                                INNOVATE <br />
                                <span className="text-green-500"> GROW</span>
                            </h1>
                        </div>
                        <div className="flex text-lg gap-5 md:justify-center">
                            <a className="flex items-center gap-2 border p-5 rounded-full bg-black text-white hover:bg-white hover:text-black">
                                Get Started <FaArrowRight />
                            </a>
                            <a className="flex items-center gap-2 border p-5 rounded-full bg-black text-white hover:bg-white hover:text-black">
                                Learn More <FaArrowRight />
                            </a>
                        </div>
                    </div>

                    {/* Right Image with Animation */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
                    >
                        <AnimatedImage />
                    </motion.div>
                </motion.div>
            </section>
            <section>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:flex p-5 md:p-20'>
                    <div><a href=""><img src="https://agon-html-demo.vercel.app/demos/assets/imgs/slider/logo/sample-logo-1.svg" alt="" /></a></div>
                    <div><a href=""><img src="https://agon-html-demo.vercel.app/demos/assets/imgs/slider/logo/sample-logo-2.svg" alt="" /></a></div>
                    <div><a href=""><img src="https://agon-html-demo.vercel.app/demos/assets/imgs/slider/logo/sample-logo-3.svg" alt="" /></a></div>
                    <div><a href=""><img src="https://agon-html-demo.vercel.app/demos/assets/imgs/slider/logo/sample-logo-4.svg" alt="" /></a></div>
                    <div><a href=""><img src="https://agon-html-demo.vercel.app/demos/assets/imgs/slider/logo/sample-logo-5.svg" alt="" /></a></div>
                    <div><a href=""><img src="https://agon-html-demo.vercel.app/demos/assets/imgs/slider/logo/sample-logo-6.svg" alt="" /></a></div>
                </div>

            </section>
            <Cards />
            <section>
                <div className='flex justify-center text-4xl font-bold mb-10'><h1>WHO <span className='text-green-500'>WE</span> ARE</h1></div>
                <div className='bg-[#FFF3EA] mx-5 md:mx-15 md:flex justify-space-between flex-1 '>
                    {/* <img src='https://agon-html-demo.vercel.app/demos/assets/imgs/template/pattern-white.svg' className='' /> */}
                    <div className='flex-1'>
                        <img src='https://agon-html-demo.vercel.app/demos/assets/imgs/page/homepage1/img-2.png' className='w-auto' />
                    </div>
                    <div className='flex-1 m-5'>
                        <div className='font-bold text-4xl m-5'><h1>About <span className='text-green-500 '>Alphawizz</span></h1></div>
                        <div className='m-5 text-lg '>
                            <p className='mb-5'>Alphawizz Technologies is an established IT software development company with a dedicated team of over 100 professionals. Since 2019, we have been at the forefront of developing cutting-edge software solutions for medium and large enterprises across various industries. Our company is ISO certified, reflecting our commitment to integrating advanced technologies for the advancement of IT development </p>
                            <p>At Alphawizz, our goal is to define, architect, and create technological solutions with a focus on financial efficiency, offering clients cost-effective and revenue-generating services for their businesses. This approach allows us to deliver affordable Web &amp; Mobile Application Development Services tailored to meet our clients' needs effectively. </p>
                        </div>
                    </div>
                </div>
            </section>

            <Whatweoffer />
            <OurHappyCustomers />
            <PricePlans />
            <Newsletter />
        </>

    )
}

export default Home