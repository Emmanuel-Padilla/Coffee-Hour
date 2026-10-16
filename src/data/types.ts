export type Lang = 'es' | 'en';

export interface Localized {
  es: string;
  en: string;
}

export interface MenuItem {
  /** Real product name from the official menu — kept identical in both languages. */
  name: string;
  /** Short descriptor, only when the official menu itself specified it (e.g. a parenthetical). Never invented. */
  note?: Localized;
  /** Price in MXN. Null means the official source did not list a confirmed price. */
  price: number | null;
}

export interface MenuSubcategory {
  name: Localized;
  items: MenuItem[];
}

export interface MenuCategory {
  slug: string;
  name: Localized;
  shortName: Localized;
  description: Localized;
  heroNote?: Localized;
  subcategories: MenuSubcategory[];
}
