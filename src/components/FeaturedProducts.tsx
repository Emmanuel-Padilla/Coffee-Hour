import { Link } from 'react-router-dom';
import { featuredProducts, type FeaturedProduct } from '@/data/featured';
import { useLanguage } from '@/context/LanguageContext';
import { useLocalizedPath } from '@/hooks/useLocalizedPath';
import { useParallax } from '@/hooks/useParallax';
import { formatPrice } from '@/lib/format';
import { resolveImage } from '@/lib/images';
import { ArrowRightIcon, CoffeeCupIcon } from '@/components/icons';

function getProduct(name: string, fallback: number): FeaturedProduct {
  return featuredProducts.find((product) => product.item.name === name) ?? featuredProducts[fallback]!;
}

export default function FeaturedProducts() {
  const { lang } = useLanguage();
  const path = useLocalizedPath();
  const featureImage = useParallax<HTMLImageElement>(24);

  const chilaquiles = getProduct('Chilaquiles Verdes / Rojos / Divorciados', 0);
  const croissant = getProduct('Croissant Mañanero', 1);
  const frappe = getProduct('Frappé Chocolate Dálmata', 5);
  const cappuccino = getProduct('Capuchino', 3);
  const crepe = getProduct('Crepa de Nutella', 6);
  const supportLabel = lang === 'en' ? 'Supporting image' : 'Imagen de apoyo';

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:auto-rows-[290px] lg:grid-cols-12">
      <Link
        to={path(`menu/${chilaquiles.categorySlug}`)}
        className="group relative min-h-[520px] overflow-hidden rounded-[2rem] bg-[#17120e] shadow-2xl md:col-span-2 lg:col-span-7 lg:row-span-2 lg:min-h-0"
      >
        <img
          ref={featureImage}
          src={resolveImage(chilaquiles.photo!)}
          alt="Chilaquiles servidos en Coffee Hour"
          loading="lazy"
          decoding="async"
          className="absolute inset-x-0 -top-[8%] h-[116%] w-full object-cover transition-[filter] duration-500 group-hover:brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#17120e] via-[#17120e]/5 to-transparent" />
        <span className="absolute left-5 top-5 rounded-full bg-[#17120e]/70 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.18em] text-white/75 backdrop-blur-md">
          {supportLabel}
        </span>
        <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8 lg:p-10">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-caramel">{chilaquiles.categoryName[lang]}</p>
              <h3 className="mt-2 max-w-lg font-display text-3xl font-semibold leading-tight sm:text-4xl">{chilaquiles.item.name}</h3>
            </div>
            <span className="shrink-0 rounded-full bg-cream px-4 py-2 font-display text-lg font-bold text-coffee-700">
              {formatPrice(chilaquiles.item.price, lang)}
            </span>
          </div>
          <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white/80">
            {lang === 'en' ? 'See breakfast' : 'Ver desayunos'}
            <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </Link>

      <Link
        to={path(`menu/${croissant.categorySlug}`)}
        className="group grid min-h-[300px] overflow-hidden rounded-[2rem] bg-[#d7b891] sm:grid-cols-[0.9fr_1.1fr] md:col-span-2 lg:col-span-5 lg:min-h-0"
      >
        <div className="relative min-h-[220px] overflow-hidden sm:min-h-0">
          <img
            src={resolveImage(croissant.photo!)}
            alt={croissant.item.name}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />
        </div>
        <div className="flex flex-col justify-between p-6 text-[#281d15]">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-60">{croissant.categoryName[lang]}</span>
            <h3 className="mt-3 font-display text-2xl font-semibold leading-tight">{croissant.item.name}</h3>
          </div>
          <div className="mt-6 flex items-center justify-between">
            <span className="font-display text-xl font-bold">{formatPrice(croissant.item.price, lang)}</span>
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#281d15]/30 transition group-hover:bg-[#281d15] group-hover:text-white">
              <ArrowRightIcon className="h-4 w-4" />
            </span>
          </div>
        </div>
      </Link>

      <Link
        to={path(`menu/${frappe.categorySlug}`)}
        className="group relative min-h-[380px] overflow-hidden rounded-[2rem] md:min-h-[340px] lg:col-span-3 lg:min-h-0"
      >
        <img
          src={resolveImage(frappe.photo!)}
          alt="Frappés preparados en Coffee Hour"
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#17120e]/95 via-transparent to-transparent" />
        <span className="absolute left-4 top-4 rounded-full bg-[#17120e]/70 px-2.5 py-1 text-[8px] font-bold uppercase tracking-[0.16em] text-white/75 backdrop-blur-md">
          {supportLabel}
        </span>
        <div className="absolute inset-x-0 bottom-0 p-5 text-white">
          <h3 className="font-display text-xl font-semibold leading-tight">{frappe.item.name}</h3>
          <p className="mt-2 text-sm font-bold text-caramel">{formatPrice(frappe.item.price, lang)}</p>
        </div>
      </Link>

      <Link
        to={path(`menu/${cappuccino.categorySlug}`)}
        className="group flex min-h-[280px] flex-col justify-between overflow-hidden rounded-[2rem] bg-coffee-700 p-6 text-cream md:min-h-[340px] lg:col-span-2 lg:min-h-0"
      >
        <div className="flex items-start justify-between">
          <CoffeeCupIcon className="h-8 w-8 text-caramel" />
          <span className="font-display text-lg font-bold text-caramel">{formatPrice(cappuccino.item.price, lang)}</span>
        </div>
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-cream/60">{cappuccino.categoryName[lang]}</p>
          <h3 className="mt-2 font-display text-3xl font-semibold leading-none">{cappuccino.item.name}</h3>
          <ArrowRightIcon className="mt-5 h-5 w-5 transition-transform group-hover:translate-x-2" />
        </div>
      </Link>

      <Link
        to={path(`menu/${crepe.categorySlug}`)}
        className="group relative flex min-h-[280px] flex-col justify-between overflow-hidden rounded-[2rem] border border-coffee-900/10 bg-cream p-6 text-coffee-800 md:min-h-[340px] lg:col-span-3 lg:min-h-0"
      >
        <span className="absolute -right-5 -top-12 font-display text-[9rem] italic leading-none text-coffee-700/[0.07]">C</span>
        <p className="relative text-[10px] font-bold uppercase tracking-[0.2em] text-coffee-700/60">{crepe.categoryName[lang]}</p>
        <div className="relative">
          <h3 className="font-display text-3xl font-semibold leading-none">{crepe.item.name}</h3>
          <div className="mt-6 flex items-center justify-between">
            <span className="font-display text-xl font-bold text-caramel">{formatPrice(crepe.item.price, lang)}</span>
            <ArrowRightIcon className="h-5 w-5 transition-transform group-hover:translate-x-2" />
          </div>
        </div>
      </Link>
    </div>
  );
}
