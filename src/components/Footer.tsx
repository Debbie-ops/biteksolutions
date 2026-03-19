import React from 'react';
import { Link } from 'react-router-dom';
import { COMPANY } from '@/lib/constants';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  ChevronRight,
} from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1a2332] text-gray-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="mb-5 flex items-center gap-2.5">
              <img
                src="/Biteklogo.png"
                alt={COMPANY.shortName}
                className="h-10 w-auto"
              />
              <div>
                <span className="text-lg font-bold text-white">BITEK</span>
                <span className="text-lg font-bold text-[#9BACD8] ml-1">SOLUTIONS</span>
              </div>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed mb-5">
              {COMPANY.tagline}. Providing dependable ICT infrastructure and renewable energy solutions across Zambia.
            </p>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-[#F98513] mt-0.5 flex-shrink-0" />
                <span>{COMPANY.address}<br />{COMPANY.location}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-[#F98513] flex-shrink-0" />
                <a href={`tel:${COMPANY.phone}`} className="hover:text-white transition-colors">
                  {COMPANY.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-[#F98513] flex-shrink-0" />
                <a href={`mailto:${COMPANY.email}`} className="hover:text-white transition-colors">
                  {COMPANY.email}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Clock size={16} className="text-[#F98513] flex-shrink-0" />
                <span>Mon – Fri: {COMPANY.hours}</span>
              </div>
            </div>
          </div>

          {/* ICT Services */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
              ICT Solutions
            </h4>
            <ul className="space-y-2.5">
              {[
                'Structured Cabling',
                'Network Design',
                'Server Solutions',
                'CCTV & Security',
                'WiFi Solutions',
                'IT Support',
                'Access Control',
                'Infrastructure Audits',
              ].map((item) => (
                <li key={item}>
                  <Link
                    to="/ict-solutions"
                    className="text-sm text-gray-400 hover:text-[#F98513] transition-colors flex items-center gap-2 group"
                  >
                    <ChevronRight size={12} className="text-gray-600 group-hover:text-[#F98513] transition-colors" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Energy Services */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
              Energy Solutions
            </h4>
            <ul className="space-y-2.5">
              {[
                'Commercial Solar',
                'Residential Solar',
                'Battery Backup',
                'Solar Maintenance',
                'Energy Audits',
                'Hybrid Systems',
              ].map((item) => (
                <li key={item}>
                  <Link
                    to="/renewable-energy"
                    className="text-sm text-gray-400 hover:text-[#F98513] transition-colors flex items-center gap-2 group"
                  >
                    <ChevronRight size={12} className="text-gray-600 group-hover:text-[#F98513] transition-colors" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mt-8 mb-5">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: 'About Us', path: '/about' },
                { label: 'Our Projects', path: '/projects' },
                { label: 'Industries', path: '/industries' },
                { label: 'Contact Us', path: '/contact' },
              ].map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-sm text-gray-400 hover:text-[#F98513] transition-colors flex items-center gap-2 group"
                  >
                    <ChevronRight size={12} className="text-gray-600 group-hover:text-[#F98513] transition-colors" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter / CTA */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
              Get In Touch
            </h4>
            <p className="text-sm text-gray-400 mb-5 leading-relaxed">
              Ready to upgrade your infrastructure or go solar? Contact us for a free consultation and site assessment.
            </p>
            <Link
              to="/quote"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#F98513] text-white text-sm font-semibold rounded-lg hover:bg-[#e0760f] transition-all shadow-md hover:shadow-lg mb-8"
            >
              Request a Quote
              <ArrowRight size={16} />
            </Link>

            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Certifications
            </h4>
            <div className="flex flex-wrap gap-2">
              {['ISO 9001', 'ZICTA', 'ERB'].map((cert) => (
                <span
                  key={cert}
                  className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-md text-xs text-gray-400"
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-gray-500">
            &copy; {currentYear} {COMPANY.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-gray-500">
            <span className="text-gray-700">|</span>
            <Link to="/about" className="hover:text-gray-300 transition-colors">
              Terms of Service
            </Link>
            <span className="text-gray-700">|</span>
            <Link to="/contact" className="hover:text-gray-300 transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
