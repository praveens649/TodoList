import React from "react";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About Column */}
          <div className="col-span-1">
            <h3 className="text-white text-lg font-semibold mb-4">TodoMatrix</h3>
            <p className="text-blue-200 text-sm">
              Your ultimate productivity companion for managing tasks and achieving more every day.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <FaGithub size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-white font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors text-sm">Home</a></li>
              <li><a href="#features" className="text-blue-200 hover:text-white transition-colors text-sm">Features</a></li>
              <li><a href="#how-it-works" className="text-blue-200 hover:text-white transition-colors text-sm">How It Works</a></li>
              <li><a href="#testimonials" className="text-blue-200 hover:text-white transition-colors text-sm">Testimonials</a></li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h4 className="text-white font-medium mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors text-sm">Documentation</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors text-sm">API Reference</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors text-sm">Help Center</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors text-sm">Community</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-white font-medium mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li className="flex items-center text-blue-200 text-sm">
                <span className="mr-2">📧</span> contact@todomatrix.com
              </li>
              <li className="flex items-center text-blue-200 text-sm">
                <span className="mr-2">📞</span> +1 (555) 123-4567
              </li>
              <li className="text-blue-200 text-sm">
                123 Task Street<br />
                Productivity City, PC 12345
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-800 pt-6 mt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-blue-200 text-sm">
            © {currentYear} TodoMatrix. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-blue-200 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-blue-200 hover:text-white text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-blue-200 hover:text-white text-sm transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
