
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Rocket, Sparkles } from 'lucide-react';
import LanguageToggle from './LanguageToggle';
import { useLanguage } from '../App';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { lang, setLang } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: lang === 'EN' ? 'Home' : 'Ekhaya', path: '/' },
    { name: lang === 'EN' ? 'Services' : 'Imisebenzi', path: '/services' },
    { name: lang === 'EN' ? 'Portfolio' : 'Umsebenzi', path: '/portfolio' },
    { name: lang === 'EN' ? 'About' : 'Mayelana', path: '/about' },
  ];

  return (
    <div className="fixed w-full flex justify-center z-[100] px-4 py-6 md:px-6 md:py-8">
      <nav className={`w-full max-w-6xl flex justify-between items-center px-4 md:px-6 py-3 md:py-4 rounded-2xl md:rounded-3xl transition-all duration-500 border ${
        scrolled 
          ? 'bg-slate-900/40 backdrop-blur-2xl border-white/10 shadow-2xl' 
          : 'bg-transparent border-transparent'
      }`}>
        <Link to="/" className="flex items-center space-x-2 md:space-x-3 group">
          <div className="relative shrink-0">
            <div className="relative p-2 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg md:rounded-xl">
              <Rocket className="text-white w-4 h-4 md:w-5 md:h-5" />
            </div>
          </div>
          <span className="text-base md:text-xl font-black tracking-tighter text-white">
            NTOMBII<span className="text-blue-400">TECH</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all hover:bg-white/5 ${
                location.pathname === link.path ? 'text-blue-400' : 'text-slate-300'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="w-px h-6 bg-white/10 mx-2"></div>
          <LanguageToggle currentLang={lang} onToggle={setLang} />
          <div className="w-px h-6 bg-white/10 mx-2"></div>
          <Link
            to="/contact"
            className="group relative inline-flex items-center justify-center px-6 py-2.5 font-bold text-white transition-all duration-300 bg-blue-600 rounded-xl hover:bg-blue-500 shadow-lg shadow-blue-500/20"
          >
            <span className="relative flex items-center">
              {lang === 'EN' ? "Let's Talk" : "Sikhulume"} <Sparkles className="ml-2 w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </span>
          </Link>
        </div>

        {/* Mobile Toggle Area */}
        <div className="flex items-center space-x-2 md:hidden">
          <LanguageToggle currentLang={lang} onToggle={setLang} />
          <button onClick={() => setIsOpen(!isOpen)} className="p-1.5 text-slate-300">
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-x-4 top-24 bg-slate-900/95 backdrop-blur-3xl border border-white/10 rounded-2xl p-6 shadow-2xl animate-in fade-in zoom-in-95 duration-300">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="text-base font-bold text-slate-200 py-3 border-b border-white/5"
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="bg-blue-600 text-white text-center py-4 rounded-xl font-black text-sm"
            >
              {lang === 'EN' ? "Start Your Project" : "Qala Umsebenzi"}
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
