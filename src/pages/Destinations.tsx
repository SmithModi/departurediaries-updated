
import { useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SectionHeading from '@/components/shared/SectionHeading';
import DestinationGrid from '@/components/destinations/DestinationGrid';

const Destinations = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Page Header */}
      <div className="relative pt-24 pb-16 md:pb-24 bg-gradient-to-r from-travel-700 to-travel-900 text-white">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 md:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Explore Our Destinations
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Discover handpicked domestic and international destinations, from majestic Himalayas to exotic beach getaways and vibrant city experiences.
            </p>
          </div>
        </div>
      </div>
      
      <main className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <SectionHeading
          title="Find Your Next Adventure"
          subtitle="Use filters to find the perfect destination for your travel style"
        />
        
        <DestinationGrid />
      </main>
      
      <Footer />
    </div>
  );
};

export default Destinations;
