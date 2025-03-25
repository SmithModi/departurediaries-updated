
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SectionHeading from '@/components/shared/SectionHeading';
import { useInView } from '@/utils/animations';
import { cn } from '@/lib/utils';
import AnimatedImage from '@/components/shared/AnimatedImage';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Calendar, Clock, ArrowRight, ChevronRight, User } from 'lucide-react';

// Updated Blog data with focus on new destinations
const blogPosts = [
  {
    id: 1,
    title: "The Ultimate Dubai Travel Guide for 2024",
    excerpt: "Discover the best attractions, restaurants, and hidden gems in the city of luxury and innovation.",
    date: "June 15, 2023",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop",
    author: "Sarah Williams",
    category: "Travel Guides",
    destination: "Dubai"
  },
  {
    id: 2,
    title: "10 Must-Visit Temples in Bali",
    excerpt: "Explore the spiritual side of Bali through its ancient and magnificent temples.",
    date: "May 22, 2023",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1604881991720-f91add269bed?q=80&w=2071&auto=format&fit=crop",
    author: "Michael Chen",
    category: "Cultural Travel",
    destination: "Bali"
  },
  {
    id: 3,
    title: "Singapore on a Budget: Tips and Tricks",
    excerpt: "How to experience the best of Singapore without breaking the bank.",
    date: "April 10, 2023",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=2070&auto=format&fit=crop",
    author: "David Thompson",
    category: "Budget Travel",
    destination: "Singapore"
  },
  {
    id: 4,
    title: "The Hidden Valleys of Kashmir",
    excerpt: "Venture beyond the tourist spots and discover the untouched beauty of Kashmir's valleys.",
    date: "March 28, 2023",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1555952494-efd681c7e3f9?q=80&w=2070&auto=format&fit=crop",
    author: "Priya Sharma",
    category: "Adventure Travel",
    destination: "Kashmir"
  },
  {
    id: 5,
    title: "A Culinary Journey Through Vietnam",
    excerpt: "Explore the diverse and flavorful cuisine of Vietnam from north to south.",
    date: "February 15, 2023",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1557750255-c76072a7aad1?q=80&w=2070&auto=format&fit=crop",
    author: "Thomas Wright",
    category: "Food & Travel",
    destination: "Vietnam"
  },
  {
    id: 6,
    title: "Trekking in Ladakh: A Comprehensive Guide",
    excerpt: "Everything you need to know about planning a trekking adventure in the majestic landscapes of Ladakh.",
    date: "January 5, 2023",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1516638812782-8e3bae70c72a?q=80&w=2071&auto=format&fit=crop",
    author: "Alex Johnson",
    category: "Adventure Travel",
    destination: "Ladakh"
  },
  {
    id: 7,
    title: "Ayodhya: A Spiritual Journey to Ram Mandir",
    excerpt: "Experience the spiritual essence of Ayodhya and the magnificent Ram Mandir.",
    date: "August 10, 2023",
    readTime: "7 min read",
    image: "https://images.meesho.com/images/products/383833302/axe8s_512.webp",
    author: "James Wilson",
    category: "Spiritual Travel",
    destination: "Ayodhya"
  },
  {
    id: 8,
    title: "Bali's Hidden Beaches: Beyond the Tourist Trails",
    excerpt: "Discover secluded beaches and pristine coastlines away from the crowds in Bali.",
    date: "July 22, 2023",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1544550581-5f7ceaf7f992?q=80&w=2070&auto=format&fit=crop",
    author: "Emily Zhang",
    category: "Beach Travel",
    destination: "Bali"
  },
  {
    id: 9,
    title: "Singapore's Green Escapes: Urban Nature Retreats",
    excerpt: "How Singapore maintains its status as a garden city with lush parks and nature reserves.",
    date: "September 5, 2023",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1492571350019-22de08371fd3?q=80&w=2053&auto=format&fit=crop",
    author: "Olivia Chen",
    category: "Nature Travel",
    destination: "Singapore"
  },
  {
    id: 10,
    title: "Photography Guide to Kashmir's Breathtaking Landscapes",
    excerpt: "Tips and locations for capturing the perfect shots of Kashmir's majestic scenery.",
    date: "October 12, 2023",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1590677879513-e3b6ac8709cf?q=80&w=2070&auto=format&fit=crop",
    author: "Arjun Mehta",
    category: "Photography",
    destination: "Kashmir"
  },
  {
    id: 11,
    title: "Vietnam's Ancient History: Beyond Halong Bay",
    excerpt: "Explore the rich historical sites and cultural landmarks throughout Vietnam.",
    date: "November 8, 2023",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=2070&auto=format&fit=crop",
    author: "Nathan Lee",
    category: "Historical Travel",
    destination: "Vietnam"
  },
  {
    id: 12,
    title: "Winter in Ladakh: A Season of Serenity",
    excerpt: "Experience the tranquil beauty of Ladakh during its snow-covered winter months.",
    date: "December 15, 2023",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1518499845966-9a86ddb68051?q=80&w=2070&auto=format&fit=crop",
    author: "Sophia Patel",
    category: "Seasonal Travel",
    destination: "Ladakh"
  },
  {
    id: 13,
    title: "Dubai for Families: Kid-Friendly Attractions",
    excerpt: "A comprehensive guide to enjoying Dubai with children of all ages.",
    date: "January 20, 2024",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2070&auto=format&fit=crop",
    author: "Robert Carter",
    category: "Family Travel",
    destination: "Dubai"
  },
  {
    id: 14,
    title: "Ayodhya's Festivals: When to Visit Ram Mandir",
    excerpt: "The best times to visit Ayodhya to experience its vibrant festivals and spiritual atmosphere.",
    date: "February 18, 2024",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?q=80&w=2070&auto=format&fit=crop",
    author: "Ravi Kumar",
    category: "Festival Travel",
    destination: "Ayodhya"
  },
  {
    id: 15,
    title: "Singapore's Architectural Marvels",
    excerpt: "Explore Singapore's blend of colonial heritage and futuristic architectural wonders.",
    date: "March 5, 2024",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1568454537842-d933259bb258?q=80&w=2070&auto=format&fit=crop",
    author: "Daniel Tan",
    category: "Architecture",
    destination: "Singapore"
  },
  {
    id: 16,
    title: "Traveling to Ayodhya: Transportation Guide",
    excerpt: "Everything you need to know about getting to Ayodhya with zero convenience fees on flights.",
    date: "April 12, 2024",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1575384043001-f37f476c51a5?q=80&w=1974&auto=format&fit=crop",
    author: "Nisha Kapoor",
    category: "Travel Tips",
    destination: "Ayodhya"
  }
];

// Featured post data - Updated to highlight Ayodhya
const featuredPost = {
  id: 17,
  title: "Ayodhya: The City of Lord Ram and Zero Convenience Fee Flights",
  excerpt: "Discover how to visit the holy city of Ayodhya with exclusive zero convenience fee flights.",
  content: "Ayodhya, the birthplace of Lord Ram, has become one of India's most significant pilgrimage destinations following the inauguration of the grand Ram Mandir. Our travel agency is proud to offer an exclusive benefit to all pilgrims: zero convenience fees on all Ayodhya flight bookings. This special offer allows devotees to visit this sacred city without additional booking charges, making spiritual journeys more accessible. Learn about the best times to visit, accommodation options, and must-see attractions in this comprehensive guide to planning your Ayodhya pilgrimage.",
  date: "May 2, 2024",
  readTime: "10 min read",
  image: "https://images.meesho.com/images/products/383833302/axe8s_512.webp",
  author: "Anand Kakkad",
  category: "Spiritual Travel"
};

// Updated blog categories with Ayodhya/spiritual focus
const categories = [
  { name: "Travel Guides", count: 15 },
  { name: "Adventure Travel", count: 12 },
  { name: "Spiritual Travel", count: 8 },
  { name: "Food & Travel", count: 10 },
  { name: "Budget Travel", count: 7 },
  { name: "Festival Travel", count: 5 },
  { name: "Beach Travel", count: 6 },
  { name: "Nature Travel", count: 8 },
  { name: "Photography", count: 5 },
  { name: "Historical Travel", count: 7 },
  { name: "Family Travel", count: 6 },
  { name: "Architecture", count: 3 }
];

// Destinations filter - Added Ayodhya
const destinations = [
  "All",
  "Dubai",
  "Bali",
  "Singapore",
  "Kashmir",
  "Vietnam",
  "Ladakh",
  "Ayodhya"
];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedDestination, setSelectedDestination] = useState('All');
  const [featuredRef, isFeaturedInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [postsRef, isPostsInView] = useInView({ threshold: 0.1, triggerOnce: true });
  
  // Filter posts by category and destination
  const filteredPosts = blogPosts.filter(post => {
    const categoryMatch = selectedCategory === 'All' || post.category === selectedCategory;
    const destinationMatch = selectedDestination === 'All' || post.destination === selectedDestination;
    return categoryMatch && destinationMatch;
  });

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
              Travel Blog
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Insights, guides, and stories to inspire your next adventure
            </p>
          </div>
        </div>
      </div>
      
      <main className="flex-grow max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
        {/* Featured Post */}
        <div 
          ref={featuredRef as React.RefObject<HTMLDivElement>}
          className={cn(
            "rounded-2xl overflow-hidden shadow-lg mb-16 transition-all duration-700",
            isFeaturedInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          )}
        >
          <div className="grid md:grid-cols-2 gap-0">
            <div className="relative h-64 md:h-full">
              <AnimatedImage
                src={featuredPost.image}
                alt={featuredPost.title}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <div className="bg-white dark:bg-gray-900 p-6 md:p-8 lg:p-10 flex flex-col">
              <div className="text-travel-600 text-sm font-medium mb-2">
                {featuredPost.category}
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-3">
                {featuredPost.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">
                {featuredPost.content}
              </p>
              <div className="flex items-center justify-between mt-6 pt-6 border-t border-gray-200 dark:border-gray-800">
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <User size={16} className="mr-2" />
                  <span>{featuredPost.author}</span>
                  <span className="mx-2">•</span>
                  <Calendar size={16} className="mr-2" />
                  <span>{featuredPost.date}</span>
                  <span className="mx-2">•</span>
                  <Clock size={16} className="mr-2" />
                  <span>{featuredPost.readTime}</span>
                </div>
                <Link
                  to={`/blog/${featuredPost.id}`}
                  className="text-travel-600 hover:text-travel-700 flex items-center font-medium"
                >
                  <span>Read More</span>
                  <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Left Content - Blog Posts */}
          <div className="lg:col-span-3">
            <SectionHeading
              title="Latest Articles"
              subtitle="Explore our collection of travel insights and stories"
              className="mb-8"
            />
            
            {/* Filter Controls */}
            <div className="mb-8">
              {/* Destination Filter */}
              <div className="mb-4">
                <h3 className="font-medium mb-2">Filter by Destination</h3>
                <div className="flex flex-wrap gap-2 pt-2">
                  {destinations.map((destination) => (
                    <button
                      key={destination}
                      onClick={() => setSelectedDestination(destination)}
                      className={cn(
                        "px-4 py-2 rounded-full text-sm transition-colors",
                        selectedDestination === destination
                          ? "bg-travel-600 text-white"
                          : "bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
                      )}
                    >
                      {destination}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Results Count */}
            <div className="mb-6">
              <p className="text-gray-600 dark:text-gray-400">
                {filteredPosts.length === 0 ? 'No articles found' : `${filteredPosts.length} article${filteredPosts.length !== 1 ? 's' : ''} found`}
                {selectedDestination !== 'All' && ` for ${selectedDestination}`}
                {selectedCategory !== 'All' && ` in ${selectedCategory}`}
              </p>
            </div>
            
            {/* Blog Posts Grid */}
            <div 
              ref={postsRef as React.RefObject<HTMLDivElement>}
              className="grid md:grid-cols-2 gap-6"
            >
              {filteredPosts.map((post, index) => (
                <Card 
                  key={post.id}
                  className={cn(
                    "overflow-hidden border-none shadow-md transition-all hover:shadow-lg",
                    "transition-all duration-700",
                    isPostsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12",
                    { "delay-100": index % 2 === 0 },
                    { "delay-200": index % 2 === 1 }
                  )}
                >
                  <div className="relative h-48">
                    <AnimatedImage
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 left-3 bg-travel-600 text-white text-xs py-1 px-2 rounded">
                      {post.category}
                    </div>
                    {post.destination && (
                      <div className="absolute top-3 right-3 bg-black/60 text-white text-xs py-1 px-2 rounded-full">
                        {post.destination}
                      </div>
                    )}
                  </div>
                  <CardContent className="pt-6">
                    <h3 className="font-bold text-xl mb-2 line-clamp-2">{post.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                  </CardContent>
                  <CardFooter className="flex flex-col items-start pt-0">
                    <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 mb-4 w-full">
                      <Calendar size={14} className="mr-1" />
                      <span>{post.date}</span>
                      <span className="mx-2">•</span>
                      <Clock size={14} className="mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                    <Link
                      to={`/blog/${post.id}`}
                      className="text-travel-600 hover:text-travel-700 text-sm flex items-center font-medium"
                    >
                      <span>Continue Reading</span>
                      <ArrowRight size={14} className="ml-1" />
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
            
            {/* No Results */}
            {filteredPosts.length === 0 && (
              <div className="text-center py-12 bg-gray-50 dark:bg-gray-900 rounded-xl">
                <h3 className="text-xl font-semibold mb-2">No articles found</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-6">
                  Try adjusting your filters or browse all articles.
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory('All');
                    setSelectedDestination('All');
                  }}
                  className="px-6 py-3 bg-travel-600 hover:bg-travel-700 text-white rounded-lg transition-colors"
                >
                  View All Articles
                </button>
              </div>
            )}
            
            {/* Destination Highlight Sections */}
            {selectedDestination === 'All' && (
              <div className="mt-16">
                <SectionHeading
                  title="Destination Highlights"
                  subtitle="Deep dives into our featured travel destinations"
                  className="mb-8"
                />
                
                {destinations.filter(d => d !== 'All').map((destination, index) => {
                  const destinationPosts = blogPosts.filter(post => post.destination === destination).slice(0, 2);
                  if (destinationPosts.length === 0) return null;
                  
                  return (
                    <div key={destination} className={cn("mb-12", index === destinations.length - 2 && "mb-0")}>
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="text-xl font-bold">{destination} Travel Guide</h3>
                        <button
                          onClick={() => setSelectedDestination(destination)}
                          className="text-travel-600 hover:text-travel-700 flex items-center text-sm font-medium"
                        >
                          <span>View All {destination} Articles</span>
                          <ChevronRight size={16} className="ml-1" />
                        </button>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        {destinationPosts.map((post) => (
                          <Card 
                            key={post.id}
                            className="overflow-hidden border-none shadow-md hover:shadow-lg transition-all"
                          >
                            <div className="relative h-40">
                              <AnimatedImage
                                src={post.image}
                                alt={post.title}
                                className="w-full h-full object-cover"
                              />
                              <div className="absolute top-3 left-3 bg-travel-600 text-white text-xs py-1 px-2 rounded">
                                {post.category}
                              </div>
                            </div>
                            <CardContent className="pt-4">
                              <h4 className="font-bold text-lg mb-2 line-clamp-1">{post.title}</h4>
                              <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 line-clamp-2">
                                {post.excerpt}
                              </p>
                              <Link
                                to={`/blog/${post.id}`}
                                className="text-travel-600 hover:text-travel-700 text-sm flex items-center font-medium"
                              >
                                <span>Read Article</span>
                                <ArrowRight size={14} className="ml-1" />
                              </Link>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                      
                      {index < destinations.length - 2 && (
                        <div className="my-10 border-b border-gray-200 dark:border-gray-800"></div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
          
          {/* Right Sidebar - Removed newsletter section */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              {/* Popular Posts */}
              <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6">
                <h3 className="font-bold text-lg mb-4">Popular Articles</h3>
                <div className="space-y-4">
                  {blogPosts.slice(0, 4).map((post) => (
                    <div key={post.id} className="flex gap-3">
                      <div className="flex-shrink-0 w-16 h-16 rounded-md overflow-hidden">
                        <AnimatedImage
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium text-sm line-clamp-2">{post.title}</h4>
                        <Link
                          to={`/blog/${post.id}`}
                          className="text-travel-600 hover:text-travel-700 text-xs font-medium"
                        >
                          Read More
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
