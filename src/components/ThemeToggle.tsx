import { useTheme } from '@/context/ThemeContext';
import { useLanguage } from '@/context/LanguageContext';
import { SunIcon, MoonIcon } from '@/components/icons';

export default function ThemeToggle({ dark = false }: { dark?: boolean }) {
  const { theme, toggleTheme } = useTheme();
  const { dict } = useLanguage();
  const label = theme === 'dark' ? dict.themeToggle.toLight : dict.themeToggle.toDark;

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={label}
      title={label}
      className={
        dark
          ? 'inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/25 text-white transition hover:border-caramel hover:text-caramel'
          : 'inline-flex h-9 w-9 items-center justify-center rounded-full border border-ink-900/15 text-ink-900 transition hover:border-coffee-600 hover:text-coffee-600 dark:border-white/20 dark:text-cream dark:hover:border-caramel dark:hover:text-caramel'
      }
    >
      {theme === 'dark' ? <SunIcon className="h-4 w-4" /> : <MoonIcon className="h-4 w-4" />}
    </button>
  );
}
