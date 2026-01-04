
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Layout, Smartphone, Wrench, Star, Quote, CheckCircle, Server, Mail, Search, Sparkles, ShieldCheck, ExternalLink, MessageSquareText } from 'lucide-react';
import { CORE_SERVICES, PROJECTS, PRICING_TIERS, TESTIMONIALS } from '../constants';
import TechStack from '../components/TechStack';
import LiveConsultant from '../components/LiveConsultant';
import SEO from '../components/SEO';
import ScrollReveal from '../components/ScrollReveal';

const Home: React.FC = () => {
  const slogans = ['FUTURE READY', 'KZN BUILT'];

  return (
    <div className="w-full">
      <SEO 
        title="NTOMBII TECH | Next-Gen Tech Studio Newcastle, KZN"
        description="Next-gen digital agency in Newcastle, South Africa. Specializing in high-performance web design, native apps, and custom AI tools for SMMEs."
        keywords="web design Newcastle KZN, digital agency South Africa, app development KZN, NTOMBII TECH, software development Newcastle"
      />

      {/* 1. Hero Section */}
      <section className="relative min-h-[90vh] md:min-h-[95vh] flex items-center justify-center pt-28 pb-12 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-[10%] left-[20%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] animate-drift opacity-40"></div>
          <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px] animate-drift opacity-30" style={{ animationDirection: 'reverse', animationDuration: '25s' }}></div>
        </div>

        <div className="blob absolute top-1/4 -left-20 w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-blue-600/20 rounded-full"></div>
        <div className="blob absolute bottom-1/4 -right-20 w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-purple-600/20 rounded-full"></div>

        <div className="container mx-auto max-w-6xl text-center relative z-10">
          <ScrollReveal animation="down">
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 md:px-4 md:py-2 bg-white/5 border border-white/10 rounded-full mb-6 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
              <span className="text-[9px] md:text-xs font-black uppercase tracking-widest text-blue-400">Next-Gen Studio • Newcastle, KZN</span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <h1 className="text-3xl sm:text-6xl md:text-8xl lg:text-9xl font-black text-white leading-[1.1] tracking-tighter mb-6 md:mb-8 px-2">
              Next-Gen Tech. <br />
              <span className="text-gradient">Founder Speed.</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <p className="text-sm sm:text-lg md:text-2xl text-slate-400 max-w-3xl mx-auto mb-10 md:mb-12 leading-relaxed font-medium px-4">
              We build high-performance websites and apps with absolute craft and founder-led dedication.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={600}>
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
          </ScrollReveal>

          <div className="mt-16 md:mt-24 marquee-wrapper opacity-50">
            <div className="marquee-content">
              {[...slogans, ...slogans, ...slogans, ...slogans].map((text, i) => (
                <div key={`slogan-1-${i}`} className="text-lg md:text-3xl font-black tracking-tighter italic text-slate-400">
                  {text}
                </div>
              ))}
              {[...slogans, ...slogans, ...slogans, ...slogans].map((text, i) => (
                <div key={`slogan-2-${i}`} className="text-lg md:text-3xl font-black tracking-tighter italic text-slate-400">
                  {text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <TechStack />

      <section className="py-20 md:py-32 px-4 bg-white/[0.01]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <ScrollReveal>
              <h2 className="text-blue-500 font-black text-[10px] md:text-sm uppercase tracking-[0.3em] mb-3">Capabilities</h2>
              <h3 className="text-3xl md:text-6xl font-black text-white leading-tight mb-6">Built To <span className="text-gradient-blue">Perform</span>.</h3>
              <p className="text-sm md:text-xl text-slate-400 max-w-2xl mx-auto font-medium">Professional engineering starting at South Africa's most competitive entry rates.</p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {CORE_SERVICES.map((s, idx) => (
              <ScrollReveal key={s.id} delay={idx * 100}>
                <div className="glass-card p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] relative group overflow-hidden h-full flex flex-col items-center sm:items-start">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-blue-600/10 transition-colors"></div>
                  
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-600/10 text-blue-400 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/5 transition-transform group-hover:scale-110 duration-500">
                    {s.id === 'web-design' && <Globe className="w-6 h-6 md:w-8 md:h-8" />}
                    {s.id === 'web-apps' && <Layout className="w-6 h-6 md:w-8 md:h-8" />}
                    {s.id === 'mobile-apps' && <Smartphone className="w-6 h-6 md:w-8 md:h-8" />}
                    {s.id === 'custom-tools' && <Wrench className="w-6 h-6 md:w-8 md:h-8" />}
                    {s.id === 'automation' && <CheckCircle className="w-6 h-6 md:w-8 md:h-8" />}
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
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4 relative overflow-hidden bg-slate-900/40">
        <div className="container mx-auto max-w-6xl">
           <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
             <ScrollReveal animation="right">
               <div className="text-center lg:text-left">
                  <div className="inline-flex items-center space-x-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-4">
                    <Sparkles className="w-3 h-3 text-emerald-400" />
                    <span className="text-[10px] font-black text-emerald-400 uppercase tracking-widest">Interactive Discovery</span>
                  </div>
                  <h3 className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight tracking-tight">Talk to our <span className="text-gradient">AI Founder</span></h3>
                  <p className="text-sm md:text-lg text-slate-400 font-medium leading-relaxed mb-6 max-w-lg mx-auto lg:mx-0">
                    Discuss your project in real-time with an AI clone of our founder, Sthembile. Get instant insights on strategy and custom packages.
                  </p>
                  <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                    <div className="flex items-center space-x-2 text-[10px] font-black text-slate-500 uppercase tracking-widest">
                      <MessageSquareText className="w-3.5 h-3.5 text-blue-500" />
                      <span>Instant Response</span>
                    </div>
                    <div className="flex items-center space-x-2 text-[10px] font-black text-slate-500 uppercase tracking-widest">
                      <Globe className="w-3.5 h-3.5 text-blue-500" />
                      <span>EN / ZU Support</span>
                    </div>
                  </div>
               </div>
             </ScrollReveal>
             <ScrollReveal animation="scale" delay={300} className="w-full max-w-sm mx-auto lg:mr-0">
                <LiveConsultant />
             </ScrollReveal>
           </div>
        </div>
      </section>

      <section className="py-20 md:py-32 px-4 relative overflow-hidden">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <ScrollReveal>
              <h2 className="text-blue-500 font-black text-[10px] md:text-sm uppercase tracking-[0.3em] mb-4">Social Proof</h2>
              <h3 className="text-3xl md:text-6xl font-black text-white mb-6">Voices of <span className="text-gradient">Partners</span>.</h3>
              <p className="text-sm md:text-xl text-slate-400 max-w-2xl mx-auto font-medium">Hear from the founders who trusted us with their vision.</p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
            {TESTIMONIALS.map((t, idx) => (
              <ScrollReveal key={t.id} animation={idx % 2 === 0 ? 'right' : 'left'} delay={200}>
                <div className="glass-card p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] relative group border border-white/5 hover:border-blue-500/30 transition-all duration-500 flex flex-col h-full overflow-hidden">
                  <div className="absolute -top-4 -right-4 md:top-8 md:right-8 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity">
                    <Quote className="w-24 h-24 md:w-32 md:h-32 text-white" />
                  </div>
                  
                  <div className="flex items-center space-x-1 mb-6 relative z-10">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 md:w-4 md:h-4 fill-blue-500 text-blue-500 drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
                    ))}
                  </div>

                  <p className="text-base md:text-lg text-slate-200 leading-relaxed font-medium mb-8 italic flex-grow relative z-10">
                    "{t.content}"
                  </p>

                  <div className="flex items-center justify-between pt-6 border-t border-white/5 relative z-10">
                    <div className="flex items-center space-x-3 md:space-x-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden border border-blue-500/20 grayscale group-hover:grayscale-0 transition-all duration-500 shrink-0">
                        <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="min-w-0">
                        <h4 className="text-white font-black text-sm md:text-base truncate">{t.name}</h4>
                        <p className="text-blue-500 text-[9px] md:text-[10px] font-black uppercase tracking-widest truncate">{t.role}, {t.company}</p>
                      </div>
                    </div>
                    
                    {t.link && (
                      <a 
                        href={t.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 md:px-4 md:py-2 bg-white/5 border border-white/10 rounded-xl text-slate-300 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all"
                        aria-label="Visit Partner Website"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span className="hidden md:inline ml-2 text-[10px] font-black uppercase tracking-widest">Visit</span>
                      </a>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 px-4 bg-slate-950 border-y border-white/5 relative overflow-hidden">
        <div className="blob absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16 md:mb-24">
            <ScrollReveal>
              <h2 className="text-blue-500 font-black text-[10px] md:text-sm uppercase tracking-[0.3em] mb-4">The Launch Strategy</h2>
              <h3 className="text-3xl md:text-6xl font-black text-white mb-6">Build Once. <span className="text-gradient-blue">Scale Forever.</span></h3>
              <p className="text-sm md:text-xl text-slate-400 max-w-3xl mx-auto font-medium">Our hybrid model ensures you own your high-end digital asset while we handle the technical maintenance, SEO, and content updates for a flat monthly fee.</p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {PRICING_TIERS.map((tier, idx) => (
              <ScrollReveal key={tier.id} delay={idx * 150} animation="up" className="h-full">
                <div className={`glass-card p-8 md:p-12 rounded-[2.5rem] flex flex-col items-center text-center relative h-full ${tier.recommended ? 'border-blue-500/50 bg-blue-600/5 scale-105 z-20 shadow-[0_40px_100px_rgba(37,99,235,0.2)]' : ''}`}>
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
                      <li key={i} className="flex items-center justify-center space-x-3 text-left">
                        <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <Link to="/contact" className={`w-full py-4 md:py-5 rounded-xl font-black uppercase tracking-widest text-xs transition-all ${tier.recommended ? 'bg-blue-600 text-white shadow-xl shadow-blue-600/40 hover:bg-blue-500' : 'bg-white/5 text-white border border-white/10 hover:bg-white/10'}`}>
                    Get Started
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
             {[
               { icon: <Server className="w-5 h-5" />, title: 'Hosting Included', text: 'Local Cloud infrastructure.' },
               { icon: <Mail className="w-5 h-5" />, title: 'Email Setup', text: 'Professional domain-based mail.' },
               { icon: <Search className="w-5 h-5" />, title: 'SEO Optimized', text: 'Rank for local Newcastle keywords.' },
               { icon: <Sparkles className="w-5 h-5" />, title: 'Content Updates', text: 'Hassle-free content management.' }
             ].map((val, i) => (
               <ScrollReveal key={i} delay={i * 100}>
                 <div className="text-center group">
                   <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-blue-500 mx-auto mb-4 group-hover:bg-blue-600 group-hover:text-white transition-all">
                     {val.icon}
                   </div>
                   <h5 className="text-white font-black text-xs md:text-sm mb-1">{val.title}</h5>
                   <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">{val.text}</p>
                 </div>
               </ScrollReveal>
             ))}
          </div>
        </div>
      </section>

      {/* 5. Contact Section - Redesigned to be more mobile responsive and compact */}
      <section className="py-12 md:py-24 px-4">
        <div className="container mx-auto max-w-5xl">
           <ScrollReveal animation="scale">
             <div className="relative rounded-[2.5rem] md:rounded-[3.5rem] bg-slate-900 border border-white/10 p-8 md:p-16 overflow-hidden shadow-2xl">
                {/* Background Decor */}
                <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-blue-600/20 via-transparent to-transparent opacity-50"></div>
                <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-indigo-600/10 rounded-full blur-[100px]"></div>
                
                <div className="relative z-10 grid lg:grid-cols-5 gap-12 items-center">
                   <div className="lg:col-span-3 text-center lg:text-left">
                      <div className="inline-flex items-center space-x-2 px-3 py-1 bg-blue-600/10 border border-blue-500/20 rounded-full mb-6">
                        <Sparkles className="w-3 h-3 text-blue-400" />
                        <span className="text-[10px] font-black text-blue-400 uppercase tracking-widest">Limited Intake 2024</span>
                      </div>
                      <h3 className="text-3xl md:text-5xl font-black text-white leading-tight mb-6 tracking-tight">
                        Start Your <span className="text-gradient">Digital Legacy.</span>
                      </h3>
                      <p className="text-sm md:text-lg text-slate-400 mb-10 max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed">
                        Join our inaugural client list. We build flagship projects that define futures. No baggage, just performance.
                      </p>
                      
                      <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                         <Link to="/contact" className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-blue-500 transition-all shadow-xl shadow-blue-600/20">
                           Begin Discovery
                         </Link>
                         <a href="mailto:info@ntombiitech.co.za" className="flex items-center space-x-3 text-slate-400 hover:text-white transition-colors py-2 group">
                            <Mail className="w-4 h-4 text-blue-500 group-hover:scale-110 transition-transform" />
                            <span className="font-bold text-sm tracking-tight">info@ntombiitech.co.za</span>
                         </a>
                      </div>
                   </div>
                   
                   <div className="lg:col-span-2">
                      <div className="grid grid-cols-1 gap-4">
                         {[
                            { icon: <Smartphone className="w-5 h-5" />, title: 'Direct Access', desc: 'Work with founders.' },
                            { icon: <ShieldCheck className="w-5 h-5" />, title: 'Zero Bloat', desc: 'Pure speed, no debt.' }
                         ].map((item, i) => (
                            <div key={i} className="p-6 bg-white/[0.03] border border-white/5 rounded-2xl flex items-center space-x-4">
                               <div className="w-10 h-10 bg-blue-600/10 rounded-xl flex items-center justify-center text-blue-400 shrink-0">{item.icon}</div>
                               <div>
                                  <h4 className="text-sm font-black text-white">{item.title}</h4>
                                  <p className="text-[11px] text-slate-500 font-medium">{item.desc}</p>
                               </div>
                            </div>
                         ))}
                      </div>
                   </div>
                </div>
             </div>
           </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Home;
