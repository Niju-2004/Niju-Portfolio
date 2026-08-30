import React from 'react';
import { User, MapPin, GraduationCap, Building, Sparkles, CheckCircle2, Terminal } from 'lucide-react';
import { STATIC_PROFILE } from '../data/staticFallback';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-lg bg-brand-rose/10 text-brand-pink border border-brand-rose/20">
            <User className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">About Me</h2>
            <p className="text-xs sm:text-sm text-slate-400 font-mono">ENGINEERING PROFILE & BACKGROUND</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mt-8">
          {/* Left Main Bio Card */}
          <div className="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-2xl space-y-5 border border-white/10">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <span>Full-Stack Engineer with Enterprise Craftsmanship</span>
              <Sparkles className="w-4 h-4 text-brand-pink" />
            </h3>

            <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
              I am a results-oriented <b>.NET Full Stack Developer</b> currently working as a <b>Software Engineer at Infosys Limited</b>. I specialize in designing and engineering scalable, secure enterprise web applications using <b>ASP.NET Core Web API, C#, Angular, Entity Framework Core, SQL Server, and MySQL</b>.
            </p>

            <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
              Having undergone rigorous enterprise engineering training at <b>Infosys Mysore</b>, I practice layered clean architecture (Controller, Service, Repository, and Data Access layers), robust error handling, and test-driven Agile development.
            </p>

            <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
              Beyond traditional full-stack development, I am deeply invested in <b>AI-assisted software engineering</b>. I regularly use <b>Claude Code, GitHub Copilot, and Google Agent Development Kit (ADK)</b> to accelerate feature delivery, write cleaner code, generate APIs, and integrate intelligent vector search / RAG pipelines.
            </p>

            <div className="pt-4 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-brand-pink mt-0.5 shrink-0" />
                <span className="text-xs sm:text-sm text-slate-300">Clean Layered & Microservice Architecture</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-brand-violet mt-0.5 shrink-0" />
                <span className="text-xs sm:text-sm text-slate-300">Reactive Angular & Modern React SPAs</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-purple-400 mt-0.5 shrink-0" />
                <span className="text-xs sm:text-sm text-slate-300">Enterprise Database & Schema Design</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span className="text-xs sm:text-sm text-slate-300">AI Agent Development & RAG Workflows</span>
              </div>
            </div>
          </div>

          {/* Right Highlights & Fast Facts */}
          <div className="lg:col-span-5 space-y-4">
            {/* Quick Details Card */}
            <div className="glass-panel p-6 rounded-2xl border border-white/10 space-y-4">
              <h4 className="text-sm font-bold text-slate-300 uppercase tracking-wider font-mono">
                Key Details
              </h4>

              <div className="space-y-3.5 text-sm">
                <div className="flex items-center justify-between pb-2.5 border-b border-white/5">
                  <span className="text-slate-400 flex items-center gap-2">
                    <Building className="w-4 h-4 text-brand-pink" /> Company
                  </span>
                  <span className="font-semibold text-white">Infosys Limited</span>
                </div>

                <div className="flex items-center justify-between pb-2.5 border-b border-white/5">
                  <span className="text-slate-400 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-brand-violet" /> Location
                  </span>
                  <span className="text-slate-200">Sivakasi, Tamil Nadu, India</span>
                </div>

                <div className="flex items-center justify-between pb-2.5 border-b border-white/5">
                  <span className="text-slate-400 flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-purple-400" /> Degree
                  </span>
                  <span className="text-slate-200">B.E. Computer Science</span>
                </div>

                <div className="flex items-center justify-between pb-2.5 border-b border-white/5">
                  <span className="text-slate-400">College</span>
                  <span className="text-slate-200">Mepco Schlenk Eng. College</span>
                </div>

                <div className="flex items-center justify-between pb-2.5 border-b border-white/5">
                  <span className="text-slate-400">Academic Score</span>
                  <span className="px-2 py-0.5 rounded bg-brand-rose/10 text-brand-pink font-mono font-bold text-xs">
                    CGPA 7.42
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Primary Languages</span>
                  <span className="text-slate-200 font-mono text-xs">C#, TypeScript, Python, SQL</span>
                </div>
              </div>
            </div>

            {/* Architecture Stack Callout */}
            <div className="glass-panel p-5 rounded-2xl border border-brand-rose/20 bg-gradient-to-r from-brand-rose/10 to-brand-violet/10">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-brand-pink uppercase tracking-wide mb-2">
                <Terminal className="w-4 h-4" />
                <span>Full-Stack Mastery</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Seamlessly bridging Enterprise <b>.NET (C#) & Angular</b> with Modern <b>Node.js, Express, React & Cloud Native</b> architectures.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

