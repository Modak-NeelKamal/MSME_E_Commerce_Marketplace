import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-gray-200">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">MSME Market</h3>
            <p className="mb-4">Supporting small and medium businesses across India.</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-white transition-colors duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-white transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-white transition-colors duration-300">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-white transition-colors duration-300">Home</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors duration-300">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors duration-300">Contact</Link></li>
              <li><Link to="/seller" className="hover:text-white transition-colors duration-300">Become a Seller</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Categories</h3>
            <ul className="space-y-2">
              <li><Link to="/category/electronics" className="hover:text-white transition-colors duration-300">Electronics</Link></li>
              <li><Link to="/category/fashion" className="hover:text-white transition-colors duration-300">Fashion</Link></li>
              <li><Link to="/category/home-appliances" className="hover:text-white transition-colors duration-300">Home Appliances</Link></li>
              <li><Link to="/category/fmcg" className="hover:text-white transition-colors duration-300">FMCG</Link></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <MapPin size={16} className="mr-2" />
                <span>123 MSME Street, New Delhi, India</span>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-2" />
                <span>+91 1234567890</span>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="mr-2" />
                <span>support@msmemarket.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-sm">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {new Date().getFullYear()} MSME Market. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link to="/privacy" className="hover:text-white transition-colors duration-300">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-white transition-colors duration-300">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;