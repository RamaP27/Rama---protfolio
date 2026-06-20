import { motion } from "framer-motion";

import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";

import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div className="bg-primary/60 h-full">
      {/* text */}
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
          {/* title */}
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1 mb-4 xl:max-w-[600px]"
          >
            Designing Intelligent & <br />{" "}
            <span className="text-accent">Autonomous Systems.</span>
          </motion.h1>

          {/* specialties subtitle */}
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-xs md:text-sm font-semibold text-accent max-w-sm xl:max-w-[550px] mx-auto xl:mx-0 mb-4 leading-relaxed"
          >
            𝐀𝐈 𝐄𝐧𝐠𝐢𝐧𝐞𝐞𝐫 | 𝐆𝐞𝐧𝐀𝐈 & 𝐌𝐋 𝐒𝐲𝐬𝐭𝐞𝐦𝐬 | 𝐕𝐞𝐫𝐭𝐞𝐱 𝐀𝐈 | 𝐃𝐚𝐭𝐚 𝐏𝐢𝐩𝐞𝐥𝐢𝐧𝐞𝐬 | 𝐁𝐮𝐢𝐥𝐝𝐢𝐧𝐠 𝐀𝐈 𝐀𝐩𝐩𝐥𝐢𝐜𝐚𝐭𝐢𝐨𝐧𝐬 𝐟𝐨𝐫 𝐒𝐮𝐬𝐭𝐚𝐢𝐧𝐚𝐛𝐢𝐥𝐢𝐭𝐲 & 𝐅𝐚𝐬𝐡𝐢𝐨𝐧 𝐓𝐞𝐜𝐡
          </motion.p>

          {/* description */}
          <motion.p
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-[500px] mx-auto xl:mx-0 mb-8 leading-relaxed text-white/70 text-xs md:text-sm font-light"
          >
            𝐈 𝐚𝐦 𝐚𝐧 𝐀𝐈 𝐄𝐧𝐠𝐢𝐧𝐞𝐞𝐫 𝐰𝐨𝐫𝐤𝐢𝐧𝐠 𝐚𝐭 𝐭𝐡𝐞 𝐢𝐧𝐭𝐞𝐫𝐬𝐞𝐜𝐭𝐢𝐨𝐧 𝐨𝐟 𝐝𝐚𝐭𝐚 𝐞𝐧𝐠𝐢𝐧𝐞𝐞𝐫𝐢𝐧𝐠, 𝐦𝐚𝐜𝐡𝐢𝐧𝐞 𝐥𝐞𝐚𝐫𝐧𝐢𝐧𝐠, 𝐚𝐧𝐝 𝐩𝐫𝐨𝐝𝐮𝐜𝐭𝐢𝐨𝐧-𝐠𝐫𝐚𝐝𝐞 𝐀𝐈 𝐬𝐲𝐬𝐭𝐞𝐦𝐬, 𝐜𝐮𝐫𝐫𝐞𝐧𝐭𝐥𝐲 𝐜𝐨𝐧𝐭𝐫𝐢𝐛𝐮𝐭𝐢𝐧𝐠 𝐭𝐨 𝐎𝐩𝐞𝐧𝐒𝐭𝐫𝐞𝐞𝐭𝐌𝐚𝐩-𝐛𝐚𝐬𝐞𝐝 𝐞𝐜𝐨𝐬𝐲𝐬𝐭𝐞𝐦𝐬 𝐛𝐲 𝐛𝐮𝐢𝐥𝐝𝐢𝐧𝐠 𝐬𝐜𝐚𝐥𝐚𝐛𝐥𝐞 𝐝𝐚𝐭𝐚 𝐩𝐢𝐩𝐞𝐥𝐢𝐧𝐞𝐬 𝐭𝐡𝐚𝐭 𝐢𝐧𝐭𝐞𝐠𝐫𝐚𝐭𝐞 𝐛𝐚𝐜𝐤𝐞𝐧𝐝 𝐚𝐧𝐝 𝐟𝐫𝐨𝐧𝐭𝐞𝐧𝐝 𝐬𝐲𝐬𝐭𝐞𝐦𝐬.
          </motion.p>

          {/* btn */}
          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      {/* image */}
      <div className="w-[1280px] h-full absolute right-0 bottom-0">
        {/* bg img */}
        <div
          role="img"
          className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"
          aria-hidden
        />

        {/* particles */}
        <ParticlesContainer />

        {/* avatar */}
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:bottom-0 lg:right-[5%]"
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
