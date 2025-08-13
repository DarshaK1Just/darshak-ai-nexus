import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { TypewriterText } from './TypewriterText';
import Neural3DBackground from './Neural3DBackground';
import { Github, Linkedin, Youtube, Download, ExternalLink } from 'lucide-react';

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/DarshaK1Just',
    icon: Github,
    color: 'hover:text-primary'
  },
  {
    name: 'LinkedIn', 
    url: 'https://www.linkedin.com/in/darshak-kakani-31277a1bb/',
    icon: Linkedin,
    color: 'hover:text-neon-blue'
  },
  {
    name: 'YouTube',
    url: 'https://www.youtube.com/channel/UCUy35Eo8jIpBYnEovea6Vow',
    icon: Youtube,
    color: 'hover:text-accent'
  }
];

const roles = [
  "AI/ML Engineer",
  "Full Stack Developer", 
  "Data Scientist",
  "Automation Expert",
  "Gamer"
];

export function HeroSection() {
  const handleResumeClick = () => {
    // Replace with actual resume link
    window.open('#', '_blank');
  };

  const handleProjectsClick = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Neural3DBackground />
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Main heading */}
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Hello There <span className="animate-bounce inline-block">👋</span>
            <br />
            <span className="gradient-text">I am Darshak Kakani</span>
          </motion.h1>

          {/* Typewriter subtitle */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-xl md:text-2xl mb-8 text-muted-foreground h-16 flex items-center justify-center"
          >
            <TypewriterText 
              texts={roles}
              className="gradient-text-secondary font-semibold"
              typingSpeed={100}
              deletingSpeed={50}
              pauseTime={2000}
            />
          </motion.div>

          {/* Action buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Button 
              variant="neon" 
              size="xl"
              onClick={handleProjectsClick}
              className="group"
            >
              <ExternalLink className="w-5 h-5 group-hover:scale-110 transition-transform" />
              View Projects
            </Button>
            <Button 
              variant="glass-neon" 
              size="xl"
              onClick={handleResumeClick}
              className="group"
            >
              <Download className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Download Resume
            </Button>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.6 }}
            className="flex justify-center gap-6"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 1.8 + index * 0.1 }}
                className={`p-3 glass rounded-lg hover-lift ${social.color} transition-all duration-300 group`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon className="w-6 h-6 group-hover:animate-pulse" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-primary rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            className="w-1 h-3 bg-primary rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}