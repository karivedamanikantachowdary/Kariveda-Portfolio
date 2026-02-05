import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#020617]/80 backdrop-blur-md">
      <div className="container-desktop mx-auto px-6 sm:px-8 py-4 flex justify-between items-center">

        <button onClick={() => scrollTo("home")} className="text-2xl font-bold text-cyan-400">
          Portfolio
        </button>

        {/* DESKTOP */}
        <div className="hidden lg:flex gap-8">
          {["home","about","skills","projects","contact"].map((i) => (
            <button key={i} onClick={() => scrollTo(i)} className="hover:text-cyan-400">
              {i.charAt(0).toUpperCase()+i.slice(1)}
            </button>
          ))}
        </div>

        {/* MOBILE */}
        <button className="lg:hidden" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-[#020617] px-6 py-4 space-y-4">
          {["home","about","skills","projects","contact"].map((i) => (
            <button key={i} onClick={() => scrollTo(i)} className="block w-full text-left">
              {i.toUpperCase()}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
