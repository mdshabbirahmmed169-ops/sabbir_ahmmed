import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, BookOpen, Clock } from 'lucide-react';
import { educationList } from '../data/portfolioData';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <p className="text-xs font-mono font-semibold tracking-wider uppercase text-amber-600 dark:text-amber-400">
            Education &amp; Credentials
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Academic Background
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            A consistent record of academic excellence, progressing from secondary honors to undergraduate electrical engineering.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Vertical Timeline Spine */}
          <div className="hidden md:block absolute left-8 top-4 bottom-4 w-0.5 bg-slate-200 dark:bg-slate-800" />

          <div className="space-y-8 md:space-y-10">
            {educationList.map((edu, idx) => (
              <div key={idx} className="relative flex flex-col md:flex-row gap-6 items-start">
                
                {/* Timeline Node Indicator in Golden Amber */}
                <div className="hidden md:flex items-center justify-center w-16 h-16 shrink-0 rounded-full border-4 border-white dark:border-slate-950 bg-slate-100 dark:bg-slate-900 text-amber-500 dark:text-amber-400 z-10 shadow-xs border-amber-500/20">
                  {edu.status === 'In Progress' ? (
                    <Clock className="w-6 h-6 animate-pulse text-amber-500" />
                  ) : (
                    <GraduationCap className="w-6 h-6" />
                  )}
                </div>

                {/* Card */}
                <div className="w-full bg-slate-50 dark:bg-slate-900/60 rounded-xl p-6 sm:p-7 border border-slate-200 dark:border-slate-800 hover:border-amber-500/50 dark:hover:border-amber-500/50 transition-all shadow-xs">
                  
                  {/* Top Meta Bar */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2 text-xs text-amber-600 dark:text-amber-400 font-semibold font-mono">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{edu.period}</span>
                    </div>

                    {edu.result ? (
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-0.5 rounded-md bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-500/30">
                        <Award className="w-3.5 h-3.5 text-amber-500" />
                        <span>{edu.result}</span>
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-0.5 rounded-md bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-500/30">
                        <Clock className="w-3.5 h-3.5 text-amber-500" />
                        <span>Running</span>
                      </span>
                    )}
                  </div>

                  {/* Degree and Institution */}
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-1">
                    {edu.degree}
                  </h3>
                  
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-slate-600 dark:text-slate-300 font-medium mb-3">
                    <span>{edu.institution}</span>
                    <span aria-hidden="true" className="text-slate-400">·</span>
                    <span className="inline-flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
                      <MapPin className="w-3 h-3 text-amber-500" />
                      {edu.location}
                    </span>
                  </div>

                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                    {edu.description}
                  </p>

                  {/* Highlighted coursework / Subjects */}
                  {edu.coursesOrHighlights && edu.coursesOrHighlights.length > 0 && (
                    <div className="pt-3 border-t border-slate-200/60 dark:border-slate-800">
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2">
                        <BookOpen className="w-3.5 h-3.5 text-amber-500" />
                        <span>Key Subjects &amp; Laboratory Coursework:</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {edu.coursesOrHighlights.map((course, cIdx) => (
                          <span
                            key={cIdx}
                            className="text-xs text-slate-600 dark:text-slate-400 bg-white dark:bg-slate-800 px-2.5 py-1 rounded-md border border-slate-200 dark:border-slate-700/80"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
