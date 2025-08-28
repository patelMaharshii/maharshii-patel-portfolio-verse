import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Briefcase, Calendar, MapPin, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const PastRoles = () => {
  const navigate = useNavigate();
  const scrollAnimation = useScrollAnimation();

  const pastRoles = [
    {
      title: "Director of Technology",
      company: "Western Developers Society",
      location: "London, ON",
      period: "Oct 2024 - May 2025",
      type: "Leadership",
      description: [
        "• Currently working with development team to develop an AI/ML chatbot designed to provide precise directions to specific areas on Western University's campus",
        "• Integrating chatbot into autonomous robots that navigate campus, enhancing transportation on campus",
        "• Leading collaborative effort with Dr. Yili Tang, an assistant professor at Western University",
        "• Managing technical direction and development strategy for the organization"
      ]
    },
    {
      title: "Software Engineer Intern",
      company: "Choco Cakes",
      location: "Brampton, ON",
      period: "May 2024 - Aug 2024",
      type: "Internship",
      description: [
        "• Developed a React.js website to streamline user order management, optimizing data organization of over 300 clients into CSV format for seamless administrative access",
        "• Collaborated closely with the team to ensure efficient task completion, proactively mitigating more than 15 potential bugs before they could impact workflow",
        "• Enhanced page traffic and retention rates by 12% through optimizing site speed and enhancing user interface aesthetics"
      ]
    },
    {
      title: "Swim Instructor/Lifeguard",
      company: "City of Brampton",
      location: "Brampton, ON", 
      period: "Sep 2022 - Sep 2024",
      type: "Part-time",
      description: [
        "• Taught over 200 youth on lifesaving swimming skills to develop a future team within the lifesaving society",
        "• Dealt with more than 10 emergency situations and have managed over 200 people",
        "• Expanded current knowledge of swimming, teaching, and lifesaving techniques"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-stone-100 text-slate-800 relative overflow-hidden">
      <div className="container mx-auto px-6 py-12 max-w-4xl">
        <div className="flex items-center mb-8">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="mr-4 hover:bg-slate-100 font-mono"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
          </Button>
        </div>

        <div ref={scrollAnimation.ref as React.RefObject<HTMLDivElement>} className={`mb-16 ${scrollAnimation.className}`}>
          <h1 className="text-4xl font-bold text-center mb-4 text-slate-800 font-mono">
            Past Experience
          </h1>
          <p className="text-center text-slate-600 font-mono mb-12">
            A timeline of my professional journey and growth
          </p>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-500 via-blue-500 to-red-500"></div>
            
            <div className="space-y-8">
              {pastRoles.map((role, index) => (
                <div key={index} className="relative flex items-start">
                  {/* Timeline dot */}
                  <div className="absolute left-6 w-4 h-4 bg-white border-4 border-blue-500 rounded-full z-10"></div>
                  
                  {/* Content */}
                  <div className="ml-16 w-full">
                    <Card className="bg-white/80 border-slate-200 shadow-lg backdrop-blur-sm hover:shadow-xl transition-all">
                      <CardHeader>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                          <CardTitle className="text-slate-800 font-mono flex items-center">
                            <Briefcase className="w-5 h-5 mr-2 text-blue-600" />
                            {role.title}
                          </CardTitle>
                          <Badge 
                            variant="secondary" 
                            className="bg-blue-100 text-blue-800 hover:bg-blue-200 font-mono w-fit"
                          >
                            {role.type}
                          </Badge>
                        </div>
                        <CardDescription className="text-slate-600 font-mono">
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm">
                            <span className="flex items-center font-medium">
                              {role.company}
                            </span>
                            <span className="flex items-center">
                              <MapPin className="w-4 h-4 mr-1" />
                              {role.location}
                            </span>
                            <span className="flex items-center">
                              <Calendar className="w-4 h-4 mr-1" />
                              {role.period}
                            </span>
                          </div>
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="text-slate-700 font-mono text-sm leading-relaxed space-y-2">
                          {role.description.map((item, itemIndex) => (
                            <li key={itemIndex}>{item}</li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PastRoles;