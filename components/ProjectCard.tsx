
import React from 'react';
import { ExternalLink, Zap, ShieldCheck, FileText } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onViewCaseStudy?: () => void;
  isExpanded?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onViewCaseStudy, isExpanded }) => {
  return (
    <div className={`group relative overflow-hidden rounded-[1.5rem] md:rounded-[2rem] aspect-[4/3] cursor-pointer shadow-2xl border transition-all duration-500 ${
      isExpanded ? 'border-blue-500 shadow-[0_0_50px_rgba(59,130,246,0.2)]' : 'border-white/5 hover:border-blue-500/50'
    }`}>
      {/* Background Image */}
      <img 
        src={project.image} 
        alt={project.title} 
        className="w-full h-full object-cover transition-all duration-1000 saturate-[0.8] brightness-[0.7] group-hover:scale-110 group-hover:saturate-100 group-hover:brightness-100"
      />

      {/* Actual Website Logo Badge - Responsive Sizing */}
      {project.logo && (
        <div className="absolute top-4 left-4 md:top-6 md:left-6 z-20 flex items-center space-x-2 md:space-x-3 p-1.5 md:p-2 pr-3 md:pr-4 bg-slate-950/60 backdrop-blur-xl border border-white/20 rounded-xl md:rounded-2xl group-hover:border-blue-500/50 transition-all duration-500 shadow-xl">
          <div className="w-7 h-7 md:w-10 md:h-10 bg-white rounded-lg md:rounded-xl flex items-center justify-center p-1 md:p-1.5 shadow-lg">
            <img src={project.logo} alt={`${project.title} logo`} className="w-full h-full object-contain" />
          </div>
          <div className="flex flex-col">
            <span className="text-white font-black text-[8px] md:text-[10px] tracking-tight uppercase leading-none drop-shadow-sm">{project.title}</span>
            <div className="flex items-center mt-0.5 md:mt-1">
              <ShieldCheck className="w-2 md:w-2.5 h-2 md:h-2.5 text-blue-400 mr-1" />
              <span className="text-[6px] md:text-[8px] text-blue-400 font-black uppercase tracking-widest">Verified Build</span>
            </div>
          </div>
        </div>
      )}
      
      {/* Responsive Overlay - p-5 on mobile, md:p-10 on desktop */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-5 sm:p-8 md:p-10 backdrop-blur-md">
        
        {/* Animated Accent Line */}
        <div className="absolute top-0 left-0 w-0 h-1 bg-blue-500 group-hover:w-full transition-all duration-700 delay-100 shadow-[0_0_15px_rgba(59,130,246,0.8)]"></div>

        {/* Category with Pulsing Icon */}
        <div className="flex items-center space-x-2 mb-1.5 md:mb-3 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
          <Zap className="w-2.5 h-2.5 md:w-3 md:h-3 text-blue-400 fill-blue-400 animate-pulse drop-shadow-[0_0_8px_rgba(96,165,250,0.8)]" />
          <span className="text-blue-400 font-black text-[8px] sm:text-[10px] md:text-xs uppercase tracking-[0.2em] md:tracking-[0.3em] drop-shadow-lg">
            {project.category}
          </span>
        </div>
        
        {/* Title - text-lg -> sm:text-2xl -> md:text-4xl */}
        <h3 className="text-lg sm:text-2xl md:text-4xl font-black text-white group-hover:text-white mb-1.5 md:mb-3 transform translate-y-4 group-hover:translate-y-0 group-hover:scale-[1.02] origin-left transition-all duration-500 delay-75 drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] leading-tight">
          {project.title}
        </h3>
        
        {/* Description - text-[11px] -> sm:text-sm -> md:text-lg */}
        <p className="text-slate-100 text-[11px] sm:text-sm md:text-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-150 font-medium leading-relaxed mb-4 md:mb-8 line-clamp-3 md:line-clamp-none drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
          {project.description}
        </p>
        
        {/* Action Buttons Container */}
        <div className="flex flex-wrap gap-2 md:gap-3 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
          {onViewCaseStudy && (
            <button 
              onClick={(e) => {
                e.stopPropagation();
                onViewCaseStudy();
              }}
              className={`inline-flex items-center space-x-2 md:space-x-3 w-fit px-4 md:px-6 py-2 md:py-3 rounded-lg md:rounded-xl text-[9px] md:text-xs font-black uppercase tracking-widest transition-all shadow-xl ${
                isExpanded 
                  ? 'bg-white text-blue-600 shadow-white/10' 
                  : 'bg-white/10 text-white backdrop-blur-md border border-white/20 hover:bg-white/20'
              }`}
            >
              <FileText className="w-3 h-3 md:w-4 md:h-4" />
              <span>{isExpanded ? 'Close' : 'Case Study'}</span>
            </button>
          )}

          {project.link && (
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center space-x-2 md:space-x-3 w-fit px-4 md:px-6 py-2 md:py-3 bg-blue-600 text-white rounded-lg md:rounded-xl text-[9px] md:text-xs font-black uppercase tracking-widest hover:bg-blue-500 hover:scale-105 transition-all shadow-xl shadow-blue-600/40"
            >
              <span>Live Site</span>
              <ExternalLink className="w-3 h-3 md:w-4 md:h-4" />
            </a>
          )}
        </div>
      </div>

      {/* Subtle Corner Accents */}
      <div className="hidden sm:block absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-white/0 group-hover:border-blue-500/50 transition-all duration-700 delay-300"></div>
      <div className="hidden sm:block absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-white/0 group-hover:border-blue-500/50 transition-all duration-700 delay-300"></div>
    </div>
  );
};

export default ProjectCard;
