import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-black py-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* About Section */}
        <div className="about">
          <h3 className="text-xl font-semibold mb-2">About</h3>
          <p className="text-black-400 text-sm">
           Welcome to Vinay's blog – a place where ideas, tech tips, and stories come together. Stay tuned for weekly updates!
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
          <ul className="flex flex-wrap gap-4 text-gray-400 text-sm">
            <li><a href="https://wa.me/918814884420" target="_blank" rel="noopener noreferrer">Chat with me on WhatsApp</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Follow Me</h3>
          <div className="flex flex-col space-y-2 text-gray-400 text-sm">
            <a href="https://x.com" className="hover:text-blue-500">
              <i className="fab fa-twitter mr-2"></i> Twitter
            </a>
            <a href="https://Linkedin.com/VinaySandhu" className="hover:text-blue-600">
              <i className="fab fa-linkedin mr-2"></i> LinkedIn
            </a>
            <a href="https://Instagram.com/sandhuvinay_31" className="hover:text-pink-500">
              <i className="fa-instagram"></i> Instagram
            </a>
          </div>

        </div>
      </div>

      <div className="mt-8 text-center text-sm text-gray-500 border-t border-gray-700 pt-4">
        © 2025 Vinay's Blog. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
