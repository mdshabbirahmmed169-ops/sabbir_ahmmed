import React from 'react';
import { ArrowRight, Download, Mail, Cpu, Sparkles, MapPin, GraduationCap } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface HeroSectionProps {
  onOpenResumeModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenResumeModal }) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden bg-circuit-grid">
      {/* Decorative golden aura */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-amber-500/5 dark:bg-amber-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Left Column: Info & CTA */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Engineering Badge in Golden Amber */}
            <div className="inline-flex items-center gap-2 text-xs font-mono text-amber-700 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 px-3.5 py-1.5 rounded-md shadow-xs">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              <span>Department of Electrical &amp; Electronic Engineering</span>
            </div>

            {/* Main Name & Title */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
                {personalInfo.name}
              </h1>
              <p className="text-lg sm:text-xl font-semibold text-amber-600 dark:text-amber-400">
                {personalInfo.title}
              </p>
            </div>

            {/* University & Location Metadata */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-3 gap-y-1 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              <span className="inline-flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4 text-amber-500 dark:text-amber-400" />
                <span>{personalInfo.institution}</span>
              </span>
              <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-amber-500 dark:text-amber-400" />
                <span>Bangladesh</span>
              </span>
            </div>

            {/* Short Introduction requested */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              &ldquo;{personalInfo.heroIntro}&rdquo;
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
              <button
                onClick={() => scrollTo('projects')}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-slate-900 hover:bg-slate-800 text-white dark:bg-gradient-to-r dark:from-amber-500 dark:to-amber-600 dark:hover:from-amber-600 dark:hover:to-amber-700 dark:text-slate-950 dark:font-bold text-sm transition-all shadow-sm hover:shadow active:scale-[0.98]"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenResumeModal}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg border border-slate-300 dark:border-amber-500/40 hover:border-amber-500 dark:hover:border-amber-400 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 font-medium text-sm transition-all hover:bg-amber-50/40 dark:hover:bg-slate-800 shadow-xs active:scale-[0.98]"
              >
                <Download className="w-4 h-4 text-amber-500 dark:text-amber-400" />
                <span>Download CV</span>
              </button>

              <button
                onClick={() => scrollTo('contact')}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-amber-600 dark:hover:text-amber-400 hover:bg-slate-100/70 dark:hover:bg-slate-800/60 font-medium text-sm transition-all active:scale-[0.98]"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Me</span>
              </button>
            </div>

            {/* Quick Spec Highlights */}
            <div className="pt-6 border-t border-slate-200 dark:border-slate-800/80 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0 text-left">
              <div>
                <p className="text-xs text-amber-600 dark:text-amber-400 font-mono font-semibold">DEGREE</p>
                <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">B.Sc. in EEE</p>
                <p className="text-xs text-slate-500">2024 – Running</p>
              </div>
              <div>
                <p className="text-xs text-amber-600 dark:text-amber-400 font-mono font-semibold">ACADEMIC</p>
                <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">GPA 5.00</p>
                <p className="text-xs text-slate-500">SSC &amp; HSC</p>
              </div>
              <div>
                <p className="text-xs text-amber-600 dark:text-amber-400 font-mono font-semibold">FOCUS</p>
                <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">Circuits &amp; Robotics</p>
                <p className="text-xs text-slate-500">Simulation &amp; Embedded</p>
              </div>
            </div>

          </div>

          {/* Hero Right Column: Profile Image Only */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-64 sm:w-72 md:w-80 aspect-square">
              
              {/* Outer decorative golden aura / border glow */}
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-amber-500/30 via-slate-200/50 to-amber-400/30 dark:from-amber-500/40 dark:via-amber-400/20 dark:to-slate-800/60 blur-md -z-10" />

              <div className="relative w-full h-full rounded-2xl border-2 border-amber-500/40 dark:border-amber-400/50 bg-white dark:bg-slate-900 shadow-2xl overflow-hidden p-2">
                <img
                  src={personalInfo.profilePicture || "./images/profile.jpg"}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover rounded-xl shadow-inner"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
