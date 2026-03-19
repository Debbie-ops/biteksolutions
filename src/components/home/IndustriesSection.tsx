import React from 'react';
import { Link } from 'react-router-dom';
import { INDUSTRIES } from '@/lib/constants';
import {
  Building2,
  GraduationCap,
  Landmark,
  HeartPulse,
  Globe,
  Store,
  Home,
  Factory,
  ArrowRight,
} from 'lucide-react';

const iconMap: Record<string, React.FC<{ size?: number; className?: string }>> = {
  building: Building2,
  graduation: GraduationCap,
  landmark: Landmark,
  'heart-pulse': HeartPulse,
  globe: Globe,
  store: Store,
  home: Home,
  factory: Factory,
};

const IndustriesSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-[#1a2332] py-20 lg:py-28">
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="industries-dots" width="30" height="30" patternUnits="userSpaceOnUse">
              <circle cx="15" cy="15" r="1" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#industries-dots)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-[#F98513] font-semibold text-sm uppercase tracking-wider mb-3">
            Who We Serve
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Industries We Serve
          </h2>
          <p className="text-gray-400 leading-relaxed">
            From corporate offices to residential properties, we deliver tailored
            ICT and energy solutions across diverse sectors.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {INDUSTRIES.map((industry) => {
            const Icon = iconMap[industry.icon] || Building2;
            return (
              <Link
                key={industry.name}
                to="/industries"
                className="group rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-[#9BACD8]/30 hover:bg-white/10"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#9BACD8]/10 transition-colors group-hover:bg-[#9BACD8]/20">
                  <Icon size={22} className="text-[#9BACD8]" />
                </div>
                <h3 className="mb-2 text-sm font-semibold text-white transition-colors group-hover:text-[#9BACD8]">
                  {industry.name}
                </h3>
                <p className="text-xs leading-relaxed text-gray-400 transition-colors group-hover:text-gray-300">
                  {industry.desc}
                </p>
              </Link>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/industries"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#9BACD8] transition-colors hover:text-white"
          >
            View All Industries
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
