
import React from 'react';
import { CORE_SERVICES, ADDITIONAL_SERVICES, ICON_MAP, PRICING_TIERS } from '../constants';
import { CheckCircle, ArrowRight, Zap, Sparkles, Server, Mail, Search, Upload, PenTool, MessageSquarePlus, XCircle, TrendingUp, ShieldCheck, BarChart4, ChevronRight, RefreshCcw } from 'lucide-react';
/* Re-applying Link import to ensure it's picked up correctly */
import { Link } from 'react-router-dom';
import PerformanceAuditor from '../components/PerformanceAuditor';
import FAQSection from '../components/FAQSection';

const Services: React.FC = () => {
  return (
    <div className="pt-24 md:pt-32 pb-20 md:pb-24 text-slate-200">
      {/* 1. Header & Vision */}
      <section className="container mx-auto px-6 mb-16 md:mb-28 text-center">
        <h2 className="text-blue-500 font-black text-xs md:text-sm uppercase tracking-[0.3em] mb-4">Service Philosophy</h2>
        <h1 className="text-4xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-none">
          Managed <span className="text-gradient">Craft</span>.
        </h1>
        <p className="text-base md:text-2xl text-slate-400 max-w-4xl mx-auto leading-relaxed font-medium">
          We build high-performance digital engines and then we keep them tuned. Our hybrid approach combines elite engineering with hands-free monthly management.
        </p>
      </section>

      {/* 2. Core Build Offerings */}
      <section className="container mx-auto max-w-6xl px-4 md:px-6 mb-24 md:mb-40">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          {CORE_SERVICES.map(service => (
            <div key={service.id} className="glass-card flex flex-col rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden group relative">
              <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:scale-125 transition-transform duration-1000">
                {/* Fixed size error by casting to any */}
                {React.cloneElement(ICON_MAP[service.icon] as any, { size: 160 })}
              </div>
              <div className="h-56 bg-gradient-to-br from-blue-600/10 to-transparent flex items-center justify-center p-12 relative overflow-hidden">
                <div className="text-blue-500 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-700">
                   {/* Fixed size and strokeWidth error by casting to any */}
                   {React.cloneElement(ICON_MAP[service.icon] as any, { size: 64, strokeWidth: 1.2 })}
                </div>
              </div>
              <div className="p-8 md:p-14 relative z-10 flex-grow flex flex-col">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                  <h3 className="text-2xl md:text-4xl font-black text-white">{service.title}</h3>
                  <div className="px-4 py-2 bg-blue-600/10 border border-blue-500/20 rounded-xl text-[10px] font-black text-blue-400 uppercase tracking-widest">
                    Build from {service.startingPrice}
                  </div>
                </div>
                <p className="text-sm md:text-lg text-slate-400 mb-10 leading-relaxed font-medium">
                  {service.description}
                </p>
                <div className="mt-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {['2025 Architecture', 'Native Performance', 'Zero-Baggage Build', 'SA Cloud Ready'].map(item => (
                    <div key={item} className="flex items-center text-[10px] md:text-xs text-slate-500 font-black uppercase tracking-widest">
                      <Zap className="w-3 h-3 text-blue-500 mr-3" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. AI Performance Auditor (The Hook) */}
      <section className="container mx-auto max-w-6xl px-4 md:px-6 mb-24 md:mb-40">
        <div className="text-center mb-16">
           <h2 className="text-blue-500 font-black text-[10px] md:text-sm uppercase tracking-[0.3em] mb-4">Deep Diagnostics</h2>
           <h3 className="text-3xl md:text-6xl font-black text-white mb-6">Quantify Your <span className="text-gradient">Legacy Debt</span></h3>
           <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-lg font-medium">Every second of lag costs your business money. Use our AI tool to find out your real performance score.</p>
        </div>
        <PerformanceAuditor />
      </section>

      {/* 4. Comparison Section (The Convincer) */}
      <section className="py-24 md:py-40 bg-white/[0.01] border-y border-white/5">
        <div className="container mx-auto max-w-6xl px-4 md:px-6">
          <div className="text-center mb-20">
             <h2 className="text-blue-500 font-black text-xs md:text-sm uppercase tracking-[0.3em] mb-4">Competitive Edge</h2>
             <h3 className="text-3xl md:text-7xl font-black text-white mb-6">Old Agencies vs. <span className="text-gradient-blue">NTOMBII</span></h3>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
             <div className="glass-card p-8 md:p-14 rounded-[3rem] border-red-500/10 bg-red-500/[0.02]">
                <div className="flex items-center space-x-4 mb-10">
                   <div className="w-12 h-12 bg-red-500/10 text-red-500 rounded-2xl flex items-center justify-center">
                      <XCircle className="w-6 h-6" />
                   </div>
                   <h4 className="text-xl md:text-3xl font-black text-white">Traditional Model</h4>
                </div>
                <ul className="space-y-6">
                   {[
                      'Outdated templates (Wordpress/Elementor)',
                      'Overseas servers (high SA latency)',
                      'Pass-off to junior/intern staff',
                      'Hidden "Set-up" fees & slow timelines',
                      'Minimal post-launch technical care'
                   ].map((item, i) => (
                      <li key={i} className="flex items-start space-x-4 text-slate-500 font-medium">
                         <span className="w-1.5 h-1.5 rounded-full bg-red-500/30 mt-2 shrink-0"></span>
                         <span className="text-sm md:text-base">{item}</span>
                      </li>
                   ))}
                </ul>
             </div>

             <div className="glass-card p-8 md:p-14 rounded-[3rem] border-blue-500/30 bg-blue-600/[0.05] relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 text-blue-500/10">
                   <TrendingUp size={120} />
                </div>
                <div className="flex items-center space-x-4 mb-10">
                   <div className="w-12 h-12 bg-blue-500/20 text-blue-400 rounded-2xl flex items-center justify-center">
                      <TrendingUp className="w-6 h-6" />
                   </div>
                   <h4 className="text-xl md:text-3xl font-black text-white">The NTOMBII Method</h4>
                </div>
                <ul className="space-y-6">
                   {[
                      'Native React/Next.js (Zero bloat)',
                      'Local Edge Cloud nodes (KZN/GP)',
                      'Direct 1-on-1 Founder collaboration',
                      'Agile build speed (Days, not months)',
                      'Hands-free monthly maintenance & SEO'
                   ].map((item, i) => (
                      <li key={i} className="flex items-start space-x-4 text-slate-200 font-bold">
                         <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5 shrink-0" />
                         <span className="text-sm md:text-base">{item}</span>
                      </li>
                   ))}
                </ul>
             </div>
          </div>
        </div>
      </section>

      {/* 5. ROI & Maintenance Breakdown */}
      <section className="py-24 md:py-40">
        <div className="container mx-auto max-w-6xl px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
             <div>
                <h2 className="text-blue-500 font-black text-xs md:text-sm uppercase tracking-[0.3em] mb-4">Total Ownership</h2>
                <h3 className="text-3xl md:text-6xl font-black text-white mb-8 leading-tight">Beyond the <br /><span className="text-gradient">Final Pixel</span>.</h3>
                <p className="text-sm md:text-xl text-slate-400 font-medium leading-relaxed mb-10">
                   Launching is only 10% of the battle. Our Managed Services ensure your platform remains an asset, not a liability.
                </p>
                
                <div className="space-y-8">
                   {[
                      { icon: <BarChart4 />, title: 'Monthly Growth Tracking', text: 'We track every visitor and optimize the funnel continuously.' },
                      { icon: <ShieldCheck />, title: 'Security Hardening', text: 'Continuous patches and monitoring against local threats.' },
                      { icon: <RefreshCcw />, title: 'Dynamic Content', text: 'You send us the brief; we handle the formatting and posting.' }
                   ].map((item, i) => (
                      <div key={i} className="flex items-start space-x-6">
                         <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-blue-400 shrink-0">
                            {/* Fixed size error by casting to any */}
                            {React.cloneElement(item.icon as any, { size: 20 })}
                         </div>
                         <div>
                            <h4 className="text-lg font-black text-white mb-1">{item.title}</h4>
                            <p className="text-sm text-slate-500 font-medium">{item.text}</p>
                         </div>
                      </div>
                   ))}
                </div>
             </div>

             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {ADDITIONAL_SERVICES.slice(0, 4).map((service, i) => (
                  <div key={i} className="glass-card p-8 rounded-[2.5rem] border-white/5 flex flex-col items-center text-center">
                    <div className="w-14 h-14 bg-blue-600/10 text-blue-500 rounded-2xl flex items-center justify-center mb-6">
                      {ICON_MAP[service.icon]}
                    </div>
                    <h5 className="text-lg font-black text-white mb-3">{service.title}</h5>
                    <p className="text-xs text-slate-500 font-medium leading-relaxed">{service.description}</p>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* 6. FAQ Section (The Closer) */}
      <section className="py-24 md:py-40 bg-white/[0.01]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-blue-500 font-black text-xs md:text-sm uppercase tracking-[0.3em] mb-4">Common Concerns</h2>
            <h3 className="text-3xl md:text-6xl font-black text-white">Still Have <span className="text-gradient">Questions?</span></h3>
          </div>
          <FAQSection />
        </div>
      </section>

      {/* 7. Pricing & CTAs */}
      <section className="py-24 md:py-40 bg-slate-950 border-t border-white/5">
        <div className="container mx-auto max-w-6xl px-4 md:px-6">
          <div className="text-center mb-20">
            <h3 className="text-3xl md:text-7xl font-black text-white mb-6">Standard <span className="text-gradient">Piers</span></h3>
            <p className="text-slate-400 font-medium">Transparent investment structures for the KZN market.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            {PRICING_TIERS.map((tier) => (
              <div key={tier.id} className={`relative glass-card p-8 md:p-14 rounded-[3rem] flex flex-col ${tier.recommended ? 'border-blue-500/50 bg-blue-600/5 shadow-[0_0_100px_rgba(37,99,235,0.1)]' : ''}`}>
                {tier.recommended && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest">Recommended</div>
                )}
                <div className="text-center mb-12">
                   <h4 className="text-2xl font-black text-white mb-2">{tier.name}</h4>
                   <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest">{tier.description}</p>
                </div>
                <div className="space-y-6 mb-12">
                   <div className="text-center">
                      <div className="text-[10px] font-black text-slate-600 uppercase tracking-widest mb-1">Build Cost</div>
                      <div className="text-4xl font-black text-white">{tier.setupPrice}</div>
                   </div>
                   <div className="text-center">
                      <div className="text-[10px] font-black text-blue-400 uppercase tracking-widest mb-1">Monthly Support</div>
                      <div className="text-4xl font-black text-blue-400">{tier.monthlyPrice}</div>
                   </div>
                </div>
                <ul className="space-y-4 mb-12 flex-grow">
                   {tier.features.map((f, i) => (
                      <li key={i} className="flex items-center space-x-3 text-sm font-medium text-slate-400">
                         <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                         <span>{f}</span>
                      </li>
                   ))}
                </ul>
                <Link to="/contact" className={`w-full py-5 rounded-2xl text-center font-black text-xs uppercase tracking-widest transition-all ${tier.recommended ? 'bg-blue-600 text-white hover:bg-blue-500 shadow-xl' : 'bg-white/5 text-white hover:bg-white/10'}`}>
                   Deploy {tier.name}
                </Link>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto">
             <div className="glass-card p-8 md:p-16 rounded-[4rem] flex flex-col md:flex-row items-center justify-between gap-12 bg-gradient-to-br from-blue-600/10 to-transparent border-white/10 group">
                <div className="text-center md:text-left">
                   <h4 className="text-3xl md:text-5xl font-black text-white mb-4">Enterprise?</h4>
                   <p className="text-slate-400 text-sm md:text-lg font-medium max-w-md">For native apps, internal ERPs, or complex marketplaces, we offer dedicated discovery sprints.</p>
                </div>
                <Link to="/contact" className="w-full md:w-auto px-10 py-6 bg-white text-slate-950 rounded-2xl font-black text-base transition-all hover:scale-105 active:scale-95 flex items-center justify-center shadow-2xl">
                   Start Discovery <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
