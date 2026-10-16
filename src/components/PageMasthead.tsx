import type { ReactNode } from 'react';

interface PageMastheadProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  index?: string;
  word?: string;
  tone?: 'dark' | 'cream' | 'caramel';
  children?: ReactNode;
}

export default function PageMasthead({ eyebrow, title, subtitle, index = '01', word, tone = 'dark', children }: PageMastheadProps) {
  const tones = {
    dark: 'bg-[#17120e] text-white',
    cream: 'bg-cream-soft text-navy-600 dark:bg-[#1c1712] dark:text-cream',
    caramel: 'bg-caramel text-[#17120e]',
  };
  const muted = tone === 'dark' ? 'text-white/60' : 'text-ink-700 dark:text-cream/70';
  const accent = tone === 'caramel' ? 'text-[#17120e]/55' : 'text-caramel';

  return (
    <header className={`relative overflow-hidden py-16 sm:py-20 ${tones[tone]}`}>
      {word && (
        <span className={`pointer-events-none absolute -bottom-10 right-0 whitespace-nowrap font-display text-[9rem] font-semibold leading-none tracking-[-0.05em] sm:text-[14rem] ${tone === 'dark' ? 'text-white/[0.035]' : 'text-coffee-700/[0.045]'}`}>
          {word}
        </span>
      )}
      <div className="container-page relative grid gap-8 lg:grid-cols-[0.22fr_1fr_0.65fr] lg:items-end">
        <div className={`font-display text-sm italic ${accent}`}>{index}</div>
        <div>
          <p className={`text-[10px] font-bold uppercase tracking-[0.26em] ${accent}`}>{eyebrow}</p>
          <h1 className="mt-4 max-w-3xl font-display text-5xl font-semibold leading-[0.9] tracking-[-0.035em] sm:text-6xl lg:text-7xl">{title}</h1>
        </div>
        <div>
          {subtitle && <p className={`max-w-lg text-sm leading-relaxed sm:text-base ${muted}`}>{subtitle}</p>}
          {children && <div className="mt-5">{children}</div>}
        </div>
      </div>
    </header>
  );
}
