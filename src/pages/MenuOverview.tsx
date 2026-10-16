import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import CategoryCard from '@/components/CategoryCard';
import MenuSearch from '@/components/MenuSearch';
import { useLanguage } from '@/context/LanguageContext';
import { useLocalizedPath } from '@/hooks/useLocalizedPath';
import { menuCategories } from '@/data/menu';
import { pageSeo } from '@/data/seo';
import JsonLd from '@/components/JsonLd';
import { menuSchema } from '@/lib/schema';
import { getCategoryStyle } from '@/lib/categoryStyles';
import PageMasthead from '@/components/PageMasthead';

export default function MenuOverview() {
  const { dict, lang } = useLanguage();
  const path = useLocalizedPath();
  const seo = pageSeo['menu'];
  const totalItems = menuCategories.reduce((n, c) => n + c.subcategories.reduce((m, s) => m + s.items.length, 0), 0);

  return (
    <>
      <SEO slug="menu" title={seo.title[lang]} description={seo.description[lang]} />
      <JsonLd data={menuSchema(lang)} />
      <Breadcrumbs items={[{ label: dict.nav.home, to: path('') }, { label: dict.nav.menu }]} />

      <PageMasthead eyebrow={`${totalItems}+ ${lang === 'en' ? 'real products' : 'productos reales'}`} title={dict.menu.title} subtitle={dict.menu.lead} index="01" word="MENÚ" />

      <div className="container-page pt-10">
          <div className="no-scrollbar flex gap-2.5 overflow-x-auto pb-2">
            {menuCategories.map((cat) => {
              const style = getCategoryStyle(cat.slug);
              const Icon = style.icon;
              return (
                <a
                  key={cat.slug}
                  href={`#cat-${cat.slug}`}
                  className="inline-flex min-w-max items-center gap-2 rounded-full border border-ink-900/15 px-4 py-2.5 text-sm font-semibold text-ink-900 transition hover:-translate-y-0.5 hover:border-caramel hover:text-coffee-600 dark:border-white/15 dark:text-cream"
                >
                  <Icon className="h-4 w-4 text-coffee-600 dark:text-caramel" />
                  {cat.shortName[lang]}
                </a>
              );
            })}
          </div>
      </div>

      <div className="container-page py-8">
        <MenuSearch />
      </div>

      <section className="container-page grid grid-cols-1 gap-5 pb-12 md:grid-cols-2 lg:grid-cols-12">
        {menuCategories.map((cat, index) => (
          <div
            key={cat.slug}
            id={`cat-${cat.slug}`}
            className={`scroll-mt-28 ${index === 0 ? 'md:col-span-2 lg:col-span-7' : index === 1 ? 'lg:col-span-5' : 'lg:col-span-4'}`}
          >
            <CategoryCard category={cat} />
          </div>
        ))}
      </section>

      <div className="container-page pb-20">
        <p className="text-xs text-ink-700/70 dark:text-cream/50">{dict.menu.disclaimer}</p>
      </div>
    </>
  );
}
