import { useState } from 'react';
import { useReveal } from '@/hooks/use-reveal';
import { Copy, Check, Github, Linkedin, Youtube, Mail, Phone, MapPin, Clock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const EMAIL = 'darshp554@gmail.com';
const PHONE = '+91 8780744229';

const reachTags = ['Job Opportunity', 'Freelance Project', 'Collaboration', 'Just to Connect'];
const availability = ['Full-time', 'Contract', 'Consulting', 'Collaboration'];

export function ContactSection() {
  const ref = useReveal<HTMLElement>();
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);
  const [sent, setSent] = useState(false);
  const [reason, setReason] = useState<string[]>([]);
  const [form, setForm] = useState({ name: '', company: '', email: '', message: '' });

  const toggleReason = (r: string) =>
    setReason((prev) => (prev.includes(r) ? prev.filter((x) => x !== r) : [...prev, r]));

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      toast({ title: 'Copied!', description: 'Email copied to clipboard' });
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[Portfolio] ${reason.join(', ') || 'Inquiry'} from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nCompany: ${form.company}\nEmail: ${form.email}\nReason: ${reason.join(', ')}\n\n${form.message}`
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm({ name: '', company: '', email: '', message: '' });
      setReason([]);
    }, 2400);
  };

  return (
    <section ref={ref} id="contact" className="section reveal">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="section-eyebrow justify-center">Contact</div>
          <h2 className="section-title">Let's build something <span className="text-gradient">extraordinary</span></h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start max-w-6xl mx-auto">
          <div className="space-y-6">
            <div className="card-surface p-6">
              <div className="text-xs uppercase tracking-widest text-muted-foreground mb-3 font-mono">// available for</div>
              <div className="flex flex-wrap gap-2">
                {availability.map((a) => <span key={a} className="chip">{a}</span>)}
              </div>
            </div>

            <div className="card-surface p-6 space-y-5">
              <div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                  <Mail className="w-3.5 h-3.5" /> Email
                </div>
                <div className="flex items-center gap-3">
                  <a href={`mailto:${EMAIL}`} className="font-display font-bold text-lg md:text-2xl text-gradient break-all">
                    {EMAIL}
                  </a>
                  <button onClick={copyEmail} aria-label="Copy email" className="icon-btn shrink-0">
                    {copied ? <Check className="w-4 h-4 text-green-brand" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                  <Phone className="w-3.5 h-3.5" /> Phone
                </div>
                <a href={`tel:${PHONE.replace(/\s/g, '')}`} className="font-display font-semibold text-base hover:text-gradient">
                  {PHONE}
                </a>
              </div>

              <div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                  <MapPin className="w-3.5 h-3.5" /> Location
                </div>
                <div className="text-sm">Ahmedabad, India · Open to Remote / Relocation</div>
              </div>

              <div className="flex items-center gap-2 text-xs text-muted-foreground pt-2 border-t border-border">
                <Clock className="w-3.5 h-3.5 text-green-brand" />
                ⚡ Typically responds within 24 hours · Weekdays 10AM–7PM IST
              </div>
            </div>

            <div className="flex gap-3">
              <a href="https://github.com/DarshaK1Just" target="_blank" rel="noreferrer" className="card-surface p-4 flex-1 group hover:-translate-y-0.5 transition-transform" aria-label="GitHub">
                <Github className="w-5 h-5 mb-2 group-hover:text-gradient" />
                <div className="text-xs text-muted-foreground">GitHub</div>
              </a>
              <a href="https://www.linkedin.com/in/darshak-kakani-31277a1bb/" target="_blank" rel="noreferrer" className="card-surface p-4 flex-1 group hover:-translate-y-0.5 transition-transform" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5 mb-2 group-hover:text-gradient" />
                <div className="text-xs text-muted-foreground">LinkedIn</div>
              </a>
              <a href="https://www.youtube.com/channel/UCUy35Eo8jIpBYnEovea6Vow" target="_blank" rel="noreferrer" className="card-surface p-4 flex-1 group hover:-translate-y-0.5 transition-transform" aria-label="YouTube">
                <Youtube className="w-5 h-5 mb-2 group-hover:text-gradient" />
                <div className="text-xs text-muted-foreground">YouTube</div>
              </a>
            </div>
          </div>

          <form onSubmit={submit} className="space-y-6 card-surface p-6 md:p-8">
            <div>
              <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-3 font-mono">// what are you reaching out for?</label>
              <div className="flex flex-wrap gap-2">
                {reachTags.map((t) => {
                  const on = reason.includes(t);
                  return (
                    <button key={t} type="button" onClick={() => toggleReason(t)}
                      className="px-3 py-1.5 rounded-md text-xs font-medium transition-all"
                      style={{
                        background: on ? 'var(--gradient-brand)' : 'transparent',
                        color: on ? 'white' : 'hsl(var(--muted-foreground))',
                        border: `1px solid ${on ? 'transparent' : 'hsl(var(--border))'}`,
                      }}>
                      {t}
                    </button>
                  );
                })}
              </div>
            </div>

            {([
              { f: 'name', label: 'Name', type: 'text', req: true },
              { f: 'company', label: 'Company / Organization', type: 'text', req: false },
              { f: 'email', label: 'Email', type: 'email', req: true },
            ] as const).map((field) => (
              <div key={field.f}>
                <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">{field.label}</label>
                <input type={field.type} required={field.req}
                  value={form[field.f]}
                  onChange={(e) => setForm({ ...form, [field.f]: e.target.value })}
                  className="w-full bg-transparent border-0 border-b border-border focus:border-indigo-brand outline-none py-2 text-foreground" />
              </div>
            ))}
            <div>
              <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">Message</label>
              <textarea required rows={4} value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-transparent border-0 border-b border-border focus:border-indigo-brand outline-none py-2 text-foreground resize-none" />
            </div>
            <button type="submit" className="pill pill-gradient w-full py-3 text-sm" disabled={sent}>
              {sent ? <><Check className="w-4 h-4" /> Opening email...</> : <>Send Message →</>}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
