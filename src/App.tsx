import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import ServicesCarousel from './components/ServicesCarousel';
import Technologies from './components/Technologies';
import Services from './components/Services';
import ProcessTimeline from './components/ProcessTimeline';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import ProgressBar from './components/ProgressBar';
import ScrollIndicator from './components/ScrollIndicator';
import SectionBadges from './components/SectionBadges';
import FloatingShapes from './components/FloatingShapes';
import Achievement from './components/Achievement';
import ConfettiCanvas from './components/ConfettiCanvas';
import ParticleBackground from './components/ParticleBackground';
import LoadingScreen from './components/LoadingScreen';
import CursorTrail from './components/CursorTrail';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-primary-50/30 to-accent-50/20 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900 text-neutral-900 dark:text-neutral-100 transition-all duration-500 overflow-x-hidden">
        <LoadingScreen />
        <ParticleBackground />
        <CursorTrail />
        <ProgressBar />
        <ScrollIndicator />
        <SectionBadges />
        <FloatingShapes />
        
        <Header />
        <main className="relative z-10">
          <Hero />
          <ServicesCarousel />
          <About />
          <Technologies />
          <Services />
          <ProcessTimeline />
          <Testimonials />
          <Contact />
          <FAQ />
        </main>
        <Footer />
        
        <Achievement />
        <ConfettiCanvas />
      </div>
    </ThemeProvider>
  );
}

export default App;