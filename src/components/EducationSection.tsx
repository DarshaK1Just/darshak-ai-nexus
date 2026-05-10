import { useReveal } from '@/hooks/use-reveal';
import { GraduationCap } from 'lucide-react';

export function EducationSection() {
  const ref = useReveal<HTMLElement>();
  return (
    <section ref={ref} id="education" className="section reveal">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="section-eyebrow justify-center">Education</div>
          <h2 className="section-title">Academic <span className="text-gradient">foundation</span></h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div
            className="relative rounded-2xl p-6 md:p-8 transition-all duration-300 hover:-translate-y-1"
            style={{
              background: 'linear-gradient(135deg, hsl(var(--indigo) / 0.06), hsl(var(--violet) / 0.04))',
              border: '1px solid hsl(var(--border))',
              backdropFilter: 'blur(8px)',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLDivElement).style.borderColor = 'hsl(var(--indigo) / 0.5)';
              (e.currentTarget as HTMLDivElement).style.boxShadow = '0 20px 40px -16px hsl(var(--indigo) / 0.35)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLDivElement).style.borderColor = '';
              (e.currentTarget as HTMLDivElement).style.boxShadow = '';
            }}
          >
            <div className="flex flex-col md:flex-row md:items-start gap-5">
              <div
                className="inline-flex items-center justify-center w-12 h-12 rounded-xl shrink-0"
                style={{ background: 'var(--gradient-brand)', color: 'white' }}
              >
                <GraduationCap className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h3 className="font-display font-bold text-xl">B.E. Information Technology</h3>
                  <span
                    className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-semibold"
                    style={{ background: 'hsl(var(--indigo) / 0.15)', border: '1px solid hsl(var(--indigo) / 0.4)', color: 'hsl(var(--violet))' }}
                  >
                    GPA 8.97
                  </span>
                </div>
                <div className="text-sm text-foreground/90 mb-1">G H Patel College of Engineering & Technology</div>
                <div className="text-xs text-muted-foreground mb-4">2020 – 2024</div>
                <div className="text-sm text-muted-foreground">
                  <span className="text-foreground/80 font-medium">Focus:</span>{' '}
                  Software Engineering, AI/ML, System Design
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
