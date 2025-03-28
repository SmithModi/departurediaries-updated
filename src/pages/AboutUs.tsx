
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "@/utils/animations";
import { Layout } from "@/components/layout/Layout";
import { ServiceCard } from "@/components/about/ServiceCard";
import { AboutHero } from "@/components/about/AboutHero";
import { CompanyValues } from "@/components/about/CompanyValues";
import { Link } from "react-router-dom";

const AboutUs = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <Layout>
      <AboutHero />
      
      <section className="bg-gradient-to-b from-white to-sky-50 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div 
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-800 mb-6">Our Story</h2>
            <p className="text-lg text-gray-600 mb-6">
              Founded in 2010, Wanderlust Travel has grown from a small team of passionate travelers to a full-service travel agency helping thousands of adventurers explore the world each year.
            </p>
            <p className="text-lg text-gray-600">
              Our mission is simple: to create unforgettable travel experiences that transform lives and broaden horizons. Whether you're seeking relaxation on pristine beaches, adventure in mountain ranges, or cultural immersion in vibrant cities, we're here to make your travel dreams a reality.
            </p>
          </motion.div>
        </div>
      </section>

      <CompanyValues />
      
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-800 mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We offer comprehensive travel solutions tailored to your needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              title="Air Ticketing" 
              description="Domestic and international flight bookings at competitive prices with 24/7 support."
              icon="Plane"
              color="bg-travel-100"
              hoverColor="hover:bg-travel-200"
            />
            <ServiceCard 
              title="Holiday Packages" 
              description="Customized vacation packages designed around your preferences, budget, and schedule."
              icon="Palmtree"
              color="bg-sunset-100"
              hoverColor="hover:bg-sunset-200"
            />
            <ServiceCard 
              title="Hotel Booking" 
              description="Handpicked accommodations ranging from luxury resorts to boutique hotels worldwide."
              icon="Hotel"
              color="bg-sand-100"
              hoverColor="hover:bg-sand-200"
            />
            <ServiceCard 
              title="Tourist Visa Service" 
              description="Hassle-free visa processing with expert guidance for destinations around the globe."
              icon="FileCheck"
              color="bg-travel-100"
              hoverColor="hover:bg-travel-200"
            />
            <ServiceCard 
              title="MICE" 
              description="Meetings, Incentives, Conferences, and Exhibitions planning for corporate clients."
              icon="Users"
              color="bg-sunset-100"
              hoverColor="hover:bg-sunset-200"
            />
            <ServiceCard 
              title="Travel Insurance" 
              description="Comprehensive travel protection plans for peace of mind during your journey."
              icon="Shield"
              color="bg-sand-100"
              hoverColor="hover:bg-sand-200"
            />
          </div>
        </div>
      </section>
      
      {/* Meet Our Team section removed */}
      
      <section className="py-16 md:py-24 bg-gradient-to-b from-travel-50 to-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h2 className="text-3xl font-display font-bold text-gray-800 mb-4">Special Ayodhya Offer</h2>
                <div className="mb-4 inline-flex items-center bg-sunset-100 text-sunset-800 px-4 py-2 rounded-full font-medium text-sm">
                  Exclusive Deal
                </div>
                <p className="text-lg text-gray-600 mb-8">
                  <span className="font-bold text-travel-700">Pay ZERO Convenience Fee FOREVER</span> on all flight bookings to Ayodhya! 
                  Experience spiritual journeys without any extra costs. Book now and enjoy our special offer exclusively 
                  designed for pilgrims and travelers visiting the sacred city.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/contact" className="inline-flex items-center justify-center bg-travel-600 hover:bg-travel-700 text-white transition-colors px-6 py-3 rounded-lg font-medium">
                    Book Ayodhya Flights
                  </Link>
                  <Link to="/destinations" className="inline-flex items-center justify-center bg-white border border-travel-600 text-travel-600 hover:bg-travel-50 transition-colors px-6 py-3 rounded-lg font-medium">
                    Explore Destinations
                  </Link>
                </div>
              </div>
              <div className="relative h-80 md:h-auto">
                <img 
                  src="https://images.meesho.com/images/products/383833302/axe8s_512.webp" 
                  alt="Ram Mandir Ayodhya" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutUs;
