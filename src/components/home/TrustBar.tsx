import React, { useEffect, useState, useRef } from 'react';
import { STATS } from '@/lib/constants';

const AnimatedCounter: React.FC<{ target: number; suffix: string; duration?: number }> = ({
  target,
  suffix,
  duration = 2000,
}) => {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const interval = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(Math.floor(current * 10) / 10);
      }
    }, duration / steps);
    return () => clearInterval(interval);
  }, [started, target, duration]);

  const displayValue = target % 1 === 0 ? Math.floor(count) : count.toFixed(1);

  return (
    <div ref={ref} className="text-3xl sm:text-4xl font-bold text-white">
      {displayValue}
      <span className="text-[#F98513]">{suffix}</span>
    </div>
  );
};

const TrustBar: React.FC = () => {
  return (
    <section className="bg-[#9BACD8] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="trustgrid" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#trustgrid)" />
        </svg>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              <p className="text-white/80 text-sm mt-2 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
