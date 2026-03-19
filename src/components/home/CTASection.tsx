import React from 'react';
import { Link } from 'react-router-dom';
import { IMAGES } from '@/lib/constants';
import { ArrowRight, Phone } from 'lucide-react';

const CTASection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#F4F1EC] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="relative rounded-2xl overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0">
            <img
              src={IMAGES.serverRoom}
              alt="Infrastructure"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1a2332]/95 to-[#1a2332]/80" />
          </div>

          <div className="relative px-8 sm:px-12 lg:px-16 py-16 lg:py-20">
            <div className="max-w-2xl">
              <p className="text-[#F98513] font-semibold text-sm uppercase tracking-wider mb-3">
                Ready to Get Started?
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5">
                Let's Build Your Infrastructure Together
              </h2>
              <p className="text-gray-300 leading-relaxed mb-8 text-lg">
                Whether you need a complete network overhaul, a solar installation,
                or ongoing IT support, our team is ready to deliver a solution
                tailored to your needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/quote"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#F98513] text-white font-semibold rounded-lg hover:bg-[#e0760f] transition-all shadow-lg text-sm"
                >
                  Request a Free Quote
                  <ArrowRight size={18} />
                </Link>
                <a
                  href="tel:+260977289299"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/20 transition-all border border-white/20 text-sm"
                >
                  <Phone size={18} />
                  Call Us Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
