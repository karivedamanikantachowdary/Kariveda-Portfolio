import { useState } from "react";
import emailjs from "emailjs-com";
import { motion as Motion } from "framer-motion";

export default function Contact({ desktop = false }) {
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .sendForm(
        "service_1makthe",
        "template_w61z5ag",
        e.target,
        "KczB-22DsBUDRai-o"
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          e.target.reset();
        },
        (err) => {
          console.error("EmailJS error:", err);
          setStatus("Failed to send message. Try again.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="container-desktop mx-auto py-20 text-slate-100"
    >
      {/* ===== Section Heading (UNCHANGED) ===== */}
      <p className="text-xs font-semibold uppercase tracking-wider text-cyan-300">
        Contact
      </p>

      <h3 className="mt-2 text-3xl md:text-4xl font-bold">
        Get in{" "}
        <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          Touch
        </span>
      </h3>

      {/* ===== Contact Card ===== */}
      <Motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        whileHover={{
          boxShadow: "0 0 40px rgba(56,189,248,0.12)",
        }}
        className={`mt-10 rounded-2xl border border-white/10 
          bg-gradient-to-br from-[#020617]/80 to-[#04101a]/60 
          shadow-2xl backdrop-blur-xl ${
            desktop ? "p-10" : "p-6"
          }`}
      >
        {/* Top gradient line */}
        <div className="h-1 w-full rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 mb-6" />

        <p className="text-sm text-slate-300 mb-6">
          Questions, collaborations, or opportunities — feel free to reach out.
        </p>

        <Motion.form
          onSubmit={sendEmail}
          className="space-y-4"
          aria-label="Contact form"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.08,
              },
            },
          }}
        >
          {[
            { name: "name", placeholder: "Your name" },
            { name: "email", placeholder: "you@example.com", type: "email" },
          ].map((field, i) => (
            <Motion.input
              key={i}
              name={field.name}
              type={field.type || "text"}
              required
              placeholder={field.placeholder}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.4 }}
              className="w-full rounded-lg bg-[#020617] border border-white/10 
                px-4 py-3 text-sm text-slate-100 placeholder-slate-500 
                focus:outline-none focus:ring-2 focus:ring-cyan-400/40
                hover:border-cyan-400/40 transition"
            />
          ))}

          <Motion.textarea
            name="message"
            rows="5"
            required
            placeholder="Message..."
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.4 }}
            className="w-full rounded-lg bg-[#020617] border border-white/10 
              px-4 py-3 text-sm text-slate-100 placeholder-slate-500 resize-none
              focus:outline-none focus:ring-2 focus:ring-cyan-400/40
              hover:border-cyan-400/40 transition"
          />

          <Motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="w-full mt-2 inline-flex items-center justify-center gap-2 
              rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 
              px-6 py-3 text-sm font-semibold text-slate-900 
              shadow-lg transition"
          >
            Let's Connect
            <span aria-hidden="true">🚀</span>
          </Motion.button>
        </Motion.form>

        {status && (
          <Motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-4 text-center text-sm font-medium text-emerald-400"
          >
            {status}
          </Motion.p>
        )}
      </Motion.div>
    </section>
  );
}
