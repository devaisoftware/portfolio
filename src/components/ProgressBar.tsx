import React from 'react';
import { useScrollProgress } from '../hooks/useScrollProgress';

const ProgressBar: React.FC = () => {
  const progress = useScrollProgress();

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-50">
      <div 
        className="h-full bg-gradient-to-r from-primary-600 to-accent-500 transition-all duration-200 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default ProgressBar;