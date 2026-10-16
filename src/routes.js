/**
 * Single source of truth for the site's URL structure (used by App.tsx routing,
 * the sitemap generator, and the language switcher so paths never drift apart).
 * Spanish is the default locale (no prefix); English is served under /en/*.
 */
export const routeSlugs = [
    '',
    'historia',
    'menu',
    'menu/desayunos',
    'menu/snacks',
    'menu/bebidas-calientes',
    'menu/bebidas-frias',
    'menu/postres-crepas',
    'experiencias',
    'galeria',
    'videos',
    'faq',
    'contacto',
    'privacidad',
    'blog',
];
export function esPath(slug) {
    return slug === '' ? '/' : `/${slug}`;
}
export function enPath(slug) {
    return slug === '' ? '/en' : `/en/${slug}`;
}
export const allStaticPaths = routeSlugs.flatMap((slug) => [esPath(slug), enPath(slug)]);
