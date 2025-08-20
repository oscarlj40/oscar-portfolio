import React from "react";
import './assets/styles/App.css';
import Nav from "./assets/components/Navbar/Nav";
import logo from './assets/images/me.jpg';

function App() {
  return (
    <>
    <Nav />
    <main style={{ padding: '20px' }} >
      <blockquote>
        <img src={logo} className="logo" style={{borderRadius: '80px'}}/>
        <p className="text-about">
        <h1 style={{ display: 'flex'}}>About me</h1>
        Informatics Engineer with hands-on experience in system diagnostics,
        hardware/software testing, and automation using Python and Linux  environments. Skilled in backend
        development and eager to transition into backend roles or QA engineering. Proactive, self-taught,
        and  passionate about continuous learning.
        </p>
      </blockquote>
    </main>
    </>
  );
}

export default App;