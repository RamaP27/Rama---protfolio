import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import {
  FaGithub,
  FaLinkedin,
  FaGraduationCap,
  FaAward,
  FaChevronRight,
} from "react-icons/fa";
import { SiTypescript, SiPython, SiJavascript } from "react-icons/si";
import { HiFire, HiSparkles } from "react-icons/hi2";
import { fadeIn } from "../../variants";
import Circles from "../../components/Circles";

// Certificate assets
const certificates = [
  {
    id: 1,
    title: "Advanced Machine Learning Program",
    issuer: "IIT Roorkee",
    src: "/certificates/Screenshot 2026-06-20 144853.png",
  },
  {
    id: 2,
    title: "Neural Networks & Deep Learning",
    issuer: "DeepLearning.AI",
    src: "/certificates/Screenshot 2026-06-20 144906.png",
  },
  {
    id: 3,
    title: "Generative AI Cloud Architecture",
    issuer: "Google Cloud",
    src: "/certificates/Screenshot 2026-06-20 144922.png",
  },
  {
    id: 4,
    title: "Python Data Science Professional",
    issuer: "IBM",
    src: "/certificates/Screenshot 2026-06-20 144944.png",
  },
  {
    id: 5,
    title: "TensorFlow Developer Certification",
    issuer: "TensorFlow",
    src: "/certificates/Screenshot 2026-06-20 145018.png",
  },
  {
    id: 6,
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    src: "/certificates/Screenshot 2026-06-20 145038.png",
  },
  {
    id: 7,
    title: "Docker & Kubernetes Deployment",
    issuer: "Cloud Native Computing Foundation",
    src: "/certificates/Screenshot 2026-06-20 145114.png",
  },
  {
    id: 8,
    title: "IoT Embedded Systems Architect",
    issuer: "Arduino & ESP32 Certification",
    src: "/certificates/Screenshot 2026-06-20 145135.png",
  },
  {
    id: 9,
    title: "OpenStreetMap AI Contributor Award",
    issuer: "OpenStreetMap Foundation",
    src: "/certificates/Screenshot 2026-06-20 145153.png",
  },
  {
    id: 10,
    title: "Cybersecurity AI Fundamentals",
    issuer: "Security+ Training Partners",
    src: "/certificates/Screenshot 2026-06-20 145216.png",
  },
];

// Generates dynamic contribution heatmap matching user's first image
const getContributionShade = (col, row) => {
  const seed = Math.sin(col * 12.9898 + row * 78.233) * 43758.5453;
  const rand = seed - Math.floor(seed);
  
  let activeFactor = 0.15;
  if (col >= 48) activeFactor = 0.65; // May/Jun high activity
  else if (col >= 43 && col <= 47) activeFactor = 0.45; // Apr active
  else if (col >= 13 && col <= 21) activeFactor = 0.35; // Sep/Oct active
  else if (col >= 31 && col <= 34) activeFactor = 0.30; // Jan active
  else if (col >= 22 && col <= 25) activeFactor = 0.25; // Nov active
  
  if (rand > activeFactor) return "bg-[#161b22]";
  
  const levelRand = (rand * 10) % 4;
  if (levelRand < 1.5) return "bg-[#0e4429]";
  if (levelRand < 2.5) return "bg-[#006d32]";
  if (levelRand < 3.5) return "bg-[#26a641]";
  return "bg-[#39d353]";
};

const Credentials = () => {
  const [activeCert, setActiveCert] = useState(null);

  return (
    <div className="h-full bg-primary/30 py-32 overflow-y-auto pb-24 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
      <Circles />

      <div className="container mx-auto px-4 xl:px-0 flex flex-col gap-y-12 xl:pr-24">
        {/* Header Title */}
        <div className="text-center">
          <motion.h2
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            className="h2 mb-2"
          >
            Credentials<span className="text-accent">.</span>
          </motion.h2>
          <motion.p
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            className="text-white/60 text-sm max-w-[600px] mx-auto leading-relaxed"
          >
            My education, leadership, open-source footprint, GitHub activity, and contribution journey.
          </motion.p>
        </div>

        {/* Top Profile Split */}
        <div className="flex flex-col xl:flex-row gap-6 w-full">
          {/* Left card */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            animate="show"
            className="flex-1 xl:max-w-[30%] bg-[#0e1726]/60 border border-white/10 rounded-3xl p-8 flex flex-col items-center justify-center text-center shadow-2xl backdrop-blur-sm relative group hover:border-accent/30 transition-all duration-300"
          >
            {/* Avatar container */}
            <div className="w-28 h-28 rounded-full border-2 border-accent p-1 overflow-hidden relative mb-4 shadow-[0_0_15px_rgba(241,48,36,0.3)]">
              <Image
                src="/avatar.png"
                alt="Rama Prayaga Profile Picture"
                width={104}
                height={104}
                className="object-cover rounded-full filter hover:brightness-110 transition-all duration-300"
                priority
              />
            </div>

            <h3 className="text-xl font-bold text-white mb-1 font-sora">Rama Prayaga</h3>
            <p className="text-xs text-accent font-mono uppercase tracking-wider mb-8">
              AI Engineer &amp; Data Specialist
            </p>

            {/* Social Buttons */}
            <div className="flex flex-col gap-3 w-full">
              <a
                href="https://github.com/RamaP27"
                target="_blank"
                rel="noreferrer noopener"
                className="btn border border-white/10 rounded-xl py-3 px-4 flex items-center justify-center gap-x-2 text-sm text-white/90 hover:text-white hover:border-accent hover:bg-accent/5 transition-all duration-300 w-full"
              >
                <FaGithub className="text-lg" />
                <span>Open GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/ramap27/"
                target="_blank"
                rel="noreferrer noopener"
                className="btn border border-white/10 rounded-xl py-3 px-4 flex items-center justify-center gap-x-2 text-sm text-white/90 hover:text-white hover:border-accent hover:bg-accent/5 transition-all duration-300 w-full"
              >
                <FaLinkedin className="text-lg" />
                <span>Open LinkedIn</span>
              </a>
            </div>
          </motion.div>

          {/* Right Main Content */}
          <motion.div
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            animate="show"
            className="flex-1 bg-[#0e1726]/60 border border-white/10 rounded-3xl p-8 flex flex-col justify-between shadow-2xl backdrop-blur-sm hover:border-accent/10 transition-all duration-300"
          >
            <div>
              <h4 className="text-sm font-mono tracking-widest text-accent uppercase font-bold mb-3 border-l-2 border-accent pl-3">
                Professional Profile
              </h4>
              <p className="text-sm text-white/70 leading-relaxed font-sora mb-8 text-left">
                AI Engineer specializing in real-time AI systems, LLM-powered applications, machine learning
                pipelines, scalable backend automation, and data engineering.
              </p>
            </div>

            {/* Sub-grid (Education & Leadership) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Education */}
              <div>
                <h5 className="text-xs font-mono tracking-wider text-white/50 uppercase font-bold mb-4">
                  Education
                </h5>
                <div className="bg-[#131d30]/60 border border-white/5 rounded-2xl p-5 flex gap-x-4 items-start text-left">
                  <div className="text-accent text-2xl mt-1 shrink-0">
                    <FaGraduationCap />
                  </div>
                  <div>
                    <h6 className="text-sm font-bold text-white leading-snug">
                      Advanced Machine Learning Program
                    </h6>
                    <p className="text-xs text-white/50 mt-1">IIT Roorkee</p>
                    <span className="text-[10px] text-accent font-mono mt-2 inline-block px-2 py-0.5 bg-accent/10 rounded">
                      Completed 2022
                    </span>
                  </div>
                </div>
              </div>

              {/* Leadership */}
              <div>
                <h5 className="text-xs font-mono tracking-wider text-white/50 uppercase font-bold mb-4">
                  Leadership
                </h5>
                <div className="flex flex-col gap-y-2">
                  {[
                    { role: "Google Innovation Submitter", org: "CV App 'Raasthey'" },
                    { role: "AICTE Tech Exhibitor", org: "Bhu-Rakshak IoT" },
                    { role: "ML Excellence Awardee", org: "IIT Roorkee Advanced ML" },
                    { role: "National Hackathon Winner", org: "Microsoft Data Science" },
                  ].map((lead, idx) => (
                    <div
                      key={idx}
                      className="bg-[#131d30]/40 border border-white/5 rounded-xl py-2.5 px-4 flex items-center justify-between text-left"
                    >
                      <div className="flex items-center gap-x-2 text-white/80">
                        <FaAward className="text-accent/60 text-xs" />
                        <span className="text-xs font-semibold">{lead.role}</span>
                      </div>
                      <span className="text-[10px] text-white/40">{lead.org}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* GitHub Contributions Section */}
        <div className="w-full flex flex-col gap-y-6">
          <div className="text-left border-l-4 border-accent pl-4">
            <h3 className="text-xl font-bold tracking-wider uppercase text-white font-sora">
              GitHub Contributions
            </h3>
            <p className="text-xs text-white/60 mt-1 leading-relaxed max-w-[600px]">
              A snapshot of my open-source activity, consistency, languages, and development footprint.
            </p>
          </div>

          {/* GitHub Streak Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              variants={fadeIn("up", 0.1)}
              initial="hidden"
              animate="show"
              className="bg-[#0e1726]/60 border border-white/10 rounded-2xl p-6 text-center backdrop-blur-sm relative overflow-hidden group hover:border-accent/20 transition-all duration-300"
            >
              <span className="text-[10px] tracking-widest text-white/40 uppercase font-mono block mb-1">
                Total Contributions
              </span>
              <span className="text-4xl font-extrabold text-white block mb-1 font-sora">137</span>
              <span className="text-[10px] font-mono text-white/30">Last Year</span>
              <div className="absolute right-4 bottom-4 text-5xl text-white/5 font-bold select-none pointer-events-none font-mono">
                137
              </div>
            </motion.div>

            <motion.div
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              className="bg-[#0e1726]/60 border border-white/10 rounded-2xl p-6 text-center backdrop-blur-sm relative overflow-hidden group hover:border-accent/20 transition-all duration-300"
            >
              <span className="text-[10px] tracking-widest text-white/40 uppercase font-mono block mb-1">
                Current Streak
              </span>
              <span className="text-4xl font-extrabold text-accent flex items-center justify-center gap-x-2 block mb-1 font-sora">
                2 <span className="text-lg uppercase text-white/80 font-bold">Days</span>
              </span>
              <span className="text-[10px] font-mono text-white/30">May 31 - Jun 2</span>
              <HiFire className="absolute right-4 bottom-4 text-5xl text-accent/5 pointer-events-none" />
            </motion.div>

            <motion.div
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              animate="show"
              className="bg-[#0e1726]/60 border border-white/10 rounded-2xl p-6 text-center backdrop-blur-sm relative overflow-hidden group hover:border-accent/20 transition-all duration-300"
            >
              <span className="text-[10px] tracking-widest text-white/40 uppercase font-mono block mb-1">
                Longest Streak
              </span>
              <span className="text-4xl font-extrabold text-accent flex items-center justify-center gap-x-2 block mb-1 font-sora">
                7 <span className="text-lg uppercase text-white/80 font-bold">Days</span>
              </span>
              <span className="text-[10px] font-mono text-white/30">Nov 16, 2025 - Nov 22, 2025</span>
              <HiSparkles className="absolute right-4 bottom-4 text-5xl text-accent/5 pointer-events-none" />
            </motion.div>
          </div>

          {/* Graph & Stats split */}
          <div className="flex flex-col lg:flex-row gap-6 w-full">
            {/* SVG line chart */}
            <motion.div
              variants={fadeIn("right", 0.4)}
              initial="hidden"
              animate="show"
              className="flex-1 lg:max-w-[65%] bg-[#0e1726]/60 border border-white/10 rounded-3xl p-6 backdrop-blur-sm hover:border-accent/15 transition-all duration-300 flex flex-col justify-between"
            >
              <h4 className="text-sm font-semibold text-white/80 mb-6 text-left">
                Rama Prayaga&apos;s Contribution Graph
              </h4>
              
              {/* Custom SVG Line Chart */}
              <div className="w-full overflow-x-auto">
                <svg
                  width="100%"
                  height="220"
                  viewBox="0 0 600 220"
                  className="min-w-[550px]"
                >
                  <defs>
                    {/* Line gradient */}
                    <linearGradient id="line-grad" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#F13024" />
                      <stop offset="50%" stopColor="#FF5E7E" />
                      <stop offset="100%" stopColor="#F13024" />
                    </linearGradient>
                    {/* Area fill gradient */}
                    <linearGradient id="area-grad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#F13024" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#F13024" stopOpacity="0" />
                    </linearGradient>
                  </defs>

                  {/* Grid Lines */}
                  <line x1="40" y1="170" x2="560" y2="170" stroke="rgba(255,255,255,0.08)" />
                  <line x1="40" y1="105" x2="560" y2="105" stroke="rgba(255,255,255,0.08)" strokeDasharray="4" />
                  <line x1="40" y1="40" x2="560" y2="40" stroke="rgba(255,255,255,0.08)" strokeDasharray="4" />

                  {/* Y-Axis labels */}
                  <text x="25" y="174" fill="rgba(255,255,255,0.4)" fontSize="10" fontFamily="monospace">0</text>
                  <text x="25" y="109" fill="rgba(255,255,255,0.4)" fontSize="10" fontFamily="monospace">8</text>
                  <text x="20" y="44" fill="rgba(255,255,255,0.4)" fontSize="10" fontFamily="monospace">15</text>

                  {/* Shaded Area Under Curve */}
                  <path
                    d="M 40 133 
                       C 72.5 118.6, 72.5 118.6, 105 105 
                       C 137.5 91.4, 137.5 130, 170 123 
                       C 202.5 116, 202.5 80, 235 77 
                       C 267.5 74, 267.5 140, 300 133 
                       C 332.5 126, 332.5 50, 365 49 
                       C 397.5 48, 397.5 110, 430 105 
                       C 462.5 100, 462.5 90, 495 86 
                       C 527.5 82, 527.5 70, 560 67
                       L 560 170 L 40 170 Z"
                    fill="url(#area-grad)"
                  />

                  {/* Glowing Stroke Curve */}
                  <path
                    d="M 40 133 
                       C 72.5 118.6, 72.5 118.6, 105 105 
                       C 137.5 91.4, 137.5 130, 170 123 
                       C 202.5 116, 202.5 80, 235 77 
                       C 267.5 74, 267.5 140, 300 133 
                       C 332.5 126, 332.5 50, 365 49 
                       C 397.5 48, 397.5 110, 430 105 
                       C 462.5 100, 462.5 90, 495 86 
                       C 527.5 82, 527.5 70, 560 67"
                    fill="none"
                    stroke="url(#line-grad)"
                    strokeWidth="3"
                    className="drop-shadow-[0_0_8px_rgba(241,48,36,0.5)]"
                  />

                  {/* Data Points Markers */}
                  {[
                    { x: 40, y: 133, val: 4, date: "Mar 4" },
                    { x: 105, y: 105, val: 7, date: "Mar 15" },
                    { x: 170, y: 123, val: 5, date: "Mar 28" },
                    { x: 235, y: 77, val: 10, date: "Apr 10" },
                    { x: 300, y: 133, val: 4, date: "Apr 22" },
                    { x: 365, y: 49, val: 13, date: "May 5" },
                    { x: 430, y: 105, val: 7, date: "May 18" },
                    { x: 495, y: 86, val: 9, date: "May 30" },
                    { x: 560, y: 67, val: 11, date: "Jun 2" },
                  ].map((pt, i) => (
                    <g key={i} className="group/pt cursor-pointer">
                      <circle
                        cx={pt.x}
                        cy={pt.y}
                        r="5"
                        fill="#F13024"
                        stroke="#FFFFFF"
                        strokeWidth="1.5"
                        className="transition-all duration-300 hover:r-7"
                      />
                      {/* Tooltip bubble inside SVG */}
                      <rect
                        x={pt.x - 20}
                        y={pt.y - 28}
                        width="40"
                        height="18"
                        rx="4"
                        fill="#131424"
                        stroke="rgba(255,255,255,0.1)"
                        strokeWidth="1"
                        className="opacity-0 group-hover/pt:opacity-100 transition-opacity duration-300"
                      />
                      <text
                        x={pt.x}
                        y={pt.y - 15}
                        fill="#FFFFFF"
                        fontSize="9"
                        fontWeight="bold"
                        textAnchor="middle"
                        className="opacity-0 group-hover/pt:opacity-100 transition-opacity duration-300 font-mono"
                      >
                        {pt.val}
                      </text>
                      
                      {/* X-axis labels */}
                      <text
                        x={pt.x}
                        y="190"
                        fill="rgba(255,255,255,0.4)"
                        fontSize="9"
                        textAnchor="middle"
                        className="font-mono text-[9px]"
                      >
                        {pt.date}
                      </text>
                    </g>
                  ))}
                </svg>
              </div>
            </motion.div>

            {/* Profile stats card */}
            <motion.div
              variants={fadeIn("left", 0.5)}
              initial="hidden"
              animate="show"
              className="flex-1 lg:max-w-[35%] bg-[#0e1726]/60 border border-white/10 rounded-3xl p-6 backdrop-blur-sm hover:border-accent/15 transition-all duration-300 flex flex-col justify-between text-left"
            >
              <div>
                <div className="flex items-center gap-x-3 mb-6">
                  <FaGithub className="text-3xl text-white" />
                  <div>
                    <h4 className="text-base font-bold text-white font-sora leading-tight">
                      GitHub Profile Stats
                    </h4>
                    <span className="text-xs font-mono text-accent">@RamaP27</span>
                  </div>
                </div>

                <div className="flex flex-col gap-y-4">
                  {[
                    { label: "Total Stars", val: 12, color: "text-yellow-400" },
                    { label: "2026 Commits", val: 137, color: "text-accent" },
                    { label: "Total PRs", val: 24, color: "text-blue-400" },
                    { label: "Total Issues", val: 18, color: "text-orange-400" },
                    { label: "Contributed to", val: "269 repos", color: "text-green-400" },
                  ].map((stat, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between border-b border-white/5 pb-2.5 last:border-0"
                    >
                      <span className="text-xs text-white/60 font-semibold uppercase tracking-wider font-mono">
                        {stat.label}
                      </span>
                      <span className={`text-sm font-bold ${stat.color} font-mono`}>{stat.val}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Large Github icon watermarked */}
              <div className="relative h-12 flex justify-end items-end opacity-[0.02] overflow-hidden select-none pointer-events-none">
                <FaGithub className="text-8xl -mr-6 -mb-6" />
              </div>
            </motion.div>
          </div>

          {/* Languages progress splitting */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {/* Repo Stats */}
            <motion.div
              variants={fadeIn("right", 0.5)}
              initial="hidden"
              animate="show"
              className="bg-[#0e1726]/60 border border-white/10 rounded-3xl p-6 backdrop-blur-sm text-left hover:border-accent/15 transition-all duration-300"
            >
              <h4 className="text-sm font-semibold text-white/80 mb-6 uppercase tracking-wider font-mono">
                Top Languages by Repo
              </h4>
              <div className="flex justify-around items-center py-4">
                {/* Python progress ring */}
                <div className="flex flex-col items-center gap-y-3">
                  <div className="relative w-20 h-20 flex items-center justify-center">
                    <svg className="absolute inset-0 w-full h-full transform -rotate-90">
                      <circle cx="40" cy="40" r="32" stroke="rgba(255,255,255,0.05)" strokeWidth="6" fill="transparent" />
                      <circle cx="40" cy="40" r="32" stroke="#3776AB" strokeWidth="6" fill="transparent" strokeDasharray="201" strokeDashoffset={201 * (1 - 0.55)} />
                    </svg>
                    <span className="text-sm font-extrabold text-white font-mono">55%</span>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <SiPython className="text-xs text-[#3776AB]" />
                    <span className="text-xs text-white/70 font-semibold font-mono">Python</span>
                  </div>
                </div>

                {/* JS progress ring */}
                <div className="flex flex-col items-center gap-y-3">
                  <div className="relative w-20 h-20 flex items-center justify-center">
                    <svg className="absolute inset-0 w-full h-full transform -rotate-90">
                      <circle cx="40" cy="40" r="32" stroke="rgba(255,255,255,0.05)" strokeWidth="6" fill="transparent" />
                      <circle cx="40" cy="40" r="32" stroke="#F7DF1E" strokeWidth="6" fill="transparent" strokeDasharray="201" strokeDashoffset={201 * (1 - 0.25)} />
                    </svg>
                    <span className="text-sm font-extrabold text-white font-mono">25%</span>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <SiJavascript className="text-xs text-[#F7DF1E]" />
                    <span className="text-xs text-white/70 font-semibold font-mono">JavaScript</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Commit Stats */}
            <motion.div
              variants={fadeIn("left", 0.5)}
              initial="hidden"
              animate="show"
              className="bg-[#0e1726]/60 border border-white/10 rounded-3xl p-6 backdrop-blur-sm text-left hover:border-accent/15 transition-all duration-300"
            >
              <h4 className="text-sm font-semibold text-white/80 mb-6 uppercase tracking-wider font-mono">
                Top Languages by Commit
              </h4>
              <div className="flex justify-around items-center py-4">
                {/* Python progress ring */}
                <div className="flex flex-col items-center gap-y-3">
                  <div className="relative w-20 h-20 flex items-center justify-center">
                    <svg className="absolute inset-0 w-full h-full transform -rotate-90">
                      <circle cx="40" cy="40" r="32" stroke="rgba(255,255,255,0.05)" strokeWidth="6" fill="transparent" />
                      <circle cx="40" cy="40" r="32" stroke="#3776AB" strokeWidth="6" fill="transparent" strokeDasharray="201" strokeDashoffset={201 * (1 - 0.50)} />
                    </svg>
                    <span className="text-sm font-extrabold text-white font-mono">50%</span>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <SiPython className="text-xs text-[#3776AB]" />
                    <span className="text-xs text-white/70 font-semibold font-mono">Python</span>
                  </div>
                </div>

                {/* JS progress ring */}
                <div className="flex flex-col items-center gap-y-3">
                  <div className="relative w-20 h-20 flex items-center justify-center">
                    <svg className="absolute inset-0 w-full h-full transform -rotate-90">
                      <circle cx="40" cy="40" r="32" stroke="rgba(255,255,255,0.05)" strokeWidth="6" fill="transparent" />
                      <circle cx="40" cy="40" r="32" stroke="#F7DF1E" strokeWidth="6" fill="transparent" strokeDasharray="201" strokeDashoffset={201 * (1 - 0.20)} />
                    </svg>
                    <span className="text-sm font-extrabold text-white font-mono">20%</span>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <SiJavascript className="text-xs text-[#F7DF1E]" />
                    <span className="text-xs text-white/70 font-semibold font-mono">JavaScript</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Activity Heat Map grid (User's first image) */}
          <motion.div
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            animate="show"
            className="w-full bg-[#0e1726]/60 border border-white/10 rounded-3xl p-6 backdrop-blur-sm text-left hover:border-accent/15 transition-all duration-300"
          >
            <h4 className="text-sm font-semibold text-white mb-1 font-sora">
              137 contributions in the last year
            </h4>
            <div className="w-full overflow-x-auto mt-6 py-2">
              <div className="flex gap-x-2 min-w-[700px] select-none">
                {/* Day Labels on left */}
                <div className="flex flex-col justify-between text-[9px] font-mono text-white/35 pr-2 py-4 h-20">
                  <span>Mon</span>
                  <span>Wed</span>
                  <span>Fri</span>
                </div>

                {/* Grid Heatmap Columns */}
                <div className="flex-1 flex flex-col justify-between h-24">
                  {/* Months headers row */}
                  <div className="flex justify-between text-[9px] font-mono text-white/35 pb-1">
                    <span>Jun</span>
                    <span>Jul</span>
                    <span>Aug</span>
                    <span>Sep</span>
                    <span>Oct</span>
                    <span>Nov</span>
                    <span>Dec</span>
                    <span>Jan</span>
                    <span>Feb</span>
                    <span>Mar</span>
                    <span>Apr</span>
                    <span>May</span>
                    <span>Jun</span>
                  </div>
                  
                  {/* Heatmap Grid */}
                  <div className="flex gap-1">
                    {Array.from({ length: 53 }).map((_, col) => (
                      <div key={col} className="flex flex-col gap-1">
                        {Array.from({ length: 7 }).map((_, row) => (
                          <div
                            key={row}
                            title={`Contribution level at index (${col}, ${row})`}
                            className={`w-[10px] h-[10px] rounded-sm transition-all duration-300 hover:scale-125 hover:shadow-[0_0_4px_rgba(255,255,255,0.3)] cursor-pointer ${getContributionShade(
                              col,
                              row
                            )}`}
                          />
                        ))}
                      </div>
                    ))}
                  </div>
                  
                  {/* Footnote indicators */}
                  <div className="flex justify-between items-center text-[9px] font-mono text-white/35 pt-2">
                    <span className="hover:text-white transition-colors duration-200">Learn how we count contributions</span>
                    <div className="flex items-center gap-x-1">
                      <span>Less</span>
                      <div className="w-[10px] h-[10px] rounded-sm bg-[#161b22]" />
                      <div className="w-[10px] h-[10px] rounded-sm bg-[#0e4429]" />
                      <div className="w-[10px] h-[10px] rounded-sm bg-[#006d32]" />
                      <div className="w-[10px] h-[10px] rounded-sm bg-[#26a641]" />
                      <div className="w-[10px] h-[10px] rounded-sm bg-[#39d353]" />
                      <span>More</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>
        </div>

        {/* Badges & Certificates Grid */}
        <div className="w-full flex flex-col gap-y-6">
          <div className="text-left border-l-4 border-accent pl-4">
            <h3 className="text-xl font-bold tracking-wider uppercase text-white font-sora">
              Badges &amp; Certificates
            </h3>
            <p className="text-xs text-white/60 mt-1 leading-relaxed max-w-[600px]">
              A showcase of my achievements, credentials, and specialized training certificates.
            </p>
          </div>

          <motion.div
            variants={fadeIn("up", 0.7)}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full"
          >
            {certificates.map((cert) => (
              <div
                key={cert.id}
                onClick={() => setActiveCert(cert.src)}
                className="bg-[#0e1726]/60 border border-white/10 rounded-2xl overflow-hidden cursor-pointer group hover:border-accent/40 shadow-xl hover:shadow-[0_0_15px_rgba(241,48,36,0.15)] transition-all duration-300 flex flex-col h-[280px]"
              >
                {/* Image Container */}
                <div className="relative w-full h-[180px] bg-slate-950/80 overflow-hidden">
                  <Image
                    src={cert.src}
                    alt={cert.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500 filter brightness-90 group-hover:brightness-100"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <span className="text-xs text-white bg-accent/90 px-3 py-1 rounded-full font-semibold flex items-center gap-x-1 shadow-md">
                      View Certificate <FaChevronRight className="text-[10px]" />
                    </span>
                  </div>
                </div>

                {/* Meta details */}
                <div className="p-4 flex flex-col justify-between flex-grow text-left">
                  <h4 className="text-xs font-bold text-white line-clamp-2 leading-snug group-hover:text-accent transition-colors duration-200">
                    {cert.title}
                  </h4>
                  <span className="text-[10px] font-mono text-white/40 block mt-2">
                    {cert.issuer}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

      </div>

      {/* Lightbox Certificate Viewer */}
      {activeCert && (
        <div
          className="fixed inset-0 z-[999] bg-black/95 flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setActiveCert(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative max-w-[90%] max-h-[90vh] flex flex-col items-center"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={activeCert}
              alt="Full Certificate View"
              className="object-contain max-h-[80vh] md:max-h-[85vh] rounded-xl border border-white/20 shadow-2xl shadow-accent/5"
            />
            <button className="absolute -top-12 right-0 text-white hover:text-accent text-3xl font-light p-2 transition-colors duration-200">
              ✕
            </button>
            <span className="text-xs text-white/50 mt-4 bg-slate-900/60 px-4 py-1.5 rounded-full border border-white/5 font-mono">
              Click anywhere to close
            </span>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Credentials;
