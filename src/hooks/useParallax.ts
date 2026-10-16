import { useEffect, useRef } from 'react';

/**
 * Ties an element's transform to scroll position — the classic "image drifts slower/opposite
 * to scroll" effect. Respects prefers-reduced-motion (no-ops entirely) and only ever animates
 * transform (never layout properties), so it never triggers reflow.
 */
export function useParallax<T extends HTMLElement = HTMLDivElement>(strength = 40) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let frame = 0;
    const update = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      const centerDelta = rect.top + rect.height / 2 - vh / 2;
      const progress = centerDelta / vh;
      el.style.transform = `translate3d(0, ${(progress * strength).toFixed(2)}px, 0)`;
    };

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(frame);
    };
  }, [strength]);

  return ref;
}
