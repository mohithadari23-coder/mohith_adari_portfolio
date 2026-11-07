import React from 'react';
import { ArrowDown, Linkedin, Code2, ChevronDown } from 'lucide-react';
import { FuturisticHero3D } from './FuturisticHero3D';

export const Hero: React.FC = () => {
  const scrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[100dvh] flex flex-col items-center justify-center pt-24 sm:pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#000000]"
      aria-label="Introduction & Hero"
    >
      {/* Full Black and White 3D Futuristic Wireframe Sphere Animation */}
      <FuturisticHero3D />

      {/* Central Reading Scrim: Guarantees 100% text readability across all viewports */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none z-[1] flex items-center justify-center"
      >
        <div className="w-full max-w-3xl h-[420px] sm:h-[520px] rounded-full bg-radial from-black/85 via-black/55 to-transparent blur-xl" />
      </div>

      {/* Centered Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center w-full">
        {/* 1. Small AI Engineer Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-black border border-zinc-800 text-[11px] sm:text-xs font-mono text-[#FFFFFF] mb-5 sm:mb-6 shadow-2xl">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FFFFFF]" />
          <span className="font-medium tracking-wide">AI Engineer</span>
          <span className="text-zinc-600">|</span>
          <span className="text-[#BDBDBD]">B.Tech CSE</span>
        </div>

        {/* 2. Centered Name (Fluid Responsive Typography) */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-[#FFFFFF] mb-2 sm:mb-3 leading-[1.1] break-words">
          Mohith Adari
        </h1>

        {/* 3. Professional AI Engineer Title */}
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-[#FFFFFF] mb-4 sm:mb-5">
          AI Engineer
        </h2>

        {/* 4. Short Introduction */}
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#BDBDBD] max-w-2xl mx-auto leading-relaxed mb-8 sm:mb-10 font-normal px-2">
          First-Year B.Tech Computer Science student passionate about{' '}
          <span className="text-[#FFFFFF] font-medium">Machine Learning</span>,{' '}
          <span className="text-[#FFFFFF] font-medium">Game Development</span>, and{' '}
          <span className="text-[#FFFFFF] font-medium">Space Technology</span>, building practical AI systems through code.
        </p>

        {/* 5. Two Clear Buttons (Fluid on Mobile, Inline on Tablet/Desktop) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full max-w-xs sm:max-w-none">
          <a
            id="hero-view-projects-btn"
            href="#projects"
            onClick={scrollToProjects}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 rounded-xl font-semibold text-sm sm:text-base text-[#000000] bg-[#FFFFFF] hover:bg-zinc-200 shadow-lg shadow-white/5 transition-all duration-200 active:scale-[0.98] min-h-[44px]"
          >
            <Code2 className="w-4 h-4 text-[#000000]" />
            <span>View My Projects</span>
            <ArrowDown className="w-4 h-4 text-[#000000]" />
          </a>

          <a
            id="hero-connect-btn"
            href="https://www.linkedin.com/in/mohith-adari-ba9bb3431/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 rounded-xl font-semibold text-sm sm:text-base text-[#FFFFFF] bg-[#000000] hover:bg-zinc-900 border border-zinc-700 hover:border-zinc-500 shadow-sm transition-all duration-200 active:scale-[0.98] min-h-[44px]"
          >
            <Linkedin className="w-4 h-4 text-[#FFFFFF]" />
            <span>Connect With Me</span>
          </a>
        </div>
      </div>

      {/* 6. Minimal Scroll-Down Indicator */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center">
        <a
          href="#about"
          onClick={scrollToAbout}
          className="group flex flex-col items-center gap-1 text-xs font-mono text-[#BDBDBD] hover:text-[#FFFFFF] transition-colors focus:outline-none p-2 min-h-[44px] justify-center"
          aria-label="Scroll down to About section"
        >
          <span className="tracking-widest uppercase text-[10px]">Scroll</span>
          <ChevronDown className="w-4 h-4 text-[#BDBDBD] group-hover:text-[#FFFFFF] animate-bounce" />
        </a>
      </div>
    </section>
  );
};
