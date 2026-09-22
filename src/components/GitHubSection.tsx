import React from 'react';
import { Github, ExternalLink, GitBranch, GitCommit, Star, Terminal } from 'lucide-react';

export const GitHubSection: React.FC = () => {
  return (
    <section id="github-section" className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto" aria-labelledby="github-heading">
      <div className="relative rounded-3xl bg-gradient-to-r from-[#0b1222] via-[#0e162a] to-[#0b1222] border border-blue-500/20 p-8 sm:p-12 shadow-2xl overflow-hidden">
        {/* Subtle background glow */}
        <div
          aria-hidden="true"
          className="absolute -top-20 -right-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"
        />

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left / Main Text */}
          <div className="max-w-2xl text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-800/40 text-cyan-400 text-xs font-mono mb-4">
              <Github className="w-3.5 h-3.5" />
              <span>@mohithadari23-coder</span>
            </div>

            <h2 id="github-heading" className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
              Explore My Code
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
              "I am continuously learning by building projects and experimenting with new technologies. Explore my GitHub to see my learning journey and projects."
            </p>

            {/* Student commitment tags */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5">
                <GitCommit className="w-4 h-4 text-cyan-400" /> Hands-On Practice
              </span>
              <span className="text-slate-600">•</span>
              <span className="flex items-center gap-1.5">
                <GitBranch className="w-4 h-4 text-blue-400" /> Open Source Explorer
              </span>
              <span className="text-slate-600">•</span>
              <span className="flex items-center gap-1.5">
                <Terminal className="w-4 h-4 text-indigo-400" /> Continuous Learning
              </span>
            </div>
          </div>

          {/* Right / CTA Button Card */}
          <div className="flex flex-col items-center shrink-0 w-full sm:w-auto">
            <a
              id="github-cta-btn"
              href="https://github.com/mohithadari23-coder"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-base text-white bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-cyan-400/60 shadow-xl shadow-black/40 transition-all duration-300 hover:-translate-y-0.5 group"
            >
              <Github className="w-5 h-5 text-white group-hover:text-cyan-400 transition-colors" />
              <span>Visit GitHub</span>
              <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
            </a>
            <span className="text-[11px] font-mono text-slate-400 mt-2.5">
              Opens in a new browser tab
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
