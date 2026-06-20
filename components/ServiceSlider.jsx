import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import {
  RiCpuLine,
  RiPulseLine,
  RiBrainLine,
  RiMessage3Line,
  RiEyeLine,
  RiSoundModuleLine,
  RiHeartPulseLine,
  RiCloudLine,
} from "react-icons/ri";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const serviceData = [
  {
    id: "01",
    title: "Real-Time AI Systems",
    description: "I build AI systems that process data, detect patterns, and respond quickly for real-world use cases such as monitoring, prediction, and intelligent decision support.",
    Icon: RiCpuLine,
    tags: ["Python", "PyTorch", "TensorFlow", "+2 more"],
  },
  {
    id: "02",
    title: "LLM-Powered Applications",
    description: "I create applications using LLMs for reasoning, automation, contextual responses, document understanding, and intelligent workflow support.",
    Icon: RiBrainLine,
    tags: ["LLMs", "LangChain", "Vector DBs", "+3 more"],
  },
  {
    id: "03",
    title: "Multimodal Intelligence",
    description: "I work on systems that combine text, audio, image, video, and sensor data to improve understanding and prediction accuracy.",
    Icon: RiEyeLine,
    tags: ["Deep Learning", "Computer Vision", "Audio Processing", "+1 more"],
  },
  {
    id: "06",
    title: "Healthcare AI Interfaces",
    description: "I create AI-powered healthcare support interfaces for medical imaging, clinical visualization, and diagnostic assistance.",
    Icon: RiHeartPulseLine,
    tags: ["Healthcare", "Medical Imaging", "Diagnostics"],
  },
  {
    id: "07",
    title: "Cloud & Backend AI Systems",
    description: "I build scalable backend systems, REST APIs, deployment workflows, and cloud-ready AI infrastructure using modern tools.",
    Icon: RiCloudLine,
    tags: ["Docker", "Kubernetes", "FastAPI", "+3 more"],
  },
  {
    id: "08",
    title: "Robotics & IoT Systems",
    description: "I develop IoT and robotics systems using Raspberry Pi, ESP32, sensors, and embedded logic for real-time monitoring and automation.",
    Icon: RiCpuLine,
    tags: ["IoT", "Raspberry Pi", "ESP32", "Embedded C"],
  },
];

const ServiceSlider = () => {
  return (
    <div className="w-full h-full py-8 flex items-center justify-center relative">
      {/* Scope CSS local variables for slider opacity and 3D card perspective transitions */}
      <style>{`
        .swiper-slide {
          opacity: 0.35;
          transition: opacity 0.4s ease-in-out;
          perspective: 1000px;
        }
        .swiper-slide-active {
          opacity: 1;
        }
        .service-card {
          transform-style: preserve-3d;
          transition: transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1), border-color 0.4s ease, box-shadow 0.6s ease;
        }
        .service-card:hover {
          transform: translateY(-10px) rotateX(8deg) rotateY(-8deg) translateZ(30px);
          border-color: rgba(241, 48, 36, 0.4);
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.7), 0 0 25px rgba(241, 48, 36, 0.15);
        }
        /* Inner Parallax layers */
        .service-card .layer-1 {
          transform: translateZ(40px);
          transition: transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);
        }
        .service-card .layer-2 {
          transform: translateZ(30px);
          transition: transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);
        }
        .service-card .layer-3 {
          transform: translateZ(20px);
          transition: transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);
        }
        /* Make sure children preserve 3D context */
        .service-card * {
          transform-style: preserve-3d;
        }
      `}</style>

      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 45,
          stretch: 15,
          depth: 180,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination]}
        className="w-full max-w-[950px] h-[480px]"
      >
        {serviceData.map((service, index) => {
          const Icon = service.Icon;
          return (
            <SwiperSlide 
              key={index}
              className="w-[280px] sm:w-[320px] md:w-[350px] shrink-0"
            >
              {/* Card wrapper */}
              <div className="service-card w-full h-[400px] flex flex-col justify-between bg-[#0e1726]/90 border border-white/10 rounded-3xl p-6 md:p-8 backdrop-blur-md relative select-none shadow-2xl shadow-black/40 group">
                
                {/* Active/Focus glow indicator border */}
                <div className="absolute inset-0 rounded-3xl border border-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                {/* Top header: Icon & Display ID */}
                <div className="flex items-center justify-between">
                  {/* Icon container */}
                  <div className="layer-1 w-12 h-12 flex items-center justify-center bg-accent/5 border border-accent/30 rounded-2xl text-accent text-2xl">
                    <Icon />
                  </div>
                  
                  {/* Semi-transparent ID */}
                  <div className="layer-2 text-2xl font-bold text-white/15 font-mono tracking-widest">
                    {service.id}
                  </div>
                </div>

                {/* Main Content */}
                <div className="flex-1 flex flex-col justify-center mt-6">
                  {/* Title */}
                  <h3 className="layer-2 text-xl md:text-2xl font-bold text-white mb-3 text-left">
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="layer-2 text-xs md:text-sm text-white/60 text-left leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Bottom tags */}
                <div className="layer-3 flex flex-wrap gap-1.5 mt-4">
                  {service.tags.map((tag, tagI) => (
                    <span 
                      key={tagI}
                      className="text-[9px] md:text-xs text-white/50 bg-white/5 border border-white/10 px-2.5 py-0.5 rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default ServiceSlider;
