
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "@/utils/animations";
import { Layout } from "@/components/layout/Layout";
import { ServiceCard } from "@/components/about/ServiceCard";
import { TeamMember } from "@/components/about/TeamMember";
import { AboutHero } from "@/components/about/AboutHero";
import { CompanyValues } from "@/components/about/CompanyValues";

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
      
      <section className="py-16 md:py-24 bg-travel-700 text-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Meet Our Team</h2>
            <p className="text-lg max-w-2xl mx-auto opacity-90">
              Our experienced team of travel enthusiasts is dedicated to creating unforgettable experiences
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <TeamMember 
              name="Sarah Johnson" 
              role="Founder & CEO" 
              image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&auto=format&fit=crop&q=80"
              bio="With over 15 years in the travel industry, Sarah founded Wanderlust Travel with a vision to create authentic travel experiences."
            />
            <TeamMember 
              name="David Chen" 
              role="Head of Destinations" 
              image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&auto=format&fit=crop&q=80"
              bio="David's extensive knowledge of global destinations ensures our packages offer the perfect balance of popular attractions and hidden gems."
            />
            <TeamMember 
              name="Priya Patel" 
              role="Travel Consultant" 
              image="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&auto=format&fit=crop&q=80"
              bio="Priya specializes in luxury travel and has personally visited over 50 countries, bringing firsthand knowledge to her client consultations."
            />
            <TeamMember 
              name="Michael Rodriguez" 
              role="Adventure Specialist" 
              image="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&auto=format&fit=crop&q=80"
              bio="From trekking in Nepal to diving in the Great Barrier Reef, Michael crafts unforgettable adventure experiences."
            />
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24 bg-gradient-to-b from-travel-50 to-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h2 className="text-3xl font-display font-bold text-gray-800 mb-6">Ready to Start Your Journey?</h2>
                <p className="text-lg text-gray-600 mb-8">
                  Let us help you plan your perfect getaway. Our travel experts are ready to create a personalized itinerary that matches your dreams and budget.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="/contact" className="inline-flex items-center justify-center bg-travel-600 hover:bg-travel-700 text-white transition-colors px-6 py-3 rounded-lg font-medium">
                    Contact Us
                  </a>
                  <a href="/destinations" className="inline-flex items-center justify-center bg-white border border-travel-600 text-travel-600 hover:bg-travel-50 transition-colors px-6 py-3 rounded-lg font-medium">
                    Explore Destinations
                  </a>
                </div>
              </div>
              <div className="relative h-64 md:h-auto">
                <img 
                  src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&auto=format&fit=crop&q=80" 
                  alt="Scenic mountain view" 
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
