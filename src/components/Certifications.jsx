import { motion as Motion } from "framer-motion";

export default function Certifications() {
  const certifications = [
    {
      org: "Infosys Spring Board",
      items: ["C++", "Python", "Blockchain"],
    },
    {
      org: "Spoken Tutorial (IIT Bombay)",
      items: ["Arduino", "PHP & MySQL", "Android (Kotlin)", "RDBMS PostgreSQL"],
    },
    {
      org: "HackerRank",
      items: ["Java (Basic)", "Python (Basic)"],
    },
    {
      org: "Great Learning Academy",
      items: [
        "UI/UX",
        "HTML & CSS",
        "Data Structures in C",
        "Game Development using JavaScript",
      ],
    },
    {
      org: "AWS Academy (Credly)",
      items: ["Cloud Foundations", "Machine Learning Foundations"],
    },
    {
      org: "Cisco (Credly)",
      items: ["Introduction to Cybersecurity", "Cybersecurity Essentials"],
    },
    {
      org: "AICTE Virtual Internship",
      items: [
        "Google Android Developer",
        "Intelligent Automation",
        "AIML",
        "Zscaler Zero Trust Cloud Security",
      ],
    },
    {
      org: "Extra Curriculuar Activities",
      items: [
        "Participated in Unstop Events: TVS [e.p.i.c 5], Coca-Cola, Flipkart",
        "Workshop: Attended an IOT workshop conducted by the Department of CSE in PVPSIT in UI-PATH’s Robotics Process Automation workshop.",
        "Participated in College Events: National Service Scheme, Member of Innovation Club, Yoga.", "Photoshop and Photo-mixing.",
      ],
    },
  ];

  return (
    <section
      id="certifications"
      className="container-desktop mx-auto py-16 text-slate-100"
    >
      {/* Section label */}
      <p className="text-xs tracking-wider uppercase text-cyan-300 font-semibold">
        Certifications
      </p>

      {/* Heading */}
      <h3 className="text-3xl font-bold mt-2 mb-10">
        Professional <span className="text-purple-400"><a target='_blank' href="https://github.com/karivedamanikantachowdary/achievements/tree/main/Certificates">Certifications</a></span>
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
            transition: { staggerChildren: 0.12 },
          },
        }}
      >
        {certifications.map((cert, index) => (
          <Motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            whileHover={{ y: -5 }}
            className="bg-[#0a1628]/60 border border-white/10 rounded-2xl p-7
                       hover:border-purple-500
                       hover:shadow-[0_0_25px_rgba(168,85,247,0.25)]
                       transition-all duration-300"
          >
            <h4 className="text-lg font-semibold mb-3 text-slate-100">
              {cert.org}
            </h4>

            <ul className="space-y-2 text-sm text-slate-300">
              {cert.items.map((item, i) => (
                <li key={i}>• {item}</li>
              ))}
            </ul>
          </Motion.div>
        ))}
      </Motion.div>
    </section>
  );
}
