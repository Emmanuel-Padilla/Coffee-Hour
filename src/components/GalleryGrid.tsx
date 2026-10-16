import { useEffect, useMemo, useRef, useState } from 'react';
import { galleryPhotos, galleryFilters, type GalleryPhoto } from '@/data/gallery';
import { useLanguage } from '@/context/LanguageContext';
import { CloseIcon, ChevronDownIcon } from '@/components/icons';
import { resolveImage } from '@/lib/images';

export default function GalleryGrid() {
  const { dict, lang } = useLanguage();
  const [filter, setFilter] = useState<(typeof galleryFilters)[number]>('todos');
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const touchStartX = useRef<number | null>(null);

  const filtered: GalleryPhoto[] = useMemo(
    () => (filter === 'todos' ? galleryPhotos : galleryPhotos.filter((p) => p.category === filter)),
    [filter]
  );

  const active = activeIndex != null ? filtered[activeIndex] : null;

  const close = () => setActiveIndex(null);
  const next = () => setActiveIndex((i) => (i == null ? null : (i + 1) % filtered.length));
  const prev = () => setActiveIndex((i) => (i == null ? null : (i - 1 + filtered.length) % filtered.length));

  useEffect(() => {
    if (activeIndex == null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [activeIndex, filtered.length]);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {galleryFilters.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFilter(f)}
            className={`rounded-full px-4 py-2 text-sm font-medium ${
              filter === f
                ? 'bg-coffee-600 text-white'
                : 'border border-ink-900/15 text-ink-700 dark:border-white/15 dark:text-cream/70'
            }`}
          >
            {dict.gallery.filters[f]}
          </button>
        ))}
      </div>

      <div className="mt-6 columns-2 gap-3 sm:columns-3 [column-fill:_balance]">
        {filtered.map((photo, i) => {
          const src = resolveImage(photo.file);
          return (
            <button
              key={photo.id}
              type="button"
              onClick={() => setActiveIndex(i)}
              className={`group relative mb-3 block w-full overflow-hidden border border-ink-900/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-caramel dark:border-white/10 ${
                i % 7 === 0 ? 'rounded-t-[5rem]' : i % 5 === 0 ? 'rounded-br-[4rem]' : i % 4 === 0 ? 'rounded-tl-[3rem]' : ''
              }`}
              aria-label={photo.caption[lang]}
            >
              {src && (
                <img
                  src={src}
                  alt={photo.alt[lang]}
                  loading="lazy"
                  decoding="async"
                  className="w-full object-cover transition duration-700 group-hover:scale-[1.035]"
                />
              )}
              <span className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-black/80 to-transparent px-4 pb-4 pt-10 text-left font-display text-sm text-white transition-transform duration-300 group-hover:translate-y-0">
                {photo.caption[lang]}
              </span>
            </button>
          );
        })}
      </div>

      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.caption[lang]}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
          onTouchStart={(e) => (touchStartX.current = e.touches[0].clientX)}
          onTouchEnd={(e) => {
            if (touchStartX.current == null) return;
            const delta = e.changedTouches[0].clientX - touchStartX.current;
            if (delta > 50) prev();
            if (delta < -50) next();
            touchStartX.current = null;
          }}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Cerrar"
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
          >
            <CloseIcon className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={prev}
            aria-label="Anterior"
            className="absolute left-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 sm:left-4"
          >
            <ChevronDownIcon className="h-5 w-5 rotate-90" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Siguiente"
            className="absolute right-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 sm:right-4"
          >
            <ChevronDownIcon className="h-5 w-5 -rotate-90" />
          </button>

          <figure className="max-h-[85vh] max-w-3xl">
            <img
              src={resolveImage(active.file)}
              alt={active.alt[lang]}
              className="max-h-[75vh] w-full rounded-lg object-contain"
            />
            <figcaption className="mt-3 text-center text-sm text-white/80">{active.caption[lang]}</figcaption>
          </figure>
        </div>
      )}
    </div>
  );
}
