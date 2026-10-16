import { Link } from 'react-router-dom';
import { useLanguage, LANG_STORAGE_KEY } from '@/context/LanguageContext';
import { useAlternatePath } from '@/hooks/useLocalizedPath';
import { trackEvent } from '@/lib/analytics';

export default function LanguageSwitcher({ compact = false, dark = false }: { compact?: boolean; dark?: boolean }) {
  const { lang, dict } = useLanguage();
  const alternatePath = useAlternatePath();
  const otherLang = lang === 'es' ? 'en' : 'es';

  const handleClick = () => {
    try {
      window.localStorage.setItem(LANG_STORAGE_KEY, otherLang);
    } catch {
      /* ignore storage errors (private mode, etc.) */
    }
    trackEvent('change_language', { to: otherLang });
  };

  const darkClass =
    'inline-flex items-center gap-1.5 rounded-full border border-white/25 px-3 py-1.5 text-sm font-medium text-white transition hover:border-caramel hover:text-caramel';
  const autoClass =
    'inline-flex items-center gap-1.5 rounded-full border border-ink-900/15 px-3 py-1.5 text-sm font-medium text-ink-900 transition hover:border-coffee-600 hover:text-coffee-600 dark:border-white/20 dark:text-cream dark:hover:border-caramel dark:hover:text-caramel';

  return (
    <Link
      to={alternatePath}
      onClick={handleClick}
      lang={otherLang}
      className={
        compact ? 'inline-flex items-center rounded-full border border-current/20 px-3 py-1.5 text-xs font-medium' : dark ? darkClass : autoClass
      }
      aria-label={`${dict.langSwitcher[otherLang]}`}
    >
      {otherLang === 'en' ? 'EN' : 'ES'}
    </Link>
  );
}
