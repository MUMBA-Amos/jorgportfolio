import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import BeyondWork from './components/BeyondWork';
import Kiva from './components/Kiva';
import Reading from './components/Reading';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollAnimation from './components/ScrollAnimation';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-content">
        <main style={{ paddingTop: '80px' }}>
          <ScrollAnimation>
            <Hero />
          </ScrollAnimation>
          
          <ScrollAnimation delay={200}>
            <About />
          </ScrollAnimation>
          
          <ScrollAnimation delay={200}>
            <Experience />
          </ScrollAnimation>
          
          <ScrollAnimation delay={200}>
            <Skills />
          </ScrollAnimation>
          
          <ScrollAnimation delay={200}>
            <Certifications />
          </ScrollAnimation>
          
          <ScrollAnimation delay={200}>
            <BeyondWork />
          </ScrollAnimation>
          
          <ScrollAnimation delay={200}>
            <Kiva />
          </ScrollAnimation>
          
          <ScrollAnimation delay={200}>
            <Reading />
          </ScrollAnimation>
          
          <ScrollAnimation delay={200}>
            <Contact />
          </ScrollAnimation>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
