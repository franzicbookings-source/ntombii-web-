
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI, LiveServerMessage, Modality } from '@google/genai';
import { Mic, MicOff, PhoneOff, Sparkles, Loader2, Volume2, Key } from 'lucide-react';

const LiveConsultant: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isListening, setIsListening] = useState(false);
  
  const audioContextRef = useRef<AudioContext | null>(null);
  const inputAudioContextRef = useRef<AudioContext | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const sessionRef = useRef<any>(null);
  const nextStartTimeRef = useRef(0);
  const sourcesRef = useRef(new Set<AudioBufferSourceNode>());

  // Clean up on unmount
  useEffect(() => {
    return () => {
      stopSession();
    };
  }, []);

  const decodeAudioData = async (data: Uint8Array, ctx: AudioContext, sampleRate: number, numChannels: number): Promise<AudioBuffer> => {
    const dataInt16 = new Int16Array(data.buffer);
    const frameCount = dataInt16.length / numChannels;
    const buffer = ctx.createBuffer(numChannels, frameCount, sampleRate);
    for (let channel = 0; channel < numChannels; channel++) {
      const channelData = buffer.getChannelData(channel);
      for (let i = 0; i < frameCount; i++) {
        channelData[i] = dataInt16[i * numChannels + channel] / 32768.0;
      }
    }
    return buffer;
  };

  const decodeBase64 = (base64: string) => {
    const binaryString = atob(base64);
    const bytes = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes;
  };

  const encodePCM = (data: Float32Array): string => {
    const int16 = new Int16Array(data.length);
    for (let i = 0; i < data.length; i++) {
      int16[i] = data[i] * 32768;
    }
    let binary = '';
    const bytes = new Uint8Array(int16.buffer);
    for (let i = 0; i < bytes.byteLength; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary);
  };

  const startSession = async () => {
    if (isActive || isConnecting) return;
    
    setIsConnecting(true);
    setError(null);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
      inputAudioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 16000 });
      
      streamRef.current = await navigator.mediaDevices.getUserMedia({ audio: true });
      
      const sessionPromise = ai.live.connect({
        model: 'gemini-2.5-flash-native-audio-preview-09-2025',
        config: {
          responseModalities: [Modality.AUDIO],
          speechConfig: {
            voiceConfig: { prebuiltVoiceConfig: { voiceName: 'Kore' } },
          },
          systemInstruction: "You are the AI version of Sthembile Ndlovu, Founder of NTOMBII TECH. You are speaking to a potential client in Newcastle, South Africa. Your goal is to discuss digital strategy, explain why local cloud hosting is superior, and encourage them to book a discovery call. Be confident, warm, and professional. Use a mix of English and isiZulu naturally where appropriate.",
        },
        callbacks: {
          onopen: () => {
            setIsActive(true);
            setIsConnecting(false);
            setIsListening(true);
            
            if (streamRef.current && inputAudioContextRef.current) {
              const inputCtx = inputAudioContextRef.current;
              const source = inputCtx.createMediaStreamSource(streamRef.current);
              const scriptProcessor = inputCtx.createScriptProcessor(4096, 1, 1);
              scriptProcessor.onaudioprocess = (e) => {
                const inputData = e.inputBuffer.getChannelData(0);
                const base64Pcm = encodePCM(inputData);
                sessionPromise.then(session => {
                  if (session) {
                    session.sendRealtimeInput({ media: { data: base64Pcm, mimeType: 'audio/pcm;rate=16000' } });
                  }
                }).catch(() => {});
              };
              source.connect(scriptProcessor);
              scriptProcessor.connect(inputCtx.destination);
            }
          },
          onmessage: async (message: LiveServerMessage) => {
            const audioData = message.serverContent?.modelTurn?.parts[0]?.inlineData?.data;
            if (audioData && audioContextRef.current && audioContextRef.current.state !== 'closed') {
              const ctx = audioContextRef.current;
              nextStartTimeRef.current = Math.max(nextStartTimeRef.current, ctx.currentTime);
              try {
                const buffer = await decodeAudioData(decodeBase64(audioData), ctx, 24000, 1);
                const source = ctx.createBufferSource();
                source.buffer = buffer;
                source.connect(ctx.destination);
                source.start(nextStartTimeRef.current);
                nextStartTimeRef.current += buffer.duration;
                sourcesRef.current.add(source);
                source.onended = () => sourcesRef.current.delete(source);
              } catch (e) {
                console.error("Audio playback error:", e);
              }
            }
            if (message.serverContent?.interrupted) {
              sourcesRef.current.forEach(s => {
                try { s.stop(); } catch(e) {}
              });
              sourcesRef.current.clear();
              nextStartTimeRef.current = 0;
            }
          },
          onerror: (e: any) => {
            console.error("Live API Error:", e);
            setError(e.message?.includes("refused") || e.message?.includes("not found") 
              ? "Studio connection refused. Please try linking your API key again." 
              : "Network interference. Let's try again in a moment.");
            stopSession();
          },
          onclose: () => stopSession(),
        }
      });
      sessionRef.current = await sessionPromise;
    } catch (err: any) {
      console.error("Session Init Error:", err);
      setError(err.message?.includes("Permission denied") 
        ? "Microphone access is required for the voice session." 
        : "AI initialization failed. Check your API key status.");
      setIsConnecting(false);
      stopSession();
    }
  };

  const stopSession = () => {
    setIsActive(false);
    setIsConnecting(false);
    setIsListening(false);
    
    // Stop tracks
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(t => t.stop());
      streamRef.current = null;
    }
    
    // Close session
    if (sessionRef.current) {
      try { sessionRef.current.close(); } catch(e) {}
      sessionRef.current = null;
    }
    
    // Stop all playing sources
    sourcesRef.current.forEach(s => {
      try { s.stop(); } catch(e) {}
    });
    sourcesRef.current.clear();
    nextStartTimeRef.current = 0;

    // Close output context
    if (audioContextRef.current) {
      if (audioContextRef.current.state !== 'closed') {
        audioContextRef.current.close().catch(console.error);
      }
      audioContextRef.current = null;
    }

    // Close input context
    if (inputAudioContextRef.current) {
      if (inputAudioContextRef.current.state !== 'closed') {
        inputAudioContextRef.current.close().catch(console.error);
      }
      inputAudioContextRef.current = null;
    }
  };

  const resetAuth = async () => {
    if (window.aistudio?.openSelectKey) {
      await window.aistudio.openSelectKey();
      setError(null);
    }
  };

  return (
    <div className="glass-card p-6 md:p-10 rounded-[2.5rem] border-blue-500/20 relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 rounded-full blur-3xl -mr-16 -mt-16"></div>
      
      <div className="flex items-center space-x-4 mb-6">
        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all ${isActive ? 'bg-emerald-500/20 text-emerald-400' : 'bg-blue-600/10 text-blue-400'}`}>
          {isActive ? <Volume2 className="animate-pulse" /> : <Mic />}
        </div>
        <div>
          <h4 className="text-xl font-black text-white">Live AI Founder</h4>
          <p className="text-[10px] text-blue-500 font-black uppercase tracking-widest">Voice Strategy Session</p>
        </div>
      </div>

      <p className="text-slate-400 text-sm mb-8 font-medium leading-relaxed">
        Speak directly to a voice clone of our founder, Sthembile, to discuss your vision in real-time. (English & isiZulu supported)
      </p>

      {error && (
        <div className="mb-6 p-6 bg-red-500/10 border border-red-500/20 rounded-2xl">
          <p className="text-red-400 text-[10px] font-black uppercase tracking-widest text-center mb-4">
            {error}
          </p>
          <button 
            onClick={resetAuth}
            className="w-full flex items-center justify-center space-x-2 text-[9px] font-black text-white uppercase tracking-[0.2em] bg-white/5 py-2 rounded-lg hover:bg-white/10 transition-all"
          >
             <Key className="w-3 h-3" />
             <span>Re-authorize Key</span>
          </button>
        </div>
      )}

      <button
        onClick={isActive ? stopSession : startSession}
        disabled={isConnecting}
        className={`w-full py-4 rounded-2xl font-black uppercase tracking-widest text-xs transition-all flex items-center justify-center space-x-3 ${
          isActive 
            ? 'bg-red-600 text-white hover:bg-red-500 shadow-xl shadow-red-600/20' 
            : 'bg-blue-600 text-white hover:bg-blue-500 shadow-xl shadow-blue-600/20'
        }`}
      >
        {isConnecting ? (
          <Loader2 className="w-4 h-4 animate-spin" />
        ) : isActive ? (
          <>
            <PhoneOff className="w-4 h-4" />
            <span>End Call</span>
          </>
        ) : (
          <>
            <Sparkles className="w-4 h-4" />
            <span>Start Voice Call</span>
          </>
        )}
      </button>

      {isActive && (
        <div className="mt-6 flex items-center justify-center space-x-2">
          <div className="flex space-x-1">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="w-1 h-3 bg-emerald-500 rounded-full animate-bounce" style={{ animationDelay: `${i * 0.15}s` }}></div>
            ))}
          </div>
          <span className="text-[10px] text-emerald-500 font-black uppercase tracking-widest">Live: Sthembile AI</span>
        </div>
      )}
    </div>
  );
};

export default LiveConsultant;
