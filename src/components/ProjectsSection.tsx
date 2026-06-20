import { useEffect, useState } from 'react';
import { useReveal } from '@/hooks/use-reveal';
import { Github, ExternalLink, Sparkles, Star, Calendar, ArrowRight } from 'lucide-react';

const featured = {
  title: 'AutoJob.ai',
  tagline: 'AI-Powered Job Application Agent',
  description:
    'Autonomous LangGraph agent that reads job postings, fills application forms, and applies at scale — 95% accuracy rate across Workday and Greenhouse platforms.',
  technologies: ['Python', 'LangGraph', 'Playwright', 'OpenAI', 'AI Agents'],
  metrics: [
    { value: '95%', label: 'Application Accuracy' },
    { value: '10x', label: 'Faster Than Manual' },
    { value: 'Multi', label: 'Platform Support' },
  ],
  github: 'https://github.com/DarshaK1Just/workday-auto',
  liveDemo: null as string | null,
  category: 'AI Agents · Automation',
  emoji: '⚡',
  repo: 'workday-auto',
  tone: 'violet',
};

type Project = {
  title: string;
  description: string;
  technologies: string[];
  github: string | null;
  liveDemo?: string | null;
  category: string;
  tone: 'violet' | 'pink' | 'cyan';
  emoji: string;
  impact: string;
  repo?: string;
};

const projects: Project[] = [
  {
    title: 'Insurance Document Q&A',
    description: 'Multi-stage agentic RAG pipeline on Azure for insurance policy Q&A with semantic chunking and hybrid search.',
    technologies: ['Python', 'Azure AI Search', 'Azure OpenAI', 'FastAPI', 'RAG'],
    github: 'https://github.com/DarshaK1Just/atQor-insurance-doc-qa',
    category: 'AI/ML',
    tone: 'violet',
    emoji: '📑',
    impact: 'Production-ready multi-stage RAG with semantic chunking + hybrid search',
    repo: 'atQor-insurance-doc-qa',
  },
  {
    title: 'AI Healthcare Chatbot',
    description: 'Voice-enabled appointment booking system with NLP and 3 integrated speech recognition APIs.',
    technologies: ['Python', 'NLP', 'Flask', 'Speech Recognition'],
    github: null,
    category: 'Healthcare AI',
    tone: 'pink',
    emoji: '🩺',
    impact: '3 speech APIs · contextual conversation management · Mar–May 2024',
  },
  {
    title: 'DevOps Maturity Platform',
    description: 'GPT-powered analysis platform for assessing and improving DevOps maturity. Built at Crest Data.',
    technologies: ['Angular', 'Python', 'GPT APIs', 'DevOps'],
    github: null,
    category: 'Enterprise',
    tone: 'cyan',
    emoji: '📊',
    impact: 'Deployed at Crest Data · 40% UX improvement · 60% faster CI/CD',
  },
  {
    title: 'Netskope AI Plugin',
    description: 'Advanced data processing plugin for Netskope security platform with AI capabilities.',
    technologies: ['Python', 'AI/ML', 'Data Processing', 'Angular'],
    github: null,
    category: 'Enterprise Security',
    tone: 'violet',
    emoji: '🛡️',
    impact: 'Production enterprise deployment at Crest Data',
  },
  {
    title: 'IoT Smart Systems',
    description: 'Edge AI + real-time IoT using Raspberry Pi, Arduino, and MQTT. Academic capstone project.',
    technologies: ['Raspberry Pi', 'Arduino', 'MQTT', 'OpenCV', 'Edge AI'],
    github: 'https://github.com/DarshaK1Just/Face_Reco_Security_Rasp_Pi',
    category: 'IoT',
    tone: 'cyan',
    emoji: '📡',
    impact: 'B.E. Final Year Project · IoT Minor Degree · CGPA 8.22',
    repo: 'Face_Reco_Security_Rasp_Pi',
  },
];

const toneMap = {
  violet: { border: 'rgba(124,58,237,0.5)', glow: 'rgba(124,58,237,0.35)', text: '#C4B5FD' },
  pink:   { border: 'rgba(236,72,153,0.5)', glow: 'rgba(236,72,153,0.35)', text: '#F9A8D4' },
  cyan:   { border: 'rgba(6,182,212,0.5)',  glow: 'rgba(6,182,212,0.35)',  text: '#67E8F9' },
};

type RepoData = { stargazers_count: number; pushed_at: string };

function useRepoStats(repo?: string) {
  const [data, setData] = useState<RepoData | null>(null);
  useEffect(() => {
    if (!repo) return;
    const key = `gh:${repo}`;
    const cached = sessionStorage.getItem(key);
    if (cached) {
      try {
        const { t, d } = JSON.parse(cached);
        if (Date.now() - t < 5 * 60 * 1000) { setData(d); return; }
      } catch {}
    }
    fetch(`https://api.github.com/repos/DarshaK1Just/${repo}`)
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => {
        if (!d) return;
        const slim = { stargazers_count: d.stargazers_count, pushed_at: d.pushed_at };
        setData(slim);
        sessionStorage.setItem(key, JSON.stringify({ t: Date.now(), d: slim }));
      })
      .catch(() => {});
  }, [repo]);
  return data;
}

function PlaceholderArt({ emoji, big = false }: { emoji: string; big?: boolean }) {
  return (
    <div className={`relative overflow-hidden ${big ? 'h-full min-h-[280px]' : 'h-44'} rounded-lg`}
      style={{ background: 'var(--gradient-brand-subtle)' }}>
      <div className="absolute inset-0 flex items-center justify-center text-6xl opacity-50 transition-transform duration-500 group-hover:scale-110">
        {emoji}
      </div>
    </div>
  );
}

function RepoBadges({ repo }: { repo?: string }) {
  const data = useRepoStats(repo);
  if (!repo || !data) return null;
  const date = new Date(data.pushed_at).toLocaleDateString(undefined, { month: 'short', year: 'numeric' });
  return (
    <div className="flex gap-2 text-[10px] font-mono">
      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-surface border border-border text-muted-foreground">
        <Star className="w-3 h-3" /> {data.stargazers_count}
      </span>
      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-surface border border-border text-muted-foreground">
        <Calendar className="w-3 h-3" /> {date}
      </span>
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
          <h2 className="section-title">Work that <span className="text-gradient">ships and scales</span></h2>
        </div>

        {/* Featured */}
        <div className="card-surface group overflow-hidden mb-10 grid md:grid-cols-2 gap-6 p-6 md:p-8 relative transition-all duration-300 hover:-translate-y-1"
          style={{ borderLeft: '4px solid transparent', borderImage: 'linear-gradient(180deg, #7C3AED, #EC4899, #06B6D4) 1' }}>
          <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-4">
              <div className="chip"><Sparkles className="w-3 h-3 mr-1" /> FEATURED</div>
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground font-mono">{featured.category}</div>
            </div>
            <h3 className="font-display font-bold text-2xl md:text-3xl mb-1">{featured.title}</h3>
            <div className="text-sm text-gradient font-medium mb-3">{featured.tagline}</div>
            <p className="text-muted-foreground leading-relaxed mb-5">{featured.description}</p>

            <div className="grid grid-cols-3 gap-3 mb-5 p-4 rounded-lg" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid hsl(var(--border))' }}>
              {featured.metrics.map((m) => (
                <div key={m.label} className="text-center">
                  <div className="font-display font-bold text-lg text-gradient-anim">{m.value}</div>
                  <div className="text-[10px] uppercase tracking-wide text-muted-foreground mt-1">{m.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {featured.technologies.map((t) => <span key={t} className="chip">{t}</span>)}
            </div>
            <div className="flex gap-3 mt-auto items-center">
              <a href={featured.github} target="_blank" rel="noreferrer" className="pill pill-gradient px-5 py-2.5 text-sm">
                <Github className="w-4 h-4" /> Code
              </a>
              {featured.liveDemo && (
                <a href={featured.liveDemo} target="_blank" rel="noreferrer" className="pill pill-outline px-5 py-2.5 text-sm">
                  <ExternalLink className="w-4 h-4" /> Live
                </a>
              )}
              <div className="ml-auto"><RepoBadges repo={featured.repo} /></div>
            </div>
          </div>
          <div className="relative">
            <PlaceholderArt emoji={featured.emoji} big />
          </div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p) => {
            const t = toneMap[p.tone];
            return (
              <div key={p.title} className="card-surface p-5 group transition-all duration-300 hover:-translate-y-1"
                onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = t.border; (e.currentTarget as HTMLDivElement).style.boxShadow = `0 20px 40px -16px ${t.glow}`; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = ''; (e.currentTarget as HTMLDivElement).style.boxShadow = ''; }}>
                <PlaceholderArt emoji={p.emoji} />
                <div className="mt-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-display font-bold text-lg">{p.title}</h3>
                    <span className="chip text-[10px]" style={{ background: 'transparent', color: t.text, borderColor: t.border }}>{p.category}</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">{p.description}</p>
                  <div className="text-xs text-foreground/80 mb-3 font-mono leading-snug">→ {p.impact}</div>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {p.technologies.slice(0, 4).map((tech) => <span key={tech} className="chip text-[10px]">{tech}</span>)}
                  </div>
                  <div className="flex gap-2 items-center">
                    {p.github && (
                      <a href={p.github} target="_blank" rel="noreferrer" className="icon-btn" aria-label="GitHub">
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {p.liveDemo && (
                      <a href={p.liveDemo} target="_blank" rel="noreferrer" className="icon-btn" aria-label="Live demo">
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                    <div className="ml-auto"><RepoBadges repo={p.repo} /></div>
                  </div>
                </div>
              </div>
            );
          })}

          {/* See All card */}
          <a href="https://github.com/DarshaK1Just?tab=repositories" target="_blank" rel="noreferrer"
             className="card-surface p-5 group transition-all duration-300 hover:-translate-y-1 flex flex-col items-center justify-center text-center min-h-[360px] relative overflow-hidden">
            <div className="absolute inset-0 opacity-10"
              style={{ backgroundImage: 'linear-gradient(rgba(124,58,237,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.4) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
            <Github className="w-12 h-12 text-gradient mb-4 relative" />
            <div className="font-display font-bold text-xl mb-2 relative">Explore All Repos</div>
            <div className="text-sm text-muted-foreground mb-4 relative">More projects on GitHub — open source, experiments, and weekend builds.</div>
            <div className="pill pill-gradient px-5 py-2 text-sm relative">
              View GitHub <ArrowRight className="w-4 h-4" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
