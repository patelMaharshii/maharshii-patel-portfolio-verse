
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code } from 'lucide-react';
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const AboutSection = () => {
  const scrollAnimation = useScrollAnimation();

  return (
    <section ref={scrollAnimation.ref} className={`mb-16 ${scrollAnimation.className}`}>
      <Card className="bg-white/80 border-slate-200 shadow-lg backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-slate-800 flex items-center font-mono">
            <Code className="w-6 h-6 mr-2 text-green-600" />
            About Me
          </CardTitle>
          <CardDescription className="text-slate-600 font-mono">
            AI/ML Research Assistant & CS Student
          </CardDescription>
        </CardHeader>
        <CardContent className="text-slate-700">
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-slate-800 font-mono mb-2">Education</h3>
            <p className="font-mono leading-relaxed">
              <strong>Western University</strong> - Bachelor of Science in Computer Science<br/>
              <span className="text-slate-600">Expected Graduation: May 2027 | GPA: 3.9/4.0</span>
            </p>
          </div>
          <p className="font-mono leading-relaxed">
            Passionate about AI/ML research and building innovative solutions. Currently working as an NSERC USRA recipient, 
            developing genomic sequence generation models and performing data analysis for healthcare applications.
          </p>
        </CardContent>
      </Card>
    </section>
  );
};

export default AboutSection;
