
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

        <div className="grid md:grid-cols-2 gap-12">
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
              </div>
            </div>
          </Card>

          <div className="space-y-8">
            <Card className="glass p-6 scroll-reveal magnetic-hover">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">{counters.apis}+</div>
                <div className="text-muted-foreground">APIs Built</div>
              </div>
            </Card>
            
            <Card className="glass p-6 scroll-reveal magnetic-hover">
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary">{counters.users.toLocaleString()}+</div>
                <div className="text-muted-foreground">Users Served</div>
              </div>
            </Card>
            
            <Card className="glass p-6 scroll-reveal magnetic-hover">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">{counters.uptime.toFixed(1)}%</div>
                <div className="text-muted-foreground">Uptime</div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
