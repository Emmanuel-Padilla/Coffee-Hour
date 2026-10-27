/**
 * Photography from the official site and photos supplied for this gallery.
 * Captions describe what is actually pictured.
 */
export interface GalleryPhoto {
  id: string;
  file: string; // key into src/assets/images
  category: 'bebidas' | 'desayunos' | 'postres' | 'ambiente';
  caption: { es: string; en: string };
  alt: { es: string; en: string };
}

export const galleryPhotos: GalleryPhoto[] = [
  {
    id: 'entrada-patio',
    file: 'entrada-patio.webp',
    category: 'ambiente',
    caption: { es: 'Bienvenidos a Coffee Hour', en: 'Welcome to Coffee Hour' },
    alt: {
      es: 'Entrada al patio de Coffee Hour con pizarras, mesas y sombrillas de colores',
      en: 'Entrance to the Coffee Hour patio with chalkboards, tables and colorful umbrellas',
    },
  },
  {
    id: 'taza-canela',
    file: 'taza-canela.webp',
    category: 'bebidas',
    caption: { es: 'Una pausa entre aromas y canela', en: 'A pause among aromas and cinnamon' },
    alt: {
      es: 'Taza blanca con una rodaja de manzana y ramas de canela sobre la mesa',
      en: 'White mug with an apple slice and cinnamon sticks on the table',
    },
  },
  {
    id: 'salon-tazas',
    file: 'salon-tazas.webp',
    category: 'ambiente',
    caption: { es: 'Nuestro rincón de las tazas', en: 'Our mug collection corner' },
    alt: {
      es: 'Salón de Coffee Hour con colección de tazas, mesas y plantas',
      en: 'Coffee Hour seating area with a mug collection, tables and plants',
    },
  },
  {
    id: 'terraza-corazones',
    file: 'terraza-corazones.webp',
    category: 'ambiente',
    caption: { es: 'Entre plantas y corazones', en: 'Among plants and hearts' },
    alt: {
      es: 'Terraza con corazones colgantes, sillas tejidas y una bugambilia blanca',
      en: 'Terrace with hanging hearts, woven chairs and a white bougainvillea',
    },
  },
  {
    id: 'patio-bugambilias',
    file: 'patio-bugambilias.webp',
    category: 'ambiente',
    caption: { es: 'Flores y luz en el patio', en: 'Flowers and light in the patio' },
    alt: {
      es: 'Bugambilias blancas junto a la escalera de madera y las luces del patio',
      en: 'White bougainvillea beside the wooden staircase and patio lights',
    },
  },
  {
    id: 'patio-nocturno',
    file: 'patio-nocturno.webp',
    category: 'ambiente',
    caption: { es: 'La calidez de nuestras noches', en: 'The warmth of our evenings' },
    alt: {
      es: 'Patio de noche con guirnaldas de luces, plantas y platos decorativos en la pared',
      en: 'Patio at night with string lights, plants and decorative plates on the wall',
    },
  },
  {
    id: 'chilaquiles-supremos',
    file: 'platillo1.webp',
    category: 'desayunos',
    caption: { es: 'Chilaquiles Supremos', en: 'Chilaquiles Supremos' },
    alt: {
      es: 'Plato de chilaquiles servido en Coffee Hour Chapala',
      en: 'Plate of chilaquiles served at Coffee Hour Chapala',
    },
  },
  {
    id: 'espresso-latte-americano',
    file: 'platillo2.webp',
    category: 'bebidas',
    caption: { es: 'Espresso, Latte y Americano', en: 'Espresso, Latte and Americano' },
    alt: {
      es: 'Tres tazas de café: espresso, latte y americano en Coffee Hour',
      en: 'Three coffee cups: espresso, latte and americano at Coffee Hour',
    },
  },
  {
    id: 'cuernito-mananero',
    file: 'platillo3.webp',
    category: 'desayunos',
    caption: { es: 'Cuernito Mañanero', en: 'Morning Croissant' },
    alt: { es: 'Croissant relleno servido para desayunar', en: 'Filled croissant served for breakfast' },
  },
  {
    id: 'americano-galleta-empanadas',
    file: 'platillo4.webp',
    category: 'postres',
    caption: {
      es: 'Americano, galleta de avena y empanadas de crema pastelera',
      en: 'Americano, oatmeal cookie and pastry-cream empanadas',
    },
    alt: { es: 'Café americano acompañado de postres horneados', en: 'Americano coffee paired with baked pastries' },
  },
  {
    id: 'latte-moka-red-velvet',
    file: 'platillo5.webp',
    category: 'postres',
    caption: { es: 'Latte Moka con pastelito Red Velvet', en: 'Mocha Latte with Red Velvet pastry' },
    alt: { es: 'Latte moka junto a un pastelito red velvet', en: 'Mocha latte next to a red velvet pastry' },
  },
  {
    id: 'frappe-clasico',
    file: 'platillo6.webp',
    category: 'bebidas',
    caption: { es: 'Frappé clásico con crema batida', en: 'Classic frappé with whipped cream' },
    alt: { es: 'Frappé clásico coronado con crema batida', en: 'Classic frappé topped with whipped cream' },
  },
  {
    id: 'interior-coffee-hour',
    file: 'hero-interior.webp',
    category: 'ambiente',
    caption: { es: 'Uno de los rincones de Coffee Hour', en: 'One of Coffee Hour’s corners' },
    alt: { es: 'Interior de la cafetería Coffee Hour en Chapala', en: 'Interior of the Coffee Hour café in Chapala' },
  },
  {
    id: 'ambiente-1',
    file: 'coffeehour-4.webp',
    category: 'ambiente',
    caption: { es: 'Ambiente Coffee Hour', en: 'Coffee Hour atmosphere' },
    alt: { es: 'Espacio de Coffee Hour Chapala', en: 'Space inside Coffee Hour Chapala' },
  },
  {
    id: 'ambiente-2',
    file: 'coffeehour-7.webp',
    category: 'ambiente',
    caption: { es: 'Un rincón para conversar', en: 'A corner to talk over coffee' },
    alt: { es: 'Área de mesas de Coffee Hour Chapala', en: 'Seating area at Coffee Hour Chapala' },
  },
];

export const galleryFilters = ['todos', 'bebidas', 'desayunos', 'postres', 'ambiente'] as const;
