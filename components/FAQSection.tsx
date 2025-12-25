
import React, { useState } from 'react';
import { ChevronDown, MessageCircleQuestion } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/5 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-6 text-left group"
      >
        <span className={`text-sm md:text-lg font-bold transition-colors ${isOpen ? 'text-blue-400' : 'text-slate-200 group-hover:text-white'}`}>
          {question}
        </span>
        <ChevronDown className={`w-5 h-5 text-slate-500 transition-transform duration-300 ${isOpen ? 'rotate-180 text-blue-400' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 pb-6' : 'max-h-0'}`}>
        <p className="text-slate-400 text-sm md:text-base leading-relaxed font-medium">
          {answer}
        </p>
      </div>
    </div>
  );
};

const FAQSection: React.FC = () => {
  const faqs = [
    {
      question: "Why do you charge a monthly management fee?",
      answer: "A website is a living asset. The monthly fee covers ultra-fast local cloud hosting, security patches, domain maintenance, and most importantly, it gives you a monthly credit for content updates. You send us the brief, and we handle the technical heavy lifting."
    },
    {
      question: "What does 'Zero Legacy Baggage' actually mean?",
      answer: "Many agencies still build on 10-year-old templates or bloated WordPress themes that are slow and vulnerable. We build natively using 2025 tech stacks like React and Next.js, meaning your site starts with perfect code and maximum speed."
    },
    {
      question: "Do you handle South African SEO specifically?",
      answer: "Yes. Local SEO (Google.co.za) is different. We optimize specifically for South African search intent, Newcastle/KZN regional keywords, and ensure your site loads fast on limited mobile data connections."
    },
    {
      question: "How long does a typical build take?",
      answer: "Because we are founder-led and use agile methodologies, a standard 'Essential' build takes 7-10 business days from discovery to launch. Enterprise tools and native apps depend on scope but are built in rapid 2-week sprints."
    },
    {
      question: "Can I upgrade my plan later?",
      answer: "Absolutely. Most clients start with 'Essential' and move to 'Professional' as their SEO needs grow. The transition is seamless with zero downtime."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto glass-card rounded-[3rem] p-8 md:p-16 border border-white/10">
      <div className="flex items-center space-x-3 mb-10">
        <MessageCircleQuestion className="text-blue-500 w-6 h-6" />
        <h4 className="text-xs font-black text-white uppercase tracking-widest">Knowledge Base</h4>
      </div>
      <div className="divide-y divide-white/5">
        {faqs.map((faq, i) => (
          <FAQItem key={i} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
