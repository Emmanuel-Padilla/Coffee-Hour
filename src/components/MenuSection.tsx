import type { MenuSubcategory } from '@/data/types';
import { useLanguage } from '@/context/LanguageContext';
import { formatPrice } from '@/lib/format';
import { featuredProducts } from '@/data/featured';
import { HeartIcon } from '@/components/icons';

interface MenuSectionProps {
  subcategory: MenuSubcategory;
  categorySlug: string;
}

export default function MenuSection({ subcategory, categorySlug }: MenuSectionProps) {
  const { lang } = useLanguage();
  const popularNames = new Set(featuredProducts.filter((product) => product.categorySlug === categorySlug).map((product) => product.item.name));

  return (
    <section className="border-t border-coffee-900/20 pt-5 dark:border-white/20">
      <div className="flex items-baseline justify-between gap-4">
        <h2 className="font-display text-2xl font-semibold text-navy-600 dark:text-cream">{subcategory.name[lang]}</h2>
        <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-caramel">{subcategory.items.length} {lang === 'en' ? 'items' : 'opciones'}</span>
      </div>
      <ul className="mt-4">
        {subcategory.items.map((item, index) => (
          <li key={`${item.name}-${index}`} className="group flex items-start justify-between gap-5 border-b border-coffee-900/10 py-4 dark:border-white/10">
            <div>
              <p className="flex flex-wrap items-center gap-2 text-sm font-semibold text-ink-900 dark:text-cream">
                {item.name}
                {popularNames.has(item.name) && (
                  <span className="inline-flex items-center gap-1 text-[9px] font-bold uppercase tracking-[0.14em] text-caramel">
                    <HeartIcon className="h-3 w-3" />
                    {lang === 'en' ? 'Favorite' : 'Favorito'}
                  </span>
                )}
              </p>
              {item.note && <p className="mt-1 text-xs leading-relaxed text-ink-700/70 dark:text-cream/55">{item.note[lang]}</p>}
            </div>
            <span className={`shrink-0 font-display text-base font-semibold tabular-nums ${item.price == null ? 'text-ink-700/60 dark:text-cream/50' : 'text-coffee-600 dark:text-caramel'}`}>
              {formatPrice(item.price, lang)}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
