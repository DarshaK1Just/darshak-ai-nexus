import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const click = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header
        className="fixed top-0 inset-x-0 z-50 h-16 flex items-center"
        style={{
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          background: scrolled ? 'rgba(8,11,20,0.85)' : 'rgba(8,11,20,0.6)',
          borderBottom: scrolled ? '1px solid hsl(var(--border))' : '1px solid transparent',
        }}
      >
        <nav className="container mx-auto px-6 flex items-center justify-between">
          {/* Monogram */}
          <a href="#hero" onClick={(e) => { e.preventDefault(); click('#hero'); }} className="relative">
            <div className="w-10 h-10 rounded-full p-[2px] bg-grad-brand">
              <div className="w-full h-full rounded-full bg-surface flex items-center justify-center font-display font-bold text-sm">
                DK
              </div>
            </div>
          </a>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => { e.preventDefault(); click(l.href); }}
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); click('#contact'); }}
              className="pill pill-gradient px-5 py-2 text-sm"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden icon-btn"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        </nav>
      </header>

      {/* Mobile fullscreen overlay */}
      {open && (
        <div className="fixed inset-0 z-[60] bg-background/95 backdrop-blur-xl flex flex-col">
          <div className="h-16 flex items-center justify-between container mx-auto px-6">
            <div className="w-10 h-10 rounded-full p-[2px] bg-grad-brand">
              <div className="w-full h-full rounded-full bg-surface flex items-center justify-center font-display font-bold text-sm">
                DK
              </div>
            </div>
            <button className="icon-btn" onClick={() => setOpen(false)} aria-label="Close menu">
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center gap-8">
            {links.map((l) => (
              <button
                key={l.href}
                onClick={() => click(l.href)}
                className="text-3xl font-display font-semibold hover:text-gradient"
              >
                {l.label}
              </button>
            ))}
            <button onClick={() => click('#contact')} className="pill pill-gradient px-8 py-3 mt-4">
              Hire Me
            </button>
          </div>
        </div>
      )}
    </>
  );
}
