import React, { useState, useEffect } from 'react';
import { Home, User, Settings, MessageSquare, Mail, HelpCircle } from 'lucide-react';

const sections = [
  { id: 'home', icon: Home },
  { id: 'about', icon: User },
  { id: 'services', icon: Settings },
  { id: 'testimonials', icon: MessageSquare },
  { id: 'contact', icon: Mail },
  { id: 'faq', icon: HelpCircle },
];

const SectionBadges: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-50% 0px -50% 0px',
        threshold: 0,
      }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) {
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="fixed left-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:flex flex-col gap-4">
      {sections.map(({ id, icon: Icon }) => (
        <button
          key={id}
          onClick={() => scrollToSection(id)}
          className={`w-9 h-9 rounded-full flex items-center justify-center shadow-brand transition-all duration-300 cursor-pointer ${
            activeSection === id
              ? 'bg-accent-500 text-white opacity-100 scale-110 shadow-glow'
              : 'bg-white dark:bg-neutral-800 text-primary-600 dark:text-primary-400 opacity-50 hover:opacity-75'
          }`}
          title={id.charAt(0).toUpperCase() + id.slice(1)}
          aria-label={`Go to ${id} section`}
        >
          <Icon className="w-5 h-5" />
        </button>
      ))}
    </div>
  );
};

export default SectionBadges;