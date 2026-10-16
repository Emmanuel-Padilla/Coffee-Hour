interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  light?: boolean;
}

function Squiggle({ light, align }: { light: boolean; align: 'left' | 'center' }) {
  return (
    <svg
      viewBox="0 0 90 12"
      width="72"
      height="10"
      fill="none"
      className={`mt-2 ${align === 'center' ? 'mx-auto' : ''}`}
      aria-hidden="true"
    >
      <path
        d="M2 8c6-8 12-8 18 0s12 8 18 0 12-8 18 0 12 8 18 0 10-6 14-4"
        stroke={light ? '#C97820' : 'currentColor'}
        strokeWidth="2.5"
        strokeLinecap="round"
        className={light ? '' : 'text-caramel'}
      />
    </svg>
  );
}

export default function SectionHeading({ eyebrow, title, subtitle, align = 'left', light = false }: SectionHeadingProps) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      {eyebrow && (
        <p className={`text-sm font-semibold uppercase tracking-wide ${light ? 'text-caramel' : 'text-coffee-600 dark:text-caramel'}`}>
          {eyebrow}
        </p>
      )}
      <h2 className={`mt-2 font-display text-3xl font-semibold sm:text-4xl ${light ? 'text-white' : 'text-navy-600 dark:text-cream'}`}>
        {title}
      </h2>
      <Squiggle light={light} align={align} />
      {subtitle && (
        <p className={`mt-3 text-base ${light ? 'text-white/80' : 'text-ink-700 dark:text-cream/70'}`}>{subtitle}</p>
      )}
    </div>
  );
}
