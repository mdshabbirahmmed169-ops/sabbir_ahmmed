import React, { useState } from 'react';
import { 
  Cpu, 
  Search, 
  SlidersHorizontal, 
  CheckCircle, 
  Sparkles,
  Zap,
  Terminal,
  Users
} from 'lucide-react';
import { skillsList, skillCategories, SkillItem } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredSkills = skillsList.filter((skill) => {
    const matchesCategory = selectedCategory === 'all' || skill.category === selectedCategory;
    const matchesSearch = skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          (skill.note && skill.note.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const getCategoryIcon = (category: SkillItem['category']) => {
    switch (category) {
      case 'core-eee':
        return <Zap className="w-4 h-4 text-amber-500" />;
      case 'simulation-cad':
        return <Cpu className="w-4 h-4 text-amber-500" />;
      case 'programming-tools':
        return <Terminal className="w-4 h-4 text-amber-500" />;
      case 'soft-skills':
        return <Users className="w-4 h-4 text-amber-500" />;
    }
  };

  return (
    <section id="skills" className="py-20 bg-slate-50/60 dark:bg-slate-900/30 border-t border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <p className="text-xs font-mono font-semibold tracking-wider uppercase text-amber-600 dark:text-amber-400">
            Technical &amp; Interpersonal Proficiencies
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Engineering Skillset
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            Analytical tools, simulation suites, programming languages, and collaborative strengths developed through academic study and hands-on laboratory practice.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="max-w-4xl mx-auto mb-10 space-y-4">
          
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            {/* Category Filter Tabs */}
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-1 p-1 bg-slate-200/70 dark:bg-slate-800/80 rounded-lg">
              {skillCategories.map((cat) => {
                const isActive = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
                      isActive
                        ? 'bg-white dark:bg-slate-900 text-amber-600 dark:text-amber-400 shadow-xs font-bold'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>

            {/* Live Search Input */}
            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search skills..."
                className="w-full pl-9 pr-3 py-1.5 text-xs rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 px-1">
            <span>Showing {filteredSkills.length} skill entries</span>
            <span className="font-mono text-[11px] text-amber-600/70 dark:text-amber-400/70">
              Easily customizable in portfolioData.ts
            </span>
          </div>

        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="bg-white dark:bg-slate-900 rounded-xl p-4 sm:p-5 border border-slate-200 dark:border-slate-800 hover:border-amber-500/50 dark:hover:border-amber-500/50 hover:shadow-xs transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded-md bg-amber-500/10 dark:bg-amber-500/10">
                      {getCategoryIcon(skill.category)}
                    </div>
                    <h3 className="font-semibold text-slate-900 dark:text-white text-sm">
                      {skill.name}
                    </h3>
                  </div>
                  <span className="text-xs font-mono font-bold text-amber-600 dark:text-amber-400">
                    {skill.experienceLevel}
                  </span>
                </div>

                {skill.note && (
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-normal mb-3">
                    {skill.note}
                  </p>
                )}
              </div>

              {/* Progress Indicator Bar in Golden Gradient */}
              <div className="pt-2">
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-1">
                  <span>Proficiency</span>
                  <span className="text-amber-600 dark:text-amber-400 font-semibold">{skill.level}%</span>
                </div>
                <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-amber-600 via-amber-500 to-yellow-400 rounded-full transition-all duration-500"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>

            </div>
          ))}
        </div>

        {filteredSkills.length === 0 && (
          <div className="text-center py-12 text-slate-500 text-sm">
            No skills found matching &ldquo;{searchQuery}&rdquo;. Try another keyword or clear filter.
          </div>
        )}

      </div>
    </section>
  );
};
