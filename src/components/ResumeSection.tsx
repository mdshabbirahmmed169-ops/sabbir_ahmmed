import React from 'react';
import { Download, FileText, Printer, CheckCircle, GraduationCap, Briefcase, Cpu } from 'lucide-react';
import { personalInfo, resumeData, educationList } from '../data/portfolioData';

interface ResumeSectionProps {
  onOpenResumeModal: () => void;
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({ onOpenResumeModal }) => {
  return (
    <section id="resume" className="py-20 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <p className="text-xs font-mono font-semibold tracking-wider uppercase text-amber-600 dark:text-amber-400">
            Curriculum Vitae Snapshot
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Resume / CV Overview
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            Prepared for undergraduate internships, research assistantships, scholarship evaluations, and technical engineering roles.
          </p>
        </div>

        {/* Resume Summary Card */}
        <div className="max-w-4xl mx-auto bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
          
          {/* Top Banner with Action Buttons in Golden Accents */}
          <div className="p-6 sm:p-8 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 text-white flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-amber-500/20">
            <div className="space-y-1 text-center sm:text-left">
              <span className="text-xs font-mono text-amber-400 font-bold uppercase tracking-widest block">
                Official Curriculum Vitae
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                {personalInfo.name}
              </h3>
              <p className="text-xs text-slate-300">
                Electrical &amp; Electronic Engineering · JSTU
              </p>
            </div>

            {/* Prominent Action Buttons */}
            <div className="flex flex-wrap items-center gap-2.5">
              <a
                href={personalInfo.cvPath}
                download="Md_Sabbir_Ahmmed_CV.pdf"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold text-xs sm:text-sm shadow-md transition-all active:scale-[0.98]"
              >
                <Download className="w-4 h-4 text-slate-950" />
                <span>Download CV (PDF)</span>
              </a>

              <button
                onClick={onOpenResumeModal}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs sm:text-sm font-medium border border-slate-700 transition-all"
              >
                <Printer className="w-4 h-4 text-amber-400" />
                <span>Preview &amp; Print</span>
              </button>
            </div>
          </div>

          {/* Resume Summary Content */}
          <div className="p-6 sm:p-8 space-y-6">
            
            {/* Executive Statement */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold font-mono tracking-wider text-slate-900 dark:text-white uppercase">
                Profile Statement
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {resumeData.summary}
              </p>
            </div>

            {/* Grid of Core Competencies & Education */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-200 dark:border-slate-800">
              
              {/* Education Snapshot */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold font-mono tracking-wider text-slate-900 dark:text-white uppercase">
                  <GraduationCap className="w-4 h-4 text-amber-500" />
                  <span>Education Snapshot</span>
                </div>
                <div className="space-y-2.5 text-xs">
                  {educationList.map((edu, idx) => (
                    <div key={idx} className="p-3 rounded-lg bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80">
                      <div className="flex justify-between items-start font-semibold text-slate-900 dark:text-white">
                        <span>{edu.degree}</span>
                        <span className="text-[11px] font-mono text-amber-600 dark:text-amber-400 font-bold">{edu.result || 'Running'}</span>
                      </div>
                      <p className="text-slate-500 dark:text-slate-400 text-[11px] mt-0.5">
                        {edu.institution}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Core Competencies */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold font-mono tracking-wider text-slate-900 dark:text-white uppercase">
                  <Cpu className="w-4 h-4 text-amber-500" />
                  <span>Key Competencies</span>
                </div>
                <div className="space-y-2">
                  {resumeData.coreCompetencies.map((comp, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                      <CheckCircle className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                      <span>{comp}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
