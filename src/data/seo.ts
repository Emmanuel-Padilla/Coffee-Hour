import type { RouteSlug } from '@/routes';

interface PageMeta {
  title: { es: string; en: string };
  description: { es: string; en: string };
  keywords: { es: string[]; en: string[] };
}

export const pageSeo: Record<RouteSlug, PageMeta> = {
  '': {
    title: { es: 'Coffee Hour Chapala | Cafetería y desayunos en el centro', en: 'Coffee Hour Chapala | Coffee & Breakfast Downtown' },
    description: {
      es: 'Visita Coffee Hour, cafetería en el centro de Chapala, Jalisco, a pasos del malecón. Disfruta café, desayunos, frappés, crepas y postres.',
      en: 'Visit Coffee Hour, a coffee shop in downtown Chapala, Jalisco, steps from the malecón. Enjoy coffee, breakfast, frappés, crepes and desserts.',
    },
    keywords: {
      es: ['Coffee Hour Chapala', 'cafetería en Chapala', 'café en Chapala centro', 'desayunos en Chapala', 'café cerca del malecón de Chapala', 'frappés en Chapala', 'crepas en Chapala'],
      en: ['Coffee Hour Chapala', 'coffee shop in Chapala', 'downtown Chapala café', 'breakfast in Chapala', 'coffee near Chapala malecón', 'frappés in Chapala', 'crepes in Chapala'],
    },
  },
  historia: {
    keywords: {
      es: ['Coffee Hour Chapala', 'historia de Coffee Hour', 'cafetería en Chapala centro', 'tradición en Chapala'],
      en: ['Coffee Hour Chapala', 'Coffee Hour history', 'downtown Chapala coffee shop', 'Chapala café tradition'],
    },
    title: { es: 'Nuestra Historia | Coffee Hour Chapala', en: 'Our Story | Coffee Hour Chapala' },
    description: {
      es: '23 años de historia: conoce cómo Coffee Hour se convirtió en un punto de encuentro y tradición en Chapala.',
      en: '23 years of history: discover how Coffee Hour became a meeting point and tradition in Chapala.',
    },
  },
  menu: {
    keywords: {
      es: ['menú Coffee Hour Chapala', 'cafetería en Chapala', 'desayunos en Chapala', 'café y frappés', 'crepas y postres en Chapala'],
      en: ['Coffee Hour Chapala menu', 'coffee shop in Chapala', 'breakfast in Chapala', 'coffee and frappés', 'crepes and desserts in Chapala'],
    },
    title: { es: 'Menú | Coffee Hour Chapala', en: 'Menu | Coffee Hour Chapala' },
    description: {
      es: 'Consulta el menú de Coffee Hour Chapala: desayunos, bebidas calientes, frappés, crepas, hamburguesas, bagels, snacks y postres.',
      en: 'Check out the Coffee Hour Chapala menu: breakfast, hot drinks, frappés, crepes, burgers, bagels, snacks and desserts.',
    },
  },
  'menu/desayunos': {
    keywords: {
      es: ['desayunos en Chapala', 'chilaquiles en Chapala', 'omelettes', 'hot cakes', 'bagels', 'Coffee Hour Chapala'],
      en: ['breakfast in Chapala', 'chilaquiles in Chapala', 'omelettes', 'pancakes', 'bagels', 'Coffee Hour Chapala'],
    },
    title: { es: 'Desayunos | Menú Coffee Hour Chapala', en: 'Breakfast | Coffee Hour Chapala Menu' },
    description: {
      es: 'Chilaquiles, huevos, omelettes, bagels, croissants, hot cakes y más para desayunar en Coffee Hour Chapala.',
      en: 'Chilaquiles, eggs, omelettes, bagels, croissants, hot cakes and more for breakfast at Coffee Hour Chapala.',
    },
  },
  'menu/snacks': {
    keywords: {
      es: ['snacks en Chapala', 'hamburguesas en Chapala', 'baguettes', 'ensaladas', 'bagels', 'Coffee Hour Chapala'],
      en: ['snacks in Chapala', 'burgers in Chapala', 'baguettes', 'salads', 'bagels', 'Coffee Hour Chapala'],
    },
    title: { es: 'Snacks y Alimentos | Menú Coffee Hour Chapala', en: 'Snacks & Food | Coffee Hour Chapala Menu' },
    description: {
      es: 'Baguettes, hamburguesas, ensaladas, bagels y aperitivos en el menú de Coffee Hour Chapala.',
      en: 'Baguettes, burgers, salads, bagels and appetizers on the Coffee Hour Chapala menu.',
    },
  },
  'menu/bebidas-calientes': {
    keywords: {
      es: ['café en Chapala', 'espresso', 'capuchino', 'latte', 'chocolate caliente', 'carajillo', 'Coffee Hour Chapala'],
      en: ['coffee in Chapala', 'espresso', 'cappuccino', 'latte', 'hot chocolate', 'carajillo', 'Coffee Hour Chapala'],
    },
    title: { es: 'Bebidas Calientes | Menú Coffee Hour Chapala', en: 'Hot Drinks | Coffee Hour Chapala Menu' },
    description: {
      es: 'Espresso, capuchino, latte, chocolates y carajillo en el menú de bebidas calientes de Coffee Hour Chapala.',
      en: 'Espresso, cappuccino, latte, hot chocolate and carajillo on the Coffee Hour Chapala hot drinks menu.',
    },
  },
  'menu/bebidas-frias': {
    keywords: {
      es: ['frappés en Chapala', 'malteadas en Chapala', 'matcha', 'smoothies', 'bebidas frías', 'Coffee Hour Chapala'],
      en: ['frappés in Chapala', 'milkshakes in Chapala', 'matcha', 'smoothies', 'cold drinks', 'Coffee Hour Chapala'],
    },
    title: { es: 'Bebidas Frías | Menú Coffee Hour Chapala', en: 'Cold Drinks | Coffee Hour Chapala Menu' },
    description: {
      es: 'Frappés, malteadas, tés, matcha y smoothies en el menú de bebidas frías de Coffee Hour Chapala.',
      en: 'Frappés, milkshakes, teas, matcha and smoothies on the Coffee Hour Chapala cold drinks menu.',
    },
  },
  'menu/postres-crepas': {
    keywords: {
      es: ['crepas en Chapala', 'postres en Chapala', 'crepas dulces', 'crepas saladas', 'Coffee Hour Chapala'],
      en: ['crepes in Chapala', 'desserts in Chapala', 'sweet crepes', 'savory crepes', 'Coffee Hour Chapala'],
    },
    title: { es: 'Postres y Crepas | Menú Coffee Hour Chapala', en: 'Desserts & Crepes | Coffee Hour Chapala Menu' },
    description: {
      es: 'Crepas dulces, saladas y especiales para cerrar tu visita a Coffee Hour Chapala.',
      en: 'Sweet, savory and signature crepes to end your visit to Coffee Hour Chapala.',
    },
  },
  experiencias: {
    keywords: {
      es: ['experiencias Coffee Hour', 'Hangout & Create Chapala', 'Picoteo Chapala', 'actividades en Chapala', 'Coffee Hour Chapala'],
      en: ['Coffee Hour experiences', 'Hangout & Create Chapala', 'Picoteo Chapala', 'things to do in Chapala', 'Coffee Hour Chapala'],
    },
    title: { es: 'Experiencias | Coffee Hour Chapala', en: 'Experiences | Coffee Hour Chapala' },
    description: {
      es: 'Hangout & Create y Picoteo: vive experiencias especiales en Coffee Hour Chapala.',
      en: 'Hangout & Create and Picoteo: enjoy special experiences at Coffee Hour Chapala.',
    },
  },
  galeria: {
    keywords: {
      es: ['fotos Coffee Hour Chapala', 'cafetería en Chapala', 'fotos de desayunos', 'bebidas y postres'],
      en: ['Coffee Hour Chapala photos', 'coffee shop in Chapala', 'breakfast photos', 'drinks and desserts'],
    },
    title: { es: 'Galería | Coffee Hour Chapala', en: 'Gallery | Coffee Hour Chapala' },
    description: {
      es: 'Fotografías reales de bebidas, desayunos, postres y el ambiente de Coffee Hour Chapala.',
      en: 'Real photos of drinks, breakfast, desserts and the atmosphere at Coffee Hour Chapala.',
    },
  },
  videos: {
    keywords: {
      es: ['videos Coffee Hour Chapala', 'preparación de café', 'bebidas en Chapala', 'ambiente de cafetería'],
      en: ['Coffee Hour Chapala videos', 'coffee preparation', 'drinks in Chapala', 'coffee shop atmosphere'],
    },
    title: { es: 'Videos | Coffee Hour Chapala', en: 'Videos | Coffee Hour Chapala' },
    description: {
      es: 'Conoce el ambiente y la preparación de bebidas de Coffee Hour Chapala en video.',
      en: 'See the atmosphere and drink preparation at Coffee Hour Chapala on video.',
    },
  },
  faq: {
    keywords: {
      es: ['Coffee Hour Chapala horarios', 'Coffee Hour ubicación', 'Coffee Hour menú', 'preguntas frecuentes Coffee Hour'],
      en: ['Coffee Hour Chapala hours', 'Coffee Hour location', 'Coffee Hour menu', 'Coffee Hour FAQ'],
    },
    title: { es: 'Preguntas Frecuentes | Coffee Hour Chapala', en: 'FAQ | Coffee Hour Chapala' },
    description: {
      es: 'Horarios, ubicación, menú y más: resolvemos las preguntas más frecuentes sobre Coffee Hour Chapala.',
      en: 'Hours, location, menu and more: answers to the most common questions about Coffee Hour Chapala.',
    },
  },
  contacto: {
    keywords: {
      es: ['Coffee Hour Chapala dirección', 'Coffee Hour teléfono', 'cafetería Chapala centro', 'Paseo Ramón Corona 11-A', 'Coffee Hour horarios'],
      en: ['Coffee Hour Chapala address', 'Coffee Hour phone', 'downtown Chapala coffee shop', 'Paseo Ramón Corona 11-A', 'Coffee Hour opening hours'],
    },
    title: { es: 'Contacto y Ubicación | Coffee Hour Chapala', en: 'Contact & Location | Coffee Hour Chapala' },
    description: {
      es: 'Dirección, teléfono, horario y mapa de Coffee Hour Chapala, en el centro de Chapala, Jalisco.',
      en: 'Address, phone, hours and map for Coffee Hour Chapala, in downtown Chapala, Jalisco.',
    },
  },
  privacidad: {
    keywords: {
      es: ['aviso de privacidad Coffee Hour Chapala', 'datos personales Coffee Hour'],
      en: ['Coffee Hour Chapala privacy notice', 'Coffee Hour personal data'],
    },
    title: { es: 'Aviso de Privacidad | Coffee Hour Chapala', en: 'Privacy Notice | Coffee Hour Chapala' },
    description: {
      es: 'Conoce cómo Coffee Hour Chapala trata la información que compartes a través de este sitio web.',
      en: 'Learn how Coffee Hour Chapala handles the information you share through this website.',
    },
  },
  blog: {
    keywords: {
      es: ['qué hacer en Chapala', 'guía de Chapala', 'café en Chapala', 'desayunos en Chapala', 'malecón de Chapala', 'blog Coffee Hour'],
      en: ['things to do in Chapala', 'Chapala local guide', 'coffee in Chapala', 'breakfast in Chapala', 'Chapala malecón', 'Coffee Hour blog'],
    },
    title: { es: 'Blog y Guía Local | Coffee Hour Chapala', en: 'Blog & Local Guide | Coffee Hour Chapala' },
    description: {
      es: 'Guías sobre café, desayunos y qué hacer en Chapala, escritas por el equipo de Coffee Hour.',
      en: 'Guides about coffee, breakfast and what to do in Chapala, written by the Coffee Hour team.',
    },
  },
};
