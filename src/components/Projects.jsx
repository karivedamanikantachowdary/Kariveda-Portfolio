// src/components/Projects.jsx
import { motion as Motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

import facial from "../assets/facial.png";
import gesture from "../assets/handgesture.png";
import healing from "../assets/healing-nexus.png";
import iot from "../assets/iot-hygiene.png";
import hope from "../assets/hope-harbor.png";
import air from "../assets/air-canvas.png";
import nice from "../assets/nice-computers.png";
import garage from "../assets/garage-management.png";
import portfolio from "../assets/portfolio.png";

export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      desc: "Responsive portfolio website showcasing projects and skills.",
      tech: "React • Tailwind CSS",
      img: portfolio,
      link: "https://github.com/karivedamanikantachowdary",
    },
    {
      title: "Air Canvas",
      desc: "Virtual drawing canvas controlled using hand gestures.",
      tech: "Python • OpenCV • Computer Vision",
      img: air,
      link: "https://github.com/karivedamanikantachowdary/Air-Canvas",
    },
    {
      title: "Facial Expression Recognition",
      desc: "CNN-based model to classify human emotions.",
      tech: "Python • OpenCV • Deep Learning",
      img: facial,
      link: "https://github.com/karivedamanikantachowdary/Facial-expression-recognition",
    },
    {
      title: "Hand Gesture Recognition",
      desc: "Real-time gesture detection using MediaPipe.",
      tech: "Python • MediaPipe • ML",
      img: gesture,
      link: "https://github.com/karivedamanikantachowdary/Hand-gesture-recognition",
    },
    {
      title: "Garage Management System",
      desc: "Salesforce-based garage operations system.",
      tech: "Salesforce • LWC • Automation",
      img: garage,
      link: "https://github.com/karivedamanikantachowdary",
    },
    {
      title: "Hope Harbor",
      desc: "MERN platform for community support.",
      tech: "MongoDB • Express • React • Node",
      img: hope,
      link: "https://github.com/karivedamanikantachowdary/Hope-Harbor",
    },
    {
      title: "Healing Nexus",
      desc: "Healthcare-focused web application.",
      tech: "Web Application Development",
      img: healing,
      link: "https://github.com/karivedamanikantachowdary/HEALING-NEXUS",
    },
    {
      title: "Nice Computers Website",
      desc: "Responsive retail business website.",
      tech: "HTML • CSS • JavaScript",
      img: nice,
      link: "https://nice-computers-website.netlify.app",
    },
    {
      title: "IoT – Hand Hygiene System",
      desc: "Sensor-based hygiene monitoring system.",
      tech: "IoT • Embedded Systems",
      img: iot,
      link: "https://github.com/karivedamanikantachowdary/Hand-Hygiene-System",
    },
  ];

  return (
    <section
      id="projects"
      className="
        min-h-screen
        bg-gradient-to-br from-[#020617] via-[#04112a] to-[#0a1d3a]
        text-slate-100
        py-20
      "
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12"
        >
          <p className="text-xs font-medium uppercase tracking-wider text-cyan-300">
            Projects
          </p>
          <h3 className="text-3xl font-bold mt-2">
            My <span className="text-purple-400">Projects</span>
          </h3>
        </Motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <ProjectCard
              key={i}
              index={i}
              title={p.title}
              subtitle={p.desc}
              tech={p.tech}
              image={p.img}
              link={p.link}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
