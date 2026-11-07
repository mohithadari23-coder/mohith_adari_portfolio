import React from 'react';
import { Globe, Sparkles, Terminal, CheckCircle2, BookOpen, Cpu, ShieldCheck } from 'lucide-react';

export const Skills: React.FC = () => {
  const skillCategories = [
    {
      moduleId: 'MOD_01',
      title: 'Web Development',
      badge: 'Frontend Foundations',
      codeTag: 'CSE // WEB_STACK',
      icon: <Globe className="w-5 h-5 text-[#FFFFFF]" />,
      skills: [
        'HTML',
        'CSS',
        'Basic JavaScript',
        'Basic Web Development',
      ],
    },
    {
      moduleId: 'MOD_02',
      title: 'AI & Generative AI',
      badge: 'Core Focus',
      codeTag: 'AI // GEN_SYSTEMS',
      icon: <Sparkles className="w-5 h-5 text-[#FFFFFF]" />,
      skills: [
        'Generative AI Fundamentals',
        'AI Project Development',
        'Prompt-based AI experimentation',
      ],
    },
    {
      moduleId: 'MOD_03',
      title: 'Programming / Development',
      badge: 'CS Fundamentals',
      codeTag: 'ALGO // PROBLEM_SOLVING',
      icon: <Terminal className="w-5 h-5 text-[#FFFFFF]" />,
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
        <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#BDBDBD] mb-2 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FFFFFF]" />
          <span>TECHNICAL MATRIX // 2026</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#FFFFFF]" />
        </span>
        <h2 id="skills-heading" className="text-3xl sm:text-4xl font-extrabold text-[#FFFFFF] tracking-tight">
          Skills & Technologies
        </h2>
        <div className="w-12 h-0.5 bg-[#FFFFFF] rounded-full mt-3 mb-4" />
        <p className="text-sm sm:text-base text-[#BDBDBD] max-w-xl">
          A realistic overview of the fundamentals and tools I am actively developing as a first-year student.
        </p>
      </div>

      {/* 3 Skill Cards Grid with 3D Cybernetic Brackets */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {skillCategories.map((category) => (
          <div
            key={category.title}
            className="group relative rounded-2xl bg-black border border-zinc-800 hover:border-zinc-500 p-6 sm:p-7 shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden"
          >
            {/* 3D Wireframe Corner Brackets */}
            <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-white/60 pointer-events-none" />
            <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-white/60 pointer-events-none" />
            <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-white/60 pointer-events-none" />
            <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-white/60 pointer-events-none" />

            <div>
              {/* Card Header */}
              <div className="flex items-center justify-between mb-5">
                <div className="p-3 rounded-xl border border-zinc-700 bg-zinc-950 text-[#FFFFFF] shadow-sm group-hover:scale-105 transition-transform">
                  {category.icon}
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-[10px] font-mono text-[#BDBDBD] tracking-wider mb-0.5">
                    {category.codeTag}
                  </span>
                  <span className="text-[11px] font-mono font-medium px-2.5 py-0.5 rounded-full bg-black border border-zinc-800 text-[#BDBDBD]">
                    {category.badge}
                  </span>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-[#FFFFFF] mb-4 tracking-tight">
                {category.title}
              </h3>

              {/* Skill List */}
              <ul className="space-y-3 mb-6">
                {category.skills.map((skill) => (
                  <li key={skill} className="flex items-start gap-2.5 text-sm text-[#BDBDBD]">
                    <CheckCircle2 className="w-4 h-4 text-[#FFFFFF] shrink-0 mt-0.5" />
                    <span className="font-medium text-[#FFFFFF]">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom Status footer on card */}
            <div className="pt-4 border-t border-zinc-800 flex items-center justify-between text-[11px] font-mono text-[#BDBDBD]">
              <span className="flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-[#BDBDBD]" /> Hands-on practice
              </span>
              <span className="text-[#FFFFFF] font-medium bg-zinc-900 px-2 py-0.5 rounded border border-zinc-800">
                {category.moduleId} // ACTIVE
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Required Small Message with 3D Cyber Styling */}
      <div className="flex items-center justify-center px-2">
        <div className="inline-flex flex-wrap items-center justify-center text-center gap-2 px-4 sm:px-6 py-2.5 rounded-full bg-black border border-zinc-800 text-[#BDBDBD] text-xs sm:text-sm shadow-xl max-w-full">
          <span className="w-2 h-2 rounded-full bg-[#FFFFFF] shrink-0" />
          <span className="font-medium text-[#FFFFFF]">
            "Currently learning and continuously improving."
          </span>
          <span className="hidden sm:inline text-zinc-600 font-mono">|</span>
          <span className="text-[11px] sm:text-xs font-mono text-[#BDBDBD]">CSE FOUNDATION</span>
        </div>
      </div>
    </section>
  );
};
