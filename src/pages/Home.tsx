import { Link } from 'react-router-dom';
import Hero from '@/components/Hero';
import SectionHeading from '@/components/SectionHeading';
import MenuExplorer from '@/components/MenuExplorer';
import FeaturedProducts from '@/components/FeaturedProducts';
import ExperienceCard from '@/components/ExperienceCard';
import TestimonialsSection from '@/components/TestimonialsSection';
import SEO from '@/components/SEO';
import { useLanguage } from '@/context/LanguageContext';
import { useLocalizedPath } from '@/hooks/useLocalizedPath';
import { useParallax } from '@/hooks/useParallax';
import { experiences } from '@/data/experiences';
import { pageSeo } from '@/data/seo';
import { business } from '@/data/business';
import { trackEvent } from '@/lib/analytics';
import { CoffeeCupIcon, UsersIcon, MapPinIcon, ClockIcon } from '@/components/icons';
import BeanTexture from '@/components/BeanTexture';
import coffeeHour4 from '@/assets/images/coffeehour-4.webp';
import heroInterior from '@/assets/images/hero-interior.webp';
import ExperienceAtmosphere from '@/components/ExperienceAtmosphere';

const valuePropIcons = [CoffeeCupIcon, UsersIcon, MapPinIcon, ClockIcon];

export default function Home() {
  const { dict, lang } = useLanguage();
  const path = useLocalizedPath();
  const seo = pageSeo[''];
  const historyParallax = useParallax<HTMLImageElement>(35);

  return (
    <>
      <SEO slug="" title={seo.title[lang]} description={seo.description[lang]} />
      <Hero />

      {/* Brand value — editorial, numbered rhythm */}
      <section className="relative overflow-hidden bg-cream-soft py-20 dark:bg-[#1c1712] sm:py-24">
        <div className="pointer-events-none absolute -left-10 top-0 font-display text-[14rem] font-bold leading-none text-coffee-700/[0.04] sm:text-[22rem]">23</div>
        <div className="container-page relative grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-caramel">{dict.common.since}</p>
            <h2 className="mt-4 max-w-md font-display text-4xl font-semibold leading-[0.98] text-navy-600 dark:text-cream sm:text-5xl">
              {dict.home.valuePropsTitle}
            </h2>
            <p className="mt-5 max-w-sm leading-relaxed text-ink-700 dark:text-cream/70">{dict.home.valuePropsSubtitle}</p>
            <div className="mt-10 flex items-end gap-3">
              <span className="font-display text-7xl font-semibold leading-none text-caramel">{business.history.yearsClaim}</span>
              <span className="max-w-24 pb-1 text-xs font-bold uppercase tracking-[0.16em] text-coffee-700 dark:text-cream/60">
                {lang === 'en' ? 'years sharing the table' : 'años compartiendo la mesa'}
              </span>
            </div>
          </div>

          <div className="border-t border-coffee-900/15 dark:border-white/15">
            {dict.home.valueProps.map((vp, i) => {
              const Icon = valuePropIcons[i];
              return (
                <article key={vp.title} className="group grid gap-4 border-b border-coffee-900/15 py-7 transition-colors dark:border-white/15 sm:grid-cols-[64px_1fr_1.25fr] sm:items-start sm:gap-6">
                  <div className="flex items-center justify-between sm:block">
                    <span className="font-display text-sm italic text-caramel">0{i + 1}</span>
                    <Icon className="h-6 w-6 text-coffee-600 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 dark:text-caramel sm:mt-5" />
                  </div>
                  <h3 className="font-display text-2xl font-semibold leading-tight text-navy-600 dark:text-cream">{vp.title}</h3>
                  <p className="text-sm leading-relaxed text-ink-700 dark:text-cream/70">{vp.body}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interactive editorial menu explorer */}
      <MenuExplorer />

      {/* Featured products */}
      <section className="relative overflow-hidden py-20 sm:py-24">
        <div className="pointer-events-none absolute -right-28 top-8 h-80 w-80 rounded-full bg-caramel/10 blur-3xl" />
        <div className="container-page relative">
          <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <SectionHeading eyebrow={dict.common.since} title={dict.home.featuredTitle} />
            <p className="max-w-xl text-base leading-relaxed text-ink-700 dark:text-cream/70 lg:justify-self-end lg:text-lg">
              {dict.home.featuredSubtitle}
            </p>
          </div>
          <div className="mt-10">
            <FeaturedProducts />
          </div>
          <div className="mt-10 flex justify-end">
            <Link
              to={path('menu')}
              className="inline-flex items-center gap-2 rounded-full border border-coffee-600 px-6 py-3 text-sm font-semibold text-coffee-600 transition hover:bg-coffee-600 hover:text-white dark:border-caramel dark:text-caramel"
            >
              {dict.cta.seeAllMenu}
            </Link>
          </div>
        </div>
      </section>

      {/* History — sticky editorial collage */}
      <section className="relative py-20 sm:py-28">
        <div className="container-page grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.24em] text-caramel">
              <span className="h-px w-8 bg-caramel" />
              {dict.nav.history}
            </p>
            <h2 className="mt-5 max-w-md font-display text-4xl font-semibold leading-[0.98] text-navy-600 dark:text-cream sm:text-5xl">
              {dict.home.historyTeaserTitle}
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-ink-700 dark:text-cream/70">{dict.home.historyTeaserBody}</p>
            <Link
              to={path('historia')}
              className="mt-8 inline-flex items-center gap-3 border-b border-coffee-600 pb-2 text-sm font-bold text-coffee-600 transition hover:gap-5 dark:border-caramel dark:text-caramel"
            >
              {dict.cta.ourHistory}
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="relative pb-16 sm:pb-24">
            <div className="relative aspect-[4/5] overflow-hidden rounded-t-[8rem] sm:aspect-[5/4] sm:rounded-t-[12rem]">
              <img
                ref={historyParallax}
                src={coffeeHour4}
                alt="Ambiente de Coffee Hour Chapala"
                loading="lazy"
                decoding="async"
                width={1200}
                height={900}
                className="absolute inset-x-0 -top-[8%] h-[116%] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#17120e]/45 to-transparent" />
              <span className="absolute bottom-6 left-6 font-display text-6xl font-semibold text-white sm:bottom-8 sm:left-8 sm:text-8xl">2003</span>
            </div>
            <div className="absolute -bottom-2 -left-2 w-[48%] rotate-[-3deg] bg-cream p-2 shadow-2xl dark:bg-[#17120e] sm:-left-8 sm:w-[42%] sm:p-3">
              <img src={heroInterior} alt="Barra original de Coffee Hour" loading="lazy" className="aspect-[4/3] w-full object-cover" />
              <p className="px-2 py-3 font-display text-sm italic text-coffee-700 dark:text-cream">{business.history.conceptLine[lang]}</p>
            </div>
            <div className="absolute -bottom-1 right-1 flex h-28 w-28 rotate-6 items-center justify-center rounded-full bg-caramel text-center text-[10px] font-bold uppercase tracking-[0.18em] text-[#17120e] shadow-xl sm:h-36 sm:w-36">
              {dict.common.inTheCenter}
            </div>
          </div>
        </div>
      </section>

      {/* Experiences */}
      <section className="relative overflow-hidden bg-[#17120e] py-20 sm:py-28">
        <BeanTexture />
        <div className="container-page relative">
          <div className="grid gap-6 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
            <SectionHeading light title={dict.home.experiencesTitle} />
            <p className="max-w-lg text-lg leading-relaxed text-white/60 lg:justify-self-end">{dict.home.experiencesSubtitle}</p>
          </div>
          <div className="mt-14">
            <ExperienceAtmosphere />
          </div>
          <div className="mt-16 grid gap-5 lg:grid-cols-2">
            {experiences.map((exp, index) => (
              <ExperienceCard key={exp.slug} experience={exp} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-cream-soft py-20 dark:bg-white/5 sm:py-24">
        <div className="container-page">
          <p className="mb-8 text-xs font-bold uppercase tracking-[0.24em] text-caramel">{dict.home.testimonialsTitle}</p>
          <TestimonialsSection />
        </div>
      </section>

      {/* CTA banner */}
      <section className="relative overflow-hidden bg-caramel py-20 text-[#17120e] sm:py-24">
        <div className="pointer-events-none absolute -bottom-12 left-1/2 -translate-x-1/2 whitespace-nowrap font-display text-[9rem] font-bold leading-none text-white/[0.11] sm:text-[15rem]">CHAPALA</div>
        <div className="container-page relative grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em]">Coffee Hour · Chapala</p>
            <h2 className="mt-4 max-w-3xl font-display text-5xl font-semibold leading-[0.92] sm:text-6xl lg:text-7xl">{dict.home.ctaBannerTitle}</h2>
            <p className="mt-5 max-w-xl text-base font-medium text-[#17120e]/70">{dict.home.ctaBannerBody}</p>
          </div>
          <div className="flex flex-col gap-3 lg:items-end">
            <Link
              to={path('contacto')}
              onClick={() => trackEvent('click_directions', { location: 'home-cta' })}
              className="inline-flex w-full items-center justify-between rounded-full bg-[#17120e] px-6 py-4 text-sm font-bold text-white transition hover:-translate-y-0.5 lg:max-w-xs"
            >
              {dict.cta.getDirections}
              <MapPinIcon className="h-4 w-4" />
            </Link>
            <a
              href={`tel:${business.phone.tel}`}
              onClick={() => trackEvent('click_phone', { location: 'home-cta' })}
              className="inline-flex w-full items-center justify-between rounded-full border border-[#17120e]/40 px-6 py-4 text-sm font-bold transition hover:-translate-y-0.5 hover:bg-white/20 lg:max-w-xs"
            >
              {dict.cta.callNow}
              <span>{business.phone.display}</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
