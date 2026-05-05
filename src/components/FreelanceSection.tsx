import { useReveal } from '@/hooks/use-reveal';
import { Briefcase, Calendar } from 'lucide-react';

const projects = [
  {
    title: 'AI Healthcare Chatbot',
    period: 'Mar 2024 - May 2024',
    description:
      'Speech-to-text appointment booking system with advanced NLP capabilities and voice recognition',
    technologies: ['Python', 'NLP', 'Speech Recognition', 'Flask', 'AI'],
    type: 'Healthcare AI',
    achievements: [
      'Implemented voice-based appointment booking',
      'Integrated multiple speech recognition APIs',
      'Built conversational AI with contextual understanding',
    ],
  },
  {
    title: 'AutoJob.ai Platform',
    period: 'Jan 2024 - Mar 2024',
    description:
      'AI-powered job auto-apply platform with intelligent application automation using LangGraph and Playwright',
    technologies: ['Python', 'LangGraph', 'Playwright', 'AI Agents', 'Automation'],
    type: 'Automation AI',
    achievements: [
      'Automated job application process with 95% accuracy',
      'Built intelligent form-filling AI agents',
      'Integrated with multiple job platforms',
    ],
  },
];

export function FreelanceSection() {
  const ref = useReveal<HTMLElement>();
  return (
    <section ref={ref} id="freelance" className="section reveal">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="section-eyebrow justify-center">Freelance</div>
          <h2 className="section-title">Independent <span className="text-gradient">AI builds</span></h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-5">
          {projects.map((p) => (
            <div key={p.title} className="card-surface p-6 group">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-11 h-11 rounded-lg bg-grad-brand flex items-center justify-center shrink-0">
                  <Briefcase className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-bold text-lg">{p.title}</h3>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
                    <Calendar className="w-3.5 h-3.5" /> {p.period} · {p.type}
                  </div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{p.description}</p>
              <ul className="space-y-1.5 mb-4">
                {p.achievements.map((a) => (
                  <li key={a} className="text-sm text-muted-foreground flex gap-2">
                    <span className="bg-indigo-brand mt-2 shrink-0" style={{ width: 4, height: 4 }} />
                    {a}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {p.technologies.map((t) => <span key={t} className="chip">{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
