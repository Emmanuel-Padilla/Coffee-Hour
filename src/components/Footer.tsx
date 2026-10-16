import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';
import { useLocalizedPath } from '@/hooks/useLocalizedPath';
import { business } from '@/data/business';
import { menuCategories } from '@/data/menu';
import { ArrowRightIcon, ClockIcon, InstagramIcon, FacebookIcon, TikTokIcon, MapPinIcon } from '@/components/icons';
import { trackEvent } from '@/lib/analytics';
import logo from '@/assets/images/logo-nav.webp';

export default function Footer() {
  const { dict, lang } = useLanguage();
  const path = useLocalizedPath();
  const year = new Date().getFullYear();

  const quickLinks = [
    [dict.nav.history, 'historia'],
    [dict.nav.experiences, 'experiencias'],
    [dict.nav.gallery, 'galeria'],
    [dict.nav.videos, 'videos'],
    [dict.nav.faq, 'faq'],
    [dict.nav.blog, 'blog'],
  ] as const;

  return (
    <footer className="relative overflow-hidden bg-[#17120e] text-white">
      <img
        src="/images/footer.png"
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center opacity-90"
      />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(13,10,8,.88)_0%,rgba(13,10,8,.68)_46%,rgba(13,10,8,.2)_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#17120e]/40 via-transparent to-[#17120e]/75" />

      <div className="container-page relative pt-20 sm:pt-24">
        <div className="grid gap-10 border-b border-white/15 pb-14 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.26em] text-caramel">Chapala · Jalisco</p>
            <h2 className="mt-5 max-w-3xl font-display text-5xl font-semibold leading-[0.9] tracking-[-0.035em] text-cream sm:text-6xl lg:text-7xl">
              {business.tagline[lang]}
            </h2>
          </div>
          <div className="lg:justify-self-end">
            <Link
              to={path('contacto')}
              className="group inline-flex w-full items-center justify-between gap-8 rounded-full bg-caramel px-6 py-4 text-sm font-bold text-[#17120e] transition hover:-translate-y-0.5 hover:bg-cream sm:w-auto"
            >
              {dict.cta.getDirections}
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        <div className="grid gap-12 py-14 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.7fr_0.8fr_1.2fr] lg:rounded-[2rem] lg:bg-[#17120e]/30 lg:px-7 lg:backdrop-blur-[2px]">
          <div>
            <Link to={path('')} className="inline-flex items-center gap-4">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white">
                <img src={logo} alt="Coffee Hour" width={44} height={44} className="h-11 w-11 rounded-full object-cover" />
              </span>
              <span>
                <span className="block font-display text-2xl font-semibold leading-none">Coffee Hour</span>
                <span className="mt-1 block text-[10px] font-bold uppercase tracking-[0.22em] text-caramel">Est. 2003 · Chapala</span>
              </span>
            </Link>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-white/60">{dict.footer.tagline}</p>
            <div className="mt-7 flex gap-2">
              {[
                { name: 'facebook', href: business.social.facebook, Icon: FacebookIcon },
                { name: 'instagram', href: business.social.instagram, Icon: InstagramIcon },
                { name: 'tiktok', href: business.social.tiktok, Icon: TikTokIcon },
              ].map(({ name, href, Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  onClick={() => trackEvent('click_social', { network: name })}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white/75 transition hover:border-caramel hover:bg-caramel hover:text-[#17120e]"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <nav aria-label={dict.footer.quickLinks}>
            <h3 className="text-[10px] font-bold uppercase tracking-[0.22em] text-caramel">{dict.footer.quickLinks}</h3>
            <ul className="mt-6 space-y-3 text-sm text-white/70">
              {quickLinks.map(([label, slug]) => (
                <li key={slug}><Link to={path(slug)} className="transition hover:pl-1 hover:text-white">{label}</Link></li>
              ))}
            </ul>
          </nav>

          <nav aria-label={dict.footer.menuLinks}>
            <h3 className="text-[10px] font-bold uppercase tracking-[0.22em] text-caramel">{dict.footer.menuLinks}</h3>
            <ul className="mt-6 space-y-3 text-sm text-white/70">
              {menuCategories.map((category) => (
                <li key={category.slug}>
                  <Link to={path(`menu/${category.slug}`)} className="transition hover:pl-1 hover:text-white">{category.shortName[lang]}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-[0.22em] text-caramel">{dict.footer.contactTitle}</h3>
            <a
              href={business.mapsSearchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex gap-3 border-b border-white/15 pb-5 text-sm leading-relaxed text-white/70 transition hover:text-white"
            >
              <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-caramel" />
              {business.address.full[lang]}
            </a>
            <div className="flex gap-3 border-b border-white/15 py-5 text-sm text-white/70">
              <ClockIcon className="mt-0.5 h-4 w-4 shrink-0 text-caramel" />
              {business.hours.display[lang]}
            </div>
            <a
              href={`tel:${business.phone.tel}`}
              onClick={() => trackEvent('click_phone', { location: 'footer' })}
              className="mt-5 block font-display text-2xl text-cream transition hover:text-caramel"
            >
              {business.phone.displayIntl}
            </a>
          </div>
        </div>

        <div className="relative flex flex-col gap-4 border-t border-white/15 py-7 text-[11px] text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {business.legalDisplayName}. {dict.footer.rights}</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <Link to={path('privacidad')} className="hover:text-white">{dict.nav.privacy}</Link>
            <span>{dict.footer.developedBy} {business.developer.name}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
