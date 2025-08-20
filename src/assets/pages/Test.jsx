import React from 'react';
import { Particles } from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim'; // Más ligero que loadFull

export default function Test() {
  const particlesInit = async (engine) => {
    await loadSlim(engine); // Usa loadSlim para mejor rendimiento
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      zIndex: -1,
      backgroundColor: '#121212' // Fondo de respaldo
    }}>
      <Particles
        init={particlesInit}
        options={{
          particles: {
            number: { value: 80 },
            color: { value: '#ffffff' },
            shape: { type: 'square' },
            opacity: { value: 0.6 },
            size: { 
              value: 8,
              random: { enable: true, minimumValue: 4 } 
            },
            move: {
              enable: true,
              speed: 0.5,
              direction: 'top'
            }
          }
        }}
      />
    </div>
  );
}