import React from 'react';
import { X, Code2, Globe, FileText, Check, Copy } from 'lucide-react';

interface CustomizeGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CustomizeGuideModal: React.FC<CustomizeGuideModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/75 backdrop-blur-xs animate-in fade-in">
      <div 
        className="relative w-full max-w-3xl bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/50">
          <div className="flex items-center gap-2">
            <Code2 className="w-5 h-5 text-amber-500 dark:text-amber-400" />
            <h3 className="font-bold text-slate-900 dark:text-white text-base">
              Portfolio Customization &amp; Deployment Guide
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close guide"
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[80vh] overflow-y-auto text-xs sm:text-sm text-slate-600 dark:text-slate-300">
          
          <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-amber-900 dark:text-amber-200 space-y-1">
            <p className="font-bold text-sm">Hello, Md. Sabbir Ahmmed!</p>
            <p className="text-xs">
              Your portfolio is styled with a refined deep navy and golden theme. All content, skills, achievements, projects, and contact info are separated into a single, intuitive data file.
            </p>
          </div>

          {/* Section 1: Editing Content */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white text-sm">
              <span className="w-6 h-6 rounded-full bg-slate-900 dark:bg-amber-500 dark:text-slate-950 text-white flex items-center justify-center text-xs font-bold">
                1
              </span>
              <span>Where to update your information</span>
            </div>

            <p className="leading-relaxed">
              Open <code className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 font-mono text-amber-600 dark:text-amber-400 font-bold">src/data/portfolioData.ts</code>:
            </p>

            <ul className="space-y-2 pl-2">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span><strong>Personal Info &amp; Phone:</strong> Edit <code className="font-mono text-xs">personalInfo.phone</code>, <code className="font-mono text-xs">linkedin</code>, and <code className="font-mono text-xs">github</code>.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span><strong>Skills:</strong> Add, remove, or modify skills in the <code className="font-mono text-xs">skillsList</code> array. Adjust percentage and experience level freely.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span><strong>Projects:</strong> Update repository links, add new circuit or Arduino projects in <code className="font-mono text-xs">projectsList</code>.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span><strong>Achievements &amp; Experiences:</strong> Replace the placeholder items in <code className="font-mono text-xs">achievementsList</code> and <code className="font-mono text-xs">experienceList</code> with your real competition prizes and clubs.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span><strong>CV Document:</strong> Place your latest exported PDF into <code className="font-mono text-xs">public/cv/my-cv.pdf</code>.</span>
              </li>
            </ul>
          </div>

          {/* Section 2: Deploying for Free to GitHub Pages */}
          <div className="space-y-3 pt-3 border-t border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white text-sm">
              <span className="w-6 h-6 rounded-full bg-slate-900 dark:bg-amber-500 dark:text-slate-950 text-white flex items-center justify-center text-xs font-bold">
                2
              </span>
              <span>100% Free Hosting on GitHub Pages / Vercel</span>
            </div>

            <p className="leading-relaxed">
              This portfolio is a static Single-Page Application (Vite + React) that costs nothing to host:
            </p>

            <div className="p-3 rounded-lg bg-slate-900 text-slate-200 font-mono text-xs space-y-1 overflow-x-auto">
              <div># 1. Build the production package</div>
              <div className="text-amber-400 font-bold">npm run build</div>
              <div className="mt-2 text-slate-400"># 2. Deploy the dist/ folder to GitHub Pages, Cloudflare Pages, or Vercel</div>
            </div>

            <p className="text-xs text-slate-500">
              In your GitHub repository, enable <strong>GitHub Pages</strong> under Settings &gt; Pages, and point it to the built branch or use the automated GitHub Action.
            </p>
          </div>

        </div>

        {/* Footer */}
        <div className="flex items-center justify-end px-6 py-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/50">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 dark:bg-amber-500 dark:hover:bg-amber-600 dark:text-slate-950 text-white text-xs font-bold transition-colors"
          >
            Got it, thanks!
          </button>
        </div>

      </div>
    </div>
  );
};
