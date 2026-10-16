/**
 * Per the brief: vigency, schedule and conditions for these experiences are not confirmed
 * in this pass, so prices are intentionally withheld and replaced with a "check availability"
 * call-to-action, exactly as instructed for unconfirmed pricing.
 */
export interface Experience {
  slug: string;
  name: { es: string; en: string };
  summary: { es: string; en: string };
  includes: { es: string[]; en: string[] };
  priceConfirmed: boolean;
  priceReference?: number; // kept for internal reference only — not rendered while priceConfirmed is false
}

export const experiences: Experience[] = [
  {
    slug: 'hangout-create',
    name: { es: 'Hangout & Create', en: 'Hangout & Create' },
    summary: {
      es: 'Una sesión de pintura para disfrutar en compañía, acompañada de una bebida y un snack de Coffee Hour.',
      en: 'A painting session to enjoy with company, paired with a drink and a snack from Coffee Hour.',
    },
    includes: {
      es: ['Sesión de pintura con materiales incluidos', 'Frappé clásico a elegir', 'Porción de papas o mini crepa'],
      en: ['Painting session with materials included', 'Choice of a classic frappé', 'Portion of fries or a mini crepe'],
    },
    priceConfirmed: false,
    priceReference: 230,
  },
  {
    slug: 'picoteo',
    name: { es: 'Picoteo', en: 'Picoteo' },
    summary: {
      es: 'Una tabla gourmet para compartir, pensada para acompañar una tarde tranquila en Coffee Hour.',
      en: 'A gourmet board to share, designed for a relaxed afternoon at Coffee Hour.',
    },
    includes: {
      es: ['Tabla gourmet de charcutería para compartir', 'Botella de vino tinto seleccionada'],
      en: ['Gourmet charcuterie board to share', 'Selected bottle of red wine'],
    },
    priceConfirmed: false,
    priceReference: 665,
  },
];
