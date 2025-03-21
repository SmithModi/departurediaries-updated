
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube 
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Company Information */}
          <div className="space-y-6">
            <h3 className="font-display text-2xl font-bold">Departure Diaries</h3>
            <p className="text-gray-400 max-w-xs">
              Crafting unforgettable travel experiences that turn moments into memories and journeys into stories.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-travel-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-travel-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-travel-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-travel-500 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links - Packages link removed */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'Destinations', 'Gallery', 'Blog', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <Link to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="text-gray-400 hover:text-travel-500 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Destinations */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Popular Destinations</h4>
            <ul className="space-y-4">
              {['Dubai', 'Vietnam', 'Singapore', 'Bali', 'Kashmir', 'Ladakh'].map((item) => (
                <li key={item}>
                  <Link to="/destinations" className="text-gray-400 hover:text-travel-500 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="text-travel-500 mt-1 flex-shrink-0" size={18} />
                <span className="text-gray-400">123 Travel Lane, Adventure City, World 10001</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="text-travel-500 flex-shrink-0" size={18} />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="text-travel-500 flex-shrink-0" size={18} />
                <span className="text-gray-400">info@departurediaries.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="border-t border-gray-800 pt-8 pb-12">
          <div className="max-w-xl mx-auto text-center">
            <h4 className="font-display text-xl font-semibold mb-3">Subscribe to Our Newsletter</h4>
            <p className="text-gray-400 mb-6">Stay updated with our latest travel deals and destination guides.</p>
            <form className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-travel-500"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-travel-600 hover:bg-travel-700 text-white font-medium rounded-lg transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-500 text-sm border-t border-gray-800 pt-8">
          <p>© {new Date().getFullYear()} Departure Diaries. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
