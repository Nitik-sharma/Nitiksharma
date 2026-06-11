import { PERSONAL_INFO } from '../data';

interface FooterProps {
  isDarkMode: boolean;
}

export default function Footer({ isDarkMode }: FooterProps) {
  const year = new Date().getFullYear();

  const sectionLinks = [
    { label: "Home", href: "#home" },
    { label: "About Core Info", href: "#about" },
    { label: "Services Program", href: "#services" },
    { label: "Portfolio Grid", href: "#portfolio" },
    { label: "Process Roadmap", href: "#process" },
    { label: "Tier Pricing", href: "#pricing" },
    { label: "FAQ Desk", href: "#faq" },
    { label: "Inbound Scope Sheet", href: "#contact" }
  ];

  return (
    <footer className={`border-t py-12 sm:py-16 backdrop-blur-md ${
      isDarkMode 
        ? 'bg-[#05070a]/45 border-white/5 text-slate-500' 
        : 'bg-white/40 border-slate-100 text-slate-400'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-b border-white/5 pb-8 mb-8 shrink-0">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <span className="font-display font-bold text-lg tracking-tight flex items-center gap-1.5 justify-center md:justify-start">
              <span className="text-cyan-400 font-extrabold">&lt;</span>
              <span className={isDarkMode ? 'text-white' : 'text-slate-900'}>
                Nitik<span className="text-cyan-400 font-bold"></span>
              </span>
              <span className="text-cyan-400 font-extrabold">/&gt;</span>
            </span>
            <p className="text-xs max-w-sm mx-auto md:mx-0 leading-relaxed text-center md:text-left">
              High-ROI web applications engineering. Creating clean, responsive, conversion-focused custom modules using MongoDB, Express, React, and Node.js.
            </p>
          </div>

          {/* Links Grid Col */}
          <div className="md:col-span-7">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-center md:text-left">
              <div className="space-y-3">
                <span className={`text-[11px] font-mono font-bold uppercase tracking-wider block ${
                  isDarkMode ? 'text-slate-400' : 'text-slate-600'
                }`}>
                  Core Index
                </span>
                <ul className="space-y-2 text-xs">
                  {sectionLinks.slice(0, 4).map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        className={`transition-colors ${
                          isDarkMode ? 'text-slate-500 hover:text-cyan-400' : 'text-slate-505 hover:text-cyan-600'
                        }`}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3">
                <span className={`text-[11px] font-mono font-bold uppercase tracking-wider block ${
                  isDarkMode ? 'text-slate-400' : 'text-slate-600'
                }`}>
                  Operations Matrix
                </span>
                <ul className="space-y-2 text-xs">
                  {sectionLinks.slice(4).map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        className={`transition-colors ${
                          isDarkMode ? 'text-slate-500 hover:text-cyan-400' : 'text-slate-505 hover:text-cyan-600'
                        }`}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3 col-span-2 sm:col-span-1">
                <span className={`text-[11px] font-mono font-bold uppercase tracking-wider block ${
                  isDarkMode ? 'text-slate-400' : 'text-slate-600'
                }`}>
                  Legal & Certification
                </span>
                <p className="text-[10px] leading-relaxed max-w-[200px] mx-auto sm:mx-0">
                  Copyright © {year} {PERSONAL_INFO.name}. All project mockups protected by client NDAs.
                </p>
              </div>
            </div>
          </div>

        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-mono">
          <p className="text-center sm:text-left">
            Crafted for startups, salons,Restaurants, agencies, and online brands.
          </p>
          <p className="flex items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
            <span>ISO Developer Compliance System Enabled</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
