
import React, { useEffect, useState, useRef, useCallback } from 'react';

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
  const [rotation, setRotation] = useState(0);
  
  const lastClientPos = useRef<Position>(curPosition);
  const animationRef = useRef<number>();
  const lastUpdateTime = useRef<number>(0);
  const bodyRect = useRef<DOMRect | null>(null);
  const lastRotationUpdate = useRef<number>(0);

  // Linear interpolation function for smooth movement
  const lerp = (a: number, b: number, alpha: number) => {
    return a + alpha * (b - a);
  };

  // Throttled update target position
  const updateTarget = useCallback((event: MouseEvent | Event) => {
    const now = performance.now();
    
    // Throttle updates to 60fps max
    if (now - lastUpdateTime.current < 16) return;
    lastUpdateTime.current = now;

    // Cache body rect to avoid repeated DOM queries
    if (!bodyRect.current) {
      bodyRect.current = document.body.getBoundingClientRect();
    }

    const mainElement = document.body;
    const appBottom = mainElement.scrollHeight - 80;

    // Get client position from mouse event or use last known position
    const clientPos = 'clientX' in event && 'clientY' in event ? {
      x: event.clientX,
      y: event.clientY,
    } : lastClientPos.current;

    // Only update if cursor moved significantly (>2px)
    const dx = clientPos.x - lastClientPos.current.x;
    const dy = clientPos.y - lastClientPos.current.y;
    if (Math.abs(dx) < 2 && Math.abs(dy) < 2) return;

    lastClientPos.current = clientPos;

    // Calculate target position with cached rect
    const offset = 20;
    setTargetPosition({
      x: clientPos.x - bodyRect.current.left - offset,
      y: Math.min(clientPos.y - bodyRect.current.top - offset, appBottom)
    });
  }, []);

  // Optimized animation loop using requestAnimationFrame
  const animate = useCallback(() => {
    setCurPosition(prevPos => {
      const newPos = {
        x: lerp(prevPos.x, targetPosition.x, 0.08),
        y: lerp(prevPos.y, targetPosition.y, 0.06),
      };
      
      // Only update rotation if significant movement and throttled
      const dx = targetPosition.x - prevPos.x;
      const dy = targetPosition.y - prevPos.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance > 5 && performance.now() - lastRotationUpdate.current > 50) {
        const angle = Math.atan2(dy, dx) * (180 / Math.PI);
        setRotation(angle);
        lastRotationUpdate.current = performance.now();
      }
      
      return newPos;
    });

    animationRef.current = requestAnimationFrame(animate);
  }, [targetPosition]);

  useEffect(() => {
    // Reset body rect cache on scroll
    const handleScroll = () => {
      bodyRect.current = null;
    };

    document.addEventListener('pointermove', updateTarget, { passive: true });
    window.addEventListener('scroll', updateTarget, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Start animation loop
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('pointermove', updateTarget);
      window.removeEventListener('scroll', updateTarget);
      window.removeEventListener('scroll', handleScroll);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [updateTarget, animate]);

  return (
    <div 
      className="absolute pointer-events-none z-[9999]"
      style={{
        left: curPosition.x - 28,
        top: curPosition.y - 28,
      }}
    >
      <img 
        src="/lovable-uploads/e0623049-85a6-42bd-99a6-b85660d47f50.png"
        alt="Mario Kart Cursor"
        className="w-11 h-11 pixelated"
        style={{
          transform: `rotate(${rotation}deg)`,
        }}
        draggable={false}
      />
    </div>
  );
};

export default CustomCursor;
