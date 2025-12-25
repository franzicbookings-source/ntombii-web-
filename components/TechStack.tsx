
import React from 'react';
import { Code2, Database, Cpu, Globe, Zap, ShieldCheck, Smartphone, Search } from 'lucide-react';

const TechStack: React.FC = () => {
  const tech = [
    { name: 'React 19', icon: <Code2 /> },
    { name: 'Gemini AI', icon: <Zap /> },
    { name: 'TypeScript', icon: <ShieldCheck /> },
    { name: 'PostgreSQL', icon: <Database /> },
    { name: 'Vercel Edge', icon: <Globe /> },
    { name: 'Tailwind CSS', icon: <Cpu /> },
    { name: 'Native iOS', icon: <Smartphone /> },
    { name: 'SEO Core', icon: <Search /> },
  ];

  return (
    <div className="w-full py-12 md:py-20 border-y border-white/5 bg-white/[0.01]">
      <div className="container mx-auto px-6 mb-12 text-center">
        <h2 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] mb-4">Our Technical Arsenal</h2>
        <h3 className="text-xl md:text-3xl font-black text-white">Engineered with <span className="text-gradient">2025 Architecture</span></h3>
      </div>
      
      <div className="marquee-wrapper">
        <div className="marquee-content py-4">
          {[...tech, ...tech, ...tech].map((item, i) => (
            <div key={i} className="flex items-center space-x-4 bg-white/5 px-6 py-3 rounded-2xl border border-white/10 group hover:border-blue-500/50 transition-colors">
              <div className="text-blue-400 group-hover:scale-110 transition-transform">
                {/* Fixed size error by casting to any */}
                {React.cloneElement(item.icon as any, { size: 18 })}
              </div>
              <span className="text-sm font-black text-slate-300 tracking-tight">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
