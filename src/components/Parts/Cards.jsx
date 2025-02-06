import React from 'react'
import { FaArrowRight } from "react-icons/fa6";


const Cards = () => {
    return (
        <div className='m-10 md:m-25'>
            <h1 className='text-4xl font-bold'>Our <span className='text-green-500'>services</span></h1>
            <div className=' grid md:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-8 my-10'>
                <div className='transition-all duration-700 hover:scale-105 border-white rounded-lg p-10 bg-green-100 flex flex-col items-start justify-between h-full shadow-xl '>
                    <img src='https://agon-html-demo.vercel.app/demos/assets/imgs/page/homepage1/business-strategy.svg' className='' />
                    <h1 className='text-2xl font-bold'>Web Designing and Development</h1>
                    <p>Alphawizz, one of India's leadinges full-service web developers to assist you in starting your digital transformation. We provide comprehensive web application development services that cater to your organization's.</p>
                    <button className='border p-3 bg-white text-black rounded-4xl hover:bg-black hover:text-white flex item-center justify-between gap-2'>Learn More<FaArrowRight /></button>
                    {/* <img src='https://agon-html-demo.vercel.app/demos/assets/imgs/page/homepage1/bg-business.svg' className='absolute right-205 top-100'/> */}
                </div>
                <div className='transition-all duration-700 hover:scale-105 border-white rounded-lg p-10 bg-sky-100 flex flex-col items-start justify-between h-full shadow-xl '>
                    <img src='https://agon-html-demo.vercel.app/demos/assets/imgs/page/homepage1/local.svg' className='' />
                    <h1 className='text-2xl font-bold'>Ecommerce Development</h1>
                    <p>It is with immense pleasure that Alphawizz claims its status as one of the best eCommerce website design firms in India, with half a thousand successful projects. That is why our primary goal is to create gorgeous.</p>
                    <button className='border p-3 bg-white text-black rounded-4xl hover:bg-black hover:text-white flex item-center justify-between gap-2'>Learn More<FaArrowRight /></button>
                </div>
                <div className='transition-all duration-700 hover:scale-105 border-white rounded-lg p-10 bg-pink-100 flex flex-col items-start justify-between h-full shadow-xl '>
                    <img src='https://agon-html-demo.vercel.app/demos/assets/imgs/page/homepage1/social.svg' className='' />
                    <h1 className='text-2xl font-bold'>Mobile Application Development</h1>
                    <p>
                        Alphawizz has a successful history of delivering over 500+ mobile applications in different fields of industry; therefore, it is considered one of India's leading mobile app development companies. This core area.
                    </p>
                    <button className='border p-3 bg-white text-black rounded-4xl hover:bg-black hover:text-white flex item-center justify-between gap-2'>Learn More<FaArrowRight /></button>
                </div>
                <div className='transition-all duration-700 hover:scale-105 border-white rounded-lg p-10 bg-purple-100 flex flex-col items-start justify-between h-full shadow-xl '>
                    <img src='https://www.alphawizz.com/img/newimg/digital.svg' className='' />
                    <h1 className='text-2xl font-bold'>Digital Marketing</h1>
                    <p>
                           Let Alphawizz assemble a result-oriented, customized, and professional digital marketing service to boost your business profits. We dedicate sections such as SEO, SMO, PPC, and SMM to enhance your business's.
                           </p>
                    <button className='border p-3 bg-white text-black rounded-4xl hover:bg-black hover:text-white flex item-center justify-between gap-2'>Learn More<FaArrowRight /></button>
                </div>
                <div className='transition-all duration-700 hover:scale-105 border-white rounded-lg p-10 bg-yellow-100 flex flex-col items-start justify-between h-full shadow-xl'>
                    <img src='https://www.alphawizz.com/img/newimg/software.svg' className='' />
                    <h1 className='text-2xl font-bold'>Custom Software Development</h1>
                    <p>Build a strong foundation for your business with tailored tools to help it achieve success. Modern best practices and technologies can enhance many processes in a software development cycle.</p>
                    <button className='border p-3 bg-white text-black rounded-4xl hover:bg-black hover:text-white flex item-center justify-between gap-2'>Learn More<FaArrowRight /></button>
                </div>
                <div className='transition-all duration-700 hover:scale-105 border-white rounded-lg p-10 bg-red-100 flex flex-col items-start justify-between h-full shadow-xl'>
                    <img src='https://www.alphawizz.com/img/newimg/maintenance.svg' className='' />
                    <h1 className='text-2xl font-bold'>Maintenance & Support</h1>
                    <p>
                           Trust our team of specialists for quality maintenance and support services for your software. We prioritize your projects and ensure the least amount of downtime possible. We offer support.
                           </p>
                    <button className='border p-3 bg-white text-black rounded-4xl hover:bg-black hover:text-white flex item-center justify-between gap-2'>Learn More<FaArrowRight /></button>
                </div>

            </div>
        </div>
    )
}

export default Cards