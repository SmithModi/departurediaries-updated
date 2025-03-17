
import { useState } from 'react';
import { Search, Filter, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import DestinationCard from './DestinationCard';
import { useInView } from '@/utils/animations';

// Sample destinations data
const destinationsData = [
  {
    id: 1,
    name: 'Dubai City Tour',
    location: 'Dubai, UAE',
    image: 'https://images.unsplash.com/photo-1582672060674-bc2bd808a8f5?q=80&w=2071&auto=format&fit=crop',
    description: 'Experience the ultimate luxury and architectural marvels of Dubai with our comprehensive city tour package.',
    price: '1299',
    duration: '5 Days',
    rating: 4.8,
    tags: ['City', 'Luxury']
  },
  {
    id: 2,
    name: 'Bali Beach Retreat',
    location: 'Bali, Indonesia',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=2938&auto=format&fit=crop',
    description: 'Unwind on pristine beaches and immerse yourself in Balinese culture with our specially crafted beach retreat package.',
    price: '999',
    duration: '7 Days',
    rating: 4.9,
    tags: ['Beach', 'Culture']
  },
  {
    id: 3,
    name: 'Singapore Explorer',
    location: 'Singapore',
    image: 'https://images.unsplash.com/photo-1565967511849-76a60a516170?q=80&w=2071&auto=format&fit=crop',
    description: 'Discover the perfect blend of urban sophistication and natural beauty in the garden city of Singapore.',
    price: '1099',
    duration: '4 Days',
    rating: 4.7,
    tags: ['City', 'Family']
  },
  {
    id: 4,
    name: 'Kashmir Serenity',
    location: 'Kashmir, India',
    image: 'https://images.unsplash.com/photo-1566837497312-7be4ebb33e06?q=80&w=2070&auto=format&fit=crop',
    description: 'Experience the breathtaking landscapes and serene beauty of Kashmir, often called "Paradise on Earth".',
    price: '899',
    duration: '6 Days',
    rating: 4.9,
    tags: ['Mountain', 'Nature']
  },
  {
    id: 5,
    name: 'Vietnam Heritage Tour',
    location: 'Multiple Cities, Vietnam',
    image: 'https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=2070&auto=format&fit=crop',
    description: 'Journey through Vietnam\'s rich cultural heritage, spectacular landscapes, and vibrant city life.',
    price: '949',
    duration: '8 Days',
    rating: 4.8,
    tags: ['Culture', 'Adventure']
  },
  {
    id: 6,
    name: 'Ladakh Adventure',
    location: 'Ladakh, India',
    image: 'https://images.unsplash.com/photo-1533130061792-64b345e4a833?q=80&w=2070&auto=format&fit=crop',
    description: 'Embark on a thrilling journey through the high-altitude desert landscapes and ancient monasteries of Ladakh.',
    price: '1199',
    duration: '9 Days',
    rating: 4.7,
    tags: ['Adventure', 'Mountain']
  },
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
];

// Price ranges
const priceRanges = [
  { label: 'All Prices', value: 'all' },
  { label: 'Under $500', value: 'under-500' },
  { label: '$500 - $1000', value: '500-1000' },
  { label: '$1000 - $1500', value: '1000-1500' },
  { label: 'Over $1500', value: 'over-1500' },
];

// Duration options
const durationOptions = [
  { label: 'Any Duration', value: 'any' },
  { label: '1-3 Days', value: '1-3' },
  { label: '4-7 Days', value: '4-7' },
  { label: '8+ Days', value: '8+' },
];

const DestinationGrid = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPrice, setSelectedPrice] = useState('all');
  const [selectedDuration, setSelectedDuration] = useState('any');
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
    const price = parseInt(destination.price);
    if (selectedPrice === 'under-500') {
      matchesPrice = price < 500;
    } else if (selectedPrice === '500-1000') {
      matchesPrice = price >= 500 && price <= 1000;
    } else if (selectedPrice === '1000-1500') {
      matchesPrice = price > 1000 && price <= 1500;
    } else if (selectedPrice === 'over-1500') {
      matchesPrice = price > 1500;
    }
    
    // Duration filter
    let matchesDuration = true;
    const days = parseInt(destination.duration.split(' ')[0]);
    if (selectedDuration === '1-3') {
      matchesDuration = days >= 1 && days <= 3;
    } else if (selectedDuration === '4-7') {
      matchesDuration = days >= 4 && days <= 7;
    } else if (selectedDuration === '8+') {
      matchesDuration = days >= 8;
    }
    
    return matchesSearch && matchesCategory && matchesPrice && matchesDuration;
  });

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('All');
    setSelectedPrice('all');
    setSelectedDuration('any');
  };

  const hasActiveFilters = searchTerm !== '' || selectedCategory !== 'All' || selectedPrice !== 'all' || selectedDuration !== 'any';

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
          <div className="hidden lg:flex space-x-2 overflow-x-auto">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors",
                  selectedCategory === category
                    ? "bg-travel-600 text-white"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
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
          showFilters ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        )}>
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
            <div className="mb-4">
              <h3 className="font-medium mb-2">Categories</h3>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={cn(
                      "px-3 py-1 rounded-lg text-sm font-medium transition-colors",
                      selectedCategory === category
                        ? "bg-travel-600 text-white"
                        : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
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
