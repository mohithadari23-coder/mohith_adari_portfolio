import React from 'react';
import { GraduationCap, Brain, Compass, Target, Code, Cpu, Sparkles } from 'lucide-react';

export const About: React.FC = () => {
  const infoCards = [
    {
      title: 'Education',
      value: 'B.Tech – Computer Science Engineering',
      icon: <GraduationCap className="w-5 h-5 text-cyan-400" />,
      borderColor: 'border-cyan-500/30',
      bgColor: 'bg-cyan-950/20',
    },
    {
      title: 'Current Focus',
      value: 'Artificial Intelligence & Generative AI',
      icon: <Brain className="w-5 h-5 text-blue-400" />,
      borderColor: 'border-blue-500/30',
      bgColor: 'bg-blue-950/20',
    },
    {
      title: 'Experience Level',
      value: 'First-Year Student',
      icon: <Compass className="w-5 h-5 text-indigo-400" />,
      borderColor: 'border-indigo-500/30',
      bgColor: 'bg-indigo-950/20',
    },
    {
      title: 'Goal',
      value: 'Aspiring AI Engineer',
      icon: <Target className="w-5 h-5 text-teal-400" />,
      borderColor: 'border-teal-500/30',
      bgColor: 'bg-teal-950/20',
    },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto" aria-labelledby="about-heading">
      {/* Section Header */}
      <div className="flex flex-col items-center mb-14 text-center">
        <span className="text-xs font-mono font-semibold uppercase tracking-widest text-cyan-400 mb-2">
          Discover My Background
        </span>
        <h2 id="about-heading" className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          About Me
        </h2>
        <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mt-3" />
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Left Column: Professional Futuristic AI Avatar */}
        <div className="lg:col-span-5 flex flex-col items-center">
          <div className="relative w-full max-w-sm">
            {/* Outer subtle glow */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl blur-md opacity-30 group-hover:opacity-60 transition duration-500" />

            <div className="relative rounded-2xl bg-[#0b101d] border border-slate-700/80 p-6 sm:p-8 shadow-xl">
              {/* Avatar Graphic / AI Emblem */}
              <div className="relative mx-auto w-40 h-40 sm:w-48 sm:h-48 rounded-2xl bg-gradient-to-b from-slate-900 to-[#0e1628] border border-blue-500/30 flex flex-col items-center justify-center overflow-hidden shadow-inner group">
                {/* Circuit Grid Background */}
                <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:14px_14px]" />
                
                {/* Subtle animated scanline */}
                <div className="absolute inset-x-0 h-10 bg-gradient-to-b from-cyan-400/10 to-transparent animate-pulse" />

                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-16 h-16 rounded-xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-cyan-300 mb-2 shadow-lg shadow-blue-500/20">
                    <Cpu className="w-9 h-9" />
                  </div>
                  <span className="font-mono text-xs font-bold text-slate-300 tracking-wider">A MOHITH</span>
                  <span className="font-mono text-[10px] text-cyan-400">STUDENT DEVELOPER</span>
                </div>

                {/* Corner Accents */}
                <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-cyan-400" />
                <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-cyan-400" />
                <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-cyan-400" />
                <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-cyan-400" />
              </div>

              {/* Status Badge */}
              <div className="mt-6 pt-5 border-t border-slate-800 flex items-center justify-between text-xs font-mono">
                <span className="text-slate-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  Active Learner
                </span>
                <span className="text-cyan-400 font-semibold bg-cyan-950/60 px-2.5 py-1 rounded-md border border-cyan-800/50">
                  Year 1 • CS Engg
                </span>
              </div>

              {/* Quick Tech Tag */}
              <div className="mt-3 flex items-center gap-2 text-[11px] text-slate-400">
                <Code className="w-3.5 h-3.5 text-blue-400" />
                <span>Web Dev + Python & GenAI Exploration</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Bio & Info Cards */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
            <p className="font-normal text-slate-200">
              I am A Mohith, a first-year B.Tech Computer Science student and aspiring AI Engineer. I am currently developing my fundamentals in computer science, web development, and Generative AI.
            </p>
            <p className="text-slate-300">
              I believe the best way to learn technology is by building projects. I have started creating small practical applications such as a Student Grade Calculator and a Voting Eligibility Calculator while exploring Generative AI concepts.
            </p>
            <p className="text-slate-300">
              My current goal is to strengthen my programming fundamentals, learn more about Artificial Intelligence and Machine Learning, and gradually build more meaningful AI-powered applications.
            </p>
          </div>

          {/* 4 Small Information Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {infoCards.map((card) => (
              <div
                key={card.title}
                className={`p-4 rounded-xl ${card.bgColor} border ${card.borderColor} transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md`}
              >
                <div className="flex items-center gap-2.5 mb-1.5">
                  <div className="p-1.5 rounded-lg bg-slate-900/60 border border-slate-700/50">
                    {card.icon}
                  </div>
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400">
                    {card.title}
                  </span>
                </div>
                <div className="text-sm font-bold text-white pl-0.5">
                  {card.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
