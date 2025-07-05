
import React, { useEffect, useState } from 'react';

interface Position {
  x: number;
  y: number;
}

const CustomCursor = () => {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [previousPosition, setPreviousPosition] = useState<Position>({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      const newPosition = { x: e.clientX, y: e.clientY };
      
      // Calculate rotation based on movement direction
      const deltaX = newPosition.x - previousPosition.x;
      const deltaY = newPosition.y - previousPosition.y;
      
      if (deltaX !== 0 || deltaY !== 0) {
        const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
        setRotation(angle);
        setPreviousPosition(position);
      }
      
      setPosition(newPosition);
    };

    const hideCursor = () => {
      document.body.style.cursor = 'none';
    };

    const showCursor = () => {
      document.body.style.cursor = 'auto';
    };

    // Hide default cursor and add event listeners
    hideCursor();
    window.addEventListener('mousemove', updateCursor);
    window.addEventListener('mouseleave', showCursor);
    window.addEventListener('mouseenter', hideCursor);

    return () => {
      showCursor();
      window.removeEventListener('mousemove', updateCursor);
      window.removeEventListener('mouseleave', showCursor);
      window.removeEventListener('mouseenter', hideCursor);
    };
  }, [position, previousPosition]);

  return (
    <div 
      className="fixed pointer-events-none z-[9999] transition-transform duration-75 ease-out"
      style={{
        left: position.x - 16,
        top: position.y - 16,
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
  );
};

export default CustomCursor;
