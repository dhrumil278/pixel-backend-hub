
import React from 'react';
import { Card } from '@/components/ui/card';

const SkillsSection = () => {
  const skills = [
    { name: 'Node.js', level: 95, category: 'Runtime' },
    { name: 'Express.js', level: 90, category: 'Framework' },
    { name: 'MongoDB', level: 85, category: 'Database' },
    { name: 'PostgreSQL', level: 80, category: 'Database' },
    { name: 'Redis', level: 75, category: 'Cache' },
    { name: 'Docker', level: 85, category: 'DevOps' },
    { name: 'AWS', level: 70, category: 'Cloud' },
    { name: 'Git', level: 90, category: 'Tools' }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 gradient-text">
          Skills & Technologies
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <Card 
              key={skill.name}
              className="glass p-6 scroll-reveal magnetic-hover group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-center">
                <div className="mb-4">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform">
                    {skill.name.charAt(0)}
                  </div>
                </div>
                
                <h3 className="font-semibold text-lg mb-2">{skill.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{skill.category}</p>
                
                <div className="relative">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <span className="text-xs text-muted-foreground mt-1 block">{skill.level}%</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
