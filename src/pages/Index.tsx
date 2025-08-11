
import React from 'react';
import CustomCursor from "@/components/CustomCursor";
import AnimatedBackground from "@/components/AnimatedBackground";
import Header from "@/components/Header";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import CourseworkSection from "@/components/CourseworkSection";
import GamingSection from "@/components/GamingSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-stone-100 text-slate-800 relative overflow-hidden">
      {/* Custom Cursor */}
      <CustomCursor />
      
      {/* Animated Background */}
      <AnimatedBackground />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-12 max-w-4xl">
        <Header />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <CourseworkSection />
        <GamingSection />

        {/* Footer */}
        <footer className="text-center">
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 via-blue-500 to-red-500 mx-auto mb-6 pixelated"></div>
          <p className="text-slate-600 font-mono">
            {'>'} Always building, always learning
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
