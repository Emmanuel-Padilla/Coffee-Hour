import type { MenuCategory } from '@/data/types';

/** Source: crepas listed on https://coffeehourchapala.com/snacks, regrouped here as their own
 * dessert-focused page as requested in the site structure. Same real names and prices. */
export const postresCrepas: MenuCategory = {
  slug: 'postres-crepas',
  name: { es: 'Postres y Crepas', en: 'Desserts & Crepes' },
  shortName: { es: 'Postres', en: 'Desserts' },
  description: {
    es: 'Crepas dulces, saladas y de la casa para cerrar con algo especial.',
    en: 'Sweet, savory and house-special crepes to end on something special.',
  },
  subcategories: [
    {
      name: { es: 'Crepas Dulces', en: 'Sweet Crepes' },
      items: [
        { name: 'Crepa de Nutella', price: 105 },
        { name: 'Crepa de Cajeta', price: 105 },
        { name: 'Crepa de Crema de Cacahuate', price: 105 },
        { name: 'Crepa de Queso Crema', price: 115 },
        { name: 'Crepa de Queso Crema y Frutas', price: 125 },
      ],
    },
    {
      name: { es: 'Crepas Saladas', en: 'Savory Crepes' },
      items: [
        { name: 'Crepa Jamón con Queso Mozzarella', price: 145 },
        { name: 'Crepa Italiana', price: 145 },
        { name: 'Crepa de Pollo', price: 175 },
        { name: 'Crepa Hawaiana', price: 150 },
      ],
    },
    {
      name: { es: 'Crepas Especiales', en: 'Signature Crepes' },
      items: [
        { name: 'Fruti Crepa', price: 140 },
        { name: 'Crepa Delicia', price: 130 },
        { name: 'Crepa Bombón', price: 130 },
        { name: 'Crepa Oreo', price: 130 },
        { name: 'Crepa KitKat', price: 130 },
        { name: 'Crepa M&M', price: 130 },
      ],
    },
  ],
};
