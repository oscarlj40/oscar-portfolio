import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function Test() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <div style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      zIndex: -1, // Asegura que esté detrás de todo
    }}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false }, // ¡Importante! Desactívalo
          background: {
            color: "#121212",
          },
          particles: {
            number: { value: 80 },
            color: { value: "#ffffff" },
            shape: { type: "square" },
            opacity: { value: 0.6 },
            size: { value: 10, random: { enable: true, minimumValue: 6 } },
            move: {
              enable: true,
              speed: 1,
              direction: "top",
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
}