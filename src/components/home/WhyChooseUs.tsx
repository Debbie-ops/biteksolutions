import React from 'react';
import { Link } from 'react-router-dom';
import { IMAGES } from '@/lib/constants';
import {
  ArrowRight,
  CheckCircle2,
  TrendingDown,
  Zap,
  Users,
  Wrench,
  Handshake,
} from 'lucide-react';

const reasons = [
  {
    icon: TrendingDown,
    title: 'Reduced Downtime',
    desc: 'Our infrastructure solutions are designed for maximum reliability, keeping your operations running 24/7.',
  },
  {
    icon: Zap,
    title: 'Energy Cost Savings',
    desc: 'Solar installations and energy efficient systems that deliver measurable ROI with average energy cost reductions of 40%.',
  },
  {
    icon: Wrench,
    title: 'Professional Implementation',
    desc: 'Every project is executed to international standards with certified technicians and quality materials.',
  },
  {
    icon: Users,
    title: 'Scalable Tech Solutions',
    desc: 'Infrastructure designed to grow with your business, from startup to enterprise scale.',
  },
  {
    icon: CheckCircle2,
    title: 'Local Technical Support',
    desc: 'Zambian team providing rapid response times and ongoing maintenance support.',
  },
  {
    icon: Handshake,
    title: 'Long term Partnerships',
    desc: 'We invest in relationships, providing continuous support long after project completion.',
  },
];

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#F4F1EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={IMAGES.solarInstall2}
                alt="Professional installation"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
            </div>
            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -right-4 sm:right-6 bg-white rounded-xl shadow-xl p-5 max-w-[220px]">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-[#F98513]/10 rounded-full flex items-center justify-center">
                  <TrendingDown size={22} className="text-[#F98513]" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-[#1a2332]">40%</p>
                  <p className="text-xs text-gray-500">Avg. Cost Reduction</p>
                </div>
              </div>
              <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full w-[85%] bg-gradient-to-r from-[#F98513] to-[#f9a54d] rounded-full" />
              </div>
            </div>
            {/* Accent */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-[#9BACD8]/30 rounded-2xl" />
          </div>

          {/* Content Side */}
          <div>
            <p className="text-[#F98513] font-semibold text-sm uppercase tracking-wider mb-3">
              Why Bitek Solutions
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1a2332] mb-5">
              Your Technology & Energy Partner
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              We combine deep technical expertise with a commitment to service
              excellence, delivering infrastructure solutions that businesses
              depend on every day.
            </p>

            <div className="grid sm:grid-cols-2 gap-5 mb-8">
              {reasons.map((reason) => {
                const Icon = reason.icon;
                return (
                  <div key={reason.title} className="flex gap-3">
                    <div className="w-9 h-9 bg-[#9BACD8]/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon size={18} className="text-[#9BACD8]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#1a2332] text-sm mb-1">
                        {reason.title}
                      </h4>
                      <p className="text-gray-500 text-xs leading-relaxed">
                        {reason.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#1a2332] text-white text-sm font-semibold rounded-lg hover:bg-[#2a3a52] transition-all"
            >
              Learn More About Us
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
