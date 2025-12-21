// src/components/Education.jsx
import { motion as Motion } from "framer-motion";

import jntu from "../assets/education/jntu.png";
import bieap from "../assets/education/bieap.png";
import bseap from "../assets/education/bseap.png";

export default function Education() {
  const edu = [
    {
      year: "2021 - 2025",
      title: "B.Tech • Computer Science & Engineering",
      college: "Prasad V Potluri Siddhartha Institute of Technology [Autonomous]",
      board: "Jawaharlal Nehru Technological University, Kakinada",
      score: "CGPA: 7.16",
      icon: jntu,
    },
    {
      year: "2019 - 2021",
      title: "Intermediate • MPC",
      college: "Sri Bhavishya Educational Academy",
      board: "Board of Intermediate Education, Andhra Pradesh",
      score: "Percentage: 89.2%",
      icon: bieap,
    },
    {
      year: "2018 - 2019",
      title: "High School • SSC",
      college: "Viswabharathi English Medium High School",
      board: "Board of Secondary Education, Andhra Pradesh",
      score: "GPA: 9.3",
      icon: bseap,
    },
  ];

  return (
    <section
      id="education"
      className="
        min-h-screen
        bg-gradient-to-br from-[#020617] via-[#04112a] to-[#0a1d3a]
        text-slate-100
        py-20
      "
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* SECTION HEADING */}
        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12"
        >
          <p className="text-xs tracking-wider uppercase text-cyan-300 font-semibold">
            Education
          </p>

          <h3 className="text-3xl font-bold mt-2">
            My <span className="text-purple-400">Academic Journey</span>
          </h3>
        </Motion.div>

        {/* TIMELINE */}
        <div className="relative border-l border-slate-700 pl-6">
          {edu.map((item, index) => (
            <Motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
                ease: "easeOut",
              }}
              className="mb-12 relative"
            >
              {/* DOT */}
              <div className="absolute -left-[14px] top-3 w-4 h-4 rounded-full bg-purple-400 shadow-[0_0_10px_rgba(168,85,247,0.7)]"></div>

              {/* CARD */}
              <div className="bg-[#0a1628]/60 border border-white/10 rounded-xl p-6 backdrop-blur-md hover:border-purple-500 transition">
                <div className="flex items-center gap-4">
                  <img
                    src={item.icon}
                    alt="board icon"
                    className="w-12 h-12 object-contain"
                  />

                  <div>
                    <h4 className="font-semibold text-lg">{item.title}</h4>
                    <p className="text-sm text-slate-400">{item.college}</p>
                  </div>
                </div>

                <p className="text-sm text-purple-300 mt-3">{item.board}</p>
                <p className="text-sm text-slate-300 mt-1">{item.score}</p>
                <p className="text-xs text-slate-500 mt-2">{item.year}</p>
              </div>
            </Motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
