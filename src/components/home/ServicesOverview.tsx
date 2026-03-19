import React from 'react';
import { Link } from 'react-router-dom';
import {
  Cable,
  Server,
  Camera,
  Sun,
  Battery,
  Wrench,
  ArrowRight,
} from 'lucide-react';

const services = [
  {
    icon: Cable,
    title: 'Network Infrastructure',
    desc: 'Enterprise-grade structured cabling, network design, and implementation for reliable connectivity.',
    link: '/ict-solutions',
    color: '#9BACD8',
  },
  {
    icon: Server,
    title: 'Server Solutions',
    desc: 'Professional server deployment, virtualization, and management for maximum uptime.',
    link: '/ict-solutions',
    color: '#9BACD8',
  },
  {
    icon: Camera,
    title: 'CCTV & Security',
    desc: 'Comprehensive surveillance and access control systems for complete premises security.',
    link: '/ict-solutions',
    color: '#9BACD8',
  },
  {
    icon: Sun,
    title: 'Solar Power Systems',
    desc: 'Commercial and residential solar installations for energy independence and cost savings.',
    link: '/renewable-energy',
    color: '#F98513',
  },
  {
    icon: Battery,
    title: 'Battery Backup',
    desc: 'Advanced energy storage solutions ensuring uninterrupted power for critical systems.',
    link: '/renewable-energy',
    color: '#F98513',
  },
  {
    icon: Wrench,
    title: 'Maintenance & Support',
    desc: 'Proactive maintenance programs and 24/7 technical support for all installed systems.',
    link: '/contact',
    color: '#9BACD8',
  },
];

const ServicesOverview: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-[#F98513] font-semibold text-sm uppercase tracking-wider mb-3">
            What We Do
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a2332] mb-4">
            Comprehensive ICT & Energy Solutions
          </h2>
          <p className="text-gray-600 leading-relaxed">
            From network infrastructure to solar power, we deliver end-to-end solutions
            that keep your business connected, secure, and powered.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.title}
                to={service.link}
                className="group relative bg-[#F4F1EC] rounded-xl p-7 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100"
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110"
                  style={{ backgroundColor: `${service.color}15` }}
                >
                  <Icon size={26} style={{ color: service.color }} />
                </div>
                <h3 className="text-lg font-bold text-[#1a2332] mb-3 group-hover:text-[#9BACD8] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {service.desc}
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-[#F98513] opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn More <ArrowRight size={14} />
                </span>
              </Link>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <Link
            to="/ict-solutions"
            className="inline-flex items-center gap-2 text-[#9BACD8] font-semibold hover:text-[#7b8fc4] transition-colors"
          >
            View All Services
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
