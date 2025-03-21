
import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

// Sample background images - in a real app, you would use actual high-quality images
const backgroundImages = [
  'https://images.unsplash.com/photo-1580847097346-72d80f164702?q=80&w=2071&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1530870110042-98b2cb110834?q=80&w=2070&auto=format&fit=crop',
];

const Hero = () => {
  const [activeImage, setActiveImage] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Preload images
    backgroundImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
    
    setIsLoaded(true);
    
    // Change background image every 6 seconds
    const interval = setInterval(() => {
      setActiveImage((current) => (current + 1) % backgroundImages.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Images */}
      {backgroundImages.map((image, index) => (
        <div
          key={index}
          className={cn(
            "absolute inset-0 w-full h-full transition-all duration-1000 bg-cover bg-center",
            activeImage === index ? "opacity-100 scale-105" : "opacity-0 scale-100"
          )}
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white px-4 max-w-5xl mx-auto">
        <div className={cn(
          "transition-all duration-1000 delay-300",
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <span className="inline-block text-sm font-medium px-3 py-1 rounded-full bg-travel-500/60 backdrop-blur-sm mb-4">
            Discover the world with us
          </span>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-shadow">
            Embark on Extraordinary <br /> Travel Experiences
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 text-white/90">
            From enchanting landscapes to vibrant cultural experiences, we craft 
            memorable journeys tailored to your travel aspirations.
          </p>

          <Link 
            to="/destinations" 
            className="inline-flex items-center group text-white font-medium"
          >
            <span>Explore Popular Destinations</span>
            <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
