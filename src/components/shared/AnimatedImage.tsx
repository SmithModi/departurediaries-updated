
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
  const [imgSrc, setImgSrc] = useState(src);
  const uniqueId = `image-${src.split('/').pop()?.replace(/[^a-zA-Z0-9]/g, '') || Math.random().toString(36).substring(2, 9)}`;
  
  useEffect(() => {
    // Update imgSrc when src prop changes
    setImgSrc(src);
    setIsLoaded(false);
  }, [src]);
  
  useEffect(() => {
    // Preload the image if it's priority
    if (priority) {
      const img = new Image();
      img.src = imgSrc;
      img.onload = () => setIsLoaded(true);
      img.onerror = () => {
        console.error(`Failed to load image: ${imgSrc}`);
        // Fallback to a placeholder if image fails to load
        setImgSrc('/placeholder.svg');
      };
    }
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "300px" } // Increased rootMargin for earlier loading
    );

    const element = document.getElementById(uniqueId);
    if (element && !priority) observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [imgSrc, priority, uniqueId]);

  // Force load fallback for images that might fail to trigger onLoad
  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        if (!isLoaded) setIsLoaded(true);
      }, 2000); // Fallback after 2 seconds
      
      return () => clearTimeout(timer);
    }
  }, [isInView, isLoaded]);

  const handleError = () => {
    console.error(`Failed to load image: ${imgSrc}`);
    // Fallback to a placeholder if image fails to load
    setImgSrc('/placeholder.svg');
    setIsLoaded(true);
  };

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
          src={imgSrc}
          alt={alt}
          width={width}
          height={height}
          onLoad={() => setIsLoaded(true)}
          onError={handleError}
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
