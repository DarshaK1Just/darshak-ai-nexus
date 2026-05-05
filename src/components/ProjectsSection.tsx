import { useReveal } from '@/hooks/use-reveal';
import { Github, ExternalLink, Sparkles } from 'lucide-react';

const featured = {
  title: 'AutoJob.ai',
  description:
    'Workday automation AI tool powered by LangGraph and Playwright. Intelligent agents that read postings, fill forms, and apply at scale with 95% accuracy.',
  technologies: ['Python', 'LangGraph', 'Playwright', 'AI Agents', 'Automation'],
  github: 'https://github.com/DarshaK1Just/workday-auto',
  liveDemo: null as string | null,
  category: 'Automation',
  emoji: '⚡',
};

const projects = [
  {
    title: 'ImageAI-DK',
    description: 'MERN AI image generator using DALL·E API. 2000+ images generated.',
    technologies: ['React', 'Node.js', 'MongoDB', 'DALL·E API'],
    github: 'https://github.com/DarshaK1Just/ImageAI',
    liveDemo: 'https://imageai-dk.vercel.app',
    category: 'AI/ML',
    emoji: '🤖',
  },
  {
    title: 'Phishing URL Detection',
    description: 'Django + ML detecting phishing URLs with 96% accuracy.',
    technologies: ['Django', 'Python', 'Scikit-learn', 'TensorFlow'],
    github: 'https://github.com/DarshaK1Just/Phishing_Website_Prediction',
    liveDemo: null,
    category: 'Cybersecurity',
    emoji: '🔒',
  },
  {
    title: 'Face Recognition Security',
    description: 'Raspberry Pi facial recognition system with IoT integration.',
    technologies: ['Python', 'OpenCV', 'Raspberry Pi', 'TF Lite'],
    github: 'https://github.com/DarshaK1Just/Face_Reco_Security_Rasp_Pi',
    liveDemo: null,
    category: 'IoT',
    emoji: '📡',
  },
  {
    title: 'Tesla Clone',
    description: 'Pixel-perfect React clone of Tesla with smooth animations.',
    technologies: ['React', 'TypeScript', 'Tailwind', 'Framer Motion'],
    github: 'https://github.com/DarshaK1Just/Tesla_Clone_DK',
    liveDemo: 'https://tesla-clone-dk.vercel.app',
    category: 'Frontend',
    emoji: '🎨',
  },
];

function PlaceholderArt({ emoji, big = false }: { emoji: string; big?: boolean }) {
  return (
    <div
      className={`relative overflow-hidden ${big ? 'h-full min-h-[280px]' : 'h-44'} rounded-lg`}
      style={{ background: 'var(--gradient-brand-subtle)' }}
    >
      <div className="absolute inset-0 flex items-center justify-center text-6xl opacity-40 transition-transform duration-500 group-hover:scale-105">
        {emoji}
      </div>
    </div>
  );
}

export function ProjectsSection() {
  const ref = useReveal<HTMLElement>();
  return (
    <section ref={ref} id="projects" className="section reveal">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="section-eyebrow justify-center">Projects</div>
          <h2 className="section-title">Featured <span className="text-gradient">work</span></h2>
        </div>

        {/* Featured project */}
        <div
          className="card-surface group overflow-hidden mb-10 grid md:grid-cols-2 gap-6 p-6 md:p-8 relative"
          style={{ borderLeft: '4px solid transparent', borderImage: 'linear-gradient(180deg, #6366F1, #A78BFA, #EC4899) 1' }}
        >
          <div className="flex flex-col">
            <div className="inline-flex items-center gap-2 chip self-start mb-4">
              <Sparkles className="w-3 h-3" /> Featured ✦
            </div>
            <h3 className="font-display font-bold text-2xl md:text-3xl mb-3">{featured.title}</h3>
            <p className="text-muted-foreground leading-relaxed mb-5">{featured.description}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {featured.technologies.map((t) => <span key={t} className="chip">{t}</span>)}
            </div>
            <div className="flex gap-3 mt-auto">
              <a href={featured.github} target="_blank" rel="noreferrer" className="pill pill-gradient px-5 py-2.5 text-sm">
                <Github className="w-4 h-4" /> Code
              </a>
              {featured.liveDemo && (
                <a href={featured.liveDemo} target="_blank" rel="noreferrer" className="pill pill-outline px-5 py-2.5 text-sm">
                  <ExternalLink className="w-4 h-4" /> Live
                </a>
              )}
            </div>
          </div>
          <div className="relative">
            <PlaceholderArt emoji={featured.emoji} big />
          </div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p) => (
            <div key={p.title} className="card-surface p-5 group">
              <PlaceholderArt emoji={p.emoji} />
              <div className="mt-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-display font-bold text-lg">{p.title}</h3>
                  <span className="chip text-[10px]">{p.category}</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">{p.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.technologies.slice(0, 3).map((t) => <span key={t} className="chip">{t}</span>)}
                </div>
                <div className="flex gap-2">
                  <a href={p.github} target="_blank" rel="noreferrer" className="icon-btn" aria-label="GitHub">
                    <Github className="w-4 h-4" />
                  </a>
                  {p.liveDemo && (
                    <a href={p.liveDemo} target="_blank" rel="noreferrer" className="icon-btn" aria-label="Live demo">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
