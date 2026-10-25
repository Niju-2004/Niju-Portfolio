import React, { useState, useEffect } from 'react';
import { Award, ShieldCheck, ExternalLink, Eye, X } from 'lucide-react';
import { Certification } from '../types';
import { api } from '../services/api';
import { STATIC_CERTIFICATIONS } from '../data/staticFallback';

export const Certifications: React.FC = () => {
  const [certs, setCerts] = useState<Certification[]>(STATIC_CERTIFICATIONS);
  const [selectedImage, setSelectedImage] = useState<{ title: string; image: string } | null>(null);

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

                {cert.credentialId && (
                  <div className="text-[11px] font-mono text-slate-400 mb-3">
                    Credential ID: <span className="text-brand-pink font-semibold">{cert.credentialId}</span>
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-white/5 space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span className="font-medium text-slate-300">{cert.issuer}</span>
                  <span className="font-mono text-slate-500">{cert.issueDate || 'Credential'}</span>
                </div>

                {(cert.credentialUrl || cert.certificateImage) && (
                  <div className="flex items-center gap-2 pt-2 text-xs flex-wrap">
                    {cert.certificateImage && (
                      <button
                        onClick={() => setSelectedImage({ title: cert.name, image: cert.certificateImage! })}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-all text-xs font-mono cursor-pointer"
                      >
                        <Eye className="w-3.5 h-3.5 text-brand-pink" />
                        <span>View Certificate</span>
                      </button>
                    )}
                    {cert.credentialUrl && (
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-brand-violet/10 hover:bg-brand-violet/20 border border-brand-violet/20 text-brand-pink hover:text-white transition-all text-xs font-mono"
                      >
                        <span>Verify Online</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certificate Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-slate-900 border border-white/20 rounded-2xl overflow-hidden shadow-2xl p-4 sm:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
              <h3 className="text-base sm:text-lg font-bold text-white pr-4">
                {selectedImage.title}
              </h3>
              <button
                onClick={() => setSelectedImage(null)}
                className="p-1.5 rounded-lg bg-white/10 text-slate-300 hover:text-white hover:bg-white/20 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="relative rounded-xl overflow-hidden bg-black/50 border border-white/10 flex items-center justify-center">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[75vh] object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
