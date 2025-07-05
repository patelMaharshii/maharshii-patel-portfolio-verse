
import React, { useEffect, useRef } from 'react';

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Floating pixels (Minecraft/Terraria inspired)
    const pixels: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      opacity: number;
    }> = [];

    // Create floating pixels
    const colors = ['#8B4513', '#228B22', '#4169E1', '#FF6347', '#32CD32', '#FF4500'];
    for (let i = 0; i < 30; i++) {
      pixels.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 6 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        opacity: Math.random() * 0.3 + 0.1,
      });
    }

    let animationId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw pixels
      pixels.forEach(pixel => {
        // Update position
        pixel.x += pixel.vx;
        pixel.y += pixel.vy;

        // Wrap around edges
        if (pixel.x < 0) pixel.x = canvas.width;
        if (pixel.x > canvas.width) pixel.x = 0;
        if (pixel.y < 0) pixel.y = canvas.height;
        if (pixel.y > canvas.height) pixel.y = 0;

        // Draw pixelated square
        ctx.fillStyle = pixel.color;
        ctx.globalAlpha = pixel.opacity;
        ctx.fillRect(
          Math.floor(pixel.x),
          Math.floor(pixel.y),
          pixel.size,
          pixel.size
        );
        ctx.globalAlpha = 1;
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 opacity-40"
    />
  );
};

export default AnimatedBackground;
