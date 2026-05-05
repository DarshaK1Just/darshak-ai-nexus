import { useEffect, useRef } from 'react';

interface Props {
  count?: number;
  className?: string;
}

// Mouse-parallax constellation rendered to canvas.
export function Constellation({ count = 120, className = '' }: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let w = 0, h = 0, dpr = window.devicePixelRatio || 1;
    const points: { x: number; y: number; vx: number; vy: number }[] = [];

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      w = rect.width; h = rect.height;
      canvas.width = w * dpr; canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    for (let i = 0; i < count; i++) {
      points.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
      });
    }

    let raf = 0;
    let angle = 0;
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      angle += 0.0008;

      const cx = w / 2 + mouse.current.x * 20;
      const cy = h / 2 + mouse.current.y * 20;

      for (const p of points) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
      }

      // rotate sample around center for slow rotation feel
      const cos = Math.cos(angle), sin = Math.sin(angle);
      const projected = points.map((p) => {
        const dx = p.x - cx, dy = p.y - cy;
        return { x: cx + dx * cos - dy * sin, y: cy + dx * sin + dy * cos };
      });

      // lines
      for (let i = 0; i < projected.length; i++) {
        for (let j = i + 1; j < projected.length; j++) {
          const a = projected[i], b = projected[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const d = Math.hypot(dx, dy);
          if (d < 110) {
            const o = 1 - d / 110;
            ctx.strokeStyle = `rgba(167,139,250,${o * 0.35})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // dots
      for (const p of projected) {
        ctx.fillStyle = 'rgba(99,102,241,0.9)';
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.6, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(draw);
    };
    draw();

    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.current.x = (e.clientX - rect.left) / rect.width - 0.5;
      mouse.current.y = (e.clientY - rect.top) / rect.height - 0.5;
    };
    window.addEventListener('mousemove', onMove);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener('mousemove', onMove);
    };
  }, [count]);

  return <canvas ref={canvasRef} className={`w-full h-full ${className}`} />;
}
