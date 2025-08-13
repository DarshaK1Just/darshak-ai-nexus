import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    company: 'CrestData Systems',
    position: 'Software Engineer',
    duration: 'Nov 2023 – Present',
    location: 'Ahmedabad, India',
    type: 'Full-time',
    projects: [
      'Built Netskope AI Plugin with advanced data processing capabilities',
      'Led Angular UI Revamp project improving user experience by 40%',
      'Developed DevOps Maturity Platform with GPT-powered analysis',
      'Implemented automated CI/CD pipelines reducing deployment time by 60%'
    ],
    technologies: ['Angular', 'Python', 'AI/ML', 'DevOps', 'GPT APIs'],
    color: 'primary'
  },
  {
    company: 'TatvaSoft',
    position: 'React.js Intern',
    duration: 'Apr 2023 – Jun 2023',
    location: 'Ahmedabad, India',
    type: 'Internship',
    projects: [
      'Developed MERN E-Bookstore Web Application from scratch',
      'Implemented user authentication and payment gateway integration',
      'Created responsive UI components with modern design principles',
      'Optimized application performance achieving 95+ Lighthouse score'
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT'],
    color: 'secondary'
  },
  {
    company: 'The Spark Foundation',
    position: 'Data Science Intern',
    duration: 'Oct 2022 – Nov 2022',
    location: 'Remote',
    type: 'Internship',
    projects: [
      'Developed ML-based predictive analytics models',
      'Performed data analysis on large datasets using Python',
      'Created interactive visualizations for business insights',
      'Implemented machine learning algorithms achieving 92% accuracy'
    ],
    technologies: ['Python', 'Pandas', 'Scikit-learn', 'Matplotlib', 'Jupyter'],
    color: 'accent'
  }
];

export function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Professional Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building innovative solutions across AI, full-stack development, and DevOps
            with leading technology companies.
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-px h-full bg-gradient-to-b from-primary via-secondary to-accent"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${exp.position}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative mb-12 ${index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto'
                }`}
            >
              {/* Timeline dot */}
              <div className={`absolute w-4 h-4 rounded-full bg-${exp.color} left-2 md:left-1/2 transform md:-translate-x-1/2 top-6 z-10 shadow-neon`}></div>

              <Card className="glass-card hover-lift ml-8 md:ml-0">
                {/* Company Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold gradient-text-secondary">
                      {exp.position}
                    </h3>
                    <div className="flex items-center gap-2 text-lg font-semibold text-primary">
                      <Briefcase className="w-5 h-5" />
                      {exp.company}
                    </div>
                  </div>
                  <Badge variant="outline" className={`bg-gradient-${exp.color} text-${exp.color}-foreground border-${exp.color}`}>
                    {exp.type}
                  </Badge>
                </div>

                {/* Duration and Location */}
                <div className="flex flex-col sm:flex-row gap-4 mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {exp.duration}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    {exp.location}
                  </div>
                </div>

                {/* Projects */}
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Key Projects & Achievements:</h4>
                  <ul className="space-y-2">
                    {exp.projects.map((project, i) => (
                      <li key={i} className="text-sm flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        {project}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="glass text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}