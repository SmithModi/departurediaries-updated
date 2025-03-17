
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { cn } from '@/lib/utils';
import AnimatedImage from '../shared/AnimatedImage';
import SectionHeading from '../shared/SectionHeading';
import { useInView } from '@/utils/animations';

// Sample testimonials data
const testimonials = [
  {
    id: 1,
    name: 'Alex Johnson',
    location: 'Dubai Trip',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop',
    testimonial: 'My trip to Dubai was absolutely amazing! The attention to detail in planning every aspect of the journey made it truly stress-free. From the luxurious accommodations to the expertly guided tours, everything exceeded my expectations.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Sophia Williams',
    location: 'Bali Adventure',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop',
    testimonial: 'Departure Diaries created a perfect Bali itinerary that balanced relaxation and adventure. The private villa they arranged was stunning, and the local experiences felt authentic rather than touristy. I\'ll definitely book with them again!',
    rating: 5,
  },
  {
    id: 3,
    name: 'Michael Chen',
    location: 'Singapore Experience',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070&auto=format&fit=crop',
    testimonial: "The Singapore package was incredible value for money. The team's knowledge of the city allowed us to experience both iconic attractions and hidden gems. Their restaurant recommendations were spot on too!",
    rating: 4,
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [ref, isInView] = useInView({ threshold: 0.1, triggerOnce: true });

  const nextTestimonial = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
  };

  // Generate stars based on rating
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <svg 
        key={index} 
        className={cn(
          "w-5 h-5",
          index < rating ? "text-yellow-400" : "text-gray-300"
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
      ref={ref as React.RefObject<HTMLDivElement>}
      className="section-padding relative bg-gray-50 dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Traveler Stories"
          subtitle="Hear what our clients have to say about their experiences with us"
          centered={true}
        />

        <div
          className={cn(
            "max-w-4xl mx-auto transition-all duration-700",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          )}
        >
          <div className="relative">
            <div className="absolute -top-8 left-0 opacity-30">
              <Quote size={64} className="text-travel-500" />
            </div>

            {/* Testimonial Cards */}
            <div className="relative overflow-hidden rounded-2xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="w-full flex-shrink-0 p-8 md:p-10 bg-white dark:bg-gray-800 rounded-2xl shadow-sm"
                  >
                    <div className="flex flex-col md:flex-row gap-6 md:gap-10">
                      <div className="flex-shrink-0">
                        <div className="w-24 h-24 rounded-full overflow-hidden">
                          <AnimatedImage
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-full h-full"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="flex mb-2">{renderStars(testimonial.rating)}</div>
                        <p className="text-gray-700 dark:text-gray-300 mb-6 italic">
                          "{testimonial.testimonial}"
                        </p>
                        <div>
                          <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                          <p className="text-gray-500 dark:text-gray-400">{testimonial.location}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center mt-8 gap-4">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={24} />
              </button>
              {/* Dots Indicator */}
              <div className="flex items-center gap-2 mx-4">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={cn(
                      "w-2.5 h-2.5 rounded-full transition-all",
                      activeIndex === index 
                        ? "bg-travel-600 w-5" 
                        : "bg-gray-300 dark:bg-gray-700"
                    )}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
