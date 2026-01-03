
import React from 'react';
import { Target, Lightbulb, Users, Award, Rocket, Zap, ShieldCheck, Heart, Code2, Flame, FastForward, CheckCircle2, RefreshCcw, Layers, Scale, Coffee, Sparkles } from 'lucide-react';
import NewcastleMap from '../components/NewcastleMap';
import LiveConsultant from '../components/LiveConsultant';

const About: React.FC = () => {
  return (
    <div className="pt-24 md:pt-32 pb-20 px-4 text-slate-200">
      {/* Story Section */}
      <section className="container mx-auto max-w-6xl mb-16 md:mb-32">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="text-center lg:text-left order-2 lg:order-1">
            <h2 className="text-blue-500 font-black text-[10px] md:text-sm uppercase tracking-[0.3em] mb-4">A New Era of Craft</h2>
            <h1 className="text-3xl md:text-6xl font-black text-white mb-6 leading-[1.1] tracking-tighter">
              New Generation. <br className="hidden md:block" /><span className="text-gradient">No Legacy Baggage.</span>
            </h1>
            <p className="text-sm md:text-xl text-slate-400 mb-6 leading-relaxed font-medium">
              We aren't an agency with 20 years of "old-school" history. We are a fresh generation of builders in Newcastle, KZN, who started NTOMBII COMM to escape the slow, bloated patterns of the past. 
            </p>
            <p className="text-xs md:text-lg text-slate-500 leading-relaxed font-medium">
              Our lack of a long history is our greatest asset. It means we don't have outdated templates, we don't use yesterday's tools, and we have a level of hunger that a legacy firm can't match.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-8 md:mt-12">
               <div className="p-5 md:p-8 glass-card rounded-2xl border-blue-500/20 text-center lg:text-left">
                  <p className="text-3xl md:text-5xl font-black text-white mb-1">2025</p>
                  <p className="text-[8px] md:text-[10px] font-black text-blue-500 uppercase tracking-widest">Native Tech Stack</p>
               </div>
               <div className="p-5 md:p-8 glass-card rounded-2xl border-purple-500/20 text-center lg:text-left">
                  <p className="text-3xl md:text-5xl font-black text-white mb-1">0</p>
                  <p className="text-[8px] md:text-[10px] font-black text-blue-500 uppercase tracking-widest">Legacy Debt</p>
               </div>
            </div>
          </div>
          <div className="relative group max-w-md mx-auto lg:max-w-none order-1 lg:order-2">
            <div className="relative z-10 rounded-[2.5rem] md:rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl aspect-square bg-slate-900">
              <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1000" alt="New Generation Builders" className="w-full h-full object-cover grayscale opacity-50 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 p-4 md:p-6 glass rounded-2xl border border-white/10 backdrop-blur-xl">
                <p className="text-white font-bold text-xs md:text-sm leading-relaxed italic">
                  "The old guard builds for the past. We build for the next ten minutes and the next ten years."
                </p>
              </div>
            </div>
            {/* Background decorative blob */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-600/20 rounded-full blur-[80px] -z-10"></div>
          </div>
        </div>
      </section>

      {/* Live AI Feature */}
      <section className="container mx-auto max-w-6xl mb-16 md:mb-32">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center bg-blue-600/5 rounded-[2.5rem] md:rounded-[4rem] p-6 md:p-16 border border-blue-500/10">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-blue-600/20 border border-blue-500/30 rounded-full mb-6">
              <Sparkles className="w-3 h-3 text-blue-400" />
              <span className="text-[10px] font-black text-blue-400 uppercase tracking-widest">Real-Time Interaction</span>
            </div>
            <h3 className="text-3xl md:text-5xl font-black text-white mb-6">Talk to our <span className="text-gradient">AI Founder</span></h3>
            <p className="text-slate-400 text-sm md:text-lg mb-8 font-medium leading-relaxed max-w-xl mx-auto lg:mx-0">
              Experience the future of digital consulting. Launch a voice session with our AI-cloned founder to discuss your project requirements or our studio philosophy.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 mb-8">
              {['Instant Strategy Response', 'Voice-to-Voice Clarity', 'Bilingual (EN/ZU) Support'].map((feat, i) => (
                <li key={i} className="flex items-center justify-center lg:justify-start space-x-3 text-slate-300 font-bold text-xs md:text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></div>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full max-w-md mx-auto">
            <LiveConsultant />
          </div>
        </div>
      </section>

      {/* Newcastle Tech Map Section */}
      <section className="container mx-auto max-w-6xl mb-16 md:mb-32">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-blue-500 font-black text-[10px] md:text-sm uppercase tracking-[0.3em] mb-4">Our Territory</h2>
          <h3 className="text-3xl md:text-5xl font-black text-white">Newcastle <span className="text-gradient">Footprint</span></h3>
        </div>
        <div className="px-0 md:px-0">
          <NewcastleMap />
        </div>
      </section>

      {/* Why Choose Us? */}
      <section className="container mx-auto max-w-6xl mb-16 md:mb-32">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-blue-500 font-black text-[10px] md:text-sm uppercase tracking-[0.3em] mb-4">The Comparison</h2>
          <h3 className="text-3xl md:text-6xl font-black text-white mb-6 leading-tight">Why Choose <span className="text-gradient-blue">Us?</span></h3>
          <p className="text-sm md:text-xl text-slate-400 max-w-2xl mx-auto font-medium">We've reimagined the agency model from the ground up to eliminate waste and maximize impact.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {[
            {
              icon: <Scale className="w-6 h-6" />,
              title: "Founder-Led vs. Junior Staff",
              desc: "At traditional agencies, your project is handed off to interns. With us, you work directly with the founders on every single pixel and line of code."
            },
            {
              icon: <RefreshCcw className="w-6 h-6" />,
              title: "Agile Speed vs. Red Tape",
              desc: "Traditional agencies drown in meetings and hierarchy. We operate with radical speed, pivoting and updating your project in real-time."
            },
            {
              icon: <Layers className="w-6 h-6" />,
              title: "2025 Stack vs. Legacy Debt",
              desc: "We build natively for today's web using ultra-performant tools. No outdated templates, no 'the way we've always done it'."
            },
          ].map((usp, i) => (
            <div key={i} className="glass-card p-8 md:p-10 rounded-[2rem] border border-white/5 hover:border-blue-500/30 transition-all flex flex-col group text-center lg:text-left">
              <div className="w-12 h-12 bg-blue-600/10 text-blue-500 rounded-xl flex items-center justify-center mb-6 shrink-0 mx-auto lg:mx-0 group-hover:bg-blue-600 group-hover:text-white transition-all">
                {usp.icon}
              </div>
              <h4 className="text-xl font-black text-white mb-4">{usp.title}</h4>
              <p className="text-slate-500 text-sm leading-relaxed font-medium">{usp.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
