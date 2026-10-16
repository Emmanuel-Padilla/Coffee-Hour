import { Link } from 'react-router-dom';
import type { MenuCategory } from '@/data/types';
import { useLanguage } from '@/context/LanguageContext';
import { useLocalizedPath } from '@/hooks/useLocalizedPath';
import { formatPrice } from '@/lib/format';
import { ArrowRightIcon } from '@/components/icons';
import { getCategoryStyle } from '@/lib/categoryStyles';
import { resolveImage } from '@/lib/images';

const categoryImages: Record<string, string> = {
  desayunos: 'platillo1.webp',
  snacks: 'platillo3.webp',
  'postres-crepas': 'platillo5.webp',
  'bebidas-calientes': 'platillo2.webp',
  'bebidas-frias': 'platillo6.webp',
};

export default function CategoryCard({ category }: { category: MenuCategory }) {
  const { dict, lang } = useLanguage();
  const path = useLocalizedPath();
  const allItems = category.subcategories.flatMap((subcategory) => subcategory.items);
  const prices = allItems.map((item) => item.price).filter((price): price is number => price != null);
  const minPrice = prices.length ? Math.min(...prices) : null;
  const Icon = getCategoryStyle(category.slug).icon;

  return (
    <Link
      to={path(`menu/${category.slug}`)}
      className="group relative flex min-h-[390px] flex-col justify-end overflow-hidden rounded-[2rem] bg-[#17120e] text-white shadow-2xl"
    >
      <img
        src={resolveImage(categoryImages[category.slug])}
        alt={`${category.name[lang]} — Coffee Hour Chapala`}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#17120e] via-[#17120e]/20 to-transparent transition group-hover:via-[#17120e]/35" />
      <div className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-[#17120e]/30 backdrop-blur-sm">
        <Icon className="h-5 w-5 text-caramel" />
      </div>
      <div className="relative p-6 sm:p-7">
        <div className="flex items-end justify-between gap-5">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-caramel">{allItems.length} {lang === 'en' ? 'options' : 'opciones'}</p>
            <h3 className="mt-2 font-display text-3xl font-semibold leading-none">{category.name[lang]}</h3>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-white/70">{category.description[lang]}</p>
          </div>
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-[#17120e] transition group-hover:bg-caramel">
            <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </span>
        </div>
        <div className="mt-5 flex items-center justify-between border-t border-white/20 pt-4 text-xs text-white/60">
          <span>{dict.menu.viewCategory}</span>
          {minPrice != null && <span>{lang === 'en' ? 'From' : 'Desde'} {formatPrice(minPrice, lang)}</span>}
        </div>
      </div>
    </Link>
  );
}
