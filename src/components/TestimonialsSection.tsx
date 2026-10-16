import { useLanguage } from '@/context/LanguageContext';
import { business } from '@/data/business';
import { ExternalLinkIcon, FacebookIcon, InstagramIcon } from '@/components/icons';

/** Links only to retrievable review surfaces; no unverified customer quotes are fabricated. */
export default function TestimonialsSection() {
  const { lang } = useLanguage();

  const copy = {
    es: {
      kicker: 'Opiniones reales, en su fuente original',
      title: 'La confianza también se sirve a la mesa.',
      body: 'Consulta directamente las experiencias compartidas por quienes ya nos visitaron. Preferimos llevarte a reseñas verificables antes que publicar testimonios sin una fuente comprobable.',
      cta: 'Leer reseñas en Google Maps',
      note: 'Contenido externo · se abre en otra pestaña',
    },
    en: {
      kicker: 'Real opinions, at their original source',
      title: 'Trust is also served at the table.',
      body: 'Read the experiences shared by people who have already visited us. We prefer sending you to verifiable reviews instead of publishing testimonials without a traceable source.',
      cta: 'Read reviews on Google Maps',
      note: 'External content · opens in a new tab',
    },
  }[lang];

  return (
    <div className="relative grid overflow-hidden border-y border-coffee-900/15 py-10 dark:border-white/15 lg:grid-cols-[1.25fr_0.75fr] lg:gap-16 lg:py-14">
      <span className="pointer-events-none absolute -left-4 -top-12 font-display text-[12rem] leading-none text-caramel/[0.12]">“</span>
      <div className="relative">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-coffee-600 dark:text-caramel">{copy.kicker}</p>
        <h3 className="mt-5 max-w-2xl font-display text-4xl font-semibold leading-[0.98] text-navy-600 dark:text-cream sm:text-5xl">{copy.title}</h3>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-700 dark:text-cream/70">{copy.body}</p>
      </div>

      <div className="mt-10 flex flex-col justify-between border-t border-coffee-900/15 pt-7 dark:border-white/15 lg:mt-0 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
        <a
          href={business.mapsSearchUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center justify-between gap-4 rounded-full bg-[#17120e] px-6 py-4 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-coffee-600"
        >
          {copy.cta}
          <ExternalLinkIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
        <div className="mt-8">
          <p className="text-[10px] uppercase tracking-[0.16em] text-ink-700/60 dark:text-cream/50">{copy.note}</p>
          <div className="mt-4 flex items-center gap-3">
            <a
              href={business.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink-900/20 text-ink-900 transition hover:border-coffee-600 hover:bg-coffee-600 hover:text-white dark:border-white/20 dark:text-cream"
            >
              <FacebookIcon className="h-4 w-4" />
            </a>
            <a
              href={business.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink-900/20 text-ink-900 transition hover:border-coffee-600 hover:bg-coffee-600 hover:text-white dark:border-white/20 dark:text-cream"
            >
              <InstagramIcon className="h-4 w-4" />
            </a>
            <span className="ml-2 font-display text-sm italic text-coffee-700 dark:text-cream/70">Coffee Hour Chapala</span>
          </div>
        </div>
      </div>
    </div>
  );
}
