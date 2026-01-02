
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, ArrowRight, Sparkles, CheckCircle, Globe, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    service: 'Essential Build',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Mock submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      setFormState({ name: '', email: '', service: 'Essential Build', message: '' });
    }, 1500);
  };

  const contactItems = [
    { icon: <Mail className="w-5 h-5" />, label: "Email Us", value: "hello@ntombiicomm.co.za", link: "mailto:hello@ntombiicomm.co.za" },
    { icon: <Phone className="w-5 h-5" />, label: "Phone", value: "+27 (0) 11 463 0000", link: "tel:+27114630000" },
    { icon: <MapPin className="w-5 h-5" />, label: "Studio", value: "Newcastle, KZN, South Africa", link: "#" }
  ];

  return (
    <div className="pt-28 md:pt-40 pb-20 px-4 min-h-screen">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Info */}
          <div className="space-y-12 md:space-y-20">
            <div>
              <div className="inline-flex items-center space-x-2 px-3 py-1 bg-blue-600/10 border border-blue-500/20 rounded-full mb-6">
                <Sparkles className="w-3 h-3 text-blue-400" />
                <span className="text-[10px] font-black text-blue-400 uppercase tracking-widest">Available for Discovery</span>
              </div>
              <h1 className="text-4xl md:text-7xl font-black text-white mb-6 tracking-tighter leading-tight">
                Let's Build Your <br /><span className="text-gradient">Flagship.</span>
              </h1>
              <p className="text-sm md:text-xl text-slate-400 font-medium leading-relaxed max-w-md">
                We're currently selecting projects for our Q3/Q4 2024 intake. Book a discovery call to lock in founding-year rates.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {contactItems.map((item, i) => (
                <a 
                  key={i} 
                  href={item.link}
                  className="group block p-6 bg-white/[0.03] border border-white/5 rounded-[2rem] hover:border-blue-500/30 transition-all"
                >
                  <div className="w-10 h-10 bg-blue-600/10 text-blue-500 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    {item.icon}
                  </div>
                  <span className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">{item.label}</span>
                  <span className="block text-sm md:text-base font-bold text-white group-hover:text-blue-400 transition-colors">{item.value}</span>
                </a>
              ))}
            </div>

            <div className="flex items-center space-x-5">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-xl bg-white/5 text-slate-300 hover:bg-blue-600 hover:text-white transition-all">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="relative">
            <div className="blob absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-600/20 rounded-full blur-[100px] pointer-events-none"></div>
            
            <div className="glass-card relative z-10 p-8 md:p-14 rounded-[3rem] border border-white/10 shadow-2xl">
              {isSent ? (
                <div className="text-center py-12 md:py-20 animate-in zoom-in-95 duration-500">
                  <div className="w-20 h-20 bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-white mb-4">Brief Received.</h3>
                  <p className="text-slate-400 text-sm md:text-lg font-medium mb-10 leading-relaxed">
                    Our strategist will review your requirements and reach out within 24 business hours.
                  </p>
                  <button 
                    onClick={() => setIsSent(false)}
                    className="px-10 py-4 bg-white/5 border border-white/10 text-white rounded-xl font-black text-xs uppercase tracking-widest hover:bg-white/10 transition-all"
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
                  <h3 className="text-xl md:text-2xl font-black text-white mb-8">Project Brief</h3>
                  
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Full Name</label>
                    <input 
                      required
                      type="text" 
                      value={formState.name}
                      onChange={(e) => setFormState({...formState, name: e.target.value})}
                      placeholder="e.g. Sipho Ndlovu"
                      className="w-full bg-slate-900/50 border border-white/10 rounded-2xl px-6 py-4 md:py-5 text-white font-bold outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Email Address</label>
                    <input 
                      required
                      type="email" 
                      value={formState.email}
                      onChange={(e) => setFormState({...formState, email: e.target.value})}
                      placeholder="hello@yourbusiness.co.za"
                      className="w-full bg-slate-900/50 border border-white/10 rounded-2xl px-6 py-4 md:py-5 text-white font-bold outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Service Interest</label>
                    <select 
                      value={formState.service}
                      onChange={(e) => setFormState({...formState, service: e.target.value})}
                      className="w-full bg-slate-900/50 border border-white/10 rounded-2xl px-6 py-4 md:py-5 text-white font-bold outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all appearance-none cursor-pointer"
                    >
                      <option className="bg-slate-900">Essential Build (Starter)</option>
                      <option className="bg-slate-900">Professional (Growth)</option>
                      <option className="bg-slate-900">Custom Studio (Enterprise)</option>
                      <option className="bg-slate-900">Native Mobile App</option>
                      <option className="bg-slate-900">Local SEO / Managed Services</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Message / Requirements</label>
                    <textarea 
                      required
                      rows={4}
                      value={formState.message}
                      onChange={(e) => setFormState({...formState, message: e.target.value})}
                      placeholder="Tell us about your project vision..."
                      className="w-full bg-slate-900/50 border border-white/10 rounded-2xl px-6 py-4 md:py-5 text-white font-bold outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all resize-none"
                    ></textarea>
                  </div>

                  <button 
                    disabled={isSubmitting}
                    className="w-full py-5 bg-blue-600 text-white rounded-2xl font-black text-xs md:text-sm uppercase tracking-widest hover:bg-blue-500 hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-blue-600/30 flex items-center justify-center space-x-4 disabled:opacity-50"
                  >
                    <span>{isSubmitting ? 'Processing...' : 'Deploy Request'}</span>
                    <Send className={`w-4 h-4 ${isSubmitting ? 'animate-pulse' : ''}`} />
                  </button>
                  
                  <p className="text-[9px] text-slate-600 font-black uppercase tracking-widest text-center mt-6">
                    By submitting, you agree to our 24h response standard.
                  </p>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
