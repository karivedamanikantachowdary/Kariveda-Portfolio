import { useEffect, useState } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";

import News1 from "../assets/achievements/NewsArticle1.png";
import News2 from "../assets/achievements/NewsArticle2.png";
import Drdo from "../assets/achievements/drdo.png";
import Cert from "../assets/achievements/DrdoCertificate.png";

const achievements = [
  {
    title: "Featured in Eenadu Newspaper",
    desc: "Low-cost automatic hand sanitizer system highlighted for innovation during COVID-19.",
    image: News2,
  },
  {
    title: "Featured in Sakshi Newspaper",
    desc: "Project recognized for social impact and public hygiene awareness.",
    image: News1,
  },
  {
    title: "DRDO Internship",
    desc: "Worked on Computer Vision research projects at DRDO Hyderabad.",
    image: Drdo,
  },
  {
    title: "DRDO Certification",
    desc: "Official certification from DRDO – Ministry of Defence.",
    image: Cert,
  },
];

export default function Achievements() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % achievements.length), 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="achievements" className="container-desktop mx-auto px-6 sm:px-8 py-20 text-slate-100">

      <p className="text-xs uppercase tracking-wider text-cyan-300">Achievements</p>
      <h3 className="text-3xl md:text-4xl font-bold mt-2 mb-12">
        Career <span className="text-purple-400">Milestones</span>
      </h3>

      <AnimatePresence mode="wait">
        <Motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 bg-[#0a1628]/60 border border-white/10 rounded-2xl p-6 sm:p-10"
        >

          {/* IMAGE */}
          <div className="flex justify-center">
            <img
              src={achievements[index].image}
              alt={achievements[index].title}
              className="w-full max-w-md object-contain rounded-xl"
            />
          </div>

          {/* TEXT */}
          <div className="flex flex-col justify-center">
            <h4 className="text-2xl font-semibold mb-4">{achievements[index].title}</h4>
            <p className="text-slate-300 text-lg">{achievements[index].desc}</p>
          </div>

        </Motion.div>
      </AnimatePresence>

    </section>
  );
}
