import { motion } from 'motion/react';
import { ArrowRight, HelpCircle } from 'lucide-react';
import { WORKFLOW } from '../data';

interface ProcessProps {
  isDarkMode: boolean;
}

export default function Process({ isDarkMode }: ProcessProps) {
  return (
    <section 
      id="process" 
      className={`py-24 sm:py-32 relative ${
        isDarkMode ? 'bg-[#05070a]/35' : 'bg-slate-50/30'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold font-display uppercase tracking-widest text-cyan-400 px-3 py-1 bg-cyan-500/10 rounded-full border border-cyan-500/20">
            Transparent Workflow Pipeline
          </span>
          <h2 className={`font-display font-black text-3xl sm:text-5xl tracking-tight ${
            isDarkMode ? 'text-white' : 'text-slate-900'
          }`}>
            The Six-Step Delivery Blueprint
          </h2>
          <p className={`text-base ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            I do not build based on guesses. Every project follows a vetted, systematic conversion roadmap targeting concrete business goals.
          </p>
        </div>

        {/* Process Roadmap pipeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {WORKFLOW.map((item) => (
            <div
              key={item.step}
              className={`p-6 sm:p-8 rounded-3xl border relative overflow-hidden transition-all duration-200 backdrop-blur-xl hover:-translate-y-1 ${
                isDarkMode
                  ? 'bg-white/5 border-white/10 hover:border-cyan-500/35'
                  : 'bg-white border-slate-200/80 shadow-md shadow-slate-100 hover:shadow-lg'
              }`}
            >
              
              {/* Dynamic decorative huge watermarked step index */}
              <div className={`absolute -right-4 -top-8 font-display font-black text-9xl tracking-tighter select-none pointer-events-none opacity-5 ${
                isDarkMode ? 'text-white' : 'text-slate-300'
              }`}>
                0{item.step}
              </div>

              {/* Step indicator */}
              <div className="space-y-4 relative z-10 font-sans">
                <span className="inline-flex items-center justify-center font-mono text-xs font-black h-8 w-8 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-600 text-white shadow-md shadow-cyan-500/15">
                  0{item.step}
                </span>

                <h3 className={`font-display font-bold text-xl ${
                  isDarkMode ? 'text-slate-100' : 'text-slate-900'
                }`}>
                  {item.title}
                </h3>
                
                <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  {item.description}
                </p>

                {/* Micro Actions items */}
                <div className="pt-4 border-t border-white/10 space-y-2">
                  <span className={`text-[10px] uppercase font-mono font-bold tracking-wider block ${
                    isDarkMode ? 'text-slate-500' : 'text-slate-400'
                  }`}>
                    Action Milestones:
                  </span>
                  <ul className="space-y-1.5 text-xs">
                    {item.details.map((det, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-1.5">
                        <span className="text-cyan-400 font-bold shrink-0">✓</span>
                        <span className={isDarkMode ? 'text-slate-300' : 'text-slate-700'}>
                          {det}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

            </div>
          ))}
        </div>

        {/* Floating schedule call hint */}
        <div className="text-center mt-12 font-sans">
          <p className="text-xs text-slate-500 font-mono">
            Each phase includes direct code syncups via GitHub pull-requests. Ready to begin?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 mt-3 text-sm font-bold text-cyan-455 hover:text-cyan-400 transition-colors font-mono"
          >
            <span>Lock in your onboarding calendar call</span>
            <ArrowRight size={13} />
          </a>
        </div>

      </div>
    </section>
  );
}
