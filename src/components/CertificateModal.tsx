import React from 'react';
import { X, Award, ExternalLink, Printer, CheckCircle, ShieldCheck } from 'lucide-react';
import { CertificateItem, personalInfo } from '../data/portfolioData';

interface CertificateModalProps {
  certificate: CertificateItem | null;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ certificate, onClose }) => {
  if (!certificate) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/75 backdrop-blur-xs animate-in fade-in">
      <div 
        className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/50">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-amber-500" />
            <span className="font-semibold text-slate-900 dark:text-white text-sm">
              Certificate Credential Verification
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

        {/* Certificate Visual Card */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="relative border-4 border-double border-amber-600/30 dark:border-amber-400/30 p-6 sm:p-8 rounded-xl bg-gradient-to-br from-amber-50/20 via-white to-amber-100/10 dark:from-slate-950 dark:via-slate-900 dark:to-amber-950/20 text-center space-y-4 shadow-inner">
            
            {/* Corner Decorative Ornaments */}
            <div className="absolute top-2 left-2 text-[10px] text-amber-600 dark:text-amber-400 font-mono font-bold">
              [ OFFICIAL RECORD ]
            </div>
            <div className="absolute top-2 right-2 text-[10px] text-slate-400 font-mono">
              {certificate.issueDate}
            </div>

            <div className="pt-2">
              <span className="text-[11px] font-mono tracking-widest uppercase text-slate-500 dark:text-slate-400 block">
                Certificate of Achievement &amp; Completion
              </span>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-slate-900 dark:text-white tracking-tight mt-1">
                {certificate.title}
              </h2>
            </div>

            <p className="text-xs text-slate-500 dark:text-slate-400 italic">
              This credential certifies that
            </p>

            <div className="py-1 border-b border-amber-300 dark:border-amber-700/60 max-w-sm mx-auto">
              <span className="text-lg sm:text-xl font-bold tracking-wide text-amber-600 dark:text-amber-400 font-serif">
                {personalInfo.name}
              </span>
              <p className="text-[11px] text-slate-500 font-mono mt-0.5">
                Jamalpur Science and Technology University (JSTU)
              </p>
            </div>

            <p className="text-xs text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
              {certificate.description}
            </p>

            {/* Issuing Organization and Seal */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-200 dark:border-slate-800">
              <div className="text-left text-xs">
                <span className="text-slate-400 font-mono text-[10px] block">ISSUING AUTHORITY</span>
                <span className="font-semibold text-slate-800 dark:text-slate-200">{certificate.issuingOrg}</span>
              </div>

              <div className="flex items-center gap-1.5 text-xs text-amber-700 dark:text-amber-300 font-mono bg-amber-500/10 px-2.5 py-1 rounded border border-amber-500/30">
                <ShieldCheck className="w-4 h-4 text-amber-500" />
                <span>Verified Credential</span>
              </div>

              <div className="text-right text-xs">
                <span className="text-slate-400 font-mono text-[10px] block">CREDENTIAL ID</span>
                <span className="font-mono text-slate-700 dark:text-slate-300">{certificate.credentialId || 'N/A'}</span>
              </div>
            </div>

          </div>

          {/* Skills Covered */}
          <div className="space-y-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-800 dark:text-slate-200">
              Skills &amp; Competencies Evaluated:
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {certificate.skillsCovered.map((skill) => (
                <span
                  key={skill}
                  className="px-2.5 py-1 rounded text-xs font-mono bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {certificate.isPlaceholder && (
            <div className="p-3 rounded-lg bg-amber-50/60 dark:bg-amber-950/30 border border-amber-200/60 dark:border-amber-800/40 text-[11px] text-amber-900 dark:text-amber-300">
              💡 Placeholder Note: You can link scanned PDF or JPEG certificates directly by setting <code className="font-mono text-amber-600 dark:text-amber-400 font-bold">credentialUrl: "/certificates/your-cert.pdf"</code> in <code className="font-mono">portfolioData.ts</code>.
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/50">
          <button
            onClick={() => window.print()}
            className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 transition-colors"
          >
            <Printer className="w-4 h-4" />
            <span>Print Certificate</span>
          </button>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 dark:bg-amber-500 dark:hover:bg-amber-600 dark:text-slate-950 text-white text-xs font-bold transition-colors"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
