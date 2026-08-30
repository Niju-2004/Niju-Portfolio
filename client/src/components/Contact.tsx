import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { api } from '../services/api';
import { STATIC_PROFILE } from '../data/staticFallback';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState<{ text: string; type: 'success' | 'error' } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setFeedback({ text: 'Please fill in all required fields.', type: 'error' });
      return;
    }

    setLoading(true);
    setFeedback(null);

    try {
      const res = await api.postContact(formData);
      setFeedback({ text: res.message, type: 'success' });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch {
      setFeedback({ text: 'An error occurred while sending your message.', type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-lg bg-brand-rose/10 text-brand-pink border border-brand-rose/20">
            <Mail className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Get in Touch</h2>
            <p className="text-xs sm:text-sm text-slate-400 font-mono">LET'S CONNECT & DISCUSS OPPORTUNITIES</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mt-8">
          {/* Contact Direct Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Let's build together</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  I am open to full-time engineering roles, high-impact enterprise projects, and technical collaborations in <b>.NET, Full Stack, and AI software engineering</b>.
                </p>
              </div>

              <div className="space-y-4 text-sm">
                <a
                  href={`mailto:${STATIC_PROFILE.email}`}
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 hover:border-brand-rose/30 hover:bg-white/10 transition-all text-slate-200"
                >
                  <div className="p-2 rounded-lg bg-brand-rose/10 text-brand-pink">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-400">EMAIL</div>
                    <div className="font-semibold">{STATIC_PROFILE.email}</div>
                  </div>
                </a>

                <a
                  href={`tel:${STATIC_PROFILE.phone}`}
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 hover:border-brand-violet/30 hover:bg-white/10 transition-all text-slate-200"
                >
                  <div className="p-2 rounded-lg bg-brand-violet/10 text-brand-violet">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-400">PHONE</div>
                    <div className="font-semibold">{STATIC_PROFILE.phone}</div>
                  </div>
                </a>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 text-slate-200">
                  <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-400">LOCATION</div>
                    <div className="font-semibold">{STATIC_PROFILE.location}</div>
                  </div>
                </div>
              </div>

              {/* Direct Social Links */}
              <div className="pt-4 border-t border-white/10 flex items-center gap-3">
                <a
                  href={STATIC_PROFILE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold text-slate-300 hover:text-white hover:border-blue-500/50 hover:bg-blue-500/10 transition-all"
                >
                  <LinkedinIcon className="w-4 h-4 text-blue-400" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={STATIC_PROFILE.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold text-slate-300 hover:text-white hover:border-white/30 hover:bg-white/10 transition-all"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-2xl border border-white/10">
            <h3 className="text-lg font-bold text-white mb-2">Send a Message</h3>
            <p className="text-xs text-slate-400 mb-6">
              Drop a note directly to my inbox via this integrated message dispatcher.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5 font-mono">
                    YOUR NAME *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Jane Doe"
                    required
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 focus:border-brand-rose/60 focus:ring-1 focus:ring-brand-rose/60 outline-none text-sm text-white placeholder-slate-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5 font-mono">
                    EMAIL ADDRESS *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. jane@company.com"
                    required
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 focus:border-brand-rose/60 focus:ring-1 focus:ring-brand-rose/60 outline-none text-sm text-white placeholder-slate-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5 font-mono">
                  SUBJECT
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="e.g. Job Opportunity / Technical Collaboration"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 focus:border-brand-rose/60 focus:ring-1 focus:ring-brand-rose/60 outline-none text-sm text-white placeholder-slate-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5 font-mono">
                  MESSAGE *
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="How can we collaborate or connect?"
                  rows={4}
                  required
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 focus:border-brand-rose/60 focus:ring-1 focus:ring-brand-rose/60 outline-none text-sm text-white placeholder-slate-500 transition-colors resize-none"
                />
              </div>

              {feedback && (
                <div
                  className={`p-3 rounded-xl text-xs font-medium ${
                    feedback.type === 'success'
                      ? 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/20'
                      : 'bg-rose-500/10 text-rose-300 border border-rose-500/20'
                  }`}
                >
                  {feedback.text}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold text-white gradient-rose-violet hover:opacity-90 transition-all shadow-lg shadow-brand-rose/20 disabled:opacity-50"
              >
                <Send className="w-4 h-4" />
                <span>{loading ? 'Dispatching Message...' : 'Send Message'}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

