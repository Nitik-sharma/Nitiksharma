import { motion } from 'motion/react';
import { ShieldAlert, Cpu, Sparkles, Terminal, Code2 } from 'lucide-react';

interface SkillsProps {
  isDarkMode: boolean;
}

export default function Skills({ isDarkMode }: SkillsProps) {
  const skillCategories = [
    {
      category: "Frontend Core & Responsive Engine",
      skills: [
        { name: "React.js", percentage: 95 },
        { name: "Tailwind CSS", percentage: 98 },
        { name: "HTML5 & Semantic Markup", percentage: 95 },
        { name: "CSS3 Fluid StyleSheets", percentage: 92 },
        { name: "JavaScript (ES6+ Core)", percentage: 94 }
      ]
    },
    {
      category: "MERN Backend & Dynamic Databases",
      skills: [
        { name: "Node.js Server Sprints", percentage: 92 },
        { name: "Express.js Routing Systems", percentage: 95 },
        { name: "MongoDB Collections Design", percentage: 88 },
        { name: "Socket.io Persistence Channels", percentage: 86 }
      ]
    },
    {
      category: "Security & Cloud Integration Assets",
      skills: [
        { name: "JWT Authentication Tokens", percentage: 94 },
        { name: "REST APIs Architecture Map", percentage: 96 },
        { name: "Firebase Client Deployment", percentage: 90 },
        { name: "Cloudinary Compression Engine", percentage: 85 },
        { name: "Git & Collaborative GitHub Sprints", percentage: 92 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold font-display uppercase tracking-widest text-cyan-400 px-3 py-1 bg-cyan-500/10 rounded-full border border-cyan-500/20">
            Technical Weapons Inventory
          </span>
          <h2 className={`font-display font-black text-3xl sm:text-5xl tracking-tight ${
            isDarkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Professional Skills Metrics
          </h2>
          <p className={`text-base ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            My development capabilities are divided into concrete specialized disciplines to keep your platform fast, durable, and clean.
          </p>
        </div>

        {/* Skills Division categories */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16">
          {skillCategories.map((cat, idx) => (
            <div
              key={idx}
              className={`p-6 sm:p-8 rounded-3xl border backdrop-blur-xl ${
                isDarkMode
                  ? 'bg-white/5 border-white/10 hover:border-cyan-500/25'
                  : 'bg-white border-slate-200/80 shadow-md shadow-slate-100'
              }`}
            >
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-slate-700/10">
                <div className={`p-2 rounded-lg ${
                  isDarkMode ? 'bg-black/40 text-cyan-400 border border-white/5' : 'bg-cyan-50 text-cyan-600'
                }`}>
                  <Terminal size={16} />
                </div>
                <h3 className={`font-display font-bold text-base ${
                  isDarkMode ? 'text-slate-200' : 'text-slate-800 font-bold'
                }`}>
                  {cat.category}
                </h3>
              </div>

              {/* Progress listing */}
              <div className="space-y-5">
                {cat.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className={`font-semibold ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                        {skill.name}
                      </span>
                      <span className="font-mono text-cyan-400 font-bold">
                        {skill.percentage}%
                      </span>
                    </div>

                    {/* Interactive progress tracks bar */}
                    <div className={`h-2.5 w-full rounded-full overflow-hidden ${
                      isDarkMode ? 'bg-black/50' : 'bg-slate-100'
                    }`}>
                      <div 
                        className="h-full bg-gradient-to-r from-cyan-450 to-blue-500 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

        {/* Footer social summary badges */}
        <div className={`mt-12 p-6 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 border text-center sm:text-left backdrop-blur-xl ${
          isDarkMode 
            ? 'bg-white/5 border-white/10' 
            : 'bg-cyan-50/20 border-cyan-100 shadow-sm'
        }`}>
          <div className="flex items-center gap-3 justify-center sm:justify-start">
            <span className="h-2 w-2 rounded-full bg-cyan-400 animate-ping shrink-0" />
            <p className="text-xs">
              <strong className={isDarkMode ? 'text-slate-200' : 'text-slate-800'}>Regular Sprint Delivery: </strong>
              I constantly benchmark our JS performance using Chrome audit profiles.
            </p>
          </div>
          <p className="text-[10px] font-mono text-cyan-400 font-bold">
            ★ MERN Stack Certified Developer
          </p>
        </div>

      </div>
    </section>
  );
}
