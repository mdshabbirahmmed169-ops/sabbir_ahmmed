import React from 'react';
import { X, Printer, Download, Mail, Phone, MapPin, GraduationCap, Award, Cpu, BookOpen } from 'lucide-react';
import { personalInfo, educationList, skillsList, projectsList, experienceList, resumeData } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-xs animate-in fade-in">
      <div 
        className="relative w-full max-w-4xl bg-white text-slate-900 rounded-2xl shadow-2xl overflow-hidden my-6 border border-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Controls Toolbar (Non-printable) */}
        <div className="no-print flex items-center justify-between px-6 py-4 bg-slate-900 text-white">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-amber-400" />
            <span className="font-semibold text-sm">Curriculum Vitae Preview &amp; Print</span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold rounded-lg bg-amber-500 hover:bg-amber-600 text-slate-950 transition-colors shadow-xs"
            >
              <Printer className="w-4 h-4 text-slate-950" />
              <span>Print / Save as PDF</span>
            </button>

            <a
              href={personalInfo.cvPath}
              download="Md_Sabbir_Ahmmed_CV.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg border border-slate-700 bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
            >
              <Download className="w-4 h-4" />
              <span>Download File</span>
            </a>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Close CV Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable & Visual CV Document Viewer */}
        <div className="p-4 sm:p-6 max-h-[85vh] overflow-y-auto bg-slate-100 dark:bg-slate-950 flex flex-col items-center">
          <div className="w-full max-w-3xl bg-white shadow-xl rounded-xl overflow-hidden border border-slate-200">
            <img
              src="./cv/my-cv-preview.png"
              alt="Md. Sabbir Ahmmed Curriculum Vitae"
              className="w-full h-auto object-contain block"
            />
          </div>
        </div>

      </div>
    </div>
  );
};
