import React from 'react';
import { X, Github, ExternalLink, Cpu, Check, Layers, ArrowRight } from 'lucide-react';
import { ProjectItem } from '../data/portfolioData';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/70 backdrop-blur-xs animate-in fade-in">
      <div 
        className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar with schematic vibe */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/50">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono px-2 py-0.5 rounded-md bg-amber-500/10 text-amber-700 dark:text-amber-400 font-bold border border-amber-500/20">
              {project.category}
            </span>
            <span className="text-xs text-slate-400 font-mono">
              Status: {project.status}
            </span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-7 space-y-6 max-h-[80vh] overflow-y-auto">
          
          {/* Optional Project Banner Image */}
          {project.imageUrl && (
            <div className="w-full rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-md max-h-72">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
              {project.title}
            </h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {project.detailedOverview}
            </p>
          </div>

          {/* System Block Diagram / Architecture */}
          {project.systemArchitecture && project.systemArchitecture.length > 0 && (
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono font-semibold text-slate-800 dark:text-slate-200 uppercase tracking-wider">
                <Layers className="w-4 h-4 text-amber-500" />
                <span>System Block Diagram &amp; Signal Flow</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {project.systemArchitecture.map((block, idx) => (
                  <div 
                    key={idx}
                    className="flex items-center gap-2 p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 font-mono"
                  >
                    <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-600 dark:text-amber-400 flex items-center justify-center text-[10px] font-bold">
                      {idx + 1}
                    </span>
                    <span>{block}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Key Engineering Features */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-900 dark:text-slate-200">
              Key Engineering Features &amp; Implementation
            </h4>
            <ul className="space-y-2">
              {project.features.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-600 dark:text-slate-400">
                  <Check className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tools & Components Used */}
          <div className="space-y-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-900 dark:text-slate-200">
              Technologies &amp; Hardware Components
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/50">
          <div className="flex items-center gap-2">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>

            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-amber-700 dark:text-amber-300 px-3 py-2 rounded-lg border border-amber-500/40 bg-amber-500/10 hover:bg-amber-500/20 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Watch Video Demo</span>
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 dark:bg-amber-500 dark:hover:bg-amber-600 dark:text-slate-950 text-white text-xs font-bold transition-colors"
          >
            Close Details
          </button>
        </div>

      </div>
    </div>
  );
};
