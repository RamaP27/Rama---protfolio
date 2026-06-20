import { motion } from "framer-motion";

import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import ServiceSlider from "../../components/ServiceSlider";
import { fadeIn } from "../../variants";

const Services = () => {
  return (
    <div className="h-full bg-primary/30 py-36 flex items-center overflow-y-auto">
      <Circles />
      <div className="container mx-auto flex flex-col justify-center h-full">
        
        {/* Centered header content */}
        <div className="text-center max-w-[600px] mx-auto mb-8 shrink-0">
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-white"
          >
            What I <span className="text-accent">Build.</span>
          </motion.h2>
          
          <motion.p
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-xs md:text-sm text-white/60 leading-relaxed font-light mt-2"
          >
            AI-powered systems, automation platforms, and intelligent products designed for real-world impact.
          </motion.p>
        </div>

        {/* 3D Slider Container */}
        <motion.div
          variants={fadeIn("down", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="w-full flex-1"
        >
          <ServiceSlider />
        </motion.div>
      </div>
      <Bulb />
    </div>
  );
};

export default Services;
