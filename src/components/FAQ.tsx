import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { FAQS } from '../data';

interface FAQProps {
  isDarkMode: boolean;
}

export default function FAQ({ isDarkMode }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section 
      id="faq" 
      className={`py-24 sm:py-32 relative ${
        isDarkMode ? 'bg-[#05070a]/35' : 'bg-slate-50/30'
      }`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header Block */}
        <div className="text-center space-y-4 mb-16">
          <span className="text-xs font-bold font-display uppercase tracking-widest text-cyan-400 px-3 py-1 bg-cyan-500/10 rounded-full border border-cyan-500/20">
            Answers To Core Friction Points
          </span>
          <h2 className={`font-display font-black text-3xl sm:text-5xl tracking-tight ${
            isDarkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Frequently Asked Queries
          </h2>
          <p className={`text-base ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Review my upfront pricing policies, security arrangements, and routine client communication pipelines before booking your onboarding call.
          </p>
        </div>

        {/* FAQs list accordion */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden backdrop-blur-xl ${
                  isOpen
                    ? isDarkMode
                      ? 'bg-white/10 border-cyan-500/30 shadow-md shadow-cyan-950/10'
                      : 'bg-white/60 border-cyan-400 shadow-md'
                    : isDarkMode
                    ? 'bg-white/5 border-white/10 hover:border-cyan-500/20'
                    : 'bg-white/40 border-slate-200 shadow-sm hover:border-slate-300'
                }`}
              >
                {/* Trigger Button */}
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full flex items-center justify-between p-5 text-left cursor-pointer select-none"
                >
                  <span className={`font-display font-bold text-sm sm:text-base ${
                    isOpen
                      ? 'text-cyan-400'
                      : isDarkMode
                      ? 'text-slate-100 hover:text-white'
                      : 'text-slate-800 hover:text-slate-950'
                  }`}>
                    {faq.question}
                  </span>
                  <span className="text-cyan-400 shrink-0 ml-3">
                    {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </span>
                </button>

                {/* Body Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className={`px-5 pb-5 pt-1 text-xs sm:text-sm leading-relaxed border-t ${
                        isDarkMode ? 'text-slate-300 border-white/10' : 'text-slate-600 border-slate-100'
                      }`}>
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
