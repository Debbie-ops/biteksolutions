import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { IMAGES, COMPANY } from '@/lib/constants';
import { ArrowRight, Shield, Zap, Clock } from 'lucide-react';

const HeroSection: React.FC = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#1a2332] min-h-[600px] lg:min-h-[700px]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={IMAGES.hero}
          alt="Bitek Solutions Infrastructure"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a2332]/80 via-[#1a2332]/45 to-[#1a2332]/15 lg:bg-gradient-to-l lg:from-[#1a2332] lg:via-[#1a2332]/60 lg:to-[#1a2332]/60" />
      </div>

      {/* Grid Overlay Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Animated Accent Lines */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#9BACD8] via-[#F98513] to-[#9BACD8]" />

      {/*<div className="relative max-w-7xl mx-auto px-4 pt-20 pb-24 sm:px-6 lg:pt-32 lg:pb-40">*/}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 lg:py-20">

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div
            className={`transition-all duration-1000 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm text-[#9BACD8] mb-6 border border-white/10">
              <Shield size={14} className="text-[#F98513]" />
              Zambia's Trusted ICT & Energy Partner
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Where{' '}
              <span className="text-[#9BACD8]">Innovation</span>
              <br />
              Meets{' '}
              <span className="text-[#F98513]">Reliability</span>
            </h1>

            <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-lg">
              We build the technology infrastructure and energy systems that power
              Zambian businesses. From network design to solar installations, we
              deliver solutions that reduce downtime and cut costs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                to="/quote"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#F98513] text-white font-semibold rounded-lg hover:bg-[#e0760f] transition-all shadow-lg hover:shadow-xl text-sm"
              >
                Request a Quote
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/ict-solutions"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/20 transition-all border border-white/20 text-sm"
              >
                Our Services
              </Link>
            </div>

            {/* Trust Indicators */}
            {/*<div className="flex flex-wrap gap-6 lg:gap-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#9BACD8]/20 rounded-lg flex items-center justify-center">
                  <Shield size={18} className="text-[#9BACD8]" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">150+</p>
                  <p className="text-gray-400 text-xs">Projects Delivered</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#F98513]/20 rounded-lg flex items-center justify-center">
                  <Zap size={18} className="text-[#F98513]" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">99.9%</p>
                  <p className="text-gray-400 text-xs">Uptime Guarantee</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#9BACD8]/20 rounded-lg flex items-center justify-center">
                  <Clock size={18} className="text-[#9BACD8]" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">24/7</p>
                  <p className="text-gray-400 text-xs">Technical Support</p>
                </div>
              </div>
            </div>*/}
          </div>

          {/* Hero Image Card */}
          <div
            className={`hidden lg:block transition-all duration-1000 delay-300 ${
              loaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-[#9BACD8]/20 to-[#F98513]/20 rounded-2xl blur-xl" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <img
                  src={IMAGES.officeBuilding}
                  alt="Modern infrastructure"
                  className="w-full h-[420px] object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <p className="text-white font-semibold">Infrastructure Excellence</p>
                  <p className="text-gray-300 text-sm">
                    Building Zambia's digital future, one project at a time.
                  </p>
                </div>
              </div>

              {/* Floating Card */}
              {/*<div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 max-w-[200px]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Zap size={18} className="text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Energy Saved</p>
                    <p className="text-xs text-gray-500">40% avg. reduction</p>
                  </div>
                </div>
              </div>*/}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
