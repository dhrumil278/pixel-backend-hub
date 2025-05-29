
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'E-Commerce API',
      description: 'Scalable REST API built with Node.js and Express, handling 10k+ concurrent users with Redis caching and MongoDB.',
      stack: ['Node.js', 'Express', 'MongoDB', 'Redis', 'JWT'],
      github: 'https://github.com',
      live: 'https://api.example.com',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop'
    },
    {
      title: 'Real-time Chat System',
      description: 'WebSocket-based chat application with message persistence, user authentication, and real-time notifications.',
      stack: ['Socket.io', 'Node.js', 'PostgreSQL', 'Docker'],
      github: 'https://github.com',
      live: 'https://chat.example.com',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop'
    },
    {
      title: 'Microservices Platform',
      description: 'Distributed system architecture with service discovery, API gateway, and automated deployment on AWS.',
      stack: ['Node.js', 'Docker', 'AWS', 'Kubernetes', 'RabbitMQ'],
      github: 'https://github.com',
      live: 'https://platform.example.com',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop'
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 gradient-text">
          Featured Projects
        </h2>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="glass group hover:glow transition-all duration-300 overflow-hidden scroll-reveal bg-card/80 backdrop-blur-sm border-border/50"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-card-foreground">{project.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.stack.map((tech) => (
                    <span 
                      key={tech}
                      className="tech-badge px-3 py-1 text-xs rounded-full font-mono font-medium shadow-sm border border-current/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-3">
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="magnetic-hover border-primary/20 hover:border-primary"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github size={16} />
                      Code
                    </a>
                  </Button>
                  <Button 
                    size="sm"
                    className="magnetic-hover bg-primary hover:bg-primary/90"
                    asChild
                  >
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
