
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Instagram,
  Clock,
  Twitter, 
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Company Information */}
          <div className="space-y-6">
            <div className="flex flex-col items-center sm:items-start">
              <h3 className="font-display text-2xl font-bold">Departure Diaries</h3>
            </div>
            <p className="text-gray-400 max-w-xs">
              Crafting unforgettable travel experiences that turn moments into memories and journeys into stories.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/departure.diaries/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-travel-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://x.com/KAKKADANAND" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-travel-500 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
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

          {/* Popular Destinations - Remove tourist visa text */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Popular Destinations</h4>
            <ul className="space-y-4">
              {['Dubai', 'Vietnam', 'Singapore', 'Bali', 'Kashmir', 'Ladakh', 'Ayodhya'].map((item) => (
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
                <span className="text-gray-400">
                  Office No 1018, 10th Floor, RK World Tower,<br />
                  Near Sheetal Park BRTS, 150 Feet Ring Rd,<br />
                  above Zudio, Rajkot, Gujarat 360006
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Clock className="text-travel-500 flex-shrink-0" size={18} />
                <span className="text-gray-400">Open ⋅ Closes 7:30 pm</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="text-travel-500 flex-shrink-0" size={18} />
                <a href="tel:+919898048778" className="text-gray-400 hover:text-travel-500 transition-colors">
                  +91 98980 48778
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="text-travel-500 flex-shrink-0" size={18} />
                <a href="mailto:info@departurediaries.com" className="text-gray-400 hover:text-travel-500 transition-colors">
                  info@departurediaries.com
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="text-travel-500 flex-shrink-0" size={18} />
                <a href="mailto:departurediaries.in@gmail.com" className="text-gray-400 hover:text-travel-500 transition-colors">
                  departurediaries.in@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright - Remove newsletter section */}
        <div className="text-center text-gray-500 text-sm border-t border-gray-800 pt-8">
          <p>© {new Date().getFullYear()} Departure Diaries. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
