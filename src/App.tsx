import React, { Suspense } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
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
import Spinner from './components/Spinner';

const About = React.lazy(() => import('./components/About'));
const ServicesCarousel = React.lazy(() => import('./components/ServicesCarousel'));
const Technologies = React.lazy(() => import('./components/Technologies'));
const Services = React.lazy(() => import('./components/Services'));
const ProcessTimeline = React.lazy(() => import('./components/ProcessTimeline'));
const Testimonials = React.lazy(() => import('./components/Testimonials'));
const Contact = React.lazy(() => import('./components/Contact'));
const FAQ = React.lazy(() => import('./components/FAQ'));

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
          <Suspense fallback={<Spinner />}>
            <ServicesCarousel />
            <About />
            <Technologies />
            <Services />
            <ProcessTimeline />
            <Testimonials />
            <Contact />
            <FAQ />
          </Suspense>
        </main>
        <Footer />
        
        <Achievement />
        <ConfettiCanvas />
      </div>
    </ThemeProvider>
  );
}

export default App;