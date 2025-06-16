'use client';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import TitleSection from '@/components/sections/TitleSection';
import AboutSection from '@/components/sections/AboutSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import SkillsSection from '@/components/sections/SkillsSection';
import CertificatesSection from '@/components/sections/CertificatesSection';
import ContactSection from '@/components/sections/ContactSection';
import NavSection from '@/components/sections/NavSection';

export default function Home() {
  const [activeSection, setActiveSection] = useState('title');

  const renderSection = () => {
    switch (activeSection) {
      case 'title': return <TitleSection onNavigate={setActiveSection} />;
      case 'about': return <AboutSection />;
      case 'nav': return <NavSection onNavigate={setActiveSection} />;
      case 'projects': return <ProjectsSection />;
      case 'skills': return <SkillsSection />;
      case 'certificates': return <CertificatesSection />;
      case 'contact': return <ContactSection />;
      default: return <TitleSection onNavigate={setActiveSection} />;
    }
  };


  return (
    <main className="relative h-screen w-screen overflow-hidden dark:bg-black bg-[#1D2549] transition-colors duration-300">
      <Navbar onNavigate={setActiveSection} />
      {renderSection()}
    </main>
  );
}
