import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { business } from '@/data/business';
import { esPath, enPath, type RouteSlug } from '@/routes';
import { useLanguage } from '@/context/LanguageContext';

interface SEOProps {
  slug: RouteSlug;
  title: string;
  description: string;
  image?: string;
  noindex?: boolean;
}

export default function SEO({ slug, title, description, image, noindex }: SEOProps) {
  const { lang } = useLanguage();
  const location = useLocation();
  const origin = business.url;
  const canonicalPath = lang === 'en' ? enPath(slug) : esPath(slug);
  const canonical = `${origin}${canonicalPath}`;
  const ogImage = image ?? `${origin}/icons/icon-512.png`;

  return (
    <Helmet>
      <html lang={lang === 'en' ? 'en' : 'es-MX'} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <link rel="alternate" hrefLang="es-MX" href={`${origin}${esPath(slug)}`} />
      <link rel="alternate" hrefLang="en" href={`${origin}${enPath(slug)}`} />
      <link rel="alternate" hrefLang="x-default" href={`${origin}${esPath(slug)}`} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={`${origin}${location.pathname}`} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content={lang === 'en' ? 'en_US' : 'es_MX'} />
      <meta property="og:site_name" content={business.legalDisplayName} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
}
