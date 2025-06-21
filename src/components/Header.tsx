import React, { useState, useEffect } from 'react';
import Logo from "../assets/Devai Software logo.png"

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Update active nav item
      const fromTop = window.scrollY + 80;
      navItems.forEach(({ href }) => {
        const section = document.querySelector(href);
        if (section) {
          const sectionTop = (section as HTMLElement).offsetTop;
          const sectionHeight = (section as HTMLElement).offsetHeight;
          
          if (fromTop >= sectionTop && fromTop < sectionTop + sectionHeight) {
            setActiveSection(href.slice(1));
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md shadow-brand' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18">
            <a 
              href="#home" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#home');
              }}
              className="flex items-center gap-3"
            >
              <span className="text-2xl font-bold bg-gradient-to-r from-primary-600 via-secondary-500 to-accent-500 bg-clip-text text-transparent">
                Devai Software
                {/* <img src={Logo} alt="Devai Software Logo" className="w-8 h-8 inline-block ml-2" /> */}
              </span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(href);
                  }}
                  className={`px-3 py-2 rounded-lg font-medium transition-all duration-300 ${
                    activeSection === href.slice(1)
                      ? 'bg-gradient-to-r from-primary-600 to-secondary-500 text-white shadow-brand'
                      : 'text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:text-primary-600 dark:hover:text-primary-400'
                  }`}
                >
                  {label}
                </a>
              ))}
              <button
                onClick={() => scrollToSection('#contact')}
                className="ml-4 px-6 py-2.5 bg-gradient-to-r from-primary-600 to-secondary-500 text-white font-semibold rounded-lg shadow-brand hover:shadow-brand-lg transform hover:-translate-y-0.5 hover:scale-105 transition-all duration-300"
              >
                Get Started
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-30 lg:hidden transition-all duration-300 ${
        isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        <div className="absolute inset-0 bg-black/50" onClick={() => setIsMobileMenuOpen(false)} />
        <div className={`absolute right-0 top-0 h-full w-80 max-w-[80vw] bg-white dark:bg-neutral-900 shadow-brand-lg transform transition-transform duration-300 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="p-6 pt-20">
            <nav className="flex flex-col gap-4">
              {navItems.map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(href);
                  }}
                  className="px-4 py-3 text-lg font-medium text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:text-primary-600 dark:hover:text-primary-400 rounded-lg transition-colors"
                >
                  {label}
                </a>
              ))}
              <button
                onClick={() => scrollToSection('#contact')}
                className="mt-4 px-6 py-3 bg-gradient-to-r from-primary-600 to-secondary-500 text-white font-semibold rounded-lg shadow-brand"
              >
                Get Started
              </button>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;