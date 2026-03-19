import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IMAGES, ENERGY_SERVICES } from '@/lib/constants';
import {
  ArrowRight,
  Sun,
  Battery,
  Zap,
  TrendingDown,
  CheckCircle2,
  Calculator,
} from 'lucide-react';

const RenewableEnergyPage: React.FC = () => {
  const [systemSize, setSystemSize] = useState(10);
  const [monthlyBill, setMonthlyBill] = useState(5000);

  const estimatedSavings = Math.round(monthlyBill * 0.4);
  const annualSavings = estimatedSavings * 12;
  const systemCost = systemSize * 8500;
  const paybackYears = Math.round((systemCost / annualSavings) * 10) / 10;

  return (
    <>
      {/* Page Hero */}
      <section className="relative bg-[#1a2332] py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMAGES.solarPanels} alt="Solar Energy" className="w-full h-full object-cover opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a2332] to-[#1a2332]/50" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[#F98513] font-semibold text-sm uppercase tracking-wider mb-3">Renewable Energy</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5">
            Solar Power Solutions
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Achieve energy independence with our professional solar installations.
            Reduce costs, eliminate load shedding, and power your future sustainably.
          </p>
        </div>
      </section>

      {/* Key Benefits */}
      {/*}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: TrendingDown, title: '40% Avg. Savings', desc: 'On monthly electricity costs', color: '#F98513' },
              { icon: Zap, title: 'Zero Downtime', desc: 'During load shedding', color: '#9BACD8' },
              { icon: Sun, title: '25+ Year Lifespan', desc: 'On solar panel systems', color: '#F98513' },
              { icon: Battery, title: 'Battery Backup', desc: 'For 24/7 power supply', color: '#9BACD8' },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="text-center p-6 bg-[#F4F1EC] rounded-xl">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: `${item.color}15` }}>
                    <Icon size={26} style={{ color: item.color }} />
                  </div>
                  <h3 className="font-bold text-[#1a2332] mb-1">{item.title}</h3>
                  <p className="text-gray-500 text-sm">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>*/}

      {/* Services */}
      <section className="py-20 bg-[#F4F1EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl font-bold text-[#1a2332] mb-4">Our Energy Solutions</h2>
            <p className="text-gray-600 leading-relaxed">
              From design to installation and ongoing maintenance, we handle every aspect of your solar energy journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {ENERGY_SERVICES.map((service) => (
              <div key={service.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all group">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <h3 className="absolute bottom-4 left-6 text-xl font-bold text-white">{service.title}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{service.fullDesc}</p>
                  <div className="grid grid-cols-2 gap-2 mb-5">
                    {service.benefits.map((benefit) => (
                      <span key={benefit} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle2 size={14} className="text-[#F98513] flex-shrink-0" />
                        {benefit}
                      </span>
                    ))}
                  </div>
                  <Link
                    to="/quote"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#F98513] hover:text-[#e0760f] transition-colors"
                  >
                    Get a Quote <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solar Calculator */}
      {/*
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#F98513]/10 rounded-xl flex items-center justify-center">
                  <Calculator size={24} className="text-[#F98513]" />
                </div>
                <div>
                  <p className="text-[#F98513] font-semibold text-sm uppercase tracking-wider">Savings Calculator</p>
                  <h2 className="text-2xl font-bold text-[#1a2332]">Estimate Your Savings</h2>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-8">
                Use our simple calculator to estimate how much you could save with a solar installation. Actual savings may vary based on your specific energy usage patterns.
              </p>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-[#1a2332] mb-2">
                    System Size: {systemSize} kW
                  </label>
                  <input
                    type="range"
                    min={3}
                    max={100}
                    value={systemSize}
                    onChange={(e) => setSystemSize(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#F98513]"
                  />
                  <div className="flex justify-between text-xs text-gray-400 mt-1">
                    <span>3 kW</span>
                    <span>100 kW</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#1a2332] mb-2">
                    Monthly Electricity Bill (ZMW): {monthlyBill.toLocaleString()}
                  </label>
                  <input
                    type="range"
                    min={500}
                    max={50000}
                    step={500}
                    value={monthlyBill}
                    onChange={(e) => setMonthlyBill(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#F98513]"
                  />
                  <div className="flex justify-between text-xs text-gray-400 mt-1">
                    <span>ZMW 500</span>
                    <span>ZMW 50,000</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#1a2332] rounded-2xl p-8 lg:p-10">
              <h3 className="text-white font-bold text-lg mb-6">Estimated Results</h3>
              <div className="space-y-5">
                <div className="flex justify-between items-center pb-4 border-b border-white/10">
                  <span className="text-gray-400 text-sm">Monthly Savings</span>
                  <span className="text-[#F98513] font-bold text-xl">ZMW {estimatedSavings.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-white/10">
                  <span className="text-gray-400 text-sm">Annual Savings</span>
                  <span className="text-white font-bold text-xl">ZMW {annualSavings.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-white/10">
                  <span className="text-gray-400 text-sm">Est. System Cost</span>
                  <span className="text-white font-bold text-xl">ZMW {systemCost.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">Payback Period</span>
                  <span className="text-[#9BACD8] font-bold text-xl">{paybackYears} years</span>
                </div>
              </div>
              <p className="text-gray-500 text-xs mt-6">
                * Estimates based on average Zambian solar conditions. Actual results may vary.
              </p>
              <Link
                to="/quote"
                className="mt-6 w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#F98513] text-white font-semibold rounded-lg hover:bg-[#e0760f] transition-all text-sm"
              >
                Get Accurate Quote <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>*/}

      {/* CTA */}
      <section className="py-16 bg-[#F98513]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Go Solar?</h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Contact us for a free site assessment and customized solar proposal for your property.
          </p>
          <Link
            to="/quote"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#F98513] font-semibold rounded-lg hover:bg-gray-100 transition-all shadow-lg text-sm"
          >
            Request Solar Quote <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
};

export default RenewableEnergyPage;
