import React, { useState, useEffect } from 'react';

const Achievement: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      
      if (scrollPercent > 95 && !isVisible) {
        setMessage("You've discovered all our services!");
        setIsVisible(true);
        setTimeout(() => setIsVisible(false), 4000);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isVisible]);

  const showAchievement = (text: string) => {
    setMessage(text);
    setIsVisible(true);
    setTimeout(() => setIsVisible(false), 3000);
  };

  // Expose method to parent components
  React.useEffect(() => {
    (window as any).showAchievement = showAchievement;
  }, []);

  return (
    <div className={`fixed bottom-8 right-8 z-50 bg-white dark:bg-slate-800 text-primary-500 dark:text-primary-400 rounded-2xl shadow-2xl p-4 transition-all duration-500 flex items-center gap-4 max-w-sm ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
    }`}>
      <div className="w-12 h-12 bg-gradient-to-br from-accent-500 to-orange-500 rounded-full flex items-center justify-center text-white text-xl">
        <i className="fas fa-trophy" />
      </div>
      <div>
        <h4 className="font-bold text-sm">Achievement Unlocked!</h4>
        <p className="text-xs text-slate-600 dark:text-slate-400">{message}</p>
      </div>
    </div>
  );
};

export default Achievement;