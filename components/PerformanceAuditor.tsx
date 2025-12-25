
import React, { useState, useEffect } from 'react';
// Added missing Smartphone icon
import { Search, ShieldAlert, Zap, Globe, Loader2, CheckCircle2, AlertTriangle, ArrowRight, TrendingDown, DollarSign, Activity, BarChart3, Terminal, Target, Share2, ClipboardCheck, Smartphone } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';

const PerformanceAuditor: React.FC = () => {
  const [url, setUrl] = useState('');
  const [competitorUrl, setCompetitorUrl] = useState('');
  const [isComparisonMode, setIsComparisonMode] = useState(false);
  const [loading, setLoading] = useState(false);
  const [scanStep, setScanStep] = useState(0);
  const [report, setReport] = useState<any>(null);

  const scanSteps = [
    "Establishing Secure Handshake...",
    "Scanning DOM & Asset Bloat...",
    "Analyzing South African Cloud Latency...",
    "Cross-Referencing Benchmarks...",
    "Calculating ZAR Revenue Leakage...",
    "Finalizing Performance Blueprint..."
  ];

  useEffect(() => {
    let interval: any;
    if (loading && scanStep < scanSteps.length - 1) {
      interval = setInterval(() => {
        setScanStep(prev => prev + 1);
      }, 700);
    }
    return () => clearInterval(interval);
  }, [loading, scanStep]);

  const runAudit = async () => {
    if (!url.trim()) return;
    setLoading(true);
    setScanStep(0);
    setReport(null);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const prompt = `Audit this website URL: ${url}${isComparisonMode && competitorUrl ? ` and compare it against competitor: ${competitorUrl}` : ''}.
      Context: South African market (high mobile data costs, 4G/LTE stability).
      
      Provide a performance comparison between their current 'Legacy' state and a proposed 'NTOMBII' high-performance build.
      
      Return JSON with:
      { 
        "legacyScore": number, 
        "ntombiiScore": number, 
        "revenueLeak": string, 
        "lcp": string, 
        "mobileScore": number,
        "seoScore": number,
        "blueprint": string[],
        "competitorEdge": string,
        "criticalIssues": string[], 
        "verdict": string 
      }.
      Revenue leak should be in ZAR (e.g., 'R8,500/mo'). Blueprint should be 3 specific technical fixes NTOMBII would apply.`;

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt,
        config: { responseMimeType: "application/json" }
      });

      setReport(JSON.parse(response.text || '{}'));
    } catch (error) {
      console.error(error);
      setReport({ error: true });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="glass-card p-6 md:p-16 rounded-[2.5rem] md:rounded-[4rem] border-white/5 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600"></div>
      
      <div className="text-center mb-12 relative z-10">
        <div className="inline-flex items-center space-x-2 px-3 py-1 bg-blue-600/10 border border-blue-500/20 rounded-full mb-6">
          <Activity className="w-3 h-3 text-blue-400" />
          <span className="text-[10px] font-black text-blue-400 uppercase tracking-widest">NTOMBII Diagnostic v3.0</span>
        </div>
        <h3 className="text-3xl md:text-6xl font-black text-white mb-4 tracking-tighter">Legacy <span className="text-gradient">Audit Engine</span></h3>
        <p className="text-slate-400 text-sm md:text-xl font-medium max-w-2xl mx-auto">
          Deep-scan your technical architecture and uncover the hidden costs of outdated technology.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-4 mb-12 relative z-10">
        <div className="relative flex flex-col md:flex-row gap-4">
          <div className="relative flex-grow">
            <Globe className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-500 w-5 h-5" />
            <input 
              type="text" 
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="your-website.co.za"
              className="w-full bg-slate-900/50 border border-white/10 rounded-2xl md:rounded-3xl pl-16 pr-6 py-5 md:py-6 text-white font-bold text-lg outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all placeholder:text-slate-700"
            />
          </div>
          <button 
            onClick={runAudit}
            disabled={loading || !url}
            className="bg-blue-600 text-white px-10 py-5 md:py-6 rounded-2xl md:rounded-3xl font-black uppercase tracking-widest text-sm hover:bg-blue-500 hover:scale-105 active:scale-95 transition-all flex items-center justify-center disabled:opacity-50 shadow-[0_20px_40px_rgba(37,99,235,0.3)]"
          >
            {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <><Zap className="w-5 h-5 mr-2" /> Start Scan</>}
          </button>
        </div>

        <button 
          onClick={() => setIsComparisonMode(!isComparisonMode)}
          className="text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-blue-400 transition-colors flex items-center mx-auto"
        >
          <Target className="w-3 h-3 mr-2" />
          {isComparisonMode ? "- Remove Competitor Benchmarking" : "+ Add Competitor Benchmarking"}
        </button>

        {isComparisonMode && (
          <div className="animate-in slide-in-from-top-2 duration-300">
            <input 
              type="text" 
              value={competitorUrl}
              onChange={(e) => setCompetitorUrl(e.target.value)}
              placeholder="competitor-site.co.za"
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white font-bold text-sm outline-none focus:border-purple-500 transition-all placeholder:text-slate-700"
            />
          </div>
        )}
      </div>

      {loading && (
        <div className="max-w-md mx-auto py-12 text-center">
           <div className="relative w-24 h-24 mx-auto mb-8">
              <div className="absolute inset-0 border-2 border-blue-600/10 rounded-full"></div>
              <div className="absolute inset-0 border-t-2 border-blue-500 rounded-full animate-spin"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <Terminal className="w-8 h-8 text-blue-400 animate-pulse" />
              </div>
           </div>
           <p className="text-blue-400 font-black text-xs uppercase tracking-[0.4em] mb-4 h-4">{scanSteps[scanStep]}</p>
           <div className="flex justify-center space-x-1">
              {[...Array(scanSteps.length)].map((_, i) => (
                <div key={i} className={`h-1.5 w-6 rounded-full transition-colors duration-500 ${i <= scanStep ? 'bg-blue-500' : 'bg-white/10'}`}></div>
              ))}
           </div>
        </div>
      )}

      {report && !report.error && (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 bg-white/5 rounded-[2.5rem] border border-white/10 flex flex-col justify-between group">
              <div>
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1 block">Current Score</span>
                <h4 className="text-5xl font-black text-red-500">{report.legacyScore}%</h4>
              </div>
              <p className="mt-8 text-xs text-slate-400 font-medium leading-relaxed italic border-t border-white/5 pt-4">"{report.verdict}"</p>
            </div>

            <div className="p-8 bg-blue-600/10 rounded-[2.5rem] border border-blue-500/30 flex flex-col justify-between shadow-[0_20px_60px_rgba(37,99,235,0.1)] relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:scale-110 transition-transform">
                <Zap className="w-20 h-20" />
              </div>
              <div>
                <span className="text-[10px] font-black text-blue-400 uppercase tracking-widest mb-1 block">NTOMBII Potential</span>
                <h4 className="text-5xl font-black text-emerald-400">{report.ntombiiScore}%</h4>
              </div>
              <div className="mt-8 flex items-center text-emerald-400 font-black text-[10px] uppercase tracking-widest border-t border-emerald-500/20 pt-4">
                 <Zap className="w-3 h-3 mr-2 fill-emerald-400" />
                 <span>Ultra-Performance Build</span>
              </div>
            </div>

            <div className="p-8 bg-red-600/10 rounded-[2.5rem] border border-red-500/30">
               <span className="text-[10px] font-black text-red-400 uppercase tracking-widest block mb-1">Revenue Leak (est.)</span>
               <div className="text-4xl font-black text-white mb-4">{report.revenueLeak}</div>
               <p className="text-[10px] text-red-300/60 font-medium uppercase tracking-widest leading-relaxed">Monthly recurring loss due to technical friction.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* The Build Blueprint */}
            <div className="p-8 md:p-12 bg-slate-900/50 rounded-[3rem] border border-white/10">
               <div className="flex items-center space-x-3 mb-8">
                  <ClipboardCheck className="w-5 h-5 text-blue-500" />
                  <h4 className="text-xs font-black text-white uppercase tracking-widest">The Build Blueprint</h4>
               </div>
               <div className="space-y-6">
                  {report.blueprint?.map((step: string, i: number) => (
                    <div key={i} className="flex items-start space-x-4">
                       <span className="w-6 h-6 rounded-full bg-blue-600/20 text-blue-400 flex items-center justify-center text-[10px] font-black shrink-0 mt-0.5">0{i+1}</span>
                       <p className="text-sm text-slate-300 font-medium leading-relaxed">{step}</p>
                    </div>
                  ))}
               </div>
            </div>

            {/* Performance Stats Bento */}
            <div className="grid grid-cols-2 gap-4">
               {[
                 { label: 'Mobile UX', value: report.mobileScore + '%', icon: <Smartphone className="w-4 h-4" /> },
                 { label: 'SEO Authority', value: report.seoScore + '%', icon: <Search className="w-4 h-4" /> },
                 { label: 'LCP Speed', value: report.lcp, icon: <Zap className="w-4 h-4" /> },
                 { label: 'Comparison', value: report.competitorEdge || 'Scanning...', icon: <Target className="w-4 h-4" /> }
               ].map((stat, i) => (
                 <div key={i} className="p-6 bg-white/[0.03] rounded-[2rem] border border-white/5 flex flex-col justify-between">
                    <div className="text-blue-500 mb-4">{stat.icon}</div>
                    <div>
                      <div className="text-xl font-black text-white mb-1">{stat.value}</div>
                      <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest">{stat.label}</span>
                    </div>
                 </div>
               ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8 border-t border-white/5">
             <button 
               onClick={() => window.location.href = '#/contact'}
               className="w-full sm:w-auto inline-flex items-center justify-center space-x-4 px-10 py-5 bg-white text-slate-950 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all shadow-2xl"
             >
                <span>Fix Legacy Debt</span>
                <ArrowRight className="w-4 h-4" />
             </button>
             <button className="w-full sm:w-auto inline-flex items-center justify-center space-x-4 px-10 py-5 bg-white/5 border border-white/10 text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-white/10 transition-all">
                <Share2 className="w-4 h-4" />
                <span>Share Results</span>
             </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PerformanceAuditor;