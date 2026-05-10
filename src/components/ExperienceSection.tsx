import { useState } from 'react';
import { useReveal } from '@/hooks/use-reveal';
import { Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    company: 'Crest Data',
    position: 'Software Engineer',
    duration: 'Nov 2023 – Present',
    location: 'Ahmedabad, India',
    type: 'Full-time',
    projects: [
      'Built Netskope AI Plugin with advanced data processing capabilities',
      'Led Angular UI Revamp project improving user experience by 40%',
      'Developed DevOps Maturity Platform with GPT-powered analysis',
      'Implemented automated CI/CD pipelines reducing deployment time by 60%',
    ],
    technologies: ['Angular', 'Python', 'AI/ML', 'DevOps', 'GPT APIs'],
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
      'Optimized application performance achieving 95+ Lighthouse score',
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT'],
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
      'Implemented machine learning algorithms achieving 92% accuracy',
    ],
    technologies: ['Python', 'Pandas', 'Scikit-learn', 'Matplotlib', 'Jupyter'],
  },
];

export function ExperienceSection() {
  const ref = useReveal<HTMLElement>();
  const [active, setActive] = useState(0);
  const exp = experiences[active];

  return (
    <section ref={ref} id="experience" className="section reveal">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="section-eyebrow justify-center">Experience</div>
          <h2 className="section-title">Professional <span className="text-gradient">journey</span></h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 max-w-5xl mx-auto">
          {/* Company list */}
          <div className="lg:col-span-4">
            <div className="flex lg:flex-col gap-1 overflow-x-auto lg:overflow-visible">
              {experiences.map((e, i) => {
                const isActive = i === active;
                return (
                  <button
                    key={e.company}
                    onClick={() => setActive(i)}
                    className="text-left px-4 py-3 rounded-r-md whitespace-nowrap lg:whitespace-normal"
                    style={{
                      borderLeft: isActive ? '2px solid hsl(var(--indigo))' : '2px solid hsl(var(--border))',
                      background: isActive ? 'hsl(var(--indigo) / 0.08)' : 'transparent',
                      color: isActive ? 'hsl(var(--foreground))' : 'hsl(var(--muted-foreground))',
                    }}
                  >
                    <div className="font-display font-semibold text-sm">{e.company}</div>
                    <div className="text-xs opacity-70">{e.type}</div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Detail */}
          <div className="lg:col-span-8">
            <div className="card-surface p-6 md:p-8" key={active}>
              <h3 className="font-display font-bold text-xl">
                {exp.position} <span className="text-muted-foreground font-normal">@ {exp.company}</span>
              </h3>
              <div className="flex flex-wrap gap-4 text-xs text-muted-foreground mt-2 mb-6">
                <span className="inline-flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" />{exp.duration}</span>
                <span className="inline-flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" />{exp.location}</span>
              </div>

              <ul className="space-y-3 mb-6">
                {exp.projects.map((p) => (
                  <li key={p} className="text-sm text-muted-foreground flex gap-3">
                    <span className="text-gradient mt-0.5">▸</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((t) => (
                  <span key={t} className="chip chip-mono">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
