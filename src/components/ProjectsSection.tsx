import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink, Star, GitFork } from 'lucide-react';

const projects = [
  {
    title: 'ImageAI-DK',
    description: 'MERN stack AI Image Generator powered by DALL·E API with over 2000+ generated images',
    image: '/api/placeholder/400/250',
    technologies: ['React', 'Node.js', 'MongoDB', 'DALL·E API', 'Express'],
    github: 'https://github.com/DarshaK1Just',
    demo: '#',
    stars: 24,
    forks: 8,
    category: 'AI/ML'
  },
  {
    title: 'Phishing URL Detection',
    description: 'Django-based ML application for cybersecurity threat detection using advanced algorithms',
    image: '/api/placeholder/400/250',
    technologies: ['Django', 'Python', 'Scikit-learn', 'TensorFlow', 'PostgreSQL'],
    github: 'https://github.com/DarshaK1Just',
    demo: '#',
    stars: 18,
    forks: 6,
    category: 'Cybersecurity'
  },
  {
    title: 'Face Recognition Security System',
    description: 'IoT + ML solution on Raspberry Pi for advanced facial recognition security',
    image: '/api/placeholder/400/250',
    technologies: ['Python', 'OpenCV', 'Raspberry Pi', 'TensorFlow Lite', 'IoT'],
    github: 'https://github.com/DarshaK1Just',
    demo: '#',
    stars: 32,
    forks: 12,
    category: 'IoT'
  },
  {
    title: 'AutoJob.ai',
    description: 'AI agent for job application automation using Playwright and LangGraph',
    image: '/api/placeholder/400/250',
    technologies: ['Python', 'LangGraph', 'Playwright', 'AI Agents', 'Automation'],
    github: 'https://github.com/DarshaK1Just',
    demo: '#',
    stars: 45,
    forks: 15,
    category: 'Automation'
  },
  {
    title: 'AI Healthcare Voice Chatbot',
    description: 'Voice-based appointment booking system with advanced NLP capabilities',
    image: '/api/placeholder/400/250',
    technologies: ['Python', 'NLP', 'Speech Recognition', 'Flask', 'AI'],
    github: 'https://github.com/DarshaK1Just',
    demo: '#',
    stars: 28,
    forks: 9,
    category: 'Healthcare'
  },
  {
    title: 'Tesla Clone',
    description: 'Pixel-perfect React UI clone of Tesla website with modern design principles',
    image: '/api/placeholder/400/250',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    github: 'https://github.com/DarshaK1Just',
    demo: '#',
    stars: 22,
    forks: 7,
    category: 'Frontend'
  }
];

const categories = ['All', 'AI/ML', 'Cybersecurity', 'IoT', 'Automation', 'Healthcare', 'Frontend'];

export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Innovative solutions combining AI, machine learning, and full-stack development 
            to solve real-world problems.
          </p>
        </motion.div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="glass-card hover-lift h-full group overflow-hidden">
                {/* Project Image */}
                <div className="relative overflow-hidden rounded-lg mb-4 h-48 bg-gradient-neural">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <div className="text-6xl opacity-20">
                      {project.category === 'AI/ML' && '🤖'}
                      {project.category === 'Cybersecurity' && '🔒'}
                      {project.category === 'IoT' && '📡'}
                      {project.category === 'Automation' && '⚡'}
                      {project.category === 'Healthcare' && '🏥'}
                      {project.category === 'Frontend' && '🎨'}
                    </div>
                  </div>
                  <div className="absolute top-3 right-3">
                    <Badge variant="secondary" className="bg-gradient-primary text-primary-foreground">
                      {project.category}
                    </Badge>
                  </div>
                </div>

                {/* Project Content */}
                <div className="flex flex-col h-full">
                  <h3 className="text-xl font-bold mb-2 gradient-text-secondary">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 flex-grow">
                    {project.description}
                  </p>

                  {/* GitHub Stats */}
                  <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4" />
                      {project.stars}
                    </div>
                    <div className="flex items-center gap-1">
                      <GitFork className="w-4 h-4" />
                      {project.forks}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs glass">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="text-xs glass">
                        +{project.technologies.length - 3} more
                      </Badge>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 mt-auto">
                    <Button 
                      variant="glass-neon" 
                      size="sm" 
                      className="flex-1"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button 
                      variant="neon" 
                      size="sm" 
                      className="flex-1"
                      onClick={() => window.open(project.demo, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View More Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Button 
            variant="glass-neon" 
            size="lg"
            onClick={() => window.open('https://github.com/DarshaK1Just', '_blank')}
          >
            <Github className="w-5 h-5 mr-2" />
            View All Projects
          </Button>
        </motion.div>
      </div>
    </section>
  );
}