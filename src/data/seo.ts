import type { RouteSlug } from '@/routes';

interface PageMeta {
  title: { es: string; en: string };
  description: { es: string; en: string };
}

export const pageSeo: Record<RouteSlug, PageMeta> = {
  '': {
    title: { es: 'Coffee Hour Chapala | Café, desayunos y tradición', en: 'Coffee Hour Chapala | Coffee, Breakfast & Tradition' },
    description: {
      es: 'Descubre Coffee Hour Chapala: café, desayunos, frappés, postres y alimentos en un ambiente acogedor en el centro de Chapala, Jalisco.',
      en: 'Discover Coffee Hour Chapala: coffee, breakfast, frappés, desserts and food in a warm setting in downtown Chapala, Jalisco.',
    },
  },
  historia: {
    title: { es: 'Nuestra Historia | Coffee Hour Chapala', en: 'Our Story | Coffee Hour Chapala' },
    description: {
      es: '23 años de historia: conoce cómo Coffee Hour se convirtió en un punto de encuentro y tradición en Chapala.',
      en: '23 years of history: discover how Coffee Hour became a meeting point and tradition in Chapala.',
    },
  },
  menu: {
    title: { es: 'Menú | Coffee Hour Chapala', en: 'Menu | Coffee Hour Chapala' },
    description: {
      es: 'Consulta el menú de Coffee Hour Chapala: desayunos, bebidas calientes, frappés, crepas, hamburguesas, bagels, snacks y postres.',
      en: 'Check out the Coffee Hour Chapala menu: breakfast, hot drinks, frappés, crepes, burgers, bagels, snacks and desserts.',
    },
  },
  'menu/desayunos': {
    title: { es: 'Desayunos | Menú Coffee Hour Chapala', en: 'Breakfast | Coffee Hour Chapala Menu' },
    description: {
      es: 'Chilaquiles, huevos, omelettes, bagels, croissants, hot cakes y más para desayunar en Coffee Hour Chapala.',
      en: 'Chilaquiles, eggs, omelettes, bagels, croissants, hot cakes and more for breakfast at Coffee Hour Chapala.',
    },
  },
  'menu/snacks': {
    title: { es: 'Snacks y Alimentos | Menú Coffee Hour Chapala', en: 'Snacks & Food | Coffee Hour Chapala Menu' },
    description: {
      es: 'Baguettes, hamburguesas, ensaladas, bagels y aperitivos en el menú de Coffee Hour Chapala.',
      en: 'Baguettes, burgers, salads, bagels and appetizers on the Coffee Hour Chapala menu.',
    },
  },
  'menu/bebidas-calientes': {
    title: { es: 'Bebidas Calientes | Menú Coffee Hour Chapala', en: 'Hot Drinks | Coffee Hour Chapala Menu' },
    description: {
      es: 'Espresso, capuchino, latte, chocolates y carajillo en el menú de bebidas calientes de Coffee Hour Chapala.',
      en: 'Espresso, cappuccino, latte, hot chocolate and carajillo on the Coffee Hour Chapala hot drinks menu.',
    },
  },
  'menu/bebidas-frias': {
    title: { es: 'Bebidas Frías | Menú Coffee Hour Chapala', en: 'Cold Drinks | Coffee Hour Chapala Menu' },
    description: {
      es: 'Frappés, malteadas, tés, matcha y smoothies en el menú de bebidas frías de Coffee Hour Chapala.',
      en: 'Frappés, milkshakes, teas, matcha and smoothies on the Coffee Hour Chapala cold drinks menu.',
    },
  },
  'menu/postres-crepas': {
    title: { es: 'Postres y Crepas | Menú Coffee Hour Chapala', en: 'Desserts & Crepes | Coffee Hour Chapala Menu' },
    description: {
      es: 'Crepas dulces, saladas y especiales para cerrar tu visita a Coffee Hour Chapala.',
      en: 'Sweet, savory and signature crepes to end your visit to Coffee Hour Chapala.',
    },
  },
  experiencias: {
    title: { es: 'Experiencias | Coffee Hour Chapala', en: 'Experiences | Coffee Hour Chapala' },
    description: {
      es: 'Hangout & Create y Picoteo: vive experiencias especiales en Coffee Hour Chapala.',
      en: 'Hangout & Create and Picoteo: enjoy special experiences at Coffee Hour Chapala.',
    },
  },
  galeria: {
    title: { es: 'Galería | Coffee Hour Chapala', en: 'Gallery | Coffee Hour Chapala' },
    description: {
      es: 'Fotografías reales de bebidas, desayunos, postres y el ambiente de Coffee Hour Chapala.',
      en: 'Real photos of drinks, breakfast, desserts and the atmosphere at Coffee Hour Chapala.',
    },
  },
  videos: {
    title: { es: 'Videos | Coffee Hour Chapala', en: 'Videos | Coffee Hour Chapala' },
    description: {
      es: 'Conoce el ambiente y la preparación de bebidas de Coffee Hour Chapala en video.',
      en: 'See the atmosphere and drink preparation at Coffee Hour Chapala on video.',
    },
  },
  faq: {
    title: { es: 'Preguntas Frecuentes | Coffee Hour Chapala', en: 'FAQ | Coffee Hour Chapala' },
    description: {
      es: 'Horarios, ubicación, menú y más: resolvemos las preguntas más frecuentes sobre Coffee Hour Chapala.',
      en: 'Hours, location, menu and more: answers to the most common questions about Coffee Hour Chapala.',
    },
  },
  contacto: {
    title: { es: 'Contacto y Ubicación | Coffee Hour Chapala', en: 'Contact & Location | Coffee Hour Chapala' },
    description: {
      es: 'Dirección, teléfono, horario y mapa de Coffee Hour Chapala, en el centro de Chapala, Jalisco.',
      en: 'Address, phone, hours and map for Coffee Hour Chapala, in downtown Chapala, Jalisco.',
    },
  },
  privacidad: {
    title: { es: 'Aviso de Privacidad | Coffee Hour Chapala', en: 'Privacy Notice | Coffee Hour Chapala' },
    description: {
      es: 'Conoce cómo Coffee Hour Chapala trata la información que compartes a través de este sitio web.',
      en: 'Learn how Coffee Hour Chapala handles the information you share through this website.',
    },
  },
  blog: {
    title: { es: 'Blog y Guía Local | Coffee Hour Chapala', en: 'Blog & Local Guide | Coffee Hour Chapala' },
    description: {
      es: 'Guías sobre café, desayunos y qué hacer en Chapala, escritas por el equipo de Coffee Hour.',
      en: 'Guides about coffee, breakfast and what to do in Chapala, written by the Coffee Hour team.',
    },
  },
};
