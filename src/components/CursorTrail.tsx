import React, { useEffect, useRef } from 'react';

interface TrailPoint {
  x: number;
  y: number;
  opacity: number;
}

const CursorTrail: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const trail = useRef<TrailPoint[]>([]);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      trail.current.push({
        x: e.clientX,
        y: e.clientY,
        opacity: 1
      });

      if (trail.current.length > 20) {
        trail.current.shift();
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      trail.current.forEach((point, index) => {
        point.opacity *= 0.95;

        if (point.opacity > 0.01) {
          const size = (index / trail.current.length) * 8;
          ctx.beginPath();
          ctx.arc(point.x, point.y, size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(59, 130, 246, ${point.opacity * 0.3})`;
          ctx.fill();
        }
      });

      trail.current = trail.current.filter(point => point.opacity > 0.01);
      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    animate();

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-30 hidden lg:block"
    />
  );
};

export default CursorTrail;