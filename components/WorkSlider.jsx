import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const projectData = [
  {
    title: "Bhu-Rakshak AI",
    subtitle: "AI, IoT, and Autonomous Drones for Irrigation",
    description: "An intelligent, automated irrigation and soil health monitoring system combining IoT sensors, AI analytics, and autonomous drones to optimize agricultural efficiency.",
    badges: ["AI / IOT", "HARDWARE", "DRONES"],
    bullets: [
      "Real-time soil moisture and nutrient analytics",
      "Autonomous drone-based crop health scanning",
      "AI-driven automated irrigation scheduling",
    ],
    tags: ["AI", "IoT", "Drones", "Agriculture", "Smart Farming"],
    image: "/bhu_rakshak_mockup.png",
    github: "https://github.com/RamaP27/Bhu_Rakshak",
    link: "https://medium.com/@rama27prayag9/bhu-rakshak-reimagining-irrigation-with-ai-iot-and-autonomous-drones-11245b030595",
    linkLabel: "Medium Article",
  },
  {
    title: "Agri-Spark Drone",
    subtitle: "Distributed Drone Telemetry Processing Platform",
    description: "A distributed drone telemetry processing and analytics platform leveraging PySpark and big data technologies to ingest, process, and map spatial agricultural data.",
    badges: ["BIG DATA", "DRONES", "APACHE SPARK"],
    bullets: [
      "Large-scale drone telemetry data ingestion",
      "PySpark-based parallel data processing pipelines",
      "Automated crop health mapping & GIS analysis",
    ],
    tags: ["PySpark", "Big Data", "Drones", "GIS Data", "Telemetry"],
    image: "/agri_spark_mockup.png",
    github: "https://github.com/RamaP27/agri-spark-drone.git",
    link: "https://medium.com/@rama27prayag9",
    linkLabel: "Medium Profile",
  },
  {
    title: "Smart Home Energy Management",
    subtitle: "AI-Powered Home Utility Optimization",
    description: "An intelligent home energy management system (SHEMS) leveraging machine learning to predict energy consumption patterns, automate appliances, and minimize utility costs.",
    badges: ["SMART HOME", "ENERGY", "AI / IOT"],
    bullets: [
      "Predictive energy consumption ML models",
      "Smart appliance scheduling and automation",
      "Real-time energy metrics dashboard & controls",
    ],
    tags: ["AI", "IoT", "Machine Learning", "Smart Energy", "Home Automation"],
    image: "/shems_mockup.png",
    github: "https://github.com/RamaP27",
    link: "https://medium.com/@rama27prayag9/smart-home-energy-management-system-shems-d0dc04d71fb4",
    linkLabel: "Medium Article",
  },
];

const WorkSlider = () => {
  return (
    <div className="flex flex-col gap-y-12 pb-24 w-full">
      {projectData.map((project, index) => (
        <div 
          key={index} 
          className="w-full flex flex-col lg:flex-row items-stretch justify-between gap-x-8 bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-md hover:bg-white/10 transition-all duration-300"
        >
          {/* Left: Image mockup inside a browser frame */}
          <div className="w-full lg:w-[45%] min-h-[220px] md:min-h-[280px] relative rounded-xl overflow-hidden shadow-2xl border border-white/10 shrink-0 mb-6 lg:mb-0">
            <Image
              src={project.image}
              alt={project.title}
              fill
              priority={index === 0}
              className="object-cover"
            />
          </div>

          {/* Right: Project details */}
          <div className="w-full lg:w-[50%] flex flex-col justify-between text-left">
            <div>
              {/* Badges */}
              <div className="flex gap-x-2 mb-3 flex-wrap gap-y-1.5">
                {project.badges.map((badge, badgeI) => (
                  <span
                    key={badgeI}
                    className="text-[10px] md:text-xs font-semibold tracking-wider border border-accent/30 text-accent px-2 py-0.5 rounded bg-accent/5"
                  >
                    {badge}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2 leading-tight">
                {project.title}
              </h3>
              
              {/* Description */}
              <p className="text-xs md:text-sm text-white/70 mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Bullets */}
              <ul className="space-y-1.5 mb-5 pl-1.5 text-xs md:text-sm">
                {project.bullets.map((bullet, bulletI) => (
                  <li key={bulletI} className="flex items-start gap-x-2 text-white/80">
                    <span className="text-accent mt-1.5 shrink-0 block w-1.5 h-1.5 rounded-full" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {project.tags.map((tag, tagI) => (
                  <span
                    key={tagI}
                    className="text-[9px] md:text-xs text-white/50 bg-white/5 border border-white/10 px-2 py-0.5 rounded-full font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-x-6 mt-auto">
              <Link
                href={project.github}
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center gap-x-2 text-white bg-accent px-4 py-2 rounded-full font-semibold hover:bg-accent/80 transition-all text-xs md:text-sm cursor-pointer shadow-lg shadow-accent/20"
              >
                <FaGithub className="text-base md:text-lg" />
                <span>GitHub</span>
              </Link>

              <Link
                href={project.link}
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center gap-x-1.5 text-white/90 hover:text-accent font-semibold transition-all text-xs md:text-sm cursor-pointer group"
              >
                <span>{project.linkLabel}</span>
                <BsArrowRight className="text-sm transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkSlider;
