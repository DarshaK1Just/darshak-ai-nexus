import { useReveal, useInViewOnce } from '@/hooks/use-reveal';
import { useEffect, useState } from 'react';
import { Brain, Code2, Cpu, Cloud, Terminal } from 'lucide-react';

type Tone = 'violet' | 'blue' | 'cyan' | 'indigo' | 'pink';

const groups: { key: string; title: string; icon: any; tone: Tone; cols: string; skills: string[] }[] = [
  { key: 'ai', title: 'AI / ML', icon: Brain, tone: 'violet', cols: 'grid-cols-3',
    skills: ['LangChain', 'LangGraph', 'AutoGen', 'RAG', 'NLP', 'TensorFlow', 'PyTorch', 'OpenAI', 'Transformers'] },
  { key: 'fs', title: 'Full Stack', icon: Code2, tone: 'blue', cols: 'grid-cols-3',
    skills: ['React', 'Angular', 'Next.js', 'Node.js', 'Express', 'FastAPI', 'Flask', 'TypeScript', 'REST'] },
  { key: 'iot', title: 'IoT', icon: Cpu, tone: 'cyan', cols: 'grid-cols-2',
    skills: ['Raspberry Pi', 'Arduino', 'MQTT', 'OpenCV'] },
  { key: 'cloud', title: 'Cloud', icon: Cloud, tone: 'indigo', cols: 'grid-cols-2',
    skills: ['AWS', 'Azure', 'Docker', 'Redis'] },
  { key: 'lang', title: 'Languages', icon: Terminal, tone: 'pink', cols: 'grid-cols-3',
    skills: ['Python', 'C/C++', 'Java', 'Golang', 'JavaScript', 'SQL'] },
];

const toneStyles: Record<Tone, { bg: string; border: string; text: string; glow: string; icon: string }> = {
  violet: { bg: 'rgba(167,139,250,0.10)', border: 'rgba(167,139,250,0.30)', text: '#C4B5FD', glow: 'rgba(167,139,250,0.45)', icon: '#A78BFA' },
  blue:   { bg: 'rgba(236,72,153,0.10)',  border: 'rgba(236,72,153,0.30)',  text: '#F9A8D4', glow: 'rgba(236,72,153,0.45)',  icon: '#EC4899' },
  cyan:   { bg: 'rgba(6,182,212,0.10)',   border: 'rgba(6,182,212,0.30)',   text: '#67E8F9', glow: 'rgba(6,182,212,0.45)',   icon: '#22D3EE' },
  indigo: { bg: 'rgba(124,58,237,0.10)',  border: 'rgba(124,58,237,0.30)',  text: '#C4B5FD', glow: 'rgba(124,58,237,0.45)',  icon: '#7C3AED' },
  pink:   { bg: 'rgba(236,72,153,0.10)',  border: 'rgba(236,72,153,0.30)',  text: '#F9A8D4', glow: 'rgba(236,72,153,0.45)',  icon: '#F472B6' },
};

function TechTag({ label, tone }: { label: string; tone: Tone }) {
  const t = toneStyles[tone];
  return (
    <span className="inline-flex items-center justify-center px-2.5 py-1 rounded-md text-xs font-medium transition-all duration-200 cursor-default"
      style={{ background: t.bg, border: `1px solid ${t.border}`, color: t.text }}
      onMouseEnter={(e) => { (e.currentTarget as HTMLSpanElement).style.boxShadow = `0 0 14px ${t.glow}`; (e.currentTarget as HTMLSpanElement).style.transform = 'translateY(-1px)'; }}
      onMouseLeave={(e) => { (e.currentTarget as HTMLSpanElement).style.boxShadow = ''; (e.currentTarget as HTMLSpanElement).style.transform = ''; }}>
      {label}
    </span>
  );
}

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
    <div ref={ref} className="card-surface p-4 flex items-center gap-3" style={{ transitionDelay: `${idx * 80}ms` }}>
      <div className="relative w-16 h-16 shrink-0">
        <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
          <defs>
            <linearGradient id={`g-${idx}`} x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="#7C3AED" />
              <stop offset="50%" stopColor="#EC4899" />
              <stop offset="100%" stopColor="#06B6D4" />
            </linearGradient>
          </defs>
          <circle cx="50" cy="50" r={r} stroke="hsl(var(--border))" strokeWidth="8" fill="none" />
          <circle cx="50" cy="50" r={r} stroke={`url(#g-${idx})`} strokeWidth="8" strokeLinecap="round" fill="none" strokeDasharray={c} strokeDashoffset={offset} />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center font-display font-bold text-xs">{Math.round(v)}%</div>
      </div>
      <div>
        <div className="font-display font-semibold text-sm">{label}</div>
        <div className="text-[11px] text-muted-foreground">Proficiency</div>
      </div>
    </div>
  );
}

const ticker = [
  'FastAPI', 'LangChain', 'LangGraph', 'OpenAI', 'Azure AI Search', 'Docker', 'Redis',
  'Playwright', 'TypeScript', 'PostgreSQL', 'n8n', 'Retell AI', 'GoHighLevel', 'MQTT', 'Raspberry Pi',
];

export function SkillsSection() {
  const ref = useReveal<HTMLElement>();
  return (
    <section ref={ref} id="skills" className="section reveal">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <div className="section-eyebrow justify-center">Skills</div>
          <h2 className="section-title">A <span className="text-gradient">full-stack</span> arsenal</h2>
        </div>

        {/* Tools ticker — moved to top */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="text-xs uppercase tracking-widest text-muted-foreground mb-3 font-mono text-center">// tools i swear by</div>
          <div className="relative overflow-hidden card-surface py-4"
            style={{ maskImage: 'linear-gradient(90deg, transparent, black 10%, black 90%, transparent)', WebkitMaskImage: 'linear-gradient(90deg, transparent, black 10%, black 90%, transparent)' }}>
            <div className="flex gap-8 animate-ticker whitespace-nowrap" style={{ width: 'max-content' }}>
              {[...ticker, ...ticker].map((t, i) => (
                <span key={i} className="font-mono text-sm text-muted-foreground hover:text-gradient transition-colors">
                  {t} <span className="text-indigo-brand mx-2">·</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-8 max-w-6xl mx-auto">
          {groups.map((g) => {
            const t = toneStyles[g.tone];
            const Icon = g.icon;
            return (
              <div key={g.key} className="rounded-xl p-5 transition-all duration-300 hover:-translate-y-0.5 card-surface"
                onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = t.border; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = ''; }}>
                <div className="flex items-center gap-2.5 mb-4">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-md"
                    style={{ background: t.bg, border: `1px solid ${t.border}`, color: t.icon }}>
                    <Icon className="w-4 h-4" />
                  </span>
                  <div className="font-display font-semibold text-base">{g.title}</div>
                </div>
                <div className={`grid ${g.cols} gap-2`}>
                  {g.skills.map((s) => <TechTag key={s} label={s} tone={g.tone} />)}
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 max-w-6xl mx-auto">
          {topSkills.map((s, i) => <Ring key={s.name} value={s.value} label={s.name} idx={i} />)}
        </div>
      </div>
    </section>

  );
}
