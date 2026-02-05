import { motion as Motion } from "framer-motion";
import avatar2 from "../assets/avatar2.jpg";

export default function About() {
  return (
    <section
      id="about"
      className="bg-gradient-to-br from-[#020617] via-[#04112a] to-[#0a1d3a] text-slate-100"
    >
      <div className="container-desktop mx-auto px-6 sm:px-8 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* TEXT */}
        <Motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-cyan-400 font-semibold mb-2">About</p>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Who I Am</h2>

          <div className="text-slate-300 text-lg leading-relaxed space-y-6 max-w-xl">
            <p>
              Computer Science graduate with strong fundamentals in AI, Machine
              Learning, and Computer Vision.
            </p>
            <p>
              Built real-time projects like Facial Expression Recognition, Hand
              Gesture Recognition, and Air Canvas.
            </p>
            <p>
              Preparing for a Master’s degree in Artificial Intelligence focused
              on applied research.
            </p>
          </div>
        </Motion.div>

        {/* IMAGE */}
        <Motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mt-10 lg:mt-0"
        >
          <img
            src={avatar2}
            alt="About"
            className="w-64 sm:w-72 lg:w-80 rounded-xl object-cover shadow-2xl"
          />
        </Motion.div>

      </div>
    </section>
  );
}
