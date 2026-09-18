import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, ExternalLink } from 'lucide-react';
import logo from '../assets/yqt_logo.svg';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="rounded-lg bg-white/10 p-2">
                <img
                  src={logo}
                  alt="Yantriq logo"
                  className="w-8 h-8 object-contain"
                />
              </div>
              <span className="text-2xl font-bold text-white">
                Yantriq Systems
              </span>
            </div>
            <p className="text-sm text-white/90">
              Delivering OEM-backed NDT and inspection solutions for critical
              industrial applications.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="px-2 py-1 rounded hover:bg-white/10 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="px-2 py-1 rounded hover:bg-white/10 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="px-2 py-1 rounded hover:bg-white/10 transition-colors">
                  Solutions
                </Link>
              </li>
              <li>
                <Link to="/contact" className="px-2 py-1 rounded hover:bg-white/10 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* OEM Partners */}
          <div>
            <h3 className="text-white font-semibold mb-4">OEM Partners</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://scanmaster-irt.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-2 py-1 rounded hover:bg-white/10 transition-colors"
                >
                  ScanMaster Systems
                  <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.lismar.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-2 py-1 rounded hover:bg-white/10 transition-colors"
                >
                  LISMAR Engineering
                  <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                </a>
              </li>
              <li>
                <a
                  href="https://comex-group.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-2 py-1 rounded hover:bg-white/10 transition-colors"
                >
                  Comex AS
                  <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.kleinknecht.de/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-2 py-1 rounded hover:bg-white/10 transition-colors"
                >
                  Kleinknecht
                  <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-white/90 text-sm">
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>sales@yantriq.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+91 22 3597 8445</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Mumbai, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-[rgba(255,255,255,0.08)] mt-8 pt-8 text-center text-sm text-white/80">
          <p>© {new Date().getFullYear()} Yantriq Systems. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
