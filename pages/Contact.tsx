
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, CheckCircle2, PartyPopper } from 'lucide-react';
import LiveConsultant from '../components/LiveConsultant';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <div className="pt-28 pb-20 px-4">
      <section className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Info Side */}
          <div className="space-y-8 md:space-y-12">
            <div className="text-center lg:text-left">
              <h1 className="text-3xl md:text-6xl font-black text-white mb-6 leading-tight tracking-tighter">
                Let's Start a <span className="text-gradient">Conversation</span>.
              </h1>
              <p className="text-base md:text-xl text-slate-400 leading-relaxed font-medium">
                Whether you have a specific project in mind or just want to explore what's possible, we're here to help.
              </p>
            </div>

            {/* Live AI Consultant Integration */}
            <LiveConsultant />

            <div className="space-y-6 md:space-y-8 max-w-md mx-auto lg:mx-0">
               <div className="flex items-start space-x-4 md:space-x-6 text-left">
                  <div className="w-10 h-10 md:w-14 md:h-14 bg-blue-600/10 text-blue-400 rounded-xl md:rounded-2xl flex items-center justify-center shrink-0">
                     <Mail className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div>
                     <h4 className="font-bold text-white text-base md:text-lg">Email Us</h4>
                     <p className="text-slate-500 text-sm md:text-base">hello@ntombiicomm.co.za</p>
                  </div>
               </div>
               
               <div className="flex items-start space-x-4 md:space-x-6 text-left">
                  <div className="w-10 h-10 md:w-14 md:h-14 bg-blue-600/10 text-blue-400 rounded-xl md:rounded-2xl flex items-center justify-center shrink-0">
                     <Clock className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div>
                     <h4 className="font-bold text-white text-base md:text-lg">Rapid Response</h4>
                     <p className="text-slate-500 text-sm md:text-base">We typically respond within 24 hours.</p>
                  </div>
               </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="glass-card p-6 md:p-12 rounded-[2rem] md:rounded-[2.5rem] border border-white/10 shadow-2xl min-h-[500px] flex flex-col justify-center">
            {!submitted ? (
              <>
                <h3 className="text-2xl md:text-3xl font-black text-white mb-8">Get a Free Quote</h3>
                <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                    <div>
                      <label className="block text-[10px] md:text-xs font-black text-slate-500 uppercase tracking-widest mb-2">Full Name</label>
                      <input required type="text" className="w-full px-4 py-3 md:px-5 md:py-4 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:border-blue-500 outline-none transition-all" placeholder="John Doe" />
                    </div>
                    <div>
                      <label className="block text-[10px] md:text-xs font-black text-slate-500 uppercase tracking-widest mb-2">Email Address</label>
                      <input required type="email" className="w-full px-4 py-3 md:px-5 md:py-4 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:border-blue-500 outline-none transition-all" placeholder="john@example.com" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] md:text-xs font-black text-slate-500 uppercase tracking-widest mb-2">Subject</label>
                    <select className="w-full px-4 py-3 md:px-5 md:py-4 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:border-blue-500 outline-none transition-all appearance-none">
                       <option className="bg-slate-900">General Inquiry</option>
                       <option className="bg-slate-900">Web Design</option>
                       <option className="bg-slate-900">App Development</option>
                       <option className="bg-slate-900">SEO / Managed Support</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] md:text-xs font-black text-slate-500 uppercase tracking-widest mb-2">Message</label>
                    <textarea required rows={4} className="w-full px-4 py-3 md:px-5 md:py-4 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:border-blue-500 outline-none transition-all" placeholder="Tell us about your project..."></textarea>
                  </div>
                  <button 
                    disabled={loading}
                    className="w-full bg-blue-600 text-white font-black py-4 md:py-5 rounded-xl md:rounded-2xl flex items-center justify-center space-x-2 hover:bg-blue-700 transition-all shadow-lg text-sm md:text-base disabled:opacity-50"
                  >
                    {loading ? (
                      <span className="flex items-center"><span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full mr-2"></span> Dispatching...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center animate-in fade-in zoom-in-95 duration-500">
                 <div className="w-20 h-20 bg-blue-600/20 text-blue-500 rounded-full flex items-center justify-center mx-auto mb-8">
                    <CheckCircle2 className="w-10 h-10" />
                 </div>
                 <h3 className="text-3xl font-black text-white mb-4 flex items-center justify-center gap-3">
                    Success! <PartyPopper className="text-blue-500" />
                 </h3>
                 <p className="text-slate-400 font-medium mb-10 leading-relaxed">
                    Your inquiry has been successfully dispatched to our cluster. One of our founders will be in touch within 24 hours to schedule your discovery call.
                 </p>
                 <button 
                   onClick={() => setSubmitted(false)}
                   className="text-xs font-black text-blue-500 uppercase tracking-widest hover:text-blue-400 transition-colors"
                 >
                    Send another message
                 </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
