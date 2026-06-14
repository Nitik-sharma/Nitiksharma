import { useState, FormEvent } from 'react';
import { Mail, MessageSquare, Linkedin, Github, Send, CheckCircle2, AlertCircle, PhoneCall } from 'lucide-react';

interface ContactProps {
  isDarkMode: boolean;
}

export default function Contact({ isDarkMode }: ContactProps) {
  // Form State
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [projectTier, setProjectTier] = useState('standard');
  const [message, setMessage] = useState('');
  
  // UX state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setSubmitError("");

  // Validation
  if (!name.trim()) {
    setSubmitError("Please supply your professional name.");
    return;
  }

  if (!email.trim() || !email.includes("@")) {
    setSubmitError("Please supply a valid corporate email address.");
    return;
  }

  if (!message.trim()) {
    setSubmitError("Please outline your general project parameters.");
    return;
  }

  setIsSubmitting(true);

  try {
    const formData = new FormData();

    formData.append("name", name);
    formData.append("email", email);
    formData.append("company", company);
    formData.append("projectTier", projectTier);
    formData.append("message", message);

    formData.append("_subject", "New Project Inquiry");
    formData.append("_captcha", "false");

    const response = await fetch(
      "https://formsubmit.co/ajax/gautamnitik2001@gmail.com",
      {
        method: "POST",
        body: formData,
      }
    );

    const result = await response.json();

    if (result.success) {
      setIsSuccess(true);

      // Reset form
      setName("");
      setEmail("");
      setCompany("");
      setMessage("");
      setProjectTier("basic");
    } else {
      setSubmitError("Failed to send message. Please try again.");
    }
  } catch (error) {
    console.error(error);
    setSubmitError("Something went wrong. Please try again.");
  } finally {
    setIsSubmitting(false);
  }
};

  const contactMethods = [
    {
      icon: <Mail className="text-cyan-400" size={20} />,
      label: "Direct Inquiries Email",
      value: "gautamnitik2001@gmail.com",
      href: "mailto:gautamnitik2001@gmail.com",
    },
    {
      icon: <PhoneCall className="text-cyan-400" size={20} />,
      label: "Instant WhatsApp Direct",
      value: "+91 8708508021",
      href: "https://wa.me/918708508021?text=Hi%20Nitik,%20I%20saw%20your%20freelance%20portfolio%20and%20want%2520to%20discuss%20a%20project%20sprint.",
    },
    {
      icon: <Linkedin className="text-cyan-400" size={20} />,
      label: "LinkedIn Professional",
      value: "linkedin",
      href: "https://www.linkedin.com/in/nitik-sharma-774b6922a/",
    },
    {
      icon: <Github className="text-cyan-400" size={20} />,
      label: "GitHub Repositories",
      value: "github",
      href: "https://github.com/Nitik-sharma",
    },
  ];

  return (
    <section id="contact" className="py-24 sm:py-32 relative text-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <span className="text-xs font-bold font-display uppercase tracking-widest text-cyan-400 px-3 py-1 bg-cyan-500/10 rounded-full border border-cyan-500/20">
            Inbound Client Registration
          </span>
          <h2
            className={`font-display font-black text-3xl sm:text-5xl tracking-tight ${
              isDarkMode ? "text-white" : "text-slate-900"
            }`}
          >
            Secure Your Development Sprint
          </h2>
          <p
            className={`text-base ${isDarkMode ? "text-slate-400" : "text-slate-600"}`}
          >
            Ready to scale up your web conversions? Fill out my secure
            diagnostic form below or reach me directly on my channels.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column - Contact Details */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h3
                className={`font-display font-bold text-2xl ${
                  isDarkMode ? "text-slate-100" : "text-slate-900"
                }`}
              >
                Let's scope your database or applet objectives.
              </h3>
              <p
                className={`text-sm leading-relaxed ${isDarkMode ? "text-slate-400" : "text-slate-600"}`}
              >
                I respond to all custom bids and diagnostic scopes within 12
                business hours. Standard quotes are produced free of charge.
                NDAs are completed immediately upon request.
              </p>
            </div>

            {/* Quick Contact Links */}
            <div className="space-y-4 pt-4 border-t border-white/10">
              {contactMethods.map((chan, idx) => (
                <a
                  key={idx}
                  href={chan.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`flex items-start gap-4 p-4 rounded-2xl border transition-all duration-150 backdrop-blur-xl ${
                    isDarkMode
                      ? "bg-white/5 border-white/10 hover:bg-white/10 hover:border-cyan-500/25"
                      : "bg-white border-slate-200/80 shadow-sm hover:shadow-md hover:border-slate-300"
                  }`}
                >
                  <div
                    className={`p-2.5 rounded-xl shrink-0 ${
                      isDarkMode
                        ? "bg-black/40 text-cyan-400 border border-white/5"
                        : "bg-cyan-50"
                    }`}
                  >
                    {chan.icon}
                  </div>
                  <div className="overflow-hidden">
                    <span
                      className={`text-[10px] uppercase font-mono tracking-wider block font-bold ${
                        isDarkMode ? "text-slate-500" : "text-slate-400"
                      }`}
                    >
                      {chan.label}
                    </span>
                    <span
                      className={`text-sm font-semibold truncate block ${
                        isDarkMode
                          ? "text-slate-200 hover:text-cyan-400"
                          : "text-slate-800 hover:text-emerald-600"
                      }`}
                    >
                      {chan.value}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right Column - Interactive Form Sheet */}
          <div className="lg:col-span-7">
            <div
              className={`p-6 sm:p-10 rounded-3xl border backdrop-blur-2xl ${
                isDarkMode
                  ? "bg-white/5 border-white/10 shadow-2xl"
                  : "bg-white border-slate-200/85 shadow-xl shadow-slate-100"
              }`}
            >
              {isSuccess ? (
                /* Interactive Success Canvas */
                <div className="text-center py-12 space-y-6">
                  <div className="mx-auto h-16 w-16 rounded-full bg-cyan-500/10 text-cyan-400 flex items-center justify-center animate-bounce">
                    <CheckCircle2 size={36} />
                  </div>
                  <div className="space-y-2">
                    <h4
                      className={`font-display font-bold text-xl ${isDarkMode ? "text-white" : "text-slate-900"}`}
                    >
                      Inquiry Scoped Successfully!
                    </h4>
                    <p
                      className={`text-xs sm:text-sm max-w-md mx-auto ${isDarkMode ? "text-slate-400" : "text-slate-600"}`}
                    >
                      Thank you for submitting your project specs. Nitik Sharma
                      has been notified. I will review your database
                      architecture needs and reach out within 12 business hours.
                    </p>
                  </div>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-cyan-400 to-blue-600 hover:from-cyan-500 hover:to-blue-700 transition-all cursor-pointer"
                  >
                    Send another query
                  </button>
                </div>
              ) : (
                /* Interactive Form Elements */
                <form
                 
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  {submitError && (
                    <div className="p-4 rounded-xl flex items-center gap-2.5 text-xs text-rose-500 bg-rose-500/10 border border-rose-500/20">
                      <AlertCircle size={14} className="shrink-0" />
                      <span>{submitError}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label
                        className={`text-xs font-bold font-mono uppercase ${isDarkMode ? "text-slate-400" : "text-slate-600"}`}
                      >
                        Your Name *
                      </label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        value={name}
                        name="name"
                        onChange={(e) => setName(e.target.value)}
                        className={`w-full p-3 text-sm rounded-xl border outline-none transition-all ${
                          isDarkMode
                            ? "bg-black/40 border-white/10 text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/30"
                            : "bg-slate-50 border-slate-200 text-slate-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-505/30"
                        }`}
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        className={`text-xs font-bold font-mono uppercase ${isDarkMode ? "text-slate-400" : "text-slate-600"}`}
                      >
                        Corporate Email *
                      </label>
                      <input
                        type="email"
                        placeholder="john@company.com"
                        value={email}
                        name="email"
                        onChange={(e) => setEmail(e.target.value)}
                        className={`w-full p-3 text-sm rounded-xl border outline-none transition-all ${
                          isDarkMode
                            ? "bg-black/40 border-white/10 text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/30"
                            : "bg-slate-50 border-slate-200 text-slate-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/30"
                        }`}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label
                        className={`text-xs font-bold font-mono uppercase ${isDarkMode ? "text-slate-400" : "text-slate-600"}`}
                      >
                        Company / Brand Name
                      </label>
                      <input
                        type="text"
                        placeholder="NexaGlobal Ltd"
                        value={company}
                        name="company"
                        onChange={(e) => setCompany(e.target.value)}
                        className={`w-full p-3 text-sm rounded-xl border outline-none transition-all ${
                          isDarkMode
                            ? "bg-black/40 border-white/10 text-white focus:border-cyan-500"
                            : "bg-slate-50 border-slate-200 text-slate-800 focus:border-cyan-500"
                        }`}
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        className={`text-xs font-bold font-mono uppercase ${isDarkMode ? "text-slate-400" : "text-slate-600"}`}
                      >
                        Target Budget Scope
                      </label>
                      <select
                        value={projectTier}
                        onChange={(e) => setProjectTier(e.target.value)}
                        name="projectTier"
                        className={`w-full p-3 text-sm rounded-xl border outline-none transition-all cursor-pointer ${
                          isDarkMode
                            ? "bg-black/40 border-white/10 text-white focus:border-cyan-500"
                            : "bg-slate-50 border-slate-200 text-slate-800 focus:border-cyan-500"
                        }`}
                      >
                        <option value="basic">
                          Growth Landing Page Scope (~$500)
                        </option>
                        <option value="standard">
                          React Applet Portal Integrations (~$1,300)
                        </option>
                        <option value="premium">
                          Enterprise MERN Database Systems (~$2,500+)
                        </option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label
                      className={`text-xs font-bold font-mono uppercase ${isDarkMode ? "text-slate-400" : "text-slate-600"}`}
                    >
                      Introduce Your Project Goals *
                    </label>
                    <textarea
                      rows={4}
                      name="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="My company wants to overhaul our manual credit schedules or integrate Socket.io chat pipelines..."
                      className={`w-full p-3 text-sm rounded-xl border outline-none transition-all resize-none ${
                        isDarkMode
                          ? "bg-black/40 border-white/10 text-white focus:border-cyan-500"
                          : "bg-slate-50 border-slate-200 text-slate-800 focus:border-cyan-500"
                      }`}
                    />
                  </div>

                  <input type="hidden" name="_captcha" value="false" />
                  <input
                    type="hidden"
                    name="_subject"
                    value="New Project Inquiry from Portfolio"
                  />
                  <input type="hidden" name="_template" value="table" />

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 py-4 rounded-xl text-sm font-bold tracking-wide text-white bg-gradient-to-r from-cyan-400 to-blue-600 hover:from-cyan-500 hover:to-blue-700 transition-all duration-200 active:scale-98 cursor-pointer shadow-md shadow-cyan-500/10 disabled:opacity-50"
                  >
                    <span>
                      {isSubmitting
                        ? "Securing Package Encryption..."
                        : "Lock Milestone and Send Specs"}
                    </span>
                    <Send size={14} />
                  </button>

                  <p className="text-[10px] text-center text-slate-500 font-mono">
                    Form submits securely via state mock. Rest assured, your
                    message transmits.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
