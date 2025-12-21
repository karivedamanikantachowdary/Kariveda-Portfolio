import { FiExternalLink } from "react-icons/fi";
import { motion as Motion } from "framer-motion";

export default function ProjectCard({
  title,
  subtitle,
  tech,
  image,
  link,
  index,
}) {
  return (
    <Motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: "easeOut",
      }}
    >
      <div
        className="
          group bg-[#020617]/80 rounded-2xl overflow-hidden
          border border-white/10
          transition-all duration-300
          hover:border-cyan-400/40
          hover:shadow-[0_0_25px_rgba(34,211,238,0.15)]
        "
        style={{ transformStyle: "preserve-3d" }}
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;

          const rotateX = (y - rect.height / 2) / 18;
          const rotateY = (rect.width / 2 - x) / 18;

          e.currentTarget.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "rotateX(0deg) rotateY(0deg)";
        }}
      >
        {/* Fake browser bar */}
        <div className="flex items-center gap-2 px-4 py-2 bg-[#020617]">
          <span className="w-3 h-3 rounded-full bg-red-400"></span>
          <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
          <span className="w-3 h-3 rounded-full bg-green-400"></span>
        </div>

        {/* Image */}
        <div className="relative">
          <img
            src={image}
            alt={title}
            className="w-full h-64 object-cover"
          />

          {/* Professional overlay */}
          <div
            className="
              absolute inset-0
              bg-[#020617]/75
              backdrop-blur-sm
              opacity-0
              group-hover:opacity-100
              transition-all duration-300
              flex items-center justify-center
            "
          >
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              className="
                bg-white/90 p-4 rounded-full
                hover:scale-110
                hover:bg-cyan-300
                transition-all
                shadow-lg
              "
            >
              <FiExternalLink className="text-[#020617]" size={22} />
            </a>
          </div>
        </div>

        {/* Text */}
        <div className="p-5 text-white">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm text-slate-400 mt-1">{subtitle}</p>
          <p className="mt-2 text-xs text-cyan-400">{tech}</p>
        </div>
      </div>
    </Motion.div>
  );
}
