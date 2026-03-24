import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useNavigate } from 'react-router-dom';

const ExperienceSection = () => {
  const scrollAnimation = useScrollAnimation();
  const navigate = useNavigate();

  return (
    <section ref={scrollAnimation.ref} className={`mb-16 ${scrollAnimation.className}`}>
      <h2 className="text-3xl font-bold text-center mb-8 text-slate-800 font-mono">
        Experience
      </h2>
      <div className="space-y-6">
        {/* Incoming Role - AMD */}
        <Card className="bg-white/80 border-slate-200 shadow-lg backdrop-blur-sm hover:shadow-xl transition-all">
          <CardHeader>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <CardTitle className="text-slate-800 font-mono flex items-center">
                <Briefcase className="w-5 h-5 mr-2 text-red-600" />
                Software Development Intern
              </CardTitle>
              <Badge variant="secondary" className="bg-red-100 text-red-800 hover:bg-red-200 font-mono w-fit">
                Incoming
              </Badge>
            </div>
            <div className="text-slate-600 font-mono">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm">
                <span className="flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  AMD, Markham, ON
                </span>
                <span className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  Incoming May 2026
                </span>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="text-slate-700 font-mono text-sm leading-relaxed space-y-2">
              <li>• As a part of the AMD AI Developer Infrastructure team, I will be working with the{' '}
                <a href="https://github.com/ROCm" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">
                  ROCm community
                </a>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Current Role - NSERC Research */}
        <Card className="bg-white/80 border-slate-200 shadow-lg backdrop-blur-sm hover:shadow-xl transition-all">
          <CardHeader>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <CardTitle className="text-slate-800 font-mono flex items-center">
                <Briefcase className="w-5 h-5 mr-2 text-green-600" />
                AI/ML Research Assistant (NSERC Recipient)
              </CardTitle>
              <Badge variant="outline" className="border-slate-400 text-slate-600 font-mono w-fit">
                2025
              </Badge>
            </div>
            <div className="text-slate-600 font-mono">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm">
                <span className="flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  Intelligent Data Science Lab, London, ON
                </span>
                <span className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  May 2025 - Sept 2025
                </span>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="mb-3">
              <Badge variant="outline" className="border-blue-500 text-blue-700 font-mono mb-2">
                NSERC USRA Award ($9,632)
              </Badge>
            </div>
            <ul className="text-slate-700 font-mono text-sm leading-relaxed space-y-2">
              <li>• Finetuned a Pytorch Diffusion Model for DNA discovery and received the NSERC USRA award ($9632)</li>
              <li>• Implemented a CNN-BiLSTM model speeding up the discovery process of DNA proteins by ~75% using Tensorflow & Keras for model building & Scikit-Learn for model training/testing</li>
              <li>• Engineered improvements to the model by integrating a 1-Dimensional Pooling layer to optimize DNA shape feature input, increasing validation accuracy to 86% and reducing loss by 12.5%</li>
            </ul>
          </CardContent>
        </Card>

        {/* Previous Role - Western University */}
        <Card className="bg-white/80 border-slate-200 shadow-lg backdrop-blur-sm hover:shadow-xl transition-all">
          <CardHeader>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <CardTitle className="text-slate-800 font-mono flex items-center">
                <Briefcase className="w-5 h-5 mr-2 text-blue-600" />
                AI/ML Research Assistant
              </CardTitle>
              <Badge variant="outline" className="border-slate-400 text-slate-600 font-mono w-fit">
                2025
              </Badge>
            </div>
            <div className="text-slate-600 font-mono">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm">
                <span className="flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  Western University, London, ON
                </span>
                <span className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  Jan 2025 - May 2025
                </span>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="text-slate-700 font-mono text-sm leading-relaxed space-y-2">
              <li>• Performed exploratory data analysis on 50 realtime patient data to help doctors at a local pediatric critical care unit perform more efficient handoffs of patients and identify the key features in those handoffs</li>
              <li>• Performed ElasticNet-based feature selection on 200+ features, achieving 98% predictor accuracy for patient handoff outcomes by using Matplotlib to analyze the data for data cleaning</li>
              <li>• Implemented ElasticNet using Scikit-Learn's GridSearchCV to optimize hyper parameters such as L1/L2 Regularization Ratio, focusing on L1 to reduce the impact of outliers</li>
            </ul>
          </CardContent>
        </Card>
        
        <div className="flex justify-center mt-8">
          <Button 
            variant="outline" 
            className="border-slate-400 text-slate-700 hover:bg-slate-100 font-mono"
            onClick={() => navigate('/experience')}
          >
            View Past Roles →
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;