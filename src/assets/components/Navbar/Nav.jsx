import React, { useState } from "react";
import '../../styles/Nav.css';

function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar">
            <a href="#about-me" className="logo">
                <div className="cycle">O<span className="text-cycle">LJ</span></div>
            </a>
            
            {/* Botón para móviles */}
            <button 
                className="mobile-menu-button"
                onClick={() => setIsOpen(!isOpen)}
            >
                ☰
            </button>
            
            <ul className={`nav-list ${isOpen ? 'open' : ''}`}>
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

export default Nav;

/*
import React from "react";
import '../../styles/Nav.css';

function Nav() {
    return (
        <nav className="navbar">
            <a href="#about-me" className="logo">
                <div className="cycle">O<span className="text-cycle">LJ</span></div>
            </a>
                <ul className="nav-list">
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

export default Nav; 
*/