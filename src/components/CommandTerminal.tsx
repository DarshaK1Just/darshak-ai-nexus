import { useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';

type Line = { kind: 'in' | 'out' | 'err' | 'sys'; text: string };

const EMAIL = 'darshp554@gmail.com';

const skillsList = ['LangChain', 'LangGraph', 'AutoGen', 'RAG', 'OpenAI', 'Azure AI Search',
  'FastAPI', 'React', 'Angular', 'Next.js', 'Node.js', 'Python', 'TypeScript',
  'Docker', 'Redis', 'AWS', 'Raspberry Pi', 'MQTT', 'OpenCV'];

const projectList = [
  'AutoJob.ai          → github.com/DarshaK1Just/workday-auto',
  'Insurance Doc Q&A   → github.com/DarshaK1Just/atQor-insurance-doc-qa',
  'AI Healthcare Bot   → Voice + NLP appointment booking',
  'DevOps Maturity     → Crest Data · GPT-powered platform',
  'IoT Security        → github.com/DarshaK1Just/Face_Reco_Security_Rasp_Pi',
];

const commands: Record<string, string[]> = {
  help: [
    'available commands:',
    '  whoami    → bio',
    '  skills    → tech stack',
    '  projects  → notable projects',
    '  contact   → reach me',
    '  hire      → fire up an email',
    '  social    → links',
    '  clear     → clear terminal',
    '  exit      → close',
  ],
  whoami: [
    'darshak kakani',
    'AI/ML Engineer & Full Stack Developer @ Crest Data',
    'Ahmedabad, India · open to remote/hybrid/relocation',
    'building production LLM systems, agentic pipelines, full-stack products.',
  ],
  skills: ['→ ' + skillsList.join(', ')],
  projects: projectList,
  contact: [
    'email: ' + EMAIL,
    'phone: +91 8780744229',
    'github: github.com/DarshaK1Just',
    'linkedin: linkedin.com/in/darshak-kakani-31277a1bb',
  ],
  social: [
    'github   → https://github.com/DarshaK1Just',
    'linkedin → https://www.linkedin.com/in/darshak-kakani-31277a1bb/',
    'youtube  → https://www.youtube.com/channel/UCUy35Eo8jIpBYnEovea6Vow',
  ],
};

export function CommandTerminal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [lines, setLines] = useState<Line[]>([
    { kind: 'sys', text: 'darshak-os v1.0 — type `help` for commands · esc to close' },
  ]);
  const [input, setInput] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => { if (open) setTimeout(() => inputRef.current?.focus(), 50); }, [open]);
  useEffect(() => { bodyRef.current?.scrollTo({ top: bodyRef.current.scrollHeight, behavior: 'smooth' }); }, [lines]);

  if (!open) return null;

  const run = (raw: string) => {
    const cmd = raw.trim().toLowerCase();
    const next: Line[] = [...lines, { kind: 'in', text: raw }];
    if (!cmd) { setLines(next); return; }
    if (cmd === 'clear') { setLines([]); return; }
    if (cmd === 'exit') { onClose(); return; }
    if (cmd === 'hire') {
      next.push({ kind: 'out', text: 'opening mailto...' });
      window.location.href = `mailto:${EMAIL}?subject=Let%27s%20build%20something`;
      setLines(next);
      return;
    }
    const out = commands[cmd];
    if (out) out.forEach((t) => next.push({ kind: 'out', text: t }));
    else next.push({ kind: 'err', text: `command not found: ${cmd} · try \`help\`` });
    setLines(next);
  };

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center bg-background/80 backdrop-blur-sm p-4"
         onClick={onClose}>
      <div className="w-full max-w-2xl rounded-xl overflow-hidden border border-border shadow-2xl"
           style={{ background: 'rgba(8,8,16,0.95)' }} onClick={(e) => e.stopPropagation()}>
        <div className="h-9 flex items-center justify-between px-4 border-b border-border bg-surface">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-500/80" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <span className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <div className="font-mono text-xs text-muted-foreground">darshak@portfolio ~ %</div>
          <button onClick={onClose} className="text-muted-foreground hover:text-foreground"><X className="w-4 h-4" /></button>
        </div>
        <div ref={bodyRef} className="h-[400px] overflow-y-auto p-4 font-mono text-sm leading-relaxed">
          {lines.map((l, i) => (
            <div key={i} className={
              l.kind === 'in' ? 'text-foreground' :
              l.kind === 'err' ? 'text-pink-brand' :
              l.kind === 'sys' ? 'text-muted-foreground italic' :
              'text-violet-brand'
            }>
              {l.kind === 'in' ? <span className="text-gradient">$ </span> : null}
              {l.text}
            </div>
          ))}
          <form onSubmit={(e) => { e.preventDefault(); run(input); setInput(''); }} className="flex items-center mt-2">
            <span className="text-gradient mr-2">$</span>
            <input ref={inputRef} value={input} onChange={(e) => setInput(e.target.value)}
                   className="flex-1 bg-transparent outline-none text-foreground" autoFocus
                   placeholder="type a command..." />
          </form>
        </div>
      </div>
    </div>
  );
}
