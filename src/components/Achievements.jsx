// src/components/Achievements.jsx
import { useEffect, useState } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";

import NewsArticle2 from "../assets/achievements/NewsArticle2.png";
import NewsArticle1 from "../assets/achievements/NewsArticle1.png";
import DrdoCert from "../assets/achievements/DrdoCertificate.png";
import DrdoIntern from "../assets/achievements/drdo.png";

const achievements = [
  {
    title: "Media Recognition – Featured in Eenadu Newspaper",
    desc: "During the COVID-19 pandemic, a low-cost automatic hand sanitizer system developed as part of an academic initiative was featured in Eenadu newspaper. The article highlighted the engineering design and affordability of the solution, emphasizing how students successfully built a functional, touch-free sanitization device using minimal resources. The coverage focused on innovation, prototype development, and the role of young engineers in addressing real-world problems through practical design.",
    image: NewsArticle2,
  },

  {
    title: "Media Recognition – Featured in Sakshi Newspaper",
    desc: "The same automatic hand sanitizer system gained further recognition through coverage in Sakshi newspaper, which emphasized its social impact during the COVID-19 crisis. The article showcased real-time demonstrations of the device in public settings, highlighting its usefulness in promoting hygiene awareness and reducing physical contact. This recognition underlined the project’s contribution to public health and its relevance during a critical period.",
    image: NewsArticle1,
  },

  {
    title: "Research Exposure – DRDO Internship",
    desc: "Completed a research-oriented internship at the Defence Research & Development Organisation (DRDO), Young Scientist Laboratory – Asymmetric Technologies (DYS-AT), Hyderabad. Worked on applied Computer Vision systems including Facial Expression Recognition and Hand Gesture Recognition using Python, OpenCV, MediaPipe, and deep learning techniques. Gained hands-on experience in research-driven problem solving, real-time system development, and defense-grade technical workflows.",
    image: DrdoIntern,
  },
  {
    title: "Official Certification & Academic Recognition",
    desc: "Formally certified by DRDO – Ministry of Defence, Government of India, for successful completion of a technical research internship. Additionally earned multiple industry-recognized certifications including AWS Academy Cloud Foundations & Machine Learning, HackerRank (Java & Python), AICTE Virtual Internship programs, and Cloud Foundations. These certifications validate strong fundamentals in software development, cloud computing, and applied AI.",
    image: DrdoCert,
  },
];


export default function Achievements() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % achievements.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="achievements"
      className="container-desktop mx-auto py-24 text-slate-100"
    >
      {/* Heading */}
      <p className="text-xs uppercase tracking-wider text-cyan-300 font-semibold">
        Achievements
      </p>

      <h3 className="text-3xl md:text-4xl font-bold mt-2 mb-14">
        Career <span className="text-purple-400">Milestones</span>
      </h3>

      {/* Slider */}
      <div className="relative w-full">
        <AnimatePresence mode="wait">
          <Motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="
              grid grid-cols-1 lg:grid-cols-2 gap-12
              items-center
              bg-[#0a1628]/60
              border border-white/10
              rounded-2xl
              p-10
              backdrop-blur-md
              shadow-[0_0_40px_rgba(0,0,0,0.4)]
            "
          >
            {/* IMAGE — FIXED SIZE, NO LAYOUT SHIFT */}
            <div className="flex justify-center">
              <div
                className="
                  w-full
                  max-w-[520px]
                  h-[520px]
                  flex
                  items-center
                  justify-center
                  rounded-xl
                  bg-[#020617]/60
                "
              >
                <Motion.img
                    key={achievements[index].image}
                    src={achievements[index].image}
                    alt={achievements[index].title}
                    initial={{ scale: 1.05 }}
                    animate={{ scale: 1.15 }}
                    transition={{ duration: 6, ease: "easeOut" }}
                    className="
                        w-full
                        h-full
                        object-cover
                        rounded-xl
                    "
                    style={{
                        objectPosition: "center 35%",
                    }}
                />

              </div>
            </div>

            {/* CONTENT — MATCHES IMAGE HEIGHT */}
            <div className="flex flex-col justify-center h-full">
              <h4 className="text-2xl font-semibold mb-4">
                {achievements[index].title}
              </h4>

              <p className="text-slate-300 text-lg leading-relaxed max-w-xl">
                {achievements[index].desc}
              </p>
            </div>
          </Motion.div>
        </AnimatePresence>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-8">
          {achievements.map((_, i) => (
            <span
              key={i}
              className={`h-2.5 w-2.5 rounded-full transition-all ${
                i === index
                  ? "bg-cyan-400 scale-110"
                  : "bg-slate-500"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
