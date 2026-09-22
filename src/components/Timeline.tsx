import React from 'react';
import { TimelineStep } from '../types';
import { BookOpen, Globe, Code, Sparkles, Rocket } from 'lucide-react';

export const Timeline: React.FC = () => {
  const steps: (TimelineStep & { icon: React.ReactNode; status: string })[] = [
    {
      number: '01',
      title: 'Started Computer Science',
      description: 'Began my B.Tech journey in Computer Science Engineering.',
      icon: <BookOpen className="w-4 h-4 text-cyan-400" />,
      status: 'Foundation',
    },
    {
      number: '02',
      title: 'Web Development',
      description: 'Started learning the fundamentals of HTML, CSS, JavaScript, and basic web development.',
      icon: <Globe className="w-4 h-4 text-blue-400" />,
      status: 'In Progress',
    },
    {
      number: '03',
      title: 'Built Projects',
      description: 'Created beginner-friendly applications such as a Student Grade Calculator and Voting Eligibility Calculator.',
      icon: <Code className="w-4 h-4 text-indigo-400" />,
      status: 'Completed',
    },
    {
      number: '04',
      title: 'Exploring Generative AI',
      description: 'Started experimenting with Generative AI and AI-powered project ideas.',
      icon: <Sparkles className="w-4 h-4 text-purple-400" />,
      status: 'Active Focus',
    },
    {
      number: '05',
      title: 'Future Goal',
      description: 'Develop stronger skills in AI, Machine Learning, and software development and build meaningful real-world applications.',
      icon: <Rocket className="w-4 h-4 text-teal-400" />,
      status: 'Target Vision',
    },
  ];

  return (
    <section id="journey" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto" aria-labelledby="journey-heading">
      {/* Section Header */}
      <div className="flex flex-col items-center mb-16 text-center">
        <span className="text-xs font-mono font-semibold uppercase tracking-widest text-cyan-400 mb-2">
          Milestones & Evolution
        </span>
        <h2 id="journey-heading" className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Learning Journey
        </h2>
        <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mt-3 mb-4" />
        <p className="text-sm sm:text-base text-slate-400 max-w-xl">
          A visual chronicle of my progression as a first-year student transitioning into an AI Engineer.
        </p>
      </div>

      {/* Responsive Timeline Container */}
      <div className="relative">
        {/* Central Vertical line (desktop and mobile) */}
        <div
          aria-hidden="true"
          className="absolute left-6 md:left-1/2 top-4 bottom-4 w-0.5 -translate-x-1/2 bg-gradient-to-b from-blue-500 via-cyan-400 to-teal-400 opacity-30"
        />

        <div className="space-y-8 sm:space-y-12">
          {steps.map((step, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={step.number}
                className={`relative flex items-center ${
                  isEven ? 'md:flex-row-reverse' : 'md:flex-row'
                } flex-row`}
              >
                {/* Timeline Marker Node */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-[#070b14] border-2 border-cyan-400 shadow-lg shadow-cyan-500/20 z-10 group-hover:scale-110 transition-transform">
                  <span className="font-mono text-xs font-bold text-cyan-300">
                    {step.number}
                  </span>
                </div>

                {/* Content Card */}
                <div
                  className={`ml-16 md:ml-0 md:w-1/2 ${
                    isEven ? 'md:pl-12' : 'md:pr-12'
                  } w-full`}
                >
                  <div className="group relative rounded-2xl bg-[#0b1120] border border-slate-800 hover:border-blue-500/40 p-5 sm:p-6 shadow-lg transition-all duration-300 hover:-translate-y-0.5">
                    {/* Step Tag Header */}
                    <div className="flex items-center justify-between gap-2 mb-2.5">
                      <div className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 font-semibold">
                        {step.icon}
                        <span>{step.number} — Milestone</span>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-900 border border-slate-800 text-slate-400">
                        {step.status}
                      </span>
                    </div>

                    {/* Step Title */}
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2 tracking-tight group-hover:text-cyan-300 transition-colors">
                      {step.title}
                    </h3>

                    {/* Step Description */}
                    <p className="text-sm text-slate-300 leading-relaxed">
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
