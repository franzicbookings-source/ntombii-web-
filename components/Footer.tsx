
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Rocket, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#020617] text-slate-400 pt-20 pb-10 md:pt-32 md:pb-12 border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 mb-16 md:mb-24">
          {/* Brand */}
          <div className="space-y-6 md:space-y-8 text-center sm:text-left">
            <Link to="/" className="flex items-center justify-center sm:justify-start space-x-3">
              <div className="p-2 bg-blue-600 rounded-lg">
                <Rocket className="text-white w-4 h-4 md:w-5 md:h-5" />
              </div>
              <span className="text-lg md:text-xl font-black text-white tracking-tighter">
                NTOMBII<span className="text-blue-400">COMM</span>
              </span>
            </Link>
            <p className="text-sm md:text-lg leading-relaxed font-medium">
              Pushing digital boundaries through precision engineering and world-class design for the South African market.
            </p>
            <div className="flex justify-center sm:justify-start space-x-4 md:space-x-5">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-lg md:rounded-xl bg-white/5 text-slate-300 hover:bg-blue-600 hover:text-white transition-all">
                  <Icon className="w-4 h-4 md:w-5 md:h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="text-center sm:text-left">
            <h4 className="text-white font-black uppercase tracking-widest text-[10px] md:text-sm mb-6 md:mb-8">Navigation</h4>
            <ul className="space-y-3 md:space-y-4 font-semibold text-sm">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/portfolio" className="hover:text-white transition-colors">Portfolio</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="text-center sm:text-left">
            <h4 className="text-white font-black uppercase tracking-widest text-[10px] md:text-sm mb-6 md:mb-8">Contact</h4>
            <ul className="space-y-4 md:space-y-6 font-semibold text-sm">
              <li className="flex items-start justify-center sm:justify-start space-x-3 md:space-x-4">
                <MapPin className="w-4 h-4 md:w-5 md:h-5 text-blue-500 shrink-0" />
                <span>Newcastle, KwaZulu-Natal.</span>
              </li>
              <li className="flex items-center justify-center sm:justify-start space-x-3 md:space-x-4">
                <Mail className="w-4 h-4 md:w-5 md:h-5 text-blue-500 shrink-0" />
                <span>hello@ntombiicomm.co.za</span>
              </li>
              <li className="flex items-center justify-center sm:justify-start space-x-3 md:space-x-4">
                <Phone className="w-4 h-4 md:w-5 md:h-5 text-blue-500 shrink-0" />
                <span>+27 (0) 11 463 0000</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="text-center sm:text-left">
            <h4 className="text-white font-black uppercase tracking-widest text-[10px] md:text-sm mb-6 md:mb-8">Newsletter</h4>
            <p className="text-xs md:text-sm mb-6">Get the latest digital insights from our studio.</p>
            <div className="relative max-w-xs mx-auto sm:mx-0">
              <input 
                type="email" 
                placeholder="email@ntombiicomm.co.za" 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs md:text-sm font-semibold text-white outline-none focus:border-blue-500 transition-all"
              />
              <button className="absolute right-1.5 top-1.5 p-1.5 bg-blue-600 rounded-lg text-white hover:bg-blue-500 transition-all">
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 text-center">
          <p className="text-[8px] md:text-xs font-black uppercase tracking-[0.3em] text-slate-600 leading-relaxed px-4">
            © {new Date().getFullYear()} NTOMBII COMM South Africa. All rights reserved. Founded 2024.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
