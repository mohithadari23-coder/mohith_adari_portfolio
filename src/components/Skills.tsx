import React from 'react';
import { Globe, Sparkles, Terminal, CheckCircle2, BookOpen, Layers, Laptop } from 'lucide-react';

export const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Web Development',
      badge: 'Frontend Foundations',
      icon: <Globe className="w-6 h-6 text-cyan-400" />,
      accentColor: 'from-cyan-500/20 via-blue-500/10 to-transparent',
      borderColor: 'border-cyan-500/30 hover:border-cyan-400/60',
      iconBg: 'bg-cyan-950/40 text-cyan-300 border-cyan-800/40',
      skills: [
        'HTML',
        'CSS',
        'Basic JavaScript',
        'Basic Web Development',
      ],
    },
    {
      title: 'AI & Generative AI',
      badge: 'Core Interest',
      icon: <Sparkles className="w-6 h-6 text-purple-400" />,
      accentColor: 'from-purple-500/20 via-indigo-500/10 to-transparent',
      borderColor: 'border-purple-500/30 hover:border-purple-400/60',
      iconBg: 'bg-purple-950/40 text-purple-300 border-purple-800/40',
      skills: [
        'Generative AI Fundamentals',
        'AI Project Development',
        'Prompt-based AI experimentation',
      ],
    },
    {
      title: 'Programming / Development',
      badge: 'CS Fundamentals',
      icon: <Terminal className="w-6 h-6 text-blue-400" />,
      accentColor: 'from-blue-500/20 via-sky-500/10 to-transparent',
      borderColor: 'border-blue-500/30 hover:border-blue-400/60',
      iconBg: 'bg-blue-950/40 text-blue-300 border-blue-800/40',
      skills: [
        'Basic programming concepts',
        'Problem solving',
        'Project development',
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto" aria-labelledby="skills-heading">
      {/* Section Header */}
      <div className="flex flex-col items-center mb-14 text-center">
        <span className="text-xs font-mono font-semibold uppercase tracking-widest text-cyan-400 mb-2">
          Technical Toolkit
        </span>
        <h2 id="skills-heading" className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Skills & Technologies
        </h2>
        <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mt-3 mb-4" />
        <p className="text-sm sm:text-base text-slate-400 max-w-xl">
          A realistic overview of the fundamentals and tools I am actively developing as a first-year student.
        </p>
      </div>

      {/* 3 Skill Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {skillCategories.map((category) => (
          <div
            key={category.title}
            className={`group relative rounded-2xl bg-[#0b1120] border ${category.borderColor} p-6 sm:p-7 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-cyan-950/20 overflow-hidden flex flex-col justify-between`}
          >
            {/* Ambient top gradient on card */}
            <div
              aria-hidden="true"
              className={`absolute top-0 inset-x-0 h-28 bg-gradient-to-b ${category.accentColor} pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity`}
            />

            <div className="relative z-10">
              {/* Card Header */}
              <div className="flex items-center justify-between mb-5">
                <div className={`p-3 rounded-xl border ${category.iconBg} shadow-sm group-hover:scale-110 transition-transform`}>
                  {category.icon}
                </div>
                <span className="text-[11px] font-mono font-medium px-2.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-300">
                  {category.badge}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-4 tracking-tight">
                {category.title}
              </h3>

              {/* Skill List */}
              <ul className="space-y-3 mb-6">
                {category.skills.map((skill) => (
                  <li key={skill} className="flex items-start gap-2.5 text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span className="font-medium text-slate-200">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom Status footer on card */}
            <div className="relative z-10 pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span className="flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-blue-400" /> Hands-on practice
              </span>
              <span className="text-emerald-400">Level 1: Foundation</span>
            </div>
          </div>
        ))}
      </div>

      {/* Required Small Message */}
      <div className="flex items-center justify-center">
        <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-slate-900/90 border border-blue-500/20 text-slate-300 text-xs sm:text-sm shadow-md">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="font-medium text-slate-200">
            "Currently learning and continuously improving."
          </span>
        </div>
      </div>
    </section>
  );
};
