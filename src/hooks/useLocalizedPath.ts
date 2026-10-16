import { useLocation } from 'react-router-dom';
import { routeSlugs, esPath, enPath } from '@/routes';
import { useLanguage } from '@/context/LanguageContext';

/** Builds a path in the current language for a given route slug (e.g. 'menu/desayunos'). */
export function useLocalizedPath() {
  const { lang } = useLanguage();
  return (slug: string) => (lang === 'en' ? enPath(slug) : esPath(slug));
}

/** Returns the equivalent URL in the other language for the current page, for the language switcher. */
export function useAlternatePath() {
  const location = useLocation();
  const { lang } = useLanguage();
  const path = location.pathname;

  const stripped = lang === 'en' ? path.replace(/^\/en\/?/, '') : path.replace(/^\//, '');
  const slug = stripped.replace(/\/$/, '');
  const matched = (routeSlugs as readonly string[]).includes(slug) ? slug : '';

  return lang === 'en' ? esPath(matched) : enPath(matched);
}
