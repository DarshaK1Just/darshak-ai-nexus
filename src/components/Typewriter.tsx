import { useEffect, useState } from 'react';

export function Typewriter({
  texts,
  typingSpeed = 80,
  deletingSpeed = 40,
  pauseTime = 2000,
  className = '',
}: {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
  className?: string;
}) {
  const [i, setI] = useState(0);
  const [text, setText] = useState('');
  const [del, setDel] = useState(false);

  useEffect(() => {
    const full = texts[i];
    if (!del && text === full) {
      const t = setTimeout(() => setDel(true), pauseTime);
      return () => clearTimeout(t);
    }
    if (del && text === '') {
      setDel(false);
      setI((p) => (p + 1) % texts.length);
      return;
    }
    const t = setTimeout(() => {
      setText(del ? full.substring(0, text.length - 1) : full.substring(0, text.length + 1));
    }, del ? deletingSpeed : typingSpeed);
    return () => clearTimeout(t);
  }, [text, del, i, texts, typingSpeed, deletingSpeed, pauseTime]);

  return (
    <span className={className}>
      {text}
      <span className="animate-blink text-gradient">|</span>
    </span>
  );
}
