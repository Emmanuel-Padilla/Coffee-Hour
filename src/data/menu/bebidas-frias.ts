import type { MenuCategory } from '@/data/types';

/** Source: https://coffeehourchapala.com/bebidas-frias (official menu page). */
export const bebidasFrias: MenuCategory = {
  slug: 'bebidas-frias',
  name: { es: 'Bebidas Frías', en: 'Cold Drinks' },
  shortName: { es: 'Frías', en: 'Cold Drinks' },
  description: {
    es: 'Frappés, malteadas, tés y smoothies para refrescar el día.',
    en: 'Frappés, milkshakes, teas and smoothies to cool down the day.',
  },
  subcategories: [
    {
      name: { es: 'Malteadas', en: 'Milkshakes' },
      items: [
        { name: 'Malteada de Fresa, Vainilla o Chocolate', price: 70 },
        { name: 'Chocomilk', price: 40 },
        { name: 'Licuado de Fruta en Leche', price: 60 },
        { name: 'Licuado de Fruta con Yogurt', price: 70 },
      ],
    },
    {
      name: { es: 'Frappé Molecular', en: 'Molecular Frappé' },
      items: [
        { name: 'Frappé Molecular Manzana Verde', price: 95 },
        { name: 'Frappé Molecular Piña', price: 95 },
        { name: 'Frappé Molecular Mango', price: 95 },
        { name: 'Frappé Molecular Fresa', price: 95 },
      ],
    },
    {
      name: { es: 'Frappés Especiales', en: 'Signature Frappés' },
      items: [
        { name: 'Frappelín', note: { es: 'Chocolate y fresa', en: 'Chocolate and strawberry' }, price: 95 },
        { name: 'Frappé Chocolate Dálmata', price: 105 },
        { name: 'Frappé Chocolate Blanco y Fresa', price: 105 },
        { name: 'Frappé Mazapán', price: 105 },
        { name: 'Frappé Ferrero', price: 115 },
        { name: 'Frappé Gansito', price: 105 },
        { name: 'Frappé Magnum', price: 135 },
        { name: 'Frappé Conejito Turin', price: 105 },
        { name: 'Frappé KitKat', price: 115 },
        { name: 'Frappé Kinder Delice', price: 115 },
        { name: 'Frappé Nutella', price: 105 },
        { name: 'Frappé Chocoreta', price: 105 },
      ],
    },
    {
      name: { es: 'Capuchino Frappé', en: 'Cappuccino Frappé' },
      items: [
        { name: 'Capuchino Frappé', price: 75 },
        { name: 'Capuchino Oreo', price: 80 },
        { name: 'Capuchino Caramelo', price: 85 },
        { name: 'Capuchino Cajeta', price: 85 },
        { name: 'Capuchino Moka', price: 85 },
        { name: 'Capuchino Moka Oreo', price: 90 },
        { name: 'Capuchino con Nieve', price: 110 },
        { name: 'Capuchino con Kahlúa', price: 110 },
        { name: 'Capuchino con Baileys', price: 140 },
      ],
    },
    {
      name: { es: 'Tés, Tisanas y Matcha', en: 'Teas, Tisanes & Matcha' },
      items: [
        { name: 'Té de Infusiones', price: 50 },
        { name: 'Té de Tisanas', price: 60 },
        { name: 'Té Chai Frío', price: 105 },
        { name: 'Té Chai Frappé', price: 105 },
        { name: 'Té Tisana Frappé', price: 85 },
        { name: 'Té Matcha Frío', price: 95 },
        { name: 'Té Matcha Frappé', price: 95 },
        { name: 'Taro en las Rocas', price: 95 },
        { name: 'Taro Frappé', price: 95 },
      ],
    },
    {
      name: { es: 'Smoothies', en: 'Smoothies' },
      items: [
        { name: 'Smoothie de una Sola Fruta', price: 75 },
        { name: 'Smoothie Clásico', price: 75 },
        { name: 'Peligrosamente Rojo', price: 75 },
        { name: 'Cookies and Cream', price: 75 },
        { name: 'Get Up and Mango', price: 75 },
        { name: 'Blue Banana', price: 75 },
        { name: 'Sunrise Strawberry', price: 75 },
        { name: 'Bad Boys', price: 75 },
        { name: 'Smoothie de Chamoy', price: 75 },
        { name: 'Hawaiano', price: 75 },
        { name: 'Matcha Melón', price: 75 },
        { name: 'Piña Enchilada', price: 75 },
      ],
    },
  ],
};

export const decafSurcharge = 9;
