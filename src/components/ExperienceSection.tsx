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
        {/* Current Role - NSERC Research */}
        <Card className="bg-white/80 border-slate-200 shadow-lg backdrop-blur-sm hover:shadow-xl transition-all">
          <CardHeader>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <CardTitle className="text-slate-800 font-mono flex items-center">
                <Briefcase className="w-5 h-5 mr-2 text-green-600" />
                AI/ML Research Assistant (NSERC Recipient)
              </CardTitle>
              <Badge variant="secondary" className="bg-green-100 text-green-800 hover:bg-green-200 font-mono w-fit">
                Current
              </Badge>
            </div>
            <CardDescription className="text-slate-600 font-mono">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm">
                <span className="flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  Intelligent Data Science Lab, London, ON
                </span>
                <span className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  May 2025 - Present
                </span>
              </div>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-3">
              <Badge variant="outline" className="border-blue-500 text-blue-700 font-mono mb-2">
                NSERC USRA Award ($9,632)
              </Badge>
            </div>
            <ul className="text-slate-700 font-mono text-sm leading-relaxed space-y-2">
              <li>• Received the NSERC USRA award ($9632) to continue research under Dr. Apurva Narayan</li>
              <li>• Finetuned a Discrete Diffusion Model for In Silico SELEX aptamer(DNA) discovery, achieving a validation loss of 0.47 by leveraging UBC's high-performance GPUs</li>
              <li>• Implemented a CNN-BiLSTM model using Tensorflow & Keras called DeepAptamer to speed up the discovery process of DNA proteins (SELEX), submitting a research paper to the AAAI Symposium</li>
              <li>• Engineered improvements to the CNN-BiLSTM model by integrating a GlobalAveragePooling1D layer and optimizing DNA shape feature input, elevating validation accuracy to 86% and reducing loss by 12.5%</li>
              <li>• Optimized model hyperparameters via Bayesian optimization, selecting categorical cross-entropy loss, ADAM optimizer, and a 0.0004 learning rate, to improve stability of predictions in imbalanced datasets</li>
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
            <CardDescription className="text-slate-600 font-mono">
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
            </CardDescription>
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