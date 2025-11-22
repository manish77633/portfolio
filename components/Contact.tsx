import React from 'react';
import { SectionId } from '../types';
import { CONTACT_INFO } from '../constants';
import { Mail, MapPin, Github, Linkedin, Code, Phone, ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id={SectionId.CONTACT} className="py-24 relative border-t border-black/5 dark:border-white/5 bg-slate-50 dark:bg-darker transition-colors duration-300">
      <div className="container mx-auto px-8 md:px-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          
          <div>
            <h2 className="text-3xl font-bold text-dark dark:text-white mb-6 flex items-center gap-3">
              <span className="text-primary font-mono text-xl">04.</span> Get In Touch
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-12 max-w-md text-lg leading-relaxed">
              I am currently looking for new opportunities as a Full Stack Developer. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            
            <div className="space-y-6 font-mono text-sm">
              <div className="flex items-center gap-4 text-slate-700 dark:text-slate-300">
                <MapPin className="text-primary" size={18} />
                <span>{CONTACT_INFO.location}</span>
              </div>
              
              <div className="flex items-center gap-4 text-slate-700 dark:text-slate-300">
                <Mail className="text-primary" size={18} />
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-primary transition-colors">
                  {CONTACT_INFO.email}
                </a>
              </div>

              <div className="flex items-center gap-4 text-slate-700 dark:text-slate-300">
                <Phone className="text-primary" size={18} />
                <span>{CONTACT_INFO.phone}</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center">
             <div className="grid grid-cols-1 gap-4">
                <a href={CONTACT_INFO.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-6 bg-white dark:bg-card corner-border transition-all duration-300 group hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10 hover:border-primary/30 border border-transparent">
                  <span className="flex items-center gap-4 text-slate-700 dark:text-slate-300 font-medium group-hover:text-primary transition-colors">
                    <Github size={24} /> Github Profile
                  </span>
                  <ArrowRight className="text-primary opacity-0 -translate-x-4 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" size={20} />
                </a>

                <a href={CONTACT_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-6 bg-white dark:bg-card corner-border transition-all duration-300 group hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10 hover:border-primary/30 border border-transparent">
                  <span className="flex items-center gap-4 text-slate-700 dark:text-slate-300 font-medium group-hover:text-primary transition-colors">
                    <Linkedin size={24} /> LinkedIn
                  </span>
                  <ArrowRight className="text-primary opacity-0 -translate-x-4 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" size={20} />
                </a>

                <a href={CONTACT_INFO.leetcode} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-6 bg-white dark:bg-card corner-border transition-all duration-300 group hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10 hover:border-primary/30 border border-transparent">
                  <span className="flex items-center gap-4 text-slate-700 dark:text-slate-300 font-medium group-hover:text-primary transition-colors">
                    <Code size={24} /> LeetCode
                  </span>
                  <ArrowRight className="text-primary opacity-0 -translate-x-4 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" size={20} />
                </a>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;