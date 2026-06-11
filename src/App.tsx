import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp, Terminal, Star, CheckCircle, Sparkles } from 'lucide-react';

// Subcomponents import
import Navbar from './components/Navbar';
import ResumeModal from './components/ResumeModal';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import WhyChooseMe from './components/WhyChooseMe';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Set system preferences or defaults
  useEffect(() => {
    // We default to true (Dark Theme) to maintain the premium dark look, 
    // but the user can toggle instantly!
    document.documentElement.classList.add('dark');
  }, []);

  // Sync state changes with DOM classes
  const toggleTheme = () => {
    setIsDarkMode((prev) => {
      const next = !prev;
      if (next) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      return next;
    });
  };

  // Track dynamic scroll analytics
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress(window.scrollY / totalScroll);
      }
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Simulation loader completion
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1300);
    return () => clearTimeout(timer);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`min-h-screen relative transition-colors duration-300 ${
      isDarkMode ? 'bg-[#05070a] text-slate-200' : 'bg-slate-50 text-slate-800'
    }`}>
      
      {/* Frosted glass ambient background blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className={`absolute top-[-10%] left-[-10%] w-[50%] h-[40%] rounded-full blur-[140px] transition-all duration-500 animate-pulse-glow-cyan ${
          isDarkMode ? 'bg-cyan-500/10' : 'bg-cyan-300/10'
        }`} />
        <div className={`absolute bottom-[-10%] right-[-10%] w-[50%] h-[40%] rounded-full blur-[140px] transition-all duration-500 animate-pulse-glow-purple ${
          isDarkMode ? 'bg-purple-500/10' : 'bg-purple-300/10'
        }`} />
      </div>

      {/* 1. Global Preloading Screen (AI compilation simulation for premium feel) */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="preloader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#05070a] text-white"
          >
            <div className="space-y-6 text-center max-w-sm px-6">
              <div className="flex justify-center gap-1 font-mono text-cyan-400 text-lg font-black tracking-tight">
                <span>&lt;</span>
                <span>Nitik.Dev</span>
                <span>/&gt;</span>
              </div>

              {/* Progress bar simulation */}
              <div className="h-[3px] w-48 mx-auto bg-slate-900 rounded-full overflow-hidden">
                <motion.div
                  initial={{ x: '-100%' }}
                  animate={{ x: '0%' }}
                  transition={{ duration: 1, ease: 'easeInOut' }}
                  className="h-full w-full bg-cyan-400 rounded-full"
                />
              </div>

              <div className="flex items-center justify-center gap-1.5 font-mono text-[10px] text-slate-500 tracking-wider">
                <Terminal size={12} className="animate-pulse text-cyan-400" />
                <span>compiling_frosted_glass_modules.tsx</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Pages Canvas Content */}
      {!isLoading && (
        <div className="relative z-10">
          
          {/* Header Navigation */}
          <Navbar 
            isDarkMode={isDarkMode} 
            toggleTheme={toggleTheme} 
            onOpenResume={() => setIsResumeOpen(true)}
            scrollProgress={scrollProgress}
          />

          {/* Section Sprints */}
          <main role="main">
            <Hero isDarkMode={isDarkMode} onOpenResume={() => setIsResumeOpen(true)} />
            <About isDarkMode={isDarkMode} />
            <Services isDarkMode={isDarkMode} />
            <Portfolio isDarkMode={isDarkMode} />
            <Skills isDarkMode={isDarkMode} />
            <Process isDarkMode={isDarkMode} />
            <Testimonials isDarkMode={isDarkMode} />
            <WhyChooseMe isDarkMode={isDarkMode} />
            <Pricing isDarkMode={isDarkMode} />
            <FAQ isDarkMode={isDarkMode} />
            <Contact isDarkMode={isDarkMode} />
          </main>

          {/* Footer Navigation */}
          <Footer isDarkMode={isDarkMode} />

          {/* 2. Interactive Print / Save PDF Resume Modal popup */}
          <AnimatePresence>
            {isResumeOpen && (
              <ResumeModal 
                isOpen={isResumeOpen} 
                onClose={() => setIsResumeOpen(false)} 
                isDarkMode={isDarkMode}
              />
            )}
          </AnimatePresence>

          {/* 3. Floating Scroll To Top Tool helper */}
          <AnimatePresence>
            {showScrollTop && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 10 }}
                onClick={handleScrollToTop}
                className="fixed bottom-6 right-6 z-40 p-3 rounded-full text-white bg-cyan-500 hover:bg-cyan-600 shadow-xl shadow-cyan-500/20 active:scale-95 transition-all cursor-pointer"
                aria-label="Scroll back to top"
              >
                <ArrowUp size={18} strokeWidth={2.5} />
              </motion.button>
            )}
          </AnimatePresence>

        </div>
      )}

    </div>
  );
}
