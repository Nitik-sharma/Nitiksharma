import { motion } from "motion/react";
import {
  X,
  Printer,
  Phone,
  Mail,
  Globe,
  Linkedin,
  Github,
  CheckCircle2,
} from "lucide-react";
import { PERSONAL_INFO, PROJECTS } from "../data";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  isDarkMode: boolean;
}

export default function ResumeModal({
  isOpen,
  onClose,
  isDarkMode,
}: ResumeModalProps) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className={`relative w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl ${
          isDarkMode
            ? "bg-slate-900 border border-slate-800"
            : "bg-white text-slate-800 border border-slate-200"
        }`}
      >
        {/* Modal Toolbar (Sticky) */}
        <div
          className={`p-4 flex items-center justify-between border-b print:hidden ${
            isDarkMode
              ? "bg-slate-950/80 border-slate-800"
              : "bg-slate-50 border-slate-200"
          }`}
        >
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span
              className={`text-xs font-mono font-medium ${isDarkMode ? "text-emerald-400" : "text-emerald-600"}`}
            >
              Interactive PDF / Print Engine
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all bg-emerald-500 hover:bg-emerald-600 text-white cursor-pointer active:scale-95"
            >
              <Printer size={14} />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className={`p-1.5 rounded-lg border transition-all cursor-pointer ${
                isDarkMode
                  ? "border-slate-800 bg-slate-900 text-slate-400 hover:text-white"
                  : "border-slate-200 bg-white text-slate-500 hover:text-slate-900"
              }`}
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {/* Printable Resume Canvas */}
        <div
          id="printable-resume-area"
          className={`p-8 sm:p-12 max-h-[80vh] overflow-y-auto print:max-h-full print:p-0 print:overflow-visible ${
            isDarkMode
              ? "bg-slate-900 text-slate-300"
              : "bg-white text-slate-800"
          }`}
        >
          {/* Print header — hidden on screen */}
          <div className="hidden print:block text-center text-xs text-slate-400 mb-6 font-mono border-b pb-4">
            Custom Portfolio Resume of Nitik Sharma — Generated dynamically via
            interactive applet.
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 min-h-[700px]">
            {/* ── Left Column ── */}
            <div className="md:col-span-1 space-y-8">
              {/* Avatar + Name */}
              <div className="text-center md:text-left">
                <div className="h-20 w-20 mx-auto md:mx-0 rounded-2xl flex items-center justify-center font-display font-semibold text-2xl text-white bg-gradient-to-br from-emerald-400 to-teal-600 shadow-xl shadow-emerald-500/10">
                  NS
                </div>
                <h1 className="mt-4 font-display font-bold text-2xl tracking-tight text-emerald-500">
                  {PERSONAL_INFO.name}
                </h1>
                <p
                  className={`text-xs font-mono font-medium mt-1 ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}
                >
                  {PERSONAL_INFO.title}
                </p>
              </div>

              {/* Contact */}
              <div className="space-y-3 pt-4 border-t border-slate-700/20">
                <h3
                  className={`text-xs font-mono uppercase tracking-wider font-bold ${isDarkMode ? "text-white" : "text-slate-900"}`}
                >
                  Contact &amp; Public Links
                </h3>
                <div className="space-y-2.5 text-xs">
                  <div className="flex items-center gap-2.5">
                    <Mail size={14} className="text-emerald-500 shrink-0" />
                    <span>gautamnitik2001@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Phone size={14} className="text-emerald-500 shrink-0" />
                    <span>+91 8708508021</span>
                  </div>
                  
                </div>
              </div>

              {/* Technical Skills */}
              <div className="space-y-3 pt-4 border-t border-slate-700/20">
                <h3
                  className={`text-xs font-mono uppercase tracking-wider font-bold ${isDarkMode ? "text-white" : "text-slate-900"}`}
                >
                  Technical Weapons
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    "HTML5",
                    "CSS3",
                    "JavaScript",
                    "React.js",
                    "Node.js",
                    "Express.js",
                    "MongoDB",
                    "Tailwind CSS",
                    "Firebase",
                    "JWT Auth",
                    "REST APIs",
                    "Socket.io",
                    "Cloudinary",
                    "Git & GitHub",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className={`text-[10px] font-mono px-2 py-0.5 rounded border ${
                        isDarkMode
                          ? "bg-slate-950 border-slate-800 text-slate-300"
                          : "bg-slate-50 border-slate-200 text-slate-700"
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Education & Credentials */}
              <div className="space-y-3 pt-4 border-t border-slate-700/20">
                <h3
                  className={`text-xs font-mono uppercase tracking-wider font-bold ${isDarkMode ? "text-white" : "text-slate-900"}`}
                >
                  Education &amp; Credentials
                </h3>
                <div className="space-y-4 text-xs">
                  {/* MCA */}
                  <div className="space-y-0.5">
                    <p
                      className={`font-bold text-[11px] ${isDarkMode ? "text-emerald-400" : "text-emerald-600"}`}
                    >
                      Master of Computer Applications (MCA)
                    </p>
                    <p
                      className={`font-medium ${isDarkMode ? "text-slate-200" : "text-slate-800"}`}
                    >
                    M.D  University / DPG Collage Gurgaon
                    </p>
                    <p
                      className={`text-[10px] ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}
                    >
                      2024 – 2026 &nbsp;·&nbsp; Post-Graduate Degree
                    </p>
                  </div>

                  {/* BCA */}
                  <div className="space-y-0.5">
                    <p
                      className={`font-bold text-[11px] ${isDarkMode ? "text-emerald-400" : "text-emerald-600"}`}
                    >
                      Bachelor of Computer Applications (BCA)
                    </p>
                    <p
                      className={`font-medium ${isDarkMode ? "text-slate-200" : "text-slate-800"}`}
                    >
                   M.D   University / Govt.collage ,Meham
                    </p>
                    <p
                      className={`text-[10px] ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}
                    >
                      2020 – 2023 &nbsp;·&nbsp; Under-Graduate Degree
                    </p>
                  </div>

                  {/* Certification */}
                  <div className="space-y-0.5">
                    <p
                      className={`font-bold text-[11px] ${isDarkMode ? "text-emerald-400" : "text-emerald-600"}`}
                    >
                      MERN Stack Certified Specialist
                    </p>
                    <p
                      className={`font-medium ${isDarkMode ? "text-slate-200" : "text-slate-800"}`}
                    >
                      Advanced Database Modeling Certification
                    </p>
                    <p
                      className={`text-[10px] ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}
                    >
                      Professional Certification Track
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Right Column ── */}
            <div className="md:col-span-2 space-y-8 md:border-l md:pl-8 border-slate-700/20">
              {/* Executive Summary */}
              <div className="space-y-2">
                <h2
                  className={`font-display font-bold text-lg ${isDarkMode ? "text-white" : "text-slate-950"}`}
                >
                  Executive Summary
                </h2>
                <p className="text-xs leading-relaxed">
                  Full-stack MERN developer specializing in secure,
                  high-performance web portals and high-conversion landing
                  assets. Focused on translating business goals into clean,
                  modular codebases — from accelerating API transactions and
                  securing route architectures to designing fully responsive,
                  accessible interfaces.
                </p>
              </div>

              {/* Projects */}
              <div className="space-y-4 pt-4 border-t border-slate-700/20">
                <h2
                  className={`font-display font-bold text-lg ${isDarkMode ? "text-white" : "text-slate-950"}`}
                >
                  Major Independent Projects
                </h2>

                <div className="space-y-5">
                  {PROJECTS.map((proj) => (
                    <div key={proj.id} className="space-y-1.5">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                        <h4
                          className={`text-sm font-bold ${isDarkMode ? "text-emerald-400" : "text-emerald-600"}`}
                        >
                          {proj.title}
                        </h4>
                        <span
                          className={`text-[10px] font-mono shrink-0 px-2 py-0.5 rounded-full ${
                            isDarkMode
                              ? "bg-slate-950 text-slate-400"
                              : "bg-slate-100 text-slate-500"
                          }`}
                        >
                          {proj.category}
                        </span>
                      </div>

                      <p className="text-xs">{proj.description}</p>

                      <div className="mt-2 pl-4 border-l-2 border-emerald-500/30 space-y-1">
                        <div className="text-[11px]">
                          <strong
                            className={
                              isDarkMode ? "text-slate-200" : "text-slate-800"
                            }
                          >
                            Key Achievement:{" "}
                          </strong>
                          {proj.metrics[0]}
                        </div>
                        <div className="text-[11px]">
                          <strong
                            className={
                              isDarkMode ? "text-slate-200" : "text-slate-800"
                            }
                          >
                            Approach:{" "}
                          </strong>
                          {proj.solution}
                        </div>
                      </div>

                      {/* Tech badges */}
                      <div className="flex flex-wrap gap-1 pt-1">
                        {proj.technologies.map((tech) => (
                          <span
                            key={tech}
                            className={`text-[9px] font-mono px-1.5 py-0.5 rounded border ${
                              isDarkMode
                                ? "bg-slate-950 border-slate-800 text-slate-400"
                                : "bg-slate-50 border-slate-200 text-slate-500"
                            }`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Client Value */}
              <div className="space-y-3 pt-4 border-t border-slate-700/20">
                <h2
                  className={`font-display font-bold text-lg ${isDarkMode ? "text-white" : "text-slate-950"}`}
                >
                  Client Conversion Value
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  {[
                    {
                      title: "100% Core Web Vitals",
                      body: "Lazy imports, compressed payloads, and slim CSS packages.",
                    },
                    {
                      title: "Surgical Coding Integrity",
                      body: "Strict schema types, clean Express routing, and scalable hooks.",
                    },
                    {
                      title: "High ROI Copywriting",
                      body: "Structuring text for high client engagement and clean navigation.",
                    },
                    {
                      title: "Direct Technical Support",
                      body: "Complimentary support with standard custom handover logs.",
                    },
                  ].map(({ title, body }) => (
                    <div key={title} className="flex items-start gap-2">
                      <CheckCircle2
                        size={14}
                        className="text-emerald-500 shrink-0 mt-0.5"
                      />
                      <div>
                        <strong
                          className={
                            isDarkMode ? "text-white" : "text-slate-900"
                          }
                        >
                          {title}:
                        </strong>
                        <p className="text-[10px] mt-0.5">{body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center text-[10px] text-slate-500 mt-12 pt-6 border-t font-mono">
            Available worldwide for contract agreements and high-fidelity
            project sprints.
          </div>
        </div>
      </motion.div>
    </div>
  );
}
