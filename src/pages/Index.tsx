
import React, { useState, useEffect } from 'react';
import Preloader from '../components/Preloader';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import ProjectsSection from '../components/ProjectsSection';
import ExperienceSection from '../components/ExperienceSection';
import TerminalSection from '../components/TerminalSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import ParticleBackground from '../components/ParticleBackground';
import ScrollToTop from '../components/ScrollToTop';
import ThemeToggle from '../components/ThemeToggle';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 6000); // Increased to 6 seconds for more attractive loading

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <div className="relative min-h-screen bg-background transition-colors duration-300">
      <ParticleBackground />
      <ThemeToggle />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <TerminalSection />
      <ContactSection />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
