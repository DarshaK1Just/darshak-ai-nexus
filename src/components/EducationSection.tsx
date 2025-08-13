import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

const education = [
  {
    degree: 'B.E. Information Technology',
    cgpa: '8.97',
    institution: 'G H Patel College of Engineering & Technology',
    duration: '2020 - 2024',
    description: 'Major in Information Technology with focus on software engineering, AI/ML, and system design',
    highlights: [
      'Dean\'s List for Academic Excellence',
      'Final Year Project on AI-based Security Systems',
      'Active member of Coding and Tech Clubs'
    ]
  },
  {
    degree: 'Minor Degree in IoT',
    cgpa: '8.22', 
    institution: 'G H Patel College of Engineering & Technology',
    duration: '2022 - 2024',
    description: 'Specialized in Internet of Things, embedded systems, sensor networks, and edge computing',
    highlights: [
      'Built IoT-based smart home automation system',
      'Worked with Raspberry Pi and Arduino platforms',
      'Implemented edge AI for real-time data processing'
    ]
  }
];

export function EducationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="education" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            <GraduationCap className="inline-block mr-4 mb-2" />
            Education
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Strong academic foundation in technology and AI, with specialized knowledge 
            in IoT and embedded systems.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            >
              <Card className="glass-card hover-lift h-full group">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <BookOpen className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2">
                      <h3 className="text-xl font-bold text-primary">
                        {edu.degree}
                      </h3>
                      <Badge variant="secondary" className="bg-gradient-primary text-primary-foreground mt-1 sm:mt-0">
                        CGPA: {edu.cgpa}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground text-sm mb-1">
                      {edu.institution}
                    </p>
                    <p className="text-muted-foreground text-sm mb-4">
                      {edu.duration}
                    </p>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {edu.description}
                </p>

                {/* Highlights */}
                <div>
                  <h4 className="font-semibold mb-3 text-primary flex items-center gap-2">
                    <Award className="w-4 h-4" />
                    Key Highlights
                  </h4>
                  <ul className="space-y-2">
                    {edu.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}