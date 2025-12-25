
import React, { useState, useEffect } from 'react';
import { ShieldCheck, Lock, ArrowRight, ExternalLink, Rocket } from 'lucide-react';

interface ApiKeyGuardProps {
  children: React.ReactNode;
}

const ApiKeyGuard: React.FC<ApiKeyGuardProps> = ({ children }) => {
  const [hasKey, setHasKey] = useState<boolean | null>(null);

  useEffect(() => {
    const checkKey = async () => {
      if (window.aistudio && typeof window.aistudio.hasSelectedApiKey === 'function') {
        const selected = await window.aistudio.hasSelectedApiKey();
        setHasKey(selected);
      } else {
        // Fallback for environments where this isn't needed/available
        setHasKey(true);
      }
    };
    checkKey();
  }, []);

  const handleAuthorize = async () => {
    if (window.aistudio && typeof window.aistudio.openSelectKey === 'function') {
      await window.aistudio.openSelectKey();
      // Proceed immediately as per guidelines to avoid race conditions
      setHasKey(true);
    }
  };

  if (hasKey === null) return null; // Loading state

  if (!hasKey) {
    return (
      <div className="fixed inset-0 z-[200] bg-[#020617] flex items-center justify-center p-6">
        <div className="mesh-gradient absolute inset-0 opacity-50"></div>
        <div className="glass-card max-w-md w-full p-8 md:p-12 rounded-[3rem] border-white/10 relative z-10 text-center shadow-[0_50px_100px_rgba(0,0,0,0.8)]">
          <div className="w-20 h-20 bg-blue-600 rounded-[2rem] flex items-center justify-center mx-auto mb-8 shadow-[0_0_40px_rgba(37,99,235,0.4)]">
            <Rocket className="text-white w-10 h-10" />
          </div>
          
          <h1 className="text-2xl font-black text-white mb-4 tracking-tighter">System <span className="text-gradient">Authorization</span></h1>
          <p className="text-slate-400 text-sm font-medium leading-relaxed mb-10">
            To enable the AI Studio capabilities and the Live Voice Consultant, please authorize access using your Gemini API key.
          </p>

          <div className="space-y-4 mb-10 text-left bg-white/5 p-6 rounded-2xl border border-white/5">
             <div className="flex items-center space-x-3 text-xs font-bold text-slate-300">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span>Secure WebSocket Connection</span>
             </div>
             <div className="flex items-center space-x-3 text-xs font-bold text-slate-300">
                <Lock className="w-4 h-4 text-emerald-500" />
                <span>Encrypted Data Transmission</span>
             </div>
          </div>

          <button 
            onClick={handleAuthorize}
            className="w-full py-5 bg-white text-slate-950 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-blue-600 hover:text-white transition-all flex items-center justify-center group"
          >
            <span>Link API Key</span>
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <a 
            href="https://ai.google.dev/gemini-api/docs/billing" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center mt-8 text-[10px] font-black text-slate-500 uppercase tracking-widest hover:text-blue-400 transition-colors"
          >
            <span>Billing Documentation</span>
            <ExternalLink className="ml-1 w-3 h-3" />
          </a>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default ApiKeyGuard;
