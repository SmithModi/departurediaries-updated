
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
  const [isInView, setIsInView] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById(`image-${src.split('/').pop()}`);
    if (element) observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [src]);

  return (
    <div
      id={`image-${src.split('/').pop()}`}
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
