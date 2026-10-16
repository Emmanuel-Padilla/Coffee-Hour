import { desayunos } from './desayunos';
import { snacks } from './snacks';
import { postresCrepas } from './postres-crepas';
import { bebidasCalientes } from './bebidas-calientes';
import { bebidasFrias } from './bebidas-frias';
import type { MenuCategory } from '@/data/types';

export const menuCategories: MenuCategory[] = [
  desayunos,
  snacks,
  postresCrepas,
  bebidasCalientes,
  bebidasFrias,
];

export function getCategory(slug: string): MenuCategory | undefined {
  return menuCategories.find((c) => c.slug === slug);
}

export { desayunos, snacks, postresCrepas, bebidasCalientes, bebidasFrias };

/** Flattened index used by the menu search component. */
export interface SearchableItem {
  categorySlug: string;
  categoryName: { es: string; en: string };
  subcategory: string;
  name: string;
  note?: { es: string; en: string };
  price: number | null;
}

export const searchIndex: SearchableItem[] = menuCategories.flatMap((cat) =>
  cat.subcategories.flatMap((sub) =>
    sub.items.map((item) => ({
      categorySlug: cat.slug,
      categoryName: cat.name,
      subcategory: sub.name.es,
      name: item.name,
      note: item.note,
      price: item.price,
    }))
  )
);
