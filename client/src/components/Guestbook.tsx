import React, { useState, useEffect } from 'react';
import { MessageSquare, Send, Sparkles } from 'lucide-react';
import { GuestbookEntry } from '../types';
import { api } from '../services/api';
import { STATIC_GUESTBOOK } from '../data/staticFallback';

export const Guestbook: React.FC = () => {
  const [entries, setEntries] = useState<GuestbookEntry[]>(STATIC_GUESTBOOK);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [badge, setBadge] = useState('Visitor');
  const [submitting, setSubmitting] = useState(false);
  const [statusMsg, setStatusMsg] = useState<{ text: string; type: 'success' | 'error' } | null>(null);

  useEffect(() => {
    api.getGuestbook().then(setEntries);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) {
      setStatusMsg({ text: 'Please fill in your name and a brief message.', type: 'error' });
      return;
    }

    setSubmitting(true);
    setStatusMsg(null);

    try {
      const newEntry = await api.postGuestbook({ name, message, badge });
      setEntries((prev) => [newEntry, ...prev]);
      setName('');
      setMessage('');
      setStatusMsg({ text: 'Thanks for signing the guestbook! 🎉', type: 'success' });

      // Safe dynamic confetti trigger
      try {
        const confettiModule = await import('canvas-confetti');
        const confettiFn = (confettiModule as any).default || confettiModule;
        if (typeof confettiFn === 'function') {
          confettiFn({
            particleCount: 70,
            spread: 60,
            origin: { y: 0.8 },
            colors: ['#e11d48', '#7c3aed', '#f43f5e', '#a855f7']
          });
        }
      } catch {
        // Confetti fallback
      }
    } catch {
      setStatusMsg({ text: 'Failed to submit. Please try again.', type: 'error' });
    } finally {
      setSubmitting(false);
    }
  };

  const badgeOptions = ['Visitor', 'Recruiter', 'Software Engineer', 'Fellow Colleague'];

  return (
    <section id="guestbook" className="py-20 relative bg-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-lg bg-brand-rose/10 text-brand-pink border border-brand-rose/20">
            <MessageSquare className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Visitor Guestbook</h2>
            <p className="text-xs sm:text-sm text-slate-400 font-mono">LEAVE A NOTE, ENDORSEMENT OR GREETING</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mt-8">
          {/* Form Card */}
          <div className="lg:col-span-5 glass-panel p-6 sm:p-8 rounded-2xl border border-white/10">
            <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
              <span>Sign the Guestbook</span>
              <Sparkles className="w-4 h-4 text-brand-pink" />
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              Share your thoughts, peer feedback, or say hello! Your entry connects to our live REST API and database.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5 font-mono">
                  YOUR NAME
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Alex (Recruiter @ TechCorp)"
                  maxLength={50}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 focus:border-brand-rose/60 focus:ring-1 focus:ring-brand-rose/60 outline-none text-sm text-white placeholder-slate-500 transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5 font-mono">
                  BADGE / ROLE
                </label>
                <div className="flex flex-wrap gap-1.5">
                  {badgeOptions.map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setBadge(opt)}
                      className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-colors ${
                        badge === opt
                          ? 'bg-brand-rose text-white shadow-sm'
                          : 'bg-white/5 text-slate-400 border border-white/5 hover:text-white'
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5 font-mono">
                  MESSAGE
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Drop a quick hello, project comment, or endorsement..."
                  rows={3}
                  maxLength={300}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 focus:border-brand-rose/60 focus:ring-1 focus:ring-brand-rose/60 outline-none text-sm text-white placeholder-slate-500 transition-colors resize-none"
                  required
                />
              </div>

              {statusMsg && (
                <div
                  className={`p-3 rounded-xl text-xs font-medium ${
                    statusMsg.type === 'success'
                      ? 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/20'
                      : 'bg-rose-500/10 text-rose-300 border border-rose-500/20'
                  }`}
                >
                  {statusMsg.text}
                </div>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold text-white gradient-rose-violet hover:opacity-90 transition-all shadow-md shadow-brand-rose/20 disabled:opacity-50"
              >
                <Send className="w-4 h-4" />
                <span>{submitting ? 'Posting Note...' : 'Sign Guestbook'}</span>
              </button>
            </form>
          </div>

          {/* Entries Feed */}
          <div className="lg:col-span-7 space-y-3.5 max-h-[520px] overflow-y-auto pr-1">
            {entries.map((entry) => (
              <div
                key={entry.id}
                className="glass-panel p-4 sm:p-5 rounded-xl border border-white/10 flex flex-col justify-between glass-panel-hover"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-brand-rose/30 to-brand-violet/30 border border-white/10 flex items-center justify-center text-xs font-bold text-white">
                      {entry.name.charAt(0).toUpperCase()}
                    </div>
                    <span className="font-semibold text-sm text-white">{entry.name}</span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 text-brand-pink border border-white/5">
                      {entry.badge}
                    </span>
                  </div>

                  <span className="text-[11px] font-mono text-slate-500">
                    {new Date(entry.createdAt).toLocaleDateString()}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pl-9">
                  "{entry.message}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

