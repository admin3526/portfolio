import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface FloatingElement {
  id: string;
  icon?: LucideIcon;
  color: string;
  size: number;
  x: number;
  y: number;
  delay: number;
  duration: number;
}

interface FloatingElementsProps {
  elements: FloatingElement[];
  className?: string;
}

const FloatingElements: React.FC<FloatingElementsProps> = ({ elements, className = '' }) => {
  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      {elements.map((element) => (
        <motion.div
          key={element.id}
          className="absolute"
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: element.duration,
            repeat: Infinity,
            delay: element.delay,
            ease: "easeInOut",
          }}
        >
          <div
            className="rounded-full flex items-center justify-center shadow-lg"
            style={{
              width: `${element.size}px`,
              height: `${element.size}px`,
              backgroundColor: element.color,
            }}
          >
            {element.icon && (
              <element.icon
                className="text-white"
                size={element.size * 0.4}
              />
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingElements; 