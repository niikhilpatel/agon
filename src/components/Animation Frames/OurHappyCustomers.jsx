import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useState } from "react";

const OurHappyCustomers = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section>
      <div className="m-5 md:m-15 bg-[#FFF3EA] p-10 md:p-20 rounded-xl">
        <div className="md:flex justify-between items-center">
          <div className="my-2">
            <h1 className="text-4xl font-bold">Our Happy Customers</h1>
            <p className="text-md md:text-xl">
              Know about our clients, we are a worldwide corporate brand
            </p>
          </div>

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

        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          centeredSlides={true}
          loop={true}
          navigation={{
            prevEl: ".prev-button",
            nextEl: ".next-button",
          }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="my-10 md:my-20"
        >
          {customers.map((customer, index) => (
            <SwiperSlide key={index}>
              <div
                className={`transition-all duration-500 ease-in-out p-8 flex flex-col h-80 gap-5 rounded-lg shadow-md ${
                  activeIndex === index
                    ? "scale-100  bg-white border-6 border-sky-300 shadow-xl"
                    : index === (activeIndex - 1 + customers.length) % customers.length
                    ? "bg-white border-6 border-purple-300 scale-95 opacity-90"
                    : "border-6 border-pink-300 scale-95 opacity-90"
                }`}
              >
                <img
                  src={customer.img}
                  className="border rounded-full h-16 w-16"
                  alt={customer.name}
                />
                <div>
                  <h1 className="font-bold">{customer.name}</h1>
                  <p className="text-gray-600">{customer.company}</p>
                </div>
                <p>{customer.review}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

// Testimonial Data
const customers = [
  {
    name: "Jenny Wilson",
    company: "Starbucks",
    img: "https://agon-html-demo.vercel.app/demos/assets/imgs/page/homepage1/user-3.png",
    review: "Their blood is alcohol and it is very dangerous to drink it.",
  },
  {
    name: "Albert Flores",
    company: "Bank of America",
    img: "https://agon-html-demo.vercel.app/demos/assets/imgs/page/homepage1/user-3.png",
    review: "The alcohol in hand sanitizers can be absorbed but won't intoxicate.",
  },
  {
    name: "Wade Warren",
    company: "Louis Vuitton",
    img: "https://agon-html-demo.vercel.app/demos/assets/imgs/page/homepage1/user-3.png",
    review: "Even factoring body weight, absorption is not dangerous.",
  },
  {
    name: "Brooklyn Simmons",
    company: "Nintendo",
    img: "https://agon-html-demo.vercel.app/demos/assets/imgs/page/homepage1/user-3.png",
    review: "The alcohol in sanitizers does not cause intoxication.",
  },
];

export default OurHappyCustomers;
