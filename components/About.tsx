import React from 'react';
import { SKILLS } from '../constants';
import { SectionId } from '../types';

const About: React.FC = () => {
  return (
    <section id={SectionId.ABOUT} className="py-24 bg-white dark:bg-darker relative border-t border-black/5 dark:border-white/5 transition-colors duration-300">
      <div className="container mx-auto px-8 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Content */}
          <div className="lg:col-span-5">
            <h2 className="text-3xl font-bold text-dark dark:text-white mb-8 flex items-center gap-3">
              <span className="text-primary font-mono text-xl">01.</span> About Me
            </h2>
            
            <div className="space-y-6 text-slate-600 dark:text-slate-400 text-lg font-light leading-relaxed">
               <p>
                 I am a passionate <strong className="text-dark dark:text-slate-200">Full Stack Developer</strong> with a strong foundation in <strong className="text-primary">C++</strong> and Object-Oriented Programming.
               </p>
               <p>
                 Currently pursuing my BCA at IPS College, I combine my academic knowledge with practical web development skills. I specialize in the <strong className="text-primary">React ecosystem</strong>, creating responsive and performant web applications.
               </p>
               <p>
                 I am also actively learning Data Structures & Algorithms to enhance my problem-solving capabilities and write more efficient code.
               </p>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="lg:col-span-7">
             <div className="bg-slate-50 dark:bg-card corner-border p-8 hover:border-primary/30 transition-colors duration-300">
                <h3 className="text-sm font-mono text-slate-500 mb-6 uppercase tracking-wider">Technical Arsenal</h3>
                
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6">
                  {SKILLS.map((skill) => (
                    <div 
                      key={skill.name} 
                      className="tech-item group flex flex-col items-center justify-center p-4 bg-white dark:bg-dark border border-black/5 dark:border-white/5 transition-all duration-300 aspect-square cursor-default"
                    >
                      {/* tech-glow is now defined in index.html to be active by default and zoom out on hover */}
                      <img 
                        src={skill.icon} 
                        alt={skill.name} 
                        className="w-12 h-12 mb-3 tech-glow"
                      />
                      <span className="text-xs font-medium text-slate-500 group-hover:text-primary transition-colors">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;