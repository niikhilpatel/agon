import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const OurHappyCustomers = () => {
  return (
    <section>
      <div className="m-15 bg-[#FFF3EA] p-10 md:p-20 rounded-xl">
        <div className="md:flex justify-between items-center">
          <div className="my-2">
            <h1 className="text-4xl font-bold">Our Happy Customers</h1>
            <p className="text-md md:text-xl">
              Know about our clients, we are a worldwide corporate brand
            </p>
          </div>

          {/* Custom Navigation Buttons */}
          <div className="flex gap-5">
            <div
              className="border rounded-full md:text-4xl p-3 bg-white cursor-pointer prev-button"
            >
              <IoIosArrowBack />
            </div>
            <div
              className="border rounded-full md:text-4xl p-3 bg-white cursor-pointer next-button"
            >
              <IoIosArrowForward />
            </div>
          </div>
        </div>

        {/* Swiper Slider for Testimonials */}
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          navigation={{
            prevEl: ".prev-button",
            nextEl: ".next-button",
          }}
          loop={true} // Infinite loop
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="my-10 md:my-20"
        >
          <SwiperSlide>
            <div className="border-6 border-purple-200 bg-white p-8 flex flex-col h-80 gap-5">
              <img
                src="https://agon-html-demo.vercel.app/demos/assets/imgs/page/homepage1/user-3.png"
                className="border rounded-full h-15 w-15"
              />
              <div>
                <h1 className="font-bold">Jenny Wilson</h1>
                <p className="text-gray-600">Starbucks</p>
              </div>
              <p>Their blood is alcohol and it is very dangerous to drink it. It happens only at the age of 25.</p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="border-6 border-sky-200 bg-white p-8 flex flex-col h-80 gap-5">
              <img
                src="https://agon-html-demo.vercel.app/demos/assets/imgs/page/homepage1/user-3.png"
                className="border rounded-full h-15 w-15"
              />
              <div>
                <h1 className="font-bold">Albert Flores</h1>
                <p className="text-gray-600">Bank of America</p>
              </div>
              <p>So yes, the alcohol in hand sanitizers can be absorbed through the skin, but it would not cause intoxication.</p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="border-6 border-pink-200 bg-white p-8 flex flex-col h-80 gap-5">
              <img
                src="https://agon-html-demo.vercel.app/demos/assets/imgs/page/homepage1/user-3.png"
                className="border rounded-full h-15 w-15"
              />
              <div>
                <h1 className="font-bold">Wade Warren</h1>
                <p className="text-gray-600">Louis Vuitton</p>
              </div>
              <p>Even factoring differences in body weight between children and adults into account.</p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="border-6 border-green-200 bg-white p-8 flex flex-col h-80 gap-5">
              <img
                src="https://agon-html-demo.vercel.app/demos/assets/imgs/page/homepage1/user-3.png"
                className="border rounded-full h-15 w-15"
              />
              <div>
                <h1 className="font-bold">Brooklyn Simmons</h1>
                <p className="text-gray-600">Nintendo</p>
              </div>
              <p>So yes, the alcohol in hand sanitizers can be absorbed through the skin, but it would not cause intoxication.</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default OurHappyCustomers;
