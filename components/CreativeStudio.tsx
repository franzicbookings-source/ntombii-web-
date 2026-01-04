
import React, { useState } from 'react';
import { GoogleGenAI } from '@google/genai';
import { Sparkles, Image as ImageIcon, Download, Loader2, Wand2, Zap, ArrowRight, Eye } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const CreativeStudio: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const generateBrandConcept = async () => {
    if (!prompt.trim()) return;
    
    setIsGenerating(true);
    setError(null);
    setGeneratedImage(null);

    try {
      // Create new instance right before call as per guidelines for gemini-3 series models
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-pro-image-preview', // Nano Banana Pro
        contents: {
          parts: [
            { text: `A professional, ultra-high-end, 4k resolution design concept. The user is describing: ${prompt}. If it's a website, show a hero section. If it's a mobile app, show a sleek mobile UI. If it's automation or a tool, show a clean dashboard/interface. The style must be cutting-edge, minimalist 2025 aesthetic, premium dark mode, with sleek typography and futuristic elements. No placeholder text, just the visual interface.` }
          ]
        },
        config: {
          imageConfig: {
            aspectRatio: "16:9",
            imageSize: "1K" 
          }
        }
      });

      let foundImage = false;
      if (response.candidates && response.candidates[0].content.parts) {
        for (const part of response.candidates[0].content.parts) {
          if (part.inlineData) {
            setGeneratedImage(`data:image/png;base64,${part.inlineData.data}`);
            foundImage = true;
            break;
          } else if (part.text) {
             console.log("Model response text:", part.text);
          }
        }
      }

      if (!foundImage) {
        throw new Error("No image was generated in the response.");
      }
    } catch (err: any) {
      console.error("Generation Error:", err);
      if (err.message?.includes("not found")) {
        setError("AI studio connection lost. Please refresh or check your API key.");
      } else {
        setError("The creative engine is currently overloaded. Please try again in a moment.");
      }
    } finally {
      setIsGenerating(false);
    }
  };

  const downloadImage = () => {
    if (!generatedImage) return;
    const link = document.createElement('a');
    link.href = generatedImage;
    link.download = `ntombii-concept-${Date.now()}.png`;
    link.click();
  };

  return (
    <div className="glass-card p-6 md:p-16 rounded-[2.5rem] md:rounded-[4rem] border-white/5 relative overflow-hidden bg-gradient-to-br from-indigo-900/10 to-transparent">
      <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/5 rounded-full blur-[100px] -mr-32 -mt-32"></div>
      
      <div className="text-center mb-12 relative z-10">
        <div className="inline-flex items-center space-x-2 px-3 py-1 bg-purple-600/10 border border-purple-500/20 rounded-full mb-6">
          <Wand2 className="w-3 h-3 text-purple-400" />
          <span className="text-[10px] font-black text-purple-400 uppercase tracking-widest">NTOMBII Creative Engine v2.0</span>
        </div>
        <h3 className="text-3xl md:text-6xl font-black text-white mb-4 tracking-tighter">Vision <span className="text-gradient">Studio</span></h3>
        <p className="text-slate-400 text-sm md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
          Instantly visualize your next digital flagship. Our upgraded Pro engine generates ultra-premium design concepts based on your vision.
        </p>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-grow">
            <Zap className="absolute left-6 top-1/2 -translate-y-1/2 text-purple-500 w-5 h-5" />
            <input 
              type="text" 
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="e.g. A luxury real estate app or automation dashboard..."
              className="w-full bg-slate-900/50 border border-white/10 rounded-2xl md:rounded-3xl pl-16 pr-6 py-5 md:py-6 text-white font-bold text-lg outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 transition-all placeholder:text-slate-700"
            />
          </div>
          <button 
            onClick={generateBrandConcept}
            disabled={isGenerating || !prompt}
            className="bg-purple-600 text-white px-10 py-5 md:py-6 rounded-2xl md:rounded-3xl font-black uppercase tracking-widest text-sm hover:bg-purple-500 hover:scale-105 active:scale-95 transition-all flex items-center justify-center disabled:opacity-50 shadow-[0_20px_40px_rgba(147,51,234,0.3)]"
          >
            {isGenerating ? <Loader2 className="w-5 h-5 animate-spin" /> : <><Sparkles className="w-5 h-5 mr-2" /> Visualize Pro</>}
          </button>
        </div>

        {error && (
          <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-2xl text-red-400 text-xs font-black uppercase tracking-widest text-center mb-8">
            {error}
          </div>
        )}

        {isGenerating && (
          <div className="aspect-video w-full bg-white/[0.02] border border-white/5 rounded-[2rem] md:rounded-[3rem] flex flex-col items-center justify-center space-y-4 animate-pulse">
            <div className="w-16 h-16 border-t-2 border-purple-500 rounded-full animate-spin"></div>
            <p className="text-purple-400 font-black text-[10px] uppercase tracking-[0.4em]">Rendering Pro Artifact...</p>
          </div>
        )}

        {generatedImage && !isGenerating && (
          <ScrollReveal animation="scale">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-[2.5rem] md:rounded-[3.5rem] blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative aspect-video w-full bg-slate-900 rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
                <img src={generatedImage} alt="Generated Concept" className="w-full h-full object-cover" />
                
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8 md:p-12">
                   <div className="flex flex-wrap gap-4">
                      <button 
                        onClick={downloadImage}
                        className="flex items-center space-x-3 bg-white text-slate-950 px-6 py-3 rounded-xl font-black text-xs uppercase tracking-widest hover:scale-105 transition-all"
                      >
                         <Download className="w-4 h-4" />
                         <span>Save Concept</span>
                      </button>
                      <button 
                        onClick={() => window.location.href = '#/contact'}
                        className="flex items-center space-x-3 bg-purple-600 text-white px-6 py-3 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-purple-500 transition-all shadow-xl"
                      >
                         <span>Build This Site</span>
                         <ArrowRight className="w-4 h-4" />
                      </button>
                   </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        )}

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
           {[
             { label: 'Quality', value: 'Pro Tier' },
             { label: 'Model', value: 'Banana 3' },
             { label: 'Engine', value: 'Gemini Pro' },
             { label: 'Time', value: '< 15s' }
           ].map((stat, i) => (
             <div key={i} className="p-4 bg-white/5 rounded-2xl border border-white/5 text-center">
                <div className="text-white font-black text-sm mb-1">{stat.value}</div>
                <div className="text-[8px] font-black text-slate-500 uppercase tracking-widest">{stat.label}</div>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
};

export default CreativeStudio;
