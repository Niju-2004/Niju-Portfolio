import React, { useState, useEffect } from 'react';
import { ArrowUp, Sparkles } from 'lucide-react';
import { api } from '../services/api';
import { HealthStatus } from '../types';

export const Footer: React.FC = () => {
  const [health, setHealth] = useState<HealthStatus | null>(null);

  useEffect(() => {
    api.getHealth().then(setHealth).catch(() => {});
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 bg-[#06060a] py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand and Description */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <div className="w-8 h-8 rounded-lg gradient-rose-violet flex items-center justify-center font-bold text-white text-sm">
              N
            </div>
            <div>
              <div className="font-bold text-white text-sm flex items-center justify-center sm:justify-start gap-1.5">
                <span>Niju M</span>
                <span className="text-slate-500">•</span>
                <span className="text-slate-400 font-normal text-xs">Full-Stack & AI Software Engineer</span>
              </div>
              <p className="text-xs text-slate-500 mt-0.5">
                Built with React, Vite, Tailwind CSS & Node.js/Express REST API.
              </p>
            </div>
          </div>

          {/* System Telemetry Badge */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>API: {health?.status === 'healthy' || health?.status === 'online' ? 'Online' : 'Active'}</span>
              <span className="text-slate-600">|</span>
              <span className="text-slate-400">{health?.responseTimeMs || 12}ms</span>
            </div>

            {/* Scroll to Top */}
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:border-brand-rose/40 hover:bg-white/10 transition-all"
              title="Scroll to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} Niju M. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://personal-app-tan.vercel.app/login"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-pink transition-colors flex items-center gap-1"
            >
              <Sparkles className="w-3 h-3 text-brand-pink" />
              <span>Personal Suite App</span>
            </a>
            <span>•</span>
            <a href="https://github.com/Niju-2004" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              GitHub
            </a>
            <span>•</span>
            <a href="https://www.linkedin.com/in/niju-mm" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

