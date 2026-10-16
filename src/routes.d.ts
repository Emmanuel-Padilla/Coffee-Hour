/**
 * Single source of truth for the site's URL structure (used by App.tsx routing,
 * the sitemap generator, and the language switcher so paths never drift apart).
 * Spanish is the default locale (no prefix); English is served under /en/*.
 */
export declare const routeSlugs: readonly ["", "historia", "menu", "menu/desayunos", "menu/snacks", "menu/bebidas-calientes", "menu/bebidas-frias", "menu/postres-crepas", "experiencias", "galeria", "videos", "faq", "contacto", "privacidad", "blog"];
export type RouteSlug = (typeof routeSlugs)[number];
export declare function esPath(slug: string): string;
export declare function enPath(slug: string): string;
export declare const allStaticPaths: string[];
