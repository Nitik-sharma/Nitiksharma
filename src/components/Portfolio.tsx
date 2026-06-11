import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Globe,
  Github,
  Terminal,
  ArrowUpRight,
  CheckCircle,
  AlertTriangle,
} from "lucide-react";
import { PROJECTS } from "../data";
import { Project } from "../types";

interface PortfolioProps {
  isDarkMode: boolean;
}

type ProjectFilter = "All" | "MERN" | "Frontend" | "React";

export default function Portfolio({ isDarkMode }: PortfolioProps) {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>("All");
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<Project | null>(
    null,
  );

  // Filter logic
  const filteredProjects = PROJECTS.filter((proj) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "React") {
      return proj.technologies.some((t) => t.toLowerCase().includes("react"));
    }
    return proj.category === activeFilter;
  });

  const filterTabs: { label: string; value: ProjectFilter }[] = [
    { label: "All Sprints", value: "All" },
    { label: "MERN Fullstack", value: "MERN" },
    { label: "React Apps", value: "React" },
    { label: "Frontend Design", value: "Frontend" },
  ];

  /**
   * Determines the primary CTA link and label for a project card.
   * Priority: liveLink (if non-empty & not "#") → githubLink
   */
  const getPrimaryLink = (
    proj: Project,
  ): { href: string; label: string; icon: "globe" | "github" } => {
    const hasLive =
      proj.liveLink && proj.liveLink !== "#" && proj.liveLink !== "";
    if (hasLive) {
      return { href: proj.liveLink, label: "Live Demo", icon: "globe" };
    }
    return { href: proj.githubLink, label: "Source Code", icon: "github" };
  };

  return (
    <section id="portfolio" className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-4">
            <span className="text-xs font-bold font-display uppercase tracking-widest text-cyan-400 px-3 py-1 bg-cyan-500/10 rounded-full border border-cyan-500/20">
              Production Code Portfolio
            </span>
            <h2
              className={`font-display font-black text-3xl sm:text-5xl tracking-tight leading-none ${
                isDarkMode ? "text-white" : "text-slate-900"
              }`}
            >
              Client Cast Case Studies
            </h2>
            <p
              className={`text-sm sm:text-base ${isDarkMode ? "text-slate-400" : "text-slate-600"}`}
            >
              Browse active production repositories and deployed prototypes
              demonstrating pristine CSS layout and high database processing
              speed.
            </p>
          </div>

          {/* Filter Toolbar */}
          <div className="flex flex-wrap gap-1.5 p-1 rounded-2xl border bg-black/40 border-white/10 backdrop-blur-xl shrink-0">
            {filterTabs.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setActiveFilter(tab.value)}
                className={`px-4 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                  activeFilter === tab.value
                    ? "bg-gradient-to-r from-cyan-400 to-blue-600 text-white shadow-md"
                    : isDarkMode
                      ? "text-slate-400 hover:text-white hover:bg-white/10"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/50"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((proj) => {
              const primaryLink = getPrimaryLink(proj);
              // Show a secondary button only when BOTH links are valid & different
              const hasLive =
                proj.liveLink && proj.liveLink !== "#" && proj.liveLink !== "";
              const hasGithub =
                proj.githubLink &&
                proj.githubLink !== "#" &&
                proj.githubLink !== "";
              const showBothButtons = hasLive && hasGithub;

              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  key={proj.id}
                  className={`rounded-3xl overflow-hidden border flex flex-col justify-between h-full backdrop-blur-xl ${
                    isDarkMode
                      ? "bg-white/5 border-white/10 hover:border-cyan-500/30"
                      : "bg-white border-slate-200 shadow-md hover:shadow-xl hover:border-slate-300"
                  }`}
                >
                  {/* 1. Visual Header */}
                  <div
                    className={`h-48 w-full relative bg-gradient-to-br ${proj.accentColor} p-6 flex flex-col justify-between text-white`}
                  >
                    {/* Decorative mesh grid */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none" />

                    <div className="flex items-center justify-between z-10">
                      <span className="text-[10px] font-mono tracking-widest uppercase bg-black/30 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10">
                        /{proj.category}-Tech Stack
                      </span>
                      <Terminal size={18} className="opacity-80" />
                    </div>

                    <div className="space-y-1 z-10">
                      <p className="text-[10px] font-mono opacity-80 leading-none">
                        CASE STUDY SPRINT
                      </p>
                      <h3 className="font-display font-black text-xl leading-tight text-white tracking-tight drop-shadow-sm">
                        {proj.title.split(":")[0]}
                      </h3>
                    </div>
                  </div>

                  {/* 2. Project Narrative Body */}
                  <div className="p-6 sm:p-8 space-y-6 flex-grow flex flex-col justify-between">
                    <div className="space-y-4">
                      <p
                        className={`text-sm leading-relaxed ${isDarkMode ? "text-slate-300" : "text-slate-700"}`}
                      >
                        {proj.description}
                      </p>

                      {/* Problem / Solution summary */}
                      <div className="space-y-1">
                        <div className="flex items-start gap-1.5 text-xs">
                          <AlertTriangle
                            size={13}
                            className="text-amber-500 shrink-0 mt-0.5"
                          />
                          <span
                            className={
                              isDarkMode ? "text-slate-400" : "text-slate-600"
                            }
                          >
                            <strong>Friction:</strong>{" "}
                            {proj.problem.slice(0, 72)}
                            {proj.problem.length > 72 ? "…" : ""}
                          </span>
                        </div>
                        <div className="flex items-start gap-1.5 text-xs">
                          <CheckCircle
                            size={13}
                            className="text-cyan-400 shrink-0 mt-0.5"
                          />
                          <span
                            className={
                              isDarkMode ? "text-slate-400" : "text-slate-600"
                            }
                          >
                            <strong>Solution:</strong>{" "}
                            {proj.solution.slice(0, 72)}
                            {proj.solution.length > 72 ? "…" : ""}
                          </span>
                        </div>
                      </div>

                      {/* Success Metrics */}
                      <div className="space-y-2 pt-2 border-t border-white/10">
                        <span
                          className={`text-[10px] uppercase font-mono font-bold tracking-wider block ${
                            isDarkMode ? "text-slate-500" : "text-slate-400"
                          }`}
                        >
                          Sprint Deliverable Win:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          <span
                            className={`text-[11px] px-2.5 py-1 rounded-lg border font-semibold ${
                              isDarkMode
                                ? "bg-cyan-500/5 border-cyan-500/20 text-cyan-400"
                                : "bg-cyan-50 border-cyan-200 text-cyan-700"
                            }`}
                          >
                            {proj.metrics[0]}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Tech stack + Action buttons */}
                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-1">
                        {proj.technologies.map((tech) => (
                          <span
                            key={tech}
                            className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                              isDarkMode
                                ? "bg-black/40 border border-white/10 text-slate-400"
                                : "bg-slate-50 border border-slate-200 text-slate-600"
                            }`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Action buttons footer */}
                      <div
                        className={`pt-4 border-t border-white/10 ${showBothButtons ? "grid grid-cols-3 gap-2" : "grid grid-cols-2 gap-3"}`}
                      >
                        {/* Case Details always shown */}
                        <button
                          onClick={() => setSelectedCaseStudy(proj)}
                          className={`flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-bold rounded-lg border transition-all cursor-pointer ${
                            isDarkMode
                              ? "bg-black/45 border-white/10 text-slate-300 hover:text-white hover:bg-white/10"
                              : "bg-slate-50 border-slate-200 text-slate-700 hover:text-slate-900 hover:bg-slate-100/50"
                          }`}
                        >
                          <span>Case Details</span>
                        </button>

                        {/* If both links exist → show GitHub as a secondary ghost button */}
                        {showBothButtons && (
                          <a
                            href={proj.githubLink}
                            target="_blank"
                            rel="noreferrer"
                            className={`flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-bold rounded-lg border transition-all cursor-pointer ${
                              isDarkMode
                                ? "bg-black/45 border-white/10 text-slate-300 hover:text-white hover:bg-white/10"
                                : "bg-slate-50 border-slate-200 text-slate-700 hover:text-slate-900 hover:bg-slate-100/50"
                            }`}
                          >
                            <Github size={12} />
                            <span>GitHub</span>
                          </a>
                        )}

                        {/* Primary CTA: Live Demo or Source Code */}
                        <a
                          href={primaryLink.href}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-bold rounded-lg text-white bg-gradient-to-r from-cyan-400 to-blue-600 hover:from-cyan-500 hover:to-blue-700 transition-all cursor-pointer text-center"
                        >
                          {primaryLink.icon === "globe" ? (
                            <Globe size={13} />
                          ) : (
                            <Github size={13} />
                          )}
                          <span>{primaryLink.label}</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Case Study Modal */}
        <AnimatePresence>
          {selectedCaseStudy && (
            <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className={`relative w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl border ${
                  isDarkMode
                    ? "bg-[#05070a] border-white/10"
                    : "bg-white border-slate-200 text-slate-800"
                }`}
              >
                {/* Modal Header */}
                <div
                  className={`p-6 sm:p-8 bg-gradient-to-r ${selectedCaseStudy.accentColor} text-white`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase font-mono bg-black/25 px-2 py-0.5 rounded">
                      Case Study Overview
                    </span>
                    <button
                      onClick={() => setSelectedCaseStudy(null)}
                      className="p-1 rounded-full bg-black/20 hover:bg-black/30 cursor-pointer text-white"
                    >
                      <XIcon size={16} />
                    </button>
                  </div>
                  <h3 className="font-display font-black text-2xl mt-4 leading-tight">
                    {selectedCaseStudy.title}
                  </h3>
                </div>

                {/* Modal Content */}
                <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
                  <div className="space-y-2">
                    <h4 className="font-display font-bold text-xs uppercase tracking-wider text-cyan-400 font-mono">
                      Client Business Lock & Friction:
                    </h4>
                    <p
                      className={`text-sm leading-relaxed ${isDarkMode ? "text-slate-300" : "text-slate-700"}`}
                    >
                      {selectedCaseStudy.problem}
                    </p>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-white/10">
                    <h4 className="font-display font-bold text-xs uppercase tracking-wider text-cyan-400 font-mono">
                      Development Blueprint:
                    </h4>
                    <p
                      className={`text-sm leading-relaxed ${isDarkMode ? "text-slate-300" : "text-slate-700"}`}
                    >
                      {selectedCaseStudy.solution}
                    </p>
                  </div>

                  <div className="space-y-3 pt-2 border-t border-white/10">
                    <h4 className="font-display font-bold text-xs uppercase tracking-wider text-cyan-400 font-mono">
                      Sprint Performance Milestones:
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      {selectedCaseStudy.metrics.map((metric, idx) => (
                        <li
                          key={idx}
                          className={`flex items-center gap-2 ${isDarkMode ? "text-slate-300" : "text-slate-700"}`}
                        >
                          <span className="text-cyan-400 font-bold shrink-0">
                            ✓
                          </span>
                          <span>{metric}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Modal Footer */}
                <div
                  className={`p-4 flex items-center justify-between border-t ${
                    isDarkMode
                      ? "bg-black/50 border-white/10"
                      : "bg-slate-50 border-slate-200"
                  }`}
                >
                  <span className="text-[10px] font-mono text-slate-500">
                    {selectedCaseStudy.technologies.slice(0, 3).join(" · ")}
                  </span>
                  <div className="flex items-center gap-2">
                    {/* Show GitHub in modal footer only if live link also exists */}
                    {selectedCaseStudy.githubLink &&
                      selectedCaseStudy.githubLink !== "#" &&
                      selectedCaseStudy.liveLink &&
                      selectedCaseStudy.liveLink !== "#" &&
                      selectedCaseStudy.liveLink !== "" && (
                        <a
                          href={selectedCaseStudy.githubLink}
                          target="_blank"
                          rel="noreferrer"
                          className={`flex items-center gap-1 px-3 py-2 text-xs font-bold rounded-lg border cursor-pointer transition-all ${
                            isDarkMode
                              ? "border-white/10 text-slate-300 hover:text-white hover:bg-white/10"
                              : "border-slate-200 text-slate-700 hover:bg-slate-100"
                          }`}
                        >
                          <Github size={12} />
                          <span>GitHub</span>
                        </a>
                      )}
                    {/* Primary action */}
                    {(() => {
                      const hasLive =
                        selectedCaseStudy.liveLink &&
                        selectedCaseStudy.liveLink !== "#" &&
                        selectedCaseStudy.liveLink !== "";
                      const href = hasLive
                        ? selectedCaseStudy.liveLink
                        : selectedCaseStudy.githubLink;
                      const label = hasLive ? "Live Demo" : "Source Code";
                      const Icon = hasLive ? Globe : Github;
                      if (!href || href === "#") return null;
                      return (
                        <a
                          href={href}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white rounded-lg bg-gradient-to-r from-cyan-400 to-blue-600 hover:from-cyan-500 hover:to-blue-700 cursor-pointer active:scale-95 transition-all"
                        >
                          <Icon size={12} />
                          <span>{label}</span>
                          <ArrowUpRight size={12} />
                        </a>
                      );
                    })()}
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

// Inline X icon
function XIcon({ size, className }: { size: number; className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}
