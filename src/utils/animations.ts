
import { useEffect, useState, useRef } from 'react';

// Hook to determine if an element is in viewport
export function useInView(options = {}) {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting);
    }, options);

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [options]);

  return [ref, isInView];
}

// Staggered animation for lists
export function useStaggeredAnimation(itemCount: number, staggerDelay = 0.1) {
  const generateDelays = () => {
    return Array.from({ length: itemCount }, (_, i) => ({
      delay: i * staggerDelay,
    }));
  };

  return generateDelays();
}

// Image loading state for smooth transitions
export function useImageLoad() {
  const [loaded, setLoaded] = useState(false);

  const handleImageLoaded = () => {
    setLoaded(true);
  };

  return [loaded, handleImageLoaded];
}
