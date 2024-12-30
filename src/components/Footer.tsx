import React from 'react';
import { Github, Twitter, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black/90 text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">About</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-red-500 transition-colors">About Us</Link></li>
              <li><Link to="/how-it-works" className="hover:text-red-500 transition-colors">How It Works</Link></li>
              <li><Link to="/contact" className="hover:text-red-500 transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Support</h3>
            <ul className="space-y-2">
              <li><Link to="/help" className="hover:text-red-500 transition-colors">Help Center</Link></li>
              <li><Link to="/faq" className="hover:text-red-500 transition-colors">FAQs</Link></li>
              <li><Link to="/support" className="hover:text-red-500 transition-colors">Customer Support</Link></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="hover:text-red-500 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-red-500 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Connect</h3>
            <div className="flex space-x-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors">
                <Twitter size={24} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors">
                <Youtube size={24} />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors">
                <Github size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} God of War. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;