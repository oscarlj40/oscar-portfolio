import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import { motion } from "framer-motion";
import "../styles/Contact.css";
import rubiks_cube from '../images/rubiks-cube-6366_256.gif';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_jkzshtj', 'template_v35q2gi', form.current, 'FHCoO6iSxP2KvlnyV')
      .then((result) => {
        console.log('Correo enviado con éxito:', result.text);
        alert('Correo enviado con éxito');
        form.current.reset();
      }, (error) => {
        console.error('Error al enviar:', error.text);
        alert('Hubo un error al enviar el correo');
      });
  };

  return (
    <>    
      <section className="section-contact" id="contact">
            <motion.img
            src={rubiks_cube}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            style={{padding: '100px'}}                                                
            className="rubiks-cube"                                                
            /> 
            <main className="contact-container">
                <h1 style={{ paddingBottom: '80px', textAlign: 'center' , marginRight: '340px'}}>Contact me</h1>
                <form ref={form} onSubmit={sendEmail} className="contact-form">
                    <div className="name-row">
                    <div className="form-group">
                        <label htmlFor="first-name" className="text-contact">First name</label>
                        <input id="first-name" name="user_name" type="text" placeholder="Introduce your first name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="last-name" className="text-contact">Last name</label>
                        <input id="last-name" name="user_lastname" type="text" placeholder="Introduce your last name" required />
                    </div>
                    </div>
                    <div className="form-group">
                    <label htmlFor="email" className="text-contact">Email address</label>
                    <input id="email" name="user_email" type="email" placeholder="Introduce your email" required />
                    </div>

                    <div className="form-group">
                    <label htmlFor="message" className="text-contact">Your message</label>
                    <textarea id="message" name="message" placeholder="Introduce your message" required />
                    </div>

                    <button type="submit">Submit</button>
                </form>
            </main>
      </section>
    </>
  );
}

export default Contact;
