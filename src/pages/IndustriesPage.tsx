import React from 'react';
import { Link } from 'react-router-dom';
import { IMAGES, INDUSTRIES } from '@/lib/constants';
import {
  ArrowRight,
  Building2,
  GraduationCap,
  Landmark,
  HeartPulse,
  Globe,
  Store,
  Home,
  Factory,
  CheckCircle2,
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

const industryDetails: Record<string, { solutions: string[]; image: string }> = {
  'Corporate Offices': {
    solutions: ['Structured cabling', 'Enterprise WiFi', 'Server rooms', 'CCTV systems', 'Solar backup'],
    image: IMAGES.cabling1,
  },
  'Schools & Universities': {
    solutions: ['Campus WiFi', 'Computer labs', 'CCTV security', 'Solar power', 'Network infrastructure'],
    image: IMAGES.wifi,
  },
  'Government Institutions': {
    solutions: ['Secure networks', 'Access control', 'CCTV surveillance', 'Server infrastructure', 'Backup power'],
    image: IMAGES.serverRoom,
  },
  'Healthcare Facilities': {
    solutions: ['Reliable power', 'Network infrastructure', 'Security systems', 'Battery backup', 'IT support'],
    image: IMAGES.inverter,
  },
  'NGOs & International Orgs': {
    solutions: ['Internet connectivity', 'WiFi solutions', 'Solar installations', 'IT support', 'CCTV security'],
    image: IMAGES.cabling2,
  },
  'Retail & Hospitality': {
    solutions: ['Guest WiFi', 'POS networking', 'CCTV systems', 'Access control', 'Solar power'],
    image: IMAGES.cctv,
  },
  'Residential Properties': {
    solutions: ['Home solar systems', 'Battery backup', 'Security cameras', 'Smart home wiring', 'WiFi solutions'],
    image: IMAGES.solarInstall1,
  },
  'Manufacturing': {
    solutions: ['Industrial solar', 'Power backup', 'Network infrastructure', 'Security systems', 'IT support'],
    image: IMAGES.solarPanels,
  },
};

const IndustriesPage: React.FC = () => {
  return (
    <>
      {/* Page Hero */}
      <section className="relative bg-[#1a2332] py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMAGES.officeBuilding} alt="Industries" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a2332] to-[#1a2332]/80" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[#F98513] font-semibold text-sm uppercase tracking-wider mb-3">Industries</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5">
            Industries We Serve
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            We deliver tailored ICT and energy solutions across diverse sectors,
            understanding the unique requirements of each industry.
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {INDUSTRIES.map((industry) => {
              const Icon = iconMap[industry.icon] || Building2;
              const details = industryDetails[industry.name];

              return (
                <div
                  key={industry.name}
                  className="bg-[#F4F1EC] rounded-xl overflow-hidden hover:shadow-xl transition-all group"
                >
                  <div className="grid sm:grid-cols-5">
                    <div className="sm:col-span-2 h-48 sm:h-auto">
                      <img
                        src={details?.image || IMAGES.officeBuilding}
                        alt={industry.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="sm:col-span-3 p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-[#9BACD8]/10 rounded-lg flex items-center justify-center">
                          <Icon size={20} className="text-[#9BACD8]" />
                        </div>
                        <h3 className="font-bold text-[#1a2332] text-lg">{industry.name}</h3>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">{industry.desc}</p>
                      {details && (
                        <div className="space-y-1.5 mb-4">
                          {details.solutions.map((sol) => (
                            <span key={sol} className="flex items-center gap-2 text-sm text-gray-600">
                              <CheckCircle2 size={13} className="text-[#F98513] flex-shrink-0" />
                              {sol}
                            </span>
                          ))}
                        </div>
                      )}
                      <Link
                        to="/quote"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#F98513] hover:text-[#e0760f] transition-colors"
                      >
                        Get Solutions <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#1a2332]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Don't See Your Industry?</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            We serve businesses across all sectors. Contact us to discuss how we can support your specific requirements.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#F98513] text-white font-semibold rounded-lg hover:bg-[#e0760f] transition-all shadow-lg text-sm"
          >
            Contact Us <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
};

export default IndustriesPage;
