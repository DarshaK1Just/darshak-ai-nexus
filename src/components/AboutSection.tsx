import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Database, Brain, Cloud, Trophy, GraduationCap } from 'lucide-react';

const skills = [
  {
    category: 'Languages',
    icon: Code,
    skills: ['Python', 'C/C++', 'Java', 'Golang', 'JavaScript'],
    color: 'text-neon-blue'
  },
  {
    category: 'Frameworks',
    icon: Code,
    skills: ['React', 'Angular', 'Express', 'Flask', 'FastAPI'],
    color: 'text-neon-purple'
  },
  {
    category: 'Databases',
    icon: Database,
    skills: ['MySQL', 'PostgreSQL', 'MongoDB'],
    color: 'text-neon-pink'
  },
  {
    category: 'AI/ML',
    icon: Brain,
    skills: ['LangChain', 'LangGraph', 'AutoGen', 'RAG', 'NLP'],
    color: 'text-neon-cyan'
  },
  {
    category: 'Cloud/Tools',
    icon: Cloud,
    skills: ['AWS', 'Docker', 'Redis', 'Git/GitHub', 'WebSockets'],
    color: 'text-primary'
  }
];

const achievements = [
  {
    title: 'Hackathon 1st Runner-Up',
    icon: Trophy,
    description: 'Secured second position in competitive programming hackathon'
  },
  {
    title: 'Flipkart GRiD 5.0 Level 2',
    icon: Trophy,
    description: 'Advanced to second level in Flipkart\'s coding challenge'
  },
  {
    title: 'AIR 50 CodeKaze',
    icon: Trophy,
    description: 'All India Rank 50 in CodeKaze programming contest'
  },
  {
    title: 'Google Cloud Arcade',
    icon: Trophy,
    description: 'Active contributor to Google Cloud Arcade program'
  },
  {
    title: '440+ LeetCode Problems',
    icon: Code,
    description: 'Solved over 440 algorithmic problems on LeetCode'
  },
  {
    title: '130+ GFG Problems',
    icon: Code,
    description: 'Completed 130+ problems on GeeksforGeeks platform'
  }
];

const education = [
  {
    degree: 'B.E. Information Technology',
    cgpa: '8.97',
    institution: 'G H Patel College of Engineering & Technology',
    description: 'Major in Information Technology with focus on software engineering and AI'
  },
  {
    degree: 'Minor Degree in IoT',
    cgpa: '8.22',
    institution: 'G H Patel College of Engineering & Technology',
    description: 'Specialized in Internet of Things, embedded systems, and sensor networks'
  }
];

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate AI/ML Engineer and Full Stack Developer with expertise in building 
            intelligent systems and scalable applications. Currently working at CrestData 
            Systems, contributing to cutting-edge AI solutions.
          </p>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold mb-8 text-center gradient-text-secondary">
            <GraduationCap className="inline-block mr-2" />
            Education
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              >
                <Card className="glass-card hover-lift h-full">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-lg font-semibold text-primary">
                      {edu.degree}
                    </h4>
                    <Badge variant="secondary" className="bg-gradient-primary text-primary-foreground">
                      CGPA: {edu.cgpa}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    {edu.institution}
                  </p>
                  <p className="text-sm">{edu.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold mb-8 text-center gradient-text-secondary">
            Technical Skills
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              >
                <Card className="glass-card hover-lift h-full">
                  <div className="flex items-center mb-4">
                    <skillGroup.icon className={`w-6 h-6 mr-3 ${skillGroup.color}`} />
                    <h4 className="text-lg font-semibold">{skillGroup.category}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.skills.map((skill) => (
                      <Badge 
                        key={skill} 
                        variant="outline" 
                        className="glass hover:bg-primary/20 transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-2xl font-bold mb-8 text-center gradient-text-secondary">
            Achievements & Recognition
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
              >
                <Card className="glass-card hover-lift h-full">
                  <div className="flex items-start mb-3">
                    <achievement.icon className="w-5 h-5 mr-3 text-accent mt-1" />
                    <div>
                      <h4 className="font-semibold text-primary mb-1">
                        {achievement.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}