import React, { useRef, useEffect } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  rotation: number;
  rotationSpeed: number;
}

const ConfettiCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const particles = useRef<Particle[]>([]);
  const isActive = useRef(false);

  const colors = [
    '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7', 
    '#DDA0DD', '#98D8C8', '#F7DC6F', '#BB8FCE', '#85C1E9'
  ];

  const createParticle = (): Particle => ({
    x: Math.random() * (canvasRef.current?.width || 0),
    y: -10,
    vx: (Math.random() - 0.5) * 6,
    vy: Math.random() * 3 + 2,
    size: Math.random() * 6 + 3,
    color: colors[Math.floor(Math.random() * colors.length)],
    rotation: Math.random() * 360,
    rotationSpeed: (Math.random() - 0.5) * 10,
  });

  const updateParticles = () => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.current = particles.current.filter(particle => {
      particle.x += particle.vx;
      particle.y += particle.vy;
      particle.vy += 0.1; // gravity
      particle.rotation += particle.rotationSpeed;

      // Draw particle
      ctx.save();
      ctx.translate(particle.x, particle.y);
      ctx.rotate((particle.rotation * Math.PI) / 180);
      ctx.fillStyle = particle.color;
      ctx.fillRect(-particle.size / 2, -particle.size / 2, particle.size, particle.size);
      ctx.restore();

      // Remove particles that are off screen
      return particle.y < canvas.height + 10;
    });

    if (particles.current.length > 0 || isActive.current) {
      animationRef.current = requestAnimationFrame(updateParticles);
    }
  };

  const launchConfetti = () => {
    if (!canvasRef.current) return;

    isActive.current = true;
    
    // Create burst of particles
    for (let i = 0; i < 120; i++) {
      particles.current.push(createParticle());
    }

    updateParticles();

    // Stop creating new particles after a short time
    setTimeout(() => {
      isActive.current = false;
    }, 100);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Expose launch function globally
    (window as any).launchConfetti = launchConfetti;

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-40"
      style={{ display: particles.current.length > 0 ? 'block' : 'none' }}
    />
  );
};

export default ConfettiCanvas;