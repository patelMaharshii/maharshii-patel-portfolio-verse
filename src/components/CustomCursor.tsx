
import React, { useEffect, useState, useRef } from 'react';

interface Position {
  x: number;
  y: number;
}

const CustomCursor = () => {
  const [curPosition, setCurPosition] = useState<Position>({ 
    x: typeof window !== 'undefined' ? window.innerWidth / 2 : 0, 
    y: typeof window !== 'undefined' ? window.innerHeight : 0 
  });
  const [targetPosition, setTargetPosition] = useState<Position>(curPosition);
  const lastClientPos = useRef<Position>(curPosition);
  const intervalRef = useRef<NodeJS.Timeout>();

  // Linear interpolation function for smooth movement
  const lerp = (a: number, b: number, alpha: number) => {
    return a + alpha * (b - a);
  };

  // Update target position based on mouse/scroll events
  const updateTarget = (event: MouseEvent | Event) => {
    const mainElement = document.body;
    const appBottom = mainElement.scrollHeight - 80;

    // Get client position from mouse event or use last known position
    const clientPos = 'clientX' in event && 'clientY' in event ? {
      x: event.clientX,
      y: event.clientY,
    } : lastClientPos.current;

    lastClientPos.current = clientPos;

    // Calculate target position relative to document body
    setTargetPosition({
      x: clientPos.x - mainElement.getBoundingClientRect().left,
      y: Math.min(clientPos.y - mainElement.getBoundingClientRect().top, appBottom)
    });
  };

  useEffect(() => {
    // Add event listeners
    document.addEventListener('pointermove', updateTarget);
    window.addEventListener('scroll', updateTarget);

    // Animation loop with smooth interpolation
    const deltaTime = 1000 / 90;
    intervalRef.current = setInterval(() => {
      setCurPosition(prevPos => ({
        x: lerp(prevPos.x, targetPosition.x, 5 * deltaTime / 1000),
        y: lerp(prevPos.y, targetPosition.y, 3 * deltaTime / 1000),
      }));
    }, deltaTime);

    return () => {
      document.removeEventListener('pointermove', updateTarget);
      window.removeEventListener('scroll', updateTarget);
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [targetPosition]);

  return (
    <div 
      className="absolute pointer-events-none z-[9999]"
      style={{
        left: curPosition.x - 40,
        top: curPosition.y - 40,
      }}
    >
      <img 
        src="/lovable-uploads/e0623049-85a6-42bd-99a6-b85660d47f50.png"
        alt="Mario Kart Cursor"
        className="w-20 h-20 pixelated"
        draggable={false}
      />
    </div>
  );
};

export default CustomCursor;
