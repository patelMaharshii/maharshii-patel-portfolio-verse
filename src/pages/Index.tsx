import React, { useEffect, useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, ExternalLink, Brain, Code, Cpu } from 'lucide-react';

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

    // Neural network nodes
    const nodes: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      connections: number[];
      pulse: number;
    }> = [];

    // Create nodes
    for (let i = 0; i < 50; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 4 + 2,
        connections: [],
        pulse: Math.random() * Math.PI * 2,
      });
    }

    // Create connections between nearby nodes
    nodes.forEach((node, i) => {
      nodes.forEach((otherNode, j) => {
        if (i !== j) {
          const distance = Math.sqrt(
            Math.pow(node.x - otherNode.x, 2) + Math.pow(node.y - otherNode.y, 2)
          );
          if (distance < 150 && Math.random() > 0.7) {
            node.connections.push(j);
          }
        }
      });
    });

    let animationId: number;
    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw connections
      nodes.forEach((node, i) => {
        node.connections.forEach(connectionIndex => {
          const connectedNode = nodes[connectionIndex];
          const opacity = 0.1 + Math.sin(Date.now() * 0.001 + node.pulse) * 0.05;
          
          ctx.strokeStyle = `rgba(0, 255, 255, ${opacity})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(connectedNode.x, connectedNode.y);
          ctx.stroke();
        });
      });

      // Update and draw nodes
      nodes.forEach(node => {
        // Update position
        node.x += node.vx;
        node.y += node.vy;

        // Bounce off edges
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

        // Keep nodes within bounds
        node.x = Math.max(0, Math.min(canvas.width, node.x));
        node.y = Math.max(0, Math.min(canvas.height, node.y));

        // Update pulse
        node.pulse += 0.02;

        // Draw node
        const opacity = 0.3 + Math.sin(node.pulse) * 0.2;
        ctx.fillStyle = `rgba(0, 255, 255, ${opacity})`;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2);
        ctx.fill();

        // Draw node glow
        ctx.shadowColor = 'rgba(0, 255, 255, 0.5)';
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.shadowBlur = 0;
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
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Animated Neural Network Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        style={{ background: 'radial-gradient(ellipse at center, #001122 0%, #000000 100%)' }}
      />
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60 z-10" />
      
      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 py-12">
        {/* Header */}
        <header className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center mb-6">
            <Brain className="w-12 h-12 text-cyan-400 mr-4 animate-pulse" />
            <h1 className="text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Alex Neural
            </h1>
          </div>
          <p className="text-xl text-cyan-200 mb-8 font-mono">
            {'>'} CS Student & AI Research Enthusiast
          </p>
          <div className="flex justify-center space-x-6">
            <Button variant="outline" size="sm" className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black">
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </Button>
            <Button variant="outline" size="sm" className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black">
              <Linkedin className="w-4 h-4 mr-2" />
              LinkedIn
            </Button>
            <Button variant="outline" size="sm" className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black">
              <Mail className="w-4 h-4 mr-2" />
              Contact
            </Button>
          </div>
        </header>

        {/* About Section */}
        <section className="mb-16">
          <Card className="bg-black/40 border-cyan-400/30 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-cyan-400 flex items-center">
                <Code className="w-6 h-6 mr-2" />
                Neural.init()
              </CardTitle>
              <CardDescription className="text-cyan-200">
                Connecting ideas through intelligent systems
              </CardDescription>
            </CardHeader>
            <CardContent className="text-gray-300">
              <p className="mb-4 font-mono text-sm">
                {'>'} Passionate about creating intelligent systems that bridge the gap between human intuition and machine learning.
              </p>
              <p className="font-mono text-sm">
                {'>'} Currently exploring deep learning architectures, computer vision, and the intersection of AI with real-world applications.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Skills Network */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-cyan-400">
            Skill Network
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-black/40 border-cyan-400/30 backdrop-blur-sm hover:border-cyan-400/60 transition-colors">
              <CardHeader>
                <CardTitle className="text-cyan-400 flex items-center">
                  <Brain className="w-5 h-5 mr-2" />
                  AI/ML
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="border-cyan-400/50 text-cyan-300">Python</Badge>
                  <Badge variant="outline" className="border-cyan-400/50 text-cyan-300">TensorFlow</Badge>
                  <Badge variant="outline" className="border-cyan-400/50 text-cyan-300">PyTorch</Badge>
                  <Badge variant="outline" className="border-cyan-400/50 text-cyan-300">Computer Vision</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black/40 border-cyan-400/30 backdrop-blur-sm hover:border-cyan-400/60 transition-colors">
              <CardHeader>
                <CardTitle className="text-cyan-400 flex items-center">
                  <Code className="w-5 h-5 mr-2" />
                  Development
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="border-cyan-400/50 text-cyan-300">React</Badge>
                  <Badge variant="outline" className="border-cyan-400/50 text-cyan-300">TypeScript</Badge>
                  <Badge variant="outline" className="border-cyan-400/50 text-cyan-300">Node.js</Badge>
                  <Badge variant="outline" className="border-cyan-400/50 text-cyan-300">Docker</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black/40 border-cyan-400/30 backdrop-blur-sm hover:border-cyan-400/60 transition-colors">
              <CardHeader>
                <CardTitle className="text-cyan-400 flex items-center">
                  <Cpu className="w-5 h-5 mr-2" />
                  Systems
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="border-cyan-400/50 text-cyan-300">Linux</Badge>
                  <Badge variant="outline" className="border-cyan-400/50 text-cyan-300">AWS</Badge>
                  <Badge variant="outline" className="border-cyan-400/50 text-cyan-300">CUDA</Badge>
                  <Badge variant="outline" className="border-cyan-400/50 text-cyan-300">Git</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Projects */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-cyan-400">
            Active Processes
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-black/40 border-cyan-400/30 backdrop-blur-sm group hover:border-cyan-400/60 transition-all">
              <CardHeader>
                <CardTitle className="text-cyan-400 group-hover:text-white transition-colors">
                  Neural Image Classifier
                </CardTitle>
                <CardDescription className="text-cyan-200 font-mono text-sm">
                  {'>'} Deep learning model for real-time image classification
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4 text-sm">
                  CNN architecture achieving 94% accuracy on custom dataset with data augmentation and transfer learning.
                </p>
                <Button variant="outline" size="sm" className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Project
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-black/40 border-cyan-400/30 backdrop-blur-sm group hover:border-cyan-400/60 transition-all">
              <CardHeader>
                <CardTitle className="text-cyan-400 group-hover:text-white transition-colors">
                  Distributed ML Pipeline
                </CardTitle>
                <CardDescription className="text-cyan-200 font-mono text-sm">
                  {'>'} Scalable machine learning inference system
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4 text-sm">
                  Microservices architecture handling 10k+ requests/minute with auto-scaling and model versioning.
                </p>
                <Button variant="outline" size="sm" className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Project
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center">
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto mb-6" />
          <p className="text-cyan-200 font-mono text-sm">
            {'>'} Always learning, always connecting
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
