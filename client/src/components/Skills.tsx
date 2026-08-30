import React, { useState, useEffect } from 'react';
import { Cpu, Server, Layout, Database, Bot, Wrench, Sparkles } from 'lucide-react';
import { Skill } from '../types';
import { api } from '../services/api';
import { STATIC_SKILLS } from '../data/staticFallback';

export const Skills: React.FC = () => {
  const [skills, setSkills] = useState<Skill[]>(STATIC_SKILLS);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  useEffect(() => {
    api.getSkills().then(setSkills);
  }, []);

  const categories = [
    { name: 'All', icon: Sparkles },
    { name: 'Backend', icon: Server },
    { name: 'Frontend', icon: Layout },
    { name: 'Databases', icon: Database },
    { name: 'AI Technologies', icon: Bot },
    { name: 'Tools', icon: Wrench },
  ];

  const filteredSkills = activeCategory === 'All'
    ? skills
    : skills.filter((s) => s.category.toLowerCase() === activeCategory.toLowerCase());

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-lg bg-brand-rose/10 text-brand-pink border border-brand-rose/20">
            <Cpu className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Technical Skills</h2>
            <p className="text-xs sm:text-sm text-slate-400 font-mono">TECHNOLOGIES, FRAMEWORKS & AI TOOLING</p>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2 mt-8 mb-10">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.name;
            return (
              <button
                key={cat.name}
                onClick={() => setActiveCategory(cat.name)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                  isActive
                    ? 'gradient-rose-violet text-white shadow-md shadow-brand-rose/25 scale-105'
                    : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 border border-white/10'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredSkills.map((skill) => (
            <div
              key={skill.id}
              className="glass-panel p-5 rounded-xl border border-white/10 glass-panel-hover"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-sm text-white">{skill.name}</span>
                <span className="text-xs font-mono text-brand-pink font-semibold">
                  {skill.level}%
                </span>
              </div>

              <div className="text-[11px] font-mono text-slate-400 mb-3 uppercase tracking-wider">
                {skill.category}
              </div>

              {/* Progress meter */}
              <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full gradient-rose-violet transition-all duration-700 ease-out"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

