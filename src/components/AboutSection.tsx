
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code } from 'lucide-react';

const AboutSection = () => {
  return (
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
  );
};

export default AboutSection;
