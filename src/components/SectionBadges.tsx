import React, { useState, useEffect } from 'react';

const sections = [
  { id: 'home', icon: 'fa-home' },
  { id: 'about', icon: 'fa-user' },
  { id: 'services', icon: 'fa-cogs' },
  { id: 'testimonials', icon: 'fa-comments' },
  { id: 'contact', icon: 'fa-envelope' },
  { id: 'faq', icon: 'fa-question' },
];

const SectionBadges: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const fromTop = window.scrollY + window.innerHeight / 2;
      
      sections.forEach(({ id }) => {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          const sectionTop = rect.top + window.scrollY;
          const sectionBottom = sectionTop + rect.height;
          
          if (fromTop >= sectionTop && fromTop <= sectionBottom) {
            setActiveSection(id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed left-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:flex flex-col gap-4">
      {sections.map(({ id, icon }) => (
        <div
          key={id}
          className={`w-9 h-9 rounded-full flex items-center justify-center shadow-brand transition-all duration-300 ${
            activeSection === id
              ? 'bg-accent-500 text-white opacity-100 scale-110 shadow-glow'
              : 'bg-white dark:bg-neutral-800 text-primary-600 dark:text-primary-400 opacity-50 hover:opacity-75'
          }`}
          title={id.charAt(0).toUpperCase() + id.slice(1)}
        >
          <i className={`fas ${icon} text-sm`} />
        </div>
      ))}
    </div>
  );
};

export default SectionBadges;