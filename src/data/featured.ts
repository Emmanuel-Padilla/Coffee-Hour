import { menuCategories } from '@/data/menu';
import type { MenuItem } from '@/data/types';

/**
 * References into the real menu (single source of truth for price/name) plus, only where a
 * real photo genuinely exists, the matching gallery file — never a stand-in photo for an
 * unphotographed dish.
 */
const featuredRefs: { categorySlug: string; itemName: string; photo?: string }[] = [
  { categorySlug: 'desayunos', itemName: 'Chilaquiles Verdes / Rojos / Divorciados', photo: 'platillo1.webp' },
  { categorySlug: 'desayunos', itemName: 'Croissant Mañanero', photo: 'platillo3.webp' },
  { categorySlug: 'desayunos', itemName: 'Bagel Bariloche' },
  { categorySlug: 'bebidas-calientes', itemName: 'Capuchino' },
  { categorySlug: 'bebidas-calientes', itemName: 'Latte Caliente' },
  { categorySlug: 'bebidas-frias', itemName: 'Frappé Chocolate Dálmata', photo: 'platillo6.webp' },
  { categorySlug: 'postres-crepas', itemName: 'Crepa de Nutella' },
  { categorySlug: 'snacks', itemName: 'Hamburguesa Gourmet' },
];

export interface FeaturedProduct {
  item: MenuItem;
  categorySlug: string;
  categoryName: { es: string; en: string };
  photo?: string;
}

export const featuredProducts: FeaturedProduct[] = featuredRefs.reduce<FeaturedProduct[]>((acc, ref) => {
  const category = menuCategories.find((c) => c.slug === ref.categorySlug);
  const item = category?.subcategories.flatMap((s) => s.items).find((i) => i.name === ref.itemName);
  if (category && item) {
    acc.push({ item, categorySlug: category.slug, categoryName: category.shortName, photo: ref.photo });
  }
  return acc;
}, []);
