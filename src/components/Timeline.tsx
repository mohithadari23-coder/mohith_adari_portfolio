import React from 'react';
import { TimelineStep } from '../types';
import { BookOpen, Globe, Code, Sparkles, Rocket, Cpu } from 'lucide-react';

export const Timeline: React.FC = () => {
  const steps: (TimelineStep & { icon: React.ReactNode; status: string; code: string })[] = [
    {
      number: '01',
      code: 'SYS_01 // FOUNDATION',
      title: 'Started Computer Science',
      description: 'Began my B.Tech journey in Computer Science Engineering.',
      icon: <BookOpen className="w-4 h-4 text-[#FFFFFF]" />,
      status: 'Foundation',
    },
    {
      number: '02',
      code: 'SYS_02 // WEB_LAYER',
      title: 'Web Development',
      description: 'Started learning the fundamentals of HTML, CSS, JavaScript, and basic web development.',
      icon: <Globe className="w-4 h-4 text-[#FFFFFF]" />,
      status: 'In Progress',
    },
    {
      number: '03',
      code: 'SYS_03 // ALGO_BUILDS',
      title: 'Built Projects',
      description: 'Built practical software including Vote Eligibility with Python and interactive web applications.',
      icon: <Code className="w-4 h-4 text-[#FFFFFF]" />,
      status: 'Completed',
    },
    {
      number: '04',
      code: 'SYS_04 // AI_PIPELINES',
      title: 'AI & Workflow Automation',
      description: 'Launched SkillPath AI (personalized roadmaps) and built n8n workflow automations dispatching AI news summaries to email.',
      icon: <Sparkles className="w-4 h-4 text-[#FFFFFF]" />,
      status: 'Live & Active',
    },
    {
      number: '05',
      code: 'SYS_05 // FUTURE_HORIZON',
      title: 'Future Goal',
      description: 'Develop stronger skills in AI, Machine Learning, and software development and build meaningful real-world applications.',
      icon: <Rocket className="w-4 h-4 text-[#FFFFFF]" />,
      status: 'Target Vision',
    },
  ];

  return (
    <section id="journey" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto" aria-labelledby="journey-heading">
      {/* Section Header */}
      <div className="flex flex-col items-center mb-16 text-center">
        <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#BDBDBD] mb-2 flex items-center gap-2">
          <Cpu className="w-3.5 h-3.5 text-[#FFFFFF]" />
          <span>CHRONOLOGY & TRAJECTORY</span>
        </span>
        <h2 id="journey-heading" className="text-3xl sm:text-4xl font-extrabold text-[#FFFFFF] tracking-tight">
          Learning Journey
        </h2>
        <div className="w-12 h-0.5 bg-[#FFFFFF] rounded-full mt-3 mb-4" />
        <p className="text-sm sm:text-base text-[#BDBDBD] max-w-xl">
          A visual chronicle of my progression as a first-year student transitioning into an AI Engineer.
        </p>
      </div>

      {/* Responsive Timeline Container with 3D Cyber Nodes */}
      <div className="relative">
        {/* Central Vertical line (desktop and mobile) */}
        <div
          aria-hidden="true"
          className="absolute left-4 sm:left-6 md:left-1/2 top-4 bottom-4 w-0.5 -translate-x-1/2 bg-zinc-800"
        />

        <div className="space-y-6 sm:space-y-12">
          {steps.map((step, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={step.number}
                className={`relative flex items-center ${
                  isEven ? 'md:flex-row-reverse' : 'md:flex-row'
                } flex-row`}
              >
                {/* 3D Timeline Marker Node */}
                <div className="absolute left-4 sm:left-6 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-black border-2 border-white shadow-xl z-10 group">
                  <div className="absolute -inset-1 rounded-full border border-zinc-700 pointer-events-none" />
                  <span className="font-mono text-[10px] sm:text-xs font-bold text-[#FFFFFF]">
                    {step.number}
                  </span>
                </div>

                {/* Content Card */}
                <div
                  className={`ml-11 sm:ml-16 md:ml-0 md:w-1/2 ${
                    isEven ? 'md:pl-12' : 'md:pr-12'
                  } w-full`}
                >
                  <div className="group relative rounded-2xl bg-black border border-zinc-800 hover:border-zinc-500 p-5 sm:p-6 shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                    {/* 3D Corner Accents */}
                    <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-white/60 pointer-events-none" />
                    <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-white/60 pointer-events-none" />
                    <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-white/60 pointer-events-none" />
                    <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-white/60 pointer-events-none" />

                    {/* Step Tag Header */}
                    <div className="flex items-center justify-between gap-2 mb-2.5">
                      <div className="inline-flex items-center gap-1.5 text-xs font-mono text-[#FFFFFF] font-semibold">
                        {step.icon}
                        <span>{step.code}</span>
                      </div>
                      <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-zinc-950 border border-zinc-800 text-[#BDBDBD]">
                        {step.status}
                      </span>
                    </div>

                    {/* Step Title */}
                    <h3 className="text-lg sm:text-xl font-bold text-[#FFFFFF] mb-2 tracking-tight group-hover:text-zinc-200 transition-colors">
                      {step.title}
                    </h3>

                    {/* Step Description */}
                    <p className="text-sm text-[#BDBDBD] leading-relaxed font-normal">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
