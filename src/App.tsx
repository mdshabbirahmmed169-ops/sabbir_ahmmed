import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { EducationSection } from './components/EducationSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { AchievementsSection } from './components/AchievementsSection';
import { ResumeSection } from './components/ResumeSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { ResumeModal } from './components/ResumeModal';
import { CustomizeGuideModal } from './components/CustomizeGuideModal';

export default function App() {
  // Dark mode initialized with preference or defaults to dark navy theme for engineering aesthetic
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        return savedTheme === 'dark';
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return true;
  });

  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [isGuideModalOpen, setIsGuideModalOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-200">
      {/* Sticky Navigation Bar */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onOpenResumeModal={() => setIsResumeModalOpen(true)}
        onOpenGuideModal={() => setIsGuideModalOpen(true)}
      />

      {/* Main Portfolio Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <HeroSection onOpenResumeModal={() => setIsResumeModalOpen(true)} />

        {/* 2. About Me */}
        <AboutSection />

        {/* 3. Education Timeline */}
        <EducationSection />

        {/* 4. Skills & Proficiencies */}
        <SkillsSection />

        {/* 5. Projects Showcase */}
        <ProjectsSection />

        {/* 6. Experience Timeline */}
        <ExperienceSection />

        {/* 7. Achievements */}
        <AchievementsSection onOpenGuideModal={() => setIsGuideModalOpen(true)} />

        {/* 8. Resume Summary */}
        <ResumeSection onOpenResumeModal={() => setIsResumeModalOpen(true)} />

        {/* 10. Contact & Social Links */}
        <ContactSection />
      </main>

      {/* 12. Footer */}
      <Footer />

      {/* Interactive Modals and Floating Tools */}
      <ScrollToTop />
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
      <CustomizeGuideModal
        isOpen={isGuideModalOpen}
        onClose={() => setIsGuideModalOpen(false)}
      />
    </div>
  );
}
