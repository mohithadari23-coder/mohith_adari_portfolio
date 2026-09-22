import React, { useState, useEffect } from 'react';
import { Menu, X, Cpu, Sparkles } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#070b14]/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left Side: Name */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="group flex items-center gap-2.5 text-lg sm:text-xl font-bold tracking-tight text-white focus:outline-none"
          aria-label="A Mohith Homepage"
        >
          <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 text-white font-mono text-xs font-black shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
            AM
            <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
            </span>
          </div>
          <span className="font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
            A Mohith
          </span>
          <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-mono text-cyan-400 bg-cyan-950/40 border border-cyan-800/40 px-2 py-0.5 rounded-full ml-1">
            <Cpu className="w-3 h-3" /> Aspiring AI Engineer
          </span>
        </a>

        {/* Right Side: Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 sm:gap-2" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative px-3.5 py-1.5 text-sm font-medium rounded-lg transition-colors group ${
                  isActive
                    ? 'text-cyan-400 font-semibold'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/40'
                }`}
              >
                {link.label}
                {/* Modern subtle hover underline animation */}
                <span
                  className={`absolute bottom-0 left-3.5 right-3.5 h-[2px] bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full transition-all duration-300 ${
                    isActive ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100'
                  }`}
                />
              </a>
            );
          })}

          <a
            href="https://github.com/mohithadari23-coder"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 px-3 py-1.5 text-xs font-semibold rounded-lg bg-blue-600/20 hover:bg-blue-600/30 text-cyan-300 border border-blue-500/30 transition-all hover:border-cyan-400/50 flex items-center gap-1.5"
          >
            <Sparkles className="w-3 h-3 text-cyan-400" />
            <span>GitHub</span>
          </a>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          id="mobile-menu-toggle-btn"
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
          className="md:hidden p-2 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800/60 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#070b14]/98 border-b border-slate-800/90 px-4 pt-3 pb-6 space-y-2 shadow-2xl backdrop-blur-xl animate-in slide-in-from-top-2 duration-200">
          <div className="px-3 py-2 text-xs font-mono text-cyan-400/80 border-b border-slate-800/80 flex items-center justify-between">
            <span>Navigation Menu</span>
            <span className="text-[10px] bg-blue-900/40 px-2 py-0.5 rounded text-blue-300">B.Tech CSE</span>
          </div>
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`block px-3.5 py-2.5 rounded-xl text-base font-medium transition-colors ${
                  isActive
                    ? 'bg-blue-600/20 text-cyan-300 font-semibold border-l-4 border-cyan-400 pl-3'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                {link.label}
              </a>
            );
          })}
          <div className="pt-2 border-t border-slate-800/80 flex gap-2">
            <a
              href="https://www.linkedin.com/in/mohith-adari-ba9bb3431/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center py-2 rounded-lg text-xs font-semibold bg-blue-600 text-white hover:bg-blue-500"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/mohithadari23-coder"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center py-2 rounded-lg text-xs font-semibold bg-slate-800 text-slate-200 border border-slate-700 hover:bg-slate-700"
            >
              GitHub
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
