import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ScrollIndicator: React.FC = () => {
  const [showIndicator, setShowIndicator] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowIndicator(window.scrollY < 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: showIndicator ? 1 : 0, y: showIndicator ? 0 : 20 }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-40 cursor-pointer"
      onClick={scrollToNext}
    >
      <div className="flex flex-col items-center gap-2 text-white">
        <span className="text-sm font-medium opacity-80">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white/70 rounded-full mt-2"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ScrollIndicator;