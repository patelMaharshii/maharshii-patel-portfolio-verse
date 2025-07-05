
import React from 'react';
import { Button } from "@/components/ui/button";
import { Github, Linkedin, FileText } from 'lucide-react';

const Header = () => {
  return (
    <header className="text-center mb-16 animate-fade-in relative">
      <div className="flex items-center justify-center mb-6">
        <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-800 mr-4 shadow-lg pixelated"></div>
        <h1 className="text-5xl font-bold text-slate-800 font-mono">
          Alex Neural
        </h1>
      </div>
      <p className="text-xl text-slate-600 mb-8 font-mono">
        {'>'} Computer Science Student & Developer
      </p>
      <div className="flex justify-center space-x-4 relative">
        {/* Ghast GIF positioned to the left of GitHub button */}
        <div className="absolute -left-20 top-1/2 transform -translate-y-1/2 pointer-events-none z-10">
          <img 
            src="/lovable-uploads/5be5de30-8064-4fd8-b356-dc8f7a9265bd.png"
            alt="Ghast"
            className="w-12 h-12 pixelated"
            draggable={false}
          />
        </div>

        <Button variant="outline" size="sm" className="border-slate-400 text-slate-700 hover:bg-slate-100 font-mono">
          <Github className="w-4 h-4 mr-2" />
          GitHub
        </Button>
        <Button variant="outline" size="sm" className="border-slate-400 text-slate-700 hover:bg-slate-100 font-mono">
          <Linkedin className="w-4 h-4 mr-2" />
          LinkedIn
        </Button>
        <Button variant="outline" size="sm" className="border-slate-400 text-slate-700 hover:bg-slate-100 font-mono relative">
          <FileText className="w-4 h-4 mr-2" />
          Resume
          
          {/* Terraria Tree positioned to the right of Resume button */}
          <div className="absolute -right-16 top-8 pointer-events-none z-10">
            <img 
              src="/lovable-uploads/9349430b-cc69-4c9e-a498-6fa60b2bb491.png"
              alt="Terraria Tree"
              className="w-12 h-auto pixelated"
              draggable={false}
              style={{ transform: 'translateY(8px)' }}
            />
          </div>
        </Button>
      </div>
    </header>
  );
};

export default Header;
