
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

        {/* Western Webring */}
        <section className="my-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-slate-800 font-mono mb-4">Western University Network</h2>
            <p className="text-slate-600 font-mono">Discover other amazing Western University projects and portfolios</p>
          </div>
          <div className="flex justify-center">
            <div id="western-webring"
                data-style="default"
                data-color="blue"
                data-show-list="true"
                data-show-random="true"
                data-random-text="[?]"
                data-arrow-prev="&lt; Prev"
                data-arrow-next="Next &gt;"
                >
            </div>
          </div>
        </section>

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
