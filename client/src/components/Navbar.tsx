import React, { useState, useEffect } from 'react';
import { Terminal, FileText, Menu, X, Sparkles, ExternalLink } from 'lucide-react';

interface NavbarProps {
  onToggleTerminal: () => void;
  terminalOpen: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ onToggleTerminal, terminalOpen }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Guestbook', href: '#guestbook' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#09090e]/85 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/40'
          : 'bg-transparent py-2'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl gradient-rose-violet flex items-center justify-center font-extrabold text-white shadow-lg shadow-spider-red/30 group-hover:scale-105 transition-transform">
            N
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-lg text-white tracking-tight leading-none">
                NIJU<span className="text-spider-brightRed">.</span>M
              </span>
              <span className="whitespace-nowrap inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-spider-red/15 text-spider-brightRed border border-spider-red/30">
                Infosys SE
              </span>
            </div>
            <span className="text-xs text-slate-400 font-mono mt-1">.NET & AI Engineer</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3 py-1.5 text-sm text-slate-300 hover:text-white rounded-lg hover:bg-white/5 transition-colors font-medium"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="hidden md:flex items-center gap-3">
          {/* CLI Terminal Toggle */}
          <button
            onClick={onToggleTerminal}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono transition-all border ${
              terminalOpen
                ? 'bg-brand-violet text-white border-brand-violet shadow-lg shadow-brand-violet/30'
                : 'bg-white/5 text-slate-300 border-white/10 hover:border-brand-rose/40 hover:bg-white/10'
            }`}
            title="Toggle In-Browser Developer Terminal Sandbox"
          >
            <Terminal className="w-3.5 h-3.5 text-brand-pink" />
            <span>CLI Terminal</span>
            <span className="px-1 py-0.2 bg-black/40 rounded text-[10px] text-slate-400">`</span>
          </button>

          {/* Personal Dashboard Link */}
          <a
            href="https://personal-app-tan.vercel.app/login"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-brand-pink bg-brand-rose/10 hover:bg-brand-rose/20 border border-brand-rose/20 transition-all"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Personal Suite</span>
            <ExternalLink className="w-3 h-3 opacity-70" />
          </a>

          {/* Resume Download CTA */}
          <a
            href="#contact"
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white gradient-rose-violet hover:opacity-90 shadow-md shadow-brand-rose/20 transition-all hover:scale-105 active:scale-95"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onToggleTerminal}
            className="p-2 rounded-lg bg-white/5 text-brand-pink border border-white/10"
            title="Toggle CLI Sandbox"
          >
            <Terminal className="w-4 h-4" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-300 hover:text-white bg-white/5 border border-white/10"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel border-b border-white/10 px-4 pt-2 pb-6 space-y-2 animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-base text-slate-300 hover:text-white hover:bg-white/5 font-medium"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 border-t border-white/10 flex flex-col gap-2">
            <a
              href="https://personal-app-tan.vercel.app/login"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-medium text-brand-pink bg-brand-rose/10 border border-brand-rose/20"
            >
              <Sparkles className="w-4 h-4" />
              <span>Open Personal Dashboard Suite</span>
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-semibold text-white gradient-rose-violet"
            >
              <FileText className="w-4 h-4" />
              <span>Contact Niju</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

