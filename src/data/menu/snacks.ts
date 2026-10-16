import type { MenuCategory } from '@/data/types';

/** Source: https://coffeehourchapala.com/snacks (official menu page). Crepas were moved to
 * their own "Postres y crepas" page for a clearer browsing experience — same real data, better grouping. */
export const snacks: MenuCategory = {
  slug: 'snacks',
  name: { es: 'Snacks y Alimentos', en: 'Snacks & Food' },
  shortName: { es: 'Snacks', en: 'Snacks' },
  description: {
    es: 'Baguettes, hamburguesas, ensaladas y aperitivos para compartir o disfrutar solo.',
    en: 'Baguettes, burgers, salads and appetizers to share or enjoy solo.',
  },
  subcategories: [
    {
      name: { es: 'Baguettes y Sándwiches', en: 'Baguettes & Sandwiches' },
      items: [
        { name: 'Baguette de Atún', price: 120 },
        { name: 'Baguette de Pavo', price: 120 },
        { name: 'Baguette Panela', price: 120 },
        { name: 'Baguette Vegetariano', price: 130 },
        { name: 'Baguette Queso Manchego', price: null },
        { name: 'Baguette Pollo a la Plancha', price: 140 },
        { name: 'Baguette Pollo Empanizado', price: 150 },
        { name: 'Baguette Pollo Empanizado BBQ', price: 150 },
        { name: 'Club Sándwich', price: 155 },
        { name: 'Baguette Selva Negra', price: 155 },
      ],
    },
    {
      name: { es: 'Hamburguesas', en: 'Burgers' },
      items: [
        { name: 'Hamburguesa Sencilla', price: 99 },
        { name: 'Hamburguesa Americana', price: 115 },
        { name: 'Hamburguesa Hawaiana', price: 130 },
        { name: 'Hamburguesa de Pollo a la Plancha', price: 137 },
        { name: 'Hamburguesa de Pollo Empanizado', price: 137 },
        { name: 'Hamburguesa de Camarón', price: 150 },
        { name: 'Hamburguesa Gourmet', price: 155 },
      ],
    },
    {
      name: { es: 'Croissants', en: 'Croissants' },
      items: [
        { name: 'Croissant Jamón con Queso', price: 110 },
        { name: 'Croissant con Queso Manchego', price: 99 },
        { name: 'Croissant Pollo a la Plancha', price: 130 },
        { name: 'Croissant Pollo Empanizado', price: 140 },
        { name: 'Croissant Philadelphia', price: 130 },
        { name: 'Croissant con Mermelada de Fresa', price: 65 },
        { name: 'Croissant Mañanero', price: 150 },
      ],
    },
    {
      name: { es: 'Aperitivos', en: 'Appetizers' },
      items: [
        { name: 'Alitas Búfalo', price: 130 },
        { name: 'Alitas BBQ', price: 130 },
        { name: 'Papas a la Francesa', price: 69 },
        { name: 'Papas a la Francesa Gratinadas', price: 75 },
        { name: 'Papas al Ajo', price: 79 },
        { name: 'Nachos con Arrachera', price: 130 },
      ],
    },
    {
      name: { es: 'Ensaladas', en: 'Salads' },
      items: [
        { name: 'Ensalada de Rollos de Jamón con Queso', price: 127 },
        { name: 'Ensalada de Pollo a la Plancha', price: 137 },
        { name: 'Ensalada de Pollo Empanizado', price: 145 },
        { name: 'Ensalada de Pollo Empanizado BBQ', price: 150 },
        { name: 'Ensalada de Frutas Rojas', price: 120 },
      ],
    },
    {
      name: { es: 'Bagels', en: 'Bagels' },
      items: [
        { name: 'Bagel Country', price: 113 },
        { name: 'Bagel Slim', price: 115 },
        { name: 'Bagel Gourmet', price: 120 },
        { name: 'Bagel Americano', price: 115 },
        { name: 'Bagel Tradicional', price: 115 },
        { name: 'Bagel Dulce', price: 105 },
        { name: 'Bagel Noruego', price: 135 },
      ],
    },
    {
      name: { es: 'Burritos', en: 'Burritos' },
      items: [
        { name: 'Burrito de Arrachera / Birria', price: 140 },
        { name: 'Burrito de Pollo a la Plancha', price: 140 },
      ],
    },
  ],
};
