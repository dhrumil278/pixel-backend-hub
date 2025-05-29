
import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';

const AboutSection = () => {
  const [counters, setCounters] = useState({ apis: 0, users: 0, uptime: 0 });

  useEffect(() => {
    const animateCounters = () => {
      const targets = { apis: 50, users: 10000, uptime: 99.9 };
      const duration = 2000;
      const steps = 60;
      
      let currentStep = 0;
      const interval = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        
        setCounters({
          apis: Math.floor(targets.apis * progress),
          users: Math.floor(targets.users * progress),
          uptime: Math.min(targets.uptime, (targets.uptime * progress))
        });
        
        if (currentStep >= steps) {
          clearInterval(interval);
        }
      }, duration / steps);
    };

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        animateCounters();
      }
    });

    const aboutElement = document.getElementById('about');
    if (aboutElement) {
      observer.observe(aboutElement);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 gradient-text">
          About Me
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Terminal Section */}
          <Card className="glass p-8 scroll-reveal">
            <div className="terminal rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              
              <div className="space-y-2 text-sm">
                <div><span className="text-gray-400">$</span> whoami</div>
                <div className="text-blue-400">Alex Johnson</div>
                <div><span className="text-gray-400">$</span> cat profile.txt</div>
                <div className="text-white leading-relaxed">
                  Backend Developer with 3+ years of experience building 
                  scalable Node.js applications. Passionate about clean 
                  architecture, performance optimization, and creating 
                  robust APIs that power modern applications.
                </div>
                <div><span className="text-gray-400">$</span> cat interests.txt</div>
                <div className="text-green-400">
                  • Microservices Architecture<br/>
                  • Database Optimization<br/>
                  • Cloud Infrastructure<br/>
                  • Open Source Contributions
                </div>
                <div><span className="text-gray-400">$</span> cat stats.txt</div>
                <div className="text-yellow-400">
                  APIs Built: {counters.apis}+ | Users Served: {counters.users.toLocaleString()}+ | Uptime: {counters.uptime.toFixed(1)}%
                </div>
              </div>
            </div>
          </Card>

          {/* Developer Image Section */}
          <div className="scroll-reveal">
            <Card className="glass p-8 magnetic-hover overflow-hidden">
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10 p-2">
                  <img 
                    src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&h=500&fit=crop&crop=face"
                    alt="Developer Profile"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                
                {/* Floating particles around image */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-accent rounded-full animate-pulse"></div>
                <div className="absolute top-1/4 -left-2 w-3 h-3 bg-primary rounded-full animate-bounce"></div>
                <div className="absolute bottom-1/4 -right-1 w-2 h-2 bg-secondary rounded-full animate-ping"></div>
                <div className="absolute -bottom-1 left-1/4 w-3 h-3 bg-accent rounded-full animate-pulse"></div>
              </div>
              
              <div className="mt-6 text-center">
                <h3 className="text-xl font-bold gradient-text mb-2">Alex Johnson</h3>
                <p className="text-muted-foreground font-mono text-sm">
                  Node.js Backend Developer
                </p>
                <div className="flex justify-center space-x-1 mt-3">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  <span className="text-xs text-muted-foreground">Available for freelance</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
