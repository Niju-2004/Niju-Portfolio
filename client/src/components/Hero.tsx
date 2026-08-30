import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  Terminal, 
  ArrowRight, 
  Code2, 
  Bot, 
  Server, 
  Database
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { STATIC_PROFILE } from '../data/staticFallback';

interface HeroProps {
  onOpenTerminal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenTerminal }) => {
  const roles = [
    ".NET Full Stack Developer",
    "ASP.NET Core & Angular Engineer",
    "AI-Assisted Software Builder",
    "Google ADK & Cloud Certified"
  ];
  
  const [roleIndex, setRoleIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setRoleIndex((prev) => (prev + 1) % roles.length);
        setFade(true);
      }, 300);
    }, 3200);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-grid-pattern">
      {/* Ambient background glows - matching Niju's Personal Dashboard */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-brand-rose/20 to-brand-violet/20 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-10 w-[300px] h-[300px] bg-brand-rose/15 rounded-full blur-[90px] pointer-events-none -z-10 animate-pulse-slow" />
      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-brand-violet/15 rounded-full blur-[100px] pointer-events-none -z-10 animate-pulse-slow" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Company & Role Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs sm:text-sm font-medium mb-6 backdrop-blur-md shadow-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="w-2 h-2 rounded-full bg-emerald-400 -ml-3.5" />
          <span>Software Engineer at <b className="text-white">Infosys Limited</b></span>
          <span className="text-slate-500">•</span>
          <span className="text-brand-pink font-semibold">Open to Opportunities</span>
        </div>

        {/* Main Name Heading */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-4">
          Hi, I'm <span className="gradient-text">{STATIC_PROFILE.name}</span>
        </h1>

        {/* Dynamic Rotating Role Tagline */}
        <div className="h-10 sm:h-12 flex items-center justify-center mb-6">
          <div
            className={`text-xl sm:text-2xl md:text-3xl font-semibold text-slate-200 transition-opacity duration-300 flex items-center gap-2 ${
              fade ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <span className="text-brand-pink font-mono">&gt;</span>
            <span>{roles[roleIndex]}</span>
          </div>
        </div>

        {/* Bio summary */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-400 leading-relaxed mb-8">
          Architecting resilient enterprise backends with <b className="text-slate-200">ASP.NET Core & C#</b>, building reactive web interfaces with <b className="text-slate-200">Angular & React</b>, and supercharging developer velocity using <b className="text-slate-200">Claude Code, GitHub Copilot & Google ADK</b>.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
          <a
            href="#projects"
            className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white gradient-rose-violet hover:opacity-95 shadow-lg shadow-brand-rose/25 transition-all hover:scale-105 active:scale-95"
          >
            <span>Explore Projects</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <button
            onClick={onOpenTerminal}
            className="flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-mono font-medium text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-brand-violet/50 shadow-sm transition-all hover:scale-105 active:scale-95"
          >
            <Terminal className="w-4 h-4 text-brand-pink" />
            <span>Launch CLI Sandbox</span>
          </button>

          <a
            href="#contact"
            className="flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium text-slate-300 bg-white/5 hover:bg-white/10 border border-white/10 transition-all hover:text-white"
          >
            <Mail className="w-4 h-4 text-slate-400" />
            <span>Contact Me</span>
          </a>
        </div>

        {/* Social and Profile Links */}
        <div className="flex items-center justify-center gap-4 text-slate-400 mb-12">
          <a
            href={STATIC_PROFILE.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:text-white hover:border-white/30 transition-all hover:-translate-y-0.5"
            aria-label="GitHub Profile"
          >
            <GithubIcon className="w-5 h-5" />
          </a>
          <a
            href={STATIC_PROFILE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:text-blue-400 hover:border-blue-400/30 transition-all hover:-translate-y-0.5"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon className="w-5 h-5" />
          </a>
          <a
            href={`mailto:${STATIC_PROFILE.email}`}
            className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:text-brand-pink hover:border-brand-pink/30 transition-all hover:-translate-y-0.5"
            aria-label="Send Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>

        {/* Highlight Stats Chips */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto">
          <div className="glass-panel p-4 rounded-xl text-left border-l-2 border-l-brand-rose">
            <div className="flex items-center gap-2 text-brand-pink text-xs font-mono mb-1">
              <Server className="w-3.5 h-3.5" />
              <span>EXPERIENCE</span>
            </div>
            <div className="text-xl font-bold text-white">Software Eng.</div>
            <div className="text-xs text-slate-400">Infosys Enterprise .NET</div>
          </div>

          <div className="glass-panel p-4 rounded-xl text-left border-l-2 border-l-brand-violet">
            <div className="flex items-center gap-2 text-brand-violet text-xs font-mono mb-1">
              <Code2 className="w-3.5 h-3.5" />
              <span>PROJECTS</span>
            </div>
            <div className="text-xl font-bold text-white">8+ Shipped</div>
            <div className="text-xs text-slate-400">Full-Stack & AI Systems</div>
          </div>

          <div className="glass-panel p-4 rounded-xl text-left border-l-2 border-l-purple-500">
            <div className="flex items-center gap-2 text-purple-400 text-xs font-mono mb-1">
              <Bot className="w-3.5 h-3.5" />
              <span>AI TOOLING</span>
            </div>
            <div className="text-xl font-bold text-white">Agentic AI</div>
            <div className="text-xs text-slate-400">Google ADK & Copilot</div>
          </div>

          <div className="glass-panel p-4 rounded-xl text-left border-l-2 border-l-indigo-500">
            <div className="flex items-center gap-2 text-indigo-400 text-xs font-mono mb-1">
              <Database className="w-3.5 h-3.5" />
              <span>EDUCATION</span>
            </div>
            <div className="text-xl font-bold text-white">B.E. CSE</div>
            <div className="text-xs text-slate-400">CGPA: 7.42 (Mepco Schlenk)</div>
          </div>
        </div>
      </div>
    </section>
  );
};

