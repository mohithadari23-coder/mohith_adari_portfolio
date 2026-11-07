import React from 'react';
import { Trophy, ShieldCheck, ArrowUpRight } from 'lucide-react';

export const Achievements: React.FC = () => {
  const achievementsList = [
    {
      id: 'academic-distinction',
      category: 'Academics & CS Foundation',
      title: 'First-Year Computer Science Excellence',
      organization: 'B.Tech CSE Department',
      date: '2025 – Present',
      description:
        'Demonstrating top academic standing across foundational computer science coursework, object-oriented concepts, and algorithmic mathematics.',
      highlight: 'Strong CS Core',
      stats: 'Grade A+ Standing',
    },
    {
      id: 'hackathon-builder',
      category: 'AI & Engineering',
      title: 'SkillPath AI Autonomous Platform',
      organization: 'Independent Innovation',
      date: '2026',
      description:
        'Architected and shipped SkillPath AI deployed to production, establishing intelligent roadmap generation and career gap diagnosis for developers.',
      highlight: 'Shipped to Production',
      stats: 'Live Web App',
      link: 'https://skillpathai18.lovable.app',
    },
    {
      id: 'automation-workflows',
      category: 'Workflow Automation',
      title: 'n8n Autonomous AI News Pipeline',
      organization: 'Open Source Workflow Systems',
      date: '2026',
      description:
        'Constructed self-triggering multi-node automation pipelines scraping arXiv & tech feeds, leveraging LLMs to deliver daily digests via email.',
      highlight: 'Zero-Touch Automation',
      stats: '100% Automated',
    },
    {
      id: 'coding-consistency',
      category: 'Practice & Algorithms',
      title: 'Daily Code & Python Problem Solving',
      organization: 'GitHub & Coding Platforms',
      date: 'Active Milestone',
      description:
        'Consistent repository commits focusing on Python 3 logic validation, data structures, and hands-on web technology implementations.',
      highlight: 'Continuous Practice',
      stats: 'Active Commits',
      link: 'https://github.com/mohithadari23-coder',
    },
  ];

  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto" aria-labelledby="achievements-heading">
      {/* Section Header */}
      <div className="flex flex-col items-center mb-14 text-center">
        <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#BDBDBD] mb-2">
          Milestones & Recognition
        </span>
        <h2 id="achievements-heading" className="text-3xl sm:text-4xl font-extrabold text-[#FFFFFF] tracking-tight">
          Achievements & Recognition
        </h2>
        <div className="w-12 h-0.5 bg-[#FFFFFF] rounded-full mt-3 mb-4" />
        <p className="text-sm sm:text-base text-[#BDBDBD] max-w-xl">
          Key academic, technological, and project milestones accomplished during my computer science journey.
        </p>
      </div>

      {/* Grid of Achievement Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {achievementsList.map((item) => (
          <div
            key={item.id}
            className="group relative rounded-2xl bg-black border border-zinc-800 hover:border-zinc-600 p-5 sm:p-7 shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden"
          >
            {/* 3D Wireframe Corner Accent */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-zinc-800/40 to-transparent pointer-events-none rounded-bl-3xl" />
            <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-zinc-600" />
            <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-zinc-600" />

            <div>
              {/* Top Row: Category & Status Indicator */}
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#BDBDBD]">
                  {item.category}
                </span>

                {/* Animated status badge */}
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black border border-zinc-700 text-xs font-mono text-[#BDBDBD]">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFFFFF] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FFFFFF]"></span>
                  </span>
                  <span>{item.highlight}</span>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-[#FFFFFF] mb-2 tracking-tight group-hover:text-zinc-200 transition-colors flex items-center gap-2">
                <Trophy className="w-5 h-5 text-[#FFFFFF] shrink-0" />
                <span>{item.title}</span>
              </h3>

              {/* Organization & Date */}
              <div className="text-xs font-mono text-[#BDBDBD] mb-3 flex items-center gap-2">
                <span>{item.organization}</span>
                <span>•</span>
                <span className="text-zinc-500">{item.date}</span>
              </div>

              {/* Description */}
              <p className="text-sm text-[#BDBDBD] leading-relaxed mb-6 font-normal">
                "{item.description}"
              </p>
            </div>

            {/* Bottom Footer Details */}
            <div className="pt-4 border-t border-zinc-800 flex items-center justify-between text-xs font-mono">
              <span className="font-semibold text-[#FFFFFF] px-2.5 py-1 rounded bg-black border border-zinc-800">
                {item.stats}
              </span>

              {item.link ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[#BDBDBD] hover:text-[#FFFFFF] transition-colors"
                >
                  <span>Verify / View</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              ) : (
                <span className="text-[#BDBDBD] flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-zinc-400" /> Verified Record
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
