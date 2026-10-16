import type { SVGProps } from 'react';

/** Shared stroke-based icon set — one consistent visual language across the site. */
const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.75,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  viewBox: '0 0 24 24',
};

export function PhoneIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M4 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L14 13l5 2v4a2 2 0 0 1-2 2 16 16 0 0 1-13-13 2 2 0 0 1 2-2Z" />
    </svg>
  );
}

export function MapPinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </svg>
  );
}

export function ClockIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </svg>
  );
}

export function MenuIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M3 6h18M3 12h18M3 18h18" />
    </svg>
  );
}

export function CloseIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

export function SunIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M2 12h2M20 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
    </svg>
  );
}

export function MoonIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
    </svg>
  );
}

export function ChevronDownIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

export function SearchIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-4.3-4.3" />
    </svg>
  );
}

export function PlayIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M10 8.5l6 3.5-6 3.5v-7Z" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function ExternalLinkIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M14 4h6v6M20 4l-9 9M19 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5" />
    </svg>
  );
}

export function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17" cy="7" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M14 9h3V6h-3a4 4 0 0 0-4 4v2H7v3h3v6h3v-6h3l1-3h-4v-2a1 1 0 0 1 1-1Z" />
    </svg>
  );
}

export function TikTokIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M14 3v10.5a3.5 3.5 0 1 1-3-3.46" />
      <path d="M14 3c.4 2.2 2 4 4.5 4.3" />
    </svg>
  );
}

export function CoffeeCupIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M5 9h11v5a5 5 0 0 1-5 5H9a4 4 0 0 1-4-4V9Z" />
      <path d="M16 10h1.5a2.5 2.5 0 0 1 0 5H16" />
      <path d="M8 6c0-1 .8-1 .8-2M11.5 6c0-1 .8-1 .8-2" />
    </svg>
  );
}

export function ArrowRightIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function CroissantIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M3 15c1-6 6-10 10-10 1.5 0 2 1 1 2-3 1-3 3-1 3.5 2 .5 3 2 2 3.5-1.5 1-3 1-3.5 3-.5 2-2 3-3.5 2.5C6 18.5 2.5 18 3 15Z" />
      <path d="M8 8.5c.8.6 1.2 1.6 1 2.5M12 6.5c.6.8.8 1.8.5 2.7" />
    </svg>
  );
}

export function SandwichIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M3 11h18l-1.5 6a2 2 0 0 1-2 1.5H6.5a2 2 0 0 1-2-1.5L3 11Z" />
      <path d="M4 11a8 8 0 0 1 16 0" />
      <path d="M8 11c.3-1 1-1.5 1-1.5M12 11c.3-1.2 1-1.7 1-1.7M16 11c.3-1 1-1.5 1-1.5" />
    </svg>
  );
}

export function CakeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M4 21v-6a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v6" />
      <path d="M4 21h16" />
      <path d="M8 12v-2a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2" />
      <path d="M12 9V5.5M12 5.5c-1 0-1.2-.7-.6-1.3.6-.6.6-1.2.1-1.7" />
      <path d="M4 17h16" />
    </svg>
  );
}

export function SnowflakeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M12 2v20M4 7l16 10M20 7 4 17" />
      <path d="M8 3.5 12 6l4-2.5M8 20.5 12 18l4 2.5M2.5 9 6 12l-3.5 3M21.5 9 18 12l3.5 3" />
    </svg>
  );
}

export function FlameIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21c4 0 6-2.5 6-6 0-2-1-3.5-2-5 .3 2-1 2.5-1.5 1.5C13.8 9 14 6 12 3c.5 3-1.5 4.5-3 7-1 1.7-1.5 2.8-1.5 4.5C7.5 18 8.5 21 12 21Z" />
    </svg>
  );
}

export function StarIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path
        d="M12 3.5l2.3 4.9 5.2.6-3.9 3.7 1 5.3L12 15.4l-4.6 2.6 1-5.3-3.9-3.7 5.2-.6L12 3.5Z"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  );
}

export function HeartIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M12 20s-7.5-4.6-9.8-9.3C.8 7.4 2.3 4 5.7 3.6 8 3.3 10 4.6 12 7c2-2.4 4-3.7 6.3-3.4 3.4.4 4.9 3.8 3.5 7.1C19.5 15.4 12 20 12 20Z" />
    </svg>
  );
}

export function WifiIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M2 9.5a14 14 0 0 1 20 0M5.5 13a9.5 9.5 0 0 1 13 0M9 16.5a5 5 0 0 1 6 0" />
      <circle cx="12" cy="20" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function UsersIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <circle cx="8.5" cy="8" r="3" />
      <path d="M2.5 20c0-3.3 2.7-5.5 6-5.5s6 2.2 6 5.5" />
      <path d="M15.5 6a3 3 0 0 1 0 6M20 20c0-2.5-1.6-4.4-4-5.2" />
    </svg>
  );
}

export function LeafIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M20 4C10 4 4 10 4 18v2h2c8 0 14-6 14-14 0-.7 0-1.4-.1-2Z" />
      <path d="M6 20c3-4 6-6 12-8" />
    </svg>
  );
}
