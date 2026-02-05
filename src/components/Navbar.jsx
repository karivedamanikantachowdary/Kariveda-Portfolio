// src/components/Navbar.jsx
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#020617]/80 backdrop-blur-md">
      <div className="container-desktop mx-auto px-6 sm:px-8 py-4 flex items-center justify-between">

        {/* LOGO */}
        <button
          onClick={() => scrollTo("home")}
          className="text-2xl font-extrabold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent hover:opacity-80 transition"
        >
          Portfolio
        </button>

        {/* DESKTOP NAV */}
        <div className="hidden lg:flex items-center gap-8 text-slate-200 font-medium">
          <button onClick={() => scrollTo("home")} className="hover:text-cyan-400 transition">
            Home
          </button>
          <button onClick={() => scrollTo("about")} className="hover:text-cyan-400 transition">
            About
          </button>
          <button onClick={() => scrollTo("skills")} className="hover:text-cyan-400 transition">
            Skills
          </button>
          <button onClick={() => scrollTo("projects")} className="hover:text-cyan-400 transition">
            Projects
          </button>
          <button onClick={() => scrollTo("contact")} className="hover:text-cyan-400 transition">
            Contact
          </button>

          <a
            href="/Resume.pdf"
            download
            className="
              px-5 py-2 rounded-full
              bg-gradient-to-r from-purple-500 to-cyan-500
              text-white font-semibold
              hover:scale-105 transition
            "
          >
            Download Resume
          </a>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="lg:hidden text-slate-200 text-3xl"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="lg:hidden bg-[#020617]/95 backdrop-blur-md border-t border-white/10">
          <div className="flex flex-col px-6 py-6 gap-5 text-slate-200 font-medium">
            <button onClick={() => scrollTo("home")} className="hover:text-cyan-400 text-left">
              Home
            </button>
            <button onClick={() => scrollTo("about")} className="hover:text-cyan-400 text-left">
              About
            </button>
            <button onClick={() => scrollTo("skills")} className="hover:text-cyan-400 text-left">
              Skills
            </button>
            <button onClick={() => scrollTo("projects")} className="hover:text-cyan-400 text-left">
              Projects
            </button>
            <button onClick={() => scrollTo("contact")} className="hover:text-cyan-400 text-left">
              Contact
            </button>

            <a
              href="/Resume.pdf"
              download
              className="
                mt-3
                inline-block text-center
                px-5 py-3 rounded-full
                bg-gradient-to-r from-purple-500 to-cyan-500
                text-white font-semibold
              "
            >
              Download Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
