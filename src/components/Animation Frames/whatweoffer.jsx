import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Whatweoffer = () => {
    return (
        <section>
            <div className="bg-[#FFF3EA] m-10 md:m-15 md:p-20 md:px-30 rounded-4xl p-10">
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-3xl md:text-5xl font-bold mb-5">What We Offer</h1>
                    <p className="text-md md:text-2xl lg:px-60 text-center">
                        What makes us different from others? We give holistic solutions with
                        strategy, design & technology.
                    </p>
                </div>

                {/* Swiper Slider for the Offers Section */}
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={30}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    loop={true}
                    breakpoints={{
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    className="my-10 md:m-20"
                >
                    <SwiperSlide>
                        <div className="border-white rounded-xl p-10 flex flex-col items-start justify-between h-70 bg-white gap-4">
                            <img src="https://agon-html-demo.vercel.app/demos/assets/imgs/page/homepage1/cognity.svg" />
                            <h2 className="text-xl font-bold">Cognitive Solution</h2>
                            <p>One make creepeth, man hearing their a firmament</p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="border-white rounded-xl p-10 flex flex-col items-start justify-between h-70 bg-white gap-4">
                            <img src="https://agon-html-demo.vercel.app/demos/assets/imgs/page/homepage1/market.svg" />
                            <h2 className="text-xl font-bold">Market Research</h2>
                            <p>One make creepeth, man hearing their a firmament </p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="border-white rounded-xl p-10 flex flex-col items-start justify-between h-70 bg-white gap-4">
                            <img src="https://agon-html-demo.vercel.app/demos/assets/imgs/page/homepage1/consulting.svg" />
                            <h2 className="text-xl font-bold">Strategic Consulting</h2>
                            <p>One make creepeth, man hearing their a firmament</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="border-white rounded-xl p-10 flex flex-col items-start justify-between h-70 bg-white gap-4">
                            <img src="https://agon-html-demo.vercel.app/demos/assets/imgs/page/homepage1/consulting.svg" />
                            <h2 className="text-xl font-bold">Strategic Consulting</h2>
                            <p>One make creepeth, man hearing their a firmament</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="border-white rounded-xl p-10 flex flex-col items-start justify-between h-70 bg-white gap-4">
                            <img src="https://agon-html-demo.vercel.app/demos/assets/imgs/page/homepage1/consulting.svg" />
                            <h2 className="text-xl font-bold">Strategic Consulting</h2>
                            <p>One make creepeth, man hearing their a firmament</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="border-white rounded-xl p-10 flex flex-col items-start justify-between h-70 bg-white gap-4">
                            <img src="https://agon-html-demo.vercel.app/demos/assets/imgs/page/homepage1/consulting.svg" />
                            <h2 className="text-xl font-bold">Strategic Consulting</h2>
                            <p>One make creepeth, man hearing their a firmament</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="border-white rounded-xl p-10 flex flex-col items-start justify-between h-70 bg-white gap-4">
                            <img src="https://agon-html-demo.vercel.app/demos/assets/imgs/page/homepage1/consulting.svg" />
                            <h2 className="text-xl font-bold">Strategic Consulting</h2>
                            <p>One make creepeth, man hearing their a firmament</p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
};

export default Whatweoffer;
