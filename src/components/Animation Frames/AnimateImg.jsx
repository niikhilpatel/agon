import { motion } from "framer-motion";

const AnimatedImage = () => {
  return (
    <div className="">
      <motion.img
        className="size-130"
        src="https://agon-html-demo.vercel.app/demos/assets/imgs/page/homepage1/banner.png"
        alt="AlphaWizz Logo"
        animate={{
          y: [0, 10, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 3,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />
    </div>
  );
};

export default AnimatedImage;
