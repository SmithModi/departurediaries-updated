
import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import SectionHeading from '../shared/SectionHeading';
import AnimatedImage from '../shared/AnimatedImage';
import { useInView } from '@/utils/animations';
import DestinationDetailsModal from '../destinations/DestinationDetailsModal';

// Sample featured destinations data with prices in rupees
const featuredDestinations = [
  {
    id: 1,
    name: 'Himachal Pradesh',
    description: 'Experience majestic mountains and valleys',
    image: 'https://images.unsplash.com/photo-1626621214907-ce1eda06cf7f?q=80&w=2070&auto=format&fit=crop',
    price: '24,999',
    rating: 4.8,
    location: 'North India',
    duration: '6 Days',
    longDescription: 'Experience the majestic Himalayan landscapes of Himachal Pradesh with snow-capped mountains, lush green valleys, and charming hill stations. Visit popular destinations like Shimla, Manali, Dharamshala, and Dalhousie. Enjoy adventure activities, nature walks, and local Himachali cuisine.',
    highlights: [
      'Visit the picturesque hill station of Shimla, the former summer capital of British India',
      'Experience adventure sports like paragliding in Solang Valley',
      'Explore the hot springs and ancient temples in Manikaran',
      'Take a trip to the stunning Rohtang Pass with panoramic mountain views',
      'Visit the residence of the Dalai Lama in McLeodganj, Dharamshala'
    ]
  },
  {
    id: 2,
    name: 'Jammu & Kashmir',
    description: 'Discover paradise on Earth',
    image: 'https://images.unsplash.com/photo-1566837497312-7be4ebb33e06?q=80&w=2070&auto=format&fit=crop',
    price: '28,500',
    rating: 4.9,
    location: 'North India',
    duration: '7 Days',
    longDescription: 'Discover the paradise on Earth with beautiful lakes, meadows, and gardens surrounded by snow-capped mountains. From the serene Dal Lake to the majestic Himalayan peaks, experience breathtaking landscapes, vibrant local culture, and warm hospitality in this northern gem of India.',
    highlights: [
      'Stay in a traditional houseboat on the beautiful Dal Lake',
      'Explore the picturesque Mughal Gardens of Srinagar',
      'Visit the stunning mountain resort of Gulmarg',
      'Experience a traditional Shikara ride on the lakes',
      'Shop for authentic Kashmiri handicrafts and pashmina shawls'
    ]
  },
  {
    id: 3,
    name: 'Bali Paradise',
    description: 'Unwind in tropical splendor',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=2938&auto=format&fit=crop',
    price: '63,999',
    rating: 4.9,
    location: 'Bali, Indonesia',
    duration: '7 Days',
    longDescription: 'Escape to the tropical paradise of Bali where lush rice terraces, ancient temples, and pristine beaches await. Immerse yourself in the unique Hindu culture, enjoy world-class surfing, and experience the famous Balinese hospitality and spa treatments.',
    highlights: [
      'Visit sacred temples including Tanah Lot and Uluwatu',
      'Explore the cultural heart of Bali in Ubud',
      'Relax on the beaches of Kuta, Seminyak or Nusa Dua',
      'Witness traditional Balinese dance performances',
      'Take a cooking class and learn to make authentic Balinese cuisine'
    ]
  },
  {
    id: 4,
    name: 'Leh Ladakh',
    description: 'Journey through high Himalayan landscapes',
    image: 'https://images.unsplash.com/photo-1533130061792-64b345e4a833?q=80&w=2070&auto=format&fit=crop',
    price: '32,999',
    rating: 4.9,
    location: 'North India',
    duration: '8 Days',
    longDescription: "Embark on a thrilling journey through the high-altitude desert landscapes and ancient monasteries of Ladakh. From the stunning Pangong Lake to the majestic Nubra Valley, experience breathtaking views, ancient Buddhist culture, and challenging mountain passes in this remote Himalayan region.",
    highlights: [
      'Visit the iconic Pangong Lake with its changing blue hues',
      'Explore ancient Buddhist monasteries like Thiksey and Hemis',
      'Experience the unique culture and traditions of Ladakhi people',
      'Drive through Khardung La, one of the world\'s highest motorable passes',
      'Witness the confluence of Indus and Zanskar rivers'
    ]
  },
  {
    id: 5,
    name: 'Dubai Extravaganza',
    description: 'Experience luxury and modern marvels',
    image: 'https://images.unsplash.com/photo-1582672060674-bc2bd808a8f5?q=80&w=2071&auto=format&fit=crop',
    price: '78,999',
    rating: 4.8,
    location: 'Dubai, UAE',
    duration: '6 Days',
    longDescription: "Experience the ultimate luxury and architectural marvels of Dubai. From the towering Burj Khalifa to the stunning Palm Jumeirah, discover a city that defies expectations. Enjoy shopping at world-class malls, desert safaris, and exquisite dining experiences.",
    highlights: [
      'Visit the iconic Burj Khalifa, the world\'s tallest building',
      'Experience desert safari with dune bashing and traditional dinner',
      'Explore the magnificent Dubai Mall and see the Dubai Fountain show',
      'Relax on pristine beaches along the Arabian Gulf',
      'Tour the historic Al Fahidi neighborhood and Dubai Creek'
    ]
  },
  {
    id: 6,
    name: 'Maldives Paradise',
    description: 'Ultimate luxury beach getaway',
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=2071&auto=format&fit=crop',
    price: '98,999',
    rating: 4.9,
    location: 'Maldives',
    duration: '5 Days',
    longDescription: "Experience luxury overwater villas, crystal-clear turquoise waters, and pristine white sandy beaches in the Maldives. Enjoy world-class snorkeling and diving among vibrant coral reefs, indulge in spa treatments, and witness breathtaking sunsets in this tropical paradise.",
    highlights: [
      'Stay in luxurious overwater villas with direct ocean access',
      'Snorkel or dive among vibrant coral reefs and tropical fish',
      'Enjoy romantic dinners on private beaches',
      'Experience underwater restaurants and spas',
      'Take a sunset cruise to spot dolphins'
    ]
  },
];

const FeaturedDestinations = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [sectionRef, isInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [selectedDestination, setSelectedDestination] = useState<null | typeof featuredDestinations[0]>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const handleOpenModal = (destination: typeof featuredDestinations[0]) => {
    setSelectedDestination(destination);
    setIsModalOpen(true);
  };

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
                    className="h-full w-full object-cover"
                    priority={index < 3}
                  />
                  <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                    ₹{destination.price}
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
                  <button
                    onClick={() => handleOpenModal(destination)}
                    className="inline-flex items-center text-travel-600 hover:text-travel-700 transition-colors font-medium"
                  >
                    <span>Explore More</span>
                    <ArrowRight size={16} className="ml-1" />
                  </button>
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
      
      <DestinationDetailsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        destination={selectedDestination}
      />
    </section>
  );
};

export default FeaturedDestinations;
