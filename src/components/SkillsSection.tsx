import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Code, Database, Cloud, Globe, Server, Wrench, Shield, Zap, GitBranch } from 'lucide-react';

const SkillsSection = () => {
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);
  const [expandDirection, setExpandDirection] = useState<'right' | 'left'>('right');

  const skills = [
    { 
      name: 'Node.js', 
      level: 95, 
      category: 'Runtime',
      icon: Server,
      description: 'Expert in building scalable server-side applications with Node.js, utilizing event-driven architecture and non-blocking I/O operations.'
    },
    { 
      name: 'Express.js', 
      level: 90, 
      category: 'Framework',
      icon: Globe,
      description: 'Proficient in creating RESTful APIs and web applications using Express.js with middleware, routing, and security best practices.'
    },
    { 
      name: 'MongoDB', 
      level: 85, 
      category: 'Database',
      icon: Database,
      description: 'Experienced in NoSQL database design, aggregation pipelines, indexing strategies, and performance optimization.'
    },
    { 
      name: 'PostgreSQL', 
      level: 80, 
      category: 'Database',
      icon: Database,
      description: 'Skilled in relational database design, complex queries, stored procedures, and database performance tuning.'
    },
    { 
      name: 'Redis', 
      level: 75, 
      category: 'Cache',
      icon: Zap,
      description: 'Proficient in implementing caching strategies, session management, and real-time features using Redis.'
    },
    { 
      name: 'Docker', 
      level: 85, 
      category: 'DevOps',
      icon: Shield,
      description: 'Experienced in containerization, multi-stage builds, Docker Compose, and container orchestration strategies.'
    },
    { 
      name: 'AWS', 
      level: 70, 
      category: 'Cloud',
      icon: Cloud,
      description: 'Knowledgeable in cloud architecture, EC2, S3, Lambda, RDS, and implementing scalable cloud solutions.'
    },
    { 
      name: 'Git', 
      level: 90, 
      category: 'Tools',
      icon: GitBranch,
      description: 'Expert in version control, branching strategies, code collaboration, and Git workflow optimization.'
    },
    { 
      name: 'TypeScript', 
      level: 88, 
      category: 'Language',
      icon: Code,
      description: 'Proficient in type-safe development, advanced TypeScript features, and building robust applications.'
    }
  ];

  const handleMouseEnter = (index: number, event: React.MouseEvent) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const cardWidth = rect.width;
    
    // Determine expansion direction based on mouse position and grid position
    const col = index % 3;
    const isRightSide = mouseX > cardWidth / 2;
    
    // Expand right if mouse is on right side and not in last column
    // Expand left if mouse is on left side and not in first column
    let direction: 'right' | 'left' = 'right';
    
    if (col === 2) {
      direction = 'left'; // Last column, expand left
    } else if (col === 0) {
      direction = 'right'; // First column, expand right
    } else {
      direction = isRightSide ? 'right' : 'left'; // Middle column, based on mouse position
    }
    
    setExpandDirection(direction);
    setHoveredSkill(index);
  };

  const handleMouseLeave = () => {
    setHoveredSkill(null);
  };

  const getCardClasses = (index: number) => {
    const baseClasses = "glass p-6 cursor-pointer transition-all duration-500 ease-in-out relative overflow-hidden";
    
    if (hoveredSkill === null) {
      return `${baseClasses} hover:scale-105 hover:shadow-lg`;
    }
    
    if (hoveredSkill === index) {
      const row = Math.floor(index / 3);
      const col = index % 3;
      
      // Calculate z-index and positioning for expanded card
      let expandedClasses = "z-20 scale-100";
      
      if (expandDirection === 'right') {
        if (col < 2) { // Can expand right
          expandedClasses += " col-span-2";
        }
      } else {
        if (col > 0) { // Can expand left
          expandedClasses += " col-span-2 -translate-x-full";
        }
      }
      
      if (row < 2) { // Can expand down
        expandedClasses += " row-span-2";
      }
      
      return `${baseClasses} ${expandedClasses}`;
    }
    
    // Other cards when one is hovered
    return `${baseClasses} opacity-60 scale-95`;
  };

  const renderSkillContent = (skill: any, index: number, isExpanded: boolean) => {
    const IconComponent = skill.icon;
    
    if (isExpanded) {
      return (
        <div className="h-full flex flex-col justify-center items-center text-center p-4">
          <div className="mb-6">
            <IconComponent className="w-16 h-16 mx-auto text-primary mb-4" />
            <h3 className="text-2xl font-bold gradient-text mb-2">{skill.name}</h3>
            <p className="text-sm text-primary/80 mb-4">{skill.category}</p>
          </div>
          
          <div className="flex-1 flex flex-col justify-center">
            <p className="text-sm text-muted-foreground leading-relaxed mb-6 max-w-md">
              {skill.description}
            </p>
            
            <div className="w-full max-w-sm mx-auto">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium">Proficiency</span>
                <span className="text-sm text-primary font-bold">{skill.level}%</span>
              </div>
              <Progress value={skill.level} className="h-3" />
            </div>
          </div>
        </div>
      );
    }
    
    return (
      <div className="text-center h-full flex flex-col justify-center">
        <div className="mb-4">
          <div className="w-12 h-12 mx-auto bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white text-lg font-bold group-hover:scale-110 transition-transform">
            <IconComponent className="w-6 h-6" />
          </div>
        </div>
        
        <h3 className="font-semibold text-lg mb-2">{skill.name}</h3>
        <p className="text-sm text-muted-foreground mb-4">{skill.category}</p>
        
        <div className="relative">
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all duration-1000 ease-out"
              style={{ width: `${skill.level}%` }}
            ></div>
          </div>
          <span className="text-xs text-muted-foreground mt-1 block">{skill.level}%</span>
        </div>
      </div>
    );
  };

  return (
    <section id="skills" className="py-20 px-4 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 gradient-text">
          Skills & Technologies
        </h2>

        <div className="grid grid-cols-3 gap-6 auto-rows-fr">
          {skills.map((skill, index) => {
            const isExpanded = hoveredSkill === index;
            
            return (
              <Card 
                key={skill.name}
                className={getCardClasses(index)}
                onMouseEnter={(e) => handleMouseEnter(index, e)}
                onMouseLeave={handleMouseLeave}
                style={{ 
                  minHeight: isExpanded ? '400px' : '200px',
                  animationDelay: `${index * 0.1}s`
                }}
              >
                {renderSkillContent(skill, index, isExpanded)}
              </Card>
            );
          })}
        </div>

        {/* Responsive design for smaller screens */}
        <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            
            return (
              <Card 
                key={`mobile-${skill.name}`}
                className="glass p-6 magnetic-hover"
              >
                <div className="text-center">
                  <div className="mb-4">
                    <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white">
                      <IconComponent className="w-8 h-8" />
                    </div>
                  </div>
                  
                  <h3 className="font-semibold text-lg mb-2">{skill.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{skill.category}</p>
                  <p className="text-xs text-muted-foreground mb-4 leading-relaxed">
                    {skill.description}
                  </p>
                  
                  <div className="relative">
                    <Progress value={skill.level} className="h-2 mb-2" />
                    <span className="text-xs text-muted-foreground">{skill.level}%</span>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
