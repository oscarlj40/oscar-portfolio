import React, { useState, useRef, useEffect } from "react";
import '../styles/Nav.css'; // Usamos tus estilos actuales

// =================== HOOK PARA DIMENSIONES ===================
const useDimensions = (ref) => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (ref.current) {
      const { offsetWidth, offsetHeight } = ref.current;
      setDimensions({ width: offsetWidth, height: offsetHeight });
    }
  }, [ref]);

  return dimensions;
};

// =================== BOTÓN DE TOGGLE ===================
const MenuToggle = ({ toggle }) => (
  <button className="menu-toggle" onClick={toggle}>
    <span className="bar"></span>
    <span className="bar"></span>
    <span className="bar"></span>
  </button>
);

// =================== NAVBAR ===================
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <nav className="navbar" ref={containerRef}>
      <a href="#about-me" className="logo">
        <div className="cycle">O<span className="text-cycle">LJ</span></div>
      </a>

      {/* Botón para móvil */}
      <MenuToggle toggle={() => setIsOpen(!isOpen)} />

      {/* Menú */}
      <ul
        className={`nav-list ${isOpen ? "open" : ""}`}
        style={{
          top: height, // Para que aparezca debajo de la navbar
        }}
      >
        <li><a href="#about-me" className="nav-style">About me</a></li>
        <li><a href="#skills" className="nav-style">Skills</a></li>
        <li><a href="#projects" className="nav-style">Projects</a></li>
        <li><a href="#education" className="nav-style">Education</a></li>
        <li><a href="#experience" className="nav-style">Experience</a></li>
        <li><a href="#contact" className="nav-style">Contact</a></li>
      </ul>
    </nav>
  );
}
