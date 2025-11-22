import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';
import { Menu, X, Moon, Sun } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Check initial preference or system preference
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      setIsDark(true);
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-dark/80 backdrop-blur-md border-b border-white/5 dark:bg-dark/90 bg-white/90 dark:border-white/5 border-black/5 transition-colors duration-300">
      <div className="container mx-auto px-6 h-20 flex justify-between items-center">
        {/* Logo */}
       <a href="#hero" className="text-2xl font-bold tracking-tight group">
  {/* Opening angle bracket in primary color */}
  <span className="text-primary">&lt; </span>
  
  {/* Name in standard text color (dark/white for dark mode) */}
  <span className="text-dark dark:text-white"> &nbsp;Manish&nbsp; </span>
  
  {/* Closing slash and angle bracket in primary color */}
  <span className="text-primary">/&gt;</span>
</a>
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              // ADD THIS LOGIC to apply the download attribute
              {...(link.download !== undefined && { download: link.download || link.name + '.pdf' })}
              className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-white transition-colors relative group py-2"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          
          {/* Theme Switcher */}
          <button 
            onClick={toggleTheme}
            className="ml-4 p-2 rounded-full bg-slate-200 dark:bg-white/10 text-slate-700 dark:text-yellow-400 hover:bg-slate-300 dark:hover:bg-white/20 transition-all"
            aria-label="Switch Mode"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </nav>

        {/* Mobile Controls */}
        <div className="flex items-center gap-4 md:hidden">
          <button 
            onClick={toggleTheme}
            className="p-2 text-slate-700 dark:text-yellow-400"
          >
             {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button 
            className="text-dark dark:text-white p-2 hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-dark border-b border-black/5 dark:border-white/10 animate-in slide-in-from-top-5">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              {...(link.download !== undefined && { download: link.download || link.name + '.pdf' })}
              className="block px-8 py-5 text-lg font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 transition-all border-l-2 border-transparent hover:border-primary"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;