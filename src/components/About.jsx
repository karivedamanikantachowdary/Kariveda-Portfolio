import { motion as Motion } from "framer-motion";
import avatar2 from "../assets/avatar2.jpg";

export default function About() {
  return (
    <section
      id="about"
      className="
        min-h-screen
        flex items-center
        bg-gradient-to-br from-[#020617] via-[#04112a] to-[#0a1d3a]
        text-slate-100
      "
    >
      <div className="container-desktop mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* LEFT — TEXT */}
        <Motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="text-cyan-400 font-semibold tracking-wide mb-2">
            About
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Who I Am
          </h2>

          <div className="text-slate-300 text-lg leading-relaxed space-y-6 max-w-xl">
            <p>
              I am a Computer Science graduate with a strong academic and
              practical foundation in Artificial Intelligence, Machine Learning,
              and Computer Vision. My interest lies in building intelligent
              systems that can understand and interact with the real world
              through data and vision.
            </p>

            <p>
              During my undergraduate studies, I worked extensively on real-time
              Computer Vision projects such as facial expression recognition,
              hand gesture recognition, and Air Canvas using Python, OpenCV,
              MediaPipe, and deep learning models.
            </p>

            <p>
              I am preparing to pursue a Master’s degree in Artificial
              Intelligence, with the goal of deepening my research capabilities
              and applying AI techniques to solve challenging real-world
              problems.
            </p>
          </div>
        </Motion.div>

        {/* RIGHT — IMAGE */}
        <Motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="hidden lg:flex justify-center"
        >
          <div className="relative">
            {/* glow */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400 to-purple-500 blur-xl opacity-20" />

            <img
              src={avatar2}
              alt="About me"
              className="
                relative
                w-80
                rounded-xl
                object-cover
                border border-white/10
                shadow-2xl
              "
            />
          </div>
        </Motion.div>

      </div>
    </section>
  );
}
