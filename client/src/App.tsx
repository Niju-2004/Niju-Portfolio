import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Certifications } from './components/Certifications';
import { Guestbook } from './components/Guestbook';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { TerminalCLI } from './components/TerminalCLI';

export function App() {
  const [terminalOpen, setTerminalOpen] = useState(false);

  // Global hotkey: Press ` (backtick) or ~ to toggle Developer CLI Sandbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === '`' && !['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) {
        e.preventDefault();
        setTerminalOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-[#08080d] text-slate-100 selection:bg-brand-rose selection:text-white relative">
      {/* Top Navigation */}
      <Navbar
        onToggleTerminal={() => setTerminalOpen(!terminalOpen)}
        terminalOpen={terminalOpen}
      />

      {/* Main Page Sections */}
      <main>
        <Hero onOpenTerminal={() => setTerminalOpen(true)} />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Certifications />
        <Guestbook />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Developer CLI Drawer */}
      <TerminalCLI
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
      />
    </div>
  );
}

export default App;

