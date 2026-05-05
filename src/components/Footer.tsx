export function Footer() {
  const year = new Date().getFullYear();
  const links = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];
  return (
    <footer className="relative pt-12 pb-8">
      <div className="h-px w-full bg-grad-line mb-8" />
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div>Darshak Kakani · © {year}</div>
        <nav className="flex items-center gap-2">
          {links.map((l, i) => (
            <span key={l.href} className="flex items-center gap-2">
              <a
                href={l.href}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(l.href)?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="hover:text-foreground"
              >
                {l.label}
              </a>
              {i < links.length - 1 && <span className="opacity-40">·</span>}
            </span>
          ))}
        </nav>
        <div>Built with React</div>
      </div>
    </footer>
  );
}
