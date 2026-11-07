import React from 'react';
import { Github, ExternalLink, GitBranch, GitCommit, Terminal, Cpu } from 'lucide-react';

export const GitHubSection: React.FC = () => {
  return (
    <section id="github-section" className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto" aria-labelledby="github-heading">
      <div className="relative rounded-3xl bg-black border border-zinc-800 hover:border-zinc-600 p-8 sm:p-12 shadow-2xl overflow-hidden transition-colors">
        {/* 3D Wireframe Corner Accents */}
        <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-white/70 pointer-events-none" />
        <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-white/70 pointer-events-none" />
        <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-white/70 pointer-events-none" />
        <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-white/70 pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left / Main Text */}
          <div className="max-w-2xl text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-950 border border-zinc-700 text-[#FFFFFF] text-xs font-mono mb-4 shadow-sm">
              <Github className="w-3.5 h-3.5" />
              <span>@mohithadari23-coder</span>
              <span className="text-zinc-600">|</span>
              <span className="text-xs text-[#BDBDBD]">CSE REPOSITORIES</span>
            </div>

            <h2 id="github-heading" className="text-3xl sm:text-4xl font-extrabold text-[#FFFFFF] tracking-tight mb-4">
              Explore My Code
            </h2>

            <p className="text-[#BDBDBD] text-sm sm:text-base leading-relaxed mb-6 font-normal">
              "I am continuously learning by building projects and experimenting with new technologies. Explore my GitHub to see my learning journey and projects."
            </p>

            {/* Student commitment tags */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs font-mono text-[#BDBDBD]">
              <span className="flex items-center gap-1.5 text-[#BDBDBD]">
                <GitCommit className="w-4 h-4 text-[#FFFFFF]" /> Hands-On Practice
              </span>
              <span className="text-zinc-700">•</span>
              <span className="flex items-center gap-1.5 text-[#BDBDBD]">
                <GitBranch className="w-4 h-4 text-[#FFFFFF]" /> Open Source Explorer
              </span>
              <span className="text-zinc-700">•</span>
              <span className="flex items-center gap-1.5 text-[#BDBDBD]">
                <Terminal className="w-4 h-4 text-[#FFFFFF]" /> Continuous Learning
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
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-base text-[#000000] bg-[#FFFFFF] hover:bg-zinc-200 shadow-xl transition-all duration-300 hover:-translate-y-1 group"
            >
              <Github className="w-5 h-5 text-[#000000]" />
              <span>Visit GitHub</span>
              <ExternalLink className="w-4 h-4 text-zinc-700 group-hover:text-black transition-colors" />
            </a>
            <span className="text-[11px] font-mono text-zinc-500 mt-2.5">
              [GIT_STATUS: ACTIVE // REPOS ONLINE]
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
