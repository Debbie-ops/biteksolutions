import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IMAGES, ICT_SERVICES } from '@/lib/constants';
import {
  ArrowRight,
  Cable,
  Network,
  Server,
  Camera,
  Wifi,
  Headphones,
  Fingerprint,
  ClipboardCheck,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
} from 'lucide-react';

const iconMap: Record<string, React.FC<{ size?: number; className?: string }>> = {
  cable: Cable,
  network: Network,
  server: Server,
  camera: Camera,
  wifi: Wifi,
  headphones: Headphones,
  fingerprint: Fingerprint,
  clipboard: ClipboardCheck,
};

const ICTSolutionsPage: React.FC = () => {
  const [expanded, setExpanded] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpanded(expanded === id ? null : id);
  };

  return (
    <>
      {/* Page Hero */}
      <section className="relative bg-[#1a2332] py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMAGES.serverRoom} alt="ICT Solutions" className="w-full h-full object-cover opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a2332] to-[#1a2332]/50" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[#F98513] font-semibold text-sm uppercase tracking-wider mb-3">ICT Solutions</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5">
            Enterprise ICT Infrastructure
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            From structured cabling to complete network solutions, we build the
            technology backbone your business needs to thrive.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl font-bold text-[#1a2332] mb-4">Our ICT Services</h2>
            <p className="text-gray-600 leading-relaxed">
              Comprehensive technology solutions designed for reliability, security, and scalability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {ICT_SERVICES.map((service) => {
              const Icon = iconMap[service.icon] || Server;
              const isExpanded = expanded === service.id;

              return (
                <div
                  key={service.id}
                  className="bg-[#F4F1EC] rounded-xl overflow-hidden border border-transparent hover:border-[#9BACD8]/20 transition-all"
                >
                  <div className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#9BACD8]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon size={24} className="text-[#9BACD8]" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-[#1a2332] text-lg mb-2">{service.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed mb-3">
                          {service.shortDesc}
                        </p>

                        {isExpanded && (
                          <div className="mt-4 space-y-4 animate-in fade-in">
                            <div className="rounded-lg overflow-hidden">
                              <img
                                src={service.image}
                                alt={service.title}
                                className="w-full h-48 object-cover rounded-lg"
                              />
                            </div>
                            <p className="text-gray-600 text-sm leading-relaxed">
                              {service.fullDesc}
                            </p>
                            <div>
                              <h4 className="font-semibold text-[#1a2332] text-sm mb-2">Key Benefits:</h4>
                              <div className="grid grid-cols-2 gap-2">
                                {service.benefits.map((benefit) => (
                                  <span key={benefit} className="flex items-center gap-2 text-sm text-gray-600">
                                    <CheckCircle2 size={14} className="text-[#9BACD8] flex-shrink-0" />
                                    {benefit}
                                  </span>
                                ))}
                              </div>
                            </div>
                            <Link
                              to="/quote"
                              className="inline-flex items-center gap-2 text-sm font-semibold text-[#F98513] hover:text-[#e0760f] transition-colors"
                            >
                              Request Quote for {service.title}
                              <ArrowRight size={14} />
                            </Link>
                          </div>
                        )}

                        {/*<button
                          onClick={() => toggleExpand(service.id)}
                          className="flex items-center gap-1.5 text-sm font-medium text-[#9BACD8] hover:text-[#7b8fc4] transition-colors mt-2"
                        >
                          {isExpanded ? 'Show Less' : 'Learn More'}
                          {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                        </button>*/}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-[#F4F1EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-[#F98513] font-semibold text-sm uppercase tracking-wider mb-3">Our Process</p>
            <h2 className="text-3xl font-bold text-[#1a2332] mb-4">How We Work</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Consultation', desc: 'We assess your current infrastructure and understand your requirements.' },
              { step: '02', title: 'Design', desc: 'Our engineers design a solution tailored to your specific needs and budget.' },
              { step: '03', title: 'Implementation', desc: 'Professional installation by certified technicians with minimal disruption.' },
              { step: '04', title: 'Support', desc: 'Ongoing maintenance and support to ensure optimal performance.' },
            ].map((item) => (
              <div key={item.step} className="bg-white rounded-xl p-6 text-center shadow-sm">
                <div className="w-14 h-14 bg-[#9BACD8]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#9BACD8] font-bold text-lg">{item.step}</span>
                </div>
                <h3 className="font-bold text-[#1a2332] mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#1a2332]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Need ICT Infrastructure Support?</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Contact us for a free consultation and site assessment. We'll design a solution that fits your needs and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/quote"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#F98513] text-white font-semibold rounded-lg hover:bg-[#e0760f] transition-all shadow-lg text-sm"
            >
              Request a Quote <ArrowRight size={18} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-all border border-white/20 text-sm"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ICTSolutionsPage;
