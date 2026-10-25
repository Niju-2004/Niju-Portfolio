import React, { useState, useEffect, useRef } from 'react';
import { Terminal as TerminalIcon, X, CornerDownLeft } from 'lucide-react';
import { api } from '../services/api';
import { STATIC_PROFILE, STATIC_PROJECTS, STATIC_SKILLS, STATIC_EXPERIENCE, STATIC_CERTIFICATIONS } from '../data/staticFallback';

interface TerminalCLIProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CommandHistoryItem {
  id: string;
  command: string;
  output: React.ReactNode;
  timestamp: string;
}

export const TerminalCLI: React.FC<TerminalCLIProps> = ({ isOpen, onClose }) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<CommandHistoryItem[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const [commandList, setCommandList] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 150);
      if (history.length === 0) {
        setHistory([
          {
            id: 'welcome',
            command: 'system.init',
            output: (
              <div className="space-y-1 text-slate-300">
                <div className="text-brand-pink font-bold">⚡ Niju M — Portfolio CLI Sandbox v1.0.0</div>
                <div className="text-xs text-slate-400">Interactive shell connected to Express REST API & PostgreSQL telemetry.</div>
                <div className="text-xs text-slate-400">Type <span className="text-brand-pink font-bold">help</span> to list available commands.</div>
              </div>
            ),
            timestamp: new Date().toLocaleTimeString(),
          },
        ]);
      }
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleKeyDown = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const trimmed = input.trim();
      if (!trimmed) return;

      const newCmds = [...commandList, trimmed];
      setCommandList(newCmds);
      setHistoryIndex(newCmds.length);

      await executeCommand(trimmed);
      setInput('');
    } else if (e.key === 'ArrowUp') {
      if (commandList.length > 0) {
        const nextIndex = Math.max(0, historyIndex - 1);
        setHistoryIndex(nextIndex);
        setInput(commandList[nextIndex] || '');
      }
    } else if (e.key === 'ArrowDown') {
      if (commandList.length > 0) {
        const nextIndex = Math.min(commandList.length, historyIndex + 1);
        setHistoryIndex(nextIndex);
        setInput(commandList[nextIndex] || '');
      }
    }
  };

  const executeCommand = async (cmd: string) => {
    const raw = cmd.toLowerCase().trim();
    let output: React.ReactNode = null;

    if (raw === 'help') {
      output = (
        <div className="space-y-1 text-xs">
          <div className="text-brand-pink font-bold">Available Commands:</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-slate-300">
            <div><b className="text-white">skills</b> — List technical skills & levels</div>
            <div><b className="text-white">projects</b> — List all portfolio projects</div>
            <div><b className="text-white">certs</b> — View official certifications (AZ-900, RHCSA)</div>
            <div><b className="text-white">experience</b> — Show career at Infosys</div>
            <div><b className="text-white">contact</b> — Display email, phone & social</div>
            <div><b className="text-white">curl /api/health</b> — Query live backend telemetry</div>
            <div><b className="text-white">curl /api/projects</b> — Fetch raw JSON from API</div>
            <div><b className="text-white">whoami</b> — Display current session status</div>
            <div><b className="text-white">clear</b> — Clear terminal screen</div>
            <div><b className="text-white">exit</b> — Close terminal window</div>
          </div>
        </div>
      );
    } else if (raw === 'skills') {
      output = (
        <div className="space-y-1 text-xs">
          <div className="text-brand-violet font-bold">Key Technologies & Proficiencies:</div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-2">
            {STATIC_SKILLS.map((s) => (
              <div key={s.id} className="p-1.5 rounded bg-white/5 border border-white/5">
                <div className="text-white font-medium">{s.name}</div>
                <div className="text-brand-pink text-[10px]">{s.category} ({s.level}%)</div>
              </div>
            ))}
          </div>
        </div>
      );
    } else if (raw === 'projects') {
      output = (
        <div className="space-y-2 text-xs">
          <div className="text-brand-pink font-bold">Featured Projects:</div>
          {STATIC_PROJECTS.map((p, i) => (
            <div key={p.id} className="border-l-2 border-brand-rose pl-2">
              <div className="text-white font-semibold">{i + 1}. {p.title}</div>
              <div className="text-slate-400 text-[11px]">{p.description}</div>
              <div className="text-brand-violet font-mono text-[10px]">Tags: {p.tags.join(', ')}</div>
            </div>
          ))}
        </div>
      );
    } else if (raw === 'certs' || raw === 'certifications') {
      output = (
        <div className="space-y-2 text-xs">
          <div className="text-brand-pink font-bold">Official Certifications & Credentials:</div>
          {STATIC_CERTIFICATIONS.map((c) => (
            <div key={c.id} className="border-l-2 border-brand-violet pl-2 space-y-0.5">
              <div className="text-white font-semibold flex items-center gap-2">
                <span>{c.name}</span>
                {c.credentialId && (
                  <span className="text-[10px] px-1.5 py-0.2 rounded bg-brand-rose/20 text-brand-pink font-mono">
                    ID: {c.credentialId}
                  </span>
                )}
              </div>
              <div className="text-slate-400 text-[10px]">{c.issuer} • {c.issueDate}</div>
              {c.credentialUrl && (
                <div className="text-[10px] text-brand-pink underline truncate">
                  <a href={c.credentialUrl} target="_blank" rel="noopener noreferrer">{c.credentialUrl}</a>
                </div>
              )}
            </div>
          ))}
        </div>
      );
    } else if (raw === 'experience') {
      output = (
        <div className="space-y-2 text-xs">
          <div className="text-brand-pink font-bold">Professional Experience:</div>
          {STATIC_EXPERIENCE.map((exp) => (
            <div key={exp.id} className="border-l-2 border-brand-violet pl-2">
              <div className="text-white font-semibold">{exp.role} — {exp.company}</div>
              <div className="text-slate-400 text-[10px]">{exp.duration} | {exp.location}</div>
              <div className="text-slate-300 text-[11px] mt-1">{exp.responsibilities[0]}</div>
            </div>
          ))}
        </div>
      );
    } else if (raw === 'contact') {
      output = (
        <div className="space-y-1 text-xs text-slate-300">
          <div><b className="text-brand-pink">Email:</b> {STATIC_PROFILE.email}</div>
          <div><b className="text-brand-pink">Phone:</b> {STATIC_PROFILE.phone}</div>
          <div><b className="text-brand-pink">LinkedIn:</b> {STATIC_PROFILE.linkedin}</div>
          <div><b className="text-brand-pink">GitHub:</b> {STATIC_PROFILE.github}</div>
        </div>
      );
    } else if (raw === 'curl /api/health' || raw === 'health') {
      const health = await api.getHealth();
      output = (
        <pre className="text-emerald-400 text-xs font-mono bg-black/40 p-2 rounded border border-emerald-500/20 overflow-x-auto">
          {JSON.stringify(health, null, 2)}
        </pre>
      );
    } else if (raw === 'curl /api/projects') {
      const projects = await api.getProjects();
      output = (
        <pre className="text-brand-pink text-xs font-mono bg-black/40 p-2 rounded border border-brand-rose/20 max-h-48 overflow-y-auto">
          {JSON.stringify(projects.slice(0, 3), null, 2)}
          {"\n... and more records"}
        </pre>
      );
    } else if (raw === 'whoami') {
      output = (
        <div className="text-xs text-slate-300">
          <div>User: <span className="text-emerald-400 font-mono">guest_developer</span></div>
          <div>Session: <span className="text-slate-400 font-mono">Authorized (Read-Only)</span></div>
          <div>Host: <span className="text-brand-pink font-mono">NijuM-Portfolio-Edge</span></div>
        </div>
      );
    } else if (raw === 'clear') {
      setHistory([]);
      return;
    } else if (raw === 'exit') {
      onClose();
      return;
    } else {
      output = (
        <div className="text-xs text-rose-400">
          Command not recognized: "{cmd}". Type <span className="underline font-bold text-white">help</span> for a list of commands.
        </div>
      );
    }

    setHistory((prev) => [
      ...prev,
      {
        id: Math.random().toString(),
        command: cmd,
        output,
        timestamp: new Date().toLocaleTimeString(),
      },
    ]);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 p-2 sm:p-4 max-w-4xl mx-auto">
      <div className="glass-panel rounded-2xl border border-white/20 shadow-2xl shadow-black/80 overflow-hidden backdrop-blur-2xl">
        {/* Terminal Title Bar */}
        <div className="bg-[#12121c] px-4 py-2.5 flex items-center justify-between border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 cursor-pointer" onClick={onClose} />
            <span className="w-3 h-3 rounded-full bg-amber-500/80" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
            <span className="text-xs font-mono text-slate-400 ml-2 flex items-center gap-1.5">
              <TerminalIcon className="w-3.5 h-3.5 text-brand-pink" />
              <span>niju@portfolio-cli: ~/developer-sandbox</span>
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="p-1 rounded text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Terminal Body */}
        <div className="p-4 bg-[#08080e]/95 max-h-72 overflow-y-auto font-mono text-xs space-y-3">
          {history.map((item) => (
            <div key={item.id} className="space-y-1">
              <div className="flex items-center gap-2 text-slate-400">
                <span className="text-brand-rose font-bold">➜</span>
                <span className="text-brand-violet font-semibold">~/portfolio</span>
                <span className="text-white font-medium">{item.command}</span>
                <span className="text-[10px] text-slate-600 ml-auto">{item.timestamp}</span>
              </div>
              <div className="pl-4">{item.output}</div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Command Input Bar */}
        <div className="p-3 bg-[#101018] border-t border-white/10 flex items-center gap-2">
          <span className="text-brand-pink font-mono text-sm font-bold">➜</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type 'help', 'skills', 'projects', 'curl /api/health'..."
            className="flex-1 bg-transparent border-none outline-none font-mono text-xs text-white placeholder-slate-500"
          />
          <button
            onClick={() => {
              if (input.trim()) {
                const trimmed = input.trim();
                setCommandList((prev) => [...prev, trimmed]);
                executeCommand(trimmed);
                setInput('');
              }
            }}
            className="p-1.5 rounded-lg bg-brand-rose/20 text-brand-pink hover:bg-brand-rose/30 transition-colors"
          >
            <CornerDownLeft className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};

