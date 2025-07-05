
import React, { useEffect, useState, useRef } from 'react';

interface Position {
  x: number;
  y: number;
}

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState<Position>({ x: 0, y: 0 });
  const [characterPosition, setCharacterPosition] = useState<Position>({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);
  const animationRef = useRef<number>();

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const animate = () => {
      setCharacterPosition(prevPos => {
        const deltaX = mousePosition.x - prevPos.x;
        const deltaY = mousePosition.y - prevPos.y;
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        
        // Stop when close to cursor (30px buffer)
        if (distance < 30) {
          return prevPos;
        }
        
        // Easing factor - adjust this to change how quickly the character follows
        const easing = 0.1;
        
        const newX = prevPos.x + deltaX * easing;
        const newY = prevPos.y + deltaY * easing;
        
        // Calculate rotation based on movement direction
        if (Math.abs(deltaX) > 0.1 || Math.abs(deltaY) > 0.1) {
          const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
          setRotation(angle);
        }
        
        return { x: newX, y: newY };
      });
      
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [mousePosition]);

  return (
    <>
      {/* Mario Kart Character */}
      <div 
        className="fixed pointer-events-none z-[9999] transition-transform duration-100 ease-out"
        style={{
          left: characterPosition.x - 16,
          top: characterPosition.y - 16,
          transform: `rotate(${rotation}deg)`,
        }}
      >
        <img 
          src="/lovable-uploads/e0623049-85a6-42bd-99a6-b85660d47f50.png"
          alt="Mario Kart Cursor"
          className="w-8 h-8 pixelated"
          draggable={false}
        />
      </div>

      {/* Terraria Tree - Fixed Bottom Right */}
      <div className="fixed bottom-4 right-4 z-50 pointer-events-none">
        <img 
          src="/lovable-uploads/9349430b-cc69-4c9e-a498-6fa60b2bb491.png"
          alt="Terraria Tree"
          className="w-16 h-auto pixelated"
          draggable={false}
        />
      </div>

      {/* Ghast with Projectile - Fixed Top Left */}
      <div className="fixed top-4 left-4 z-50 pointer-events-none">
        <div className="relative">
          <img 
            src="/lovable-uploads/91efc3dd-cc11-40e9-9fcd-ec193a93e2e5.png"
            alt="Ghast"
            className="w-16 h-16 pixelated"
            draggable={false}
          />
          {/* Projectile */}
          <div className="absolute top-8 left-8 w-2 h-2 bg-orange-400 rounded-full animate-projectile"></div>
        </div>
      </div>
    </>
  );
};

export default CustomCursor;
