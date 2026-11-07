import React, { useState, useEffect } from 'react';
import { Menu, X, Cpu, Github } from 'lucide-react';

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
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Achievements', href: '#achievements' },
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
          ? 'bg-[#000000]/95 backdrop-blur-md border-b border-zinc-800/80 shadow-lg shadow-black/80 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left Side: Name + Small AI Engineer Badge */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="group flex items-center gap-2.5 text-lg sm:text-xl font-bold tracking-tight text-[#FFFFFF] focus:outline-none"
          aria-label="Mohith Adari Homepage"
        >
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-black border border-zinc-700 text-[#FFFFFF] font-mono text-xs font-black shadow-sm group-hover:border-zinc-500 transition-colors">
            MA
          </div>
          <span className="font-extrabold tracking-tight text-[#FFFFFF]">
            Mohith Adari
          </span>
          <span className="hidden sm:inline-flex items-center gap-1.5 text-[11px] font-mono text-[#BDBDBD] bg-black border border-zinc-800 px-2.5 py-0.5 rounded-full ml-1">
            <Cpu className="w-3 h-3 text-[#FFFFFF]" />
            <span>AI Engineer</span>
          </span>
        </a>

        {/* Right Side: Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 sm:gap-1.5" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative px-3.5 py-1.5 text-sm font-medium rounded-lg transition-colors group ${
                  isActive
                    ? 'text-[#FFFFFF] font-semibold'
                    : 'text-[#BDBDBD] hover:text-[#FFFFFF]'
                }`}
              >
                {link.label}
                {/* Subtle hover underline */}
                <span
                  className={`absolute bottom-0 left-3.5 right-3.5 h-[2px] bg-[#FFFFFF] rounded-full transition-all duration-300 ${
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
            className="ml-3 px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-[#FFFFFF] hover:bg-zinc-200 text-[#000000] border border-[#FFFFFF] transition-all flex items-center gap-1.5 shadow-sm"
          >
            <Github className="w-3.5 h-3.5 text-[#000000]" />
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
          className="md:hidden p-2 rounded-xl text-[#BDBDBD] hover:text-[#FFFFFF] hover:bg-zinc-900 border border-transparent hover:border-zinc-800 focus:outline-none"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#000000] border-b border-zinc-800 px-4 pt-3 pb-6 space-y-2 shadow-2xl backdrop-blur-xl animate-in slide-in-from-top-2 duration-200">
          <div className="px-3 py-2 text-xs font-mono text-[#BDBDBD] border-b border-zinc-800 flex items-center justify-between">
            <span>Navigation Menu</span>
            <span className="text-[10px] bg-black px-2 py-0.5 rounded text-[#FFFFFF] border border-zinc-800">B.Tech CSE</span>
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
                    ? 'bg-zinc-900 text-[#FFFFFF] font-semibold border-l-2 border-[#FFFFFF] pl-3'
                    : 'text-[#BDBDBD] hover:text-[#FFFFFF] hover:bg-zinc-900/60'
                }`}
              >
                {link.label}
              </a>
            );
          })}
          <div className="pt-2 border-t border-zinc-800 flex gap-2">
            <a
              href="https://www.linkedin.com/in/mohith-adari-ba9bb3431/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center py-2.5 rounded-lg text-xs font-semibold bg-[#000000] text-[#FFFFFF] border border-zinc-700 hover:bg-zinc-900"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/mohithadari23-coder"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center py-2.5 rounded-lg text-xs font-semibold bg-[#FFFFFF] text-[#000000] hover:bg-zinc-200"
            >
              GitHub
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
