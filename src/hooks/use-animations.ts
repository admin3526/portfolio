import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

export const useScrollAnimation = (threshold = 0.1) => {
  const [ref, inView] = useInView({
    threshold,
    triggerOnce: true,
  });

  return { ref, inView };
};

export const useParallax = (speed = 0.5) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset * speed);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return offset;
};

export const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return mousePosition;
};

export const useFloatingAnimation = (delay = 0) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return { ref, inView, delay };
};

export const useStaggeredAnimation = (items: unknown[], staggerDelay = 0.1) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const getStaggerDelay = (index: number) => index * staggerDelay;

  return { ref, inView, getStaggerDelay };
}; 