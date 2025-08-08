import { useState } from 'react'

import Background from './components/Background'
import Navigation from './components/Navigation';
import Title from './components/Title';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    setMenuOpen(false);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };


  function handleOpenMenu(){
    setMenuOpen(!menuOpen)
  }

  function handleSelectSection(sectionId: string){
    scrollToSection(sectionId)
  }
  

  return (
    <>
      <Background />
      <Navigation menuOpen={menuOpen} onClickMenu={handleOpenMenu} onClickSection={handleSelectSection} activeSection={activeSection} />
      <Title />
      <About />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </>
  )
}

export default App
