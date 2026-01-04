
import React, { useState, useEffect } from 'react';
import { Mic, MicOff } from 'lucide-react';

interface VoiceInputProps {
  onTranscript: (text: string) => void;
  className?: string;
  size?: number;
}

const VoiceInput: React.FC<VoiceInputProps> = ({ onTranscript, className, size = 16 }) => {
  const [isListening, setIsListening] = useState(false);
  const [recognition, setRecognition] = useState<any>(null);

  useEffect(() => {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (SpeechRecognition) {
      const rec = new SpeechRecognition();
      rec.continuous = false;
      rec.interimResults = false;
      rec.lang = 'en-US';

      rec.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        if (transcript) {
          onTranscript(transcript);
        }
        setIsListening(false);
      };

      rec.onerror = () => setIsListening(false);
      rec.onend = () => setIsListening(false);

      setRecognition(rec);
    }
  }, [onTranscript]);

  const toggleListen = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (isListening) {
      recognition?.stop();
    } else {
      try {
        recognition?.start();
        setIsListening(true);
      } catch (err) {
        console.error("Speech recognition error:", err);
      }
    }
  };

  if (!recognition) return null;

  return (
    <button
      type="button"
      onClick={toggleListen}
      className={`flex items-center justify-center rounded-full transition-all ${
        isListening 
          ? 'bg-red-500 text-white animate-pulse' 
          : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10'
      } ${className}`}
      title={isListening ? "Stop listening" : "Start voice input"}
      aria-label={isListening ? "Stop voice input" : "Start voice input"}
    >
      {isListening ? <MicOff size={size} /> : <Mic size={size} />}
    </button>
  );
};

export default VoiceInput;
