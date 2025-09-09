
import React, { useEffect, useState } from 'react';
import CustomCursor from "@/components/CustomCursor";
import AnimatedBackground from "@/components/AnimatedBackground";
import Header from "@/components/Header";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import CourseworkSection from "@/components/CourseworkSection";
import GamingSection from "@/components/GamingSection";

const Index = () => {
  const [webringStatus, setWebringStatus] = useState<'loading' | 'loaded' | 'error' | 'timeout'>('loading');

  useEffect(() => {
    console.log('🔄 Webring: Starting initialization...');
    
    // Set a timeout to detect if webring doesn't load
    const timeout = setTimeout(() => {
      const webringElement = document.getElementById('western-webring');
      if (webringElement && webringElement.children.length === 0) {
        console.log('⏰ Webring: Timeout - widget did not load');
        setWebringStatus('timeout');
      }
    }, 10000); // 10 second timeout

    // Check if webring loaded every 500ms
    const checkInterval = setInterval(() => {
      const webringElement = document.getElementById('western-webring');
      if (webringElement && webringElement.children.length > 0) {
        console.log('✅ Webring: Successfully loaded');
        setWebringStatus('loaded');
        clearInterval(checkInterval);
        clearTimeout(timeout);
      }
    }, 500);

    // Force reload webring script if it fails
    const retryWebring = () => {
      console.log('🔄 Webring: Attempting to reload script...');
      const existingScript = document.querySelector('script[src*="webring.js"]');
      if (existingScript) {
        existingScript.remove();
      }
      
      const newScript = document.createElement('script');
      newScript.src = `https://jacobl04.github.io/Western-Webrings/webring.js?retry=${Date.now()}`;
      newScript.async = true;
      newScript.onload = () => console.log('🔄 Webring: Script reloaded');
      newScript.onerror = () => {
        console.log('❌ Webring: Script failed to reload');
        setWebringStatus('error');
      };
      document.head.appendChild(newScript);
    };

    // Retry after 5 seconds if not loaded
    const retryTimeout = setTimeout(() => {
      if (webringStatus === 'loading') {
        retryWebring();
      }
    }, 5000);

    return () => {
      clearInterval(checkInterval);
      clearTimeout(timeout);
      clearTimeout(retryTimeout);
    };
  }, []);
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-stone-100 text-slate-800 relative overflow-hidden">
      {/* Custom Cursor */}
      <CustomCursor />
      
      {/* Animated Background */}
      <AnimatedBackground />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-12 max-w-4xl">
        <Header />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <CourseworkSection />
        <GamingSection />

        {/* Western Webring */}
        <section className="my-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-slate-800 font-mono mb-4">Western University Network</h2>
            <p className="text-slate-600 font-mono">Discover other amazing Western University projects and portfolios</p>
          </div>
          <div className="flex justify-center">
            <div className="relative min-h-[100px] w-full max-w-md">
              <div id="western-webring"
                  data-style="default"
                  data-color="blue"
                  data-show-list="true"
                  data-show-random="true"
                  data-random-text="[?]"
                  data-arrow-prev="&lt; Prev"
                  data-arrow-next="Next &gt;"
                  >
              </div>
              
              {/* Loading/Error States */}
              {webringStatus === 'loading' && (
                <div className="absolute inset-0 flex items-center justify-center bg-white/80 rounded-lg border border-slate-200">
                  <div className="text-center">
                    <div className="animate-spin h-6 w-6 border-2 border-blue-500 border-t-transparent rounded-full mx-auto mb-2"></div>
                    <p className="text-slate-600 font-mono text-sm">Loading webring...</p>
                  </div>
                </div>
              )}
              
              {webringStatus === 'timeout' && (
                <div className="absolute inset-0 flex items-center justify-center bg-yellow-50/90 rounded-lg border border-yellow-200">
                  <div className="text-center">
                    <p className="text-yellow-700 font-mono text-sm mb-2">Webring is taking longer than expected</p>
                    <button 
                      onClick={() => window.location.reload()} 
                      className="px-3 py-1 bg-yellow-500 hover:bg-yellow-600 text-white rounded text-xs font-mono"
                    >
                      Refresh Page
                    </button>
                  </div>
                </div>
              )}
              
              {webringStatus === 'error' && (
                <div className="absolute inset-0 flex items-center justify-center bg-red-50/90 rounded-lg border border-red-200">
                  <div className="text-center">
                    <p className="text-red-700 font-mono text-sm mb-2">Failed to load webring</p>
                    <p className="text-red-600 font-mono text-xs mb-2">Try clearing your browser cache</p>
                    <button 
                      onClick={() => window.location.reload()} 
                      className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded text-xs font-mono"
                    >
                      Retry
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {/* Manual Cache Clearing Instructions */}
          {(webringStatus === 'timeout' || webringStatus === 'error') && (
            <div className="mt-6 p-4 bg-slate-100 rounded-lg">
              <h3 className="font-mono font-bold text-slate-800 mb-2">Manual Cache Clearing:</h3>
              <ul className="text-sm font-mono text-slate-600 space-y-1">
                <li>• Chrome/Edge: Ctrl+Shift+Delete → Clear browsing data</li>
                <li>• Firefox: Ctrl+Shift+Delete → Clear recent history</li>
                <li>• Safari: Cmd+Option+E → Empty caches</li>
                <li>• Or try hard refresh: Ctrl+F5 (Cmd+Shift+R on Mac)</li>
              </ul>
            </div>
          )}
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
