import React, { useState, useEffect } from 'react';
import { ArrowRight, Github } from 'lucide-react';
import { SectionId } from '../types';
import { CONTACT_INFO, CODE_SNIPPETS } from '../constants';

const Hero: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [displayedCode, setDisplayedCode] = useState('');
  
  // Tab Switching Logic (Every 5 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % CODE_SNIPPETS.length);
      setDisplayedCode(''); // Reset code when switching
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Typing Effect Logic
  useEffect(() => {
    const fullCode = CODE_SNIPPETS[activeTab].code;
    let currentIndex = 0;
    
    // Calculate speed: Faster typing to ensure it completes quickly
    const typingDuration = 2000; 
    const speed = typingDuration / fullCode.length;

    const typingInterval = setInterval(() => {
      if (currentIndex < fullCode.length) {
        setDisplayedCode((prev) => prev + fullCode.charAt(currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, speed);

    return () => clearInterval(typingInterval);
  }, [activeTab]);

  return (
    <section id={SectionId.HERO} className="min-h-[90vh] flex items-center relative overflow-hidden bg-white dark:bg-dark transition-colors duration-300">
      
      <div className="container mx-auto px-8 md:px-12 relative z-10 py-10 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: Content */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-none border border-primary/20 bg-primary/5 text-primary text-xs font-semibold mb-8">
              <span className="w-2 h-2 bg-primary animate-pulse"></span>
              Available for hire
            </div>
            
            <h1 className="text-4xl md:text-6xl font-extrabold text-dark dark:text-white leading-tight mb-6 tracking-tight">
              Hi, I'm Manish Kumar.
            </h1>
            
            <h2 className="text-2xl md:text-4xl font-bold text-slate-500 dark:text-slate-400 mb-8 leading-tight">
              <span className="text-primary">React Full Stack</span> Developer & <span className="text-primary">C++</span> Programmer
            </h2>
            
            <p className="text-lg text-slate-600 dark:text-slate-500 mb-10 max-w-lg leading-relaxed">
              Building scalable web applications and robust software systems. Transforming complex logic into clean, efficient code.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5">
              <a 
                href="#projects" 
                className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold text-white bg-primary border border-primary hover:bg-blue-600 transition-all duration-300 rounded-none hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]"
              >
                VIEW PROJECTS <ArrowRight className="ml-2 w-4 h-4" />
              </a>
              
              <a 
                href={CONTACT_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold text-slate-600 dark:text-slate-300 border border-black/10 dark:border-white/10 hover:border-primary hover:text-primary dark:hover:text-white transition-all bg-transparent rounded-none hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]"
              >
                <Github className="mr-2" size={18} /> GITHUB
              </a>
            </div>
          </div>

          {/* Right Side: Code Editor (Visible on all screens, stacks on mobile) */}
          <div className="relative w-full">
            {/* Decorative blurred glow behind */}
            <div className="absolute -inset-1 bg-primary/30 blur-2xl opacity-20 rounded-lg"></div>
            
            {/* Editor Window */}
            <div className="relative bg-[#1e1e1e] border border-[#333] rounded-lg shadow-2xl overflow-hidden min-h-[350px] md:min-h-[400px] hover:shadow-primary/20 transition-shadow duration-500">
              {/* Title Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#252526] border-b border-[#333]">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                </div>
                <div className="text-xs text-slate-400 font-mono">manish-portfolio</div>
                <div className="w-10"></div> {/* Spacer */}
              </div>

              {/* Tabs */}
              <div className="flex bg-[#252526] border-b border-[#333] overflow-hidden">
                {CODE_SNIPPETS.map((snippet, index) => (
                  <div 
                    key={index}
                    className={`px-4 md:px-6 py-2 text-[10px] md:text-xs font-mono border-r border-[#333] cursor-default transition-colors whitespace-nowrap ${
                      index === activeTab 
                        ? 'bg-[#1e1e1e] text-white' 
                        : 'bg-[#2d2d2d] text-slate-500'
                    }`}
                  >
                    {snippet.label}
                  </div>
                ))}
              </div>

              {/* Code Area */}
              <div className="p-4 md:p-6 font-mono text-xs md:text-sm overflow-hidden">
                <div className="flex">
                   {/* Line Numbers */}
                   <div className="flex flex-col text-slate-600 pr-4 select-none text-right">
                     {Array.from({ length: 15 }).map((_, i) => (
                       <span key={i} className="leading-6">{i + 1}</span>
                     ))}
                   </div>
                   
                   {/* Actual Code */}
                   <pre className="text-slate-300 leading-6 whitespace-pre-wrap break-words w-full">
                     <code dangerouslySetInnerHTML={{ 
                       __html: displayedCode
                         .replace(/const|return|class|public|private|void/g, '<span class="text-[#569cd6]">$&</span>') // Keywords Blue
                         .replace(/string|double/g, '<span class="text-[#4ec9b0]">$&</span>') // Types Teal
                         .replace(/'.*?'|".*?"/g, '<span class="text-[#ce9178]">$&</span>') // Strings Orange
                         .replace(/<.*?>/g, '<span class="text-[#808080]">$&</span>') // Tags Grey
                         .replace(/\/\/.*/g, '<span class="text-[#6a9955]">$&</span>') // Comments Green
                         .replace(/Manish|ATM_System/g, '<span class="text-[#4fc1ff]">$&</span>') // Names Light Blue
                      }} />
                     <span className="animate-pulse w-2 h-4 bg-primary inline-block ml-1 align-middle"></span>
                   </pre>
                </div>
              </div>

              {/* Status Bar */}
              <div className="absolute bottom-0 left-0 right-0 bg-[#007acc] px-3 py-1 flex items-center justify-between text-[10px] text-white font-sans">
                <div className="flex gap-4">
                   <span>master*</span>
                   <span>Running</span>
                </div>
                <div className="hidden md:flex gap-4">
                   <span>Ln 12, Col 45</span>
                   <span>UTF-8</span>
                   <span>TypeScript</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;