import platillo1 from '@/assets/images/platillo1.webp';
import platillo2 from '@/assets/images/platillo2.webp';
import platillo3 from '@/assets/images/platillo3.webp';
import platillo4 from '@/assets/images/platillo4.webp';
import platillo5 from '@/assets/images/platillo5.webp';
import platillo6 from '@/assets/images/platillo6.webp';
import heroInterior from '@/assets/images/hero-interior.webp';
import coffeehour4 from '@/assets/images/coffeehour-4.webp';
import coffeehour7 from '@/assets/images/coffeehour-7.webp';

/**
 * Explicit map (not a directory glob) so Vite only bundles images actually referenced by
 * data files — a wildcard glob would eagerly pull in every asset in the folder, including
 * ones no page ever renders.
 */
const imageMap: Record<string, string> = {
  'platillo1.webp': platillo1,
  'platillo2.webp': platillo2,
  'platillo3.webp': platillo3,
  'platillo4.webp': platillo4,
  'platillo5.webp': platillo5,
  'platillo6.webp': platillo6,
  'hero-interior.webp': heroInterior,
  'coffeehour-4.webp': coffeehour4,
  'coffeehour-7.webp': coffeehour7,
};

/** Resolves a bare filename (as stored in data files) to its Vite-bundled asset URL. */
export function resolveImage(file: string): string {
  return imageMap[file] ?? '';
}
