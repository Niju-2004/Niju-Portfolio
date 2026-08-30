import React, { useState, useEffect } from 'react';
import { Award, ShieldCheck } from 'lucide-react';
import { Certification } from '../types';
import { api } from '../services/api';
import { STATIC_CERTIFICATIONS } from '../data/staticFallback';

export const Certifications: React.FC = () => {
  const [certs, setCerts] = useState<Certification[]>(STATIC_CERTIFICATIONS);

  useEffect(() => {
    api.getCertifications().then(setCerts);
  }, []);

  return (
    <section id="certifications" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-lg bg-brand-violet/10 text-brand-violet border border-brand-violet/20">
            <Award className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Certifications & Credentials</h2>
            <p className="text-xs sm:text-sm text-slate-400 font-mono">OFFICIAL CREDENTIALS & SPECIALIZATIONS</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
          {certs.map((cert) => (
            <div
              key={cert.id}
              className="glass-panel p-6 rounded-2xl border border-white/10 glass-panel-hover flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="p-2 rounded-xl bg-brand-violet/10 text-brand-violet border border-brand-violet/20">
                    <ShieldCheck className="w-5 h-5" />
                  </span>
                  <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    Verified
                  </span>
                </div>

                <h3 className="font-bold text-sm sm:text-base text-white mb-2 leading-snug">
                  {cert.name}
                </h3>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
                <span className="font-medium text-slate-300">{cert.issuer}</span>
                <span className="font-mono text-slate-500">{cert.issueDate || 'Credential'}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

