
import React from 'react';
import { Languages } from 'lucide-react';

interface LanguageToggleProps {
  currentLang: 'EN' | 'ZU';
  onToggle: (lang: 'EN' | 'ZU') => void;
}

const LanguageToggle: React.FC<LanguageToggleProps> = ({ currentLang, onToggle }) => {
  return (
    <button 
      onClick={() => onToggle(currentLang === 'EN' ? 'ZU' : 'EN')}
      className="flex items-center space-x-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-all group"
    >
      <Languages className="w-3.5 h-3.5 text-blue-400 group-hover:rotate-12 transition-transform" />
      <span className="text-[10px] font-black tracking-widest text-slate-300">
        {currentLang === 'EN' ? 'ENGLISH' : 'ISIZULU'}
      </span>
    </button>
  );
};

export default LanguageToggle;
