import React from "react";
import { motion } from "framer-motion";
import "../styles/Projects.css";
import pencil_hero from '../images/Pencil_Hero_Title.png';


function Projects() {
    return (
        <>
        <section id="projects" className="section-projects">
            <main className="projects-container">
                <div className="projects-text">
                    <h1>Projects</h1>
                        <p>
                        • <a href="https://gervinky.github.io/PencilHero.html" style={{ textDecoration: 'underline'}}>Pencil Hero </a> 
                        – Game developed in Unity  (Game Design, Testing, C#):<br />
                        Pencil Hero is an educational video game that combines RPG combat
                        mechanics and touchscreen technology to teach writing and spelling
                        in a fun way. Designed for children and adults, it offers training and
                        practice.
                        </p>
                </div>
            </main>
            <motion.img
                src={pencil_hero}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                style={{padding: '100px'}}                                                
                className="logo-projects"                                                
            />  
        </section>
        </>

    );
}

export default Projects;