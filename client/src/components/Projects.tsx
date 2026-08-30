import React, { useState, useEffect } from 'react';
import { FolderGit2, ExternalLink, Sparkles, Layers } from 'lucide-react';
import { GithubIcon } from './Icons';
import { Project } from '../types';
import { api } from '../services/api';
import { STATIC_PROJECTS } from '../data/staticFallback';

export const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>(STATIC_PROJECTS);
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  useEffect(() => {
    api.getProjects().then(setProjects);
  }, []);

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'enterprise', label: 'Enterprise & .NET' },
    { id: 'fullstack', label: 'Full Stack & Web' },
    { id: 'ai', label: 'AI & Vector DB' },
  ];

  const filteredProjects = selectedFilter === 'all'
    ? projects
    : projects.filter(p => {
        if (selectedFilter === 'enterprise') return p.category === 'enterprise' || p.tags.some(t => t.includes('.NET') || t.includes('ASP.NET'));
        if (selectedFilter === 'fullstack') return p.category === 'fullstack' || p.tags.some(t => t.includes('Angular') || t.includes('React'));
        if (selectedFilter === 'ai') return p.category === 'ai' || p.tags.some(t => t.includes('AI') || t.includes('RAG') || t.includes('Python'));
        return true;
      });

  return (
    <section id="projects" className="py-20 relative bg-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-lg bg-brand-rose/10 text-brand-pink border border-brand-rose/20">
                <FolderGit2 className="w-5 h-5" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Featured Projects</h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 font-mono">ENTERPRISE SYSTEMS, AI AGENTS & WEB APPLICATIONS</p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setSelectedFilter(f.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
                  selectedFilter === f.id
                    ? 'gradient-rose-violet text-white shadow-md shadow-brand-rose/25'
                    : 'bg-white/5 text-slate-400 hover:text-white border border-white/10 hover:bg-white/10'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`glass-panel rounded-2xl border flex flex-col justify-between overflow-hidden glass-panel-hover group ${
                project.featured ? 'border-brand-rose/30 shadow-lg shadow-brand-rose/5' : 'border-white/10'
              }`}
            >
              <div className="p-6">
                {/* Top badges */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="p-2 rounded-xl bg-white/5 text-brand-pink border border-white/10">
                      <Layers className="w-4 h-4" />
                    </span>
                    {project.featured && (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-brand-rose/15 text-brand-pink border border-brand-rose/30">
                        <Sparkles className="w-3 h-3" />
                        Featured
                      </span>
                    )}
                  </div>

                  <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-white/5 text-slate-400">
                    {project.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white group-hover:text-brand-pink transition-colors mb-2">
                  {project.title}
                </h3>

                {/* Subtitle / Description */}
                <p className="text-xs sm:text-sm text-slate-300 mb-4 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-white/5 text-slate-300 border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Action Bar */}
              <div className="px-6 py-4 bg-white/[0.02] border-t border-white/5 flex items-center justify-between text-xs">
                <div className="flex items-center gap-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-slate-300 hover:text-white font-medium transition-colors"
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>Code</span>
                    </a>
                  )}

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-brand-pink hover:text-white font-semibold transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>

                <span className="text-[11px] text-slate-500 font-mono">
                  #0{project.displayOrder || project.id}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

