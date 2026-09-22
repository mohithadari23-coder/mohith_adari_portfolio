import React from 'react';
import { Linkedin, Github, ExternalLink, MessageSquare, ArrowUpRight } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto" aria-labelledby="contact-heading">
      {/* Section Header */}
      <div className="flex flex-col items-center mb-14 text-center">
        <span className="text-xs font-mono font-semibold uppercase tracking-widest text-cyan-400 mb-2">
          Get in Touch
        </span>
        <h2 id="contact-heading" className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Let's Connect
        </h2>
        <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mt-3 mb-4" />
        <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
          "I'm always interested in learning, building, collaborating, and connecting with people who share an interest in technology and AI."
        </p>
      </div>

      {/* Two Large Contact/Social Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
        {/* LinkedIn Card */}
        <a
          id="contact-card-linkedin"
          href="https://www.linkedin.com/in/mohith-adari-ba9bb3431/"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative rounded-2xl bg-gradient-to-br from-[#0c1326] to-[#090d18] border border-blue-600/30 hover:border-blue-500/80 p-8 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-blue-600/10 flex flex-col justify-between overflow-hidden"
        >
          {/* Subtle Ambient Glow */}
          <div
            aria-hidden="true"
            className="absolute top-0 right-0 w-40 h-40 bg-blue-600/15 rounded-full blur-3xl pointer-events-none group-hover:bg-blue-500/25 transition-colors"
          />

          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="p-3.5 rounded-2xl bg-[#0077B5]/15 border border-[#0077B5]/30 text-[#0077B5] group-hover:scale-110 transition-transform">
                <Linkedin className="w-8 h-8" />
              </div>
              <span className="p-2 rounded-xl bg-slate-900/80 text-slate-400 group-hover:text-white border border-slate-800 transition-colors">
                <ArrowUpRight className="w-5 h-5" />
              </span>
            </div>

            <span className="text-xs font-mono uppercase tracking-wider text-blue-400 font-semibold block mb-1">
              Professional Network
            </span>
            <h3 className="text-2xl font-bold text-white mb-2 tracking-tight group-hover:text-blue-300 transition-colors">
              LinkedIn
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              Connect with me on LinkedIn for student collaborations, mentorship, tech discussions, and college updates.
            </p>
          </div>

          <div className="pt-5 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono">
            <span className="text-slate-400 font-medium group-hover:text-slate-200">
              mohith-adari-ba9bb3431
            </span>
            <span className="text-blue-400 font-semibold inline-flex items-center gap-1">
              Connect <ExternalLink className="w-3.5 h-3.5" />
            </span>
          </div>
        </a>

        {/* GitHub Card */}
        <a
          id="contact-card-github"
          href="https://github.com/mohithadari23-coder"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative rounded-2xl bg-gradient-to-br from-[#0c1326] to-[#090d18] border border-cyan-600/30 hover:border-cyan-400/80 p-8 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-cyan-600/10 flex flex-col justify-between overflow-hidden"
        >
          {/* Subtle Ambient Glow */}
          <div
            aria-hidden="true"
            className="absolute top-0 right-0 w-40 h-40 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none group-hover:bg-cyan-400/25 transition-colors"
          />

          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="p-3.5 rounded-2xl bg-white/10 border border-white/20 text-white group-hover:scale-110 transition-transform">
                <Github className="w-8 h-8" />
              </div>
              <span className="p-2 rounded-xl bg-slate-900/80 text-slate-400 group-hover:text-white border border-slate-800 transition-colors">
                <ArrowUpRight className="w-5 h-5" />
              </span>
            </div>

            <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold block mb-1">
              Code & Repositories
            </span>
            <h3 className="text-2xl font-bold text-white mb-2 tracking-tight group-hover:text-cyan-300 transition-colors">
              GitHub
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              Explore my projects on GitHub to view my code repositories, daily practice exercises, and web development scripts.
            </p>
          </div>

          <div className="pt-5 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono">
            <span className="text-slate-400 font-medium group-hover:text-slate-200">
              @mohithadari23-coder
            </span>
            <span className="text-cyan-400 font-semibold inline-flex items-center gap-1">
              Explore Repos <ExternalLink className="w-3.5 h-3.5" />
            </span>
          </div>
        </a>
      </div>
    </section>
  );
};
