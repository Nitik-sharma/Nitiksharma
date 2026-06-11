import { motion } from 'motion/react';
import { Truck, Code, HeartHandshake, Eye, CheckCircle, Smartphone } from 'lucide-react';

interface WhyChooseMeProps {
  isDarkMode: boolean;
}

export default function WhyChooseMe({ isDarkMode }: WhyChooseMeProps) {
  const assets = [
    {
      icon: <Truck className="text-cyan-400" size={24} />,
      title: "Fast Delivery & Execution",
      desc: "Strict adherence to agreed milestones. Utilizing pre-built modular code grids allows me to hand over websites far faster than heavy multi-person agencies."
    },
    {
      icon: <Code className="text-cyan-400" size={24} />,
      title: "Clean Code & Strict Types",
      desc: "Ensuring zero spaghetti code. Written with strict TypeScript modeling, modular ES6 architectures, and clean Express routing schemas."
    },
    {
      icon: <Eye className="text-cyan-400" size={24} />,
      title: "SEO-Optimized Crawling",
      desc: "On-page metadata setup paired with dynamic Google structured schema blocks (LocalBusiness / Products JSON-LD), letting search engines instantly position you."
    },
    {
      icon: <Smartphone className="text-cyan-400" size={24} />,
      title: "100% Responsive Grid",
      desc: "Tested thoroughly across actual iOS, Android, and macOS/Windows browser viewports to guarantee pixel-perfect layout alignment."
    },
    {
      icon: <HeartHandshake className="text-cyan-400" size={24} />,
      title: "Post-Launch Retainers",
      desc: "Up to 60 days of direct backup support. Optional monthly SLA retainers are available covering continuous diagnostic checking, backups, and security audits."
    },
    {
      icon: <CheckCircle className="text-cyan-400" size={24} />,
      title: "Professional Communication",
      desc: "Direct, mature client interface. Upfront pricing, weekly progress walkthroughs via Slack/Loom, and immediate resolution tracking."
    }
  ];

  return (
    <section 
      id="why-choose-me" 
      className={`py-24 sm:py-32 relative ${
        isDarkMode ? 'bg-[#05070a]/35' : 'bg-slate-50/30'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold font-display uppercase tracking-widest text-cyan-400 px-3 py-1 bg-cyan-500/10 rounded-full border border-cyan-500/20">
            Engineering Competitive Edge
          </span>
          <h2 className={`font-display font-black text-3xl sm:text-5xl tracking-tight ${
            isDarkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Why Businesses Choose Nitik
          </h2>
          <p className={`text-base ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            I eliminate the communication layers and technical confusion of hiring large, sluggish agencies by delivering direct senior full-stack execution.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {assets.map((item, index) => (
            <div
              key={index}
              className={`p-6 sm:p-8 rounded-3xl border flex flex-col justify-between transition-all duration-200 backdrop-blur-xl hover:-translate-y-0.5 ${
                isDarkMode
                  ? 'bg-white/5 border-white/10 hover:border-cyan-500/25'
                  : 'bg-white border-slate-200/80 shadow-md shadow-slate-100'
              }`}
            >
              <div className="space-y-4">
                <div className={`p-3 w-fit rounded-2xl ${
                  isDarkMode ? 'bg-black/40 text-cyan-400 border border-white/5' : 'bg-cyan-50'
                }`}>
                  {item.icon}
                </div>

                <h3 className={`font-display font-bold text-lg ${
                  isDarkMode ? 'text-white' : 'text-slate-900'
                }`}>
                  {item.title}
                </h3>

                <p className={`text-xs sm:text-sm leading-relaxed ${
                  isDarkMode ? 'text-slate-400' : 'text-slate-600'
                }`}>
                  {item.desc}
                </p>
              </div>

              {/* Verified badge */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[10px] font-mono font-medium text-cyan-400">
                <span>Code Protocol Compliance</span>
                <span>ENG-100%</span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
