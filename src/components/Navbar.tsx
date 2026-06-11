import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Sun, Moon, Download, Briefcase, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

interface NavbarProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
  onOpenResume: () => void;
  scrollProgress: number;
}

export default function Navbar({ isDarkMode, toggleTheme, onOpenResume, scrollProgress }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeAnchor, setActiveAnchor] = useState('#home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'services', 'portfolio', 'process', 'pricing', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveAnchor(`#${section}`);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Process', href: '#process' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      id="main-nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? isDarkMode
            ? 'bg-[#05070a]/60 backdrop-blur-xl border-b border-white/10 shadow-lg'
            : 'bg-white/40 backdrop-blur-xl border-b border-black/5 shadow-md'
          : 'bg-transparent'
      }`}
    >
      {/* Scroll Progress Bar */}
      <div 
        id="scroll-progress-indicator"
        className="h-[3px] bg-cyan-400 origin-left transition-all duration-100"
        style={{ width: `${scrollProgress * 100}%` }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Status */}
          <div className="flex items-center gap-4">
            <a href="#home" className="flex flex-col">
              <span className="font-display font-bold text-xl tracking-tight flex items-center gap-1.5">
                <span className="text-cyan-400 font-extrabold text-2xl">&lt;</span>
                <span className={isDarkMode ? 'text-white' : 'text-slate-900'}>
                  Nitik<span className="text-cyan-400 font-bold"></span>
                </span>
                <span className="text-cyan-400 font-extrabold text-2xl">/&gt;</span>
              </span>
            </a>

            {/* Freelancer Availability Status Badge */}
            <div className="hidden lg:flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border bg-cyan-500/10 border-cyan-500/30 text-cyan-400">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <span>{PERSONAL_INFO.availability}</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav role="navigation" className="hidden md:flex items-center gap-1.5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-250 ${
                  activeAnchor === link.href
                    ? isDarkMode
                      ? 'text-cyan-400 bg-white/5 border border-white/10 font-semibold shadow-inner'
                      : 'text-cyan-600 bg-black/5 border border-black/5 font-semibold shadow-inner'
                    : isDarkMode
                    ? 'text-slate-400 hover:text-white hover:bg-slate-900/60'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/60'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-4">
            {/* Theme Toggle */}
            <button
              id="theme-toggle-btn"
              onClick={toggleTheme}
              className={`p-2 rounded-xl transition-all duration-200 border cursor-pointer ${
                isDarkMode
                  ? 'bg-slate-900 border-slate-800 text-amber-400 hover:text-white hover:bg-slate-800'
                  : 'bg-slate-50 border-slate-200 text-slate-700 hover:text-slate-900 hover:bg-slate-100'
              }`}
              aria-label="Toggle theme mode"
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Resume Button */}
            <button
              id="navbar-resume-download-btn"
              onClick={onOpenResume}
              className="flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-full text-white bg-gradient-to-r from-cyan-400 to-blue-600 hover:from-cyan-500 hover:to-blue-700 border border-white/10 cursor-pointer transition-all duration-250 active:scale-95 shadow-lg shadow-cyan-500/20"
            >
              <Download size={15} />
              <span>Resume</span>
            </button>
          </div>

          {/* Mobile Right Tools (Theme + Hamburger) */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-xl border ${
                isDarkMode
                  ? 'bg-slate-900 border-slate-800 text-amber-400'
                  : 'bg-slate-50 border-slate-200 text-slate-600'
              }`}
            >
              {isDarkMode ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-xl border ${
                isDarkMode
                  ? 'bg-slate-900 border-slate-800 text-white'
                  : 'bg-slate-50 border-slate-200 text-slate-900'
              }`}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className={`md:hidden border-t ${
              isDarkMode ? 'bg-[#05070a]/95 backdrop-blur-xl border-white/10' : 'bg-white/95 backdrop-blur-xl border-slate-100'
            }`}
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              <nav className="flex flex-col gap-1.5">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`px-3 py-2 rounded-lg text-base font-medium transition-colors ${
                      activeAnchor === link.href
                        ? 'text-cyan-400 font-semibold'
                        : isDarkMode
                        ? 'text-slate-400 hover:text-white hover:bg-slate-900'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                    }`}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>

              <div className="flex flex-col gap-2 pt-4 border-t border-slate-800/20">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onOpenResume();
                  }}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-white bg-gradient-to-r from-cyan-400 to-blue-600 font-semibold transition-all duration-200"
                >
                  <Download size={16} />
                  <span>Interactive Resume</span>
                </button>
                <div className="text-center text-[10px] text-slate-500 pt-2 font-mono">
                  {PERSONAL_INFO.availability}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
