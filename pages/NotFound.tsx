
import React from 'react';
import { Link } from 'react-router-dom';
import { Ghost, Home, ArrowLeft } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <div className="relative inline-block mb-12">
          <div className="absolute inset-0 bg-blue-600 blur-[80px] opacity-20"></div>
          <Ghost className="w-24 h-24 md:w-32 md:h-32 text-slate-700 animate-float relative z-10" />
          <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl md:text-7xl font-black text-white tracking-tighter opacity-10">404</h1>
        </div>
        
        <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Path Not <span className="text-gradient">Mapped</span>.</h2>
        <p className="text-slate-400 text-sm md:text-lg font-medium max-w-md mx-auto mb-10 leading-relaxed">
          The digital artifact you are looking for has been decommissioned or moved to a new cluster.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/" className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white rounded-xl font-black text-sm uppercase tracking-widest flex items-center justify-center transition-all hover:bg-blue-500 shadow-xl shadow-blue-600/20">
            <Home className="w-4 h-4 mr-2" />
            Return Home
          </Link>
          <button onClick={() => window.history.back()} className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 text-white rounded-xl font-black text-sm uppercase tracking-widest flex items-center justify-center transition-all hover:bg-white/10">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
