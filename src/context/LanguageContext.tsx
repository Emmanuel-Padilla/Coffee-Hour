import { createContext, useContext, useMemo, type ReactNode } from 'react';
import es from '@/i18n/es';
import en from '@/i18n/en';
import type { Dictionary } from '@/i18n/es';

export type Lang = 'es' | 'en';

const dictionaries: Record<Lang, Dictionary> = { es, en };

interface LanguageContextValue {
  lang: Lang;
  dict: Dictionary;
  pick: <T>(localized: { es: T; en: T }) => T;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export const LANG_STORAGE_KEY = 'coffeehour-lang';

export function LanguageProvider({ lang, children }: { lang: Lang; children: ReactNode }) {
  const value = useMemo<LanguageContextValue>(
    () => ({
      lang,
      dict: dictionaries[lang],
      pick: (localized) => localized[lang],
    }),
    [lang]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
