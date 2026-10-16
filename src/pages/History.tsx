import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import PageMasthead from '@/components/PageMasthead';
import { useLanguage } from '@/context/LanguageContext';
import { useLocalizedPath } from '@/hooks/useLocalizedPath';
import { useParallax } from '@/hooks/useParallax';
import { useReveal } from '@/hooks/useReveal';
import { pageSeo } from '@/data/seo';
import { business } from '@/data/business';
import { ClockIcon, CoffeeCupIcon, MapPinIcon } from '@/components/icons';
import coffeeHour7 from '@/assets/images/coffeehour-7.webp';
import coffeeHour4 from '@/assets/images/coffeehour-4.webp';
import heroInterior from '@/assets/images/hero-interior.webp';

export default function History() {
  const { dict, lang } = useLanguage();
  const path = useLocalizedPath();
  const seo = pageSeo['historia'];
  const parallax1 = useParallax<HTMLImageElement>(28);
  const parallax2 = useParallax<HTMLImageElement>(24);
  const parallax3 = useParallax<HTMLImageElement>(20);
  const reveal1 = useReveal<HTMLElement>();
  const reveal2 = useReveal<HTMLElement>();
  const reveal3 = useReveal<HTMLElement>();

  const milestones = [
    { Icon: CoffeeCupIcon, text: dict.history.timelinePioneer },
    { Icon: MapPinIcon, text: dict.history.timelineHotel },
    { Icon: ClockIcon, text: dict.history.timelineToday },
  ];

  return (
    <>
      <SEO slug="historia" title={seo.title[lang]} description={seo.description[lang]} />
      <Breadcrumbs items={[{ label: dict.nav.home, to: path('') }, { label: dict.nav.history }]} />
      <PageMasthead eyebrow={dict.history.title} title={dict.history.lead} subtitle={business.history.conceptLine[lang]} index="00" word="HISTORIA" tone="cream" />

      <section ref={reveal1} className="reveal-section reveal-from-right container-page grid gap-12 py-20 lg:grid-cols-[0.72fr_1.28fr] lg:items-center lg:py-28">
        <div className="lg:pr-8">
          <p className="font-display text-sm italic text-caramel">01 — {lang === 'en' ? 'The beginning' : 'El comienzo'}</p>
          <h2 className="mt-5 font-display text-4xl font-semibold leading-[0.98] text-navy-600 dark:text-cream sm:text-5xl">{dict.history.timelinePioneer}</h2>
          <p className="mt-6 text-base leading-relaxed text-ink-700 dark:text-cream/70">{dict.history.p1}</p>
        </div>
        <div className="relative aspect-[4/5] overflow-hidden rounded-t-[11rem] sm:aspect-[5/4] sm:rounded-t-[15rem]">
          <img ref={parallax1} src={coffeeHour7} alt={lang === 'en' ? 'Coffee Hour patio in Chapala' : 'Patio de Coffee Hour en Chapala'} width={1240} height={930} className="absolute inset-x-0 -top-[8%] h-[116%] w-full object-cover" />
          <span className="absolute bottom-7 right-7 flex h-24 w-24 items-center justify-center rounded-full bg-caramel text-center text-[10px] font-bold uppercase tracking-[0.16em] text-[#17120e] shadow-xl">Est.<br />2003</span>
        </div>
      </section>

      <section ref={reveal2} className="reveal-section reveal-from-left bg-[#17120e] py-20 text-white sm:py-28">
        <div className="container-page grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="relative order-2 aspect-[5/4] overflow-hidden rounded-[48%_48%_2rem_2rem] lg:order-1">
            <img ref={parallax2} src={coffeeHour4} alt={lang === 'en' ? 'A table at Coffee Hour' : 'Una mesa en Coffee Hour'} width={1240} height={910} loading="lazy" className="absolute inset-x-0 -top-[7%] h-[114%] w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#17120e]/45 to-transparent" />
            <p className="absolute bottom-7 left-7 max-w-xs font-display text-xl italic text-white">“{dict.history.conceptBody}”</p>
          </div>
          <div className="order-1 lg:order-2 lg:pl-8">
            <p className="font-display text-sm italic text-caramel">02 — {lang === 'en' ? 'A meeting place' : 'Un punto de encuentro'}</p>
            <h2 className="mt-5 font-display text-4xl font-semibold leading-[0.98] sm:text-5xl">{dict.history.conceptTitle}</h2>
            <p className="mt-6 text-base leading-relaxed text-white/70">{dict.history.p2}</p>
            <p className="mt-7 border-l border-caramel pl-5 text-sm leading-relaxed text-white/55">{business.positioning[lang]}</p>
          </div>
        </div>
      </section>

      <section ref={reveal3} className="reveal-section reveal-from-right container-page grid gap-12 py-20 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:py-28">
        <div className="lg:pr-8">
          <p className="font-display text-sm italic text-caramel">03 — {lang === 'en' ? 'Coffee Hour today' : 'Coffee Hour hoy'}</p>
          <h2 className="mt-5 font-display text-4xl font-semibold leading-[0.98] text-navy-600 dark:text-cream sm:text-5xl">{dict.history.timelineToday}</h2>
          <p className="mt-6 text-base leading-relaxed text-ink-700 dark:text-cream/70">{dict.history.p3}</p>
        </div>
        <div className="relative pb-16 sm:pb-24">
          <div className="relative aspect-[16/11] overflow-hidden rounded-br-[9rem]">
            <img ref={parallax3} src={heroInterior} alt={lang === 'en' ? 'Coffee bar at Coffee Hour' : 'Barra de café de Coffee Hour'} width={1240} height={930} loading="lazy" className="absolute inset-x-0 -top-[8%] h-[116%] w-full object-cover" />
          </div>
          <div className="absolute -bottom-2 left-6 max-w-[260px] rotate-[-3deg] bg-caramel p-6 text-[#17120e] shadow-2xl sm:left-12">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em]">Chapala · Jalisco</p>
            <p className="mt-3 font-display text-xl italic leading-tight">{business.history.hotelPartnership[lang]}</p>
          </div>
        </div>
      </section>

      <section className="bg-cream-soft py-20 dark:bg-white/5">
        <div className="container-page">
          <h2 className="font-display text-4xl font-semibold text-navy-600 dark:text-cream">{dict.history.timelineTitle}</h2>
          <ol className="mt-10 grid border-t border-coffee-900/20 dark:border-white/20 md:grid-cols-3">
            {milestones.map(({ Icon, text }, index) => (
              <li key={text} className="border-b border-coffee-900/20 py-7 dark:border-white/20 md:border-b-0 md:border-r md:px-7 md:first:pl-0 md:last:border-r-0">
                <div className="flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-coffee-700 text-caramel"><Icon className="h-4 w-4" /></span>
                  <span className="font-display text-xs italic text-caramel">0{index + 1}</span>
                </div>
                <p className="mt-5 text-sm font-semibold leading-relaxed text-ink-900 dark:text-cream">{text}</p>
              </li>
            ))}
          </ol>
          <p className="mt-10 max-w-3xl border-l-2 border-caramel pl-5 text-xs leading-relaxed text-ink-700/70 dark:text-cream/55">{dict.history.confirmNote}</p>
        </div>
      </section>
    </>
  );
}
