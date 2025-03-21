
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { MapPin, Calendar, Star, Phone } from "lucide-react";
import AnimatedImage from "../shared/AnimatedImage";
import { Link } from "react-router-dom";

interface DestinationDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  destination: {
    id: number;
    name: string;
    location: string;
    image: string;
    description: string;
    price: string;
    duration: string;
    rating: number;
    longDescription?: string;
    highlights?: string[];
  } | null;
}

const DestinationDetailsModal = ({ isOpen, onClose, destination }: DestinationDetailsModalProps) => {
  if (!destination) return null;

  // Ensure price has the rupee symbol
  const formattedPrice = destination.price.includes('₹') 
    ? destination.price 
    : `₹${destination.price}`;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{destination.name}</DialogTitle>
          <DialogDescription className="flex items-center text-sm text-gray-600 dark:text-gray-400">
            <MapPin size={14} className="mr-1" />
            <span>{destination.location}</span>
          </DialogDescription>
        </DialogHeader>
        
        <div className="relative h-72 w-full overflow-hidden rounded-md mt-2">
          <AnimatedImage 
            src={destination.image} 
            alt={destination.name} 
            className="w-full h-full object-cover"
            priority={true}
          />
          
          <div className="absolute top-3 right-3 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold">
            {formattedPrice}
          </div>
        </div>
        
        <div className="flex flex-wrap gap-4 justify-between items-center py-3">
          <div className="flex items-center">
            <Calendar size={16} className="mr-1.5 text-travel-600" />
            <span className="font-medium">{destination.duration}</span>
          </div>
          
          <div className="flex items-center">
            <Star size={16} className="text-yellow-400 mr-1.5" fill="currentColor" />
            <span className="font-medium">{destination.rating}/5</span>
            <span className="text-sm text-gray-500 ml-1">rating</span>
          </div>
        </div>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">About This Destination</h3>
            <p className="text-gray-700 dark:text-gray-300">
              {destination.longDescription || destination.description}
            </p>
          </div>
          
          {destination.highlights && destination.highlights.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-2">Highlights</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                {destination.highlights.map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
        
        <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-800">
          <Link 
            to="/contact"
            className="w-full py-3 bg-travel-600 hover:bg-travel-700 text-white rounded-lg transition-colors font-medium flex items-center justify-center"
          >
            <Phone size={18} className="mr-2" />
            Contact Us
          </Link>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DestinationDetailsModal;
