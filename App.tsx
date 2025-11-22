import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import AIChat from './components/AIChat';

const App: React.FC = () => {
  
  useEffect(() => {
    // Smooth scroll handler
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = (this as HTMLAnchorElement).getAttribute('href');
        if (href) {
            document.querySelector(href)?.scrollIntoView({
                behavior: 'smooth'
            });
        }
      });
    });
  }, []);

  return (
    <div className="min-h-screen w-full bg-white dark:bg-dark flex justify-center overflow-x-hidden transition-colors duration-300">
      
      {/* Minimal Ambient Background with Grid */}
      <div className="fixed inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.1] pointer-events-none animate-grid-flow"></div>
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/5 via-transparent to-transparent pointer-events-none"></div>

      {/* Main Content Container - Approx 85% width */}
      <div className="w-full md:w-[85%] lg:w-[80%] min-h-screen bg-white dark:bg-dark border-x border-black/5 dark:border-white/5 relative shadow-2xl dark:shadow-black z-10 transition-colors duration-300">
         <Header />
         <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Contact />
         </main>
         
         <footer className="py-8 text-center text-slate-500 font-mono text-xs border-t border-black/5 dark:border-white/5 bg-slate-50 dark:bg-darker transition-colors duration-300">
           <p>Designed & Built by Manish Kumar © {new Date().getFullYear()}</p>
         </footer>
      </div>

      <AIChat />
    </div>
  );
};

export default App;