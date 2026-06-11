import { motion } from 'motion/react';
import { ArrowUpRight, CheckCircle, Flame, Star, Code2, Users } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

interface HeroProps {
  isDarkMode: boolean;
  onOpenResume: () => void;
}

export default function Hero({ isDarkMode, onOpenResume }: HeroProps) {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* Background Graphic Blobs */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className={`absolute top-1/4 right-1/4 h-72 w-72 sm:h-96 sm:w-96 rounded-full blur-3xl opacity-20 filter animate-pulse-glow-cyan ${
          isDarkMode ? 'bg-cyan-500' : 'bg-cyan-300'
        }`} />
        <div className={`absolute bottom-1/4 left-1/4 h-72 w-72 sm:h-96 sm:w-96 rounded-full blur-3xl opacity-15 filter animate-pulse-glow-purple ${
          isDarkMode ? 'bg-purple-500' : 'bg-purple-300'
        }`} style={{ animationDelay: '4s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Copy (Left 7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Availability pill & Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wide border bg-cyan-500/10 border-cyan-500/30 text-cyan-400 justify-center">
              <Flame size={12} className="animate-bounce" />
              <span>Accelerating Startups & Small Businesses</span>
            </div>

            <h1 className="font-display font-extrabold text-4xl sm:text-6xl tracking-tight leading-none">
              <span className={isDarkMode ? 'text-white' : 'text-slate-900'}>
                I Build Web Apps That
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500">
                Multiply Your Revenue
              </span>
            </h1>

            <p className={`text-base sm:text-xl font-sans leading-relaxed max-w-2xl ${
              isDarkMode ? 'text-slate-400' : 'text-slate-600'
            }`}>
              {PERSONAL_INFO.shortIntro} Specialized MERN Stack & Front-End layouts designed with elegant coding patterns and highly converting sales copywriting.
            </p>

            {/* CTA GRID */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start pt-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-white rounded-xl bg-gradient-to-r from-cyan-400 to-blue-600 hover:from-cyan-500 hover:to-blue-700 shadow-lg shadow-cyan-500/20 active:scale-98 transition-all duration-200 cursor-pointer border border-white/10"
              >
                <span>Hire Me</span>
                <ArrowUpRight size={18} />
              </a>
              <a
                href="#portfolio"
                className={`inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold rounded-xl border transition-all duration-200 active:scale-98 cursor-pointer ${
                  isDarkMode
                    ? 'bg-white/5 border-white/10 text-slate-300 hover:text-white hover:bg-white/10 backdrop-blur-md'
                    : 'bg-white border-slate-200 text-slate-700 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                <span>View Projects</span>
              </a>
              <button
                onClick={onOpenResume}
                className={`inline-flex items-center justify-center gap-2 px-6 py-4 text-base font-semibold rounded-xl border transition-all duration-200 active:scale-98 cursor-pointer ${
                  isDarkMode
                    ? 'bg-white/5 border-white/10 text-slate-400 hover:text-white hover:bg-white/10 backdrop-blur-md'
                    : 'bg-white border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                <span>View Interactive Resume</span>
              </button>
            </div>

            {/* Trust Social Proof Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-8 border-t border-slate-700/10">
              <div className="flex items-center gap-2 justify-center sm:justify-start">
                <CheckCircle size={16} className="text-cyan-400" />
                <span className={`text-xs font-medium font-mono ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  Complimentary Support
                </span>
              </div>
              <div className="flex items-center gap-2 justify-center sm:justify-start">
                <CheckCircle size={16} className="text-cyan-400" />
                <span className={`text-xs font-medium font-mono ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  Lighthouse optimized
                </span>
              </div>
              <div className="flex items-center gap-2 justify-center sm:justify-start col-span-2 sm:col-span-1">
                <CheckCircle size={16} className="text-cyan-400" />
                <span className={`text-xs font-medium font-mono ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  Clean, modular code
                </span>
              </div>
            </div>
          </div>

          {/* Premium Right Side Visual Asset Card (Right 5 Cols) */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0 flex justify-center">
            
            {/* Underlaying Glow Block */}
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-purple-500/15 rounded-3xl blur-2xl z-0 scale-95" />

            {/* Visual Glassmorphic Widget */}
            <div className={`relative z-10 w-full max-w-sm rounded-3xl p-6 sm:p-8 shadow-2xl ${
              isDarkMode ? 'glass-panel-dark' : 'glass-panel-light'
            }`}>
              
              {/* Card Header Profile */}
              <div className="flex items-center gap-4 border-b border-white/10 pb-4">
                <div className="h-16 w-16 rounded-2xl flex items-center justify-center text-white font-bold text-xl bg-gradient-to-tr from-cyan-400 to-blue-600 shadow-md">
                  NS
                </div>
                <div>
                  <h4 className={`font-display font-bold text-lg leading-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                    Nitik Sharma
                  </h4>
                  <p className="text-xs text-cyan-400 font-mono font-medium mt-0.5">
                    MERN & Front-End Expert
                  </p>
                </div>
              </div>

              {/* Real Value Metrics Column */}
              <div className="space-y-4 pt-6">
                
                {PERSONAL_INFO.metrics.map((metric, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <span className={`text-xs font-medium ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                      {metric.label}
                    </span>
                    <span className="font-display font-extrabold text-lg text-cyan-400">
                      {metric.value}
                    </span>
                  </div>
                ))}

              </div>

              {/* Star Rating Badge floating */}
              <div className={`absolute -top-4 -right-4 px-4 py-2.5 rounded-2xl flex items-center gap-1.5 shadow-lg border backdrop-blur-xl ${
                isDarkMode ? 'bg-[#05070a]/90 border-white/10 text-cyan-400' : 'bg-white border-slate-150 text-cyan-700'
              }`}>
                <Star size={14} className="text-amber-400 fill-amber-400 animate-pulse" />
                <span className="text-xs font-extrabold font-mono text-cyan-400">
                  5.0
                </span>
                <span className={`text-[10px] font-mono ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                  Stars Score
                </span>
              </div>

              {/* Mini Terminal Accent Code floating */}
              <div className={`absolute -bottom-6 -left-6 hidden sm:block p-3.5 rounded-xl text-left shadow-lg border font-mono text-[10px] backdrop-blur-xl ${
                isDarkMode 
                  ? 'bg-[#05070a]/90 border-white/10 text-cyan-400 shadow-cyan-950/20' 
                  : 'bg-slate-900 border-slate-700 text-cyan-300'
              }`}>
                <p className="text-slate-500 text-[9px]">// Core Philosophy</p>
                <p>const buildProduct = () =&gt; &#123;</p>
                <p className="pl-3">return UX + Speed + BusinessValue;</p>
                <p>&#125;;</p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
