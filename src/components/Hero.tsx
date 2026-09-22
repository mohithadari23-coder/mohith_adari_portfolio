import React from 'react';
import { ArrowDown, Linkedin, Terminal, Sparkles, Code2, BrainCircuit } from 'lucide-react';
import { AiNeuralCanvas } from './AiNeuralCanvas';

export const Hero: React.FC = () => {
  const scrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
      aria-label="Introduction & Hero"
    >
      {/* Background Neural Canvas & Ambient Glows */}
      <AiNeuralCanvas />

      {/* Subtle radial gradients - minimal, non-distracting */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" 
      />
      <div 
        aria-hidden="true" 
        className="absolute top-1/3 right-1/4 w-[360px] h-[360px] bg-cyan-500/8 rounded-full blur-3xl pointer-events-none" 
      />
      <div 
        aria-hidden="true" 
        className="absolute bottom-10 left-1/4 w-[400px] h-[400px] bg-indigo-600/8 rounded-full blur-3xl pointer-events-none" 
      />

      {/* Hero Content Box */}
      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Status Chip */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-700/70 text-slate-300 text-xs font-mono mb-8 shadow-inner hover:border-cyan-500/40 transition-colors">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-cyan-300 font-semibold">B.Tech First-Year CSE</span>
          <span className="text-slate-500">|</span>
          <span className="text-slate-300">Open to Hackathons & Mentorship</span>
        </div>

        {/* Small Introduction Text */}
        <p className="text-sm sm:text-base md:text-lg font-medium tracking-wide text-cyan-400 uppercase font-mono mb-3">
          Hello, I'm
        </p>

        {/* Large Heading */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-4">
          A Mohith
        </h1>

        {/* Main Title */}
        <div className="inline-block relative mb-4">
          <span className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-300 bg-clip-text text-transparent">
            Aspiring AI Engineer
          </span>
        </div>

        {/* Supporting Text */}
        <p className="text-base sm:text-lg md:text-xl font-medium text-slate-300 max-w-2xl mb-6 leading-relaxed">
          B.Tech Computer Science Student | Exploring AI, Generative AI & Web Development
        </p>

        {/* Short Paragraph */}
        <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          "I'm a first-year Computer Science student passionate about Artificial Intelligence, Generative AI, and building useful technology through hands-on projects."
        </p>

        {/* Two CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <a
            id="hero-view-projects-btn"
            href="#projects"
            onClick={scrollToProjects}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-sm sm:text-base text-white bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 shadow-lg shadow-blue-500/25 hover:shadow-cyan-500/35 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
          >
            <Code2 className="w-4 h-4 text-cyan-200" />
            <span>View My Projects</span>
            <ArrowDown className="w-4 h-4 text-white/80 animate-bounce" />
          </a>

          <a
            id="hero-connect-btn"
            href="https://www.linkedin.com/in/mohith-adari-ba9bb3431/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-sm sm:text-base text-slate-200 bg-slate-900/90 hover:bg-slate-800/90 border border-slate-700/80 hover:border-blue-400/60 shadow-md hover:text-white transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
          >
            <Linkedin className="w-4 h-4 text-[#0077B5]" />
            <span>Connect With Me</span>
          </a>
        </div>

        {/* Value pillars minimal tags */}
        <div className="mt-14 pt-8 border-t border-slate-800/60 w-full max-w-xl flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs font-mono text-slate-400">
          <span className="flex items-center gap-1.5 bg-slate-900/50 px-3 py-1 rounded-md border border-slate-800">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" /> Curiosity
          </span>
          <span className="text-slate-600">•</span>
          <span className="flex items-center gap-1.5 bg-slate-900/50 px-3 py-1 rounded-md border border-slate-800">
            <Terminal className="w-3.5 h-3.5 text-blue-400" /> Technology
          </span>
          <span className="text-slate-600">•</span>
          <span className="flex items-center gap-1.5 bg-slate-900/50 px-3 py-1 rounded-md border border-slate-800">
            <BrainCircuit className="w-3.5 h-3.5 text-indigo-400" /> AI & Growth
          </span>
        </div>
      </div>
    </section>
  );
};
