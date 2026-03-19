import React, { useState } from 'react';
import { TESTIMONIALS } from '@/lib/constants';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'; 

const TestimonialsSection: React.FC = () => {
  const [active, setActive] = useState(0);

  const next = () => setActive((prev) => (prev + 1) % TESTIMONIALS.length);
  const prev = () => setActive((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <section className="py-20 lg:py-28 bg-[#1a2332] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="dots" width="30" height="30" patternUnits="userSpaceOnUse">
              <circle cx="15" cy="15" r="1" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-[#F98513] font-semibold text-sm uppercase tracking-wider mb-3">
            Client Testimonials
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Don't just take our word for it. Hear from the businesses and
            organizations that trust Bitek Solutions.
          </p>
        </div>

        {/* Desktop: All cards */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-[#9BACD8]/30 transition-all"
            >
              <Quote size={24} className="text-[#F98513]/40 mb-4" />
              <p className="text-gray-300 text-sm leading-relaxed mb-5">
                "{t.text}"
              </p>
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={14} className="text-[#F98513] fill-[#F98513]" />
                ))}
              </div>
              <div>
                <p className="text-white font-semibold text-sm">{t.name}</p>
                <p className="text-gray-400 text-xs">
                  {t.role}, {t.company}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: Carousel */}
        <div className="lg:hidden">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
            <Quote size={32} className="text-[#F98513]/40 mb-5" />
            <p className="text-gray-300 leading-relaxed mb-6 min-h-[100px]">
              "{TESTIMONIALS[active].text}"
            </p>
            <div className="flex items-center gap-1 mb-4">
              {Array.from({ length: TESTIMONIALS[active].rating }).map((_, i) => (
                <Star key={i} size={16} className="text-[#F98513] fill-[#F98513]" />
              ))}
            </div>
            <div className="mb-6">
              <p className="text-white font-semibold">{TESTIMONIALS[active].name}</p>
              <p className="text-gray-400 text-sm">
                {TESTIMONIALS[active].role}, {TESTIMONIALS[active].company}
              </p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                {TESTIMONIALS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActive(idx)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      idx === active ? 'bg-[#F98513] w-6' : 'bg-white/20'
                    }`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={prev}
                  className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <ChevronLeft size={18} className="text-white" />
                </button>
                <button
                  onClick={next}
                  className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <ChevronRight size={18} className="text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
