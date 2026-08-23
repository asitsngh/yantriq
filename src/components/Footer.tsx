import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';
import logo from '../assets/yqt_logo.svg';

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-edge">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="space-y-4 md:col-span-1">
            <Link to="/" className="flex items-center gap-3">
              <img src={logo} alt="Yantriq" className="w-9 h-9 opacity-80" />
              <span className="font-heading font-bold text-ink text-sm leading-tight">Yantriq Systems<br />Private Limited</span>
            </Link>
            <p className="text-ink-muted text-sm font-body leading-relaxed max-w-xs">
              Delivering OEM-backed NDT and inspection solutions for critical industrial applications across India.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-ink text-xs font-body uppercase tracking-widest mb-5 font-medium">Navigation</p>
            <ul className="space-y-3">
              {[
                { to: '/', label: 'Home' },
                { to: '/about', label: 'About Us' },
                { to: '/solutions', label: 'Solutions' },
                { to: '/contact', label: 'Contact' },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="text-ink-muted text-sm font-body hover:text-ink transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* OEM Partners */}
          <div>
            <p className="text-ink text-xs font-body uppercase tracking-widest mb-5 font-medium">OEM Partners</p>
            <ul className="space-y-3">
              {[
                { href: 'https://scanmaster-irt.com/', label: 'ScanMaster Systems', to: '/solutions/scanmaster' },
                { href: 'https://www.lismar.com', label: 'LISMAR Engineering', to: '/solutions/lismar' },
                { href: 'https://comex-group.com/', label: 'Comex AS', to: '/solutions/comex' },
                { href: 'https://www.kleinknecht.de/', label: 'Kleinknecht', to: '/solutions/kleinknecht' },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="text-ink-muted text-sm font-body hover:text-ink transition-colors flex items-center gap-1.5">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-ink text-xs font-body uppercase tracking-widest mb-5 font-medium">Contact</p>
            <ul className="space-y-4">
              <li>
                <a href="mailto:sales@yantriq.in" className="flex items-start gap-3 text-ink-muted text-sm font-body hover:text-ink transition-colors group">
                  <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 group-hover:text-brand-light transition-colors" />
                  <span>sales@yantriq.in</span>
                </a>
              </li>
              <li>
                <a href="tel:+9102235978445" className="flex items-start gap-3 text-ink-muted text-sm font-body hover:text-ink transition-colors group">
                  <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 group-hover:text-brand-light transition-colors" />
                  <span>+91-022-35978445</span>
                </a>
              </li>
              <li>
                <a
                  href="https://maps.app.goo.gl/sLQLUz5PYaPJU6qH8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-ink-muted text-sm font-body hover:text-ink transition-colors group"
                >
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 group-hover:text-brand-light transition-colors" />
                  <span>Vikhroli (W), Mumbai – 400079, India</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-edge mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-ink-muted text-xs font-body">
            © {new Date().getFullYear()} Yantriq Systems Private Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
