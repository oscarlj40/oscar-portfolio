import React from "react";
import Test from "./Test"; // Tu componente original de partículas

export default function ParticlesDemo() {
  return (
    <div style={{ height: "100vh", position: "relative" }}>
      <Test />
      <div style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        color: "white",
        textAlign: "center",
        zIndex: 10,
      }}>
        <h1>¡Fondo animado activado!</h1>
        <p>Las partículas se mueven hacia arriba.</p>
      </div>
    </div>
  );
}