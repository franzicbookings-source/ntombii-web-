
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, Rocket, Globe, Clock, Shield, Share2 } from 'lucide-react';

const Footer: React.FC = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-ZA', { 
      hour12: false, 
      hour: '2-digit', 
      minute: '2-digit',
      timeZone: 'Africa/Johannesburg'
    });
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const socialLinks = [
    { name: 'FB', icon: <Facebook className="w-3.5 h-3.5" />, href: '#' },
    { name: 'TW', icon: <Twitter className="w-3.5 h-3.5" />, href: '#' },
    { name: 'IG', icon: <Instagram className="w-3.5 h-3.5" />, href: '#' },
    { name: 'LI', icon: <Linkedin className="w-3.5 h-3.5" />, href: '#' },
  ];

  return (
    <footer className="relative bg-[#020617] pt-12 pb-8 overflow-hidden border-t border-white/5">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[100px] -mr-32 -mt-32 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-12">
          
          {/* Brand Brief */}
          <div className="lg:col-span-3 space-y-4">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="p-1.5 bg-blue-600 rounded-lg group-hover:scale-110 transition-transform">
                <Rocket className="text-white w-4 h-4" />
              </div>
              <span className="text-lg font-black text-white tracking-tighter uppercase">
                NTOMBII<span className="text-blue-500">TECH</span>
              </span>
            </Link>
            <p className="text-slate-500 text-xs font-medium leading-relaxed max-w-[240px]">
              Crafting high-performance digital flagship sites from Newcastle, KZN. Speed is our legacy.
            </p>
            <div className="flex items-center space-x-2">
              {socialLinks.map((s, i) => (
                <a key={i} href={s.href} className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/5 text-slate-400 hover:bg-blue-600 hover:text-white transition-all">
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Nav Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-[9px] font-black text-blue-500 uppercase tracking-widest">Exploration</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-slate-400 text-xs font-bold hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Contact */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-[9px] font-black text-blue-500 uppercase tracking-widest">Direct Connect</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a href="mailto:info@ntombiitech.co.za" className="group">
                <span className="block text-[8px] font-black text-slate-600 uppercase mb-0.5">Mail</span>
                <span className="text-slate-300 font-bold text-xs group-hover:text-white transition-colors">info@ntombiitech.co.za</span>
              </a>
              <a href="tel:0812360230" className="group">
                <span className="block text-[8px] font-black text-slate-600 uppercase mb-0.5">Support</span>
                <span className="text-slate-300 font-bold text-xs group-hover:text-white transition-colors">081 236 0230</span>
              </a>
              <div className="sm:col-span-2 flex items-center space-x-2 text-slate-500">
                <Share2 className="w-3 h-3" />
                <span className="text-[9px] font-black uppercase tracking-widest">Newcastle, KZN • South Africa</span>
              </div>
            </div>
          </div>

          {/* Meta Data - Compact Bento */}
          <div className="lg:col-span-3">
            <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-4 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Clock className="w-3 h-3 text-blue-500" />
                  <span className="text-[9px] font-black text-slate-500 uppercase">Local Time</span>
                </div>
                <span className="text-white font-mono text-[10px] font-bold">{formatTime(time)}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Globe className="w-3 h-3 text-emerald-500" />
                  <span className="text-[9px] font-black text-slate-500 uppercase">Status</span>
                </div>
                <span className="text-emerald-500 font-mono text-[10px] font-bold uppercase">Online</span>
              </div>
              <div className="flex items-center justify-between pt-2 border-t border-white/5">
                <div className="flex items-center space-x-2">
                  <Shield className="w-3 h-3 text-blue-400" />
                  <span className="text-[9px] font-black text-slate-500 uppercase">Engine</span>
                </div>
                <span className="text-blue-400 font-mono text-[10px] font-bold uppercase">v2.0 Locked</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[9px] font-black text-slate-600 uppercase tracking-widest">
            © {new Date().getFullYear()} NTOMBII TECH STUDIO
          </p>
          <div className="flex items-center space-x-6">
            <Link to="/privacy" className="text-[9px] font-black text-slate-500 uppercase tracking-widest hover:text-white">Privacy</Link>
            <Link to="/terms" className="text-[9px] font-black text-slate-500 uppercase tracking-widest hover:text-white">Terms</Link>
          </div>
          <div className="flex items-center space-x-2 bg-white/5 px-3 py-1 rounded-full border border-white/5">
            <div className="w-1 h-1 rounded-full bg-emerald-500"></div>
            <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest">Est. 2024</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
