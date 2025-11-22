import React from 'react';
import { EDUCATION } from '../constants';
import { SectionId } from '../types';

const Experience: React.FC = () => {
  return (
    <section id={SectionId.EXPERIENCE} className="py-24 bg-slate-50 dark:bg-dark relative border-t border-black/5 dark:border-white/5 transition-colors duration-300">
      <div className="container mx-auto px-8 md:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-dark dark:text-white flex items-center gap-3">
              <span className="text-primary font-mono text-xl">02.</span> Education
            </h2>
          </div>

          <div className="space-y-8">
            {EDUCATION.map((edu) => (
              <div key={edu.id} className="relative pl-8 md:pl-0 group">
                <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-10 p-6 bg-white dark:bg-card corner-border shadow-sm transition-all duration-300 hover:translate-x-2 hover:border-l-primary hover:shadow-lg hover:shadow-primary/5 border-l-4 border-transparent">
                  
                  <div className="md:w-1/4 flex-shrink-0">
                    <span className="text-xs font-mono text-primary block mb-1 font-bold group-hover:scale-105 transition-transform origin-left">
                      {edu.period}
                    </span>
                    <h3 className="text-dark dark:text-white font-bold text-lg group-hover:text-primary transition-colors">{edu.company}</h3>
                  </div>
                  
                  <div className="md:w-3/4">
                    <h4 className="text-lg font-medium text-slate-700 dark:text-slate-200 mb-2">
                      {edu.role}
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">
                      {edu.description}
                    </p>
                    
                    {edu.highlights.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {edu.highlights.map((highlight, idx) => (
                          <span key={idx} className="text-xs text-slate-500 dark:text-slate-500 border border-black/5 dark:border-white/10 px-2 py-1 group-hover:border-primary/30 group-hover:text-primary/80 transition-colors">
                             {highlight}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;