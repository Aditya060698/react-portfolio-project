import { HERO_CONTENT } from "../constants";
import { motion } from "framer-motion";
const Hero = () => {
  const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, delay: delay },
    },
  });
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-6 text-6xl font-thin tracking-tighter lg:mt-16 lg:text-8xl"
            >
              Aditya Mishra
            </motion.h1>
            <motion.span
              variants={container(0.2)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-l from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tighter text-transparent"
            >
              Full Stack Developer
            </motion.span>
            <motion.p variants={container(0.4)}
              initial="hidden"
              animate="visible"className="my-2 max-w-xl py-8 font-light tracking-tighter">
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p:8">
          <img src="" alt=""></img>
        </div>
      </div>
    </div>
  );
};

export default Hero;
