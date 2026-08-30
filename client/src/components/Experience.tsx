import React, { useState, useEffect } from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, Building, Sparkles } from 'lucide-react';
import { Experience as ExperienceType } from '../types';
import { api } from '../services/api';
import { STATIC_EXPERIENCE } from '../data/staticFallback';

export const Experience: React.FC = () => {
  const [experiences, setExperiences] = useState<ExperienceType[]>(STATIC_EXPERIENCE);

  useEffect(() => {
    api.getExperience().then(setExperiences);
  }, []);

  return (
    <section id="experience" className="py-20 relative bg-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-lg bg-brand-violet/10 text-brand-violet border border-brand-violet/20">
            <Briefcase className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Work Experience</h2>
            <p className="text-xs sm:text-sm text-slate-400 font-mono">CAREER JOURNEY & ENTERPRISE ROLES</p>
          </div>
        </div>

        <div className="mt-10 relative pl-4 sm:pl-8 border-l border-white/10 space-y-10">
          {experiences.map((exp, idx) => (
            <div key={exp.id} className="relative group">
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[21px] sm:-left-[37px] top-1.5 w-4 h-4 rounded-full bg-brand-rose border-4 border-[#08080d] group-hover:scale-125 transition-transform shadow-md shadow-brand-rose/50" />

              <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 glass-panel-hover">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-brand-rose/10 text-brand-pink border border-brand-rose/20 mb-2">
                      {exp.current ? '✨ Current Role' : 'Training & Internship'}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                      {exp.role}
                    </h3>
                  </div>

                  <div className="flex flex-col sm:items-end text-xs font-mono text-slate-400 gap-1">
                    <span className="flex items-center gap-1.5 font-semibold text-slate-300">
                      <Calendar className="w-3.5 h-3.5 text-brand-pink" />
                      {exp.duration}
                    </span>
                    <span className="flex items-center gap-1.5 text-slate-400">
                      <Building className="w-3.5 h-3.5 text-brand-violet" />
                      {exp.company}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs text-slate-400 mb-4 pb-3 border-b border-white/5">
                  <MapPin className="w-3.5 h-3.5 text-slate-500" />
                  <span>{exp.location}</span>
                </div>

                {/* Responsibilities list */}
                <ul className="space-y-2.5 mb-6 text-sm text-slate-300">
                  {exp.responsibilities.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-brand-pink shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech stack chips */}
                <div className="flex flex-wrap items-center gap-1.5 pt-3 border-t border-white/5">
                  <span className="text-xs font-mono text-slate-400 mr-2">TECH:</span>
                  {exp.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-white/5 text-slate-300 border border-white/10 hover:border-brand-violet/40 hover:text-white transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

