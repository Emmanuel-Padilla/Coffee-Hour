import type { ComponentType, SVGProps } from 'react';
import { CroissantIcon, SandwichIcon, CakeIcon, FlameIcon, SnowflakeIcon, CoffeeCupIcon } from '@/components/icons';

export interface CategoryStyle {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  accent: string;
  ring: string;
}

export const categoryStyles: Record<string, CategoryStyle> = {
  desayunos: { icon: CroissantIcon, accent: 'from-amber-400/25 to-amber-500/5', ring: 'group-hover:ring-amber-400/40' },
  snacks: { icon: SandwichIcon, accent: 'from-orange-400/25 to-orange-500/5', ring: 'group-hover:ring-orange-400/40' },
  'postres-crepas': { icon: CakeIcon, accent: 'from-pink-400/25 to-pink-500/5', ring: 'group-hover:ring-pink-400/40' },
  'bebidas-calientes': { icon: FlameIcon, accent: 'from-coffee-400/25 to-coffee-500/5', ring: 'group-hover:ring-coffee-400/40' },
  'bebidas-frias': { icon: SnowflakeIcon, accent: 'from-sky-400/25 to-sky-500/5', ring: 'group-hover:ring-sky-400/40' },
};

export const defaultCategoryStyle: CategoryStyle = {
  icon: CoffeeCupIcon,
  accent: 'from-coffee-400/25 to-coffee-500/5',
  ring: '',
};

export function getCategoryStyle(slug: string): CategoryStyle {
  return categoryStyles[slug] ?? defaultCategoryStyle;
}
