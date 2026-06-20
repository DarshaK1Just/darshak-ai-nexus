import { useEffect, useState } from 'react';
import { useReveal } from '@/hooks/use-reveal';
import { Github, Star, GitFork, Code2, ArrowRight, Activity } from 'lucide-react';

type Repo = {
  name: string;
  description: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  html_url: string;
  fork: boolean;
};

const langColors: Record<string, string> = {
  Python: '#3776AB',
  JavaScript: '#F7DF1E',
  TypeScript: '#3178C6',
  HTML: '#E34F26',
  CSS: '#1572B6',
  Jupyter: '#DA5B0B',
  'Jupyter Notebook': '#DA5B0B',
  Java: '#B07219',
  C: '#555555',
  'C++': '#F34B7D',
};

function useRepos() {
  const [repos, setRepos] = useState<Repo[] | null>(null);
  useEffect(() => {
    const key = 'gh:repos:DarshaK1Just';
    const cached = sessionStorage.getItem(key);
    if (cached) {
      try {
        const { t, d } = JSON.parse(cached);
        if (Date.now() - t < 5 * 60 * 1000) { setRepos(d); return; }
      } catch {}
    }
    fetch('https://api.github.com/users/DarshaK1Just/repos?per_page=100&sort=updated')
      .then((r) => (r.ok ? r.json() : null))
      .then((d: Repo[] | null) => {
        if (!d) return;
        setRepos(d);
        sessionStorage.setItem(key, JSON.stringify({ t: Date.now(), d }));
      })
      .catch(() => {});
  }, []);
  return repos;
}

export function GithubShowcase() {
  const ref = useReveal<HTMLElement>();
  const repos = useRepos();

  const stats = (() => {
    if (!repos) return { total: '—', stars: '—', topLang: '—', topRepos: [] as Repo[], langs: [] as [string, number][] };
    const owned = repos.filter((r) => !r.fork);
    const stars = owned.reduce((a, r) => a + r.stargazers_count, 0);
    const langMap: Record<string, number> = {};
    owned.forEach((r) => { if (r.language) langMap[r.language] = (langMap[r.language] || 0) + 1; });
    const langs = Object.entries(langMap).sort((a, b) => b[1] - a[1]);
    const topLang = langs[0]?.[0] ?? '—';
    const topRepos = [...owned]
      .sort((a, b) => b.stargazers_count - a.stargazers_count || +new Date(b.html_url) - +new Date(a.html_url))
      .slice(0, 4);
    return { total: String(owned.length), stars: String(stars), topLang, topRepos, langs: langs.slice(0, 6) };
  })();

  const totalLangCount = stats.langs.reduce((a, [, n]) => a + n, 0) || 1;

  return (
    <section ref={ref} id="github" className="section reveal">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="section-eyebrow justify-center">GitHub</div>
          <h2 className="section-title">Code speaks <span className="text-gradient">louder than words</span></h2>
        </div>

        <div className="max-w-6xl mx-auto rounded-2xl p-6 md:p-10 relative overflow-hidden"
          style={{
            background: 'linear-gradient(180deg, rgba(124,58,237,0.06), rgba(6,182,212,0.04))',
            border: '1px solid transparent',
            backgroundImage: 'linear-gradient(rgba(8,8,16,0.9), rgba(8,8,16,0.9)), linear-gradient(135deg, #7C3AED, #EC4899, #06B6D4)',
            backgroundOrigin: 'border-box',
            backgroundClip: 'padding-box, border-box',
          }}>
          {/* Grid bg */}
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
            style={{ backgroundImage: 'linear-gradient(rgba(124,58,237,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.6) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

          <div className="relative grid md:grid-cols-4 gap-4 mb-8">
            {[
              { label: 'Public Repos', value: stats.total, icon: Code2 },
              { label: 'Stars Earned', value: stats.stars, icon: Star },
              { label: 'Top Language', value: stats.topLang, icon: Activity },
              { label: 'Updated', value: 'Live', icon: GitFork },
            ].map((s) => (
              <div key={s.label} className="card-surface p-4">
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                  <s.icon className="w-3.5 h-3.5" /> {s.label}
                </div>
                <div className="font-display font-bold text-2xl text-gradient-anim">{s.value}</div>
              </div>
            ))}
          </div>

          {/* Languages bar */}
          <div className="relative mb-8">
            <div className="text-xs uppercase tracking-widest text-muted-foreground mb-3 font-mono">// language breakdown</div>
            <div className="flex h-3 w-full rounded-full overflow-hidden border border-border">
              {stats.langs.map(([name, n]) => (
                <div key={name} title={`${name}: ${n}`}
                  style={{ width: `${(n / totalLangCount) * 100}%`, background: langColors[name] || '#7C3AED' }} />
              ))}
              {!stats.langs.length && <div className="w-full bg-grad-brand" />}
            </div>
            <div className="flex flex-wrap gap-3 mt-3 text-xs">
              {stats.langs.map(([name, n]) => (
                <span key={name} className="inline-flex items-center gap-1.5 text-muted-foreground">
                  <span className="w-2 h-2 rounded-full" style={{ background: langColors[name] || '#7C3AED' }} />
                  {name} <span className="opacity-60">({n})</span>
                </span>
              ))}
            </div>
          </div>

          {/* Pinned repos */}
          <div className="relative mb-8">
            <div className="text-xs uppercase tracking-widest text-muted-foreground mb-3 font-mono">// top repositories</div>
            <div className="grid md:grid-cols-2 gap-3">
              {stats.topRepos.map((r) => (
                <a key={r.name} href={r.html_url} target="_blank" rel="noreferrer" className="card-surface p-4 group">
                  <div className="flex items-center justify-between mb-2">
                    <div className="font-mono font-semibold text-sm text-gradient">{r.name}</div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Star className="w-3 h-3" /> {r.stargazers_count}
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground line-clamp-2 mb-2 min-h-[2rem]">
                    {r.description || 'No description'}
                  </div>
                  {r.language && (
                    <div className="inline-flex items-center gap-1.5 text-[11px] text-muted-foreground">
                      <span className="w-2 h-2 rounded-full" style={{ background: langColors[r.language] || '#7C3AED' }} />
                      {r.language}
                    </div>
                  )}
                </a>
              ))}
              {!stats.topRepos.length && (
                <div className="card-surface p-4 text-sm text-muted-foreground col-span-2 text-center">
                  Loading GitHub data...
                </div>
              )}
            </div>
          </div>

          <div className="relative text-center">
            <a href="https://github.com/DarshaK1Just" target="_blank" rel="noreferrer" className="pill pill-gradient px-7 py-3 text-sm">
              <Github className="w-4 h-4" /> Explore My GitHub <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
