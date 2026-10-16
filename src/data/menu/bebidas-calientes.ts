import type { MenuCategory } from '@/data/types';

/** Source: https://coffeehourchapala.com/bebidas-calientes (official menu page). */
export const bebidasCalientes: MenuCategory = {
  slug: 'bebidas-calientes',
  name: { es: 'Bebidas Calientes', en: 'Hot Drinks' },
  shortName: { es: 'Calientes', en: 'Hot Drinks' },
  description: {
    es: 'Espresso, cafés preparados y chocolates calientes.',
    en: 'Espresso, crafted coffees and hot chocolates.',
  },
  subcategories: [
    {
      name: { es: 'Espresso', en: 'Espresso' },
      items: [
        { name: 'Espresso Sencillo', price: 37 },
        { name: 'Espresso Doble', price: 45 },
        { name: 'Espresso con Panna', price: 59 },
        { name: 'Espresso Cortado', price: 53 },
        { name: 'Espresso Affogato', price: 70 },
        { name: 'Carajillo', price: 145 },
      ],
    },
    {
      name: { es: 'Espresso Americano', en: 'Americano' },
      items: [
        { name: 'Espresso Americano', price: 37 },
        { name: 'Espresso con Kahlúa', price: 69 },
        { name: 'Espresso con Baileys', price: 105 },
      ],
    },
    {
      name: { es: 'Capuchino', en: 'Cappuccino' },
      items: [
        { name: 'Capuchino', price: 50 },
        { name: 'Capuchino Moka', price: 65 },
        { name: 'Capuchino con Cajeta', price: 63 },
        { name: 'Capuchino con Baileys', price: 110 },
        { name: 'Capuchino con Kahlúa', price: 75 },
        { name: 'Capuchino Grande', price: 75 },
        { name: 'Capuchino Saborizado', price: 65 },
      ],
    },
    {
      name: { es: 'Latte', en: 'Latte' },
      items: [
        { name: 'Latte Caliente', price: 60 },
        { name: 'Latte Caliente Saborizado', price: 50 },
      ],
    },
    {
      name: { es: 'Chocolates', en: 'Hot Chocolate' },
      items: [
        { name: 'Chocolate Oscuro', price: 63 },
        { name: 'Chocolate Oscuro con Menta', price: 80 },
        { name: 'Chocolate Blanco', price: 63 },
        { name: 'Chocolate Dálmata', price: 70 },
        { name: 'Chocolate Oscuro con Bombones', price: 80 },
      ],
    },
  ],
};
