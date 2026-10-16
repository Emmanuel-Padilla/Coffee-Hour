import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import MapEmbed from '@/components/MapEmbed';
import { useLanguage } from '@/context/LanguageContext';
import { useLocalizedPath } from '@/hooks/useLocalizedPath';
import { pageSeo } from '@/data/seo';
import { business } from '@/data/business';
import { trackEvent } from '@/lib/analytics';
import {
  PhoneIcon,
  MapPinIcon,
  ClockIcon,
  FacebookIcon,
  InstagramIcon,
  TikTokIcon,
  ExternalLinkIcon,
} from '@/components/icons';
import PageMasthead from '@/components/PageMasthead';
import coffeeHour4 from '@/assets/images/coffeehour-4.webp';

export default function Contact() {
  const { dict, lang } = useLanguage();
  const path = useLocalizedPath();
  const seo = pageSeo['contacto'];

  return (
    <>
      <SEO slug="contacto" title={seo.title[lang]} description={seo.description[lang]} />
      <Breadcrumbs items={[{ label: dict.nav.home, to: path('') }, { label: dict.nav.contact }]} />

      <PageMasthead eyebrow="Chapala · Jalisco" title={dict.contact.title} subtitle={dict.contact.subtitle} index="05" word="VISÍTANOS" tone="caramel" />

      <section className="container-page grid gap-10 py-16 lg:grid-cols-2">
        <div className="space-y-6">
          <div className="rounded-t-[6rem] bg-[#17120e] p-8 pt-16 text-white shadow-2xl sm:p-10 sm:pt-20">
            <dl className="space-y-5">
              <div className="flex items-start gap-3">
                <MapPinIcon className="mt-0.5 h-5 w-5 shrink-0 text-caramel" />
                <div>
                  <dt className="text-sm font-semibold text-cream">{dict.contact.address}</dt>
                  <dd className="mt-1 text-sm leading-relaxed text-white/70">{business.address.full[lang]}</dd>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <PhoneIcon className="mt-0.5 h-5 w-5 shrink-0 text-caramel" />
                <div>
                  <dt className="text-sm font-semibold text-cream">{dict.contact.phone}</dt>
                  <dd>
                    <a
                      href={`tel:${business.phone.tel}`}
                      onClick={() => trackEvent('click_phone', { location: 'contact-page' })}
                      className="text-sm text-caramel hover:underline"
                    >
                      {business.phone.displayIntl}
                    </a>
                  </dd>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <ClockIcon className="mt-0.5 h-5 w-5 shrink-0 text-caramel" />
                <div>
                  <dt className="text-sm font-semibold text-cream">{dict.contact.hours}</dt>
                  <dd className="mt-1 text-sm text-white/70">{business.hours.display[lang]}</dd>
                </div>
              </div>
            </dl>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={`tel:${business.phone.tel}`}
                onClick={() => trackEvent('click_phone', { location: 'contact-buttons' })}
                className="rounded-full bg-caramel px-5 py-2.5 text-sm font-bold text-[#17120e] hover:bg-cream"
              >
                {dict.cta.callNow}
              </a>
              <a
                href={business.mapsSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent('click_directions', { location: 'contact-buttons' })}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/30 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10"
              >
                {dict.cta.getDirections}
                <ExternalLinkIcon className="h-4 w-4" />
              </a>
              <Link
                to={path('menu')}
                className="rounded-full border border-white/30 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10"
              >
                {dict.cta.viewMenu}
              </Link>
            </div>
          </div>

          <div className="border-y border-ink-900/15 py-6 dark:border-white/15">
            <h2 className="text-sm font-semibold text-ink-900 dark:text-cream">{dict.contact.social}</h2>
            <div className="mt-3 flex gap-3">
              <a
                href={business.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                onClick={() => trackEvent('click_social', { network: 'facebook' })}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink-900/15 text-ink-900 hover:border-coffee-600 hover:text-coffee-600 dark:border-white/20 dark:text-cream"
              >
                <FacebookIcon className="h-5 w-5" />
              </a>
              <a
                href={business.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                onClick={() => trackEvent('click_social', { network: 'instagram' })}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink-900/15 text-ink-900 hover:border-coffee-600 hover:text-coffee-600 dark:border-white/20 dark:text-cream"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a
                href={business.social.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                onClick={() => trackEvent('click_social', { network: 'tiktok' })}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink-900/15 text-ink-900 hover:border-coffee-600 hover:text-coffee-600 dark:border-white/20 dark:text-cream"
              >
                <TikTokIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          <figure className="relative overflow-hidden rounded-bl-[6rem]">
            <img src={coffeeHour4} alt={lang === 'en' ? 'A table at Coffee Hour Chapala' : 'Una mesa en Coffee Hour Chapala'} loading="lazy" className="aspect-[16/10] w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#17120e]/75 via-transparent to-transparent" />
            <figcaption className="absolute inset-x-0 bottom-0 p-6 font-display text-xl italic text-white">{business.history.conceptLine[lang]}</figcaption>
          </figure>
        </div>

        <MapEmbed />
      </section>
    </>
  );
}
