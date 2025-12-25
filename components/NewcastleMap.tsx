
import React from 'react';
import { MapPin, Zap } from 'lucide-react';

const NewcastleMap: React.FC = () => {
  const landmarks = [
    { name: 'NTOMBII Studio', x: '50%', y: '45%', color: 'blue' },
    { name: 'SMME Partner Hub', x: '65%', y: '55%', color: 'purple' },
    { name: 'KZN Cloud Node', x: '35%', y: '60%', color: 'emerald' },
  ];

  return (
    <div className="relative w-full aspect-[2/1] bg-slate-900/50 rounded-[2.5rem] border border-white/5 overflow-hidden group">
      {/* Visual background pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#1e293b 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
      
      {/* Stylized Newcastle Grid Map */}
      <svg className="absolute inset-0 w-full h-full p-10 md:p-20 opacity-30 group-hover:opacity-50 transition-opacity" viewBox="0 0 800 400">
        <path d="M100,50 L700,50 M100,150 L700,150 M100,250 L700,250 M100,350 L700,350" stroke="#1e293b" strokeWidth="1" />
        <path d="M150,50 L150,350 M300,50 L300,350 M450,50 L450,350 M600,50 L600,350" stroke="#1e293b" strokeWidth="1" />
      </svg>

      {/* Point of Light */}
      {landmarks.map((point, i) => (
        <div 
          key={i} 
          className="absolute transform -translate-x-1/2 -translate-y-1/2 group/point cursor-pointer"
          style={{ left: point.x, top: point.y }}
        >
          <div className={`relative w-4 h-4 md:w-6 md:h-6 rounded-full bg-${point.color}-600/20 flex items-center justify-center`}>
            <div className={`w-1.5 h-1.5 md:w-2.5 md:h-2.5 rounded-full bg-${point.color}-500 shadow-[0_0_20px_rgba(59,130,246,0.8)] animate-pulse`}></div>
            <div className={`absolute inset-0 rounded-full border border-${point.color}-500 animate-ping opacity-20`}></div>
          </div>
          
          <div className="absolute top-full mt-3 left-1/2 -translate-x-1/2 opacity-0 group-hover/point:opacity-100 transition-all pointer-events-none whitespace-nowrap z-30">
             <div className="bg-slate-950/90 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-lg">
                <span className="text-[10px] font-black text-white uppercase tracking-widest">{point.name}</span>
             </div>
          </div>
        </div>
      ))}

      <div className="absolute bottom-8 right-8 text-right">
        <h4 className="text-white font-black text-sm md:text-xl mb-1">Local Impact</h4>
        <p className="text-[10px] text-blue-500 font-black uppercase tracking-widest">Newcastle KZN Infrastructure</p>
      </div>

      <div className="absolute top-8 left-8 flex items-center space-x-2">
         <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
         <span className="text-[10px] text-emerald-500 font-black uppercase tracking-widest">48 Active Projects</span>
      </div>
    </div>
  );
};

export default NewcastleMap;
