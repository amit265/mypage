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
      case 'about': return <AboutSection onNavigate={setActiveSection} />;
      case 'nav': return <NavSection onNavigate={setActiveSection} />;
      case 'projects': return <ProjectsSection onNavigate={setActiveSection} />;
      case 'skills': return <SkillsSection onNavigate={setActiveSection} />;
      case 'certificates': return <CertificatesSection onNavigate={setActiveSection} />;
      case 'contact': return <ContactSection onNavigate={setActiveSection} />;
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
