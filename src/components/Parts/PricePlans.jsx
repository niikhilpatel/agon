import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { PiToggleLeftDuotone, PiToggleRightDuotone } from "react-icons/pi";
import { FaCheckCircle } from "react-icons/fa";
import { RxCrossCircled } from "react-icons/rx";
import { FaLongArrowAltRight } from "react-icons/fa";

const PricePlans = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  const pricing = {
    essentials: isAnnual ? 79 * 12 - 79 * 2 : 89,
    premium: isAnnual ? 115 * 12 - 115 * 2 : 125,
    standard: isAnnual ? 30 * 12 - 30 * 2 : 35,
  };

  return (
    <section className="bg-[#006D77] flex flex-col justify-center items-center md:m-15 rounded-xl p-5 m-5 md:p-10">
      <div className="md:flex flex-col justify-between items-center">
        <h1 className="text-2xl md:text-5xl font-bold my-10 text-white text-center">
          Choose the Best Plan <br /> That's For You
        </h1>
        <div
          className="flex justify-center items-center gap-10 my-10 text-white text-xl cursor-pointer"
          onClick={() => setIsAnnual(!isAnnual)}
        >
          <div>Billed Monthly</div>
          <div className="text-5xl">
            {isAnnual ? <PiToggleRightDuotone /> : <PiToggleLeftDuotone />}
          </div>
          <div>Billed Annually</div>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 m-5 md:m-10 md:mx-20">
        <PricingCard
          title="Essentials"
          price={pricing.essentials}
          isAnnual={isAnnual}
          features={[
            "Unlimited Updates",
            "Custom Permissions",
            { text: "Custom Design & Features", unavailable: true },
            { text: "Custom Hashtags", unavailable: true },
          ]}
          delay={0}
        />
        <PricingCard
          title="Premium"
          price={pricing.premium}
          isAnnual={isAnnual}
          features={[
            "Unlimited Updates",
            "Custom Permissions",
            "Custom Instructor",
            { text: "Optimize Hashtags", unavailable: true },
          ]}
          delay={0.2}
        />
        <PricingCard
          title="Standard"
          price={pricing.standard}
          isAnnual={isAnnual}
          features={[
            "Unlimited Updates",
            "Custom Design & Features",
            "Custom Permissions",
            "Optimize Hashtags",
            "Custom Instructors",
          ]}
          delay={0.4}
        />
      </div>
    </section>
  );
};

const PricingCard = ({ title, price, isAnnual, features, delay }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ x: -100, opacity: 0 }}
      animate={inView ? { x: 0, opacity: 1 } : {}}
      transition={{ duration: 0.6, delay }}
      className="flex flex-col justify-between border bg-white p-5 md:p-10 rounded-xl gap-5 h-full shadow-lg"
    >
      <div className="text-3xl font-bold">
        ${price}/
        <span className="text-lg font-normal text-gray-500">
          {isAnnual ? "year" : "month"}
        </span>
      </div>
      <h2 className="text-2xl font-bold">{title}</h2>
      <h6 className="text-gray-500 text-sm">
        {title === "Premium"
          ? "Advanced features for pros who need more customization."
          : "All the basics for businesses that are just getting started."}
      </h6>

      <div className="flex flex-col items-start">
        {features.map((feature, index) => (
          <Feature
            key={index}
            text={typeof feature === "string" ? feature : feature.text}
            unavailable={feature.unavailable}
          />
        ))}
      </div>

      <Button />
    </motion.div>
  );
};

const Feature = ({ text, unavailable }) => (
  <div className="flex items-center gap-2">
    {unavailable ? <RxCrossCircled className="text-red-500" /> : <FaCheckCircle className="text-[#006D77]" />}
    <h4 className={unavailable ? "text-gray-400 line-through" : ""}>{text}</h4>
  </div>
);

const Button = () => (
  <div className="flex border justify-between px-5 py-2 items-center rounded-lg cursor-pointer hover:bg-gray-200">
    <h3 className="font-bold">Get Started</h3>
    <FaLongArrowAltRight />
  </div>
);

export default PricePlans;
