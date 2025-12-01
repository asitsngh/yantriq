import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';
import logo from '../assets/yqt_logo.svg';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="rounded-lg group-hover:scale-110 transition-transform bg-white/10 p-2">
                <img src={logo} alt="Yantriq logo" className="w-8 h-8 object-contain" />
              </div>
              <span className="text-2xl font-bold">Yantriq Systems</span>
            </div>
            <p className="text-sm text-white/90">
              Innovating the future with cutting-edge technology solutions that drive success.
            </p>
          </div>

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

          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="hover:bg-white/10 transition-colors cursor-pointer px-2 py-1 rounded">
                Cloud Solutions
              </li>
              <li className="hover:bg-white/10 transition-colors cursor-pointer px-2 py-1 rounded">
                AI Integration
              </li>
              <li className="hover:bg-white/10 transition-colors cursor-pointer px-2 py-1 rounded">
                Data Analytics
              </li>
              <li className="hover:bg-white/10 transition-colors cursor-pointer px-2 py-1 rounded">
                Consulting
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-white/90">
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-white/90" />
                <span className="text-sm">info@yantriq.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-white/90" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-white/90" />
                <span className="text-sm">San Francisco, CA</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[rgba(255,255,255,0.08)] mt-8 pt-8 text-center text-sm text-white/80">
          <p>&copy; {new Date().getFullYear()} YantriQ. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
