import React from 'react';
import { ExternalLink, Github, Calculator, UserCheck, Sparkles, Code2, ArrowUpRight } from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectsProps {
  onSelectProject: (project: ProjectItem) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const projectList: ProjectItem[] = [
    {
      id: 'grade-calculator',
      title: 'Student Grade Calculator',
      description:
        'A simple web-based application that calculates student grades based on marks and provides an easy way to understand academic performance.',
      technology: ['HTML', 'CSS', 'JavaScript'],
      techString: 'HTML | CSS | JavaScript',
      actionLabel: 'View Project',
      type: 'grade-calc',
    },
    {
      id: 'voting-calculator',
      title: 'Voting Eligibility Calculator',
      description:
        'A simple application that checks whether a person meets the required age criteria for voting and displays the result clearly.',
      technology: ['HTML', 'CSS', 'JavaScript'],
      techString: 'HTML | CSS | JavaScript',
      actionLabel: 'View Project',
      type: 'voting-calc',
    },
    {
      id: 'genai-experiments',
      title: 'Generative AI Experiments',
      description:
        'A collection of beginner-level experiments exploring Generative AI concepts and how AI can be used to build useful applications.',
      technology: ['Generative AI', 'AI Tools', 'Prompt Engineering'],
      techString: 'Generative AI | AI Tools | Prompt Engineering',
      actionLabel: 'Explore',
      type: 'genai-experiments',
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto" aria-labelledby="projects-heading">
      {/* Section Header */}
      <div className="flex flex-col items-center mb-14 text-center">
        <span className="text-xs font-mono font-semibold uppercase tracking-widest text-cyan-400 mb-2">
          Hands-On Work
        </span>
        <h2 id="projects-heading" className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          My Projects
        </h2>
        <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mt-3 mb-4" />
        <p className="text-sm sm:text-base text-slate-400 max-w-xl">
          Practical applications and experiments I have created to apply programming fundamentals and explore AI concepts.
        </p>
      </div>

      {/* Projects Grid: 3 Modern Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {projectList.map((project, index) => (
          <div
            key={project.id}
            className="group relative rounded-2xl bg-[#0b1120] border border-slate-800 hover:border-blue-500/50 p-6 sm:p-7 shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden"
          >
            {/* Ambient subtle glow */}
            <div
              aria-hidden="true"
              className="absolute top-0 right-0 w-36 h-36 bg-blue-600/10 rounded-full blur-2xl pointer-events-none group-hover:bg-cyan-500/20 transition-colors"
            />

            <div>
              {/* Card Header & Icon */}
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 group-hover:border-cyan-500/30 text-cyan-400 transition-colors">
                  {project.type === 'grade-calc' && <Calculator className="w-6 h-6" />}
                  {project.type === 'voting-calc' && <UserCheck className="w-6 h-6" />}
                  {project.type === 'genai-experiments' && <Sparkles className="w-6 h-6" />}
                </div>
                <span className="text-[11px] font-mono text-slate-400 bg-slate-900/80 px-2.5 py-1 rounded-full border border-slate-800">
                  0{index + 1}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-cyan-300 transition-colors">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                "{project.description}"
              </p>

              {/* Technology string */}
              <div className="mb-6 pt-3 border-t border-slate-800/80">
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-1.5">
                  Technology:
                </span>
                <p className="text-xs font-mono font-medium text-cyan-300 bg-cyan-950/30 px-3 py-1.5 rounded-lg border border-cyan-800/40 inline-block">
                  {project.techString}
                </p>
              </div>
            </div>

            {/* Buttons: Action (View Project / Explore) + GitHub */}
            <div className="flex items-center gap-3 pt-4 border-t border-slate-800/80">
              <button
                id={`project-action-btn-${project.id}`}
                onClick={() => onSelectProject(project)}
                className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 shadow-md shadow-blue-600/20 transition-all duration-200"
              >
                <span>{project.actionLabel}</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <a
                id={`project-github-btn-${project.id}`}
                href="https://github.com/mohithadari23-coder"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`GitHub for ${project.title}`}
                className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-medium text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-700/80 transition-all duration-200"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
