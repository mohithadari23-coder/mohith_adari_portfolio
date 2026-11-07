import React from 'react';
import { Linkedin, Github } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-zinc-800 bg-[#000000] py-12 px-4 sm:px-6 lg:px-8 text-[#BDBDBD]">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        {/* Name & Headline */}
        <div className="flex items-center gap-2 mb-2">
          <div className="w-6 h-6 rounded-md bg-black border border-zinc-700 flex items-center justify-center text-[#FFFFFF] font-mono text-[10px] font-black">
            MA
          </div>
          <span className="text-xl font-bold text-[#FFFFFF] tracking-tight">
            Mohith Adari
          </span>
        </div>

        <p className="text-sm font-medium text-[#BDBDBD] mb-6">
          AI Engineer | First-Year B.Tech Computer Science Student
        </p>

        {/* Social Icons */}
        <div className="flex items-center gap-4 mb-8">
          <a
            id="footer-linkedin-link"
            href="https://www.linkedin.com/in/mohith-adari-ba9bb3431/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Mohith's LinkedIn Profile"
            className="p-2.5 rounded-xl bg-black border border-zinc-800 text-[#BDBDBD] hover:text-[#FFFFFF] hover:border-zinc-500 hover:bg-zinc-900 transition-all duration-200"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            id="footer-github-link"
            href="https://github.com/mohithadari23-coder"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Mohith's GitHub Profile"
            className="p-2.5 rounded-xl bg-black border border-zinc-800 text-[#BDBDBD] hover:text-[#FFFFFF] hover:border-zinc-500 hover:bg-zinc-900 transition-all duration-200"
          >
            <Github className="w-5 h-5" />
          </a>
        </div>

        {/* Copyright text */}
        <p className="text-xs font-mono text-zinc-500">
          © 2026 Mohith Adari. Built with curiosity and code.
        </p>
      </div>
    </footer>
  );
};
