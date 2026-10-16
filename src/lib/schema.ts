import { business } from '@/data/business';
import { menuCategories } from '@/data/menu';
import type { Lang } from '@/context/LanguageContext';

export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['CafeOrCoffeeShop', 'Restaurant', 'LocalBusiness'],
    name: business.legalDisplayName,
    url: business.url,
    telephone: business.phone.displayIntl,
    image: `${business.url}/icons/icon-512.png`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: business.address.line1,
      addressLocality: business.address.city,
      addressRegion: business.address.state,
      postalCode: business.address.postalCode,
      addressCountry: business.address.country,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: business.hours.days,
      opens: business.hours.opens,
      closes: business.hours.closes,
    },
    sameAs: [business.social.facebook, business.social.instagram, business.social.tiktok],
  };
}

export function menuSchema(lang: Lang) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Menu',
    name: lang === 'en' ? 'Coffee Hour Chapala Menu' : 'Menú Coffee Hour Chapala',
    hasMenuSection: menuCategories.map((cat) => ({
      '@type': 'MenuSection',
      name: cat.name[lang],
      hasMenuItem: cat.subcategories.flatMap((sub) =>
        sub.items.map((item) => ({
          '@type': 'MenuItem',
          name: item.name,
          ...(item.note ? { description: item.note[lang] } : {}),
          ...(item.price != null
            ? {
                offers: {
                  '@type': 'Offer',
                  price: item.price,
                  priceCurrency: 'MXN',
                },
              }
            : {}),
        }))
      ),
    })),
  };
}

export function faqSchema(items: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
