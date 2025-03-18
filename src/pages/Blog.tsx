
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

// Blog data
const blogPosts = [
  {
    id: 1,
    title: "The Ultimate Dubai Travel Guide for 2023",
    excerpt: "Discover the best attractions, restaurants, and hidden gems in the city of luxury and innovation.",
    date: "June 15, 2023",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1582672060674-bc2bd808a8f5?q=80&w=2071&auto=format&fit=crop",
    author: "Sarah Williams",
    category: "Travel Guides"
  },
  {
    id: 2,
    title: "10 Must-Visit Temples in Bali",
    excerpt: "Explore the spiritual side of Bali through its ancient and magnificent temples.",
    date: "May 22, 2023",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=2938&auto=format&fit=crop",
    author: "Michael Chen",
    category: "Cultural Travel"
  },
  {
    id: 3,
    title: "Singapore on a Budget: Tips and Tricks",
    excerpt: "How to experience the best of Singapore without breaking the bank.",
    date: "April 10, 2023",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1565967511849-76a60a516170?q=80&w=2071&auto=format&fit=crop",
    author: "David Thompson",
    category: "Budget Travel"
  },
  {
    id: 4,
    title: "The Hidden Valleys of Kashmir",
    excerpt: "Venture beyond the tourist spots and discover the untouched beauty of Kashmir's valleys.",
    date: "March 28, 2023",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1566837497312-7be4ebb33e06?q=80&w=2070&auto=format&fit=crop",
    author: "Priya Sharma",
    category: "Adventure Travel"
  },
  {
    id: 5,
    title: "A Culinary Journey Through Vietnam",
    excerpt: "Explore the diverse and flavorful cuisine of Vietnam from north to south.",
    date: "February 15, 2023",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=2070&auto=format&fit=crop",
    author: "Thomas Wright",
    category: "Food & Travel"
  },
  {
    id: 6,
    title: "Trekking in Ladakh: A Comprehensive Guide",
    excerpt: "Everything you need to know about planning a trekking adventure in the majestic landscapes of Ladakh.",
    date: "January 5, 2023",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1533130061792-64b345e4a833?q=80&w=2070&auto=format&fit=crop",
    author: "Alex Johnson",
    category: "Adventure Travel"
  }
];

// Featured post data
const featuredPost = {
  id: 7,
  title: "Sustainable Travel: How to Reduce Your Carbon Footprint",
  excerpt: "Learn practical ways to make your travels more environmentally friendly without sacrificing experiences.",
  content: "As global tourism continues to grow, so does its environmental impact. This comprehensive guide explores how travelers can minimize their carbon footprint while still enjoying enriching travel experiences. From choosing eco-friendly accommodations and transportation options to supporting local communities and conservation efforts, discover actionable steps for more sustainable adventures.",
  date: "July 2, 2023",
  readTime: "12 min read",
  image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=3506&auto=format&fit=crop",
  author: "Emma Robinson",
  category: "Sustainable Travel"
};

// Blog categories
const categories = [
  { name: "Travel Guides", count: 15 },
  { name: "Adventure Travel", count: 12 },
  { name: "Cultural Travel", count: 8 },
  { name: "Food & Travel", count: 10 },
  { name: "Budget Travel", count: 7 },
  { name: "Sustainable Travel", count: 9 }
];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [featuredRef, isFeaturedInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [postsRef, isPostsInView] = useInView({ threshold: 0.1, triggerOnce: true });
  
  // Filter posts by category
  const filteredPosts = selectedCategory === 'All'
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

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
            
            {/* Category Pills */}
            <div className="flex flex-wrap gap-2 mb-8">
              <button
                onClick={() => setSelectedCategory('All')}
                className={cn(
                  "px-4 py-2 rounded-full text-sm transition-colors",
                  selectedCategory === 'All'
                    ? "bg-travel-600 text-white"
                    : "bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
                )}
              >
                All Posts
              </button>
              {categories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm transition-colors",
                    selectedCategory === category.name
                      ? "bg-travel-600 text-white"
                      : "bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
                  )}
                >
                  {category.name}
                </button>
              ))}
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
          </div>
          
          {/* Right Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              {/* Categories */}
              <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 mb-6">
                <h3 className="font-bold text-lg mb-4">Categories</h3>
                <ul className="space-y-2">
                  {categories.map((category) => (
                    <li key={category.name}>
                      <button
                        onClick={() => setSelectedCategory(category.name)}
                        className={cn(
                          "flex items-center justify-between w-full py-2 px-3 rounded-lg text-left transition-colors",
                          selectedCategory === category.name 
                            ? "bg-travel-100 dark:bg-travel-900/20 text-travel-700 dark:text-travel-400" 
                            : "hover:bg-gray-100 dark:hover:bg-gray-800"
                        )}
                      >
                        <span>{category.name}</span>
                        <span className="text-xs bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded-full">
                          {category.count}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Newsletter */}
              <div className="bg-travel-50 dark:bg-travel-900/20 rounded-xl p-6">
                <h3 className="font-bold text-lg mb-2">Subscribe to Our Newsletter</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  Get the latest travel tips and insights delivered to your inbox.
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-travel-500"
                  />
                  <button className="w-full bg-travel-600 hover:bg-travel-700 text-white py-2 rounded-lg transition-colors">
                    Subscribe
                  </button>
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
