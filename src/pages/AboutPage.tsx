import React from 'react';
import { Link } from 'react-router-dom';
import { COMPANY, IMAGES, VALUES } from '@/lib/constants';
import {
  ArrowRight,
  Target,
  Eye,
  Shield,
  Award,
  Users,
  Lightbulb,
  Heart,
  MapPin,
  CheckCircle2,
} from 'lucide-react';

const valueIcons = [Shield, Award, Users, Lightbulb, Heart, MapPin];

const timeline = [
  { year: '2024', title: 'Company Founded', desc: 'Bitek Solutions established in Avondale, Lusaka with a vision to transform ICT and energy infrastructure in Zambia.' },
  { year: '2024', title: 'First Major Projects', desc: 'Completed structured cabling and solar installations for commercial clients across Lusaka.' },
  { year: '2025', title: 'Rapid Growth', desc: 'Expanded service portfolio to include CCTV, access control, and enterprise WiFi solutions.' },
  { year: '2025', title: 'Team Expansion', desc: 'Grew our technical team to serve increasing demand across multiple sectors.' },
  { year: '2026', title: 'Market Leadership', desc: 'Recognized as a trusted ICT and energy partner with 150+ completed projects.' },
];

const AboutPage: React.FC = () => {
  return (
    <>
      {/* Page Hero */}
      <section className="relative bg-[#1a2332] py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMAGES.officeBuilding} alt="About" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a2332] to-[#1a2332]/80" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[#F98513] font-semibold text-sm uppercase tracking-wider mb-3">About Us</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5">
            Building Zambia's Digital & Energy Future
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Since our founding, Bitek Solutions has been committed to delivering
            infrastructure that businesses and communities can depend on.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#F98513] font-semibold text-sm uppercase tracking-wider mb-3">Our Story</p>
              <h2 className="text-3xl font-bold text-[#1a2332] mb-5">
                From Vision to Infrastructure Authority
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Bitek Solutions Limited was founded with a clear mission: to bridge the gap
                between Zambian businesses and world-class ICT infrastructure and renewable
                energy solutions.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Led by {COMPANY.contact}, our team brings together decades of combined
                experience in network engineering, solar energy systems, and security
                infrastructure. We understand the unique challenges facing Zambian businesses
                — from unreliable power supply to aging network infrastructure.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Today, we serve a diverse portfolio of clients including corporate offices,
                schools, government institutions, NGOs, and residential properties across
                Lusaka and beyond.
              </p>
              <div className="flex flex-wrap gap-4">
                {['ZICTA Registered', 'ISO Standards', 'ERB Compliant', 'Certified Technicians'].map((item) => (
                  <span key={item} className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle2 size={16} className="text-[#9BACD8]" />
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src={IMAGES.solarInstall1}
                alt="Bitek team at work"
                className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
              />
              <div className="absolute -bottom-4 -left-4 w-20 h-20 border-2 border-[#F98513]/30 rounded-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      {/*}
      <section className="py-20 bg-[#F4F1EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 lg:p-10 shadow-sm border border-gray-100">
              <div className="w-14 h-14 bg-[#9BACD8]/10 rounded-xl flex items-center justify-center mb-5">
                <Target size={28} className="text-[#9BACD8]" />
              </div>
              <h3 className="text-xl font-bold text-[#1a2332] mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                {COMPANY.mission}
              </p>
            </div>
            <div className="bg-[#1a2332] rounded-xl p-8 lg:p-10 shadow-sm">
              <div className="w-14 h-14 bg-[#F98513]/20 rounded-xl flex items-center justify-center mb-5">
                <Eye size={28} className="text-[#F98513]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                {COMPANY.vision}
              </p>
            </div>
          </div>
        </div>
      </section>*/}

      {/* Values */}
      {/*}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-[#F98513] font-semibold text-sm uppercase tracking-wider mb-3">Our Values</p>
            <h2 className="text-3xl font-bold text-[#1a2332] mb-4">
              The Principles That Guide Us
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {VALUES.map((value, idx) => {
              const Icon = valueIcons[idx] || Shield;
              return (
                <div key={value.title} className="bg-[#F4F1EC] rounded-xl p-6 hover:shadow-lg transition-all">
                  <div className="w-12 h-12 bg-[#9BACD8]/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon size={22} className="text-[#9BACD8]" />
                  </div>
                  <h3 className="font-bold text-[#1a2332] mb-2">{value.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>*/}

      {/* Leadership */}
      {/*}
      <section className="py-20 bg-[#F4F1EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-[#F98513] font-semibold text-sm uppercase tracking-wider mb-3">Leadership</p>
            <h2 className="text-3xl font-bold text-[#1a2332] mb-4">Meet Our Director</h2>
          </div>
          <div className="max-w-3xl mx-auto bg-white rounded-2xl overflow-hidden shadow-lg">
            <div className="grid md:grid-cols-5">
              <div className="md:col-span-2">
                <img
                  src={IMAGES.executive}
                  alt={COMPANY.contact}
                  className="w-full h-full min-h-[300px] object-cover"
                />
              </div>
              <div className="md:col-span-3 p-8">
                <h3 className="text-2xl font-bold text-[#1a2332] mb-1">{COMPANY.contact}</h3>
                <p className="text-[#F98513] font-medium mb-4">Managing Director</p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  With extensive experience in ICT infrastructure and renewable energy,
                  Mr. Vlahakis founded Bitek Solutions to address the growing demand for
                  reliable technology and energy solutions in Zambia.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  His vision of combining technical excellence with exceptional service
                  has positioned Bitek Solutions as a trusted partner for businesses
                  across multiple sectors.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-[#9BACD8] font-semibold hover:text-[#7b8fc4] transition-colors text-sm"
                >
                  Get in Touch <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>*/}

      {/* Timeline */}
      {/*}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-[#F98513] font-semibold text-sm uppercase tracking-wider mb-3">Our Journey</p>
            <h2 className="text-3xl font-bold text-[#1a2332] mb-4">Growth Timeline</h2>
          </div>
          <div className="max-w-3xl mx-auto">
            {timeline.map((item, idx) => (
              <div key={idx} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-[#9BACD8] rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0">
                    {item.year}
                  </div>
                  {idx < timeline.length - 1 && (
                    <div className="w-0.5 flex-1 bg-[#9BACD8]/20 mt-2" />
                  )}
                </div>
                <div className="pb-8">
                  <h4 className="font-bold text-[#1a2332] mb-1">{item.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>*/}

      {/* CTA */}
      <section className="py-16 bg-[#9BACD8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Partner With Us</h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Ready to work with a team that's committed to your success? Let's discuss your project.
          </p>
          <Link
            to="/quote"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#F98513] text-white font-semibold rounded-lg hover:bg-[#e0760f] transition-all shadow-lg text-sm"
          >
            Request a Quote <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
