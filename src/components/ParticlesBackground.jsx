import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function ParticlesBackground() {
  const init = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      init={init}
      className="fixed inset-0 -z-10"
      options={{
        background: { color: "transparent" },
        fpsLimit: 60,
        particles: {
          number: { value: 45 },
          size: { value: 2 },
          move: { speed: 0.8 },
          opacity: { value: 0.6 },
          color: { value: "#8b5cf6" }, // violet
        },
      }}
    />
  );
}
