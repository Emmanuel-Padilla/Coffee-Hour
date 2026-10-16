export function formatPrice(price: number | null, lang: 'es' | 'en'): string {
  if (price == null) return lang === 'en' ? 'Ask for price' : 'Consulta precio';
  return new Intl.NumberFormat(lang === 'en' ? 'en-US' : 'es-MX', {
    style: 'currency',
    currency: 'MXN',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}
