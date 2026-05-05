import { useReveal, useCountUp, useInViewOnce } from '@/hooks/use-reveal';

const stats = [
  { num: 2, suffix: '+', label: 'Years Experience', sub: 'Building AI & full-stack' },
  { num: 15, suffix: '+', label: 'Projects Completed', sub: 'AI/ML, IoT & web', big: true },
  { num: 5, suffix: '+', label: 'Tech Awards', sub: 'Hackathons & contests' },
];

function StatCard({ s, idx }: { s: typeof stats[0]; idx: number }) {
  const { ref, inView } = useInViewOnce<HTMLDivElement>();
  const v = useCountUp(s.num, inView);
  return (
    <div
      ref={ref}
      className={`card-surface p-6 ${s.big ? 'md:col-span-2 md:row-span-2 p-8' : ''}`}
      style={{ transitionDelay: `${idx * 80}ms` }}
    >
      <div className={`font-display font-bold text-gradient ${s.big ? 'text-6xl md:text-7xl' : 'text-5xl'}`}>
        {v}{s.suffix}
      </div>
      <div className="mt-3 font-display font-semibold">{s.label}</div>
      <div className="text-sm text-muted-foreground mt-1">{s.sub}</div>
    </div>
  );
}

export function AboutSection() {
  const ref = useReveal<HTMLElement>();
  return (
    <section ref={ref} id="about" className="section reveal">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-start">
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
              <div className="font-display font-semibold">CrestData Systems · AI/ML Engineer</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 md:gap-5 auto-rows-[160px]">
          {stats.map((s, i) => <StatCard key={s.label} s={s} idx={i} />)}
        </div>
      </div>
    </section>
  );
}
