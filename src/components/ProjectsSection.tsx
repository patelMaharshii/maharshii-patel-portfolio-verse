
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from 'lucide-react';
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const ProjectsSection = () => {
  const scrollAnimation = useScrollAnimation();

  return (
    <section ref={scrollAnimation.ref} className={`mb-16 ${scrollAnimation.className}`}>
      <h2 className="text-3xl font-bold text-center mb-8 text-slate-800 font-mono">
        Featured Projects
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
              Car Analyzer
            </CardTitle>
            <CardDescription className="text-slate-600 font-mono">
              AI vehicle detection system
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-slate-700 mb-4 font-mono text-sm leading-relaxed">
              Intelligent vehicle analysis tool for police operations using YOLOv5n and PyTorch. 
              Detects car color, make, model, and license plates for real-time surveillance.
            </p>
            <Button variant="outline" size="sm" className="border-slate-400 text-slate-700 hover:bg-slate-100 font-mono">
              <ExternalLink className="w-4 h-4 mr-2" />
              View Project
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-white/80 border-slate-200 shadow-lg backdrop-blur-sm group hover:shadow-xl transition-all">
          <CardHeader>
            <CardTitle className="text-slate-800 group-hover:text-purple-700 transition-colors font-mono">
              Spot
            </CardTitle>
            <CardDescription className="text-slate-600 font-mono">
              Restaurant reservation app
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-slate-700 mb-4 font-mono text-sm leading-relaxed">
              Full-stack restaurant reservation CRUD app built with React Native, ExpressJS, and Supabase. 
              Features Google Login API and CI/CD workflows with GitHub Actions.
            </p>
            <Button variant="outline" size="sm" className="border-slate-400 text-slate-700 hover:bg-slate-100 font-mono">
              <ExternalLink className="w-4 h-4 mr-2" />
              View Project
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ProjectsSection;
