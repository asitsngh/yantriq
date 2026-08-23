import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/yqt_logo.svg';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on navigation
  useEffect(() => setIsOpen(false), [location.pathname]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/solutions', label: 'Solutions' },
  ];

  const isActive = (path: string) =>
    path === '/solutions'
      ? location.pathname.startsWith('/solutions')
      : location.pathname === path;

  return (
    <nav
      id="main-navbar"
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-canvas/90 backdrop-blur-md border-b border-edge'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 lg:h-24">
          {/* Logo */}
          <Link to="/" id="navbar-brand" className="flex items-center space-x-3 group">
            <img
              id="navbar-logo-img"
              src={logo}
              alt="Yantriq logo"
              className="w-10 h-10 lg:w-12 lg:h-12 object-contain"
            />
            <span id="navbar-brand-text" className="text-sm lg:text-base font-heading font-bold text-ink leading-tight tracking-wide">
              Yantriq Systems Private Limited
            </span>
          </Link>

          {/* Desktop nav */}
          <div id="navbar-nav-items" className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative text-sm font-body font-medium tracking-wide transition-colors ${
                  isActive(link.path)
                    ? 'text-ink'
                    : 'text-ink-muted hover:text-ink'
                }`}
              >
                {link.label}
                {isActive(link.path) && (
                  <span className="absolute -bottom-1 left-0 right-0 h-px bg-brand-light rounded-full" />
                )}
              </Link>
            ))}
            <Link
              to="/contact"
              className="px-5 py-2 bg-brand-teal text-ink text-sm font-body font-medium rounded-full hover:bg-brand-light transition-colors"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-ink-muted hover:text-ink transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-canvas/95 backdrop-blur-lg border-t border-edge">
          <div className="px-4 py-6 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-4 py-3 rounded-xl font-body text-base transition-colors ${
                  isActive(link.path)
                    ? 'bg-surface text-ink font-medium'
                    : 'text-ink-muted hover:text-ink hover:bg-surface/50'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="block px-4 py-3 bg-brand-teal text-ink font-body text-base font-medium rounded-xl text-center hover:bg-brand-light transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
