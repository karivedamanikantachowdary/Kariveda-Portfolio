export default function Navbar() {
  const scrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#020617]/80 backdrop-blur-md">
      <div className="container-desktop mx-auto flex items-center justify-between py-4">

        {/* LOGO */}
        <button
          onClick={() => scrollTo("home")}
          className="text-2xl font-extrabold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent hover:opacity-80 transition"
        >
          Portfolio
        </button>

        {/* NAV LINKS */}
        <div className="flex items-center gap-8 text-slate-200 font-medium">
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

          {/* DOWNLOAD RESUME */}
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
      </div>
    </nav>
    
  );
}
