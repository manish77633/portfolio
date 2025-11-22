import React from 'react';
import { PROJECTS } from '../constants';
import { SectionId } from '../types';
import { ExternalLink, Github } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id={SectionId.PROJECTS} className="py-24 bg-white dark:bg-dark relative border-t border-black/5 dark:border-white/5 transition-colors duration-300">
      <div className="container mx-auto px-8 md:px-12">
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-3xl font-bold text-dark dark:text-white flex items-center gap-3">
            <span className="text-primary font-mono text-xl">03.</span> Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <div 
              key={project.id} 
              className="group bg-slate-50 dark:bg-card corner-border flex flex-col h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_-10px_rgba(59,130,246,0.3)] hover:border-primary/50 border border-transparent"
            >
              {/* Image Area */}
              <div className="relative h-48 overflow-hidden border-b border-black/5 dark:border-white/5">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300"></div>
              </div>
              
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-dark dark:text-white mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 leading-relaxed flex-1">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 border border-primary/10">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-black/5 dark:border-white/5 mt-auto">
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-white flex items-center gap-2 transition-colors hover:scale-105 transform">
                      <Github size={16} /> Code
                    </a>
                  )}
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-primary hover:text-blue-400 flex items-center gap-2 transition-colors hover:scale-105 transform">
                      Live Demo <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;