
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Pickaxe, Wrench, Cpu } from 'lucide-react';

const SkillsSection = () => {
  return (
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
  );
};

export default SkillsSection;
