import { useEffect, useState } from 'react';

export function Typewriter({
  texts,
  typingSpeed = 80,
  deletingSpeed = 40,
  pauseTime = 2000,
  className = '',
  loop = true,
  showCaret = true,
}: {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
  className?: string;
  loop?: boolean;
  showCaret?: boolean;
}) {
  const [i, setI] = useState(0);
  const [text, setText] = useState('');
  const [del, setDel] = useState(false);
  const [glitch, setGlitch] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (done) return;
    const full = texts[i];
    if (!del && text === full) {
      if (!loop && i === texts.length - 1) { setDone(true); return; }
      const t = setTimeout(() => setDel(true), pauseTime);
      return () => clearTimeout(t);
    }
    if (del && text === '') {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 350);
      setDel(false);
      setI((p) => (p + 1) % texts.length);
      return;
    }
    const t = setTimeout(() => {
      setText(del ? full.substring(0, text.length - 1) : full.substring(0, text.length + 1));
    }, del ? deletingSpeed : typingSpeed);
    return () => clearTimeout(t);
  }, [text, del, i, texts, typingSpeed, deletingSpeed, pauseTime, loop, done]);

  return (
    <span className={`${className} ${glitch ? 'animate-glitch' : ''}`}>
      {text}
      {showCaret && <span className="animate-blink text-gradient">|</span>}
    </span>
  );
}
