import { useReveal } from '@/hooks/use-reveal';

const education = [
  {
    degree: 'B.E. Information Technology',
    cgpa: '8.97',
    institution: 'G H Patel College of Engineering & Technology',
    duration: '2020 - 2024',
    description: 'Major in Information Technology with focus on software engineering, AI/ML, and system design',
    highlights: [
      "Dean's List for Academic Excellence",
      'Final Year Project on AI-based Security Systems',
      'Active member of Coding and Tech Clubs',
    ],
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
      'Implemented edge AI for real-time data processing',
    ],
  },
];

export function EducationSection() {
  const ref = useReveal<HTMLElement>();
  return (
    <section ref={ref} id="education" className="section reveal">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="section-eyebrow justify-center">Education</div>
          <h2 className="section-title">Academic <span className="text-gradient">foundation</span></h2>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Center timeline line */}
          <div
            className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px"
            style={{ background: 'linear-gradient(180deg, hsl(var(--indigo)), hsl(var(--violet)))' }}
          />

          <div className="space-y-12">
            {education.map((edu, i) => {
              const left = i % 2 === 0;
              return (
                <div key={i} className={`relative md:grid md:grid-cols-2 md:gap-10 ${left ? '' : ''}`}>
                  {/* Dot */}
                  <div
                    className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-6 w-3 h-3 rounded-full bg-grad-brand ring-4 ring-background"
                  />

                  <div className={`pl-12 md:pl-0 ${left ? 'md:pr-10 md:text-right' : 'md:col-start-2 md:pl-10'}`}>
                    <div className="card-surface p-6">
                      <div className={`flex items-center gap-3 mb-3 ${left ? 'md:justify-end' : ''}`}>
                        <span className="chip">CGPA {edu.cgpa}</span>
                        <span className="text-xs text-muted-foreground">{edu.duration}</span>
                      </div>
                      <h3 className="font-display font-bold text-xl mb-1">{edu.degree}</h3>
                      <div className="text-sm text-muted-foreground mb-4">{edu.institution}</div>
                      <p className="text-sm text-muted-foreground mb-4">{edu.description}</p>
                      <ul className={`space-y-2 ${left ? 'md:text-right' : ''}`}>
                        {edu.highlights.map((h) => (
                          <li key={h} className={`text-sm flex items-start gap-2 ${left ? 'md:flex-row-reverse' : ''}`}>
                            <span className="w-1 h-1 mt-2 bg-indigo-brand shrink-0" style={{ width: 4, height: 4 }} />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
