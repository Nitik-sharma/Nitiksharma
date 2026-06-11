import { Star, MessageSquare } from 'lucide-react';
import { TESTIMONIALS } from '../data';

interface TestimonialsProps {
  isDarkMode: boolean;
}

export default function Testimonials({ isDarkMode }: TestimonialsProps) {
  return (
    <section id="testimonials" className="py-24 sm:py-32 relative">
      
      {/* Decorative vector grid backdrop */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <div className={`absolute left-0 right-0 top-0 bottom-0 ${
          isDarkMode 
            ? 'bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:32px_32px]' 
            : 'bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:32px_32px]'
        }`} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold font-display uppercase tracking-widest text-cyan-400 px-3 py-1 bg-cyan-500/10 rounded-full border border-cyan-500/20">
            Real Client Validation
          </span>
          <h2 className={`font-display font-black text-3xl sm:text-5xl tracking-tight ${
            isDarkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Vouched By Deployed Businesses
          </h2>
          <p className={`text-base ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Read detailed business reviews from product managers and startup founders who scaled their operations utilizing my React & MERN codebases.
          </p>
        </div>

        {/* Testimonials Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {TESTIMONIALS.map((test) => (
            <div
              key={test.id}
              className={`p-6 sm:p-8 rounded-3xl border flex flex-col justify-between transition-all duration-200 backdrop-blur-xl hover:scale-[1.01] ${
                isDarkMode
                  ? 'bg-white/5 border-white/10'
                  : 'bg-white border-slate-200/85 shadow-md shadow-slate-100'
              }`}
            >
              <div className="space-y-6">
                
                {/* Header Profile */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3.5">
                    {/* Generates a nice visual initial placeholder */}
                    <div className="h-12 w-12 rounded-full flex items-center justify-center text-white bg-gradient-to-tr from-cyan-400 to-blue-600 font-bold text-sm tracking-tight scale-100">
                      {test.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h4 className={`font-display font-bold text-base ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                        {test.name}
                      </h4>
                      <p className={`text-xs ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                        {test.role} at <strong className="text-cyan-400">{test.company}</strong>
                      </p>
                    </div>
                  </div>
                  
                  <div className="hidden sm:flex items-center gap-1">
                    {Array.from({ length: test.rating }).map((_, i) => (
                      <Star key={i} size={12} className="text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                </div>

                {/* Testimonial Core Copy */}
                <p className={`text-sm leading-relaxed italic ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                  "{test.text}"
                </p>

              </div>

              {/* Verified Badge indicator with Linked Case Study */}
              <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                <span className="text-[10px] text-cyan-400 font-bold flex items-center gap-1">
                  ✓ Verified Client Review
                </span>
                <span className={`text-[10px] ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>
                  Case Completed: {test.projectCompleted}
                </span>
              </div>

            </div>
          ))}
        </div>

        {/* Satisfaction footnote */}
        <div className="text-center mt-12 pb-4">
          <p className="text-xs text-slate-500 font-mono">
            Direct reference contact details can be supplied upon signing NDA parameters.
          </p>
        </div>

      </div>
    </section>
  );
}
