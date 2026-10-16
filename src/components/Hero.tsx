import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';
import { useLocalizedPath } from '@/hooks/useLocalizedPath';
import { business } from '@/data/business';
import { trackEvent } from '@/lib/analytics';
import { useParallax } from '@/hooks/useParallax';
import { ArrowRightIcon, ClockIcon, MapPinIcon, CoffeeCupIcon } from '@/components/icons';
import heroImg from '@/assets/images/coffeehour-7.webp';
import detailImg from '@/assets/images/hero-interior.webp';

export default function Hero() {
  const { dict, lang } = useLanguage();
  const path = useLocalizedPath();
  const parallaxRef = useParallax<HTMLImageElement>(38);

  return (
    <section className="relative -mt-16 min-h-[800px] overflow-hidden bg-[#17120e] pt-16 text-white sm:-mt-20 sm:pt-20 lg:min-h-[880px]">
      <div className="absolute inset-0 lg:left-[29%]">
        <img
          ref={parallaxRef}
          src={heroImg}
          alt="Patio y barra de Coffee Hour Chapala"
          width={1240}
          height={930}
          fetchPriority="high"
          loading="eager"
          className="absolute inset-x-0 -top-[6%] h-[112%] w-full object-cover object-center"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-[#17120e] via-[#17120e]/25 to-[#17120e]/10 lg:bg-[linear-gradient(90deg,#17120e_0%,rgba(23,18,14,.98)_26%,rgba(23,18,14,.62)_53%,rgba(23,18,14,.06)_82%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_45%,transparent_0%,rgba(23,18,14,.12)_48%,rgba(23,18,14,.65)_100%)]" />
      <div className="pointer-events-none absolute -right-12 top-24 hidden font-display text-[16rem] font-bold leading-none text-white/[0.055] xl:block">2003</div>

      <div className="container-page relative flex min-h-[720px] flex-col justify-end pb-10 pt-28 sm:min-h-[800px] sm:pb-14 lg:justify-center lg:pb-20 lg:pt-40">
        <div className="max-w-[780px]">
          <div className="animate-fadeUp flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.28em] text-caramel">
            <span className="h-px w-10 bg-caramel" />
            {lang === 'en' ? 'Coffee · food · conversation' : 'Café · cocina · conversación'}
          </div>

          <h1 className="animate-fadeUp mt-6 font-display text-[4rem] font-semibold leading-[0.82] tracking-[-0.055em] text-cream sm:text-[6rem] lg:text-[7.7rem] [animation-delay:80ms]">
            <span className="block">Coffee Hour</span>
            <span className="ml-[12%] block italic text-caramel sm:ml-[18%]">Chapala</span>
          </h1>

          <div className="animate-fadeUp mt-9 max-w-xl border-l border-caramel/80 pl-5 sm:ml-[18%] sm:pl-7 [animation-delay:160ms]">
            <p className="font-display text-xl font-medium leading-snug text-white sm:text-2xl">{dict.home.heroSubtitle}</p>
            <p className="mt-3 max-w-lg text-sm leading-relaxed text-white/70 sm:text-base">{dict.home.heroBody}</p>
          </div>

          <div className="animate-fadeUp mt-8 flex flex-wrap gap-3 sm:ml-[18%] [animation-delay:240ms]">
            <Link
              to={path('menu')}
              onClick={() => trackEvent('click_view_menu', { location: 'hero' })}
              className="group inline-flex items-center gap-5 rounded-full bg-caramel px-6 py-3.5 text-sm font-bold text-[#17120e] transition hover:-translate-y-0.5 hover:bg-cream"
            >
              {dict.cta.viewMenu}
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to={path('contacto')}
              onClick={() => trackEvent('click_directions', { location: 'hero' })}
              className="inline-flex items-center rounded-full border border-white/30 bg-[#17120e]/20 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:-translate-y-0.5 hover:border-white/60 hover:bg-white/10"
            >
              {dict.cta.getDirections}
            </Link>
          </div>
        </div>

        <div className="mt-12 grid gap-3 border-t border-white/15 pt-5 text-xs text-white/70 sm:grid-cols-3 lg:absolute lg:bottom-12 lg:left-8 lg:mt-0 lg:w-[620px] lg:pt-5 xl:left-[max(2rem,calc((100vw-1280px)/2+2rem))]">
          <div className="flex items-center gap-2.5">
            <ClockIcon className="h-4 w-4 shrink-0 text-caramel" />
            <span>{dict.common.openDaily}</span>
          </div>
          <div className="flex items-center gap-2.5">
            <MapPinIcon className="h-4 w-4 shrink-0 text-caramel" />
            <span>{dict.common.inTheCenter}</span>
          </div>
          <div className="flex items-center gap-2.5">
            <CoffeeCupIcon className="h-4 w-4 shrink-0 text-caramel" />
            <span>{dict.common.yearsOfHistory.replace('{years}', String(business.history.yearsClaim))}</span>
          </div>
        </div>

        <div className="absolute bottom-12 right-8 hidden w-64 rotate-2 border border-white/15 bg-[#17120e]/75 p-3 shadow-2xl backdrop-blur-md xl:block">
          <div className="aspect-[16/10] overflow-hidden">
            <img src={detailImg} alt="Barra de Coffee Hour" width={1240} height={930} className="h-full w-full object-cover transition duration-700 hover:scale-105" />
          </div>
          <div className="flex items-center justify-between gap-3 px-1 pb-1 pt-3">
            <span className="font-display text-sm italic text-cream">{dict.common.since}</span>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-caramel">Est. 2003</span>
          </div>
        </div>

        <p className="sr-only">{dict.home.heroTitle}. {business.address.full[lang]}</p>
      </div>
    </section>
  );
}
