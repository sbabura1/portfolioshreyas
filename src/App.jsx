import { useEffect } from 'react';
import { useScrollAnimation } from './hooks/useScrollAnimation';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import FeaturedProject from './components/FeaturedProject';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import TechStack from './components/TechStack';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useScrollAnimation();

  useEffect(() => {
    // Force dark mode always - remove 'light' class if it exists
    document.body.classList.remove('light');
  }, []);

  return (
    <div className="min-h-screen relative">
      <Navbar />
      <Hero />
      <About />
      <FeaturedProject />
      <Projects />
      <Experience />
      <Education />
      <Certifications />
      <TechStack />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;