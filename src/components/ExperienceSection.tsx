import { useState } from 'react';
import { useReveal } from '@/hooks/use-reveal';
import { Calendar, MapPin, Target } from 'lucide-react';

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
    impact: 'Reduced deployment time by 60% via automated CI/CD. Led Angular revamp improving UX by 40%.',
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
    impact: 'Shipped full MERN e-commerce app with 95+ Lighthouse score and secure payment flow.',
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
    impact: 'Built predictive ML models with 92% accuracy from raw business datasets.',
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
          <div className="lg:col-span-4">
            <div className="flex lg:flex-col gap-1 overflow-x-auto lg:overflow-visible">
              {experiences.map((e, i) => {
                const isActive = i === active;
                return (
                  <button key={e.company} onClick={() => setActive(i)}
                    className="text-left px-4 py-3 rounded-r-md whitespace-nowrap lg:whitespace-normal transition-all"
                    style={{
                      borderLeft: isActive ? '3px solid hsl(var(--indigo))' : '3px solid hsl(var(--border))',
                      background: isActive ? 'linear-gradient(90deg, hsl(var(--indigo) / 0.12), transparent)' : 'transparent',
                      color: isActive ? 'hsl(var(--foreground))' : 'hsl(var(--muted-foreground))',
                      boxShadow: isActive ? '0 0 20px -10px hsl(var(--indigo) / 0.6)' : 'none',
                    }}>
                    <div className="font-display font-semibold text-sm">{e.company}</div>
                    <div className="text-xs opacity-70">{e.type}</div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="card-surface p-6 md:p-8 animate-[fade-in_0.4s_ease-out]" key={active}>
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

              <div className="flex flex-wrap gap-2 mb-6">
                {exp.technologies.map((t) => <span key={t} className="chip chip-mono">{t}</span>)}
              </div>

              <div className="rounded-lg p-4 flex gap-3 items-start"
                style={{ background: 'linear-gradient(135deg, hsl(var(--indigo) / 0.12), hsl(var(--pink) / 0.08))', border: '1px solid hsl(var(--indigo) / 0.3)' }}>
                <Target className="w-5 h-5 text-gradient shrink-0 mt-0.5" />
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-gradient font-bold mb-1">Key Impact</div>
                  <div className="text-sm text-foreground/90 leading-relaxed">{exp.impact}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
