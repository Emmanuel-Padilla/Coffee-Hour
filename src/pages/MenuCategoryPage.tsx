import { useParams, Navigate } from 'react-router-dom';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import MenuSection from '@/components/MenuSection';
import JsonLd from '@/components/JsonLd';
import { useLanguage } from '@/context/LanguageContext';
import { useLocalizedPath } from '@/hooks/useLocalizedPath';
import { getCategory } from '@/data/menu';
import { pageSeo } from '@/data/seo';
import { business } from '@/data/business';
import { PhoneIcon } from '@/components/icons';
import { trackEvent } from '@/lib/analytics';
import { getCategoryStyle } from '@/lib/categoryStyles';
import type { RouteSlug } from '@/routes';
import { resolveImage } from '@/lib/images';

const categoryImages: Record<string, string> = {
  desayunos: 'platillo1.webp',
  snacks: 'platillo3.webp',
  'postres-crepas': 'platillo5.webp',
  'bebidas-calientes': 'platillo2.webp',
  'bebidas-frias': 'platillo6.webp',
};

export default function MenuCategoryPage() {
  const { category } = useParams<{ category: string }>();
  const { dict, lang } = useLanguage();
  const path = useLocalizedPath();

  const data = category ? getCategory(category) : undefined;
  if (!data) return <Navigate to={path('menu')} replace />;

  const seoKey = `menu/${data.slug}` as RouteSlug;
  const seo = pageSeo[seoKey];
  const style = getCategoryStyle(data.slug);
  const Icon = style.icon;
  const itemCount = data.subcategories.reduce((n, s) => n + s.items.length, 0);

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'MenuSection',
    name: data.name[lang],
    hasMenuItem: data.subcategories.flatMap((sub) =>
      sub.items.map((item) => ({
        '@type': 'MenuItem',
        name: item.name,
        ...(item.price != null ? { offers: { '@type': 'Offer', price: item.price, priceCurrency: 'MXN' } } : {}),
      }))
    ),
  };

  return (
    <>
      <SEO slug={seoKey} title={seo.title[lang]} description={seo.description[lang]} />
      <JsonLd data={schema} />
      <Breadcrumbs
        items={[
          { label: dict.nav.home, to: path('') },
          { label: dict.nav.menu, to: path('menu') },
          { label: data.name[lang] },
        ]}
      />

      <header className="relative min-h-[460px] overflow-hidden bg-[#17120e] text-white">
        <img src={resolveImage(categoryImages[data.slug])} alt={data.name[lang]} className="absolute inset-0 h-full w-full object-cover opacity-55" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#17120e] via-[#17120e]/75 to-[#17120e]/15" />
        <div className="container-page relative flex min-h-[460px] items-end py-14">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.22em] text-caramel">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-white/10"><Icon className="h-5 w-5" /></span>
              {itemCount} {lang === 'en' ? 'items on this menu' : 'productos en este menú'}
            </div>
            <h1 className="mt-6 font-display text-5xl font-semibold leading-[0.9] sm:text-7xl">{data.name[lang]}</h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70">{data.description[lang]}</p>
          </div>
        </div>
      </header>

      <section className="container-page grid grid-cols-1 gap-x-12 gap-y-12 py-16 md:grid-cols-2">
        {data.subcategories.map((sub) => (
          <MenuSection key={sub.name.es} subcategory={sub} categorySlug={data.slug} />
        ))}
      </section>

      <div className="container-page pb-16">
        <div className="flex flex-col items-start justify-between gap-4 rounded-2xl bg-cream-soft p-6 dark:bg-white/5 sm:flex-row sm:items-center">
          <p className="text-sm text-ink-700 dark:text-cream/70">{dict.menu.disclaimer}</p>
          <a
            href={`tel:${business.phone.tel}`}
            onClick={() => trackEvent('click_phone', { location: `menu-${data.slug}` })}
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-coffee-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-coffee-700"
          >
            <PhoneIcon className="h-4 w-4" />
            {dict.menu.callToOrder}
          </a>
        </div>
      </div>
    </>
  );
}
