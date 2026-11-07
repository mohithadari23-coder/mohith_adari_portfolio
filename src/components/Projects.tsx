import React from 'react';
import { Github, Terminal, ArrowUpRight, Sparkles, ExternalLink, Workflow, Box } from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectsProps {
  onSelectProject: (project: ProjectItem) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const projectList: ProjectItem[] = [
    {
      id: 'skillpath-ai',
      title: 'SkillPath AI',
      description:
        'An AI-powered personalized learning and career navigation platform that generates customized roadmaps, analyzes skill gaps, and recommends targeted upskilling pathways.',
      technology: ['AI & LLMs', 'Web Application', 'Personalized Learning'],
      techString: 'AI & LLMs | Web Application | Smart Roadmaps',
      actionLabel: 'Open SkillPath AI',
      type: 'skillpath-ai',
      externalUrl: 'https://skillpathai18.lovable.app',
    },
    {
      id: 'n8n-ai-news',
      title: 'AI News Summarizer Automation (n8n to Email)',
      description:
        'An automated workflow created in n8n that periodically monitors and fetches top Artificial Intelligence news, runs an LLM summarizer node to distill key insights, and delivers clean email digests to subscribers.',
      technology: ['n8n Workflow', 'LLM Summarizer', 'Email Automation', 'Webhooks'],
      techString: 'n8n Automation | AI LLM | Email Dispatch',
      actionLabel: 'Explore Workflow',
      type: 'n8n-ai-news',
    },
    {
      id: 'vote-eligibility-python',
      title: 'Vote Eligibility with Python',
      description:
        'A Python-based application that validates voting criteria, checks legal age thresholds, handles user verification input, and outputs eligibility status with structured exception handling.',
      technology: ['Python 3', 'Conditional Logic', 'CLI / Web GUI'],
      techString: 'Python 3 | Logic Validation | CLI / Web',
      actionLabel: 'View Project',
      type: 'vote-eligibility-python',
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto" aria-labelledby="projects-heading">
      {/* Section Header */}
      <div className="flex flex-col items-center mb-14 text-center">
        <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#BDBDBD] mb-2 flex items-center gap-2">
          <Box className="w-3.5 h-3.5 text-[#FFFFFF]" />
          <span>PRODUCTION & RESEARCH BUILDS</span>
        </span>
        <h2 id="projects-heading" className="text-3xl sm:text-4xl font-extrabold text-[#FFFFFF] tracking-tight">
          My Projects
        </h2>
        <div className="w-12 h-0.5 bg-[#FFFFFF] rounded-full mt-3 mb-4" />
        <p className="text-sm sm:text-base text-[#BDBDBD] max-w-xl">
          Practical applications, workflow automations, and AI tools I have built to apply computer science and AI engineering.
        </p>
      </div>

      {/* Projects Grid: 3-column with 3D Cybernetic Accents */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
        {projectList.map((project, index) => (
          <div
            key={project.id}
            className="group relative rounded-2xl bg-black border border-zinc-800 hover:border-zinc-500 p-6 sm:p-7 shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between overflow-hidden"
          >
            {/* 3D Wireframe Corner Accents */}
            <div className="absolute top-2 left-2 w-2.5 h-2.5 border-t border-l border-white/70 pointer-events-none" />
            <div className="absolute top-2 right-2 w-2.5 h-2.5 border-t border-r border-white/70 pointer-events-none" />
            <div className="absolute bottom-2 left-2 w-2.5 h-2.5 border-b border-l border-white/70 pointer-events-none" />
            <div className="absolute bottom-2 right-2 w-2.5 h-2.5 border-b border-r border-white/70 pointer-events-none" />

            <div>
              {/* Card Header & Icon */}
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-zinc-950 border border-zinc-800 group-hover:border-zinc-600 text-[#FFFFFF] transition-colors shadow-sm">
                  {project.type === 'skillpath-ai' && <Sparkles className="w-6 h-6" />}
                  {project.type === 'n8n-ai-news' && <Workflow className="w-6 h-6" />}
                  {project.type === 'vote-eligibility-python' && <Terminal className="w-6 h-6" />}
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono text-zinc-500">
                    [0{index + 1}]
                  </span>
                  {project.externalUrl && (
                    <a
                      href={project.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] font-mono text-[#BDBDBD] hover:text-[#FFFFFF] bg-black px-2.5 py-1 rounded-full border border-zinc-800 hover:border-zinc-600 transition-colors inline-flex items-center gap-1"
                      title="Open Live App"
                    >
                      <span>Live App</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                  <span className="text-[11px] font-mono text-[#BDBDBD] bg-zinc-950 px-2.5 py-1 rounded-full border border-zinc-800">
                    {project.type === 'skillpath-ai' ? 'Featured AI' : project.type === 'n8n-ai-news' ? 'n8n Auto' : 'Python'}
                  </span>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-[#FFFFFF] mb-3 tracking-tight group-hover:text-zinc-200 transition-colors">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-[#BDBDBD] leading-relaxed mb-6 font-normal">
                "{project.description}"
              </p>

              {/* Technology string */}
              <div className="mb-6 pt-3 border-t border-zinc-800">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#BDBDBD] block mb-1.5">
                  Tech Stack:
                </span>
                <p className="text-xs font-mono font-medium text-[#FFFFFF] bg-zinc-950 px-3 py-1.5 rounded-lg border border-zinc-800 inline-block">
                  {project.techString}
                </p>
              </div>
            </div>

            {/* Buttons: Action (Direct Open or Modal Preview) + GitHub */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 pt-4 border-t border-zinc-800">
              {project.externalUrl ? (
                <a
                  id={`project-action-btn-${project.id}`}
                  href={project.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-[#000000] bg-[#FFFFFF] hover:bg-zinc-200 active:bg-zinc-300 shadow-md transition-all duration-200 min-h-[42px]"
                >
                  <span>{project.actionLabel}</span>
                  <ExternalLink className="w-4 h-4 text-[#000000]" />
                </a>
              ) : (
                <button
                  id={`project-action-btn-${project.id}`}
                  onClick={() => onSelectProject(project)}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-[#000000] bg-[#FFFFFF] hover:bg-zinc-200 active:bg-zinc-300 shadow-md transition-all duration-200 min-h-[42px]"
                >
                  <span>{project.actionLabel}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#000000]" />
                </button>
              )}

              <a
                id={`project-github-btn-${project.id}`}
                href="https://github.com/mohithadari23-coder"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`GitHub for ${project.title}`}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium text-[#FFFFFF] bg-black hover:bg-zinc-900 border border-zinc-700 hover:border-zinc-500 transition-all duration-200 min-h-[42px]"
              >
                <Github className="w-4 h-4 text-[#FFFFFF]" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
