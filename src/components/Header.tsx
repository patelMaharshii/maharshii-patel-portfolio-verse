
import React from 'react';
import { Button } from "@/components/ui/button";
import { Github, Linkedin, FileText } from 'lucide-react';
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Header = () => {
  const scrollAnimation = useScrollAnimation();

  return (
    <header ref={scrollAnimation.ref} className={`text-center mb-16 relative ${scrollAnimation.className}`}>
      <div className="flex items-center justify-center mb-6">
        <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-800 mr-4 shadow-lg pixelated"></div>
        <h1 className="text-5xl font-bold text-slate-800 font-mono">
          Alex Neural
        </h1>
      </div>
      <p className="text-xl text-slate-600 mb-8 font-mono">
        {'>'} Computer Science Student & Developer
      </p>
      <div className="flex justify-center space-x-4">
        <Button variant="outline" size="sm" className="border-slate-400 text-slate-700 hover:bg-slate-100 font-mono">
          <Github className="w-4 h-4 mr-2" />
          GitHub
        </Button>
        <Button variant="outline" size="sm" className="border-slate-400 text-slate-700 hover:bg-slate-100 font-mono">
          <Linkedin className="w-4 h-4 mr-2" />
          LinkedIn
        </Button>
        <Button variant="outline" size="sm" className="border-slate-400 text-slate-700 hover:bg-slate-100 font-mono">
          <FileText className="w-4 h-4 mr-2" />
          Resume
        </Button>
      </div>
    </header>
  );
};

export default Header;
