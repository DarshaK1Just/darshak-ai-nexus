import { useEffect, useState } from 'react';
import { Menu, X, Terminal } from 'lucide-react';
import { CommandTerminal } from './CommandTerminal';

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#github', label: 'GitHub' },
  { href: '#contact', label: 'Contact' },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('hero');
  const [termOpen, setTermOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
      const sections = ['hero', ...links.map((l) => l.href.slice(1))];
      let cur = 'hero';
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) cur = id;
      }
      setActive(cur);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setTermOpen((v) => !v);
      }
      if (e.key === 'Escape') setTermOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const click = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 h-16 flex items-center"
        style={{
          backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
          background: scrolled ? 'rgba(5,5,16,0.85)' : 'rgba(5,5,16,0.6)',
          borderBottom: scrolled ? '1px solid hsl(var(--border))' : '1px solid transparent',
        }}>
        <nav className="container mx-auto px-6 flex items-center justify-between">
          <a href="#hero" onClick={(e) => { e.preventDefault(); click('#hero'); }} className="relative">
            <div className="w-10 h-10 rounded-full p-[2px] bg-grad-brand">
              <div className="w-full h-full rounded-full bg-background flex items-center justify-center font-display font-bold text-sm">DK</div>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-7">
            {links.map((l) => {
              const isActive = active === l.href.slice(1);
              return (
                <a key={l.href} href={l.href} onClick={(e) => { e.preventDefault(); click(l.href); }}
                  className="text-sm relative pb-1"
                  style={{ color: isActive ? 'hsl(var(--foreground))' : 'hsl(var(--muted-foreground))' }}>
                  {l.label}
                  {isActive && <span className="absolute left-0 right-0 -bottom-0.5 h-0.5 rounded bg-grad-line" />}
                </a>
              );
            })}
            <button onClick={() => setTermOpen(true)} aria-label="Open terminal (Ctrl+K)"
              className="icon-btn w-9 h-9" title="Terminal (Ctrl+K)">
              <Terminal className="w-4 h-4" />
            </button>
            <a href="#contact" onClick={(e) => { e.preventDefault(); click('#contact'); }}
              className="pill pill-gradient px-5 py-2 text-sm">Hire Me</a>
          </div>

          <button className="md:hidden icon-btn" onClick={() => setOpen(true)} aria-label="Open menu">
            <Menu className="w-5 h-5" />
          </button>
        </nav>
      </header>

      {open && (
        <div className="fixed inset-0 z-[60] bg-background/95 backdrop-blur-xl flex flex-col">
          <div className="h-16 flex items-center justify-between container mx-auto px-6">
            <div className="w-10 h-10 rounded-full p-[2px] bg-grad-brand">
              <div className="w-full h-full rounded-full bg-background flex items-center justify-center font-display font-bold text-sm">DK</div>
            </div>
            <button className="icon-btn" onClick={() => setOpen(false)} aria-label="Close menu">
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center gap-6">
            {links.map((l) => (
              <button key={l.href} onClick={() => click(l.href)}
                className="text-3xl font-display font-semibold hover:text-gradient">
                {l.label}
              </button>
            ))}
            <button onClick={() => click('#contact')} className="pill pill-gradient px-8 py-3 mt-4">Hire Me</button>
          </div>
        </div>
      )}

      <CommandTerminal open={termOpen} onClose={() => setTermOpen(false)} />
    </>
  );
}
