import type { MenuCategory } from '@/data/types';

/**
 * Source: https://coffeehourchapala.com/desayunos (official menu page).
 * Prices in MXN as published. Descriptors in `note` come from the source's own
 * parentheticals — nothing here is invented (no ingredients, sizes or diet claims added).
 */
export const desayunos: MenuCategory = {
  slug: 'desayunos',
  name: { es: 'Desayunos', en: 'Breakfast' },
  shortName: { es: 'Desayunos', en: 'Breakfast' },
  description: {
    es: 'Platillos frescos para comenzar el día, servidos toda la jornada.',
    en: 'Fresh dishes to start the day, served throughout the day.',
  },
  subcategories: [
    {
      name: { es: 'Chilaquiles', en: 'Chilaquiles' },
      items: [
        { name: 'Chilaquiles Verdes / Rojos / Divorciados', price: 110 },
        { name: 'Chilaquiles con Chorizo', price: 145 },
        { name: 'Chilaquiles con Huevo (al gusto)', price: 145 },
        { name: 'Chilaquiles con Pollo', price: 149 },
        { name: 'Chilaquiles con Arrachera / Birria (120 g)', price: 175 },
      ],
    },
    {
      name: { es: 'Huevos', en: 'Eggs' },
      items: [
        { name: 'Huevos Naturales', note: { es: 'Revueltos o estrellados', en: 'Scrambled or sunny-side up' }, price: 99 },
        { name: 'Huevos Benedictinos', note: { es: 'Jamón de pavo / Selva negra', en: 'Turkey ham / Black Forest ham' }, price: 155 },
        { name: 'Huevos Benedictinos', note: { es: 'Con salmón', en: 'With salmon' }, price: 175 },
        { name: 'Huevos Revueltos o Estrellados', note: { es: 'Con jamón, tocino o chorizo', en: 'With ham, bacon or chorizo' }, price: 125 },
        { name: 'Huevos a la Mexicana', price: 110 },
        { name: 'Huevos Rancheros', price: 125 },
        { name: 'Huevos Motuleños', price: 130 },
        { name: 'Sándwich de Huevo', price: 110 },
        { name: 'Huevos Slim', note: { es: '4 claras revueltas con jamón o tocino', en: '4 scrambled egg whites with ham or bacon' }, price: 155 },
      ],
    },
    {
      name: { es: 'Omelettes', en: 'Omelettes' },
      items: [
        { name: 'Omelette Clásico', note: { es: 'Jamón o tocino y queso', en: 'Ham or bacon and cheese' }, price: 137 },
        { name: 'Omelette Vegetariano', note: { es: 'Champiñones, cebolla y jitomate', en: 'Mushroom, onion and tomato' }, price: 130 },
        { name: 'Omelette Choriqueso', price: 145 },
        { name: 'Omelette Western', note: { es: 'Jitomate, cebolla, pimiento morrón y tocino', en: 'Tomato, onion, bell pepper and bacon' }, price: 145 },
        { name: 'Omelette Mestizo', note: { es: 'Salsa a la mexicana y queso panela', en: 'Mexican-style salsa and panela cheese' }, price: 145 },
        { name: 'Omelette de Puras Claras', note: { es: 'Proteína a elegir', en: 'Choice of protein' }, price: 175 },
        { name: 'Omelette con Espinacas', price: 155 },
      ],
    },
    {
      name: { es: 'Bagels', en: 'Bagels' },
      items: [
        { name: 'Bagel Country', note: { es: 'Jamón de pavo y queso suizo', en: 'Turkey ham and Swiss cheese' }, price: 113 },
        { name: 'Bagel Polluelo', note: { es: 'Pollo a la plancha y queso suizo', en: 'Grilled chicken and Swiss cheese' }, price: 137 },
        { name: 'Bagel Italiano', note: { es: 'Champiñones y queso manchego', en: 'Mushroom and manchego cheese' }, price: 115 },
        { name: 'Bagel Slim', note: { es: 'Jamón de pavo y queso panela', en: 'Turkey ham and panela cheese' }, price: 115 },
        { name: 'Bagel Tuna', note: { es: 'Atún preparado con queso crema', en: 'Prepared tuna with cream cheese' }, price: 127 },
        { name: 'Bagel Americano', note: { es: 'Queso crema y tocino', en: 'Cream cheese and bacon' }, price: 99 },
        { name: 'Bagel Azteca', note: { es: 'Frijoles y queso gratinado', en: 'Beans and gratinated cheese' }, price: 99 },
        { name: 'Bagel Dulce', note: { es: 'Mermelada y queso crema', en: 'Jam and cream cheese' }, price: 75 },
        { name: 'Bagel Bariloche', note: { es: 'Salmón, queso crema y alcaparras', en: 'Salmon, cream cheese and capers' }, price: 175 },
      ],
    },
    {
      name: { es: 'Croissants', en: 'Croissants' },
      items: [
        { name: 'Croissant Jamón y Queso', price: 110 },
        { name: 'Croissant con Queso Manchego', price: 99 },
        { name: 'Croissant Pollo a la Plancha', price: 130 },
        { name: 'Croissant Pollo Empanizado', price: 140 },
        { name: 'Croissant Queso Philadelphia', price: 70 },
        { name: 'Croissant con Mermelada de Fresa', price: 65 },
        { name: 'Croissant Mañanero', note: { es: 'Huevo y papa hash brown', en: 'Egg and hash brown' }, price: 127 },
      ],
    },
    {
      name: { es: 'Hot Cakes y Waffles', en: 'Hot Cakes & Waffles' },
      items: [
        { name: 'Original', price: 105 },
        { name: 'Americano', note: { es: 'Con jamón o tocino', en: 'With ham or bacon' }, price: 120 },
        { name: 'Fresa o Plátano', price: 145 },
        { name: 'Gringo Viejo', note: { es: 'Huevo revuelto o estrellado, jamón y tocino', en: 'Scrambled or sunny-side-up egg, ham and bacon' }, price: 175 },
      ],
    },
    {
      name: { es: 'Molletes', en: 'Molletes' },
      items: [
        { name: 'Molletes Dulces', price: 75 },
        { name: 'Molletes Mexicanos', price: 95 },
        { name: 'Molletes Country', note: { es: 'Con jamón o tocino', en: 'With ham or bacon' }, price: 145 },
        { name: 'Molletes Mixtos', note: { es: 'Dulce y a la mexicana', en: 'Sweet and Mexican-style' }, price: 105 },
        { name: 'Molletes Rancheros', note: { es: 'Frijoles, queso gratinado y huevo montado', en: 'Beans, gratinated cheese and a fried egg on top' }, price: 120 },
        { name: 'Molletes Chilangos', note: { es: 'Con chilaquiles verdes o rojos', en: 'With green or red chilaquiles' }, price: 115 },
        { name: 'Molletes Mixtos Plus', note: { es: 'Uno chilango y otro country', en: 'One "chilango" and one "country"' }, price: 135 },
      ],
    },
    {
      name: { es: 'Enfrijoladas', en: 'Enfrijoladas' },
      items: [
        { name: 'Enfrijoladas con Queso', price: 110 },
        { name: 'Enfrijoladas con Pollo', price: 140 },
        { name: 'Enfrijoladas con Queso y Chorizo', price: 145 },
        { name: 'Enfrijoladas con Huevo', note: { es: 'Al gusto', en: 'Prepared to your liking' }, price: 140 },
        { name: 'Enfrijoladas con Arrachera', price: 165 },
      ],
    },
    {
      name: { es: 'Enchiladas', en: 'Enchiladas' },
      items: [
        { name: 'Enchiladas de Pollo', note: { es: 'Rojas o verdes', en: 'Red or green' }, price: 149 },
        { name: 'Enchiladas de Queso', note: { es: 'Rojas o verdes', en: 'Red or green' }, price: 125 },
      ],
    },
  ],
};
