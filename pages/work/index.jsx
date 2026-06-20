import { motion } from "framer-motion";

import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import WorkSlider from "../../components/WorkSlider";
import { fadeIn } from "../../variants";

const Work = () => {
  return (
    <div className="h-screen w-full bg-primary/30 pt-32 pb-24 flex items-start overflow-y-auto scrollbar-thin scrollbar-thumb-accent/20 scrollbar-track-transparent">
      <Circles />
      <div className="container mx-auto flex flex-col justify-start">
        {/* Centered top intro */}
        <div className="text-center max-w-[700px] mx-auto mb-8 shrink-0">
          <motion.p
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-sm md:text-base text-white/70 leading-relaxed font-light"
          >
            A curated showcase of real-world AI platforms, big data pipelines, IoT hardware systems, and autonomous agent frameworks. Focused on comprehensive case studies.
          </motion.p>
        </div>

        {/* Section title with left accent border */}
        <div className="flex flex-col mb-8 border-l-2 border-accent pl-4 text-left shrink-0">
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-lg md:text-xl font-bold uppercase tracking-[0.2em] text-white"
          >
            Featured Case Studies
          </motion.h2>
          <motion.p
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-xs md:text-sm text-white/50 mt-1 font-light"
          >
            Highly detailed projects featuring multi-image screenshots, learning telemetry, and self-healing pipelines.
          </motion.p>
        </div>

        {/* Vertical Stack List */}
        <motion.div
          variants={fadeIn("down", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="w-full flex-1"
        >
          <WorkSlider />
        </motion.div>
      </div>
      <Bulb />
    </div>
  );
};

export default Work;
