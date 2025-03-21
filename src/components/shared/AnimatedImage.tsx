
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
}

const AnimatedImage = ({
  src,
  alt,
  className,
  width,
  height,
  priority = false,
}: AnimatedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const uniqueId = `image-${src.split('/').pop()?.replace(/[^a-zA-Z0-9]/g, '') || Math.random().toString(36).substring(2, 9)}`;
  
  useEffect(() => {
    // Preload the image if it's priority
    if (priority) {
      const img = new Image();
      img.src = src;
      img.onload = () => setIsLoaded(true);
    }
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "200px" } // Larger rootMargin for earlier loading
    );

    const element = document.getElementById(uniqueId);
    if (element && !priority) observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [src, priority, uniqueId]);

  return (
    <div
      id={uniqueId}
      className={cn(
        "overflow-hidden relative",
        className
      )}
    >
      {(isInView || priority) && (
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          onLoad={() => setIsLoaded(true)}
          className={cn(
            "w-full h-full object-cover transition-all duration-700",
            isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-105",
          )}
        />
      )}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800 animate-pulse" />
      )}
    </div>
  );
};

export default AnimatedImage;
