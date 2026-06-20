import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import CountUp from "react-countup";
import {
  FaPython,
  FaDatabase,
  FaBrain,
  FaNetworkWired,
  FaRobot,
  FaNodeJs,
  FaComments,
  FaChartBar,
  FaEye,
  FaGitAlt,
  FaGithub,
  FaDocker,
  FaAws,
  FaLinux,
  FaRaspberryPi,
  FaThermometerHalf,
  FaMicrochip,
  FaProjectDiagram,
} from "react-icons/fa";
import {
  SiReact,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiFlask,
  SiFastapi,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiTensorflow,
  SiPytorch,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
  SiPostman,
  SiArduino,
  SiVisualstudiocode,
} from "react-icons/si";
import { DiPostgresql } from "react-icons/di";

import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import { fadeIn } from "../../variants";

//  data
export const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "FRONTEND",
        skills: [
          { Icon: SiReact, name: "React", color: "#61DAFB" },
          { Icon: SiHtml5, name: "HTML5", color: "#E34F26" },
          { Icon: SiCss3, name: "CSS3", color: "#1572B6" },
          { Icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
          { Icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
          { Icon: SiNextdotjs, name: "Next.js", color: "#FFFFFF" },
          { Icon: SiTailwindcss, name: "Tailwind CSS", color: "#06B6D4" },
        ],
      },
      {
        title: "BACKEND",
        skills: [
          { Icon: FaPython, name: "Python", color: "#3776AB" },
          { Icon: SiFlask, name: "Flask", color: "#FFFFFF" },
          { Icon: SiFastapi, name: "FastAPI", color: "#009688" },
          { Icon: FaNodeJs, name: "Node.js", color: "#339933" },
          { Icon: SiExpress, name: "Express.js", color: "#FFFFFF" },
          { Icon: SiMongodb, name: "MongoDB", color: "#47A248" },
          { Icon: SiMysql, name: "MySQL", color: "#4479A1" },
          { Icon: DiPostgresql, name: "PostgreSQL", color: "#336791" },
        ],
      },
      {
        title: "AI/ML & DATA SCIENCE",
        skills: [
          { Icon: FaBrain, name: "Generative AI", color: "#FF5E7E" },
          { Icon: FaNetworkWired, name: "Neural Networks", color: "#00BFFF" },
          { Icon: FaComments, name: "Natural Language Processing", color: "#FFD700" },
          { Icon: FaRobot, name: "Agentic AI Systems", color: "#00FF7F" },
          { Icon: SiTensorflow, name: "TensorFlow", color: "#FF6F00" },
          { Icon: SiPytorch, name: "PyTorch", color: "#EE4C2C" },
          { Icon: SiScikitlearn, name: "Scikit-Learn", color: "#F89939" },
          { Icon: SiPandas, name: "Pandas", color: "#150458" },
          { Icon: SiNumpy, name: "NumPy", color: "#4D77CF" },
          { Icon: FaChartBar, name: "Data Science & Visualization", color: "#E15759" },
          { Icon: FaEye, name: "Computer Vision", color: "#DA70D6" },
        ],
      },
      {
        title: "DEVOPS & TOOLS",
        skills: [
          { Icon: FaGitAlt, name: "Git", color: "#F05032" },
          { Icon: FaGithub, name: "GitHub", color: "#FFFFFF" },
          { Icon: SiVisualstudiocode, name: "VS Code", color: "#007ACC" },
          { Icon: FaDocker, name: "Docker", color: "#2496ED" },
          { Icon: FaAws, name: "AWS", color: "#FF9900" },
          { Icon: FaDatabase, name: "Databases", color: "#00CED1" },
          { Icon: SiPostman, name: "Postman", color: "#FF6C37" },
          { Icon: FaLinux, name: "Linux", color: "#FCC624" },
        ],
      },
      {
        title: "HARDWARE & IOT",
        skills: [
          { Icon: FaRaspberryPi, name: "Raspberry Pi", color: "#C51A4A" },
          { Icon: SiArduino, name: "ESP32 / Arduino", color: "#00979D" },
          { Icon: FaProjectDiagram, name: "IoT Networks", color: "#4A90E2" },
          { Icon: FaThermometerHalf, name: "Sensors & Real-time", color: "#7ED321" },
          { Icon: FaMicrochip, name: "Microchips / ESP32", color: "#F5A623" },
          { Icon: FaRobot, name: "Robotics", color: "#50E3C2" },
        ],
      },
    ],
  },
  {
    title: "achievements",
    info: [
      {
        title: '"Raasthey": Computer Vision-based assistive application for senior citizens (Google Innovation Submission)',
        stage: "2025",
        logo: "/google_logo.png",
      },
      {
        title: "Bhu-Rakshak IoT Project nominated for MoE-AICTE National Technology Week Exhibition",
        stage: "2023-24",
        logo: "/aicte_logo.jpg",
      },
      {
        title: "1st Place, Data Science in Neural Networks – Advanced ML Program, IIT Roorkee",
        stage: "2022",
        logo: "/iit_roorkee_logo.png",
        certificate: "/iit_roorkee_certificate.jpg",
      },
      {
        title: "Best Idea & Top-26 Finalist, Amazon Idea Sambhav",
        stage: "2021",
        logo: "/amazon_logo.svg",
      },
      {
        title: "National Winner, Microsoft Data Science Hackathon (Banking & Insurance)",
        stage: "2019",
        logo: "/microsoft_logo.svg",
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Project AI Engineer",
        subtitle: "OpenStreetMap",
        stage: "Current Ongoing (Full-Time)",
        logo: "/openstreetmap_logo.svg",
      },
      {
        title: "QA Engineer",
        subtitle: "IBM",
        stage: "5 Years (7.9 Years Total at IBM)",
        logo: "/ibm_logo.svg",
      },
      {
        title: "IT Network Specialist",
        subtitle: "IBM",
        stage: "2 Years",
        logo: "/ibm_logo.svg",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title: "Advanced Machine Learning Program - IIT Roorkee",
        stage: "2022",
      },
      {
        title: "B.Tech in Computer Science & Engineering",
        stage: "2018 - 2022",
      },
      {
        title: "Generative AI & LLM Architecture Certification",
        stage: "2023",
      },
    ],
  },
];

const SkillIconCard = ({ name, Icon, color }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-md cursor-pointer relative group shrink-0"
      style={{
        borderColor: hovered ? color : "rgba(255, 255, 255, 0.1)",
        boxShadow: hovered ? `0 0 12px ${color}55` : "none",
        backgroundColor: hovered ? `${color}11` : "rgba(255, 255, 255, 0.05)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Icon
        className="text-2xl transition-transform duration-300"
        style={{ color: color }}
      />
      {/* Tooltip */}
      <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-950 text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-50 shadow-lg border border-white/10 font-sora">
        {name}
      </span>
    </div>
  );
};

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />

      {/* avatar img */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        <Avatar />
      </motion.div>

      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* text */}
        <div className={`flex-1 flex flex-col justify-center transition-all duration-500 ${index === 0 ? "xl:max-w-[38%]" : ""}`}>
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Building Intellect into <span className="text-accent">Autonomous Systems.</span>
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            As an AI & ML Engineer, I specialize in architecting Generative AI applications, 
            real-time data pipelines, and intelligent agents. Over the years, I have developed 
            innovative solutions like Google-submitted computer vision apps and MoE-AICTE nominated 
            IoT projects, bridging data and intelligence to solve complex real-world problems.
          </motion.p>

          {/* counters */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              {/* experience */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={10} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Years of experience.
                </div>
              </div>

              {/* clients */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={10} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  AI & ML Prototypes.
                </div>
              </div>

              {/* projects */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={30} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Research & Open Source.
                </div>
              </div>

              {/* awards */}
              <div className="relative flex-1">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={5} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Major Awards Won.
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* info */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className={`flex flex-col w-full h-[480px] transition-all duration-500 ${
            index === 0 ? "xl:max-w-[62%]" : "xl:max-w-[48%]"
          }`}
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemI) => (
              <div
                key={itemI}
                className={`${
                  index === itemI &&
                  "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                onClick={() => setIndex(itemI)}
              >
                {item.title}
              </div>
            ))}
          </div>

          <div className="py-2 xl:py-6 flex flex-col gap-y-4 items-center xl:items-start overflow-y-auto max-h-[380px] pr-2 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent w-full">
            {aboutData[index].title === "skills" && (
              <div className="mb-4 text-left w-full border-b border-white/10 pb-4">
                <h3 className="text-xl font-sora tracking-wider uppercase text-white font-extrabold">
                  TECH STACK &amp; <span className="text-accent">AI SKILLS</span>
                </h3>
                <p className="text-xs text-white/60 mt-1 max-w-[600px] leading-relaxed">
                  The tools, frameworks, and technologies I use to build intelligent systems, automation platforms, and full-stack AI products.
                </p>
              </div>
            )}

            {aboutData[index].info.map((item, itemI) => (
              <div key={itemI} className="w-full flex flex-col xl:flex-row xl:items-center gap-x-4 text-white/60">
                {/* Render logic based on tab */}
                {aboutData[index].title === "skills" && (
                  <div className="w-full flex flex-col md:flex-row md:items-center gap-y-3 pb-3 border-b border-white/5 last:border-0 text-left">
                    {/* Category Title */}
                    <div className="text-white/80 font-mono text-xs tracking-widest uppercase font-bold border-l-2 border-accent pl-3 min-w-[150px] flex items-center md:py-1">
                      {item.title}
                    </div>
                    {/* Icons Grid */}
                    <div className="flex gap-3 items-center flex-wrap pl-3 md:pl-0">
                      {item.skills?.map((skill, skillI) => (
                        <SkillIconCard
                          key={skillI}
                          name={skill.name}
                          Icon={skill.Icon}
                          color={skill.color}
                        />
                      ))}
                    </div>
                  </div>
                )}

                {aboutData[index].title === "achievements" && (
                  <div className="w-full flex gap-x-4 items-start border-b border-white/5 pb-3 text-left">
                    {item.logo && (
                      <div className="w-10 h-10 flex items-center justify-center bg-white/5 rounded-lg p-1.5 overflow-hidden shrink-0 border border-white/10 relative">
                        <Image
                          src={item.logo}
                          alt=""
                          width={32}
                          height={32}
                          className="object-contain filter brightness-95"
                        />
                      </div>
                    )}
                    <div className="flex-1">
                      <div className="text-white font-medium text-sm md:text-base leading-snug">
                        {item.title}
                        {item.certificate && (
                          <a
                            href={item.certificate}
                            target="_blank"
                            rel="noreferrer noopener"
                            className="text-accent hover:underline text-xs md:text-sm font-semibold ml-2 inline-flex items-center gap-x-1 border border-accent/20 px-2 py-0.5 rounded bg-accent/5 hover:bg-accent/10 transition-colors"
                          >
                            View Certificate
                          </a>
                        )}
                      </div>
                      <div className="text-xs text-white/40 mt-1 font-semibold tracking-wider uppercase">{item.stage}</div>
                    </div>
                  </div>
                )}

                {aboutData[index].title === "experience" && (
                  <div className="w-full flex gap-x-4 items-start border-b border-white/5 pb-3 text-left">
                    {item.logo && (
                      <div className="w-10 h-10 flex items-center justify-center bg-white/5 rounded-lg p-1.5 overflow-hidden shrink-0 border border-white/10 relative">
                        <Image
                          src={item.logo}
                          alt=""
                          width={32}
                          height={32}
                          className="object-contain filter brightness-95"
                        />
                      </div>
                    )}
                    <div className="flex-1">
                      <div className="text-white font-medium text-sm md:text-base leading-snug">
                        {item.title}
                      </div>
                      {item.subtitle && (
                        <div className="text-xs text-white/50 mt-0.5">{item.subtitle}</div>
                      )}
                      <div className="text-xs text-accent mt-1 font-semibold tracking-wider uppercase">{item.stage}</div>
                    </div>
                  </div>
                )}

                {aboutData[index].title === "credentials" && (
                  <div className="w-full flex justify-between items-center border-b border-white/5 pb-2 text-left">
                    <div className="text-white font-medium">{item.title}</div>
                    <div className="text-accent font-semibold text-sm shrink-0">{item.stage}</div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
