import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { searchIndex, menuCategories } from '@/data/menu';
import { useLanguage } from '@/context/LanguageContext';
import { useLocalizedPath } from '@/hooks/useLocalizedPath';
import { formatPrice } from '@/lib/format';
import { SearchIcon } from '@/components/icons';

function normalize(s: string) {
  return s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '');
}

export default function MenuSearch() {
  const { dict, lang } = useLanguage();
  const path = useLocalizedPath();
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<string>('all');

  const results = useMemo(() => {
    const q = normalize(query.trim());
    if (!q && category === 'all') return [];
    return searchIndex
      .filter((item) => (category === 'all' ? true : item.categorySlug === category))
      .filter((item) => {
        if (!q) return true;
        const haystack = normalize(`${item.name} ${item.note?.es ?? ''} ${item.note?.en ?? ''}`);
        return haystack.includes(q);
      })
      .slice(0, 30);
  }, [query, category]);

  const showResults = query.trim().length > 0 || category !== 'all';

  return (
    <div className="border-y border-ink-900/15 py-6 dark:border-white/15">
      <label htmlFor="menu-search" className="sr-only">
        {dict.common.search}
      </label>
      <div className="relative">
        <SearchIcon className="pointer-events-none absolute left-0 top-1/2 h-5 w-5 -translate-y-1/2 text-caramel" />
        <input
          id="menu-search"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={dict.common.searchPlaceholder}
          className="w-full border-0 border-b border-ink-900/20 bg-transparent py-4 pl-9 pr-4 font-display text-xl text-ink-900 placeholder:text-ink-700/45 focus:border-caramel focus:ring-0 dark:border-white/20 dark:text-cream dark:placeholder:text-cream/40 sm:text-2xl"
        />
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setCategory('all')}
          className={`rounded-full px-3 py-1.5 text-xs font-medium ${
            category === 'all'
              ? 'bg-coffee-600 text-white'
              : 'border border-ink-900/15 text-ink-700 dark:border-white/15 dark:text-cream/70'
          }`}
        >
          {dict.common.allCategories}
        </button>
        {menuCategories.map((cat) => (
          <button
            key={cat.slug}
            type="button"
            onClick={() => setCategory(cat.slug)}
            className={`rounded-full px-3 py-1.5 text-xs font-medium ${
              category === cat.slug
                ? 'bg-coffee-600 text-white'
                : 'border border-ink-900/15 text-ink-700 dark:border-white/15 dark:text-cream/70'
            }`}
          >
            {cat.shortName[lang]}
          </button>
        ))}
      </div>

      {showResults && (
        <div className="mt-4 max-h-96 overflow-y-auto">
          {results.length === 0 ? (
            <p className="py-4 text-sm text-ink-700 dark:text-cream/60">{dict.common.noResults}</p>
          ) : (
            <ul className="divide-y divide-ink-900/10 dark:divide-white/10">
              {results.map((item, i) => (
                <li key={`${item.categorySlug}-${item.name}-${i}`}>
                  <Link
                    to={path(`menu/${item.categorySlug}`)}
                    className="flex items-center justify-between gap-4 py-3 text-sm hover:text-coffee-600 dark:hover:text-caramel"
                  >
                    <span>
                      <span className="font-medium text-ink-900 dark:text-cream">{item.name}</span>
                      <span className="ml-2 text-xs text-ink-700/70 dark:text-cream/50">
                        {item.categoryName[lang]}
                      </span>
                    </span>
                    <span className="shrink-0 font-semibold tabular-nums text-coffee-600 dark:text-caramel">
                      {formatPrice(item.price, lang)}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
