import React from "react";
import "../styles/Experience.css";
import pencil_hero from '../images/udg_logo.png';

function Experience() {
    return (
        <>
        <section id="experience" className="section-experience">
        <main className="experience-container">
            <h1 className="title-experience">Experience</h1>
            <div className="rectangle-exp-1">
                <p className="experience-text">
                <strong>Test Engineer</strong><br />
                IBM – Foxconn<br />
                Guadalajara, Jalisco | April 2022 – Present<br />
                Sector: Power Systems<br />
                - Performed diagnostics and resolved hardware/software failures on enterprise-class servers.<br />
                - Replaced defective components and validated system functionality post-repair.<br />
                - Operated debug consoles (Linux, EBMC) for server-level testing and failure analysis.<br />
                - Executed structured cabling and ensured proper physical and logical network configuration.<br />
                - Registered systems into the QA environment and documented test results.<br />
                - Collaborated in quality assurance processes through system validation and root cause analysis.
                </p>
            </div>
            
            <div className="rectangle-exp-2">
                <p className="experience-text">
                <strong>Software Developer (Internship)</strong><br />
                Paquetería y Mensajería Gran Cañón S.A. de C.V.<br />
                Guadalajara, Jalisco | February 2019 – July 2019<br />
                Sector: IT Department<br />
                - Developed and maintained the company website using HTML, CSS, and PHP.<br />
                - Participated in the development of an internal ERP system to improve administrative workflows.<br />
                - Redesigned and optimized the office's internal network infrastructure.
                </p>
            </div>
            
            <div className="rectangle-exp-3">
                <p className="experience-text">
                <strong>IT Assistant & Information Manager (Internship)</strong><br />
                Fiestas de Octubre S.A. de C.V.<br />
                Guadalajara, Jalisco | August 2018 – February 2019<br />
                Sector: Security / Administration<br />
                - Managed employee records and maintained up-to-date personnel databases.<br />
                - Provided hardware support and preventive maintenance on office computer equipment.<br />
                - Assisted with digital archiving and data organization tasks.<br />
                </p>
            </div>
        </main>
        </section>
        </>
    );
}

export default Experience;