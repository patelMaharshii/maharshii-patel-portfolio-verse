
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const ProjectsSection = () => {
  const scrollAnimation = useScrollAnimation();
  const navigate = useNavigate();

  return (
    <section ref={scrollAnimation.ref} className={`mb-16 ${scrollAnimation.className}`}>
      <h2 className="text-3xl font-bold text-center mb-8 text-slate-800 font-mono">
        Featured Projects
      </h2>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="bg-white/80 border-slate-200 shadow-lg backdrop-blur-sm group hover:shadow-xl transition-all">
          <CardHeader>
            <CardTitle className="text-slate-800 group-hover:text-green-700 transition-colors font-mono">
              ArchivesBot
            </CardTitle>
            <CardDescription className="text-slate-600 font-mono">
              AI-powered legal document assistant
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-slate-700 mb-4 font-mono text-sm leading-relaxed">
              AI support bot for law firms enabling rapid retrieval across 1,000+ legal documents using FastAPI, 
              Docling, AWS Bedrock, and pgvector with OCR capabilities.
            </p>
            <Button 
              variant="outline" 
              size="sm" 
              className="border-slate-400 text-slate-700 hover:bg-slate-100 font-mono"
              onClick={() => window.open('https://archivesbot.com/', '_blank')}
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              View Project
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-white/80 border-slate-200 shadow-lg backdrop-blur-sm group hover:shadow-xl transition-all">
          <CardHeader>
            <CardTitle className="text-slate-800 group-hover:text-blue-700 transition-colors font-mono">
              ROCSim
            </CardTitle>
            <CardDescription className="text-slate-600 font-mono">
              GPU-accelerated physics engine
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-slate-700 mb-4 font-mono text-sm leading-relaxed">
              C++ physics engine using OpenGL & Qt with custom GPU kernel scheduling, achieving 60fps real-time 
              simulation of 1,000,000+ particles. Supports ROCm, CUDA, and CPU fallback across Linux, WSL, & Windows.
            </p>
            <Button 
              variant="outline" 
              size="sm" 
              className="border-slate-400 text-slate-700 hover:bg-slate-100 font-mono"
              onClick={() => window.open('https://github.com/ROCm', '_blank')}
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              View Project
            </Button>
          </CardContent>
        </Card>
      </div>
      
      <div className="flex justify-center">
        <Button 
          variant="outline" 
          className="border-slate-400 text-slate-700 hover:bg-slate-100 font-mono"
          onClick={() => navigate('/projects')}
        >
          View All Projects →
        </Button>
      </div>
    </section>
  );
};

export default ProjectsSection;
