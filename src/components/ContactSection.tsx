import { useState } from 'react';
import { useReveal } from '@/hooks/use-reveal';
import { Copy, Check, Github, Linkedin, Youtube } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const EMAIL = 'darshp554@gmail.com';
const PHONE = '+91 8780744229';

export function ContactSection() {
  const ref = useReveal<HTMLElement>();
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

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
    toast({ title: 'Message sent!', description: "I'll get back to you soon." });
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section ref={ref} id="contact" className="section reveal">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        <div>
          <div className="section-eyebrow">Contact</div>
          <h2 className="section-title">Let's <span className="text-gradient">collaborate</span></h2>
          <p className="text-muted-foreground mb-8 leading-relaxed max-w-md">
            Got an AI project, a product idea, or a hard problem worth solving? I'd love to hear about it.
          </p>

          <div className="flex items-center gap-3 mb-6">
            <a
              href={`mailto:${EMAIL}`}
              className="font-display font-bold text-2xl md:text-4xl text-gradient break-all"
            >
              {EMAIL}
            </a>
            <button
              onClick={copyEmail}
              aria-label="Copy email"
              className="icon-btn shrink-0"
            >
              {copied ? <Check className="w-4 h-4 text-green-brand" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>

          <a href={`tel:${PHONE.replace(/\s/g, '')}`} className="block text-muted-foreground hover:text-foreground mb-8">
            {PHONE}
          </a>

          <div className="flex gap-3">
            <a href="https://github.com/DarshaK1Just" target="_blank" rel="noreferrer" className="icon-btn"><Github className="w-4 h-4" /></a>
            <a href="https://www.linkedin.com/in/darshak-kakani-31277a1bb/" target="_blank" rel="noreferrer" className="icon-btn"><Linkedin className="w-4 h-4" /></a>
            <a href="https://www.youtube.com/channel/UCUy35Eo8jIpBYnEovea6Vow" target="_blank" rel="noreferrer" className="icon-btn"><Youtube className="w-4 h-4" /></a>
          </div>
        </div>

        <form onSubmit={submit} className="space-y-8">
          {(['name', 'email'] as const).map((f) => (
            <div key={f}>
              <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">{f}</label>
              <input
                type={f === 'email' ? 'email' : 'text'}
                required
                value={form[f]}
                onChange={(e) => setForm({ ...form, [f]: e.target.value })}
                className="w-full bg-transparent border-0 border-b border-border focus:border-indigo-brand outline-none py-2 text-foreground"
              />
            </div>
          ))}
          <div>
            <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">Message</label>
            <textarea
              required
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full bg-transparent border-0 border-b border-border focus:border-indigo-brand outline-none py-2 text-foreground resize-none"
            />
          </div>
          <button type="submit" className="pill pill-gradient w-full py-3 text-sm">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
