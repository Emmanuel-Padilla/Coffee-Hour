import { business } from '@/data/business';
import { useLanguage } from '@/context/LanguageContext';
import { PhoneIcon } from '@/components/icons';
import { trackEvent } from '@/lib/analytics';

/** Small, non-intrusive mobile-only affordance — stays clear of safe-area edges and never overlays primary content. */
export default function FloatingCallButton() {
  const { dict } = useLanguage();

  return (
    <a
      href={`tel:${business.phone.tel}`}
      onClick={() => trackEvent('click_phone', { location: 'floating-button' })}
      aria-label={dict.cta.callNow}
      className="fixed bottom-5 right-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-caramel text-[#17120e] shadow-2xl ring-4 ring-white/70 transition hover:scale-105 dark:ring-[#17120e]/70 lg:hidden"
      style={{ bottom: 'max(1.25rem, env(safe-area-inset-bottom))' }}
    >
      <PhoneIcon className="h-6 w-6" />
    </a>
  );
}
