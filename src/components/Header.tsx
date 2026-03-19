import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { COMPANY } from '@/lib/constants';
import {
  Phone,
  Clock,
  Mail,
  Menu,
  X,
  ChevronDown,
} from 'lucide-react';

const NAV_ITEMS = [
  { label: 'HOME', path: '/' },
  { label: 'ABOUT', path: '/about' },
  {
    label: 'SERVICES',
    path: '#',
    children: [
      { label: 'ICT SOLUTIONS', path: '/ict-solutions' },
      { label: 'RENEWABLE ENERGY', path: '/renewable-energy' },
    ],
  },
  { label: 'INDUSTRIES', path: '/industries' },
  { label: 'CONTACT', path: '/contact' },
];

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Top Bar */}
      <div className="bg-[#1a2332] text-white text-sm hidden lg:block">
        <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <Phone size={14} className="text-[#F98513]" />
              {COMPANY.phone}
            </span>
            <span className="flex items-center gap-2">
              <Mail size={14} className="text-[#F98513]" />
              {COMPANY.email}
            </span>
          </div>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <Clock size={14} className="text-[#F98513]" />
              Mon – Fri: {COMPANY.hours}
            </span>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg'
            : 'bg-white shadow-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between py-2">
            {/* Logo */}
            <Link to="/" className="flex flex-shrink-0 items-center gap-2 sm:gap-3">
              <img
                src="/Biteklogo.png"
                alt={COMPANY.shortName}
                className="h-12 w-auto sm:h-14"
              />
              <div className="leading-none">
                <span className="text-xl font-bold text-[#1a2332] tracking-tight">
                  BITEK
                </span>
                <span className="text-xl font-bold text-[#9BACD8] tracking-tight ml-1">
                  SOLUTIONS
                </span>
                <p className="mt-0.5 text-[10px] text-gray-500 tracking-[0.18em] uppercase">
                  ICT & Energy Solutions
                </p>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {NAV_ITEMS.map((item) =>
                item.children ? (
                  <div key={item.label} className="relative group">
                    <button
                      className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors flex items-center gap-1 ${
                        item.children.some((c) => isActive(c.path))
                          ? 'text-[#F98513]'
                          : 'text-gray-700 hover:text-[#9BACD8] hover:bg-gray-50'
                      }`}
                    >
                      {item.label}
                      <ChevronDown size={14} className="transition-transform group-hover:rotate-180" />
                    </button>
                    <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-2 min-w-[220px]">
                        {item.children.map((child) => (
                          <Link
                            key={child.path}
                            to={child.path}
                            className={`block px-5 py-3 text-sm transition-colors ${
                              isActive(child.path)
                                ? 'text-[#F98513] bg-orange-50'
                                : 'text-gray-700 hover:text-[#9BACD8] hover:bg-gray-50'
                            }`}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                      isActive(item.path)
                        ? 'text-[#F98513]'
                        : 'text-gray-700 hover:text-[#9BACD8] hover:bg-gray-50'
                    }`}
                  >
                    {item.label}
                  </Link>
                )
              )}
            </nav>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-3">
              <Link
                to="/quote"
                className="hidden sm:inline-flex items-center px-6 py-2.5 bg-[#F98513] text-white text-sm font-semibold rounded-lg hover:bg-[#e0760f] transition-all shadow-md hover:shadow-lg"
              >
                Request Quote
              </Link>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-gray-100 bg-white">
            <div className="px-4 py-4 space-y-1">
              {NAV_ITEMS.map((item) =>
                item.children ? (
                  <div key={item.label}>
                    <button
                      onClick={() => setServicesOpen(!servicesOpen)}
                      className="w-full flex items-center justify-between px-4 py-3 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-50"
                    >
                      {item.label}
                      <ChevronDown
                        size={16}
                        className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`}
                      />
                    </button>
                    {servicesOpen && (
                      <div className="pl-4 space-y-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.path}
                            to={child.path}
                            className="block px-4 py-2.5 text-sm text-gray-600 rounded-lg hover:bg-gray-50"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`block px-4 py-3 text-sm font-medium rounded-lg ${
                      isActive(item.path)
                        ? 'text-[#F98513] bg-orange-50'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {item.label}
                  </Link>
                )
              )}
              <Link
                to="/quote"
                className="block w-full text-center mt-3 px-6 py-3 bg-[#F98513] text-white text-sm font-semibold rounded-lg"
              >
                Request Quote
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
