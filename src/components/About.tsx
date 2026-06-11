import { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { Award, Code, Compass, Zap, Flame, Calendar, RefreshCw } from 'lucide-react';
import { PERSONAL_INFO, generateMockGithubContributions } from '../data';

interface AboutProps {
  isDarkMode: boolean;
}

export default function About({ isDarkMode }: AboutProps) {
  const [gridSeed, setGridSeed] = useState(0);

  // Generate mock Github contributions data dynamically
  const contributions = useMemo(() => {
    return generateMockGithubContributions();
  }, [gridSeed]);

  const activeDays = useMemo(() => {
    return contributions.filter(c => c.level > 0).length;
  }, [contributions]);

  const totalCommits = useMemo(() => {
    return contributions.reduce((sum, item) => sum + (item.level === 0 ? 0 : item.level * 2 + 1), 0);
  }, [contributions]);

  const handleRefreshGrid = () => {
    setGridSeed(prev => prev + 1);
  };

  const highlights = [
    {
      icon: <Award className="text-cyan-400" size={24} />,
      title: "Senior Core Expertise",
      desc: "5+ Years of continuous freelance experience refining database pipelines & user state managers."
    },
    {
      icon: <Code className="text-cyan-400" size={24} />,
      title: "Pristine Coding Rules",
      desc: "Clean, self-annotated codebase architecture conforming to strict TypeScript & ES6+ standards."
    },
    {
      icon: <Compass className="text-cyan-400" size={24} />,
      title: "Startup Acceleration",
      desc: "I translate visual requirements into high-converting consumer systems that raise client sales."
    }
  ];

  const clientBenefits = [
    "No outsourced code — All modules are generated, secured, and checked by me directly.",
    "Comprehensive documentation logs supplied so future developers can easily scale up modules.",
    "Lighthouse-certified speeds ensuring minimal customer bounce drop-off on standard networks.",
    "Consistent, structured progress updates on Slack, Loom, or WhatsApp."
  ];

  return (
    <section 
      id="about" 
      className={`py-24 sm:py-32 relative ${
        isDarkMode ? 'bg-[#05070a]/35' : 'bg-slate-50/30'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold font-display uppercase tracking-widest text-cyan-400 px-3 py-1 bg-cyan-500/10 rounded-full border border-cyan-500/20">
            About Me & Code Standards
          </span>
          <h2 className={`font-display font-black text-3xl sm:text-5xl tracking-tight ${
            isDarkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Premium Engineering Built For Modern Systems
          </h2>
          <p className={`text-base sm:text-lg ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Bridging the gap between complex software logic frameworks and high-fidelity screen design.
          </p>
        </div>

        {/* Narrative & Highlights Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-16 items-start">
          
          {/* Bio Column */}
          <div className="lg:col-span-7 space-y-8">
            <h3 className={`font-display font-semibold text-2xl ${
              isDarkMode ? 'text-white' : 'text-slate-900'
            }`}>
              Let's build web platforms that scale.
            </h3>
            
            <p className={`text-base leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              {PERSONAL_INFO.detailedIntro}
            </p>

            <div className={`p-6 rounded-2xl border backdrop-blur-xl ${
              isDarkMode ? 'bg-white/5 border-white/10' : 'bg-white/40 border-slate-200/50 shadow-sm'
            }`}>
              <h4 className="font-display font-semibold text-sm text-cyan-400 uppercase tracking-wider mb-3">
                Why clients choose my code structure:
              </h4>
              <ul className="space-y-3">
                {clientBenefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm">
                    <span className="h-5 w-5 rounded-full bg-cyan-500/10 text-cyan-450 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                      ✓
                    </span>
                    <span className={isDarkMode ? 'text-slate-300' : 'text-slate-700'}>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Core Highlights Panel */}
          <div className="lg:col-span-5 space-y-6">
            {highlights.map((item, idx) => (
              <div 
                key={idx}
                className={`p-6 rounded-2xl border transition-all duration-200 backdrop-blur-xl cursor-pointer ${
                  isDarkMode 
                    ? 'bg-white/5 border-white/10 hover:border-cyan-500/30' 
                    : 'bg-white/40 border-slate-200 shadow-sm hover:shadow-md'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-xl shrink-0 ${
                    isDarkMode ? 'bg-[#05070a]/60 text-cyan-400' : 'bg-cyan-50 text-cyan-600'
                  }`}>
                    {item.icon}
                  </div>
                  <div>
                    <h4 className={`font-display font-bold text-base ${
                      isDarkMode ? 'text-slate-100' : 'text-slate-900'
                    }`}>
                      {item.title}
                    </h4>
                    <p className={`text-xs mt-1 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Dynamic Github Activity Block (Premium addition) */}
        <div className={`mt-16 p-6 sm:p-8 rounded-3xl border text-left overflow-x-auto backdrop-blur-lg ${
          isDarkMode 
            ? 'bg-white/5 border-white/10 shadow-lg' 
            : 'bg-white border-slate-200/85 shadow-md shadow-slate-100'
        }`}>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4 pb-4 border-b border-white/10 shrink-0">
            <div>
              <div className="flex items-center gap-2">
                <Flame size={18} className="text-cyan-400" />
                <h4 className={`font-display font-bold text-lg leading-none ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                  Continuous Code Delivery Track
                </h4>
              </div>
              <p className={`text-xs mt-1 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                Visualizing Nitik's GitHub commitment score — {totalCommits} commits over the last {activeDays} active days.
              </p>
            </div>
            <button
              onClick={handleRefreshGrid}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg border transition-all cursor-pointer ${
                isDarkMode 
                  ? 'border-white/10 hover:bg-white/10 text-slate-300' 
                  : 'border-slate-200 hover:bg-slate-50 text-slate-600 hover:text-slate-900'
              }`}
            >
              <RefreshCw size={12} />
              <span>Simulate Stream</span>
            </button>
          </div>

          {/* Representation Grid */}
          <div className="min-w-[650px] space-y-2">
            <div className="grid grid-flow-col gap-0.5 justify-start">
              {/* Loop weeks and render columns */}
              {Array.from({ length: 53 }).map((_, weekIdx) => (
                <div key={weekIdx} className="grid grid-rows-7 gap-0.5">
                  {contributions
                    .filter((c) => c.week === weekIdx)
                    .map((dayData, dayIdx) => (
                      <div
                        key={dayIdx}
                        className={`h-2.5 w-2.5 rounded-[1px] transition-colors ${
                          dayData.level === 0
                            ? isDarkMode
                              ? 'bg-white/5'
                              : 'bg-slate-200/60'
                            : dayData.level === 1
                            ? 'bg-cyan-950/40 text-cyan-400'
                            : dayData.level === 2
                            ? 'bg-cyan-800/60'
                            : dayData.level === 3
                            ? 'bg-cyan-600'
                            : 'bg-cyan-400'
                        }`}
                        title={`${dayData.level * 2 + 1} Commits, Week ${weekIdx}, Day ${dayIdx}`}
                      />
                    ))}
                </div>
              ))}
            </div>

            {/* Labels under Grid */}
            <div className="flex items-center justify-between text-[10px] font-mono text-slate-500">
              <div className="flex gap-4">
                <span>June 2025</span>
                <span>November 2025</span>
                <span>March 2026</span>
                <span>June 2026 (Active)</span>
              </div>
              <div className="flex items-center gap-1">
                <span>Less</span>
                <div className="h-2.5 w-2.5 rounded-[1px] bg-slate-900 border border-slate-800" />
                <div className="h-2.5 w-2.5 rounded-[1px] bg-cyan-950/40" />
                <div className="h-2.5 w-2.5 rounded-[1px] bg-cyan-800/60" />
                <div className="h-2.5 w-2.5 rounded-[1px] bg-cyan-600" />
                <div className="h-2.5 w-2.5 rounded-[1px] bg-cyan-400" />
                <span>More</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
