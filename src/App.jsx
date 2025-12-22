import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Achievements from "./components/Achievements";


import useScrollSection from "./hooks/useScrollSection";
import Projects from "./components/Projects";
import Education from "./components/Education";
import ParticlesBackground from "./components/ParticlesBackground";
import Certifications from "./components/Certifications";


export default function App() {
  const activeSection = useScrollSection([
    "story-start",
    "story-education",
    "story-skills",
    "story-contact",
  ]);

  // TEMP DEBUG (remove later)
  console.log("Active section:", activeSection);

  return (
    <>
      <ParticlesBackground />
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Education />
      <Certifications />
      <Achievements />
      <Projects />
      <section id="story-contact">
  <Contact desktop />
</section>
    </>
  );
}
