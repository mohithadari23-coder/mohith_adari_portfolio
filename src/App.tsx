import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { GitHubSection } from './components/GitHubSection';
import { Timeline } from './components/Timeline';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModals';
import { ProjectItem } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'github-section', 'journey', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            // map github-section and journey into logical nav categories if needed, or maintain section
            if (sectionId === 'github-section' || sectionId === 'journey') {
              setActiveSection('projects');
            } else {
              setActiveSection(sectionId);
            }
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#070b14] text-slate-100 flex flex-col selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Sticky Navigation Bar */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Section 4: Hero */}
        <Hero />

        {/* Section 5: About Me */}
        <About />

        {/* Section 6: Skills */}
        <Skills />

        {/* Section 7: Projects */}
        <Projects onSelectProject={(project) => setSelectedProject(project)} />

        {/* Section 8: Explore My Code (GitHub) */}
        <GitHubSection />

        {/* Section 9: Learning Journey */}
        <Timeline />

        {/* Section 10: Contact */}
        <Contact />
      </main>

      {/* Section 11: Footer */}
      <Footer />

      {/* Interactive Project Preview Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}

