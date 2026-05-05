import { useReveal, useInViewOnce } from '@/hooks/use-reveal';
import { useEffect, useState } from 'react';

const groups = [
  {
    key: 'ai',
    title: 'AI / ML',
    desc: 'LLM agents, RAG, NLP, multi-agent orchestration',
    skills: ['LangChain', 'LangGraph', 'AutoGen', 'RAG', 'NLP', 'TensorFlow', 'PyTorch', 'OpenAI'],
    span: 'lg:col-span-2 lg:row-span-2',
    tint: 'rgba(99,102,241,0.08)',
  },
  {
    key: 'fs',
    title: 'Full Stack',
    desc: 'Modern web with type-safe APIs',
    skills: ['React', 'Angular', 'Next.js', 'Node.js', 'Express', 'FastAPI', 'Flask', 'TypeScript'],
    span: 'lg:col-span-2',
  },
  {
    key: 'iot',
    title: 'IoT',
    desc: 'Edge devices & sensors',
    skills: ['Raspberry Pi', 'Arduino', 'MQTT', 'OpenCV'],
    span: '',
  },
  {
    key: 'cloud',
    title: 'Cloud',
    desc: 'Deploy & scale',
    skills: ['AWS', 'Docker', 'Redis', 'CI/CD'],
    span: '',
  },
  {
    key: 'lang',
    title: 'Languages',
    desc: 'Day-to-day arsenal',
    skills: ['Python', 'C/C++', 'Java', 'Golang', 'JavaScript', 'SQL'],
    span: 'lg:col-span-2',
  },
];

const topSkills = [
  { name: 'AI/ML', value: 92 },
  { name: 'Full Stack', value: 90 },
  { name: 'Cloud', value: 82 },
  { name: 'IoT', value: 80 },
];

function Ring({ value, label, idx }: { value: number; label: string; idx: number }) {
  const { ref, inView } = useInViewOnce<HTMLDivElement>();
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const t0 = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - t0) / 1200);
      setV(value * (1 - Math.pow(1 - p, 3)));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  const r = 36;
  const c = 2 * Math.PI * r;
  const offset = c - (v / 100) * c;

  return (
    <div ref={ref} className="card-surface p-5 flex items-center gap-4" style={{ transitionDelay: `${idx * 80}ms` }}>
      <div className="relative w-20 h-20">
        <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
          <defs>
            <linearGradient id={`g-${idx}`} x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="#6366F1" />
              <stop offset="50%" stopColor="#A78BFA" />
              <stop offset="100%" stopColor="#EC4899" />
            </linearGradient>
          </defs>
          <circle cx="50" cy="50" r={r} stroke="hsl(var(--border))" strokeWidth="8" fill="none" />
          <circle
            cx="50"
            cy="50"
            r={r}
            stroke={`url(#g-${idx})`}
            strokeWidth="8"
            strokeLinecap="round"
            fill="none"
            strokeDasharray={c}
            strokeDashoffset={offset}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center font-display font-bold text-sm">
          {Math.round(v)}%
        </div>
      </div>
      <div>
        <div className="font-display font-semibold">{label}</div>
        <div className="text-xs text-muted-foreground">Proficiency</div>
      </div>
    </div>
  );
}

export function SkillsSection() {
  const ref = useReveal<HTMLElement>();
  return (
    <section ref={ref} id="skills" className="section reveal">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="section-eyebrow justify-center">Skills</div>
          <h2 className="section-title">A <span className="text-gradient">full-stack</span> toolkit</h2>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 auto-rows-[180px] mb-12">
          {groups.map((g) => (
            <div
              key={g.key}
              className={`card-surface p-6 flex flex-col ${g.span}`}
              style={{ background: g.tint ? `linear-gradient(135deg, ${g.tint}, transparent), hsl(var(--surface))` : undefined }}
            >
              <div className="font-display font-bold text-xl mb-1">{g.title}</div>
              <div className="text-xs text-muted-foreground mb-4">{g.desc}</div>
              <div className="flex flex-wrap gap-2 mt-auto">
                {g.skills.map((s) => (
                  <span key={s} className="chip">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Top 4 proficiency rings */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {topSkills.map((s, i) => <Ring key={s.name} value={s.value} label={s.name} idx={i} />)}
        </div>
      </div>
    </section>
  );
}
