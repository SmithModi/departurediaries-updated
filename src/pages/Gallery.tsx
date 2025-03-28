
import { useEffect, useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SectionHeading from '@/components/shared/SectionHeading';
import { useInView } from '@/utils/animations';
import { cn } from '@/lib/utils';
import AnimatedImage from '@/components/shared/AnimatedImage';
import { Camera } from 'lucide-react';

// Gallery images array - Updated with more stable image URLs
const galleryImages = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop',
    alt: 'Dubai Skyline',
    location: 'Dubai, UAE',
    category: 'Cities'
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1604881991720-f91add269bed?q=80&w=2071&auto=format&fit=crop',
    alt: 'Bali Rice Terraces',
    location: 'Bali, Indonesia',
    category: 'Nature'
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=2070&auto=format&fit=crop',
    alt: 'Singapore Marina Bay',
    location: 'Singapore',
    category: 'Cities'
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1555952494-efd681c7e3f9?q=80&w=2070&auto=format&fit=crop',
    alt: 'Kashmir Landscape',
    location: 'Kashmir, India',
    category: 'Mountains'
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1557750255-c76072a7aad1?q=80&w=2070&auto=format&fit=crop',
    alt: 'Vietnam Boat Tour',
    location: 'Ha Long Bay, Vietnam',
    category: 'Water'
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1516638812782-8e3bae70c72a?q=80&w=2071&auto=format&fit=crop',
    alt: 'Ladakh Mountains',
    location: 'Ladakh, India',
    category: 'Mountains'
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2070&auto=format&fit=crop',
    alt: 'Mountain Sunset',
    location: 'Swiss Alps',
    category: 'Mountains'
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?q=80&w=2070&auto=format&fit=crop',
    alt: 'River Between Mountains',
    location: 'Norway',
    category: 'Nature'
  },
  {
    id: 9,
    src: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=2070&auto=format&fit=crop',
    alt: 'Orange Flowers',
    location: 'Netherlands',
    category: 'Nature'
  },
  {
    id: 10,
    src: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=2070&auto=format&fit=crop',
    alt: 'Forest Trees',
    location: 'Oregon, USA',
    category: 'Nature'
  },
  {
    id: 11,
    src: 'https://images.unsplash.com/photo-1604881991720-f91add269bed?q=80&w=2071&auto=format&fit=crop',
    alt: 'Pine Trees',
    location: 'Canada',
    category: 'Nature'
  },
  {
    id: 12,
    src: 'https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?q=80&w=2070&auto=format&fit=crop',
    alt: 'Sun Through Trees',
    location: 'Redwood Forest, USA',
    category: 'Nature'
  }
];

// Gallery Categories
const categories = ['All', 'Cities', 'Mountains', 'Nature', 'Water'];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [galleryRef, isGalleryInView] = useInView({ threshold: 0.1, triggerOnce: true });
  
  // Filtered images based on selected category
  const filteredImages = selectedCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(image => image.category === selectedCategory);

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Page Header */}
      <div className="relative pt-24 pb-16 md:pb-24 bg-gradient-to-r from-travel-700 to-travel-900 text-white">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 md:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Travel Gallery
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Explore stunning visuals from our featured destinations around the world
            </p>
          </div>
        </div>
      </div>
      
      <main className="flex-grow max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <SectionHeading
          title="Captivating Destinations"
          subtitle="Visual stories from around the world"
          centered
          className="mb-12"
        />
        
        {/* Categories Filter */}
        <div className="flex flex-wrap justify-center mb-10 gap-2">
          {categories.map((category) => (
            <button
              key={category}
              className={cn(
                "px-4 py-2 rounded-full transition-colors",
                selectedCategory === category
                  ? "bg-travel-600 text-white"
                  : "bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
              )}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Gallery Grid */}
        <div 
          ref={galleryRef as React.RefObject<HTMLDivElement>}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className={cn(
                "group relative overflow-hidden rounded-xl shadow-md transition-all hover-scale",
                "transition-all duration-700",
                isGalleryInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12",
                { "delay-100": index % 3 === 0 },
                { "delay-200": index % 3 === 1 },
                { "delay-300": index % 3 === 2 }
              )}
            >
              <AnimatedImage
                src={image.src}
                alt={image.alt}
                className="aspect-[4/3] object-cover w-full"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                <h3 className="text-white font-bold text-lg">{image.alt}</h3>
                <div className="flex items-center text-white/90 text-sm mt-1">
                  <Camera size={14} className="mr-1" />
                  <span>{image.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Gallery Highlight - Made Ayodhya image smaller */}
        <div className="mt-16 mb-12">
          <SectionHeading
            title="Highlighted Adventures"
            subtitle="Immerse yourself in these breathtaking landscapes"
            centered
            className="mb-8"
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="relative rounded-xl overflow-hidden aspect-square lg:aspect-[4/3]">
              <AnimatedImage
                src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=2070&auto=format&fit=crop"
                alt="Mountain Summit"
                className="w-full h-full object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-white font-bold text-xl">Misty Mountain Peaks</h3>
                <p className="text-white/90">Explore the tranquility above the clouds</p>
              </div>
            </div>
            
            {/* Ayodhya Ram Mandir - Smaller size */}
            <div className="relative rounded-xl overflow-hidden aspect-square lg:aspect-[4/3]">
              <AnimatedImage
                src="https://images.meesho.com/images/products/383833302/axe8s_512.webp"
                alt="Ram Mandir Ayodhya"
                className="w-full h-full object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-white font-bold text-xl">Ram Mandir, Ayodhya</h3>
                <p className="text-white/90">Experience zero convenience fee on Ayodhya flights</p>
              </div>
            </div>
            
            <div className="relative rounded-xl overflow-hidden aspect-square lg:aspect-[4/3]">
              <AnimatedImage
                src="https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?q=80&w=2070&auto=format&fit=crop"
                alt="Starry Night"
                className="w-full h-full object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-white font-bold text-xl">Stargazing Paradise</h3>
                <p className="text-white/90">Witness the universe in all its glory</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Gallery;
