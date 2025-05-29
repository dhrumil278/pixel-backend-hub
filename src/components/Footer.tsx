
import React from 'react';
import { Github, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-foreground/95 text-background py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 gradient-text">Alex Johnson</h3>
            <p className="text-background/70 leading-relaxed">
              Building scalable backend solutions with Node.js. 
              Passionate about clean code and system architecture.
            </p>
          </div>

          <div>
            <h4 className="font-medium mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="#about" className="block text-background/70 hover:text-background transition-colors">About</a>
              <a href="#skills" className="block text-background/70 hover:text-background transition-colors">Skills</a>
              <a href="#projects" className="block text-background/70 hover:text-background transition-colors">Projects</a>
              <a href="#contact" className="block text-background/70 hover:text-background transition-colors">Contact</a>
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a 
                href="https://github.com" 
                className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-background/20 transition-colors magnetic-hover"
              >
                <Github size={20} />
              </a>
              <a 
                href="mailto:alex@example.com" 
                className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-background/20 transition-colors magnetic-hover"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center">
          <p className="text-background/70 font-mono">
            Made with ❤️ using Node.js • © 2024 Alex Johnson
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
