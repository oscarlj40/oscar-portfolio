import React from "react";
import { motion } from "framer-motion";
import "../styles/Skills.css";
import c from '../images/c.png';
import c1 from '../images/c1.png';
import c2 from '../images/c2.png';
import css from '../images/css.png';
import flask from '../images/flask.png';
import git from '../images/git.png';
import html1 from '../images/html1.png';
import javascript from '../images/javascript.png';
import mysql from '../images/mysql.png';
import postgresql from '../images/postgresql.png';
import python from '../images/python.png';
import react from '../images/react.svg';
import redhat1 from '../images/red-hat.svg';

function Skills() {
    const icons1 = [
        { src: python, alt: "Python" },
        { src: javascript, alt: "JavaScript" },
        { src: html1, alt: "HTML" },
        { src: css, alt: "CSS" },
        { src: c, alt: "C" },
        { src: c1, alt: "C1" },
        { src: c2, alt: "C2" },
        { src: react, alt: "React" },
        { src: mysql, alt: "MySQL" },
    ];
    const icons2 = [
        { src: redhat1, alt: "Red-Hat-Linux" },
        { src: git, alt: "Git" },
    ];

    return (
        <>
        <section id="skills" className="section-skills">
        <main className="skills-section">
            <h1 style={{ display: 'flex'}}>Skills & Technologies</h1>
            <div className="icon-section">
                <ul className="icon-row centered">
                    {icons1.map((icon, index) => (
                        <motion.img
                            key={index}
                            src={icon.src}
                            alt={icon.alt}
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.8 }}
                            className="icons"
                        />
                    ))}
                </ul>
                <ul className="icon-row centered">
                        <motion.img
                            src={postgresql}
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.8 }}
                            className="cycle2"
                        />
                        <motion.img
                            src={flask}
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.8 }}
                            className="cycle2"
                        />
                    {icons2.map((icon, index) => (
                        <motion.img
                            key={index}
                            src={icon.src}
                            alt={icon.alt}
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.8 }}
                            className="icons"
                        />
                    ))}
                    
                    
                </ul>
            </div>
        </main>
        </section>
        </>

    );
}

export default Skills;