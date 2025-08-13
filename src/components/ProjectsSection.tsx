import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Github, ExternalLink, Star, GitFork, Eye } from 'lucide-react';

const projects = [
  {
    title: 'AutoJob.ai',
    description: 'Workday automation AI tool powered by LangGraph and Playwright for intelligent job application automation',
    image: '/api/placeholder/400/250',
    technologies: ['Python', 'LangGraph', 'Playwright', 'AI Agents', 'Automation'],
    github: 'https://github.com/DarshaK1Just/workday-auto',
    demo: '#',
    stars: 45,
    forks: 15,
    category: 'Automation',
    fullDescription: 'AI-powered job application automation platform that uses intelligent agents to automatically apply to relevant job postings. Features include resume optimization, cover letter generation, and application tracking.',
    liveDemo: null
  },
  {
    title: 'ImageAI-DK',
    description: 'Image recognition AI powered by DALL·E API with advanced image generation and recognition capabilities',
    image: '/api/placeholder/400/250',
    technologies: ['React', 'Node.js', 'MongoDB', 'DALL·E API', 'Express'],
    github: 'https://github.com/DarshaK1Just/ImageAI',
    demo: '#',
    stars: 32,
    forks: 12,
    category: 'AI/ML',
    fullDescription: 'MERN stack AI Image Generator that leverages DALL·E API for creating unique images from text prompts. Features include image editing, style transfer, and batch processing with over 2000+ images generated.',
    liveDemo: 'https://imageai-dk.vercel.app'
  },
  {
    title: 'Phishing URL Detection',
    description: 'AI phishing prevention model using advanced machine learning algorithms for cybersecurity threat detection',
    image: '/api/placeholder/400/250',
    technologies: ['Django', 'Python', 'Scikit-learn', 'TensorFlow', 'PostgreSQL'],
    github: 'https://github.com/DarshaK1Just/Phishing_Website_Prediction',
    demo: '#',
    stars: 28,
    forks: 9,
    category: 'Cybersecurity',
    fullDescription: 'Django-based ML application that analyzes URLs and web content to detect phishing attempts with 96% accuracy. Includes real-time scanning, threat intelligence integration, and automated reporting.',
    liveDemo: null
  },
  {
    title: 'Face Recognition Security System',
    description: 'Raspberry Pi-based security system with real-time facial recognition and IoT integration',
    image: '/api/placeholder/400/250',
    technologies: ['Python', 'OpenCV', 'Raspberry Pi', 'TensorFlow Lite', 'IoT'],
    github: 'https://github.com/DarshaK1Just/Face_Reco_Security_Rasp_Pi',
    demo: '#',
    stars: 35,
    forks: 14,
    category: 'IoT',
    fullDescription: 'IoT + ML solution deployed on Raspberry Pi for advanced facial recognition security. Features include real-time detection, access control, visitor logging, and mobile notifications.',
    liveDemo: null
  },
  {
    title: 'Tesla Clone',
    description: 'UI clone of Tesla website with pixel-perfect design and modern web technologies',
    image: '/api/placeholder/400/250',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    github: 'https://github.com/DarshaK1Just/Tesla_Clone_DK',
    demo: '#',
    stars: 22,
    forks: 7,
    category: 'Frontend',
    fullDescription: 'Pixel-perfect React UI clone of Tesla website with modern design principles, smooth animations, and responsive layout. Includes interactive car configurator and dynamic pricing.',
    liveDemo: 'https://tesla-clone-dk.vercel.app'
  }
];

const categories = ['All', 'AI/ML', 'Cybersecurity', 'IoT', 'Automation', 'Healthcare', 'Frontend'];

export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

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
              <Card className="glass-card hover-lift h-full group overflow-hidden cursor-pointer transform-gpu perspective-1000">
                {/* Project Image with 3D Tilt Effect */}
                <motion.div 
                  className="relative overflow-hidden rounded-lg mb-4 h-48 bg-gradient-neural"
                  whileHover={{ 
                    rotateX: 5, 
                    rotateY: 5,
                    scale: 1.02,
                    transition: { duration: 0.3 }
                  }}
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <div className="text-6xl opacity-20 group-hover:scale-110 transition-transform duration-300">
                      {project.category === 'AI/ML' && '🤖'}
                      {project.category === 'Cybersecurity' && '🔒'}
                      {project.category === 'IoT' && '📡'}
                      {project.category === 'Automation' && '⚡'}
                      {project.category === 'Healthcare' && '🏥'}
                      {project.category === 'Frontend' && '🎨'}
                    </div>
                  </div>
                  {/* Animated particles overlay */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {Array.from({ length: 8 }).map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-primary rounded-full"
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                          opacity: [0, 1, 0],
                          scale: [0, 1, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.2,
                        }}
                      />
                    ))}
                  </div>
                  <div className="absolute top-3 right-3">
                    <Badge variant="secondary" className="bg-gradient-primary text-primary-foreground">
                      {project.category}
                    </Badge>
                  </div>
                  <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Badge variant="outline" className="glass text-xs">
                      <Eye className="w-3 h-3 mr-1" />
                      View Details
                    </Badge>
                  </div>
                </motion.div>

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
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.github, '_blank');
                      }}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button 
                      variant="neon" 
                      size="sm" 
                      className="flex-1"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProject(project);
                      }}
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      Details
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Project Details Modal */}
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="glass-card max-w-2xl max-h-[80vh] overflow-y-auto">
            {selectedProject && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl gradient-text-secondary flex items-center gap-3">
                    <div className="text-3xl">
                      {selectedProject.category === 'AI/ML' && '🤖'}
                      {selectedProject.category === 'Cybersecurity' && '🔒'}
                      {selectedProject.category === 'IoT' && '📡'}
                      {selectedProject.category === 'Automation' && '⚡'}
                      {selectedProject.category === 'Healthcare' && '🏥'}
                      {selectedProject.category === 'Frontend' && '🎨'}
                    </div>
                    {selectedProject.title}
                  </DialogTitle>
                </DialogHeader>
                
                <div className="space-y-6">
                  {/* Project Image */}
                  <div className="relative h-48 bg-gradient-neural rounded-lg overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                      <div className="text-8xl opacity-30">
                        {selectedProject.category === 'AI/ML' && '🤖'}
                        {selectedProject.category === 'Cybersecurity' && '🔒'}
                        {selectedProject.category === 'IoT' && '📡'}
                        {selectedProject.category === 'Automation' && '⚡'}
                        {selectedProject.category === 'Healthcare' && '🏥'}
                        {selectedProject.category === 'Frontend' && '🎨'}
                      </div>
                    </div>
                    <div className="absolute top-3 right-3">
                      <Badge variant="secondary" className="bg-gradient-primary text-primary-foreground">
                        {selectedProject.category}
                      </Badge>
                    </div>
                  </div>

                  {/* GitHub Stats */}
                  <div className="flex items-center justify-center gap-6 text-sm">
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Star className="w-4 h-4 text-yellow-500" />
                      <span className="font-semibold">{selectedProject.stars}</span> stars
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <GitFork className="w-4 h-4 text-blue-500" />
                      <span className="font-semibold">{selectedProject.forks}</span> forks
                    </div>
                  </div>

                  {/* Description */}
                  <div>
                    <h4 className="font-semibold mb-2 text-primary">Project Overview</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {selectedProject.fullDescription}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold mb-3 text-primary">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="glass hover:bg-primary/20 transition-colors">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4">
                    <Button 
                      variant="glass-neon" 
                      className="flex-1"
                      onClick={() => window.open(selectedProject.github, '_blank')}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </Button>
                    {selectedProject.liveDemo && (
                      <Button 
                        variant="neon" 
                        className="flex-1"
                        onClick={() => window.open(selectedProject.liveDemo!, '_blank')}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                    )}
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}