
import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import ProjectCard from '../components/ProjectCard';
import { ChevronDown, ChevronUp, CheckCircle, Cpu, FileText } from 'lucide-react';

const Portfolio: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(prev => (prev === id ? null : id));
  };

  return (
    <div className="pt-24 md:pt-32 pb-16 md:pb-24 text-slate-200">
      {/* Header */}
      <section className="container mx-auto max-w-6xl px-4 md:px-6 mb-12 md:mb-20 text-center">
        <h2 className="text-blue-500 font-black text-[10px] md:text-sm uppercase tracking-[0.3em] mb-4">The Launch Collection</h2>
        <h1 className="text-3xl sm:text-5xl md:text-8xl font-black text-white mb-6 md:mb-8 tracking-tighter leading-[1.1]">
          Initial <span className="text-gradient">Artifacts</span>
        </h1>
        <p className="text-sm md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-medium px-2">
          A showcase of our inaugural projects. These are more than just websites—they are the foundational pillars of our studio's standards.
        </p>
      </section>

      {/* Projects Grid */}
      <section className="container mx-auto max-w-6xl px-4 md:px-6 mb-20 md:mb-32">
        <div className="grid grid-cols-1 gap-16 md:gap-24">
          {PROJECTS.map(project => {
            const isExpanded = expandedId === project.id;
            
            return (
              <div key={project.id} className={`space-y-6 md:space-y-8 group transition-all duration-500 ${isExpanded ? 'bg-white/[0.02] p-5 sm:p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] border border-blue-500/20 shadow-[0_0_80px_rgba(59,130,246,0.05)]' : ''}`}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
                  <ProjectCard 
                    project={project} 
                    onViewCaseStudy={() => toggleExpand(project.id)}
                    isExpanded={isExpanded}
                  />
                  
                  <div className="px-1 md:px-4 flex flex-col justify-center h-full">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-3 md:mb-4">
                      <span className="text-blue-500 font-black text-[9px] md:text-xs tracking-[0.2em] uppercase">{project.category}</span>
                      <span className="text-slate-600 text-[8px] md:text-xs font-black uppercase tracking-widest italic">Foundational Launch Project</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl md:text-5xl font-black text-white mb-3 md:mb-6 leading-tight">{project.title}</h3>
                    <p className="text-sm md:text-lg text-slate-400 font-medium leading-relaxed mb-6 md:mb-10">
                      {project.description}
                    </p>
                    
                    <button 
                      onClick={() => toggleExpand(project.id)}
                      className={`group/btn w-full sm:w-fit flex items-center justify-center sm:justify-start space-x-4 px-6 md:px-8 py-3.5 md:py-4 rounded-xl border font-black text-[10px] md:text-sm uppercase tracking-widest transition-all duration-300 ${
                        isExpanded 
                          ? 'bg-blue-600 border-blue-600 text-white shadow-xl shadow-blue-600/30' 
                          : 'bg-transparent border-white/10 text-white hover:border-blue-500 hover:text-blue-500'
                      }`}
                    >
                      <FileText className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-0' : 'group-hover/btn:scale-110'}`} />
                      <span>{isExpanded ? 'Close Case Study' : 'View Detailed Case Study'}</span>
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4 group-hover/btn:translate-y-0.5 transition-transform" />}
                    </button>
                  </div>
                </div>

                {/* Expanded Section - Highly responsive layout */}
                {isExpanded && project.caseStudy && (
                  <div className="pt-8 md:pt-16 border-t border-white/10 animate-in fade-in slide-in-from-top-4 duration-500">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 sm:gap-10 lg:gap-12">
                      {/* Challenge Section */}
                      <div className="space-y-4 md:space-y-6">
                        <h4 className="text-blue-500 font-black text-[10px] uppercase tracking-widest flex items-center">
                          <span className="w-6 h-px bg-blue-500/30 mr-3"></span>
                          The Challenge
                        </h4>
                        <p className="text-slate-300 text-sm md:text-base leading-relaxed font-medium">
                          {project.caseStudy.problem}
                        </p>
                      </div>

                      {/* Solution Section */}
                      <div className="space-y-4 md:space-y-6 border-t sm:border-t-0 border-white/5 pt-8 sm:pt-0">
                        <h4 className="text-blue-500 font-black text-[10px] uppercase tracking-widest flex items-center">
                          <span className="w-6 h-px bg-blue-500/30 mr-3"></span>
                          Our Solution
                        </h4>
                        <p className="text-slate-300 text-sm md:text-base leading-relaxed font-medium">
                          {project.caseStudy.solution}
                        </p>
                      </div>

                      {/* Results Section */}
                      <div className="space-y-4 md:space-y-6 border-t lg:border-t-0 border-white/5 pt-8 lg:pt-0 sm:col-span-2 lg:col-span-1">
                        <h4 className="text-blue-500 font-black text-[10px] uppercase tracking-widest flex items-center">
                          <span className="w-6 h-px bg-blue-500/30 mr-3"></span>
                          The Results
                        </h4>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3 md:gap-4">
                          {project.caseStudy.results.map((res, i) => (
                            <li key={i} className="flex items-start space-x-3 text-sm font-medium text-slate-400">
                              <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                              <span className="leading-snug">{res}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    {/* Tech Stack Horizontal List */}
                    <div className="mt-12 md:mt-16 p-5 md:p-8 bg-white/[0.03] rounded-3xl border border-white/5 flex flex-col sm:flex-row items-start sm:items-center gap-6">
                       <div className="flex items-center space-x-3 shrink-0">
                          <div className="w-8 h-8 bg-blue-600/20 text-blue-500 rounded-lg flex items-center justify-center">
                             <Cpu className="w-4 h-4" />
                          </div>
                          <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Built With</span>
                       </div>
                       
                       <div className="flex flex-wrap gap-2 md:gap-3">
                          {project.caseStudy.stack.map((tech, i) => (
                            <span key={i} className="px-4 py-2 bg-blue-600/10 border border-blue-600/20 rounded-xl text-[10px] font-bold text-blue-400 whitespace-nowrap">
                              {tech}
                            </span>
                          ))}
                       </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Focused Philosophy */}
      <section className="bg-white/[0.02] border-y border-white/5 py-16 md:py-32">
        <div className="container mx-auto max-w-6xl px-4 md:px-6">
          <div className="text-center mb-12 md:mb-24">
            <h2 className="text-2xl sm:text-4xl md:text-6xl font-black text-white mb-6 md:mb-8">How We Deliver</h2>
            <p className="text-xs md:text-base text-slate-400 max-w-2xl mx-auto font-medium">As a new agency, our process is optimized for speed, clarity, and zero waste.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {[
              { step: '01', title: 'Deep Discovery', desc: 'One-on-one sessions with our founders to map your vision.' },
              { step: '02', title: 'Agile Builds', desc: 'Rapid prototyping using cutting-edge 2025 tech stacks.' },
              { step: '03', title: 'Rigorous QA', desc: 'Manual and automated testing to ensure 100% stability.' },
              { step: '04', title: 'Impact Support', desc: 'Direct technical support for a seamless post-launch era.' }
            ].map((item, idx) => (
              <div key={idx} className="relative p-8 md:p-10 glass-card rounded-[1.5rem] md:rounded-[2.5rem]">
                <span className="text-4xl md:text-6xl font-black text-blue-600/5 absolute top-6 right-6 leading-none select-none">{item.step}</span>
                <h4 className="text-base md:text-xl font-black text-white mb-3 md:mb-4 pr-12">{item.title}</h4>
                <p className="text-slate-500 text-xs md:text-sm font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
