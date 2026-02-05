import avatar from "../assets/avatar.jpg";
import { motion as Motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaHackerrank, FaInstagram } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks, SiCodechef } from "react-icons/si";

export default function StoryStart() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gradient-to-br from-[#020617] via-[#04112a] to-[#0a1d3a] text-slate-100"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* LEFT */}
        <Motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold mb-3">
            Kariveda Pandu Ranga Manikanta
          </h1>

          <h2 className="text-2xl md:text-3xl font-semibold text-cyan-300 mb-4">
            AI & Computer Vision Developer
          </h2>

          <p className="text-slate-300 text-lg max-w-xl leading-relaxed">
            B.Tech Computer Science graduate specializing in Computer Vision and Machine Learning.
          </p>

          <div className="flex flex-wrap gap-5 text-2xl text-slate-300 mt-6">
            <FaGithub />
            <FaLinkedin />
            <FaInstagram />
            <FaEnvelope />
            <SiLeetcode />
            <FaHackerrank />
            <SiCodechef />
            <SiGeeksforgeeks />
          </div>
        </Motion.div>

        {/* RIGHT — IMAGE (NOW MOBILE SAFE) */}
        <Motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex justify-center"
        >
          <img
            src={avatar}
            alt="Profile"
            className="w-40 h-40 sm:w-56 sm:h-56 lg:w-72 lg:h-72 rounded-full object-cover border border-white/10 shadow-2xl"
          />
        </Motion.div>

      </div>
    </section>
  );
}
