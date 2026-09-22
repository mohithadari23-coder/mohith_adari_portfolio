import React from 'react';
import { Linkedin, Github, Cpu, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-800/80 bg-[#050811] py-12 px-4 sm:px-6 lg:px-8 text-slate-400">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        {/* Name & Headline */}
        <div className="flex items-center gap-2 mb-2">
          <div className="w-6 h-6 rounded-md bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white font-mono text-[10px] font-black">
            AM
          </div>
          <span className="text-xl font-bold text-white tracking-tight">
            A Mohith
          </span>
        </div>

        <p className="text-sm font-medium text-slate-400 mb-6">
          Aspiring AI Engineer | B.Tech Computer Science Student
        </p>

        {/* Social Icons */}
        <div className="flex items-center gap-4 mb-8">
          <a
            id="footer-linkedin-link"
            href="https://www.linkedin.com/in/mohith-adari-ba9bb3431/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Mohith's LinkedIn Profile"
            className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-[#0077B5] hover:border-blue-500/40 hover:bg-slate-800 transition-all duration-200"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            id="footer-github-link"
            href="https://github.com/mohithadari23-coder"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Mohith's GitHub Profile"
            className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-cyan-500/40 hover:bg-slate-800 transition-all duration-200"
          >
            <Github className="w-5 h-5" />
          </a>
        </div>

        {/* Copyright text */}
        <p className="text-xs font-mono text-slate-500">
          © 2026 A Mohith. Built with curiosity and code.
        </p>
      </div>
    </footer>
  );
};
