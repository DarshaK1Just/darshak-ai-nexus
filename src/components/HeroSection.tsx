import { Github, Linkedin, Youtube, ArrowRight, Download, MapPin } from 'lucide-react';
import { Constellation } from './Constellation';
import { Typewriter } from './Typewriter';
import { useInViewOnce, useCountUp } from '@/hooks/use-reveal';

const socials = [
  { name: 'GitHub', url: 'https://github.com/DarshaK1Just', icon: Github },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/darshak-kakani-31277a1bb/', icon: Linkedin },
  { name: 'YouTube', url: 'https://www.youtube.com/channel/UCUy35Eo8jIpBYnEovea6Vow', icon: Youtube },
];

const heroStats = [
  { num: 2, suffix: '+', label: 'Years at Prod Scale' },
  { num: 15, suffix: '+', label: 'Projects Shipped' },
  { num: 95, suffix: '%', label: 'AI Accuracy Achieved' },
];

function HeroStat({ s }: { s: typeof heroStats[0] }) {
  const { ref, inView } = useInViewOnce<HTMLDivElement>();
  const v = useCountUp(s.num, inView, 1600);
  return (
    <div ref={ref}>
      <div className="font-display font-bold text-3xl md:text-4xl text-gradient-anim leading-none">
        {v}{s.suffix}
      </div>
      <div className="text-[11px] text-muted-foreground tracking-wide uppercase mt-1.5">{s.label}</div>
    </div>
  );
}

export function HeroSection() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
      <div className="absolute inset-0 grid-bg pointer-events-none" />

      <div className="absolute top-10 -left-24 w-[420px] h-[420px] rounded-full pointer-events-none animate-aurora"
        style={{ background: 'radial-gradient(circle, hsl(var(--indigo)) 0%, transparent 65%)', filter: 'blur(70px)' }} />
      <div className="absolute bottom-0 right-0 w-[420px] h-[420px] rounded-full pointer-events-none animate-aurora"
        style={{ background: 'radial-gradient(circle, hsl(var(--pink)) 0%, transparent 65%)', filter: 'blur(70px)', animationDelay: '4s' }} />
      <div className="absolute top-1/3 left-1/2 w-[360px] h-[360px] rounded-full pointer-events-none animate-aurora"
        style={{ background: 'radial-gradient(circle, hsl(var(--cyan)) 0%, transparent 65%)', filter: 'blur(80px)', opacity: 0.4, animationDelay: '8s' }} />

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center relative z-10">
        <div className="space-y-7">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium border bg-surface/60 backdrop-blur animate-pulse-violet"
            style={{ borderColor: 'hsl(var(--indigo) / 0.5)' }}>
            <span className="text-base leading-none">⚡</span>
            <span className="text-foreground">Open to Work</span>
            <span className="text-muted-foreground">·</span>
            <MapPin className="w-3 h-3 text-muted-foreground" />
            <span className="text-muted-foreground">Ahmedabad, India</span>
          </div>

          <h1 className="font-display font-bold leading-[1.02] text-[44px] md:text-[60px] lg:text-[72px]">
            I build AI that<br />
            <Typewriter
              texts={['thinks.', 'ships.', 'scales.', 'wins.']}
              className="text-gradient-anim"
            />
          </h1>

          <p className="text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed">
            AI/ML Engineer & Full Stack Developer at <span className="text-foreground font-medium">Crest Data</span>. I architect production-grade LLM systems, agentic pipelines, and full-stack products — then ship them.
          </p>

          <div className="grid grid-cols-3 gap-4 max-w-md pt-2">
            {heroStats.map((s) => <HeroStat key={s.label} s={s} />)}
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <button onClick={() => scrollTo('projects')} className="pill pill-gradient px-6 py-3 text-sm">
              View My Work <ArrowRight className="w-4 h-4" />
            </button>
            <a href="https://drive.google.com/file/d/1Eg3AR9W0nHFGYcD-VlnrELaVTZwAJhEt/view?usp=drive_link"
              target="_blank" rel="noopener noreferrer" className="pill pill-outline px-6 py-3 text-sm">
              Download Resume <Download className="w-4 h-4" />
            </a>
            <a href="https://github.com/DarshaK1Just" target="_blank" rel="noopener noreferrer"
               aria-label="GitHub" className="icon-btn w-12 h-12">
              <Github className="w-5 h-5" />
            </a>
          </div>

          <div className="flex gap-3 pt-2">
            {socials.map((s) => (
              <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" aria-label={s.name} className="icon-btn">
                <s.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="relative h-[440px] md:h-[540px] flex items-center justify-center">
          <div className="absolute top-1/2 left-1/2 w-[360px] h-[360px] rounded-full pointer-events-none"
            style={{
              transform: 'translate(-50%, -50%)',
              background: 'conic-gradient(from 0deg, hsl(var(--indigo) / 0.6), hsl(var(--pink) / 0.5), hsl(var(--cyan) / 0.5), transparent 60%, hsl(var(--indigo) / 0.6))',
              maskImage: 'radial-gradient(circle, transparent 58%, black 60%, black 62%, transparent 64%)',
              WebkitMaskImage: 'radial-gradient(circle, transparent 58%, black 60%, black 62%, transparent 64%)',
              animation: 'spin-slow 22s linear infinite',
            }} />
          <div className="absolute top-1/2 left-1/2 w-[280px] h-[280px] rounded-full pointer-events-none"
            style={{
              transform: 'translate(-50%, -50%)',
              background: 'conic-gradient(from 180deg, hsl(var(--pink) / 0.5), transparent 40%, hsl(var(--cyan) / 0.5), transparent 80%)',
              maskImage: 'radial-gradient(circle, transparent 70%, black 72%, black 74%, transparent 76%)',
              WebkitMaskImage: 'radial-gradient(circle, transparent 70%, black 72%, black 74%, transparent 76%)',
              animation: 'spin-rev 28s linear infinite',
            }} />
          <div className="absolute inset-0">
            <Constellation />
          </div>
        </div>
      </div>

      <button onClick={() => scrollTo('about')} aria-label="Scroll down"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-foreground">
        <div className="animate-bounce-down flex flex-col items-center gap-1">
          <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center">
            <span className="w-1 h-2 bg-current rounded-full mt-2" />
          </div>
        </div>
      </button>
    </section>
  );
}
