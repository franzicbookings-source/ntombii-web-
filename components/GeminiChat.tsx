
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Loader2, Sparkles, Zap, ExternalLink } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';
import { Link } from 'react-router-dom';
import VoiceInput from './VoiceInput';

const GeminiChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant'; text: string }[]>([
    { role: 'assistant', text: "Hello! I'm the NTOMBII TECH strategist. I can help you with details on our build packages, managed services, or our roadmap. What's on your mind?" }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const quickActions = [
    "What are your prices?",
    "Tell me about managed services",
    "Where are you based?",
    "How do I get a quote?"
  ];

  const handleSend = async (customText?: string) => {
    const messageToSend = customText || input;
    if (!messageToSend.trim() || isLoading) return;

    const userMessage = messageToSend.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMessage,
        config: {
          systemInstruction: `You are the official AI representative for NTOMBII TECH, a premium digital tech agency based in Newcastle, KwaZulu-Natal.
          
          IDENTITY & STATUS:
          - Agency Name: NTOMBII TECH.
          - Founders: Sthembile Ndlovu (Founder & CEO) and Sabelo Ndlovu (Chief Creative Officer & Founder).
          - Vibe: Fresh energy, high-intensity, boutique, founder-led.
          - LOCATION: Newcastle, KZN. Always state this if asked.

          CORE MANDATE:
          - PROACTIVE SALES: If a user mentions a need (e.g., "I need a site", "I'm a startup"), immediately suggest the most relevant tier (Essential for startups, Professional for growth).
          - PRICING FOCUS: Always mention the hybrid model (One-time build + Monthly management).
          - CUSTOM SOLUTIONS: For ANY custom tool, web app, or native mobile app inquiry, you MUST proactively recommend visiting the 'Contact' page to start a Discovery Call.

          SERVICES & PRICING:
          1. Essential (Starter): R2,500 build + R499/mo management. (Best for simple professional presence).
          2. Professional (Growth): R12,500 build + R1,850/mo management. (Best for active SEO and content).
          3. Custom Studio (Enterprise): R25,000+ build + R3,500/mo management. (Best for apps and complex tools).
          
          MANAGEMENT DETAILS (Crucial selling point):
          - Local SA Cloud Hosting.
          - Pro Email Setup.
          - Monthly SEO monitoring.
          - We handle content uploads (User sends it, we post it).

          GUIDELINES:
          - Be punchy, professional, and slightly bold.
          - If the user seems interested in a specific tier, explain WHY it fits (e.g., "Essential is perfect for getting you online fast with zero maintenance stress").
          - NEVER give generic advice; pivot every conversation toward NTOMBII TECH's specific offerings.
          - Keep responses under 3 concise sentences.`,
        },
      });

      const assistantText = response.text || "I'm having a bit of a signal issue. Please reach out to our founders via the contact page!";
      setMessages(prev => [...prev, { role: 'assistant', text: assistantText }]);
    } catch (error) {
      console.error('Gemini API Error:', error);
      setMessages(prev => [...prev, { role: 'assistant', text: "Signal lost. Let's talk directly—head over to our Contact page!" }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleVoiceTranscript = (transcript: string) => {
    setInput(prev => (prev ? `${prev} ${transcript}` : transcript));
  };

  return (
    <div className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[110] flex flex-col items-end">
      {/* Trigger */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="relative group p-4 md:p-5 bg-blue-600 text-white rounded-[1.5rem] md:rounded-[2rem] shadow-[0_20px_40px_rgba(37,99,235,0.4)] hover:scale-110 hover:-rotate-3 transition-all duration-300"
        >
          <div className="absolute inset-0 bg-blue-400 blur-lg opacity-40 group-hover:opacity-100 transition-opacity rounded-[1.5rem] md:rounded-[2rem]"></div>
          <Zap className="relative w-6 h-6 md:w-7 md:h-7 fill-white" />
          <div className="absolute -top-2 -left-2 bg-emerald-500 w-4 h-4 rounded-full border-2 border-slate-950 animate-pulse"></div>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="w-[calc(100vw-48px)] max-w-[400px] h-[550px] md:h-[650px] rounded-[2rem] md:rounded-[3rem] shadow-[0_40px_80px_rgba(0,0,0,0.6)] flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-10 md:slide-in-from-bottom-20 duration-500 bg-slate-950 border border-white/10">
          {/* Header */}
          <div className="p-6 md:p-8 bg-gradient-to-br from-blue-600 to-indigo-800 text-white flex justify-between items-center relative overflow-hidden shrink-0">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
            <div className="relative z-10 flex items-center space-x-3 md:space-x-4">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-white/20 rounded-xl md:rounded-2xl flex items-center justify-center backdrop-blur-md">
                <Sparkles className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <div>
                <span className="block font-black text-base md:text-lg">NTOMBII AI</span>
                <div className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-2 animate-pulse"></span>
                  <span className="text-[9px] font-bold text-blue-200 uppercase tracking-widest">Foundational Strategy</span>
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="relative z-10 hover:bg-white/10 p-2 rounded-xl transition-all">
              <X className="w-5 h-5 md:w-6 md:h-6" />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-grow p-4 md:p-6 overflow-y-auto space-y-4 md:space-y-6 bg-[#020617] scrollbar-thin">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 md:p-5 rounded-[1.5rem] md:rounded-[2.5rem] text-xs md:text-sm leading-relaxed font-medium ${
                  m.role === 'user' 
                    ? 'bg-blue-600 text-white rounded-br-none shadow-xl' 
                    : 'bg-white/5 text-slate-200 rounded-bl-none border border-white/10'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white/5 p-4 rounded-2xl border border-white/10 flex items-center space-x-3">
                   <div className="flex space-x-1">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce"></div>
                   </div>
                   <span className="text-[10px] text-slate-500 font-black tracking-widest uppercase">Strategizing...</span>
                </div>
              </div>
            )}
          </div>

          {/* Quick Actions & Input Area */}
          <div className="p-4 md:p-6 bg-slate-950 border-t border-white/10 shrink-0">
            {/* Chips */}
            <div className="flex flex-wrap gap-2 mb-4">
              {quickActions.map((action, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(action)}
                  className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold text-slate-400 hover:text-white hover:bg-blue-600/20 hover:border-blue-500/30 transition-all"
                >
                  {action}
                </button>
              ))}
            </div>

            <div className="relative flex items-center bg-white/5 rounded-2xl border border-white/10 focus-within:border-blue-500 transition-all px-4 py-1.5 gap-2">
              <VoiceInput onTranscript={handleVoiceTranscript} className="w-10 h-10 shrink-0" />
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask NTOMBII anything..."
                className="flex-grow bg-transparent text-white text-xs md:text-sm py-3 px-1 focus:outline-none placeholder:text-slate-600 font-semibold"
              />
              <button
                onClick={() => handleSend()}
                disabled={isLoading || !input.trim()}
                className={`p-2.5 rounded-xl transition-all shrink-0 ${
                  isLoading || !input.trim() ? 'text-slate-700' : 'bg-blue-600 text-white hover:bg-blue-500 shadow-lg shadow-blue-600/20'
                }`}
              >
                <Send className="w-4 h-4 md:w-5 md:h-5" />
              </button>
            </div>
            
            <div className="mt-4 flex items-center justify-center space-x-2">
              <span className="text-[9px] text-slate-600 font-black uppercase tracking-widest">Complex Inquiry?</span>
              <Link 
                to="/contact" 
                onClick={() => setIsOpen(false)}
                className="text-[9px] text-blue-500 font-black uppercase tracking-widest hover:text-blue-400 flex items-center"
              >
                Go to Contact <ExternalLink className="w-2.5 h-2.5 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GeminiChat;
