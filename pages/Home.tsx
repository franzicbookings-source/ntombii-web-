
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Layout, Smartphone, Wrench, Star, Quote, CheckCircle, Server, Mail, Search, Sparkles, ShieldCheck, ExternalLink } from 'lucide-react';
import { CORE_SERVICES, PROJECTS, PRICING_TIERS, TESTIMONIALS } from '../constants';
import TechStack from '../components/TechStack';

const Home: React.FC = () => {
  const slogans = ['FUTURE READY', 'KZN BUILT'];

  return (
    <div className="w-full">
      {/* 1. Hero Section */}
      <section className="relative min-h-[90vh] md:min-h-[95vh] flex items-center justify-center pt-28 pb-12 px-4 overflow-hidden">
        <div className="blob absolute top-1/4 -left-20 w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-blue-600/20 rounded-full"></div>
        <div className="blob absolute bottom-1/4 -right-20 w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-purple-600/20 rounded-full"></div>

        <div className="container mx-auto max-w-6xl text-center relative z-10">
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 md:px-4 md:py-2 bg-white/5 border border-white/10 rounded-full mb-6 backdrop-blur-md animate-in fade-in slide-in-from-top-4 duration-700">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            <span className="text-[9px] md:text-xs font-black uppercase tracking-widest text-blue-400">Next-Gen Studio • Newcastle, KZN</span>
          </div>

          <h1 className="text-3xl sm:text-6xl md:text-8xl lg:text-9xl font-black text-white leading-[1.1] tracking-tighter mb-6 md:mb-8 px-2">
            Next-Gen Tech. <br />
            <span className="text-gradient">Founder Speed.</span>
          </h1>

          <p className="text-sm sm:text-lg md:text-2xl text-slate-400 max-w-3xl mx-auto mb-10 md:mb-12 leading-relaxed font-medium px-4">
            We build high-performance websites and apps with absolute craft and founder-led dedication.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4">
            <Link 
              to="/contact" 
              className="w-full sm:w-auto group relative px-10 py-5 bg-blue-600 text-white rounded-2xl font-black text-base md:text-xl transition-all hover:bg-blue-500 shadow-[0_20px_50px_rgba(37,99,235,0.4)] overflow-hidden hover:scale-105 active:scale-95"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <span className="relative z-10 flex items-center justify-center">
                Get a Free Quote <ArrowRight className="ml-3 w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link 
              to="/portfolio" 
              className="w-full sm:w-auto px-10 py-5 bg-white/5 border border-white/10 text-white rounded-2xl font-black text-base md:text-xl transition-all backdrop-blur-md flex items-center justify-center hover:bg-white/10"
            >
              See Our Works
            </Link>
          </div>

          {/* Infinite Marquee Ticker */}
          <div className="mt-16 md:mt-24 marquee-wrapper opacity-50">
            <div className="marquee-content">
              {/* First Set */}
              {[...slogans, ...slogans, ...slogans, ...slogans].map((text, i) => (
                <div key={`slogan-1-${i}`} className="text-lg md:text-3xl font-black tracking-tighter italic text-slate-400">
                  {text}
                </div>
              ))}
              {/* Duplicate Set for Seamless Loop */}
              {[...slogans, ...slogans, ...slogans, ...slogans].map((text, i) => (
                <div key={`slogan-2-${i}`} className="text-lg md:text-3xl font-black tracking-tighter italic text-slate-400">
                  {text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Authority Tech Stack */}
      <TechStack />

      {/* 2. Popular Services & Prices Section */}
      <section className="py-20 md:py-32 px-4 bg-white/[0.01]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-blue-500 font-black text-[10px] md:text-sm uppercase tracking-[0.3em] mb-3">Capabilities</h2>
            <h3 className="text-3xl md:text-6xl font-black text-white leading-tight mb-6">Built To <span className="text-gradient-blue">Perform</span>.</h3>
            <p className="text-sm md:text-xl text-slate-400 max-w-2xl mx-auto font-medium">Professional engineering starting at South Africa's most competitive entry rates.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {CORE_SERVICES.map((s) => (
              <div key={s.id} className="glass-card p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] relative group overflow-hidden flex flex-col items-center sm:items-start">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-blue-600/10 transition-colors"></div>
                
                <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-600/10 text-blue-400 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/5 transition-transform group-hover:scale-110 duration-500">
                  {s.id === 'web-design' && <Globe className="w-6 h-6 md:w-8 md:h-8" />}
                  {s.id === 'web-apps' && <Layout className="w-6 h-6 md:w-8 md:h-8" />}
                  {s.id === 'mobile-apps' && <Smartphone className="w-6 h-6 md:w-8 md:h-8" />}
                  {s.id === 'custom-tools' && <Wrench className="w-6 h-6 md:w-8 md:h-8" />}
                </div>

                <div className="text-center sm:text-left mb-auto">
                  <h4 className="text-xl md:text-2xl font-black text-white mb-2">{s.title}</h4>
                  <p className="text-slate-500 text-xs md:text-sm font-medium leading-relaxed mb-6">
                    {s.description}
                  </p>
                </div>

                <div className="w-full pt-6 border-t border-white/5 flex flex-col items-center sm:items-start">
                  <div className="text-[10px] font-black text-blue-500/60 uppercase tracking-widest mb-1">Build Cost from</div>
                  <div className="text-2xl md:text-3xl font-black text-white">{s.startingPrice}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Testimonials Section */}
      <section className="py-20 md:py-32 px-4 relative overflow-hidden">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-blue-500 font-black text-[10px] md:text-sm uppercase tracking-[0.3em] mb-4">Social Proof</h2>
            <h3 className="text-3xl md:text-6xl font-black text-white mb-6">Voices of <span className="text-gradient">Partners</span>.</h3>
            <p className="text-sm md:text-xl text-slate-400 max-w-2xl mx-auto font-medium">Hear from the founders and leaders who trusted us with their vision in our foundational year.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="glass-card p-8 md:p-12 rounded-[2.5rem] relative group border border-white/5 hover:border-blue-500/30 transition-all duration-500 flex flex-col">
                <div className="absolute top-10 right-10 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Quote className="w-16 h-16 text-white" />
                </div>
                <div className="flex items-center space-x-1 mb-8">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-blue-500 text-blue-500" />
                  ))}
                </div>
                <p className="text-lg md:text-xl text-slate-200 leading-relaxed font-medium mb-10 italic flex-grow">
                  "{t.content}"
                </p>
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-6 border-t border-white/5">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden border-2 border-blue-500/20 grayscale group-hover:grayscale-0 transition-all duration-500">
                      <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 className="text-white font-black text-base">{t.name}</h4>
                      <p className="text-blue-500 text-[10px] font-black uppercase tracking-widest">{t.role}, {t.company}</p>
                    </div>
                  </div>
                  {t.link && (
                    <a 
                      href={t.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-[10px] font-black uppercase tracking-widest text-slate-300 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all"
                    >
                      <span>Visit Website</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Pricing Tiers Breakdown (Build + Monthly) */}
      <section className="py-20 md:py-32 px-4 bg-slate-950 border-y border-white/5 relative overflow-hidden">
        <div className="blob absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-blue-500 font-black text-[10px] md:text-sm uppercase tracking-[0.3em] mb-4">The Launch Strategy</h2>
            <h3 className="text-3xl md:text-6xl font-black text-white mb-6">Build Once. <span className="text-gradient-blue">Scale Forever.</span></h3>
            <p className="text-sm md:text-xl text-slate-400 max-w-3xl mx-auto font-medium">Our hybrid model ensures you own your high-end digital asset while we handle the technical maintenance, SEO, and content updates for a flat monthly fee.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {PRICING_TIERS.map((tier) => (
              <div key={tier.id} className={`glass-card p-8 md:p-12 rounded-[2.5rem] flex flex-col items-center text-center relative ${tier.recommended ? 'border-blue-500/50 bg-blue-600/5 scale-105 z-20 shadow-[0_40px_100px_rgba(37,99,235,0.2)]' : ''}`}>
                {tier.recommended && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest whitespace-nowrap">FOUNDERS FAVORITE</div>
                )}
                
                <h4 className="text-lg md:text-xl font-black text-white mb-4">{tier.name}</h4>
                
                <div className="mb-8 w-full">
                  <div className="p-6 bg-white/5 rounded-2xl border border-white/10 mb-4">
                    <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">ONE-TIME BUILD</div>
                    <div className="text-3xl md:text-4xl font-black text-white">{tier.setupPrice}</div>
                  </div>
                  <div className="p-6 bg-blue-600/10 rounded-2xl border border-blue-500/20">
                    <div className="text-[10px] font-black text-blue-400 uppercase tracking-widest mb-1">MONTHLY MANAGEMENT</div>
                    <div className="text-3xl md:text-4xl font-black text-blue-400">{tier.monthlyPrice}</div>
                  </div>
                </div>

                <ul className="space-y-4 mb-10 text-slate-400 text-xs md:text-sm font-medium w-full flex-grow">
                  {tier.features.map((f, i) => (
                    <li key={i} className="flex items-center justify-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <Link to="/contact" className={`w-full py-4 md:py-5 rounded-xl font-black uppercase tracking-widest text-xs transition-all ${tier.recommended ? 'bg-blue-600 text-white shadow-xl shadow-blue-600/40 hover:bg-blue-500' : 'bg-white/5 text-white border border-white/10 hover:bg-white/10'}`}>
                  Get Started
                </Link>
              </div>
            ))}
          </div>

          {/* Quick Value Points */}
          <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
             {[
               { icon: <Server className="w-5 h-5" />, title: 'Hosting Included', text: 'Local Cloud infrastructure.' },
               { icon: <Mail className="w-5 h-5" />, title: 'Email Setup', text: 'Professional domain-based mail.' },
               { icon: <Search className="w-5 h-5" />, title: 'SEO Optimized', text: 'Rank for local Newcastle keywords.' },
               { icon: <Sparkles className="w-5 h-5" />, title: 'Content Updates', text: 'Hassle-free content management.' }
             ].map((val, i) => (
               <div key={i} className="text-center group">
                 <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-blue-500 mx-auto mb-4 group-hover:bg-blue-600 group-hover:text-white transition-all">
                   {val.icon}
                 </div>
                 <h5 className="text-white font-black text-xs md:text-sm mb-1">{val.title}</h5>
                 <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">{val.text}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* 5. Contact Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
           <div className="relative rounded-[2rem] md:rounded-[4rem] bg-gradient-to-br from-blue-600 to-indigo-800 p-8 md:p-24 overflow-hidden text-center lg:text-left shadow-[0_20px_100px_rgba(37,99,235,0.2)]">
              <div className="relative z-10 grid lg:grid-cols-2 gap-10 items-center">
                 <div>
                    <h2 className="text-white font-black text-[10px] md:text-sm uppercase tracking-[0.3em] mb-4">Partner With Us</h2>
                    <h3 className="text-3xl md:text-7xl font-black text-white leading-tight mb-6">Start Your <br /> <span className="opacity-50 italic">Digital Legacy</span></h3>
                    <p className="text-sm md:text-xl text-blue-100 mb-8 max-w-xl font-medium">Be among our inaugural clients. Let's build the flagship project that defines your future.</p>
                    <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                       <Link to="/contact" className="w-full sm:w-auto px-10 py-4 bg-white text-blue-600 rounded-xl font-black text-sm md:text-lg hover:bg-blue-50 transition-colors">Begin Discovery Call</Link>
                       <div className="flex items-center justify-center space-x-3 text-white/80 font-bold py-2 text-xs md:text-base"><Mail className="w-4 h-4 md:w-5 md:h-5" /><span>hello@ntombiicomm.co.za</span></div>
                    </div>
                 </div>
                 <div className="hidden lg:block glass p-10 rounded-[2.5rem] border-white/20">
                    <div className="space-y-8">
                       {[
                          { icon: <Smartphone className="w-6 h-6" />, title: 'Direct Access', desc: 'No gatekeepers. Speak to the founders.' },
                          { icon: <ShieldCheck className="w-6 h-6" />, title: 'Absolute Reliability', desc: 'We only succeed if you succeed.' }
                       ].map((item, i) => (
                          <div key={i} className="flex items-center space-x-6 text-left">
                             <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-white">{item.icon}</div>
                             <div><h4 className="font-black text-white">{item.title}</h4><p className="text-sm text-blue-100/60">{item.desc}</p></div>
                          </div>
                       ))}
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
