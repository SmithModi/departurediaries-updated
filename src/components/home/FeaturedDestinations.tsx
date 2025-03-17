
import { useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import SectionHeading from '../shared/SectionHeading';
import AnimatedImage from '../shared/AnimatedImage';
import { useInView } from '@/utils/animations';

// Sample featured destinations data
const featuredDestinations = [
  {
    id: 1,
    name: 'Dubai',
    description: 'Experience luxury amidst desert landscapes',
    image: 'https://images.unsplash.com/photo-1582672060674-bc2bd808a8f5?q=80&w=2071&auto=format&fit=crop',
    price: '1299',
    rating: 4.8,
  },
  {
    id: 2,
    name: 'Bali',
    description: 'Discover serenity in tropical paradise',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=2938&auto=format&fit=crop',
    price: '999',
    rating: 4.9,
  },
  {
    id: 3,
    name: 'Singapore',
    description: 'Urban marvels meet cultural heritage',
    image: 'https://images.unsplash.com/photo-1565967511849-76a60a516170?q=80&w=2071&auto=format&fit=crop',
    price: '1099',
    rating: 4.7,
  },
  {
    id: 4,
    name: 'Kashmir',
    description: 'Breathtaking landscapes of the Himalayas',
    image: 'https://images.unsplash.com/photo-1566837497312-7be4ebb33e06?q=80&w=2070&auto=format&fit=crop',
    price: '899',
    rating: 4.9,
  },
  {
    id: 5,
    name: 'Vietnam',
    description: 'Ancient traditions meet natural beauty',
    image: 'https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=2070&auto=format&fit=crop',
    price: '949',
    rating: 4.8,
  },
];

const FeaturedDestinations = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [sectionRef, isInView] = useInView({ threshold: 0.1, triggerOnce: true });

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = current.clientWidth * 0.75;
      
      current.scrollTo({
        left: direction === 'left' 
          ? current.scrollLeft - scrollAmount 
          : current.scrollLeft + scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  // Generate stars based on rating
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <svg 
        key={index} 
        className={cn(
          "w-4 h-4",
          index < Math.floor(rating) ? "text-yellow-400" : "text-gray-300"
        )}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section
      ref={sectionRef as React.RefObject<HTMLDivElement>}
      className="section-padding relative bg-white dark:bg-gray-950"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <SectionHeading
            title="Featured Destinations"
            subtitle="Explore our handpicked destinations that offer unforgettable experiences"
            className="mb-0"
          />
          
          <div className="hidden md:flex items-center space-x-2">
            <button
              onClick={() => scroll('left')}
              className="p-2 rounded-full border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-2 rounded-full border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Destinations Carousel */}
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto scrollbar-none gap-6 pb-4"
          style={{ scrollbarWidth: 'none' }}
        >
          {featuredDestinations.map((destination, index) => (
            <div
              key={destination.id}
              className={cn(
                "flex-shrink-0 w-[300px] lg:w-[340px] transition-all duration-700 ease-out",
                isInView 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-12",
                { "transition-delay-200": index === 1 },
                { "transition-delay-400": index === 2 },
                { "transition-delay-600": index === 3 },
                { "transition-delay-800": index === 4 }
              )}
            >
              <div className="h-full rounded-2xl overflow-hidden destination-card-shadow bg-white dark:bg-gray-900">
                <div className="relative h-48 overflow-hidden">
                  <AnimatedImage
                    src={destination.image}
                    alt={destination.name}
                    className="h-full w-full"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                    ${destination.price}
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center mb-2">
                    <div className="flex">{renderStars(destination.rating)}</div>
                    <span className="text-sm ml-2">{destination.rating} / 5</span>
                  </div>
                  <h3 className="text-xl font-bold mb-1">{destination.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                    {destination.description}
                  </p>
                  <Link
                    to={`/destinations/${destination.id}`}
                    className="inline-flex items-center text-travel-600 hover:text-travel-700 transition-colors font-medium"
                  >
                    <span>Explore More</span>
                    <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/destinations"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-travel-600 hover:bg-travel-700 text-white transition-colors"
          >
            <span>View All Destinations</span>
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDestinations;
