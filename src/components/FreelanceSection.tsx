import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase, Calendar, ExternalLink } from 'lucide-react';

const freelanceProjects = [
  {
    title: 'AI Healthcare Chatbot',
    period: 'Mar 2024 - May 2024',
    description: 'Speech-to-text appointment booking system with advanced NLP capabilities and voice recognition',
    technologies: ['Python', 'NLP', 'Speech Recognition', 'Flask', 'AI'],
    type: 'Healthcare AI',
    achievements: [
      'Implemented voice-based appointment booking',
      'Integrated multiple speech recognition APIs',
      'Built conversational AI with contextual understanding'
    ]
  },
  {
    title: 'AutoJob.ai Platform',
    period: 'Jan 2024 - Mar 2024', 
    description: 'AI-powered job auto-apply platform with intelligent application automation using LangGraph and Playwright',
    technologies: ['Python', 'LangGraph', 'Playwright', 'AI Agents', 'Automation'],
    type: 'Automation AI',
    achievements: [
      'Automated job application process with 95% accuracy',
      'Built intelligent form-filling AI agents',
      'Integrated with multiple job platforms'
    ]
  }
];

export function FreelanceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="freelance" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Freelance Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Independent AI and automation projects delivering innovative solutions 
            for healthcare and job market challenges.
          </p>
        </motion.div>

        <div className="space-y-8">
          {freelanceProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            >
              <Card className="glass-card hover-lift group">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  {/* Project Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Briefcase className="w-8 h-8 text-primary-foreground" />
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="flex-grow">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold mb-2 gradient-text-secondary">
                          {project.title}
                        </h3>
                        <div className="flex items-center gap-2 text-muted-foreground mb-2">
                          <Calendar className="w-4 h-4" />
                          {project.period}
                        </div>
                        <Badge variant="outline" className="glass mb-4">
                          {project.type}
                        </Badge>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Key Achievements */}
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2 text-primary">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {project.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="glass hover:bg-primary/20 transition-colors">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}