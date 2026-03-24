import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AllProjects = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-stone-100 text-slate-800">
      <div className="container mx-auto px-6 py-12 max-w-6xl">
        <div className="mb-8">
          <Button 
            variant="outline" 
            className="border-slate-400 text-slate-700 hover:bg-slate-100 font-mono mb-6"
            onClick={() => navigate('/')}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
          </Button>
          <h1 className="text-4xl font-bold text-center mb-4 text-slate-800 font-mono">
            All Projects
          </h1>
          <p className="text-center text-slate-600 font-mono">
            {'>'} A comprehensive showcase of my work
          </p>
        </div>
        
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
                ROCSim
              </CardTitle>
              <CardDescription className="text-slate-600 font-mono">
                GPU-accelerated physics engine
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-slate-700 mb-4 font-mono text-sm leading-relaxed">
                C++ physics engine using OpenGL & Qt with custom GPU kernel scheduling, achieving 60fps real-time 
                simulation of 1,000,000+ particles. Containerized with Docker, supports ROCm, CUDA, and CPU fallback across Linux, WSL, & Windows.
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

          <Card className="bg-white/80 border-slate-200 shadow-lg backdrop-blur-sm group hover:shadow-xl transition-all">
            <CardHeader>
              <CardTitle className="text-slate-800 group-hover:text-red-700 transition-colors font-mono">
                Portfolio Website
              </CardTitle>
              <CardDescription className="text-slate-600 font-mono">
                Personal portfolio with modern design
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-slate-700 mb-4 font-mono text-sm leading-relaxed">
                Responsive portfolio website built with React, TypeScript, and Tailwind CSS. 
                Features custom animations, glassmorphism design, and smooth scroll effects.
              </p>
              <Button variant="outline" size="sm" className="border-slate-400 text-slate-700 hover:bg-slate-100 font-mono">
                <ExternalLink className="w-4 h-4 mr-2" />
                View Code
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white/80 border-slate-200 shadow-lg backdrop-blur-sm group hover:shadow-xl transition-all">
            <CardHeader>
              <CardTitle className="text-slate-800 group-hover:text-orange-700 transition-colors font-mono">
                Data Analysis Tools
              </CardTitle>
              <CardDescription className="text-slate-600 font-mono">
                Python-based analytics suite
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-slate-700 mb-4 font-mono text-sm leading-relaxed">
                Collection of Python scripts for data preprocessing, visualization, and statistical analysis. 
                Built with pandas, numpy, matplotlib, and scikit-learn.
              </p>
              <Button variant="outline" size="sm" className="border-slate-400 text-slate-700 hover:bg-slate-100 font-mono">
                <ExternalLink className="w-4 h-4 mr-2" />
                View Project
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white/80 border-slate-200 shadow-lg backdrop-blur-sm group hover:shadow-xl transition-all">
            <CardHeader>
              <CardTitle className="text-slate-800 group-hover:text-teal-700 transition-colors font-mono">
                Campus Navigator
              </CardTitle>
              <CardDescription className="text-slate-600 font-mono">
                AI-powered campus navigation
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-slate-700 mb-4 font-mono text-sm leading-relaxed">
                Interactive campus navigation system using natural language processing. 
                Integrates MappedIn API with OpenAI for real-time indoor navigation assistance.
              </p>
              <Button variant="outline" size="sm" className="border-slate-400 text-slate-700 hover:bg-slate-100 font-mono">
                <ExternalLink className="w-4 h-4 mr-2" />
                View Project
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AllProjects;