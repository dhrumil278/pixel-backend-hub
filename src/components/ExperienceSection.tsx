
import React from 'react';
import { Card } from '@/components/ui/card';

const ExperienceSection = () => {
  const experiences = [
    {
      role: 'Senior Backend Developer',
      company: 'TechCorp Inc.',
      period: '2022 - Present',
      description: 'Led development of microservices architecture serving 100k+ users. Implemented CI/CD pipelines and reduced deployment time by 70%.',
      achievements: [
        'Architected scalable API gateway',
        'Reduced server costs by 40%',
        'Mentored 3 junior developers'
      ]
    },
    {
      role: 'Backend Developer',
      company: 'StartupXYZ',
      period: '2021 - 2022',
      description: 'Built RESTful APIs and database schemas for e-commerce platform. Integrated payment gateways and implemented real-time features.',
      achievements: [
        'Developed core payment system',
        'Implemented real-time notifications',
        'Optimized database queries'
      ]
    },
    {
      role: 'Junior Developer',
      company: 'Digital Agency',
      period: '2020 - 2021',
      description: 'Started career building web applications with Node.js. Learned best practices for API design and database management.',
      achievements: [
        'Built first production API',
        'Learned Docker containerization',
        'Contributed to open source'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-muted/20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 gradient-text">
          Experience
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-primary/30"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={exp.role} className="relative">
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
                
                <Card className="ml-20 glass p-6 scroll-reveal magnetic-hover">
                  <div className="terminal rounded-lg p-4 mb-4">
                    <div className="text-green-400 font-mono text-sm">
                      <span className="text-gray-400">$</span> cat experience/{exp.period.replace(' - ', '_to_')}.log
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold text-primary">{exp.role}</h3>
                    <p className="text-secondary font-medium">{exp.company}</p>
                    <p className="text-sm text-muted-foreground font-mono">{exp.period}</p>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                  
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm text-accent">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-center">
                          <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
