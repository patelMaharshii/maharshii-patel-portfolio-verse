
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Gamepad2 } from 'lucide-react';
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const GamingSection = () => {
  const scrollAnimation = useScrollAnimation();

  return (
    <section ref={scrollAnimation.ref} className={`mb-16 ${scrollAnimation.className}`}>
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
  );
};

export default GamingSection;
