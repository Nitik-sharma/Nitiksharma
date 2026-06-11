import { motion } from 'motion/react';
import { Code2, Database, Zap, Cpu, Sparkles, Wrench, Shield, ArrowUpRight } from 'lucide-react';
import { SERVICES } from '../data';

interface ServicesProps {
  isDarkMode: boolean;
}

// Map database icons string to Lucide React component instance safely
function getServiceIcon(iconName: string) {
  switch (iconName) {
    case 'Code2':
      return <Code2 className="text-cyan-400" size={24} />;
    case 'Database':
      return <Database className="text-cyan-400" size={24} />;
    case 'Zap':
      return <Zap className="text-cyan-400" size={24} />;
    case 'Cpu':
      return <Cpu className="text-cyan-400" size={24} />;
    case 'Sparkles':
      return <Sparkles className="text-cyan-400" size={24} />;
    case 'Wrench':
      return <Wrench className="text-cyan-400" size={24} />;
    default:
      return <Shield className="text-cyan-400" size={24} />;
  }
}

export default function Services({ isDarkMode }: ServicesProps) {
  return (
    <section id="services" className="py-24 sm:py-32 relative">
      
      {/* Background radial soft gradient */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full blur-3xl opacity-10 ${
          isDarkMode ? 'bg-purple-500' : 'bg-cyan-200'
        }`} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold font-display uppercase tracking-widest text-cyan-400 px-3 py-1 bg-cyan-500/10 rounded-full border border-cyan-500/20">
            Premium Engineering Actions
          </span>
          <h2 className={`font-display font-black text-3xl sm:text-5xl tracking-tight ${
            isDarkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Comprehensive High-ROI Services
          </h2>
          <p className={`text-base sm:text-lg ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Each service is fine-tuned to solve specific digital friction points and maximize your client metrics.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {SERVICES.map((srv) => (
            <div
              key={srv.id}
              className={`p-6 sm:p-8 rounded-3xl border flex flex-col justify-between transition-all duration-300 backdrop-blur-xl transform hover:-translate-y-1 ${
                isDarkMode
                  ? 'bg-white/5 border-white/10 hover:border-cyan-500/30'
                  : 'bg-white/40 border-slate-200 shadow-md hover:shadow-xl hover:border-slate-300'
              }`}
            >
              {/* Header element */}
              <div className="space-y-6">
                
                <div className="flex items-center justify-between">
                  <div className={`p-3.5 rounded-2xl ${
                    isDarkMode ? 'bg-black/40 border border-white/10' : 'bg-cyan-50'
                  }`}>
                    {getServiceIcon(srv.iconName)}
                  </div>
                  <div className="text-right">
                    <span className={`text-[10px] uppercase font-mono font-bold tracking-wider block ${
                      isDarkMode ? 'text-slate-500' : 'text-slate-400'
                    }`}>
                      Starter Price
                    </span>
                    <span className="font-display font-black text-lg text-cyan-400">
                      ${srv.starterPrice}
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className={`font-display font-bold text-xl ${
                    isDarkMode ? 'text-white' : 'text-slate-900'
                  }`}>
                    {srv.title}
                  </h3>
                  <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    {srv.description}
                  </p>
                </div>

                {/* Persuasive Business Benefit */}
                <div className={`p-4 rounded-xl border border-dashed text-xs ${
                  isDarkMode 
                    ? 'bg-cyan-500/5 border-cyan-500/20 text-slate-300' 
                    : 'bg-cyan-50 border-cyan-200 text-slate-700'
                }`}>
                  <strong className="text-cyan-400 font-mono font-bold block mb-1">
                    CLIENT ROI IMPACT:
                  </strong>
                  {srv.businessBenefit}
                </div>

                {/* Key Deliverables list */}
                <div className="space-y-2.5 pt-2">
                  <span className={`text-[11px] font-mono font-semibold uppercase tracking-wider block ${
                    isDarkMode ? 'text-slate-400' : 'text-slate-500'
                  }`}>
                    What is Included:
                  </span>
                  <ul className="space-y-2">
                    {srv.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs">
                        <span className="text-cyan-400 font-bold mt-0.5">✓</span>
                        <span className={isDarkMode ? 'text-slate-300' : 'text-slate-700'}>
                          {feat}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Action Button at footer of card */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <a
                  href="#contact"
                  className={`w-full inline-flex items-center justify-between px-4 py-2.5 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                    isDarkMode
                      ? 'bg-black/40 text-slate-300 border border-white/10 hover:text-white hover:bg-white/10'
                      : 'bg-slate-50 text-slate-700 border border-slate-200 hover:text-slate-950'
                  }`}
                >
                  <span>Book this service</span>
                  <ArrowUpRight size={14} className="text-cyan-400" />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
