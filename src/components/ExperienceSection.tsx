import React, { useState } from 'react';
import { 
  Briefcase, 
  BookOpen, 
  Users, 
  HeartHandshake, 
  Calendar, 
  MapPin, 
  Check,
  Building2
} from 'lucide-react';
import { experienceList, ExperienceItem } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  const [filterType, setFilterType] = useState<string>('All');

  const categories = ['All', 'Teaching & Tutoring', 'Academic Projects', 'Team Projects', 'Volunteer & Extracurricular'];

  const filteredExperience = experienceList.filter((item) => {
    if (filterType === 'All') return true;
    return item.type === filterType;
  });

  const getTypeIcon = (type: ExperienceItem['type']) => {
    switch (type) {
      case 'Teaching & Tutoring':
        return <BookOpen className="w-4 h-4 text-amber-500" />;
      case 'Academic Projects':
        return <Briefcase className="w-4 h-4 text-amber-500" />;
      case 'Team Projects':
        return <Users className="w-4 h-4 text-amber-500" />;
      case 'Volunteer & Extracurricular':
        return <HeartHandshake className="w-4 h-4 text-amber-500" />;
    }
  };

  return (
    <section id="experience" className="py-20 bg-slate-50/60 dark:bg-slate-900/30 border-t border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <p className="text-xs font-mono font-semibold tracking-wider uppercase text-amber-600 dark:text-amber-400">
            Professional &amp; Academic Timeline
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Experience &amp; Involvement
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            Tutoring experience in physics and mathematics, undergraduate engineering lab work, collaborative peer projects, and community participation.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 max-w-3xl mx-auto mb-12 p-1 bg-slate-200/70 dark:bg-slate-800/80 rounded-lg">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilterType(cat)}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
                filterType === cat
                  ? 'bg-white dark:bg-slate-900 text-amber-600 dark:text-amber-400 shadow-xs font-bold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Timeline Grid */}
        <div className="max-w-4xl mx-auto space-y-6">
          {filteredExperience.map((item) => (
            <div
              key={item.id}
              className="bg-white dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-800 hover:border-amber-500/50 dark:hover:border-amber-500/50 shadow-xs transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-lg bg-amber-500/10 dark:bg-amber-500/10">
                    {getTypeIcon(item.type)}
                  </div>
                  <span className="text-xs font-mono font-bold text-amber-600 dark:text-amber-400">
                    {item.type}
                  </span>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-mono">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{item.period}</span>
                </div>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-1">
                {item.role}
              </h3>

              <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-600 dark:text-slate-400 mb-3 font-medium">
                <span className="text-slate-800 dark:text-slate-200">{item.organization}</span>
                <span aria-hidden="true">·</span>
                <span className="inline-flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-amber-500" />
                  {item.location}
                </span>
                {item.isPlaceholder && (
                  <>
                    <span aria-hidden="true">·</span>
                    <span className="text-amber-600 dark:text-amber-400 font-mono text-[10px] font-bold">
                      [Customizable Placeholder]
                    </span>
                  </>
                )}
              </div>

              <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                {item.description}
              </p>

              <div className="space-y-1.5 pt-2 border-t border-slate-100 dark:border-slate-800/80">
                {item.bulletPoints.map((bp, bpIdx) => (
                  <div key={bpIdx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                    <Check className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                    <span>{bp}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
