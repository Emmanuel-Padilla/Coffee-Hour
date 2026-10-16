import { useEffect, useRef, useState } from 'react';
import { galleryPhotos } from '@/data/gallery';
import { useLanguage } from '@/context/LanguageContext';
import { resolveImage } from '@/lib/images';
import { ChevronDownIcon } from '@/components/icons';

const AUTOPLAY_MS = 5000;

export default function GalleryCarousel() {
  const { lang } = useLanguage();
  const trackRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [active, setActive] = useState(0);
  const pausedRef = useRef(false);

  const goTo = (index: number) => {
    const track = trackRef.current;
    const slide = slideRefs.current[index];
    if (!track || !slide) return;
    track.scrollTo({ left: slide.offsetLeft, behavior: 'smooth' });
  };

  // Track which slide is currently centered.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) {
          const idx = slideRefs.current.indexOf(visible.target as HTMLDivElement);
          if (idx !== -1) setActive(idx);
        }
      },
      { root: track, threshold: 0.6 }
    );
    slideRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Autoplay, paused while the user is interacting.
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const timer = setInterval(() => {
      if (pausedRef.current) return;
      goTo((active + 1) % galleryPhotos.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [active]);

  const pause = () => {
    pausedRef.current = true;
  };
  const resume = () => {
    pausedRef.current = false;
  };

  return (
    <div
      className="group relative overflow-hidden rounded-3xl shadow-2xl"
      onMouseEnter={pause}
      onMouseLeave={resume}
      onTouchStart={pause}
      onTouchEnd={() => setTimeout(resume, 3000)}
    >
      <div
        ref={trackRef}
        className="no-scrollbar flex snap-x snap-mandatory overflow-x-auto scroll-smooth"
      >
        {galleryPhotos.map((photo, i) => {
          const src = resolveImage(photo.file);
          return (
            <div
              key={photo.id}
              ref={(el) => {
                slideRefs.current[i] = el;
              }}
              className="relative aspect-[4/3] w-full shrink-0 snap-center sm:aspect-[16/9]"
            >
              {src && (
                <img
                  src={src}
                  alt={photo.alt[lang]}
                  loading={i === 0 ? 'eager' : 'lazy'}
                  decoding="async"
                  className="h-full w-full object-cover"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8">
                <p className="font-display text-xl font-semibold text-white sm:text-2xl">{photo.caption[lang]}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Arrows */}
      <button
        type="button"
        aria-label={lang === 'en' ? 'Previous photo' : 'Foto anterior'}
        onClick={() => goTo((active - 1 + galleryPhotos.length) % galleryPhotos.length)}
        className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-ink-900 shadow-lg transition lg:opacity-0 lg:group-hover:opacity-100"
      >
        <ChevronDownIcon className="h-5 w-5 rotate-90" />
      </button>
      <button
        type="button"
        aria-label={lang === 'en' ? 'Next photo' : 'Foto siguiente'}
        onClick={() => goTo((active + 1) % galleryPhotos.length)}
        className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-ink-900 shadow-lg transition lg:opacity-0 lg:group-hover:opacity-100"
      >
        <ChevronDownIcon className="h-5 w-5 -rotate-90" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
        {galleryPhotos.map((photo, i) => (
          <button
            key={photo.id}
            type="button"
            aria-label={`${i + 1}`}
            onClick={() => goTo(i)}
            className={`h-2 rounded-full transition-all ${i === active ? 'w-6 bg-white' : 'w-2 bg-white/50'}`}
          />
        ))}
      </div>
      <div className="pointer-events-none absolute right-4 top-4 hidden rounded-full bg-black/40 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm lg:block">
        {active + 1} / {galleryPhotos.length}
      </div>
    </div>
  );
}
