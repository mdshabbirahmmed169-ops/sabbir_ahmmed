import React, { useState } from 'react';
import { Award, Calendar, ExternalLink, ShieldCheck, Eye, FileText } from 'lucide-react';
import { certificatesList, CertificateItem } from '../data/portfolioData';
import { CertificateModal } from './CertificateModal';

export const CertificatesSection: React.FC = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<CertificateItem | null>(null);

  return (
    <section id="certificates" className="py-20 bg-slate-50/60 dark:bg-slate-900/30 border-t border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <p className="text-xs font-mono font-semibold tracking-wider uppercase text-amber-600 dark:text-amber-400">
            Certified Credentials &amp; Workshops
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Certificates Gallery
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            Verified academic board certifications and technical workshop credentials in engineering tools, embedded systems, and simulation.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certificatesList.map((cert) => (
            <div
              key={cert.id}
              className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-amber-500/50 dark:hover:border-amber-500/50 shadow-xs hover:shadow-md transition-all flex flex-col justify-between overflow-hidden group"
            >
              {/* Card Header preview area */}
              <div className="p-5 bg-gradient-to-br from-slate-100 to-slate-50 dark:from-slate-800/60 dark:to-slate-900/60 border-b border-slate-200/80 dark:border-slate-800 flex items-center justify-between">
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-500 dark:text-amber-400">
                  <Award className="w-5 h-5" />
                </div>
                <div className="flex items-center gap-1.5 text-xs font-mono text-slate-500 dark:text-slate-400">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{cert.issueDate}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 space-y-3 flex-1">
                <div>
                  <span className="text-[11px] font-mono text-amber-600 dark:text-amber-400 block font-bold">
                    {cert.issuingOrg}
                  </span>
                  <h3 className="font-bold text-slate-900 dark:text-white text-base mt-1 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                    {cert.title}
                  </h3>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {cert.description}
                </p>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-1 pt-1">
                  {cert.skillsCovered.map((sk) => (
                    <span
                      key={sk}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700/80"
                    >
                      {sk}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Bar */}
              <div className="p-5 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                <button
                  onClick={() => setSelectedCertificate(cert)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 transition-colors"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>View Certificate</span>
                </button>

                {cert.credentialId && (
                  <span className="text-[10px] font-mono text-slate-400">
                    ID: {cert.credentialId}
                  </span>
                )}
              </div>

            </div>
          ))}
        </div>

        {/* Certificate Modal */}
        <CertificateModal
          certificate={selectedCertificate}
          onClose={() => setSelectedCertificate(null)}
        />

      </div>
    </section>
  );
};
