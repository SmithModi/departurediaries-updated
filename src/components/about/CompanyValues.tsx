
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "@/utils/animations";

export const CompanyValues = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  
  const values = [
    {
      title: "Excellence",
      description: "We strive to exceed expectations in every aspect of our service.",
      icon: "🌟",
      delay: 0.1
    },
    {
      title: "Integrity",
      description: "We operate with honesty, transparency, and ethical principles.",
      icon: "🤝",
      delay: 0.3
    },
    {
      title: "Personalization",
      description: "We recognize that each traveler is unique and tailor our services accordingly.",
      icon: "✨",
      delay: 0.5
    },
    {
      title: "Sustainability",
      description: "We are committed to promoting responsible travel practices.",
      icon: "🌍",
      delay: 0.7
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-800 mb-4">Our Values</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The principles that guide everything we do
          </p>
        </div>
        
        <div 
          ref={ref} 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ 
                duration: 0.6, 
                delay: value.delay,
                ease: "easeOut" 
              }}
              className="bg-white rounded-xl shadow-md p-8 text-center"
            >
              <div className="text-4xl mb-4">{value.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
