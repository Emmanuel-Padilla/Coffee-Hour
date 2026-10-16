import { business } from '@/data/business';
import { useLanguage } from '@/context/LanguageContext';
import { trackEvent } from '@/lib/analytics';
import { ExternalLinkIcon } from '@/components/icons';

export default function MapEmbed() {
  const { dict } = useLanguage();

  return (
    <div className="overflow-hidden rounded-t-[6rem] border border-ink-900/10 shadow-2xl dark:border-white/10">
      <div className="aspect-[4/5] w-full sm:aspect-[4/3]">
        <iframe
          title="Coffee Hour Chapala — Google Maps"
          src={business.mapsEmbedSrc}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="h-full w-full border-0"
        />
      </div>
      <div className="flex items-center justify-between gap-3 bg-white p-4 text-sm dark:bg-[#1c1712]">
        <p className="text-ink-700 dark:text-cream/70">{dict.contact.mapFallback}</p>
        <a
          href={business.mapsSearchUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEvent('click_directions', { location: 'map-embed' })}
          className="inline-flex shrink-0 items-center gap-1.5 font-semibold text-coffee-600 hover:underline dark:text-caramel"
        >
          {dict.cta.openInMaps}
          <ExternalLinkIcon className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}
