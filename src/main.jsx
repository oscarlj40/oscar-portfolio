import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Test from './assets/pages/Test.jsx'
import About from './assets/pages/About.jsx'
import Skills from './assets/pages/Skills.jsx'
import Projects from './assets/pages/Projects.jsx'
import Education from './assets/pages/Education.jsx'
import Experience from './assets/pages/Experience.jsx'
import Contact from './assets/pages/Contact.jsx'
import Menuitemnavbar from './assets/pages/Menuitemnavbar.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <About />
    <Test />
    <Skills />
    <Projects />
    <Education />
    <Experience />
    <Contact />
  </StrictMode>,
)
