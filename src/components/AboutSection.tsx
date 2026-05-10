import { useReveal, useCountUp, useInViewOnce } from '@/hooks/use-reveal';

type Tone = { from: string; to: string; ring: string; glow: string };

const tones: Record<string, Tone> = {
  indigo: { from: '#6366F1', to: '#A78BFA', ring: 'rgba(99,102,241,0.55)', glow: 'rgba(99,102,241,0.55)' },
  pink:   { from: '#A78BFA', to: '#EC4899', ring: 'rgba(236,72,153,0.55)', glow: 'rgba(236,72,153,0.55)' },
  cyan:   { from: '#22D3EE', to: '#6366F1', ring: 'rgba(34,211,238,0.55)',  glow: 'rgba(34,211,238,0.55)' },
};

const stats = [
  { num: 2,  suffix: '+', label: 'Years Experience',   tone: 'indigo' as const, delay: 0 },
  { num: 15, suffix: '+', label: 'Projects Completed', tone: 'pink'   as const, delay: 0.6 },
  { num: 5,  suffix: '+', label: 'Tech Awards',        tone: 'cyan'   as const, delay: 1.2 },
];

function StatOrb({ s, idx }: { s: typeof stats[0]; idx: number }) {
  const { ref, inView } = useInViewOnce<HTMLDivElement>();
  const v = useCountUp(s.num, inView);
  const t = tones[s.tone];

  // Orbiting "sprinkler" particles
  const particles = [0, 1, 2, 3];

  return (
    <div
      ref={ref}
      className="relative flex items-center justify-center group"
      style={{ animation: `float-y-lg ${6 + idx}s ease-in-out infinite`, animationDelay: `${s.delay}s` }}
    >
      {/* Outer rotating ring */}
      <div
        className="absolute w-[200px] h-[200px] rounded-full animate-spin-slow pointer-events-none"
        style={{
          background: `conic-gradient(from 0deg, ${t.from}, ${t.to}, transparent 55%, ${t.from})`,
          maskImage: 'radial-gradient(circle, transparent 62%, black 64%, black 66%, transparent 68%)',
          WebkitMaskImage: 'radial-gradient(circle, transparent 62%, black 64%, black 66%, transparent 68%)',
        }}
      />
      {/* Inner reverse ring */}
      <div
        className="absolute w-[164px] h-[164px] rounded-full animate-spin-rev pointer-events-none"
        style={{
          background: `conic-gradient(from 180deg, transparent 60%, ${t.to}, transparent 95%)`,
          maskImage: 'radial-gradient(circle, transparent 74%, black 76%, black 78%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(circle, transparent 74%, black 76%, black 78%, transparent 80%)',
        }}
      />

      {/* Orbit particles (sprinkler) */}
      <div
        className="absolute w-[210px] h-[210px] pointer-events-none animate-spin-slow"
        style={{ animationDuration: `${10 + idx * 2}s` }}
      >
        {particles.map((p) => {
          const angle = (p / particles.length) * Math.PI * 2;
          const x = Math.cos(angle) * 100;
          const y = Math.sin(angle) * 100;
          const colors = [t.from, t.to, '#EC4899', '#22D3EE'];
          return (
            <span
              key={p}
              className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full"
              style={{
                transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                background: colors[p % colors.length],
                boxShadow: `0 0 10px ${colors[p % colors.length]}, 0 0 20px ${colors[p % colors.length]}`,
              }}
            />
          );
        })}
      </div>

      {/* Glowing core button */}
      <div
        className="relative w-[140px] h-[140px] rounded-full flex flex-col items-center justify-center transition-transform duration-300 group-hover:scale-105"
        style={{
          background: `radial-gradient(circle at 30% 30%, ${t.from}40, ${t.to}20 50%, hsl(var(--surface)) 75%)`,
          border: `1px solid ${t.ring}`,
          boxShadow: `inset 0 0 30px ${t.glow}, 0 10px 40px -10px ${t.glow}`,
        }}
      >
        <div
          className="absolute inset-0 rounded-full opacity-60 animate-orb-pulse"
          style={{ boxShadow: `0 0 0 0 ${t.glow}` }}
        />
        <div
          className="font-display font-bold text-[34px] leading-none"
          style={{
            background: `linear-gradient(135deg, ${t.from}, ${t.to})`,
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          {v}{s.suffix}
        </div>
        <div className="mt-1.5 text-[11px] text-muted-foreground tracking-wide uppercase font-medium">{s.label}</div>
      </div>
    </div>
  );
}

export function AboutSection() {
  const ref = useReveal<HTMLElement>();
  return (
    <section ref={ref} id="about" className="section reveal">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="section-eyebrow">
            <span className="w-6 h-px bg-gradient-to-r from-indigo-brand to-violet-brand" />
            About
          </div>
          <h2 className="section-title">Crafting <span className="text-gradient">intelligent</span> products</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Passionate AI/ML Engineer and Full Stack Developer with expertise in building
            intelligent systems and scalable applications. I work on cutting-edge AI solutions
            and innovative technologies that shape how products think and act.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            I love turning hard problems into shipped products — from LLM agents and RAG
            pipelines to real-time IoT systems and pixel-perfect UIs.
          </p>

          <div className="card-surface p-5 inline-flex items-center gap-4">
            <span className="relative flex w-2.5 h-2.5">
              <span className="absolute inset-0 rounded-full bg-green-brand animate-pulse-dot" />
              <span className="rounded-full w-2.5 h-2.5 bg-green-brand" />
            </span>
            <div>
              <div className="text-xs text-muted-foreground">Currently at</div>
              <div className="font-display font-semibold">Crest Data · AI/ML Engineer</div>
            </div>
          </div>
        </div>

        {/* Right: vertical stack of animated orb stats */}
        <div className="flex flex-col items-center gap-8 py-6">
          {stats.map((s, i) => <StatOrb key={s.label} s={s} idx={i} />)}
        </div>
      </div>
    </section>
  );
}
