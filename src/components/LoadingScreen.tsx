import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from "../assets/Devai Software logo.png";

const LoadingScreen: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsLoading(false), 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] bg-gradient-to-br from-primary-600 via-secondary-500 to-accent-500 flex items-center justify-center"
        >
          <div className="text-center">
<motion.div 
  initial={{ scale: 0.5, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  transition={{ duration: 0.5 }}
  className="mb-8"
>
  <div className="w-32 h-32 mx-auto mb-6 bg-white/20 backdrop-blur-lg rounded-2xl flex items-center justify-center">
    <img
      src={Logo}
      alt="Devai Software Logo"
      className="w-24 h-24 object-contain"
    />
  </div>
  <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-2 text-center">Devai Software</h1>
  <p className="text-white/80 text-lg text-center">Crafting Digital Excellence</p>
</motion.div>


            <div className="w-64 h-2 bg-white/20 rounded-full overflow-hidden mx-auto">
              <motion.div
                className="h-full bg-gradient-to-r from-white to-accent-200 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <p className="text-white/60 mt-4 text-sm">{Math.round(progress)}%</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;