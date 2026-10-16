export interface BlogPost {
  slug: string;
  title: { es: string; en: string };
  excerpt: { es: string; en: string };
  readTimeMinutes: number;
  body: { es: string[]; en: string[] };
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'que-desayunar-centro-chapala',
    title: {
      es: 'Qué desayunar en el centro de Chapala',
      en: 'What to have for breakfast in downtown Chapala',
    },
    excerpt: {
      es: 'Una guía rápida para elegir desayuno según el hambre y el tiempo que tengas antes de seguir explorando el malecón.',
      en: 'A quick guide to choosing breakfast based on your appetite and how much time you have before continuing along the malecón.',
    },
    readTimeMinutes: 3,
    body: {
      es: [
        'Si vienes de caminar por el malecón de Chapala y tienes hambre, lo primero es decidir qué tan sustancioso quieres el desayuno. Para algo ligero, un croissant o un bagel con café acompañan bien una mañana sin apuro. Si buscas algo más completo, los chilaquiles o los huevos al gusto son una opción clásica mexicana que rinde para seguir el día activo.',
        'Para quienes prefieren algo dulce, los hot cakes o waffles son una buena opción para compartir en familia. Y si el plan es quedarse un rato platicando, un desayuno con bebida caliente —como un capuchino o un latte— alarga naturalmente la sobremesa.',
        'En Coffee Hour puedes revisar el menú completo de desayunos antes de decidir, con precios claros y categorías organizadas por tipo de platillo.',
      ],
      en: [
        'If you’ve been walking along Chapala’s malecón and you’re hungry, the first decision is how substantial you want breakfast to be. For something light, a croissant or a bagel with coffee pairs well with an unhurried morning. For something heartier, chilaquiles or eggs prepared your way are a classic Mexican option that fuels an active day.',
        'For those who prefer something sweet, hot cakes or waffles are a great option to share. And if the plan is to sit and talk for a while, pairing breakfast with a hot drink — like a cappuccino or a latte — naturally extends the morning.',
        'At Coffee Hour you can check the full breakfast menu before deciding, with clear prices and categories organized by dish type.',
      ],
    },
  },
  {
    slug: 'bebidas-segun-clima-chapala',
    title: {
      es: 'Bebidas para disfrutar según el clima de Chapala',
      en: 'Drinks to enjoy depending on Chapala’s weather',
    },
    excerpt: {
      es: 'Cómo elegir entre una bebida caliente o fría dependiendo del momento del día y la temporada en la Ribera de Chapala.',
      en: 'How to choose between a hot or cold drink depending on the time of day and the season by Lake Chapala.',
    },
    readTimeMinutes: 3,
    body: {
      es: [
        'Chapala tiene mañanas frescas y tardes que pueden calentarse rápido, así que la bebida ideal cambia a lo largo del día. Por la mañana, un espresso, un americano o un capuchino ayudan a arrancar con energía. Ya entrada la tarde, cuando el sol pega más fuerte, un frappé o un capuchino frappé refrescan sin perder el sabor a café.',
        'Si prefieres algo sin cafeína, las tisanas y tés de infusión son una alternativa suave, mientras que los smoothies de fruta son ideales después de caminar por el malecón. Para quienes buscan algo más indulgente, los frappés especiales con chocolate o dulces son una manera de darse un gusto.',
        'Puedes explorar el menú completo de bebidas calientes y bebidas frías de Coffee Hour para encontrar la opción perfecta para tu visita.',
      ],
      en: [
        'Chapala has cool mornings and afternoons that can warm up quickly, so the ideal drink changes throughout the day. In the morning, an espresso, an americano or a cappuccino help you start with energy. Later in the afternoon, when the sun is stronger, a frappé or a cappuccino frappé cool you down without losing the coffee flavor.',
        'If you prefer something without caffeine, herbal teas and tisanes are a gentle alternative, while fruit smoothies are ideal after a walk along the malecón. For those looking for something more indulgent, signature frappés with chocolate or candy are a way to treat yourself.',
        'You can explore Coffee Hour’s full hot drinks and cold drinks menus to find the perfect option for your visit.',
      ],
    },
  },
  {
    slug: 'cafe-cerca-del-malecon',
    title: {
      es: 'Un café para disfrutar cerca del malecón',
      en: 'A coffee to enjoy near the malecón',
    },
    excerpt: {
      es: 'Por qué una parada en Coffee Hour, a pasos del malecón de Chapala, es un buen punto para pausar el paseo.',
      en: 'Why a stop at Coffee Hour, steps from Chapala’s malecón, is a great place to pause your walk.',
    },
    readTimeMinutes: 2,
    body: {
      es: [
        'El malecón de Chapala es uno de los puntos más visitados del pueblo, ideal para caminar, ver el lago y pasar la tarde. A pocos pasos, sobre Paseo Ramón Corona, Coffee Hour ofrece un espacio para pausar el recorrido con una bebida o un platillo antes de seguir explorando el centro.',
        'Ya sea que busques un café rápido para llevar o quieras quedarte un rato a conversar, la cercanía con el malecón hace de Coffee Hour una parada natural dentro de cualquier visita a Chapala, ya seas local, turista nacional o parte de la comunidad extranjera que vive en la Ribera de Chapala.',
      ],
      en: [
        'Chapala’s malecón is one of the town’s most visited spots, perfect for walking, watching the lake and spending the afternoon. A few steps away, on Paseo Ramón Corona, Coffee Hour offers a place to pause your walk with a drink or a dish before continuing to explore downtown.',
        'Whether you’re looking for a quick coffee to go or want to stay a while to chat, its proximity to the malecón makes Coffee Hour a natural stop on any visit to Chapala — whether you’re a local, a national tourist, or part of the expat community living on the shores of Lake Chapala.',
      ],
    },
  },
];
