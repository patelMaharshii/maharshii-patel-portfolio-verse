
import React, { useEffect, useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, ExternalLink, Code, Cpu, Gamepad2, Pickaxe, Wrench } from 'lucide-react';

const Index = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Floating pixels (Minecraft/Terraria inspired)
    const pixels: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      opacity: number;
    }> = [];

    // Create floating pixels
    const colors = ['#8B4513', '#228B22', '#4169E1', '#FF6347', '#32CD32', '#FF4500'];
    for (let i = 0; i < 30; i++) {
      pixels.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 6 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        opacity: Math.random() * 0.3 + 0.1,
      });
    }

    let animationId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw pixels
      pixels.forEach(pixel => {
        // Update position
        pixel.x += pixel.vx;
        pixel.y += pixel.vy;

        // Wrap around edges
        if (pixel.x < 0) pixel.x = canvas.width;
        if (pixel.x > canvas.width) pixel.x = 0;
        if (pixel.y < 0) pixel.y = canvas.height;
        if (pixel.y > canvas.height) pixel.y = 0;

        // Draw pixelated square
        ctx.fillStyle = pixel.color;
        ctx.globalAlpha = pixel.opacity;
        ctx.fillRect(
          Math.floor(pixel.x),
          Math.floor(pixel.y),
          pixel.size,
          pixel.size
        );
        ctx.globalAlpha = 1;
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-stone-100 text-slate-800 relative overflow-hidden">
      {/* Animated Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0 opacity-40"
      />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-12 max-w-4xl">
        {/* Header */}
        <header className="text-center mb-16 animate-fade-in">
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
              <Mail className="w-4 h-4 mr-2" />
              Contact
            </Button>
          </div>
        </header>

        {/* About Section */}
        <section className="mb-16">
          <Card className="bg-white/80 border-slate-200 shadow-lg backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-slate-800 flex items-center font-mono">
                <Code className="w-6 h-6 mr-2 text-green-600" />
                About Me
              </CardTitle>
              <CardDescription className="text-slate-600 font-mono">
                Building digital worlds, one block at a time
              </CardDescription>
            </CardHeader>
            <CardContent className="text-slate-700">
              <p className="mb-4 font-mono leading-relaxed">
                Passionate about creating efficient, scalable solutions and exploring the intersection of technology and creativity. 
                Currently pursuing my CS degree while working on projects that matter.
              </p>
              <p className="font-mono leading-relaxed">
                When I'm not coding, you'll find me exploring procedurally generated worlds, racing virtual tracks, 
                or building something new from scratch.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Skills Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-slate-800 font-mono">
            Tech Stack
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-white/80 border-slate-200 shadow-lg backdrop-blur-sm hover:shadow-xl transition-all">
              <CardHeader>
                <CardTitle className="text-slate-800 flex items-center font-mono">
                  <Pickaxe className="w-5 h-5 mr-2 text-amber-600" />
                  Core Skills
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="border-green-500 text-green-700 font-mono">Python</Badge>
                  <Badge variant="outline" className="border-blue-500 text-blue-700 font-mono">JavaScript</Badge>
                  <Badge variant="outline" className="border-purple-500 text-purple-700 font-mono">React</Badge>
                  <Badge variant="outline" className="border-orange-500 text-orange-700 font-mono">TypeScript</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/80 border-slate-200 shadow-lg backdrop-blur-sm hover:shadow-xl transition-all">
              <CardHeader>
                <CardTitle className="text-slate-800 flex items-center font-mono">
                  <Wrench className="w-5 h-5 mr-2 text-red-600" />
                  Tools & Frameworks
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="border-slate-500 text-slate-700 font-mono">Node.js</Badge>
                  <Badge variant="outline" className="border-cyan-500 text-cyan-700 font-mono">Tailwind</Badge>
                  <Badge variant="outline" className="border-yellow-500 text-yellow-700 font-mono">Git</Badge>
                  <Badge variant="outline" className="border-indigo-500 text-indigo-700 font-mono">Docker</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/80 border-slate-200 shadow-lg backdrop-blur-sm hover:shadow-xl transition-all">
              <CardHeader>
                <CardTitle className="text-slate-800 flex items-center font-mono">
                  <Cpu className="w-5 h-5 mr-2 text-emerald-600" />
                  Interests
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="border-green-500 text-green-700 font-mono">Machine Learning</Badge>
                  <Badge variant="outline" className="border-blue-500 text-blue-700 font-mono">Web Dev</Badge>
                  <Badge variant="outline" className="border-purple-500 text-purple-700 font-mono">Game Dev</Badge>
                  <Badge variant="outline" className="border-red-500 text-red-700 font-mono">AI</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Projects */}
        <section className="mb-16">
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

        {/* Gaming Section */}
        <section className="mb-16">
          <Card className="bg-white/80 border-slate-200 shadow-lg backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-slate-800 flex items-center font-mono">
                <Gamepad2 className="w-6 h-6 mr-2 text-indigo-600" />
                Beyond Code
              </CardTitle>
              <CardDescription className="text-slate-600 font-mono">
                Where creativity meets recreation
              </CardDescription>
            </CardHeader>
            <CardContent className="text-slate-700">
              <p className="font-mono leading-relaxed">
                I find inspiration in the worlds I explore and the challenges I face in gaming. 
                Whether it's the creative building in Minecraft, the exploration in Terraria, 
                or the precision required in Mario Kart, these experiences fuel my approach to problem-solving and design.
              </p>
            </CardContent>
          </Card>
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
