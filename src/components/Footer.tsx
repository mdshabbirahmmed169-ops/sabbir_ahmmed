import React from 'react';
import { Cpu, Github, Linkedin, Facebook, Mail, ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Resume', href: '#resume' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 text-xs transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-100 dark:border-slate-900">
          
          {/* Logo & Tagline */}
          <div className="flex items-center gap-3 text-center md:text-left">
            <div className="w-9 h-9 rounded-lg bg-slate-900 dark:bg-slate-900 border border-slate-700 dark:border-amber-500/40 flex items-center justify-center text-amber-400 shadow-xs shrink-0">
              <Cpu className="w-5 h-5 text-amber-500 dark:text-amber-400" />
            </div>
            <div>
              <span className="font-bold text-slate-900 dark:text-white text-base block leading-tight">
                {personalInfo.name}
              </span>
              <span className="text-[11px] text-amber-600 dark:text-amber-400 font-mono font-semibold">
                Department of Electrical &amp; Electronic Engineering · JSTU
              </span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900 hover:text-slate-900 dark:hover:text-amber-400 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook Profile"
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              aria-label="Email Md. Sabbir Ahmmed"
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900 hover:text-red-500 dark:hover:text-amber-400 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-slate-500 dark:text-slate-400">
          <p>
            &copy; {currentYear} {personalInfo.name}. All Rights Reserved.
          </p>

          <div className="flex items-center gap-4">
            <span className="font-mono text-[11px]">
              Jamalpur Science and Technology University
            </span>
            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
