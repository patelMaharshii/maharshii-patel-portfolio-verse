
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
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="bg-white/80 border-slate-200 shadow-lg backdrop-blur-sm group hover:shadow-xl transition-all">
          <CardHeader>
            <CardTitle className="text-slate-800 group-hover:text-green-700 transition-colors font-mono">
              Procedural World Generator
            </CardTitle>
            <CardDescription className="text-slate-600 font-mono">
              Minecraft-inspired terrain generation algorithm
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-slate-700 mb-4 font-mono text-sm leading-relaxed">
              Built a procedural world generation system using Perlin noise and cellular automata. 
              Features biome generation, cave systems, and ore distribution.
            </p>
            <Button variant="outline" size="sm" className="border-slate-400 text-slate-700 hover:bg-slate-100 font-mono">
              <ExternalLink className="w-4 h-4 mr-2" />
              View Project
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-white/80 border-slate-200 shadow-lg backdrop-blur-sm group hover:shadow-xl transition-all">
          <CardHeader>
            <CardTitle className="text-slate-800 group-hover:text-blue-700 transition-colors font-mono">
              Racing Analytics Dashboard
            </CardTitle>
            <CardDescription className="text-slate-600 font-mono">
              Real-time racing performance tracker
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-slate-700 mb-4 font-mono text-sm leading-relaxed">
              React-based dashboard for tracking lap times, analyzing racing lines, and comparing performance metrics. 
              Features interactive charts and real-time data visualization.
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
