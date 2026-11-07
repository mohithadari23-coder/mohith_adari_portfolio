import React from 'react';
import { Linkedin, Github, ExternalLink, MessageSquare, ArrowUpRight, Radio } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto" aria-labelledby="contact-heading">
      {/* Section Header */}
      <div className="flex flex-col items-center mb-14 text-center">
        <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#BDBDBD] mb-2 flex items-center gap-2">
          <Radio className="w-3.5 h-3.5 text-[#FFFFFF]" />
          <span>COMMUNICATION TERMINAL // 2026</span>
        </span>
        <h2 id="contact-heading" className="text-3xl sm:text-4xl font-extrabold text-[#FFFFFF] tracking-tight">
          Let's Connect
        </h2>
        <div className="w-12 h-0.5 bg-[#FFFFFF] rounded-full mt-3 mb-4" />
        <p className="text-sm sm:text-base text-[#BDBDBD] max-w-2xl leading-relaxed">
          "I'm always interested in learning, building, collaborating, and connecting with people who share an interest in technology and AI."
        </p>
      </div>

      {/* Three Contact Cards Grid with 3D Cybernetic Wireframe Styling */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-7 max-w-5xl mx-auto">
        {/* Email Card */}
        <a
          id="contact-card-email"
          href="mailto:mohithadari23@gmail.com"
          className="group relative rounded-2xl bg-black border border-zinc-800 hover:border-zinc-500 p-7 shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between overflow-hidden"
        >
          {/* 3D Wireframe Corner Brackets */}
          <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-white/60 pointer-events-none" />
          <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-white/60 pointer-events-none" />
          <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-white/60 pointer-events-none" />
          <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-white/60 pointer-events-none" />

          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="p-3.5 rounded-2xl bg-zinc-950 border border-zinc-700 text-[#FFFFFF] group-hover:bg-zinc-900 transition-colors shadow-sm">
                <MessageSquare className="w-7 h-7" />
              </div>
              <span className="p-2 rounded-xl bg-black text-[#BDBDBD] group-hover:text-[#FFFFFF] border border-zinc-800 transition-colors">
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </div>

            <span className="text-xs font-mono uppercase tracking-wider text-[#BDBDBD] font-semibold block mb-1">
              [UPLINK // EMAIL]
            </span>
            <h3 className="text-xl font-bold text-[#FFFFFF] mb-2 tracking-tight group-hover:text-zinc-200 transition-colors">
              Email
            </h3>
            <p className="text-[#BDBDBD] text-xs sm:text-sm leading-relaxed mb-4 font-normal">
              Reach out directly for AI collaborations, hackathon teams, student project mentorship, or inquiries.
            </p>
          </div>

          <div className="pt-4 border-t border-zinc-800 flex items-center justify-between text-xs font-mono">
            <span className="text-[#FFFFFF] font-medium truncate max-w-[170px]" title="mohithadari23@gmail.com">
              mohithadari23@gmail.com
            </span>
            <span className="text-[#FFFFFF] font-semibold inline-flex items-center gap-1 shrink-0">
              Send Email <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </div>
        </a>

        {/* LinkedIn Card */}
        <a
          id="contact-card-linkedin"
          href="https://www.linkedin.com/in/mohith-adari-ba9bb3431/"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative rounded-2xl bg-black border border-zinc-800 hover:border-zinc-500 p-7 shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between overflow-hidden"
        >
          {/* 3D Wireframe Corner Brackets */}
          <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-white/60 pointer-events-none" />
          <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-white/60 pointer-events-none" />
          <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-white/60 pointer-events-none" />
          <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-white/60 pointer-events-none" />

          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="p-3.5 rounded-2xl bg-zinc-950 border border-zinc-700 text-[#FFFFFF] group-hover:bg-zinc-900 transition-colors shadow-sm">
                <Linkedin className="w-7 h-7" />
              </div>
              <span className="p-2 rounded-xl bg-black text-[#BDBDBD] group-hover:text-[#FFFFFF] border border-zinc-800 transition-colors">
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </div>

            <span className="text-xs font-mono uppercase tracking-wider text-[#BDBDBD] font-semibold block mb-1">
              [NETWORK // LINKEDIN]
            </span>
            <h3 className="text-xl font-bold text-[#FFFFFF] mb-2 tracking-tight group-hover:text-zinc-200 transition-colors">
              LinkedIn
            </h3>
            <p className="text-[#BDBDBD] text-xs sm:text-sm leading-relaxed mb-4 font-normal">
              Connect with me on LinkedIn for student network, engineering updates, and tech discussions.
            </p>
          </div>

          <div className="pt-4 border-t border-zinc-800 flex items-center justify-between text-xs font-mono">
            <span className="text-[#BDBDBD] font-medium group-hover:text-[#FFFFFF] truncate max-w-[170px]">
              mohith-adari
            </span>
            <span className="text-[#FFFFFF] font-semibold inline-flex items-center gap-1 shrink-0">
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
          className="group relative rounded-2xl bg-black border border-zinc-800 hover:border-zinc-500 p-7 shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between overflow-hidden"
        >
          {/* 3D Wireframe Corner Brackets */}
          <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-white/60 pointer-events-none" />
          <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-white/60 pointer-events-none" />
          <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-white/60 pointer-events-none" />
          <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-white/60 pointer-events-none" />

          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="p-3.5 rounded-2xl bg-zinc-950 border border-zinc-700 text-[#FFFFFF] group-hover:bg-zinc-900 transition-colors shadow-sm">
                <Github className="w-7 h-7" />
              </div>
              <span className="p-2 rounded-xl bg-black text-[#BDBDBD] group-hover:text-[#FFFFFF] border border-zinc-800 transition-colors">
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </div>

            <span className="text-xs font-mono uppercase tracking-wider text-[#BDBDBD] font-semibold block mb-1">
              [SOURCE // REPOSITORIES]
            </span>
            <h3 className="text-xl font-bold text-[#FFFFFF] mb-2 tracking-tight group-hover:text-zinc-200 transition-colors">
              GitHub
            </h3>
            <p className="text-[#BDBDBD] text-xs sm:text-sm leading-relaxed mb-4 font-normal">
              Explore my code repositories, Python algorithms, n8n automations, and web projects.
            </p>
          </div>

          <div className="pt-4 border-t border-zinc-800 flex items-center justify-between text-xs font-mono">
            <span className="text-[#BDBDBD] font-medium group-hover:text-[#FFFFFF] truncate max-w-[170px]">
              @mohithadari23
            </span>
            <span className="text-[#FFFFFF] font-semibold inline-flex items-center gap-1 shrink-0">
              Explore <ExternalLink className="w-3.5 h-3.5" />
            </span>
          </div>
        </a>
      </div>
    </section>
  );
};
