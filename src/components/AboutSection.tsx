import { useReveal, useCountUp, useInViewOnce } from '@/hooks/use-reveal';
import { MapPin } from 'lucide-react';

type Tone = { from: string; to: string; ring: string; glow: string };

const tones: Record<string, Tone> = {
  indigo: { from: '#7C3AED', to: '#A78BFA', ring: 'rgba(124,58,237,0.55)', glow: 'rgba(124,58,237,0.55)' },
  pink:   { from: '#A78BFA', to: '#EC4899', ring: 'rgba(236,72,153,0.55)', glow: 'rgba(236,72,153,0.55)' },
  cyan:   { from: '#06B6D4', to: '#7C3AED', ring: 'rgba(6,182,212,0.55)',  glow: 'rgba(6,182,212,0.55)' },
  green:  { from: '#10B981', to: '#06B6D4', ring: 'rgba(16,185,129,0.55)', glow: 'rgba(16,185,129,0.55)' },
};

const stats = [
  { num: 2,  suffix: '+', label: 'Years Experience',     tone: 'indigo' as const, delay: 0 },
  { num: 15, suffix: '+', label: 'Projects Completed',   tone: 'pink'   as const, delay: 0.4 },
  { num: 5,  suffix: '+', label: 'Tech Awards',          tone: 'cyan'   as const, delay: 0.8 },
  { num: 100, suffix: 'K+', label: 'Lines of Prod Code', tone: 'green'  as const, delay: 1.2 },
];

const timeline = [
  { year: '2020', text: 'Started B.E. IT @ GCET — CGPA 8.97' },
  { year: '2022', text: 'Added IoT Minor — embedded systems, edge AI' },
  { year: '2023', text: 'Joined Crest Data as Software Engineer' },
  { year: '2024', text: 'Built production AI: LLM agents, RAG pipelines, DevOps AI' },
  { year: '2025+', text: 'Building at the frontier — open to the right team' },
];

function StatOrb({ s, idx }: { s: typeof stats[0]; idx: number }) {
  const { ref, inView } = useInViewOnce<HTMLDivElement>();
  const v = useCountUp(s.num, inView);
  const t = tones[s.tone];
  const particles = [0, 1, 2, 3];

  return (
    <div ref={ref} className="relative flex items-center justify-center group"
      style={{ animation: `float-y-lg ${6 + idx}s ease-in-out infinite`, animationDelay: `${s.delay}s` }}>
      <div className="absolute w-[160px] h-[160px] rounded-full animate-spin-slow pointer-events-none"
        style={{
          background: `conic-gradient(from 0deg, ${t.from}, ${t.to}, transparent 55%, ${t.from})`,
          maskImage: 'radial-gradient(circle, transparent 62%, black 64%, black 66%, transparent 68%)',
          WebkitMaskImage: 'radial-gradient(circle, transparent 62%, black 64%, black 66%, transparent 68%)',
        }} />
      <div className="absolute w-[170px] h-[170px] pointer-events-none animate-spin-slow"
        style={{ animationDuration: `${10 + idx * 2}s` }}>
        {particles.map((p) => {
          const angle = (p / particles.length) * Math.PI * 2;
          const x = Math.cos(angle) * 80;
          const y = Math.sin(angle) * 80;
          const colors = [t.from, t.to, '#EC4899', '#06B6D4'];
          return (
            <span key={p} className="absolute top-1/2 left-1/2 w-1.5 h-1.5 rounded-full"
              style={{
                transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                background: colors[p % colors.length],
                boxShadow: `0 0 10px ${colors[p % colors.length]}`,
              }} />
          );
        })}
      </div>
      <div className="relative w-[112px] h-[112px] rounded-full flex flex-col items-center justify-center transition-transform duration-300 group-hover:scale-105"
        style={{
          background: `radial-gradient(circle at 30% 30%, ${t.from}40, ${t.to}20 50%, hsl(var(--surface)) 75%)`,
          border: `1px solid ${t.ring}`,
          boxShadow: `inset 0 0 30px ${t.glow}, 0 10px 40px -10px ${t.glow}`,
        }}>
        <div className="font-display font-bold text-[26px] leading-none"
          style={{ background: `linear-gradient(135deg, ${t.from}, ${t.to})`, WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          {v}{s.suffix}
        </div>
        <div className="mt-1 text-[9px] text-muted-foreground tracking-wide uppercase font-medium text-center px-2 leading-tight">{s.label}</div>
      </div>
    </div>
  );
}

export function AboutSection() {
  const ref = useReveal<HTMLElement>();
  return (
    <section ref={ref} id="about" className="section reveal">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <div className="section-eyebrow justify-center">About</div>
          <h2 className="section-title">Crafting systems that <span className="text-gradient">think intelligently</span></h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          {/* Timeline */}
          <div className="card-surface p-6 md:p-8 relative">
            <div className="text-xs uppercase tracking-widest text-muted-foreground mb-6 font-mono">// the journey</div>
            <ol className="relative space-y-6">
              <span className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-indigo-brand via-violet-brand to-pink-brand opacity-60" />
              {timeline.map((t, i) => (
                <li key={i} className="relative pl-8 group">
                  <span className="absolute left-0 top-1.5 w-4 h-4 rounded-full border-2 transition-all duration-300 group-hover:scale-125"
                    style={{ borderColor: 'hsl(var(--indigo))', background: 'hsl(var(--background))', boxShadow: '0 0 12px hsl(var(--indigo) / 0.6)' }}>
                    <span className="absolute inset-1 rounded-full bg-grad-brand" />
                  </span>
                  <div className="font-mono text-xs text-gradient font-semibold mb-1">{t.year}</div>
                  <div className="text-sm text-foreground/90 leading-relaxed">{t.text}</div>
                </li>
              ))}
            </ol>
          </div>

          {/* Right column: bio + orbs */}
          <div className="space-y-8">
            <p className="text-muted-foreground leading-relaxed">
              Passionate AI/ML Engineer and Full Stack Developer with expertise in building intelligent systems
              and scalable applications. I work on cutting-edge AI solutions and innovative technologies that
              shape how products think and act.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I love turning hard problems into shipped products — from LLM agents and RAG pipelines to
              real-time IoT systems and pixel-perfect UIs.
            </p>

            <div className="grid grid-cols-2 gap-4 py-2">
              {stats.map((s, i) => <StatOrb key={s.label} s={s} idx={i} />)}
            </div>

            <div className="card-surface p-4 inline-flex items-center gap-4">
              <span className="relative flex w-2.5 h-2.5">
                <span className="absolute inset-0 rounded-full bg-green-brand animate-pulse-dot" />
                <span className="rounded-full w-2.5 h-2.5 bg-green-brand" />
              </span>
              <div>
                <div className="text-xs text-muted-foreground">Currently at</div>
                <div className="font-display font-semibold">Crest Data · AI/ML Engineer</div>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 text-xs text-muted-foreground">
              <MapPin className="w-3.5 h-3.5" />
              Based in Ahmedabad · Available for remote/hybrid/relocation
            </div>
          </div>
        </div>

        {/* Philosophy pull quote */}
        <div className="max-w-4xl mx-auto mt-20 pl-6 md:pl-8" style={{ borderLeft: '3px solid hsl(var(--indigo))' }}>
          <p className="font-display italic text-2xl md:text-3xl lg:text-4xl leading-tight">
            "I don't just write code. I engineer systems that <span className="text-gradient">think</span> — and I ship them."
          </p>
          <div className="text-sm text-muted-foreground mt-4 font-mono">— Darshak Kakani</div>
        </div>
      </div>
    </section>
  );
}
