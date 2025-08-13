import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Database, Brain, Cloud, Trophy } from 'lucide-react';
import { Suspense } from 'react';

// 3D Skill Icon Component
function SkillIcon3D({ category }: { category: string }) {
  return (
    <group>
      <mesh rotation={[0, 0, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshBasicMaterial 
          color={
            category === 'Languages' ? '#3B82F6' :
            category === 'Frameworks' ? '#8B5CF6' :
            category === 'Databases' ? '#EC4899' :
            category === 'AI/ML' ? '#06B6D4' :
            '#F59E0B'
          } 
          wireframe 
          opacity={0.6} 
          transparent 
        />
      </mesh>
    </group>
  );
}

const skills = [
  {
    category: 'Languages',
    icon: Code,
    skills: ['Python', 'C/C++', 'Java', 'Golang', 'JavaScript'],
    color: 'text-neon-blue',
    proficiency: 95
  },
  {
    category: 'Frameworks',
    icon: Code,
    skills: ['React', 'Angular', 'Express', 'Flask', 'FastAPI'],
    color: 'text-neon-purple',
    proficiency: 90
  },
  {
    category: 'Databases',
    icon: Database,
    skills: ['MySQL', 'PostgreSQL', 'MongoDB'],
    color: 'text-neon-pink',
    proficiency: 85
  },
  {
    category: 'AI/ML',
    icon: Brain,
    skills: ['LangChain', 'LangGraph', 'AutoGen', 'RAG', 'NLP'],
    color: 'text-neon-cyan',
    proficiency: 88
  },
  {
    category: 'Cloud/Tools',
    icon: Cloud,
    skills: ['AWS', 'Docker', 'Redis', 'Git/GitHub', 'WebSockets'],
    color: 'text-primary',
    proficiency: 82
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

export function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Technical Skills
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive expertise across the full technology stack, from AI/ML 
            to cloud infrastructure and modern web development.
          </p>
        </motion.div>

        {/* Skills Grid with 3D Icons */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            >
              <Card className="glass-card hover-lift h-full group">
                {/* 3D Icon */}
                <div className="w-20 h-20 mx-auto mb-4 relative">
                  <Canvas camera={{ position: [0, 0, 3], fov: 50 }}>
                    <Suspense fallback={null}>
                      <ambientLight intensity={0.5} />
                      <pointLight position={[10, 10, 10]} intensity={0.5} />
                      <SkillIcon3D category={skillGroup.category} />
                    </Suspense>
                  </Canvas>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <skillGroup.icon className={`w-8 h-8 ${skillGroup.color} group-hover:scale-110 transition-transform duration-300`} />
                  </div>
                </div>

                <h4 className="text-lg font-semibold text-center mb-2">{skillGroup.category}</h4>
                
                {/* Proficiency Bar */}
                <div className="mb-4">
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-muted-foreground">Proficiency</span>
                    <span className="text-primary font-semibold">{skillGroup.proficiency}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <motion.div 
                      className="bg-gradient-primary h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skillGroup.proficiency}%` } : {}}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                    />
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {skillGroup.skills.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="outline" 
                      className="glass hover:bg-primary/20 transition-colors text-xs"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
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
                transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
              >
                <Card className="glass-card hover-lift h-full group">
                  <div className="flex items-start mb-3">
                    <div className="w-10 h-10 bg-gradient-accent rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                      <achievement.icon className="w-5 h-5 text-accent-foreground" />
                    </div>
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