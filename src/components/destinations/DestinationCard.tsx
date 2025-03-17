
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Calendar, Star, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import AnimatedImage from '../shared/AnimatedImage';

interface DestinationCardProps {
  id: number;
  name: string;
  location: string;
  image: string;
  description: string;
  price: string;
  duration: string;
  rating: number;
  className?: string;
}

const DestinationCard = ({
  id,
  name,
  location,
  image,
  description,
  price,
  duration,
  rating,
  className,
}: DestinationCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={cn(
        "bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-sm transition-all duration-500 group",
        isHovered ? "shadow-xl scale-[1.01]" : "shadow hover:shadow-lg",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-56 overflow-hidden">
        <AnimatedImage
          src={image}
          alt={name}
          className={cn(
            "w-full h-full transition-transform duration-700",
            isHovered ? "scale-110" : "scale-100"
          )}
        />
        <div className="absolute top-3 right-3 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold">
          ${price}
        </div>
      </div>
      
      <div className="p-5">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="text-xl font-bold">{name}</h3>
          <div className="flex items-center">
            <Star size={16} className="text-yellow-400 mr-1" fill="currentColor" />
            <span className="text-sm font-medium">{rating}</span>
          </div>
        </div>
        
        <div className="flex items-center mb-3 text-sm text-gray-600 dark:text-gray-400">
          <MapPin size={14} className="mr-1" />
          <span>{location}</span>
          <span className="mx-2">•</span>
          <Calendar size={14} className="mr-1" />
          <span>{duration}</span>
        </div>
        
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
          {description}
        </p>
        
        <Link
          to={`/destinations/${id}`}
          className={cn(
            "inline-flex items-center font-medium transition-colors",
            "text-travel-600 hover:text-travel-700"
          )}
        >
          <span>View Details</span>
          <ArrowRight 
            size={16} 
            className={cn(
              "ml-1 transition-transform duration-300",
              isHovered ? "translate-x-1" : "translate-x-0"
            )} 
          />
        </Link>
      </div>
    </div>
  );
};

export default DestinationCard;
