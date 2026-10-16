import { useState } from 'react';
import { Link } from 'react-router-dom';
import { menuCategories } from '@/data/menu';
import { useLanguage } from '@/context/LanguageContext';
import { useLocalizedPath } from '@/hooks/useLocalizedPath';
import { formatPrice } from '@/lib/format';
import { resolveImage } from '@/lib/images';
import { getCategoryStyle } from '@/lib/categoryStyles';
import { ArrowRightIcon } from '@/components/icons';

const categoryPhotography: Record<string, string> = {
  desayunos: 'platillo1.webp',
  snacks: 'platillo3.webp',
  'postres-crepas': 'platillo5.webp',
  'bebidas-calientes': 'platillo2.webp',
  'bebidas-frias': 'platillo6.webp',
};

const categoryPosition: Record<string, string> = {
  desayunos: 'object-center',
  snacks: 'object-center',
  'postres-crepas': 'object-center',
  'bebidas-calientes': 'object-center',
  'bebidas-frias': 'object-center',
};

export default function MenuExplorer() {
  const { dict, lang } = useLanguage();
  const path = useLocalizedPath();
  const [activeSlug, setActiveSlug] = useState(menuCategories[0].slug);
  const activeIndex = menuCategories.findIndex((category) => category.slug === activeSlug);
  const activeCategory = menuCategories[activeIndex] ?? menuCategories[0];
  const activeItems = activeCategory.subcategories.flatMap((subcategory) => subcategory.items).slice(0, 4);
  const itemCount = activeCategory.subcategories.reduce((total, subcategory) => total + subcategory.items.length, 0);
  const ActiveIcon = getCategoryStyle(activeCategory.slug).icon;

  return (
    <section className="relative overflow-hidden bg-[#17120e] py-20 text-white sm:py-24 lg:py-28">
      <div className="pointer-events-none absolute inset-0 opacity-50 [background:radial-gradient(circle_at_12%_20%,rgba(201,120,32,.22),transparent_28%),radial-gradient(circle_at_85%_80%,rgba(101,67,33,.35),transparent_34%)]" />
      <div className="pointer-events-none absolute left-0 top-24 hidden -translate-x-1/3 font-display text-[15rem] leading-none text-white/[0.025] xl:block">
        MENU
      </div>

      <div className="container-page relative">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.26em] text-caramel">
              <span className="h-px w-8 bg-caramel" />
              {dict.common.since}
            </p>
            <h2 className="mt-5 max-w-xl font-display text-4xl font-semibold leading-[0.96] sm:text-5xl lg:text-6xl">
              {dict.home.categoriesTitle}
            </h2>
          </div>
          <div className="lg:pb-1">
            <p className="max-w-xl text-base leading-relaxed text-white/60 sm:text-lg">{dict.home.categoriesSubtitle}</p>
            <Link
              to={path('menu')}
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cream transition-colors hover:text-caramel"
            >
              {dict.cta.seeAllMenu}
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="no-scrollbar -mx-4 mt-10 flex snap-x gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:px-0" role="tablist" aria-label={dict.home.categoriesTitle}>
          {menuCategories.map((category, index) => {
            const Icon = getCategoryStyle(category.slug).icon;
            const selected = category.slug === activeCategory.slug;
            return (
              <button
                key={category.slug}
                type="button"
                role="tab"
                aria-selected={selected}
                aria-controls="menu-category-panel"
                onClick={() => setActiveSlug(category.slug)}
                className={`group flex min-w-max snap-start items-center gap-3 rounded-full border px-4 py-3 text-left transition-all duration-300 sm:flex-1 sm:rounded-none sm:border-x-0 sm:border-b-0 sm:px-2 ${
                  selected
                    ? 'border-caramel bg-caramel text-[#17120e] sm:bg-transparent sm:text-white'
                    : 'border-white/15 text-white/55 hover:border-white/40 hover:text-white sm:border-white/15'
                }`}
              >
                <span className={`font-display text-xs ${selected ? 'text-[#17120e]/60 sm:text-caramel' : 'text-white/30'}`}>
                  0{index + 1}
                </span>
                <Icon className={`h-4 w-4 ${selected ? 'sm:text-caramel' : ''}`} />
                <span className="text-sm font-semibold">{category.shortName[lang]}</span>
              </button>
            );
          })}
        </div>

        <div
          id="menu-category-panel"
          role="tabpanel"
          className="mt-6 grid overflow-hidden rounded-[2rem] bg-cream-soft text-ink-900 shadow-[0_32px_90px_-28px_rgba(0,0,0,.65)] lg:min-h-[560px] lg:grid-cols-[1.2fr_0.8fr]"
        >
          <div className="group relative min-h-[390px] overflow-hidden sm:min-h-[480px] lg:min-h-full">
            <img
              key={activeCategory.slug}
              src={resolveImage(categoryPhotography[activeCategory.slug])}
              alt={`${activeCategory.name[lang]} — Coffee Hour Chapala`}
              loading="lazy"
              decoding="async"
              className={`absolute inset-0 h-full w-full animate-[fadeUp_450ms_ease-out_both] object-cover transition duration-700 group-hover:scale-[1.025] ${categoryPosition[activeCategory.slug]}`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#17120e]/95 via-[#17120e]/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 text-white sm:p-8">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-caramel">
                  {itemCount} {lang === 'en' ? 'options' : 'opciones'}
                </p>
                <h3 className="mt-2 max-w-md font-display text-4xl font-semibold leading-none sm:text-5xl">
                  {activeCategory.name[lang]}
                </h3>
              </div>
              <span className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-full border border-white/30 bg-white/10 backdrop-blur sm:flex">
                <ActiveIcon className="h-6 w-6" />
              </span>
            </div>
          </div>

          <div className="relative flex flex-col justify-between p-6 sm:p-8 lg:p-10">
            <div>
              <p className="font-display text-xl italic leading-relaxed text-coffee-700">{activeCategory.description[lang]}</p>
              <div className="mt-8 border-t border-coffee-900/15">
                {activeItems.map((item, index) => (
                  <div key={`${item.name}-${index}`} className="flex items-baseline justify-between gap-4 border-b border-coffee-900/15 py-4">
                    <span className="text-sm font-semibold text-ink-900">{item.name}</span>
                    <span className="shrink-0 font-display text-base font-semibold text-coffee-600">
                      {formatPrice(item.price, lang)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <Link
              to={path(`menu/${activeCategory.slug}`)}
              className="mt-8 inline-flex items-center justify-between rounded-full bg-[#17120e] px-5 py-4 text-sm font-semibold text-white transition hover:bg-coffee-600"
            >
              {dict.menu.viewCategory}
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
