// src/components/PortfolioMain.jsx
import Contact from "./Contact";

export default function PortfolioMain() {
  return (
    <section id="portfolio-main" className="py-20 bg-[#020617]">
      <div className="container-desktop mx-auto grid grid-cols-12 gap-8 items-start">
        <div className="col-span-12 lg:col-span-8">
          <p className="text-xs font-medium uppercase tracking-wider text-cyan-300">Portfolio · Desktop</p>
          <h1 className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight">
            Building intelligent products — <span className="text-cyan-400">AI,</span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-violet-500">
              Computer Vision & Web
            </span>
          </h1>

          <p className="mt-6 text-lg text-slate-300 max-w-2xl">
            CSE grad focused on AI/ML, computer vision and full-stack applications.
          </p>

          <h3 className="mt-12 text-2xl font-semibold">Selected Projects</h3>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-xl p-6 border border-white/8">
              <div className="font-semibold text-lg">Facial Expression Recognition</div>
              <div className="text-sm text-slate-300 mt-2">
                CNN-based model for classifying human emotions from facial images.
              </div>
            </div>
            <div className="rounded-xl p-6 border border-white/8">
              <div className="font-semibold text-lg">Hand Gesture Recognition</div>
              <div className="text-sm text-slate-300 mt-2">
                Real-time gesture detection using MediaPipe & deep learning.
              </div>
            </div>
          </div>
        </div>

        <aside className="col-span-12 lg:col-span-4">
          <div className="rounded-xl p-6 border border-white/10 bg-[#021021]/50 shadow-xl sticky top-24">
            <div className="h-1 w-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 rounded-full mb-4" />
            <h4 className="text-xl font-semibold mb-2">Get in touch</h4>
            <p className="text-sm text-slate-300 mb-4">Questions, collabs or offers — send a message.</p>

            <Contact desktop />
          </div>
        </aside>
      </div>

      <footer className="border-t border-white/5 py-8 mt-8">
        <div className="container-desktop mx-auto text-center text-slate-500 text-sm">
          © {new Date().getFullYear()} Kariveda Pandu Ranga Manikanta · Built with React & Tailwind
        </div>
      </footer>
    </section>
  );
}
