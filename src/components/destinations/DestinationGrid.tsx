
import { useState } from 'react';
import { Search, Filter, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import DestinationCard from './DestinationCard';
import { useInView } from '@/utils/animations';

// Sample destinations data
const destinationsData = [
  // Domestic Destinations
  {
    id: 1,
    name: 'Himachal Pradesh',
    location: 'North India',
    image: 'https://images.unsplash.com/photo-1626621214907-ce1eda06cf7f?q=80&w=2070&auto=format&fit=crop',
    description: 'Experience the majestic Himalayan landscapes with snow-capped mountains, lush valleys, and charming hill stations.',
    price: '24,999',
    duration: '6 Days',
    rating: 4.8,
    tags: ['Mountain', 'Nature', 'Adventure']
  },
  {
    id: 2,
    name: 'Jammu & Kashmir',
    location: 'North India',
    image: 'https://images.unsplash.com/photo-1566837497312-7be4ebb33e06?q=80&w=2070&auto=format&fit=crop',
    description: 'Discover the paradise on Earth with beautiful lakes, meadows, and gardens surrounded by snow-capped mountains.',
    price: '28,500',
    duration: '7 Days',
    rating: 4.9,
    tags: ['Mountain', 'Nature', 'Culture']
  },
  {
    id: 3,
    name: 'Leh Ladakh',
    location: 'North India',
    image: 'https://images.unsplash.com/photo-1533130061792-64b345e4a833?q=80&w=2070&auto=format&fit=crop',
    description: 'Journey through the high-altitude desert landscapes with ancient monasteries, pristine lakes, and stunning mountain passes.',
    price: '32,999',
    duration: '8 Days',
    rating: 4.9,
    tags: ['Adventure', 'Mountain', 'Culture']
  },
  {
    id: 4,
    name: 'Sikkim & Darjeeling',
    location: 'North East India',
    image: 'https://images.unsplash.com/photo-1544958574-d4b7515e105d?q=80&w=2070&auto=format&fit=crop',
    description: 'Explore the breathtaking landscapes of the Eastern Himalayas with tea gardens, Buddhist monasteries, and views of Kanchenjunga.',
    price: '26,499',
    duration: '7 Days',
    rating: 4.7,
    tags: ['Mountain', 'Culture', 'Nature']
  },
  {
    id: 5,
    name: 'South India Tour',
    location: 'Tamil Nadu & Karnataka',
    image: 'https://images.unsplash.com/photo-1516715094483-75da7dee9758?q=80&w=2067&auto=format&fit=crop',
    description: 'Immerse yourself in the rich cultural heritage, ancient temples, and beautiful landscapes of South India.',
    price: '22,999',
    duration: '8 Days',
    rating: 4.6,
    tags: ['Culture', 'Heritage', 'Nature']
  },
  {
    id: 6,
    name: 'Kerala Backwaters',
    location: 'Kerala, India',
    image: 'https://images.unsplash.com/photo-1602215138096-d188b163a215?q=80&w=2070&auto=format&fit=crop',
    description: 'Experience the serene backwaters, lush greenery, pristine beaches, and unique culture of God's Own Country.',
    price: '25,999',
    duration: '6 Days',
    rating: 4.8,
    tags: ['Beach', 'Nature', 'Culture']
  },
  {
    id: 7,
    name: 'Goa Beach Escape',
    location: 'Goa, India',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=2074&auto=format&fit=crop',
    description: 'Relax on pristine beaches, enjoy water sports, and experience the unique blend of Indian and Portuguese cultures.',
    price: '18,999',
    duration: '5 Days',
    rating: 4.7,
    tags: ['Beach', 'Adventure', 'Party']
  },
  
  // International Destinations
  {
    id: 8,
    name: 'Dubai Extravaganza',
    location: 'Dubai, UAE',
    image: 'https://images.unsplash.com/photo-1582672060674-bc2bd808a8f5?q=80&w=2071&auto=format&fit=crop',
    description: 'Experience the luxury and architectural marvels of Dubai with shopping, desert safaris, and futuristic attractions.',
    price: '78,999',
    duration: '6 Days',
    rating: 4.8,
    tags: ['Luxury', 'City', 'Shopping']
  },
  {
    id: 9,
    name: 'Thailand Adventure',
    location: 'Bangkok & Phuket, Thailand',
    image: 'https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?q=80&w=2070&auto=format&fit=crop',
    description: 'Discover the perfect blend of vibrant city life, beautiful beaches, and rich cultural heritage.',
    price: '65,999',
    duration: '7 Days',
    rating: 4.7,
    tags: ['Beach', 'Culture', 'Adventure']
  },
  {
    id: 10,
    name: 'Singapore Explorer',
    location: 'Singapore',
    image: 'https://images.unsplash.com/photo-1565967511849-76a60a516170?q=80&w=2071&auto=format&fit=crop',
    description: 'Experience the perfect blend of urban sophistication, multicultural heritage, and futuristic attractions.',
    price: '72,999',
    duration: '5 Days',
    rating: 4.8,
    tags: ['City', 'Family', 'Shopping']
  },
  {
    id: 11,
    name: 'Malaysia Highlights',
    location: 'Kuala Lumpur & Langkawi',
    image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=2064&auto=format&fit=crop',
    description: 'Explore modern cities, pristine beaches, lush rainforests, and the rich multicultural heritage of Malaysia.',
    price: '68,500',
    duration: '6 Days',
    rating: 4.6,
    tags: ['City', 'Beach', 'Nature']
  },
  {
    id: 12,
    name: 'Bali Paradise',
    location: 'Bali, Indonesia',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=2938&auto=format&fit=crop',
    description: 'Unwind on pristine beaches, explore ancient temples, and immerse yourself in the unique Balinese culture.',
    price: '63,999',
    duration: '7 Days',
    rating: 4.9,
    tags: ['Beach', 'Culture', 'Nature']
  },
  {
    id: 13,
    name: 'Vietnam Heritage',
    location: 'Multiple Cities, Vietnam',
    image: 'https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=2070&auto=format&fit=crop',
    description: 'Journey through Vietnam's rich cultural heritage, spectacular landscapes, and vibrant city life.',
    price: '70,999',
    duration: '8 Days',
    rating: 4.8,
    tags: ['Culture', 'Adventure', 'Nature']
  },
  {
    id: 14,
    name: 'Mauritius Retreat',
    location: 'Mauritius',
    image: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?q=80&w=2070&auto=format&fit=crop',
    description: 'Relax in paradise with pristine beaches, crystal-clear waters, and luxurious resorts on this tropical island.',
    price: '82,999',
    duration: '6 Days',
    rating: 4.9,
    tags: ['Beach', 'Luxury', 'Honeymoon']
  },
  {
    id: 15,
    name: 'Sri Lanka Explorer',
    location: 'Multiple Cities, Sri Lanka',
    image: 'https://images.unsplash.com/photo-1586028371031-0821c079e2e7?q=80&w=1972&auto=format&fit=crop',
    description: 'Discover ancient ruins, wildlife sanctuaries, tea plantations, and pristine beaches in this tropical paradise.',
    price: '59,999',
    duration: '7 Days',
    rating: 4.7,
    tags: ['Culture', 'Nature', 'Beach']
  },
  {
    id: 16,
    name: 'Hong Kong & Macau',
    location: 'Hong Kong & Macau',
    image: 'https://images.unsplash.com/photo-1536599424071-0b215a388ba7?q=80&w=2070&auto=format&fit=crop',
    description: 'Experience the unique blend of East and West, modern skyscrapers, vibrant markets, and entertainment options.',
    price: '76,999',
    duration: '6 Days',
    rating: 4.7,
    tags: ['City', 'Shopping', 'Entertainment']
  },
  {
    id: 17,
    name: 'Baku Adventure',
    location: 'Baku, Azerbaijan',
    image: 'https://images.unsplash.com/photo-1665580652513-91ac30a69e36?q=80&w=2070&auto=format&fit=crop',
    description: 'Explore the fascinating blend of ancient history and modern architecture in this emerging destination.',
    price: '79,999',
    duration: '5 Days',
    rating: 4.6,
    tags: ['Culture', 'City', 'History']
  },
  {
    id: 18,
    name: 'Georgia Tour',
    location: 'Multiple Cities, Georgia',
    image: 'https://images.unsplash.com/photo-1631002165139-81c716532830?q=80&w=2070&auto=format&fit=crop',
    description: 'Discover breathtaking mountain landscapes, ancient churches, and delicious cuisine in this Caucasian gem.',
    price: '74,999',
    duration: '7 Days',
    rating: 4.8,
    tags: ['Nature', 'Culture', 'History']
  },
  {
    id: 19,
    name: 'Armenia Experience',
    location: 'Multiple Cities, Armenia',
    image: 'https://images.unsplash.com/photo-1543862475-eb136770ae9b?q=80&w=2070&auto=format&fit=crop',
    description: 'Explore one of the world's oldest civilizations with ancient monasteries, stunning landscapes, and rich culture.',
    price: '71,999',
    duration: '6 Days',
    rating: 4.7,
    tags: ['History', 'Culture', 'Nature']
  },
  {
    id: 20,
    name: 'Maldives Paradise',
    location: 'Maldives',
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=2071&auto=format&fit=crop',
    description: 'Experience luxury overwater villas, crystal-clear turquoise waters, and pristine white sandy beaches.',
    price: '98,999',
    duration: '5 Days',
    rating: 4.9,
    tags: ['Luxury', 'Beach', 'Honeymoon']
  },
  {
    id: 21,
    name: 'Bhutan Discovery',
    location: 'Multiple Cities, Bhutan',
    image: 'https://images.unsplash.com/photo-1533903345306-15d1c30952de?q=80&w=2069&auto=format&fit=crop',
    description: 'Immerse yourself in the mystical land of happiness with ancient monasteries, untouched natural beauty, and unique culture.',
    price: '69,999',
    duration: '7 Days',
    rating: 4.8,
    tags: ['Culture', 'Nature', 'Adventure']
  }
];

// Filter categories
const categories = [
  'All',
  'Beach',
  'Mountain',
  'City',
  'Adventure',
  'Culture',
  'Luxury',
  'Nature',
  'Family',
  'History',
  'Honeymoon',
];

// Price ranges
const priceRanges = [
  { label: 'All Prices', value: 'all' },
  { label: 'Under ₹30,000', value: 'under-30000' },
  { label: '₹30,000 - ₹60,000', value: '30000-60000' },
  { label: '₹60,000 - ₹80,000', value: '60000-80000' },
  { label: 'Over ₹80,000', value: 'over-80000' },
];

// Duration options
const durationOptions = [
  { label: 'Any Duration', value: 'any' },
  { label: '1-5 Days', value: '1-5' },
  { label: '6-7 Days', value: '6-7' },
  { label: '8+ Days', value: '8+' },
];

// Region options
const regionOptions = [
  { label: 'All Regions', value: 'all' },
  { label: 'Domestic', value: 'domestic' },
  { label: 'International', value: 'international' },
];

const DestinationGrid = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPrice, setSelectedPrice] = useState('all');
  const [selectedDuration, setSelectedDuration] = useState('any');
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
  
  const [ref, isInView] = useInView({ threshold: 0.1, triggerOnce: true });

  // Filter destinations based on search and filters
  const filteredDestinations = destinationsData.filter((destination) => {
    // Search term filter
    const matchesSearch = searchTerm === '' ||
      destination.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      destination.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      destination.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Category filter
    const matchesCategory = selectedCategory === 'All' ||
      destination.tags.includes(selectedCategory);
    
    // Price filter
    let matchesPrice = true;
    const price = parseInt(destination.price.replace(/,/g, ''));
    if (selectedPrice === 'under-30000') {
      matchesPrice = price < 30000;
    } else if (selectedPrice === '30000-60000') {
      matchesPrice = price >= 30000 && price <= 60000;
    } else if (selectedPrice === '60000-80000') {
      matchesPrice = price > 60000 && price <= 80000;
    } else if (selectedPrice === 'over-80000') {
      matchesPrice = price > 80000;
    }
    
    // Duration filter
    let matchesDuration = true;
    const days = parseInt(destination.duration.split(' ')[0]);
    if (selectedDuration === '1-5') {
      matchesDuration = days >= 1 && days <= 5;
    } else if (selectedDuration === '6-7') {
      matchesDuration = days >= 6 && days <= 7;
    } else if (selectedDuration === '8+') {
      matchesDuration = days >= 8;
    }
    
    // Region filter
    let matchesRegion = true;
    if (selectedRegion === 'domestic') {
      matchesRegion = destination.id <= 7; // IDs 1-7 are domestic
    } else if (selectedRegion === 'international') {
      matchesRegion = destination.id > 7; // IDs 8+ are international
    }
    
    return matchesSearch && matchesCategory && matchesPrice && matchesDuration && matchesRegion;
  });

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('All');
    setSelectedPrice('all');
    setSelectedDuration('any');
    setSelectedRegion('all');
  };

  const hasActiveFilters = searchTerm !== '' || selectedCategory !== 'All' || selectedPrice !== 'all' || selectedDuration !== 'any' || selectedRegion !== 'all';

  return (
    <div ref={ref as React.RefObject<HTMLDivElement>}>
      {/* Search and Filters */}
      <div className="mb-8">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Search */}
          <div className="flex-grow">
            <div className="relative">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search destinations, locations, experiences..."
                className="w-full px-4 py-3 pl-10 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-travel-500"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            </div>
          </div>
          
          {/* Region Filter (Desktop) */}
          <div className="hidden lg:block">
            <select
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
              className="h-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-travel-500"
            >
              {regionOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          
          {/* Filter Button (Mobile) */}
          <div className="lg:hidden">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="w-full flex items-center justify-center px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700"
            >
              <Filter size={18} className="mr-2" />
              <span>Filters</span>
            </button>
          </div>
          
          {/* Categories (Desktop) */}
          <div className="hidden lg:flex space-x-2 overflow-x-auto pt-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors",
                  selectedCategory === category
                    ? "bg-travel-600 text-white"
                    : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        {/* Mobile Filters */}
        <div className={cn(
          "mt-4 lg:hidden overflow-hidden transition-all duration-300",
          showFilters ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        )}>
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
            <div className="mb-4">
              <h3 className="font-medium mb-2">Region</h3>
              <select
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
                className="w-full p-2 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-travel-500"
              >
                {regionOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            
            <div className="mb-4">
              <h3 className="font-medium mb-2">Categories</h3>
              <div className="flex flex-wrap gap-2 pt-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={cn(
                      "px-3 py-1 rounded-lg text-sm font-medium transition-colors",
                      selectedCategory === category
                        ? "bg-travel-600 text-white"
                        : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                    )}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="mb-4">
              <h3 className="font-medium mb-2">Price Range</h3>
              <select
                value={selectedPrice}
                onChange={(e) => setSelectedPrice(e.target.value)}
                className="w-full p-2 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-travel-500"
              >
                {priceRanges.map((range) => (
                  <option key={range.value} value={range.value}>
                    {range.label}
                  </option>
                ))}
              </select>
            </div>
            
            <div className="mb-4">
              <h3 className="font-medium mb-2">Duration</h3>
              <select
                value={selectedDuration}
                onChange={(e) => setSelectedDuration(e.target.value)}
                className="w-full p-2 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-travel-500"
              >
                {durationOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            
            <button
              onClick={clearFilters}
              className="w-full py-2 text-center text-travel-600 font-medium"
            >
              Clear All Filters
            </button>
          </div>
        </div>
        
        {/* Active Filters */}
        {hasActiveFilters && (
          <div className="mt-4 flex items-center">
            <span className="text-sm text-gray-500 dark:text-gray-400 mr-2">Active Filters:</span>
            <div className="flex flex-wrap gap-2">
              {searchTerm && (
                <div className="inline-flex items-center bg-gray-100 dark:bg-gray-800 text-sm rounded-full px-3 py-1">
                  <span>"{searchTerm}"</span>
                  <button onClick={() => setSearchTerm('')} className="ml-1">
                    <X size={14} />
                  </button>
                </div>
              )}
              
              {selectedRegion !== 'all' && (
                <div className="inline-flex items-center bg-gray-100 dark:bg-gray-800 text-sm rounded-full px-3 py-1">
                  <span>
                    {regionOptions.find(option => option.value === selectedRegion)?.label}
                  </span>
                  <button onClick={() => setSelectedRegion('all')} className="ml-1">
                    <X size={14} />
                  </button>
                </div>
              )}
              
              {selectedCategory !== 'All' && (
                <div className="inline-flex items-center bg-gray-100 dark:bg-gray-800 text-sm rounded-full px-3 py-1">
                  <span>{selectedCategory}</span>
                  <button onClick={() => setSelectedCategory('All')} className="ml-1">
                    <X size={14} />
                  </button>
                </div>
              )}
              
              {selectedPrice !== 'all' && (
                <div className="inline-flex items-center bg-gray-100 dark:bg-gray-800 text-sm rounded-full px-3 py-1">
                  <span>
                    {priceRanges.find(range => range.value === selectedPrice)?.label}
                  </span>
                  <button onClick={() => setSelectedPrice('all')} className="ml-1">
                    <X size={14} />
                  </button>
                </div>
              )}
              
              {selectedDuration !== 'any' && (
                <div className="inline-flex items-center bg-gray-100 dark:bg-gray-800 text-sm rounded-full px-3 py-1">
                  <span>
                    {durationOptions.find(option => option.value === selectedDuration)?.label}
                  </span>
                  <button onClick={() => setSelectedDuration('any')} className="ml-1">
                    <X size={14} />
                  </button>
                </div>
              )}
              
              <button
                onClick={clearFilters}
                className="text-travel-600 text-sm font-medium hover:underline"
              >
                Clear All
              </button>
            </div>
          </div>
        )}
      </div>
      
      {/* Results */}
      <div className="mb-4">
        <p className="text-gray-600 dark:text-gray-400">
          {filteredDestinations.length === 0 ? 'No destinations found' : `${filteredDestinations.length} destination${filteredDestinations.length !== 1 ? 's' : ''} found`}
        </p>
      </div>
      
      {/* Destinations Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDestinations.map((destination, index) => (
          <DestinationCard
            key={destination.id}
            id={destination.id}
            name={destination.name}
            location={destination.location}
            image={destination.image}
            description={destination.description}
            price={destination.price}
            duration={destination.duration}
            rating={destination.rating}
            className={cn(
              "transition-all duration-700",
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12",
              { "transition-delay-200": index % 3 === 1 },
              { "transition-delay-400": index % 3 === 2 }
            )}
          />
        ))}
      </div>
      
      {/* No Results */}
      {filteredDestinations.length === 0 && (
        <div className="text-center py-16">
          <div className="text-gray-400 mb-4">
            <Search size={48} className="mx-auto" />
          </div>
          <h3 className="text-xl font-semibold mb-2">No destinations found</h3>
          <p className="text-gray-500 dark:text-gray-400 mb-6">
            Try adjusting your search filters or browse all destinations.
          </p>
          <button
            onClick={clearFilters}
            className="px-6 py-3 bg-travel-600 hover:bg-travel-700 text-white rounded-lg transition-colors"
          >
            Clear All Filters
          </button>
        </div>
      )}
    </div>
  );
};

export default DestinationGrid;
