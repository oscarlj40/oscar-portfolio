import React from "react";
import "../styles/Education.css";
import pencil_hero from '../images/udg_logo.png';

function Education() {
    return (
        <>
        
        <section id="education" className="section-education">
            
            <main className="education-container">
                
                    <div className="education-cards">
                        <h1 className="title-education" >Education</h1>
                    <div className="rectangle">
                        <p className="education-text" style={{ textAlign: 'center' , padding: '35px'}}>
                            <strong>B.Sc. in Informatics Engineering</strong><br />
                            Centro Universitario de Ciencias Exactas e Ingenierías (CUCEI), Universidad de Guadalajara<br />
                            Guadalajara, Jalisco<br />
                            Jan 2020 – Dec 2024 (Graduated)
                        </p>
                    </div>
                    
                    <img src={pencil_hero} className="logo-udg" alt="Pencil-Hero-logo" />

                    <div className="rectangle">
                        <p className="education-text" style={{ textAlign: 'center' , padding: '42px'}}>
                            <strong>Professional Technologist in Informatics Systems</strong><br />
                            Escuela Politécnica de Guadalajara<br />
                            Guadalajara, Jalisco<br />
                            Aug 2015 – Jul 2019 (Graduated)
                        </p>
                    </div>
                    </div>
            </main>
        </section>
        </>
    );
}

export default Education;