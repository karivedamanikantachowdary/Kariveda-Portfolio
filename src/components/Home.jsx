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

export default function StoryStart() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gradient-to-br from-[#020617] via-[#04112a] to-[#0a1d3a] text-slate-100"
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* LEFT — CONTENT */}
        <Motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold mb-3">
            Kariveda Panduranga Manikanta
          </h1>

          <h2 className="text-2xl md:text-3xl font-semibold text-cyan-300 mb-4">
             AI & Computer Vision Developer
          </h2>

          <p className="text-slate-300 text-lg max-w-xl leading-relaxed">
              B.Tech Computer Science graduate specializing in Computer Vision and Machine Learning.
              Built real-time AI systems including Facial Expression Recognition, Hand Gesture Recognition,
              and Air Canvas using Python, OpenCV, MediaPipe, and deep learning models.
              Incoming MS student in Artificial Intelligence, focused on applied AI and research-driven problem solving.
          </p>

          <br/>

          {/* LINKS */}
          <div className="flex flex-wrap gap-5 text-2xl text-slate-300 mb-8">
            <a href="https://github.com/karivedamanikantachowdary" target="_blank" rel="noreferrer">
              <FaGithub className="hover:text-white transition" />
            </a>

            <a href="https://linkedin.com/in/kariveda-panduranga-manikanta-743422266" target="_blank" rel="noreferrer">
              <FaLinkedin className="hover:text-white transition" />
            </a>

            <a href="https://www.instagram.com/kariveda_manikanta_chowdary" target="_blank" rel="noreferrer">
              <FaInstagram className="hover:text-white transition" />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=karivedamanikantachowdary@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <FaEnvelope className="hover:text-white transition" />
            </a>

            <a href="https://leetcode.com/karivedamanikantachowdary" target="_blank" rel="noreferrer">
              <SiLeetcode className="hover:text-white transition" />
            </a>

            <a href="https://www.hackerrank.com/manikanta_577" target="_blank" rel="noreferrer">
              <FaHackerrank className="hover:text-white transition" />
            </a>

            <a href="https://www.codechef.com/users/manikanta_577" target="_blank" rel="noreferrer">
              <SiCodechef className="hover:text-white transition" />
            </a>

            <a href="https://www.geeksforgeeks.org/profile/karivedamanikantachowdary" target="_blank" rel="noreferrer">
              <SiGeeksforgeeks className="hover:text-white transition" />
            </a>
          </div>

        </Motion.div>

        {/* RIGHT — IMAGE */}
        <Motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="hidden lg:flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 blur-xl opacity-30" />
            <img
              src={avatar}
              alt="Profile"
              className="relative w-72 h-72 rounded-full object-cover border border-white/10 shadow-2xl"
            />
          </div>
        </Motion.div>

      </div>
    </section>
  );
}
