import React from 'react'
import AnimatedImage from '../Animation Frames/AnimateImg';
import Cards from '../Parts/Cards';
import { FaArrowRight } from "react-icons/fa6";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const Home = () => {
    return (
        <>
            <section
                className="bg-cover bg-center w-full h-screen bg-[#FFF3EA] gap-x-10 gap-y-20 md:flex items-center justify-center w-20"
                style={{ backgroundImage: 'url()' }}>                    
                <img src='https://agon-html-demo.vercel.app/demos/assets/imgs/template/pattern-white.svg' className='absolute right-0 md:top-30 lg:top-25 lg:left-280' />
                <img src='https://agon-html-demo.vercel.app/demos/assets/imgs/template/pattern-white.svg' className='absolute top-210 md:left-0 lg:top-140 lg:left-0' />
                <div className='lg:pb-25 lg:flex justify-between text-7xl md:gap-80'>
                    <div className='pt-20 pl-10'>
                        <div className=' font-semibold pb-10 flex flex-col justify-start sm-justify-center'>
                            <h1>
                                THINK <br />
                                INOVATE <br />
                                <span className='text-green-500'> GROW</span>
                            </h1>
                        </div>
                        <div className='flex text-lg gap-5 md:justify-center'>
                            <a className='flex items-center gap-2 border p-5 rounded-full bg-black text-white hover:bg-white hover:text-black'>Get Start <FaArrowRight /></a>
                            <a className='flex items-center gap-2 border p-5 rounded-full bg-black text-white hover:bg-white hover:text-black'>Learn More <FaArrowRight /></a>
                        </div>
                    </div>
                    <div>
                        <AnimatedImage />
                    </div>
                </div>
            </section>
            <section>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:flex p-20'>
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
                <div className='bg-[#FFF3EA] mx-10 md:mx-15 md:flex justify-space-between flex-1 '>
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
            <section>
                <div className='bg-[#FFF3EA] m-10 md:m-15 p-20 rounded-4xl p-10 '>
                    <div className='flex flex-col justify-center items-center'>
                        <h1 className='text-3xl md:text-5xl font-bold mb-5'>What We Offer</h1>
                        <p className=' text-md md:text-2xl md:px-60 text-center'>What makes us different from others? We give holistic solutions with strategy, design & technology.</p>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-10 my-5 md:m-20  '>
                        <div className='border-white rounded-xl p-10 flex flex-col items-start justify-between h-full bg-white gap-4'>
                            <img src='https://agon-html-demo.vercel.app/demos/assets/imgs/page/homepage1/cognity.svg' />
                            <h2 className='text-xl font-bold'>Cognitive Solution</h2>
                            <p>One make creepeth, man hearing their a firmament</p>
                        </div>
                        <div className='border-white rounded-xl p-10 flex flex-col items-start justify-between h-full bg-white gap-4'>
                            <img src='https://agon-html-demo.vercel.app/demos/assets/imgs/page/homepage1/market.svg' />
                            <h2 className='text-xl font-bold'>Market Research</h2>
                            <p>One make creepeth, man hearing their a firmament</p>
                        </div>
                        <div className='border-white rounded-xl p-10 flex flex-col items-start justify-between h-full bg-white gap-4'>
                            <img src='https://agon-html-demo.vercel.app/demos/assets/imgs/page/homepage1/consulting.svg' />
                            <h2 className='text-xl font-bold'>Strategic Consultancing</h2>
                            <p>One make creepeth, man hearing their a firmament</p>
                        </div>

                    </div>
                </div>
            </section>
            <section>
                <div className='m-15 bg-[#FFF3EA] p-10 rounded-xl'>
                    <div className='flex justify-between items-center'>
                        <div className='my-2'>
                            <h1 className='text-4xl font-bold'>Our Happy Customers</h1>
                            <p className='text-xl'>Know about our clients, we are a woldwide corporate brand</p>
                        </div>
                        <div className='flex gap-5'>
                            <div className='border rounded-full text-4xl p-3 bg-white'>

                        <IoIosArrowBack />
                            </div>
                            <div className='border rounded-full text-4xl p-3 bg-white hover:bg-black-500'>
                        <IoIosArrowForward />

                            </div>

                        </div>
                    </div>
                    <div className='grid grid-cols-4 gap-5 my-10 md:my-20'>

                        <div className='border-6 border-purple-300 bg-white p-8 justify-between flex flex-col h-full gap-5'>
                            <img src='https://agon-html-demo.vercel.app/demos/assets/imgs/page/homepage1/user-3.png' className='border rounded-full h-15 w-15'/>
                            <div>
                            <h1 className='font-bold'>Jenny Wilson</h1>
                            <p className='text-gray-600 '>Starbucks</p>
                            </div>
                            <p>Their blood is alcohol and it is very dangerous to drink it. It is happend ony the age of 25.</p>
                        </div>
                        <div className='border-6 border-sky-300 bg-white p-8 justify-between flex flex-col h-full gap-5'>
                            <img src='https://agon-html-demo.vercel.app/demos/assets/imgs/page/homepage1/user-3.png' className='border rounded-full h-15 w-15'/>
                            <div>
                            <h1 className='font-bold'>Albert Flores</h1>
                            <p className='text-gray-600 '>Bank of America</p>
                            </div>
                            <p>So yes, the alcohol (ethanol) in hand sanitizers can be absorbed through the skin, but no, it would not cause intoxication.</p>
                        </div>
                        <div className='border-6 border-pink-300 bg-white p-8 justify-between flex flex-col h-full gap-5'>
                            <img src='https://agon-html-demo.vercel.app/demos/assets/imgs/page/homepage1/user-3.png' className='border rounded-full h-15 w-15'/>
                            <div>
                            <h1 className='font-bold'>Wade Waren</h1>
                            <p className='text-gray-600 '>Louis Vuilton</p>
                            </div>
                            <p>Even factoring differences in body weight between children and adults into account.</p>
                        </div>
                        <div className='border-6 border-green-300 bg-white p-8 justify-between flex flex-col h-full gap-5'>
                            <img src='https://agon-html-demo.vercel.app/demos/assets/imgs/page/homepage1/user-3.png' className='border rounded-full h-15 w-15'/>
                            <div>
                            <h1 className='font-bold'>Brooklyn Simmons</h1>
                            <p className='text-gray-600 '>Nintendo</p>
                            </div>
                            <p>So yes, the alcohol (ethanol) in hand sanitizers can be absorbed through the skin, but no, it would not cause intoxication.</p>
                        </div>
                        
                    </div>


                </div>

            </section>
        </>

    )
}

export default Home