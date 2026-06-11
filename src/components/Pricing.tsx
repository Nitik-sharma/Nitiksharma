import { ArrowRight, CheckCircle } from 'lucide-react';
import { PRICING_PACKAGES } from '../data';

interface PricingProps {
  isDarkMode: boolean;
}

export default function Pricing({ isDarkMode }: PricingProps) {
  return (
    <section id="pricing" className="py-24 sm:py-32 relative">
      
      {/* Background Soft Blobs */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className={`absolute bottom-1/3 right-10 h-72 w-72 rounded-full blur-3xl opacity-10 filter animate-pulse-glow ${
          isDarkMode ? 'bg-cyan-500' : 'bg-indigo-200'
        }`} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold font-display uppercase tracking-widest text-cyan-400 px-3 py-1 bg-cyan-500/10 rounded-full border border-cyan-500/20">
            Clear Flat-Rate Pricing
          </span>
          <h2 className={`font-display font-black text-3xl sm:text-5xl tracking-tight ${
            isDarkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Targeted Investment Packages
          </h2>
          <p className={`text-base ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Select an engineering tier optimized for your present operational limits and business priorities. Transparent specs with zero hidden costs.
          </p>
        </div>

        {/* Pricing Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16 items-start">
          {PRICING_PACKAGES.map((pkg) => (
            <div
              key={pkg.name}
              className={`rounded-3xl border relative transition-all duration-300 flex flex-col justify-between backdrop-blur-xl h-full ${
                pkg.isPopular
                  ? isDarkMode
                    ? 'bg-gradient-to-b from-white/10 to-white/5 border-cyan-500 shadow-cyan-950/25 shadow-2xl scale-[1.02] lg:-translate-y-2'
                    : 'bg-white/70 border-cyan-450 shadow-xl shadow-slate-100 scale-[1.02] lg:-translate-y-2'
                  : isDarkMode
                  ? 'bg-white/5 border-white/10'
                  : 'bg-white/40 border-slate-200/80 shadow-md shadow-slate-100'
              }`}
            >
              {/* Popular Glow Indicator Badge */}
              {pkg.isPopular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-[10px] font-black uppercase font-mono tracking-widest bg-gradient-to-r from-cyan-400 to-blue-600 text-white shadow-md">
                  Most Recommended Sprint
                </div>
              )}

              {/* Package Header Content */}
              <div className="p-6 sm:p-8 space-y-6">
                
                <div>
                  <h3 className={`font-display font-bold text-xl ${
                    isDarkMode ? 'text-white' : 'text-slate-900 font-extrabold'
                  }`}>
                    {pkg.name}
                  </h3>
                  <p className={`text-xs mt-2 leading-relaxed h-12 overflow-hidden ${
                    isDarkMode ? 'text-slate-400' : 'text-slate-500'
                  }`}>
                    {pkg.description}
                  </p>
                </div>

                {/* Price Display */}
                <div className="flex items-baseline gap-1 py-4 border-y border-white/10">
                  <span className={`text-[12px] font-mono font-bold ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>
                    USD
                  </span>
                  <span className={`font-display font-black text-4xl tracking-tight ${
                    isDarkMode ? 'text-white' : 'text-slate-950'
                  }`}>
                    ${pkg.price}
                  </span>
                  <span className={`text-xs font-mono font-semibold ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                    / Flat Custom Rate
                  </span>
                </div>

                {/* Scope specifics */}
                <div className="grid grid-cols-2 gap-4 text-xs font-mono font-semibold">
                  <div className={`p-2.5 rounded-xl border ${
                    isDarkMode ? 'bg-black/50 border-white/5' : 'bg-slate-50 border-slate-200/50'
                  }`}>
                    <span className="text-[10px] text-slate-500 block">DELIVERY</span>
                    <span className="text-cyan-400 font-bold">{pkg.deliveryTime}</span>
                  </div>
                  <div className={`p-2.5 rounded-xl border ${
                    isDarkMode ? 'bg-black/50 border-white/5' : 'bg-slate-50 border-slate-200/50'
                  }`}>
                    <span className="text-[10px] text-slate-500 block">REVISIONS</span>
                    <span className="text-cyan-400 font-bold">{pkg.revisions}</span>
                  </div>
                </div>

                {/* Deliverables checklist */}
                <div className="space-y-3 pt-2">
                  <span className={`text-[11px] font-mono font-bold uppercase tracking-wider block ${
                    isDarkMode ? 'text-slate-400' : 'text-slate-500'
                  }`}>
                    Contract Scope:
                  </span>
                  <ul className="space-y-2.5">
                    {pkg.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2 text-xs">
                        <CheckCircle size={14} className="text-cyan-400 shrink-0 mt-0.5" />
                        <span className={isDarkMode ? 'text-slate-300' : 'text-slate-700'}>
                          {feat}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* CTA Actions */}
              <div className="p-6 sm:p-8 border-t border-white/10">
                <a
                  href="#contact"
                  className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-black uppercase tracking-wider rounded-xl transition-all cursor-pointer ${
                    pkg.isPopular
                      ? 'bg-gradient-to-r from-cyan-450 to-blue-600 text-white hover:from-cyan-500 hover:to-blue-700 shadow-lg shadow-cyan-500/15'
                      : isDarkMode
                      ? 'bg-black/45 text-slate-300 hover:text-white hover:bg-white/10 border border-white/10'
                      : 'bg-slate-50 text-slate-700 border border-slate-200/80 hover:bg-slate-100'
                  }`}
                >
                  <span>Choose This Tier</span>
                  <ArrowRight size={13} />
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* Tailored Custom solutions footer */}
        <div className={`mt-12 p-6 sm:p-8 rounded-3xl border text-center backdrop-blur-xl ${
          isDarkMode 
            ? 'bg-white/5 border-white/10' 
            : 'bg-slate-100/50 border-slate-200/60'
        }`}>
          <h4 className={`font-display font-bold text-lg ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
            Need a Fully Customized Corporate Solution?
          </h4>
          <p className={`text-xs mt-1 max-w-2xl mx-auto ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            If you need enterprise integrations, hybrid PostgreSQL/MERN modules, machine-learning capabilities, or ongoing developer staff augmentation, let's schedule an NDA-guaranteed call.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-1 mt-3.5 text-xs font-bold text-cyan-450 hover:text-cyan-400 font-mono"
          >
            <span>Book a custom architectural consultation scope</span>
            <ArrowRight size={12} />
          </a>
        </div>

      </div>
    </section>
  );
}
