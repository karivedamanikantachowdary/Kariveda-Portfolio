// src/components/Skills.jsx
import { motion as Motion } from "framer-motion";

export default function Skills() {
  const skills = [
    {
      title: "Programming Language",
      items: ["Java", "JavaScript", "Python [including Libraries like Numpy, Pandas and Matplotlib]"],
    },
    {
      title: "Databases",
      items: ["Oracle", "MySQL"],
    },
    {
      title: "Web Technologies",
      items: ["HTML", "CSS", "React.js"],
    },
    {
      title: "Version Control",
      items: ["Git", "GitHub"],
    },
  ];

  return (
    <section
      id="skills"
      className="container-desktop mx-auto py-16 text-slate-100"
    >
      {/* Section label (UNCHANGED) */}
      <p className="text-xs tracking-wider uppercase text-cyan-300 font-semibold">
        Skills
      </p>

      {/* Main heading (UNCHANGED) */}
      <h3 className="text-3xl font-bold mt-2 mb-10">
        My <span className="text-purple-400">Skills</span>
      </h3>

      {/* Cards */}
      <Motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-100px" }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.12,
            },
          },
        }}
      >
        {skills.map((skill, index) => (
          <Motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            whileHover={{ y: -6 }}
            className="bg-[#0a1628]/60 border border-white/10 rounded-2xl p-8
                       hover:border-purple-500
                       hover:shadow-[0_0_30px_rgba(168,85,247,0.25)]
                       transition-all duration-300"
          >
            <h4 className="text-xl font-semibold mb-4">
              {skill.title}
            </h4>

            <ul className="space-y-2 text-slate-300">
              {skill.items.map((item, i) => (
                <li key={i}>• {item}</li>
              ))}
            </ul>
          </Motion.div>
        ))}
      </Motion.div>
    </section>
  );
}
