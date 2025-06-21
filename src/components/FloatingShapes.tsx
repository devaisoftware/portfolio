import React from 'react';

const FloatingShapes: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <div className="absolute w-44 h-44 rounded-full bg-primary-500/10 left-[5vw] top-[10vh] animate-float" />
      <div className="absolute w-28 h-28 rounded-full bg-accent-500/10 right-[8vw] top-[30vh] animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute w-20 h-20 rounded-full bg-success-500/10 left-[40vw] bottom-[8vh] animate-float" style={{ animationDelay: '4s' }} />
    </div>
  );
};

export default FloatingShapes;