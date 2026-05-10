import { useReveal } from '@/hooks/use-reveal';
import { GraduationCap, Cpu } from 'lucide-react';

const education = [
  {
    icon: GraduationCap,
    degree: 'B.E. Information Technology',
    cgpa: '8.97',
    institution: 'G H Patel College of Engineering & Technology',
    duration: '2020 – 2024',
    focus: 'Software Engineering, AI/ML, System Design',
    highlights: [
      "Dean's List for Academic Excellence",
      'Final Year Project on AI-based Security Systems',
      'Active member of Coding & Tech Clubs',
    ],
    tone: { from: '#6366F1', to: '#A78BFA', text: '#C4B5FD', border: 'rgba(99,102,241,0.4)', bg: 'rgba(99,102,241,0.12)' },
  },
  {
    icon: Cpu,
    degree: 'Minor Degree in IoT',
    cgpa: '8.22',
    institution: 'G H Patel College of Engineering & Technology',
    duration: '2022 – 2024',
    focus: 'Internet of Things, Embedded Systems, Edge Computing',
    highlights: [
      'Built IoT-based smart home automation system',
      'Worked with Raspberry Pi & Arduino platforms',
      'Implemented edge AI for real-time data processing',
    ],
    tone: { from: '#A78BFA', to: '#EC4899', text: '#F9A8D4', border: 'rgba(236,72,153,0.4)', bg: 'rgba(236,72,153,0.12)' },
  },
];

export function EducationSection() {
  const ref = useReveal<HTMLElement>();
  return (
    <section ref={ref} id="education" className="section reveal">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="section-eyebrow justify-center">Education</div>
          <h2 className="section-title">Academic <span className="text-gradient">foundation</span></h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {education.map((edu, i) => {
            const Icon = edu.icon;
            return (
              <div
                key={i}
                className="relative rounded-2xl p-6 md:p-7 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${edu.tone.bg}, hsl(var(--surface)))`,
                  border: '1px solid hsl(var(--border))',
                  backdropFilter: 'blur(8px)',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = edu.tone.border;
                  (e.currentTarget as HTMLDivElement).style.boxShadow = `0 20px 40px -16px ${edu.tone.border}`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = '';
                  (e.currentTarget as HTMLDivElement).style.boxShadow = '';
                }}
              >
                {/* Glow accent */}
                <div
                  className="absolute -top-16 -right-16 w-40 h-40 rounded-full pointer-events-none"
                  style={{ background: `radial-gradient(circle, ${edu.tone.from}55, transparent 70%)`, filter: 'blur(30px)' }}
                />

                <div className="flex items-start gap-5 relative">
                  <div
                    className="inline-flex items-center justify-center w-12 h-12 rounded-xl shrink-0"
                    style={{ background: `linear-gradient(135deg, ${edu.tone.from}, ${edu.tone.to})`, color: 'white' }}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <h3 className="font-display font-bold text-lg md:text-xl">{edu.degree}</h3>
                      <span
                        className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-semibold"
                        style={{ background: edu.tone.bg, border: `1px solid ${edu.tone.border}`, color: edu.tone.text }}
                      >
                        CGPA {edu.cgpa}
                      </span>
                    </div>
                    <div className="text-sm text-foreground/90">{edu.institution}</div>
                    <div className="text-xs text-muted-foreground mb-3">{edu.duration}</div>
                    <div className="text-sm text-muted-foreground mb-3">
                      <span className="text-foreground/80 font-medium">Focus:</span> {edu.focus}
                    </div>
                    <ul className="space-y-1.5">
                      {edu.highlights.map((h) => (
                        <li key={h} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span
                            className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                            style={{ background: `linear-gradient(135deg, ${edu.tone.from}, ${edu.tone.to})` }}
                          />
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
    </section>
  );
}
