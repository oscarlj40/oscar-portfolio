import React from "react";
import "../styles/About.css";
import Nav from "../components/Navbar/Nav";
import logo from '../images/me.jpg';

function About() {
  return (
    <>
      <Nav />
      <section id="about-me" className="section">
        <main className="about-container">
          <img src={logo} className="about-photo" alt="Me"/>
          <div className="about-text">
            <h1>About me</h1>
            <p>
              Informatics Engineer with hands-on experience in system diagnostics,
              hardware/software testing, and automation using Python and Linux environments.
              Skilled in backend development and eager to transition into backend roles or QA engineering.
              Proactive, self-taught, and passionate about continuous learning.
            </p>
          </div>
        </main>
      </section>
    </>
  );
}

export default About;
