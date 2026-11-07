import React from 'react';
import { GraduationCap, Brain, Compass, Target, Code, Cpu, Rocket, Gamepad2 } from 'lucide-react';
import { About3DEmblem } from './About3DEmblem';

export const About: React.FC = () => {
  const infoCards = [
    {
      title: 'Education',
      value: 'First-Year B.Tech Computer Science Student',
      icon: <GraduationCap className="w-5 h-5 text-[#FFFFFF]" />,
    },
    {
      title: 'Core Interests',
      value: 'Machine Learning, Game Development & Space Technology',
      icon: <Brain className="w-5 h-5 text-[#FFFFFF]" />,
    },
    {
      title: 'Experience Level',
      value: 'First-Year B.Tech Student',
      icon: <Compass className="w-5 h-5 text-[#FFFFFF]" />,
    },
    {
      title: 'Goal',
      value: 'AI Engineer',
      icon: <Target className="w-5 h-5 text-[#FFFFFF]" />,
    },
  ];

  const interestHighlights = [
    {
      title: 'Machine Learning & AI',
      desc: 'Developing predictive models, LLM roadmaps (SkillPath AI), and intelligent agents.',
      icon: <Brain className="w-4 h-4 text-[#FFFFFF]" />,
    },
    {
      title: 'Game Development',
      desc: 'Exploring real-time 3D graphics, kinematics, physics loops, and interactive gameplay.',
      icon: <Gamepad2 className="w-4 h-4 text-[#FFFFFF]" />,
    },
    {
      title: 'Space Technology',
      desc: 'Fascinated by orbital mechanics, satellite telemetry, and computational aerospace systems.',
      icon: <Rocket className="w-4 h-4 text-[#FFFFFF]" />,
    },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto" aria-labelledby="about-heading">
      {/* Section Header */}
      <div className="flex flex-col items-center mb-14 text-center">
        <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#BDBDBD] mb-2">
          Discover My Background
        </span>
        <h2 id="about-heading" className="text-3xl sm:text-4xl font-extrabold text-[#FFFFFF] tracking-tight">
          About Me
        </h2>
        <div className="w-12 h-0.5 bg-[#FFFFFF] rounded-full mt-3" />
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Left Column: 3D Futuristic AI Emblem Card */}
        <div className="lg:col-span-5 flex flex-col items-center">
          <div className="relative w-full max-w-sm">
            <div className="relative rounded-2xl bg-black border border-zinc-800 p-6 sm:p-8 shadow-2xl overflow-hidden group hover:border-zinc-600 transition-colors">
              {/* Subtle Wireframe Grid Background */}
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:14px_14px]" />

              {/* Avatar Graphic / 3D Futuristic Interactive Cyber-Core */}
              <div className="relative mx-auto w-44 h-44 sm:w-52 sm:h-52 rounded-2xl bg-black border border-zinc-800 flex flex-col items-center justify-center overflow-hidden shadow-inner group">
                {/* Real-time 3D Three.js Emblem */}
                <div className="absolute inset-0 z-0">
                  <About3DEmblem />
                </div>

                <div className="absolute bottom-2.5 z-10 flex flex-col items-center bg-black/80 px-3 py-1 rounded-full border border-zinc-800 backdrop-blur-sm pointer-events-none">
                  <span className="font-mono text-[11px] font-bold text-[#FFFFFF] tracking-wider">MOHITH ADARI</span>
                  <span className="font-mono text-[9px] text-[#BDBDBD]">CSE // AI CORE 3D</span>
                </div>

                {/* 3D Futuristic Corner Accents */}
                <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-white/70" />
                <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-white/70" />
                <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-white/70" />
                <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-white/70" />
              </div>

              {/* Status Badge */}
              <div className="mt-6 pt-5 border-t border-zinc-800 flex items-center justify-between text-xs font-mono">
                <span className="text-[#BDBDBD] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FFFFFF]" />
                  Active Learner
                </span>
                <span className="text-[#FFFFFF] font-semibold bg-zinc-900 px-2.5 py-1 rounded-md border border-zinc-700">
                  Year 1 • CS Engg
                </span>
              </div>

              {/* Quick Tech Tag */}
              <div className="mt-3 flex items-center gap-2 text-[11px] text-[#BDBDBD]">
                <Code className="w-3.5 h-3.5 text-[#FFFFFF]" />
                <span>Python • ML • n8n Automations • 3D Web</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Bio & Info Cards */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <div className="space-y-4 text-[#BDBDBD] text-sm sm:text-base leading-relaxed mb-8">
            <p className="font-normal text-[#FFFFFF]">
              I am <strong className="text-[#FFFFFF] font-semibold">Mohith Adari</strong>, a <span className="text-[#FFFFFF] font-medium underline underline-offset-4 decoration-zinc-700">first-year B.Tech Computer Science student</span> and driven <strong className="text-[#FFFFFF] font-semibold">AI Engineer</strong>. I bridge computational theory and practical software engineering.
            </p>
            <p className="text-[#BDBDBD]">
              My engineering passions center around <strong className="text-[#FFFFFF] font-medium">Machine Learning</strong>, <strong className="text-[#FFFFFF] font-medium">Game Development</strong>, and <strong className="text-[#FFFFFF] font-medium">Space Technology</strong>. Whether building automated workflows in n8n, designing personalized AI learning roadmaps with SkillPath AI, or programming algorithmic Python tools, I focus on shipping real software.
            </p>
            <p className="text-[#BDBDBD]">
              My goal as an <strong className="text-[#FFFFFF] font-medium">AI Engineer</strong> is to push the frontiers of artificial intelligence and interactive systems to solve meaningful, high-impact challenges.
            </p>
          </div>

          {/* 4 Small Information Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-6">
            {infoCards.map((card) => (
              <div
                key={card.title}
                className="p-4 rounded-xl bg-black border border-zinc-800 transition-all duration-300 hover:border-zinc-600 hover:bg-zinc-950"
              >
                <div className="flex items-center gap-2.5 mb-1.5">
                  <div className="p-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-[#FFFFFF]">
                    {card.icon}
                  </div>
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#BDBDBD]">
                    {card.title}
                  </span>
                </div>
                <div className="text-sm font-bold text-[#FFFFFF] pl-0.5 leading-snug">
                  {card.value}
                </div>
              </div>
            ))}
          </div>

          {/* 3 Interest Highlights Strip */}
          <div className="pt-4 border-t border-zinc-800">
            <span className="text-xs font-mono uppercase tracking-wider text-[#BDBDBD] block mb-3">
              Specialized Engineering Domains:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {interestHighlights.map((interest) => (
                <div
                  key={interest.title}
                  className="p-3 rounded-lg bg-black border border-zinc-800 hover:border-zinc-600 transition-colors"
                >
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#FFFFFF] mb-1">
                    {interest.icon}
                    <span>{interest.title}</span>
                  </div>
                  <p className="text-[11px] text-[#BDBDBD] leading-tight">
                    {interest.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
