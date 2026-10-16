/**
 * SINGLE SOURCE OF TRUTH for business facts.
 * Update once here — every page, schema block, and component reads from this file.
 * Values marked UNCONFIRMED are surfaced in the UI as "[INFORMACIÓN POR CONFIRMAR]" / "[TO BE CONFIRMED]"
 * rather than presented as fact. Do not hardcode phone/address/hours anywhere else.
 */

export const business = {
  name: 'Coffee Hour',
  legalDisplayName: 'Coffee Hour Chapala',
  tagline: {
    es: 'En el corazón de cada taza, hay una historia por descubrir',
    en: 'In the heart of every cup, there is a story waiting to be discovered',
  },
  positioning: {
    es: 'Coffee Hour: el lugar donde todos quieren disfrutar un café',
    en: 'Coffee Hour: the place where everyone wants to enjoy a coffee',
  },
  url: 'https://coffeehourchapala.com',

  phone: {
    display: '376 765 5931',
    displayIntl: '+52 376 765 5931',
    tel: '+523767655931',
  },

  // WhatsApp intentionally omitted — not yet confirmed that this line receives WhatsApp messages.
  whatsappConfirmed: false,

  address: {
    line1: 'Paseo Ramón Corona 11-A',
    line2: 'Chapala Centro',
    city: 'Chapala',
    state: 'Jalisco',
    postalCode: '45900',
    country: 'MX',
    countryName: { es: 'México', en: 'Mexico' },
    full: {
      es: 'Paseo Ramón Corona 11-A, Chapala Centro, 45900 Chapala, Jalisco, México',
      en: 'Paseo Ramón Corona 11-A, Chapala Centro, 45900 Chapala, Jalisco, Mexico',
    },
    // Precise GPS coordinates are not verified — omit from structured data until confirmed.
    geo: null as null | { lat: number; lng: number },
  },

  mapsSearchUrl:
    'https://www.google.com/maps/search/?api=1&query=' +
    encodeURIComponent('Coffee Hour, Paseo Ramón Corona 11-A, Chapala Centro, 45900 Chapala, Jalisco'),
  mapsEmbedSrc:
    'https://www.google.com/maps?q=' +
    encodeURIComponent('Coffee Hour, Paseo Ramón Corona 11-A, Chapala Centro, 45900 Chapala, Jalisco') +
    '&output=embed',

  hours: {
    // Same schedule every day per the official site — single source, shown consistently everywhere.
    opens: '08:00',
    closes: '22:00',
    display: {
      es: 'Lunes a domingo: 8:00 a. m. – 10:00 p. m.',
      en: 'Monday to Sunday: 8:00 AM – 10:00 PM',
    },
    days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
  },

  social: {
    facebook: 'https://www.facebook.com/CoffeeHourChapala',
    instagram: 'https://www.instagram.com/coffeehour_chapala',
    tiktok: 'https://www.tiktok.com/@coffeehourchapala',
  },

  // Brand-supplied positioning facts (given directly by the client, not scraped) — presented as brand narrative.
  history: {
    yearsClaim: 23,
    foundingYearConfirmed: false, // exact founding year not published anywhere verifiable — ask client to confirm.
    pioneerClaim: {
      es: 'Uno de los negocios pioneros en Chapala dentro del concepto de barras de café.',
      en: 'One of the pioneering businesses in Chapala within the coffee-bar concept.',
    },
    hotelPartnership: {
      es: 'Actualmente comparte la experiencia de hospitalidad con Hotel Villa Guadalupe.',
      en: 'Coffee Hour currently shares its hospitality experience with Hotel Villa Guadalupe.',
    },
    conceptLine: {
      es: 'Más que una cafetería, somos experiencia, historia y tradición.',
      en: 'More than a coffee shop, we are experience, history and tradition.',
    },
  },

  // Features that appear as "characteristics" — only include what is reasonably standard for this
  // kind of sit-down café; mark unverifiable specifics with confirmed:false so the UI can flag them.
  amenities: [
    { key: 'wifi', confirmed: false },
    { key: 'cards', confirmed: false },
    { key: 'invoice', confirmed: false },
    { key: 'dineIn', confirmed: true },
    { key: 'takeout', confirmed: false },
  ],

  developer: {
    name: 'UDigital Business',
  },
};

export type Business = typeof business;
