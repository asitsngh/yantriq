import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/yqt_logo.svg';

// ...existing code...
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/solutions', label: 'Solutions' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 lg:h-24">
          <Link to="/" className="flex items-center space-x-3 group">
            <img
              src={logo}
              alt="Yantriq logo"
              className="w-10 h-10 lg:w-12 lg:h-12 object-contain"
            />

            <span className="block text-2xl lg:text-3xl xl:text-4xl font-bold leading-[1.25]">
              <span className="bg-gradient-to-r from-[#2F4F45] to-[#5F0F12] bg-clip-text text-transparent">
                Yantriq Systems Private Limited
              </span>
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-base lg:text-lg font-medium transition-colors relative transition-colors relative ${
                  isActive(link.path)
                    ? 'text-[#2F4F45]'
                    : 'text-gray-700 hover:text-[#2F4F45]'
                }`}
              >
                {link.label}
                {isActive(link.path) && (
                  <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-[#2F4F45] rounded-full" />
                )}
              </Link>
            ))}
            <Link
              to="/contact"
              className="px-6 py-2 bg-gradient-to-r from-[#2F4F45] to-[#5F0F12] text-white rounded-full hover:shadow-lg hover:scale-105 transition-all"
            >
              Contact Us
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2 rounded-lg transition-colors ${
                  isActive(link.path)
                    ? 'bg-[rgba(47,79,69,0.06)] text-[#2F4F45] font-medium'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2 bg-gradient-to-r from-[#2F4F45] to-[#5F0F12] text-white rounded-lg text-center hover:shadow-lg transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}