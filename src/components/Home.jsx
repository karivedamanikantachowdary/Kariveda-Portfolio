import avatar from "../assets/avatar.jpg";
import { motion as Motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaHackerrank,
  FaInstagram,
} from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks, SiCodechef } from "react-icons/si";

export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gradient-to-br from-[#020617] via-[#04112a] to-[#0a1d3a] text-slate-100"
    >
      <div className="container-desktop mx-auto px-6 sm:px-8 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* TEXT */}
        <Motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold mb-3">
            Kariveda Pandu Ranga Manikanta
          </h1>

          <h2 className="text-2xl md:text-3xl font-semibold text-cyan-300 mb-4">
            AI & Computer Vision Developer
          </h2>

          <p className="text-slate-300 text-lg leading-relaxed max-w-xl">
            B.Tech Computer Science graduate specializing in Computer Vision and
            Machine Learning. Built real-time AI systems including Facial
            Expression Recognition, Hand Gesture Recognition, and Air Canvas.
          </p>

          {/* SOCIAL LINKS */}
          <div className="flex flex-wrap gap-5 text-2xl text-slate-300 mt-6">
            <a href="https://github.com/karivedamanikantachowdary" target="_blank"><FaGithub /></a>
            <a href="https://linkedin.com/in/kariveda-panduranga-manikanta-743422266" target="_blank"><FaLinkedin /></a>
            <a href="https://www.instagram.com/kariveda_manikanta_chowdary" target="_blank"><FaInstagram /></a>
            <a href="mailto:karivedamanikantachowdary@gmail.com"><FaEnvelope /></a>
            <a href="https://leetcode.com/karivedamanikantachowdary" target="_blank"><SiLeetcode /></a>
            <a href="https://www.hackerrank.com/manikanta_577" target="_blank"><FaHackerrank /></a>
            <a href="https://www.codechef.com/users/manikanta_577" target="_blank"><SiCodechef /></a>
            <a href="https://www.geeksforgeeks.org/profile/karivedamanikantachowdary" target="_blank"><SiGeeksforgeeks /></a>
          </div>
        </Motion.div>

        {/* IMAGE */}
        <Motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex justify-center mt-10 lg:mt-0"
        >
          <img
            src={avatar}
            alt="Profile"
            className="w-60 h-60 sm:w-72 sm:h-72 rounded-full object-cover border border-white/10 shadow-2xl"
          />
        </Motion.div>

      </div>
    </section>
  );
}
