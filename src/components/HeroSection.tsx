
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Github, Mail, ArrowDown } from 'lucide-react';

const HeroSection = () => {
  const [typeText, setTypeText] = useState('');
  const taglines = [
    'Fast APIs. Scalable Systems. Clean Code.',
    'Building the backend that powers innovation.',
    'Turning complex problems into elegant solutions.'
  ];
  const [currentTagline, setCurrentTagline] = useState(0);

  useEffect(() => {
    const text = taglines[currentTagline];
    let index = 0;
    
    const typeInterval = setInterval(() => {
      setTypeText(text.slice(0, index + 1));
      index++;
      
      if (index >= text.length) {
        clearInterval(typeInterval);
        setTimeout(() => {
          setCurrentTagline((prev) => (prev + 1) % taglines.length);
          setTypeText('');
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, [currentTagline]);

  return (
    <section className="min-h-screen flex items-center justify-center relative px-4">
      <div className="text-center z-10 max-w-4xl mx-auto">
        <div className="mb-8 scroll-reveal">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
            Hi, I'm Alex Johnson
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-2">
            I build backend infrastructure with Node.js
          </p>
          <div className="h-8">
            <p className="text-lg md:text-xl font-mono text-accent">
              {typeText}
              <span className="typing-cursor"></span>
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 scroll-reveal">
          <Button 
            size="lg" 
            className="magnetic-hover bg-primary hover:bg-primary/90 text-white px-8 py-3"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Projects
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="magnetic-hover border-primary text-primary hover:bg-primary hover:text-white px-8 py-3"
          >
            Download Resume
          </Button>
        </div>

        <div className="flex justify-center space-x-6 scroll-reveal">
          <a href="https://github.com" className="magnetic-hover text-muted-foreground hover:text-primary transition-colors">
            <Github size={24} />
          </a>
          <a href="mailto:alex@example.com" className="magnetic-hover text-muted-foreground hover:text-primary transition-colors">
            <Mail size={24} />
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-muted-foreground" size={24} />
      </div>
    </section>
  );
};

export default HeroSection;
