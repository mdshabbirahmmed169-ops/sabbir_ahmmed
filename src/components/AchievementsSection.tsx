import React, { useState } from 'react';
import { Award, Trophy, Medal, Star, Sparkles, GraduationCap } from 'lucide-react';
import { achievementsList, AchievementItem } from '../data/portfolioData';

interface AchievementsSectionProps {
  onOpenGuideModal: () => void;
}

export const AchievementsSection: React.FC<AchievementsSectionProps> = ({ onOpenGuideModal }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Academic', 'Competition', 'Project', 'Award', 'Scholarship'];

  const filteredAchievements = achievementsList.filter((item) => {
    if (activeCategory === 'All') return true;
    return item.category === activeCategory;
  });

  const getCategoryIcon = (category: AchievementItem['category']) => {
    switch (category) {
      case 'Academic':
        return <GraduationCap className="w-5 h-5 text-amber-500" />;
      case 'Competition':
        return <Trophy className="w-5 h-5 text-amber-500" />;
      case 'Project':
        return <Award className="w-5 h-5 text-amber-500" />;
      case 'Award':
        return <Medal className="w-5 h-5 text-amber-500" />;
      case 'Scholarship':
        return <Star className="w-5 h-5 text-amber-500" />;
    }
  };

  return (
    <section id="achievements" className="py-20 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <p className="text-xs font-mono font-semibold tracking-wider uppercase text-amber-600 dark:text-amber-400">
            Honors, Recognitions &amp; Milestones
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Academic &amp; Extracurricular Achievements
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            Distinctions achieved in board examinations, university admissions, and placeholders ready for future engineering competitions, awards, and scholarships.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 max-w-3xl mx-auto mb-12 p-1 bg-slate-100 dark:bg-slate-900 rounded-lg">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
                activeCategory === cat
                  ? 'bg-white dark:bg-slate-800 text-amber-600 dark:text-amber-400 shadow-xs font-bold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {filteredAchievements.map((ach) => (
            <div
              key={ach.id}
              className="group bg-slate-50 dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-800 hover:border-amber-500/50 dark:hover:border-amber-500/50 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-xs group-hover:scale-105 group-hover:border-amber-500/40 transition-transform">
                    {getCategoryIcon(ach.category)}
                  </div>
                  
                  <div className="text-right">
                    <span className="text-xs font-mono font-bold text-amber-600 dark:text-amber-400 block">
                      {ach.badgeText}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400 block">
                      {ach.year}
                    </span>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 font-mono">
                    <span>{ach.category}</span>
                    {ach.isPlaceholder && (
                      <>
                        <span aria-hidden="true">·</span>
                        <span className="text-amber-500 dark:text-amber-400">[Placeholder]</span>
                      </>
                    )}
                  </div>

                  <h3 className="font-bold text-slate-900 dark:text-white text-base group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                    {ach.title}
                  </h3>

                  <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                    Issuer: {ach.issuer}
                  </p>

                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed pt-2">
                    {ach.description}
                  </p>
                </div>
              </div>

              {ach.isPlaceholder && (
                <div className="mt-4 pt-3 border-t border-dashed border-slate-200 dark:border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
                  <span>Ready to customize</span>
                  <button
                    onClick={onOpenGuideModal}
                    className="text-amber-600 dark:text-amber-400 hover:underline font-bold"
                  >
                    Edit in Data →
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
