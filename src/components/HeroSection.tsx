import { Github, Linkedin, Youtube, ArrowRight, Download } from 'lucide-react';
import { Constellation } from './Constellation';
import { Typewriter } from './Typewriter';

const socials = [
  { name: 'GitHub', url: 'https://github.com/DarshaK1Just', icon: Github },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/darshak-kakani-31277a1bb/', icon: Linkedin },
  { name: 'YouTube', url: 'https://www.youtube.com/channel/UCUy35Eo8jIpBYnEovea6Vow', icon: Youtube },
];

export function HeroSection() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Ambient orbs */}
      <div
        className="absolute top-20 -left-20 w-[300px] h-[300px] rounded-full pointer-events-none animate-drift"
        style={{ background: 'radial-gradient(circle, hsl(var(--indigo)) 0%, transparent 70%)', opacity: 0.12, filter: 'blur(60px)' }}
      />
      <div
        className="absolute bottom-10 right-10 w-[300px] h-[300px] rounded-full pointer-events-none animate-drift2"
        style={{ background: 'radial-gradient(circle, hsl(var(--pink)) 0%, transparent 70%)', opacity: 0.12, filter: 'blur(60px)' }}
      />

      <div className="container mx-auto px-6 grid lg:grid-cols-5 gap-12 items-center relative z-10">
        {/* Left 60% */}
        <div className="lg:col-span-3 space-y-7">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium border border-border bg-surface/60"
            style={{ animationDelay: '0ms' }}
          >
            <span className="relative flex w-2 h-2">
              <span className="absolute inset-0 rounded-full bg-green-brand animate-pulse-dot" />
              <span className="rounded-full w-2 h-2 bg-green-brand" />
            </span>
            <span className="text-muted-foreground">Available for Work</span>
          </div>

          <h1 className="font-display font-bold leading-[1.05] text-[44px] md:text-[56px] lg:text-[68px]">
            I'm Darshak Kakani
          </h1>

          <div className="text-2xl md:text-3xl font-display font-medium text-muted-foreground">
            I build{' '}
            <Typewriter
              texts={['AI Systems', 'ML Models', 'Full-Stack Apps', 'IoT Solutions']}
              className="text-gradient font-semibold"
            />
          </div>

          <p className="text-base text-muted-foreground max-w-xl leading-relaxed">
            AI/ML Engineer & Full Stack Developer at Crest Data. I design intelligent
            systems, ship production AI, and build delightful end-to-end products.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <button
              onClick={() => scrollTo('projects')}
              className="pill pill-gradient px-6 py-3 text-sm"
            >
              View My Work <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="https://drive.google.com/file/d/1Eg3AR9W0nHFGYcD-VlnrELaVTZwAJhEt/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="pill pill-outline px-6 py-3 text-sm"
            >
              Download CV <Download className="w-4 h-4" />
            </a>
          </div>

          <div className="flex gap-3 pt-2">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name}
                className="icon-btn"
              >
                <s.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Right 40% */}
        <div className="lg:col-span-2 relative h-[420px] md:h-[500px]">
          <Constellation />
        </div>
      </div>

      {/* Scroll arrow */}
      <button
        onClick={() => scrollTo('about')}
        aria-label="Scroll down"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-foreground"
      >
        <div className="animate-bounce-down flex flex-col items-center gap-1">
          <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center">
            <span className="w-1 h-2 bg-current rounded-full mt-2" />
          </div>
        </div>
      </button>
    </section>
  );
}
