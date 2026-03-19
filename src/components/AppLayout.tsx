import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, Outlet } from 'react-router-dom';
import { COMPANY, IMAGES, STATS, ICT_SERVICES, ENERGY_SERVICES, INDUSTRIES, TESTIMONIALS, PROJECTS, VALUES } from '@/lib/constants';
import Header from './Header';
import Footer from './Footer';
import {
  ArrowRight, Shield, Zap, Clock, Phone, Cable, Server, Camera, Sun, Battery, Wrench,
  Star, ChevronLeft, ChevronRight, Quote, CheckCircle2, TrendingDown, Users, Handshake,
  Building2, GraduationCap, Landmark, HeartPulse, Globe, Store, Home, Factory, Filter,
} from 'lucide-react';

/* ── Animated Counter ── */
const AnimatedCounter: React.FC<{ target: number; suffix: string }> = ({ target, suffix }) => {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setStarted(true); }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  useEffect(() => {
    if (!started) return;
    let c = 0; const inc = target / 60;
    const iv = setInterval(() => { c += inc; if (c >= target) { setCount(target); clearInterval(iv); } else setCount(Math.floor(c * 10) / 10); }, 33);
    return () => clearInterval(iv);
  }, [started, target]);
  const d = target % 1 === 0 ? Math.floor(count) : count.toFixed(1);
  return <div ref={ref} className="text-3xl sm:text-4xl font-bold text-white">{d}<span className="text-[#F98513]">{suffix}</span></div>;
};

const iconMap: Record<string, React.FC<{ size?: number; className?: string }>> = {
  building: Building2, graduation: GraduationCap, landmark: Landmark, 'heart-pulse': HeartPulse,
  globe: Globe, store: Store, home: Home, factory: Factory,
};

/* ── HOME PAGE ── */
const HomePage: React.FC = () => {
  const [loaded, setLoaded] = useState(false);
  const [activeTest, setActiveTest] = useState(0);
  useEffect(() => { setLoaded(true); }, []);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#1a2332] min-h-[600px] lg:min-h-[700px]">
        <div className="absolute inset-0">
          <img src={IMAGES.hero} alt="Bitek Solutions" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a2332] via-[#1a2332]/90 to-[#1a2332]/60" />
        </div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#9BACD8] via-[#F98513] to-[#9BACD8]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm text-[#9BACD8] mb-6 border border-white/10">
                <Shield size={14} className="text-[#F98513]" />Zambia's Trusted ICT & Energy Partner
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Where <span className="text-[#9BACD8]">Innovation</span><br />Meets <span className="text-[#F98513]">Reliability</span>
              </h1>
              <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-lg">
                We build the technology infrastructure and energy systems that power Zambian businesses. From network design to solar installations, we deliver solutions that reduce downtime and cut costs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link to="/quote" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#F98513] text-white font-semibold rounded-lg hover:bg-[#e0760f] transition-all shadow-lg text-sm">
                  Request a Quote <ArrowRight size={18} />
                </Link>
                <Link to="/ict-solutions" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/20 transition-all border border-white/20 text-sm">
                  Our Services
                </Link>
              </div>
              <div className="flex flex-wrap gap-6 lg:gap-8">
                {[{ icon: Shield, val: '150+', lbl: 'Projects Delivered' }, { icon: Zap, val: '99.9%', lbl: 'Uptime Guarantee' }, { icon: Clock, val: '24/7', lbl: 'Technical Support' }].map(i => (
                  <div key={i.lbl} className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#9BACD8]/20 rounded-lg flex items-center justify-center"><i.icon size={18} className="text-[#9BACD8]" /></div>
                    <div><p className="text-white font-semibold text-sm">{i.val}</p><p className="text-gray-400 text-xs">{i.lbl}</p></div>
                  </div>
                ))}
              </div>
            </div>
            <div className={`hidden lg:block transition-all duration-1000 delay-300 ${loaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-[#9BACD8]/20 to-[#F98513]/20 rounded-2xl blur-xl" />
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                  <img src={IMAGES.officeBuilding} alt="Modern infrastructure" className="w-full h-[420px] object-cover" />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                    <p className="text-white font-semibold">Infrastructure Excellence</p>
                    <p className="text-gray-300 text-sm">Building Zambia's digital future, one project at a time.</p>
                  </div>
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 max-w-[200px]">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0"><Zap size={18} className="text-green-600" /></div>
                    <div><p className="text-sm font-semibold text-gray-900">Energy Saved</p><p className="text-xs text-gray-500">40% avg. reduction</p></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-[#9BACD8] py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {STATS.map(s => <div key={s.label} className="text-center"><AnimatedCounter target={s.value} suffix={s.suffix} /><p className="text-white/80 text-sm mt-2 font-medium">{s.label}</p></div>)}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-[#F98513] font-semibold text-sm uppercase tracking-wider mb-3">What We Do</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1a2332] mb-4">Comprehensive ICT & Energy Solutions</h2>
            <p className="text-gray-600 leading-relaxed">From network infrastructure to solar power, we deliver end-to-end solutions that keep your business connected, secure, and powered.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              { icon: Cable, title: 'Network Infrastructure', desc: 'Enterprise-grade structured cabling, network design, and implementation for reliable connectivity.', link: '/ict-solutions', color: '#9BACD8' },
              { icon: Server, title: 'Server Solutions', desc: 'Professional server deployment, virtualization, and management for maximum uptime.', link: '/ict-solutions', color: '#9BACD8' },
              { icon: Camera, title: 'CCTV & Security', desc: 'Comprehensive surveillance and access control systems for complete premises security.', link: '/ict-solutions', color: '#9BACD8' },
              { icon: Sun, title: 'Solar Power Systems', desc: 'Commercial and residential solar installations for energy independence and cost savings.', link: '/renewable-energy', color: '#F98513' },
              { icon: Battery, title: 'Battery Backup', desc: 'Advanced energy storage solutions ensuring uninterrupted power for critical systems.', link: '/renewable-energy', color: '#F98513' },
              { icon: Wrench, title: 'Maintenance & Support', desc: 'Proactive maintenance programs and 24/7 technical support for all installed systems.', link: '/contact', color: '#9BACD8' },
            ].map(s => (
              <Link key={s.title} to={s.link} className="group relative bg-[#F4F1EC] rounded-xl p-7 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110" style={{ backgroundColor: `${s.color}15` }}>
                  <s.icon size={26} style={{ color: s.color }} />
                </div>
                <h3 className="text-lg font-bold text-[#1a2332] mb-3 group-hover:text-[#9BACD8] transition-colors">{s.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{s.desc}</p>
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-[#F98513] opacity-0 group-hover:opacity-100 transition-opacity">Learn More <ArrowRight size={14} /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 lg:py-28 bg-[#F4F1EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl"><img src={IMAGES.solarInstall2} alt="Professional installation" className="w-full h-[400px] lg:h-[500px] object-cover" /></div>
              <div className="absolute -bottom-6 -right-4 sm:right-6 bg-white rounded-xl shadow-xl p-5 max-w-[220px]">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-[#F98513]/10 rounded-full flex items-center justify-center"><TrendingDown size={22} className="text-[#F98513]" /></div>
                  <div><p className="text-2xl font-bold text-[#1a2332]">40%</p><p className="text-xs text-gray-500">Avg. Cost Reduction</p></div>
                </div>
                <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden"><div className="h-full w-[85%] bg-gradient-to-r from-[#F98513] to-[#f9a54d] rounded-full" /></div>
              </div>
            </div>
            <div>
              <p className="text-[#F98513] font-semibold text-sm uppercase tracking-wider mb-3">Why Bitek Solutions</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1a2332] mb-5">Your Technology & Energy Partner</h2>
              <p className="text-gray-600 leading-relaxed mb-8">We combine deep technical expertise with a commitment to service excellence, delivering infrastructure solutions that businesses depend on every day.</p>
              <div className="grid sm:grid-cols-2 gap-5 mb-8">
                {[
                  { icon: TrendingDown, title: 'Reduced Downtime', desc: 'Infrastructure designed for maximum reliability, keeping operations running 24/7.' },
                  { icon: Zap, title: 'Energy Cost Savings', desc: 'Solar installations delivering measurable ROI with average 40% cost reductions.' },
                  { icon: Wrench, title: 'Professional Implementation', desc: 'Every project executed to international standards with certified technicians.' },
                  { icon: Users, title: 'Scalable Solutions', desc: 'Infrastructure designed to grow with your business, from startup to enterprise.' },
                  { icon: CheckCircle2, title: 'Local Technical Support', desc: 'Lusaka-based team providing rapid response and ongoing maintenance.' },
                  { icon: Handshake, title: 'Long-term Partnerships', desc: 'Continuous support long after project completion.' },
                ].map(r => (
                  <div key={r.title} className="flex gap-3">
                    <div className="w-9 h-9 bg-[#9BACD8]/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"><r.icon size={18} className="text-[#9BACD8]" /></div>
                    <div><h4 className="font-semibold text-[#1a2332] text-sm mb-1">{r.title}</h4><p className="text-gray-500 text-xs leading-relaxed">{r.desc}</p></div>
                  </div>
                ))}
              </div>
              <Link to="/about" className="inline-flex items-center gap-2 px-6 py-3 bg-[#1a2332] text-white text-sm font-semibold rounded-lg hover:bg-[#2a3a52] transition-all">Learn More About Us <ArrowRight size={16} /></Link>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS PREVIEW */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-[#F98513] font-semibold text-sm uppercase tracking-wider mb-3">Our Work</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1a2332] mb-4">Featured Projects</h2>
            <p className="text-gray-600 leading-relaxed">Explore some of our recent installations and infrastructure projects delivered across Zambia.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {PROJECTS.slice(0, 3).map((p, i) => (
              <Link key={i} to="/projects" className="group bg-[#F4F1EC] rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="relative h-52 overflow-hidden">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 left-4"><span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-semibold text-[#1a2332] rounded-full">{p.category}</span></div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-[#1a2332] mb-2 group-hover:text-[#9BACD8] transition-colors">{p.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{p.description}</p>
                  <div className="flex items-center gap-2 text-sm text-green-600 font-medium"><CheckCircle2 size={16} />{p.result}</div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10"><Link to="/projects" className="inline-flex items-center gap-2 px-6 py-3 bg-[#1a2332] text-white text-sm font-semibold rounded-lg hover:bg-[#2a3a52] transition-all">View All Projects <ArrowRight size={16} /></Link></div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-20 lg:py-28 bg-[#F4F1EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-[#F98513] font-semibold text-sm uppercase tracking-wider mb-3">Who We Serve</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1a2332] mb-4">Industries We Serve</h2>
            <p className="text-gray-600 leading-relaxed">From corporate offices to residential properties, we deliver tailored ICT and energy solutions across diverse sectors.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {INDUSTRIES.map(ind => {
              const Icon = iconMap[ind.icon] || Building2;
              return (
                <Link key={ind.name} to="/industries" className="group bg-white rounded-xl p-6 hover:bg-[#1a2332] transition-all duration-300 border border-transparent hover:border-[#9BACD8]/20">
                  <div className="w-12 h-12 bg-[#9BACD8]/10 group-hover:bg-[#9BACD8]/20 rounded-xl flex items-center justify-center mb-4 transition-colors"><Icon size={22} className="text-[#9BACD8]" /></div>
                  <h3 className="font-semibold text-[#1a2332] group-hover:text-white text-sm mb-2 transition-colors">{ind.name}</h3>
                  <p className="text-gray-500 group-hover:text-gray-400 text-xs leading-relaxed transition-colors">{ind.desc}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 lg:py-28 bg-[#1a2332] relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-[#F98513] font-semibold text-sm uppercase tracking-wider mb-3">Client Testimonials</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
          </div>
          <div className="hidden lg:grid lg:grid-cols-4 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-[#9BACD8]/30 transition-all">
                <Quote size={24} className="text-[#F98513]/40 mb-4" />
                <p className="text-gray-300 text-sm leading-relaxed mb-5">"{t.text}"</p>
                <div className="flex items-center gap-1 mb-3">{Array.from({ length: t.rating }).map((_, j) => <Star key={j} size={14} className="text-[#F98513] fill-[#F98513]" />)}</div>
                <p className="text-white font-semibold text-sm">{t.name}</p>
                <p className="text-gray-400 text-xs">{t.role}, {t.company}</p>
              </div>
            ))}
          </div>
          <div className="lg:hidden bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
            <Quote size={32} className="text-[#F98513]/40 mb-5" />
            <p className="text-gray-300 leading-relaxed mb-6">"{TESTIMONIALS[activeTest].text}"</p>
            <div className="flex items-center gap-1 mb-4">{Array.from({ length: TESTIMONIALS[activeTest].rating }).map((_, j) => <Star key={j} size={16} className="text-[#F98513] fill-[#F98513]" />)}</div>
            <p className="text-white font-semibold">{TESTIMONIALS[activeTest].name}</p>
            <p className="text-gray-400 text-sm mb-6">{TESTIMONIALS[activeTest].role}, {TESTIMONIALS[activeTest].company}</p>
            <div className="flex items-center justify-between">
              <div className="flex gap-2">{TESTIMONIALS.map((_, i) => <button key={i} onClick={() => setActiveTest(i)} className={`w-2.5 h-2.5 rounded-full transition-all ${i === activeTest ? 'bg-[#F98513] w-6' : 'bg-white/20'}`} />)}</div>
              <div className="flex gap-2">
                <button onClick={() => setActiveTest((activeTest - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)} className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20"><ChevronLeft size={18} className="text-white" /></button>
                <button onClick={() => setActiveTest((activeTest + 1) % TESTIMONIALS.length)} className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20"><ChevronRight size={18} className="text-white" /></button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-[#F4F1EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="relative rounded-2xl overflow-hidden">
            <div className="absolute inset-0"><img src={IMAGES.serverRoom} alt="Infrastructure" className="w-full h-full object-cover" /><div className="absolute inset-0 bg-gradient-to-r from-[#1a2332]/95 to-[#1a2332]/80" /></div>
            <div className="relative px-8 sm:px-12 lg:px-16 py-16 lg:py-20">
              <div className="max-w-2xl">
                <p className="text-[#F98513] font-semibold text-sm uppercase tracking-wider mb-3">Ready to Get Started?</p>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5">Let's Build Your Infrastructure Together</h2>
                <p className="text-gray-300 leading-relaxed mb-8 text-lg">Whether you need a complete network overhaul, a solar installation, or ongoing IT support, our team is ready to deliver a solution tailored to your needs.</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/quote" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#F98513] text-white font-semibold rounded-lg hover:bg-[#e0760f] transition-all shadow-lg text-sm">Request a Free Quote <ArrowRight size={18} /></Link>
                  <a href="tel:+260977289299" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/20 transition-all border border-white/20 text-sm"><Phone size={18} />Call Us Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

/* ── MAIN LAYOUT ── */
const AppLayout: React.FC = () => {
  const location = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [location.pathname]);

  // If rendered via Index.tsx wrapper (path="/"), show full site with header/footer
  return (
    <div className="min-h-screen flex flex-col bg-[#F4F1EC]">
      <Header />
      <main className="flex-1">
        <HomePage />
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;
